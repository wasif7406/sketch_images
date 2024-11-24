const fs = require('fs');
const { Image } = require('image-js');

function convertImageToLineDrawing(img) {
  const kernel = [
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1]
  ];

  const imgGray = img.grey();

  const imgDilated = imgGray.dilate({ kernel });

  const imgDiff = imgDilated.subtract(imgGray);

  const contour = imgDiff.invert();

  return contour;
}


async function main() {
  const srcPath = 'main1.jpg';
  const destPath = 'output_main.jpg';
  const img = await Image.load(srcPath);
  const imgConverted = convertImageToLineDrawing(img);
  await imgConverted.save(destPath);
}

main();

