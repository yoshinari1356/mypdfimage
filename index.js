var PDFImage = require("pdf-image").PDFImage;

var pdfImage = new PDFImage("tmp/target.pdf");
pdfImage.convertFile().then(function (imagePaths) {
  // [ /tmp/slide-0.png, /tmp/slide-1.png ]
});
