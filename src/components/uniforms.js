import * as THREE from 'three';

var loader = new THREE.TextureLoader();
loader.crossOrigin = '';
var uniforms = {};

class Uniforms{
  constructor(map) {
    this.map = map;
  }
  amaro() {
    uniforms = {
      inputImageTexture: {type:'t',value:this.map},
      inputImageTexture2: {type:'t',value:loader.load('resources/blackboard1024.png')},
      inputImageTexture3: {type:'t',value:loader.load('resources/overlayMap.png')},
      inputImageTexture4: {type:'t',value:loader.load('resources/amaroMap.png')}
    };
    return(uniforms);
  }
  normal() {
    uniforms = {inputImageTexture: {type:'t',value:this.map},
    };
    return(uniforms);
  }
  brannan() {
    uniforms = {
      inputImageTexture: {type:'t',value:this.map},
      inputImageTexture2: {type:'t',value:loader.load('resources/brannanProcess.png')},
      inputImageTexture3: {type:'t',value:loader.load('resources/brannanBlowout.png')},
      inputImageTexture4: {type:'t',value:loader.load('resources/brannanContrast.png')},
      inputImageTexture5: {type:'t',value:loader.load('resources/brannanLuma.png')},
      inputImageTexture6: {type:'t',value:loader.load('resources/brannanScreen.png')},
    };
    return(uniforms);
  }
  earlybird() {
    uniforms = {
      inputImageTexture: {type:'t',value:this.map},
      inputImageTexture2: {type:'t',value:loader.load('resources/earlyBirdCurves.png')},
      inputImageTexture3: {type:'t',value:loader.load('resources/earlybirdOverlayMap.png')},
      inputImageTexture4: {type:'t',value:loader.load('resources/vignetteMap.png')},
      inputImageTexture5: {type:'t',value:loader.load('resources/earlybirdBlowout.png')},
      inputImageTexture6: {type:'t',value:loader.load('resources/earlybirdMap.png')},
    };
    return(uniforms);
  }
  hefe() {
    uniforms = {
      inputImageTexture: {type:'t',value:this.map},
      inputImageTexture2: {type:'t',value:loader.load('resources/edgeBurn.png')},
      inputImageTexture3: {type:'t',value:loader.load('resources/hefeMap.png')},
      inputImageTexture4: {type:'t',value:loader.load('resources/hefeGradientMap.png')},
      inputImageTexture5: {type:'t',value:loader.load('resources/hefeSoftLight.png')},
      inputImageTexture6: {type:'t',value:loader.load('resources/hefeMetal.png')},
    };
    return(uniforms);
  }
  hudson() {
    uniforms = {
      inputImageTexture: {type:'t',value:this.map},
      inputImageTexture2: {type:'t',value:loader.load('resources/hudsonBackground.png')},
      inputImageTexture3: {type:'t',value:loader.load('resources/overlayMap.png')},
      inputImageTexture4: {type:'t',value:loader.load('resources/hudsonMap.png')},
    };
    return(uniforms);
  }
  inkwell() {
    uniforms = {
      inputImageTexture: {type:'t',value:this.map},
      inputImageTexture2: {type:'t',value:loader.load('resources/inkwellMap.png')},
    };
    return(uniforms);
  }
  lokofi() {
    uniforms = {
      inputImageTexture: {type:'t',value:this.map},
      inputImageTexture2: {type:'t',value:loader.load('resources/lomoMap.png')},
      inputImageTexture3: {type:'t',value:loader.load('resources/vignetteMap.png')},
    };
    return(uniforms);
  }
  lordkelvin() {
    uniforms = {
      inputImageTexture: {type:'t',value:this.map},
      inputImageTexture2: {type:'t',value:loader.load('resources/kelvinMap.png')},
    };
    return(uniforms);
  }
  rise() {
    uniforms = {
      inputImageTexture: {type:'t',value:this.map},
      inputImageTexture2: {type:'t',value:loader.load('resources/blackboard1024.png')},
      inputImageTexture3: {type:'t',value:loader.load('resources/overlayMap.png')},
      inputImageTexture4: {type:'t',value:loader.load('resources/riseMap.png')},
    };
    return(uniforms);
  }
  sierra() {
    uniforms = {
      inputImageTexture: {type:'t',value:this.map},
      inputImageTexture2: {type:'t',value:loader.load('resources/sierraVignette.png')},
      inputImageTexture3: {type:'t',value:loader.load('resources/overlayMap.png')},
      inputImageTexture4: {type:'t',value:loader.load('resources/sierraMap.png')},
    };
    return(uniforms);
  }
  toaster() {
    uniforms = {
      inputImageTexture: {type:'t',value:this.map},
      inputImageTexture2: {type:'t',value:loader.load('resources/toasterMetal.png')},
      inputImageTexture3: {type:'t',value:loader.load('resources/toasterSoftLight.png')},
      inputImageTexture4: {type:'t',value:loader.load('resources/toasterCurves.png')},
      inputImageTexture5: {type:'t',value:loader.load('resources/toasterOverlayMapWarm.png')},
      inputImageTexture6: {type:'t',value:loader.load('resources/toasterColorShift.png')},
    };
    return(uniforms);
  }
  valencia() {
    uniforms = {
      inputImageTexture: {type:'t',value:this.map},
      inputImageTexture2: {type:'t',value:loader.load('resources/valenciaMap.png')},
      inputImageTexture3: {type:'t',value:loader.load('resources/valenciaGradientMap.png')},
    };
    return(uniforms);
  }
  walden() {
    uniforms = {
      inputImageTexture: {type:'t',value:this.map},
      inputImageTexture2: {type:'t',value:loader.load('resources/waldenMap.png')},
      inputImageTexture3: {type:'t',value:loader.load('resources/vignetteMap.png')},
    };
    return(uniforms);
  }
  xproII() {
    uniforms = {
      inputImageTexture: {type:'t',value:this.map},
      inputImageTexture2: {type:'t',value:loader.load('resources/xproMap.png')},
      inputImageTexture3: {type:'t',value:loader.load('resources/vignetteMap.png')},
    };
    return(uniforms);
  }
}

export default Uniforms;
