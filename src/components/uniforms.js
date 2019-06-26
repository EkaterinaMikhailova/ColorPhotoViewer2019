import * as THREE from 'three'

var loader = new THREE.TextureLoader()
loader.crossOrigin = ''
var uniforms = {}

/**
 * This class provides textures for all filters.
 */
class Uniforms {
  constructor (map) {
    this.map = map
  }
  amaro () {
    uniforms = {
      inputImageTexture: { type: 't', value: this.map },
      inputImageTexture2: { type: 't', value: loader.load('resources/blackboard1024.png') },
      inputImageTexture3: { type: 't', value: loader.load('resources/overlayMap.png') },
      inputImageTexture4: { type: 't', value: loader.load('resources/amaroMap.png') },
      strength: { type: 'float', value: -0.3 }
    }
    return (uniforms)
  }
  normal () {
    uniforms = { inputImageTexture: { type: 't', value: this.map }
    }
    return (uniforms)
  }
  brannan () {
    uniforms = {
      inputImageTexture: { type: 't', value: this.map },
      inputImageTexture2: { type: 't', value: loader.load('resources/brannanProcess.png') },
      inputImageTexture3: { type: 't', value: loader.load('resources/brannanBlowout.png') },
      inputImageTexture4: { type: 't', value: loader.load('resources/brannanContrast.png') },
      inputImageTexture5: { type: 't', value: loader.load('resources/brannanLuma.png') },
      inputImageTexture6: { type: 't', value: loader.load('resources/brannanScreen.png') },
      strength: { type: 'float', value: -0.3 }
    }
    return (uniforms)
  }
  earlybird () {
    uniforms = {
      inputImageTexture: { type: 't', value: this.map },
      inputImageTexture2: { type: 't', value: loader.load('resources/earlyBirdCurves.png') },
      inputImageTexture3: { type: 't', value: loader.load('resources/earlybirdOverlayMap.png') },
      inputImageTexture4: { type: 't', value: loader.load('resources/vignetteMap.png') },
      inputImageTexture5: { type: 't', value: loader.load('resources/earlybirdBlowout.png') },
      inputImageTexture6: { type: 't', value: loader.load('resources/earlybirdMap.png') },
      strength: { type: 'float', value: -0.3 }
    }
    return (uniforms)
  }
  hefe () {
    uniforms = {
      inputImageTexture: { type: 't', value: this.map },
      inputImageTexture2: { type: 't', value: loader.load('resources/edgeBurn.png') },
      inputImageTexture3: { type: 't', value: loader.load('resources/hefeMap.png') },
      inputImageTexture4: { type: 't', value: loader.load('resources/hefeGradientMap.png') },
      inputImageTexture5: { type: 't', value: loader.load('resources/hefeSoftLight.png') },
      inputImageTexture6: { type: 't', value: loader.load('resources/hefeMetal.png') },
      strength: { type: 'float', value: -0.3 }
    }
    return (uniforms)
  }
  hudson () {
    uniforms = {
      inputImageTexture: { type: 't', value: this.map },
      inputImageTexture2: { type: 't', value: loader.load('resources/hudsonBackground.png') },
      inputImageTexture3: { type: 't', value: loader.load('resources/overlayMap.png') },
      inputImageTexture4: { type: 't', value: loader.load('resources/hudsonMap.png') },
      strength: { type: 'float', value: -0.3 }
    }
    return (uniforms)
  }
  inkwell () {
    uniforms = {
      inputImageTexture: { type: 't', value: this.map },
      inputImageTexture2: { type: 't', value: loader.load('resources/inkwellMap.png') },
      strength: { type: 'float', value: -0.3 }
    }
    return (uniforms)
  }
  lokofi () {
    uniforms = {
      inputImageTexture: { type: 't', value: this.map },
      inputImageTexture2: { type: 't', value: loader.load('resources/lomoMap.png') },
      inputImageTexture3: { type: 't', value: loader.load('resources/vignetteMap.png') },
      strength: { type: 'float', value: -0.3 }
    }
    return (uniforms)
  }
  lordkelvin () {
    uniforms = {
      inputImageTexture: { type: 't', value: this.map },
      inputImageTexture2: { type: 't', value: loader.load('resources/kelvinMap.png') },
      strength: { type: 'float', value: -0.3 }
    }
    return (uniforms)
  }
  rise () {
    uniforms = {
      inputImageTexture: { type: 't', value: this.map },
      inputImageTexture2: { type: 't', value: loader.load('resources/blackboard1024.png') },
      inputImageTexture3: { type: 't', value: loader.load('resources/overlayMap.png') },
      inputImageTexture4: { type: 't', value: loader.load('resources/riseMap.png') },
      strength: { type: 'float', value: -0.3 }
    }
    return (uniforms)
  }
  sierra () {
    uniforms = {
      inputImageTexture: { type: 't', value: this.map },
      inputImageTexture2: { type: 't', value: loader.load('resources/sierraVignette.png') },
      inputImageTexture3: { type: 't', value: loader.load('resources/overlayMap.png') },
      inputImageTexture4: { type: 't', value: loader.load('resources/sierraMap.png') },
      strength: { type: 'float', value: -0.3 }
    }
    return (uniforms)
  }
  toaster () {
    uniforms = {
      inputImageTexture: { type: 't', value: this.map },
      inputImageTexture2: { type: 't', value: loader.load('resources/toasterMetal.png') },
      inputImageTexture3: { type: 't', value: loader.load('resources/toasterSoftLight.png') },
      inputImageTexture4: { type: 't', value: loader.load('resources/toasterCurves.png') },
      inputImageTexture5: { type: 't', value: loader.load('resources/toasterOverlayMapWarm.png') },
      inputImageTexture6: { type: 't', value: loader.load('resources/toasterColorShift.png') },
      strength: { type: 'float', value: -0.3 }
    }
    return (uniforms)
  }
  valencia () {
    uniforms = {
      inputImageTexture: { type: 't', value: this.map },
      inputImageTexture2: { type: 't', value: loader.load('resources/valenciaMap.png') },
      inputImageTexture3: { type: 't', value: loader.load('resources/valenciaGradientMap.png') },
      strength: { type: 'float', value: -0.3 }
    }
    return (uniforms)
  }
  walden () {
    uniforms = {
      inputImageTexture: { type: 't', value: this.map },
      inputImageTexture2: { type: 't', value: loader.load('resources/waldenMap.png') },
      inputImageTexture3: { type: 't', value: loader.load('resources/vignetteMap.png') },
      strength: { type: 'float', value: -0.3 }
    }
    return (uniforms)
  }
  xproII () {
    uniforms = {
      inputImageTexture: { type: 't', value: this.map },
      inputImageTexture2: { type: 't', value: loader.load('resources/xproMap.png') },
      inputImageTexture3: { type: 't', value: loader.load('resources/vignetteMap.png') },
      strength: { type: 'float', value: -0.3 }
    }
    return (uniforms)
  }
}

export default Uniforms
