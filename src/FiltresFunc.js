var Jimp =  require('jimp');
var sizeOf = require('image-size');

function linerInterpol(x, y, a)
{
  return x * (1 - a) + y * a;
}
async function amaro(namePic, param)
{
  let pixelImage;
  await Jimp.read(namePic).then(image => {
    pixelImage = new Uint8Array(image.bitmap.data);
  });
  
  let inputImageTexture2;
  await Jimp.read('../public/resources/blackboard1024.png').then(image => {
    inputImageTexture2 = new Uint8Array(image.bitmap.data);
  });

  let inputImageTexture3;
  await Jimp.read('../public/resources/overlayMap.png').then(image => {
    inputImageTexture3 = new Uint8Array(image.bitmap.data);
  });

  let wInputImageTexture3, hInputImageTexture3;
  await sizeOf('../public/resources/overlayMap.png', function (err, dimensions) {
    wInputImageTexture3 = dimensions.width;
    hInputImageTexture3 =  dimensions.height;
  });

  let wInputTexture4, hInputTexture4
  await sizeOf('../public/resources/amaroMap.png', function (err, dimensions) {
    wInputTexture4 = dimensions.width;
    hInputTexture4 =  dimensions.height;
  });

  let inputImageTexture4;
  await Jimp.read('../public/resources/amaroMap.png').then(image => {
    inputImageTexture4 = new Uint8Array(image.bitmap.data);
  });

  let colorR, colorG, colorB;
  let mappedR, mappedG, mappedB;
  let texelR, texelG, texelB;
  let bbTexelR, bbTexelG, bbTexelB;

  let resultPixelImage = new Uint8Array(pixelImage.length);

  let idxR, idxG, idxB, idxA;

  for (let i = 0; i < pixelImage.length / 4; i++)
  {
    idxR = i * 4;
    colorR = pixelImage[idxR] / 255;
    texelR = pixelImage[idxR] / 255;

    bbTexelR = inputImageTexture2[idxR] / 255 ;
    idxG = i * 4 + 1;
    colorG = pixelImage[idxG] / 255;
    texelG = pixelImage[idxG] / 255;

    bbTexelG = inputImageTexture2[idxG] / 255;

    idxB = i * 4 + 2;
    colorB = pixelImage[idxB] / 255;
    texelB = pixelImage[idxB] / 255;

    bbTexelB = inputImageTexture2[idxB] / 255;

    let ind1 = (Math.round(bbTexelR * wInputImageTexture3) + wInputImageTexture3 * Math.round(texelR * hInputImageTexture3)) * 4
    texelR = inputImageTexture3[ind1] / 255;

    let ind2 = (Math.round(bbTexelG * wInputImageTexture3) + wInputImageTexture3 * Math.round(texelG * hInputImageTexture3)) * 4 + 1
    texelG = inputImageTexture3[ind2] / 255;

    let ind3 = (Math.round(bbTexelB * wInputImageTexture3) + wInputImageTexture3 * Math.round(texelB * hInputImageTexture3)) * 4 + 2
    texelB = inputImageTexture3[ind3] / 255;

    let ind4 = (Math.round(texelR * wInputTexture4) + wInputTexture4 * Math.round(0.16666 * hInputTexture4)) * 4;
    mappedR = inputImageTexture4[ind4] / 255;

    let ind5 = (Math.round(texelG * wInputTexture4) + wInputTexture4 * Math.round(0.5 * hInputTexture4)) * 4 + 1;
    mappedG = inputImageTexture4[ind5] / 255;

    let ind6 = (Math.round(texelB * wInputTexture4) + wInputTexture4 * Math.round(0.83333 * hInputTexture4)) * 4 + 2;
    mappedB = inputImageTexture4[ind6] / 255;

    idxR = i * 4;
    resultPixelImage[idxR] = linerInterpol(colorR, mappedR, param) * 255 ;

    idxG = i * 4 + 1;
    resultPixelImage[idxG] = linerInterpol(colorG, mappedG, param) * 255;

    idxB = i * 4 + 2;
    resultPixelImage[idxB] = linerInterpol(colorB, mappedB, param) * 255;

    resultPixelImage[idxA] = 1 * 255;
  }
  return resultPixelImage;
}

