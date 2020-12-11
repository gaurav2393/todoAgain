const AWS = require('aws-sdk');
var nodemailer = require('nodemailer');

const s3 = new AWS.S3({
    accessKeyId: 'AKIAJZXYO4LRV2FPE3NA',
    secretAccessKey: '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'
});

const uploadFileAndSaveUserData = async (file, req, res) => {
    try {
        const params = {
            Bucket: 'doubtuploadstudykernel', // pass your bucket name
            Key: file.originalname, // file will be saved as testBucket/contacts.csv
            Body: file.buffer
        };
        s3.upload(params, function(s3Err, data) {
            try {
                if (s3Err) throw s3Err;
                res.json(data);
            } catch (error) {
                console.log('uploadFileAndSaveUserData crashed', error);
            }
        });
    } catch (error) {
        console.log('uploadFileAndSaveUserData crashed', error);
    }
};

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'studykernel@gmail.com',
        pass: 'Arsenaltillidie'
    }
});

function sendmail() {
    try {
        var mailOptions = {
            from: 'studykernel@gmail.com',
            to: 'ggarsenal1@gmail.com',
            subject: 'Gaurav Gera is sending you mail',
            html: '<h1>You will start getting a link to the newly created doubt page for each question getting uploaded very soon.. Sit tight for now</h1>'
        };

        transporter.sendMail(mailOptions, function(error, info) {
            try {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            } catch (error) {
                console.log('send mail upload doubt image controller', error);
            }
        });
    } catch (error) {
        console.log('upload doubt image controller sendMail crashed', error);
    }
}

exports.postDoubtImage = async function(req, res, next) {
    try {
        // res.sendFile(path.join(__dirname, '../../../data/coursesTodo.json'));

        uploadFileAndSaveUserData(req.files[0], req, res);
        
        // sendmail('to', 'subject', 'body', '<h1>its Html</h1>', function (err, info) {
        //     if (err) {
        //         console.log("Error is " + err)
        //         return
        //     }
        //     console.log("Email sent. " + info)
        // });
    } catch (error) {
        console.log('upload doubt image controller postDoubtImage crashed', error);
    }
}

exports.getUploadImage = function(req, res, next) {
    
}