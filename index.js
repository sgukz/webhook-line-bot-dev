var jimp = require('jimp');
var fs = require('fs');
var text2png = require('text2png');
var textChannel = 'ห้องตรวจหู คอ จมูก\nคิวที่';
var queueNo = '101';
var fullnames = 'นายปัสธร หวานอารมย์';
var dateTime = 'วันที่นัด 31 กรกฎาคม 2561\nเวลานัดหมาย 09:00 - 09.30 น.';
var barcode = '123456789';
channel(textChannel);
fullName(fullnames);
dateAppointment(dateTime);
queueNumber(queueNo);
barcodesGenerate(barcode);
var images = [
  'final-images/background.png',
  'final-images/banner-1.png',
  'final-images/banner-2.png',
  'final-images/channel.png',
  'final-images/fullname.png',
  'final-images/dateTime.png',
  'final-images/comment.png',
  'final-images/queueNo.png',
  'final-images/barcodes.png'
];
//'final-images/queueAt.png',
var jimps = [];

for (var i = 0; i < images.length; i++) {
  jimps.push(jimp.read(images[i]));
}

Promise.all(jimps).then(function (data) {
  return Promise.all(jimps);
}).then(function (data) {
  data[0].composite(data[1], 200, 280);
  data[0].composite(data[2], 255, 350);
  data[0].composite(data[3], 30, 580);
  data[0].composite(data[4], 360, 670);
  data[0].composite(data[5], 360, 720);
  data[0].composite(data[6], 360, 820);
  data[0].composite(data[7], 30, 740);
  data[0].composite(data[8], 180, 450);
  data[0].write('images/final-image.png', function () {
    console.log("wrote the image");
  });
});

function channel(text) {
  fs.writeFileSync('final-images/channel.png',
    text2png(text, {
      font: '60px THSarabunNewBold',
      color: '#243b82',
      padding: 20,
      localFontPath: 'fonts/THSarabunNew Bold.ttf',
      localFontName: 'THSarabunNewBold'
    })
  );
}

function queueNumber(queue) {
  fs.writeFileSync('final-images/queueNo.png',
    text2png(queue, {
      font: '250px THSarabunNewBold',
      color: '#243b82',
      padding: 10,
      localFontPath: 'fonts/THSarabunNew Bold.ttf',
      localFontName: 'THSarabunNewBold'
    })
  );
}

function fullName(text) {
  fs.writeFileSync('final-images/fullname.png',
    text2png(text, {
      font: '40px THSarabunNewBold',
      color: '#243b82',
      textAlign: 'center',
      padding: 20,
      localFontPath: 'fonts/THSarabunNew Bold.ttf',
      localFontName: 'THSarabunNewBold'
    })
  );
}

function dateAppointment(datetime) {
  fs.writeFileSync('final-images/dateTime.png',
    text2png(datetime, {
      font: '40px THSarabunNew',
      color: '#243b82',
      padding: 20,
      localFontPath: 'fonts/THSarabunNew.ttf',
      localFontName: 'THSarabunNew'
    })
  );
}
function barcodesGenerate(text) {
  fs.writeFileSync('final-images/barcodes.png',
    text2png(text, {
      font: '120px code_39',
      padding: 10,
      bgColor:'white',
      textAlign: 'center',
      localFontPath: 'fonts/fre3of9x.ttf',
      localFontName: 'code_39'
    })
  );
}