async function nashville(namePic, param)
{
  let pixelImage;
  await Jimp.read(namePic).then(image => {
    pixelImage = new Uint8Array(image.bitmap.data);
  });

  let wInputImageTexture2, hInputImageTexture2
  await sizeOf('../public/resources/nashvilleMap.png', function (err, dimensions) {
    wInputImageTexture2 = dimensions.width;
    hInputImageTexture2 =  dimensions.height;
  });

  let inputImageTexture2;
  await Jimp.read('../public/resources/nashvilleMap.png').then(image => {
    inputImageTexture2 = new Uint8Array(image.bitmap.data);
  });

  let colorR, colorG, colorB;
  let texelR, texelG, texelB;

  let resultPixelImage = new Uint8Array(pixelImage.length);

  for (let i = 0; i < pixelImage.length / 4; i++)
  {
    let idxR = i * 4;
    colorR = pixelImage[idxR] / 255;
    texelR = pixelImage[idxR] / 255;

    let  idxG = i * 4 + 1;
    colorG = pixelImage[idxG] / 255;
    texelG = pixelImage[idxG] / 255;

    let idxB = i * 4 + 2;
    colorB = pixelImage[idxB] / 255;
    texelB = pixelImage[idxB] / 255;

    let idxA = i * 4 + 3;

    let ind1 = (Math.round(texelR * wInputImageTexture2) + wInputImageTexture2 * Math.round(.16666 * hInputImageTexture2)) * 4
    texelR = inputImageTexture2[ind1] / 255;

    let ind2 = (Math.round(texelG * wInputImageTexture2) + wInputImageTexture2 * Math.round(.5 * hInputImageTexture2)) * 4 + 1
    texelG = inputImageTexture2[ind2] / 255;

    let ind3 = (Math.round(texelB * wInputImageTexture2) + wInputImageTexture2 * Math.round(.83333 * hInputImageTexture2)) * 4 + 2
    texelB = inputImageTexture2[ind3] / 255;

    idxR = i * 4;
    resultPixelImage[idxR] = linerInterpol(colorR, texelR, param) * 255 ;

    idxG = i * 4 + 1;
    resultPixelImage[idxG] = linerInterpol(colorG, texelG, param) * 255;

    idxB = i * 4 + 2;
    resultPixelImage[idxB] = linerInterpol(colorB, texelB, param) * 255;

    resultPixelImage[idxA] = 1 * 255;
  }
  return resultPixelImage;
}
// pixel = nashville('red.jpg', 1).then( (pixels) => {
//});

async function rise(namePic, param)
{
  let pixelImage;
  await Jimp.read(namePic).then(image => {
    pixelImage = new Uint8Array(image.bitmap.data);
  });

  let wInputImageTexture3, hInputImageTexture3
  await sizeOf('public/resources/overlayMap.png', function (err, dimensions) {
    wInputImageTexture3 = dimensions.width;
    hInputImageTexture3 =  dimensions.height;
  });

  let inputImageTexture3;
  await Jimp.read('../public/resources/overlayMap.png').then(image => {
    inputImageTexture3 = new Uint8Array(image.bitmap.data);
  });

  let wInputImageTexture4, hInputImageTexture4
  await sizeOf('../public/resources/riseMap.png', function (err, dimensions) {
    wInputImageTexture4 = dimensions.width;
    hInputImageTexture4 =  dimensions.height;
  });

  let inputImageTexture4;
  await Jimp.read('../public/resources/riseMap.png').then(image => {
    inputImageTexture4 = new Uint8Array(image.bitmap.data);
  });

  let inputImageTexture2;
  await Jimp.read('../public/resources/blackboard1024.png').then(image => {
    inputImageTexture2 = new Uint8Array(image.bitmap.data);
  });

  let colorR, colorG, colorB;
  let mappedR, mappedG, mappedB;
  let texelR, texelG, texelB;
  let bbTexelR, bbTexelG, bbTexelB;

  let resultPixelImage = new Uint8Array(pixelImage.length);

  let idxR, idxG, idxB, idxA;

  for (let i = 0; i < pixelImage.length / 4; i++)
  {
    idxR = i * 4;
    colorR = pixelImage[idxR] / 255;
    texelR = pixelImage[idxR] / 255;
    bbTexelR = inputImageTexture2[idxR] / 255 ;

    idxG = i * 4 + 1;
    colorG = pixelImage[idxG] / 255;
    texelG = pixelImage[idxG] / 255;
    bbTexelG = inputImageTexture2[idxG] / 255;

    idxB = i * 4 + 2;
    colorB = pixelImage[idxB] / 255;
    texelB = pixelImage[idxB] / 255;
    bbTexelB = inputImageTexture2[idxB] / 255;

    let ind1 = (Math.round(bbTexelR * wInputImageTexture3) + wInputImageTexture3 * Math.round(texelR * hInputImageTexture3)) * 4
    texelR = inputImageTexture3[ind1] / 255;

    let ind2 = (Math.round(bbTexelG * wInputImageTexture3) + wInputImageTexture3 * Math.round(texelG * hInputImageTexture3)) * 4 + 1
    texelG = inputImageTexture3[ind2] / 255;

    let ind3 = (Math.round(bbTexelB * wInputImageTexture3) + wInputImageTexture3 * Math.round(texelB * hInputImageTexture3)) * 4 + 2
    texelB = inputImageTexture3[ind3] / 255;

    let ind4 = (Math.round(texelR * wInputImageTexture4) + wInputImageTexture4 * Math.round(0.16666 * hInputImageTexture4)) * 4;
    mappedR = inputImageTexture4[ind4] / 255;

    let ind5 = (Math.round(texelG * wInputImageTexture4) + wInputImageTexture4 * Math.round(0.5 * hInputImageTexture4)) * 4 + 1;
    mappedG = inputImageTexture4[ind5] / 255;

    let ind6 = (Math.round(texelB * wInputImageTexture4) + wInputImageTexture4 * Math.round(0.83333 * hInputImageTexture4)) * 4 + 2;
    mappedB = inputImageTexture4[ind6] / 255;

    resultPixelImage[idxR] = linerInterpol(colorR, mappedR, param) * 255 ;

    resultPixelImage[idxG] = linerInterpol(colorG, mappedG, param) * 255;

    resultPixelImage[idxB] = linerInterpol(colorB, mappedB, param) * 255;

    resultPixelImage[idxA] = 1 * 255;
  }
  return resultPixelImage;
}
//    pixel = rise('red.jpg', 1).then( (pixels) => {
//    });

