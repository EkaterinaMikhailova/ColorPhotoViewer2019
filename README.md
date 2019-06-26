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
- Currently only one texture is supported in one filter 
- Only .png and .jpg formats are supported for image as input

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

### Install all node packages 
``` 
npm install 
``` 
After this command you will see node_module folder. 

## Command interface 

### Run application on the local host

```
npm run start
```

After this command you can open Chrome browser and enter url *localhost:3000*.

### Check project source syntax

```
npm run lint
```

You should see no warnings and no errors.

### Run project unit-tests

```
npm run test
```

You should see no errors, if all tests are passed.

### Build project doc
```
npm run doc
```

### Build project bundle to upload app on server
```
npm run build
```

## Similar projects 

http://insta-editor.com/editor.html 
https://www.fotor.com/ 

## Sources 

These are the source codes of some instagram filters for [iOs application](https://github.com/danielgindi/Instagram-Filters/tree..), for [Android application](https://github.com/yulu/Instagram_Filter/tree/master/..).
