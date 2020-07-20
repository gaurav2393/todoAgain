const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
var Users = require('./usersModel');
var HttpError = require('../httpError/httpErrorModel');
const jwt = require('jsonwebtoken');

exports.params = async function(req, res, next) {
  let existingUser;
  const { loginEmail } = req.body;
  try {
    existingUser = await Users.findOne({ email: loginEmail });
  } catch (err) {
      const error = new HttpError(
        'Signing up failed, please try again later.',
        500
      );
      return next(error);
  }

  if (!existingUser) {
    const error = new HttpError(
      'Invalid credentials, could not log you in.',
      403
    );
    return next(error);
  }

  req.existingUser = existingUser;
  next();
}

exports.getUserData = async function() {

}

exports.postUserData = async function(req, res, next) {
  let isValidPassword = false;
  const { loginPassword } = req.body;

  try {
    isValidPassword = await bcrypt.compare(loginPassword, req.existingUser.password);
  } catch (err) {
    const error = new HttpError(
      'Could not log you in, please check your credentials and try again.',
      500
    );
    return next(error);
  }

  if (!isValidPassword) {
    const error = new HttpError(
      'Invalid credentials, could not log you in.',
      403
    );
    return next(error);
  }

  let token;
  try {
    token = jwt.sign(
      { userId: req.existingUser.name, email: req.existingUser.email, userType: req.existingUser.userType },
      'supersecret_dont_share',
      { expiresIn: '1h' }
    );
  } catch (err) {
    const error = new HttpError(
      'Logging in failed, please try again later.',
      500
    );
    return next(error);
  }

  res.json({
    userId: req.existingUser.name,
    email: req.existingUser.email,
    token: token,
    userType: req.existingUser.userType
  });
}

exports.createUser = async function(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next(
        new HttpError('Invalid inputs passed, please check your data.', 422)
        );
    }

    const { loginEmail, loginPassword, phoneNumber, name } = req.body;

    let existingUser;
    try {
        existingUser = await Users.findOne({ email: loginEmail });
    } catch (err) {
        const error = new HttpError(
        'Signing up failed, please try again later.',
        500
        );
        return next(error);
    }

    if (existingUser) {
        const error = new HttpError(
            'User exists already, please login instead.',
            422
        );
        return next(error);
    }

    let hashedPassword;
    try {
      hashedPassword = await bcrypt.hash(loginPassword, 12);
    } catch (err) {
      const error = new HttpError(
        'Could not create user, please try again.',
        500
      );
      return next(error);
    }

    const createdUser = new Users({
        name,
        userType: 'basic',
        email: loginEmail,
        password: hashedPassword,
        phoneNumber
    });

    try {
        const createdUserReturned = await createdUser.save();
        token = jwt.sign(
          { userId: createdUserReturned.name, email: createdUserReturned.email, userType: createdUserReturned.userType },
          'supersecret_dont_share',
          { expiresIn: '1h' }
        );
        res.status(201)
        .json({
          userId: createdUserReturned.name,
          email: createdUserReturned.email,
          token: token,
          userType: createdUserReturned.userType})
      } catch (err) {
        const error = new HttpError(
          'Signing up failed, please try again later.',
          500
        );
        return next(error);
      }
}