async function hudson(namePic, param)
{
  let pixelImage;
  await Jimp.read(namePic).then(image => {
    pixelImage = new Uint8Array(image.bitmap.data);
  });

  let wInputImageTexture3, hInputImageTexture3
  await sizeOf('../public/resources/overlayMap.png', function (err, dimensions) {
    wInputImageTexture3 = dimensions.width;
    hInputImageTexture3 =  dimensions.height;
  });

  let inputImageTexture3;
  await Jimp.read('../public/resources/overlayMap.png').then(image => {
    inputImageTexture3 = new Uint8Array(image.bitmap.data);
  });

  let wInputImageTexture4, hInputImageTexture4
  await sizeOf('../public/resources/hudsonMap.png', function (err, dimensions) {
    wInputImageTexture4 = dimensions.width;
    hInputImageTexture4 =  dimensions.height;
  });

  let inputImageTexture4;
  await Jimp.read('../public/resources/hudsonMap.png').then(image => {
    inputImageTexture4 = new Uint8Array(image.bitmap.data);
  });

  let inputImageTexture2;
  await Jimp.read('../public/resources/hudsonBackground.png').then(image => {
    inputImageTexture2 = new Uint8Array(image.bitmap.data);
  });

  let colorR, colorG, colorB;
  let mappedR, mappedG, mappedB;
  let texelR, texelG, texelB;
  let bbTexelR, bbTexelG, bbTexelB;

  let resultPixelImage = new Uint8Array(pixelImage.length);

  let idxR, idxG, idxB, idxA;

  for (let i = 0; i < pixelImage.length / 4; i++)
  {
    idxR = i * 4;
    colorR = pixelImage[idxR] / 255;
    texelR = pixelImage[idxR] / 255;
    bbTexelR = inputImageTexture2[idxR] / 255 ;

    idxG = i * 4 + 1;
    colorG = pixelImage[idxG] / 255;
    texelG = pixelImage[idxG] / 255;
    bbTexelG = inputImageTexture2[idxG] / 255;

    idxB = i * 4 + 2;
    colorB = pixelImage[idxB] / 255;
    texelB = pixelImage[idxB] / 255;
    bbTexelB = inputImageTexture2[idxB] / 255;

    let ind1 = (Math.round(bbTexelR * wInputImageTexture3) + wInputImageTexture3 * Math.round((1.0 - texelR )* hInputImageTexture3)) * 4
    texelR = inputImageTexture3[ind1] / 255;

    let ind2 = (Math.round(bbTexelG * wInputImageTexture3) + wInputImageTexture3 * Math.round((1.0 - texelG) * hInputImageTexture3)) * 4 + 1
    texelG = inputImageTexture3[ind2] / 255;

    let ind3 = (Math.round(bbTexelB * wInputImageTexture3) + wInputImageTexture3 * Math.round((1.0 - texelB) * hInputImageTexture3)) * 4 + 2
    texelB = inputImageTexture3[ind3] / 255;

    let ind4 = (Math.round(texelR * wInputImageTexture4) + wInputImageTexture4 * Math.round(0.83333 * hInputImageTexture4)) * 4;
    mappedR = inputImageTexture4[ind4] / 255;

    let ind5 = (Math.round(texelG * wInputImageTexture4) + wInputImageTexture4 * Math.round(0.5 * hInputImageTexture4)) * 4 + 1;
    mappedG = inputImageTexture4[ind5] / 255;

    let ind6 = (Math.round(texelB * wInputImageTexture4) + wInputImageTexture4 * Math.round(0.16666 * hInputImageTexture4)) * 4 + 2;
    mappedB = inputImageTexture4[ind6] / 255;

    resultPixelImage[idxR] = linerInterpol(colorR, mappedR, param) * 255 ;

    resultPixelImage[idxG] = linerInterpol(colorG, mappedG, param) * 255;

    resultPixelImage[idxB] = linerInterpol(colorB, mappedB, param) * 255;

    resultPixelImage[idxA] = 1 * 255;
    //console.log(i, resultPixelImage[idxR], resultPixelImage[idxG], resultPixelImage[idxB] )
  }
  return resultPixelImage;
}
//pixel = hudson('red.jpg', 0.3).then( (pixels) => {
//});

