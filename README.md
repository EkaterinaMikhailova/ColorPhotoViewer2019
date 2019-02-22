# Color Photo Editor 

![](https://cdn1.savepice.ru/uploads/2019/2/22/48c14a4678374c447adaec1dd1df2313-full.jpg) 

## Purpos 
Color Photo Editor is a project designed on ReactJS to demonstrate 2D effects on images. It implemented 14 basic Instagram filters, including *Sierra*, the latest one. 

### The project includes the following filters: 
- *Amaro* 
- *Brannan* 
- *Earlybird* 
- *Hefe* 
- *Hudson* 
- *Inkwell* 
- *Lomo* 
- *Myfair* 
- *Rise* 
- *Sierra* 
- *Toster* 
- *Valencia* 
- *Willow* 
- *XPro* 

### How to use the web application? 
1. In order to run the web application you must open a file named "index.html". 
You will see a window in the browser. 
2. You can choose one of two languages that the application supports: Russian and English. The choice of language must be made at the beginning of the work with the application. 
3. You can select already prepared images, as well as open an image from a local disk. 
4. By rotating the mouse wheel, you can zoom in / out the image (zoom in / zoom out function). 
5. It also supports the function of panning images (parallel transfer) with the mouse. 
6. After processing the image, you can save it to your device. 
7. The application runs on a mobile device and on most desktop browsers (ex. Google Chrome, Mozilla Firefox). 

## Limitations 

- Unable to upload a photo larger than 1080 x 1080 px 
- Currently only one texture is supported in one filter 
- Only png format for image as input is supported 

## Prerequisites 
### IDE 
Visual Studio Code 
### Debugger 
Extension "React Developer Tools" for Chrome(Firefox) or "printf" method. 
### DVCS 
GitHub Desktop 
### Download [NodeJS](https://nodejs.org/en/download/) 
Version not below than v.6.10.3 is required. 
After NodeJS installation please check that everything is installed correctly (for example, PATH ), using command: 
``` 
node —version 
``` 
Stdout should be v6.10.3 (or higher). 

### Install bower 
``` 
npm i -g bower 
``` 

### Install Gulp 
``` 
npm install -g gulp 
``` 

### Install all node packages 
``` 
npm install 
bower install 
``` 
After this command you will see node_module folder. 

## Command interface 

### Run & Debug 
``` 
gulp serve 
``` 
If the browser does not start, then you need to open it manually and type in the address bar 
``` 
localhost:9000 
``` 

### Verify coding standard with ESLint 
``` 
gulp lint: js> style_err.txt 
``` 
After running the command in the file style_err.txt will be a list of stylistic and semantic errors. 

### Running unit tests 
For unit testing, the [mocha] framework (https://mochajs.org/) is used. 
To run the tests run the command: 
``` 
gulp test 
``` 

### Building autodocumentation 
``` 
gulp docs 
``` 
After launch, the result will be in the folder docs/auto. 

### Building a project for putting it on the server 
``` 
gulp build 
``` 
The result will be in the folder dist. 

## Similar projects 

http://insta-editor.com/editor.html 
https://www.fotor.com/ 

## Sources 

These are the source codes of some instagram filters for [iOs application](https://github.com/danielgindi/Instagram-Filters/tree..), for [Android application](https://github.com/yulu/Instagram_Filter/tree/master/..).
