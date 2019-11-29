var webdriver =  require('selenium-webdriver'),
    By = webdriver.By,
    until =  webdriver.until;
var React = require('react');
const sharp = require('sharp');

 function applyFilter(namePic, nameFiltr)
 {
    var driver = new webdriver.Builder().usingServer().withCapabilities({'browserName': 'chrome'}).build();
    driver.get('http://192.168.137.1:3000/');

    // загрузка фото
    var element = driver.findElement(By.id('imgr'))
     element.sendKeys(namePic)

     //element.sendKeys('C:\\Users\\Ekaterina\\Desktop\\ColorPhotoViewer2019-master\\src\\red.jpg')
    var button = driver.findElement(By.id("dg")).findElement(By.id(nameFiltr));
    button.click()

    var element = driver.findElement(By.id('shot'))
    element.click();
     driver.sleep(1000);

    // Screenshot
    //driver.takeScreenshot("out.png");
    driver.takeScreenshot().then(
        function (image, err) {
            require('fs').writeFile('out.png', image, 'base64', function (err) {
                console.log(err);
            });
        }
    );
     driver.executeScript("window.scrollTo(0, document.body.scrollWidth)");

    let originalImage = 'out.png';
    let outputImage = 'outcrop.png';
    sharp(originalImage)
         .resize({
             width: 828,
             height: 912,
             fit: sharp.fit.cover,
             position: 'left top',
         })
         .toBuffer()
         .then( data => {
             require('fs').writeFileSync(outputImage, data);
         })
         .catch( err => {
             console.log(err);
         });

     driver.quit()
}
applyFilter('C:\\Users\\Ekaterina\\Desktop\\ColorPhotoViewer2019-master\\src\\palitra1.png', 'amaro')