async function lordkelvin(namePic, param)
{
  let pixelImage;
  await Jimp.read(namePic).then(image => {
    pixelImage = new Uint8Array(image.bitmap.data);
  });
  let w, h
  await sizeOf(namePic, function (err, dimensions) {
    w = dimensions.width;
    h =  dimensions.height;
  });
  let wInputImageTexture2, hInputImageTexture2
  await sizeOf('../public/resources/kelvinMap.png', function (err, dimensions) {
    wInputImageTexture2 = dimensions.width;
    hInputImageTexture2 =  dimensions.height;
  });

  let inputImageTexture2;
  await Jimp.read('../public/resources/kelvinMap.png').then(image => {
    inputImageTexture2 = new Uint8Array(image.bitmap.data);
  });

  let colorR, colorG, colorB;
  let texelR, texelG, texelB;

  let resultPixelImage = new Uint8Array(pixelImage.length);

  let idxR, idxG, idxB, idxA;
  let lookupX, lookupY = 0.5;

  for (let i = 0; i < pixelImage.length / 4; i++)
  {
    idxR = i * 4;
    colorR = pixelImage[idxR] / 255;
    texelR = pixelImage[idxR] / 255;

    idxG = i * 4 + 1;
    colorG = pixelImage[idxG] / 255;
    texelG = pixelImage[idxG] / 255;

    idxB = i * 4 + 2;
    colorB = pixelImage[idxB] / 255;
    texelB = pixelImage[idxB] / 255;

    lookupX = texelR;
    let ind1 = (Math.round(lookupX * wInputImageTexture2) + wInputImageTexture2 * Math.floor(lookupY * hInputImageTexture2)) * 4
    texelR = inputImageTexture2[ind1] / 255;

    lookupX = texelG;
    let ind2 = (Math.round(lookupX * wInputImageTexture2) + wInputImageTexture2 * Math.floor(lookupY* hInputImageTexture2)) * 4 + 1
    texelG = inputImageTexture2[ind2] / 255;

    lookupX = texelB;
    let ind3 = (Math.round(lookupX * wInputImageTexture2) + wInputImageTexture2 * Math.floor(lookupY * hInputImageTexture2)) * 4 + 2
    texelB = inputImageTexture2[ind3] / 255;

    resultPixelImage[idxR] = linerInterpol(colorR, texelR, param) * 255 ;

    resultPixelImage[idxG] = linerInterpol(colorG, texelG, param) * 255;

    resultPixelImage[idxB] = linerInterpol(colorB, texelB, param) * 255;

    resultPixelImage[idxA] = 1 * 255;
  }
  return resultPixelImage;
}

// eslint-disable-next-line no-unused-vars,no-undef
/*lordkelvin('red.jpg', 1).then( (pixels) => {
  // eslint-disable-next-line no-undef
  console.log(pixels)
});*/
//module.exports = amaro, hudson, lordkelvin, nashville, rise;
module.exports =  {amaro, hudson, lordkelvin, nashville, rise}
