const AWS = require('aws-sdk');
var nodemailer = require('nodemailer');

const s3 = new AWS.S3({
    accessKeyId: 'AKIAIVTI2Q327BVV6E5Q',
    secretAccessKey: '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'
});

const uploadFileAndSaveUserData = async (file, req, res) => {
    const params = {
        Bucket: 'doubtuploadstudykernel', // pass your bucket name
        Key: file.originalname, // file will be saved as testBucket/contacts.csv
        Body: file.buffer
    };
    s3.upload(params, function(s3Err, data) {
                if (s3Err) throw s3Err;
                console.log('1233', data);
				res.json(data);
    });
  };

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'studykernel@gmail.com',
      pass: 'Arsenaltillidie'
    }
  });

    function sendmail() {
        var mailOptions = {
            from: 'studykernel@gmail.com',
            to: 'ggarsenal1@gmail.com',
            subject: 'Gaurav Gera is sending you mail',
            html: '<h1>You will start getting a link to the newly created doubt page for each question getting uploaded very soon.. Sit tight for now</h1>'
        };

        transporter.sendMail(mailOptions, function(error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    }

exports.postDoubtImage = async function(req, res, next) {
    // res.sendFile(path.join(__dirname, '../../../data/coursesTodo.json'));

    uploadFileAndSaveUserData(req.files[0], req, res);
    
    // sendmail('to', 'subject', 'body', '<h1>its Html</h1>', function (err, info) {
    //     if (err) {
    //         console.log("Error is " + err)
    //         return
    //     }
    //     console.log("Email sent. " + info)
    // });
}

exports.getUploadImage = function(req, res, next) {
    
}