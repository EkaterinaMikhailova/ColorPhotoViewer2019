import React from 'react';
import * as THREE from 'three';
import OrbitControls from 'three-orbitcontrols';
import { injectIntl, defineMessages } from "react-intl";
import Uniforms from './uniforms'

///////transfer///////
const messages = defineMessages({
  load: {
    id: 'app.load',
    defaultMessage: 'Loading image...'
  },
})

///////вызов функции по имени///////
function executeFunctionByName(functionName, context /*, args */) {
  var args = Array.prototype.slice.call(arguments, 2);
  var namespaces = functionName.split(".");
  var func = namespaces.pop();
  for(var i = 0; i < namespaces.length; i++) {
    context = context[namespaces[i]];
  }
  return context[func].apply(context, args);
}

///////scrolling functions///////
function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
    e.preventDefault();
  e.returnValue = false;  
}
function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}
function disableScroll() {
  if (window.addEventListener) // older FF
    window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
}
function enableScroll() {
  if (window.removeEventListener)
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.onmousewheel = document.onmousewheel = null; 
  window.onwheel = null; 
  window.ontouchmove = null;  
  document.onkeydown = null;  
}

///////vars///////
var e, img, filter, iwh, bbox, preve, prevf, width, height, renderer, scene, 
  camera, loader, geometry, material, mesh, ambientLight, controls, container,
  x1, x1a, pos_x, x2, x2a, y1, y1a, pos_y, y2, y2a,
  keys = {37: 1, 38: 1, 39: 1, 40: 1};

window.onload = function(){
  ///////container///////
  container = document.getElementById('imgPreview');
  ///////sizes///////
  width = window.innerWidth * 0.8; 
  height = window.innerHeight * 0.8; 
  ///////renderer///////
  renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize( width, height );
  ///////scene///////
  scene = new THREE.Scene();
  ///////texture loader///////
  loader = new THREE.TextureLoader();
  loader.crossOrigin = '';
  ///////light///////
  ambientLight = new THREE.AmbientLight(0x1a1a1a);
  scene.add(ambientLight);
  ///////camera///////
  camera = new THREE.OrthographicCamera( width / - 2, width / 2, height / 2, height / - 2, 1, 1000 );
  camera.position.set(0, 0, 1000); 
  ///////image///////
  img = new Image(); 
  img.src = e;
  img.onload = () => {
    if(container) container.style.textIndent = '-999px';//убираем текст загрузки
  }
  preve = e;//сохраняем текущую картинку
  iwh = img.height / img.width;
  ///////geometry///////
  geometry = new THREE.PlaneGeometry(width, width * iwh, 15);
  ///////material///////
  material = new THREE.MeshBasicMaterial();
  material.map = loader.load(img.src);
  ///////filter///////
  prevf = filter;
  var uniforms = executeFunctionByName(filter, new Uniforms(material.map), '');
  var shader = new THREE.ShaderMaterial({uniforms: uniforms,
    vertexShader:document.getElementById("vertex").innerHTML,
    fragmentShader:document.getElementById(filter).innerHTML});
  ///////mesh///////  
  mesh = new THREE.Mesh(geometry , shader); 
  scene.add(mesh);
  ///////box///////  
  bbox = new THREE.Box3().setFromObject(mesh);
  ///////controls///////  
  controls = new OrbitControls( camera) ;
  controls.enableRotate = false;
  controls.enableZoom = false;
  controls.enablePan= false;
  controls.screenSpacePanning = true;
  controls.mouseButtons = { RIGHT: THREE.MOUSE.LEFT, MIDDLE: THREE.MOUSE.MIDDLE, LEFT: THREE.MOUSE.RIGHT }; 
  controls.addEventListener( 'change', animate );
  controls.minZoom = 1;
  controls.maxZoom = 5;
  ///////scrolling///////
  if(container) {
    container.appendChild( renderer.domElement );
    container.addEventListener("mouseover", function(){
      disableScroll();
      controls.enableZoom = true;
      controls.enablePan = true;
    })
    container.addEventListener("mouseout", function(){
      enableScroll();
      controls.enableZoom = false;
      controls.enablePan= false;
    })
  }
  ///////resize///////
  window.addEventListener( 'resize', function () {
    width = window.innerWidth * 0.8; 
    height = window.innerHeight * 0.8; 
    geometry.dispose();
    geometry = new THREE.PlaneGeometry(width, width * iwh, 15);
    camera.left= width / - 2;
    camera.right= width / 2;
    camera.top= height / 2;
    camera.bottom= height / - 2;
    camera.updateProjectionMatrix();
    mesh.geometry = geometry;
    bbox.setFromObject(mesh);
    scene.add(mesh);
    renderer.setSize( width, height ); 
  }, false );
  ///////controls animate/////// 
  function animationLoop() {
    requestAnimationFrame(animationLoop);
    x1 = camera.position.x + (camera.left / camera.zoom);
    x1a = Math.max(x1, bbox.min.x);
    pos_x = x1a - (camera.left / camera.zoom);
    
    x2 = pos_x + (camera.right / camera.zoom);
    x2a = Math.min(x2, bbox.max.x);
    pos_x = x2a - (camera.right / camera.zoom);

    y1 = camera.position.y + (camera.bottom / camera.zoom);
    y1a = Math.max(y1, bbox.min.y);
    pos_y = y1a - (camera.bottom / camera.zoom);
    
    y2 = pos_y + (camera.top / camera.zoom);
    y2a = Math.min(y2, bbox.max.y);
    pos_y = y2a - (camera.top / camera.zoom);

    camera.position.set(pos_x, pos_y, camera.position.z);
    camera.lookAt(pos_x, pos_y, controls.target.z);
    controls.target.set(pos_x, pos_y, 0);
    controls.update();
  }
  animationLoop();
  ///////animate/////// 
  function animate() {
    requestAnimationFrame(animate);
    ///////если изменен фильтр/////// 
    if(prevf.localeCompare(filter)){ 
      prevf = filter;
      uniforms = executeFunctionByName(filter, new Uniforms(material.map), '');
      mesh.material.dispose();
      mesh.material = new THREE.ShaderMaterial({uniforms: uniforms,
        vertexShader:document.getElementById("vertex").innerHTML,
        fragmentShader:document.getElementById(filter).innerHTML}); 
      scene.add(mesh); 
      bbox.setFromObject(mesh);
    }
    ///////если изменена картинка/////// 
    if(preve.localeCompare(e)){ 
      if(container) container.style.textIndent = '0px';
      img.src = e;
      preve = e;
      img.onload = () => {
        if(container) container.style.textIndent = '-999px';
        iwh = img.height / img.width;
        geometry.dispose();
        geometry = new THREE.PlaneGeometry(width, width * iwh, 15);
        material.map = loader.load(img.src);
        uniforms = executeFunctionByName(filter, new Uniforms(material.map), '');
        mesh.geometry = geometry;
        mesh.material = new THREE.ShaderMaterial({uniforms: uniforms,
          vertexShader:document.getElementById("vertex").innerHTML,//!!!!!!!
          fragmentShader:document.getElementById(filter).innerHTML});
        scene.add(mesh);
        animationLoop();
        controls.reset();
        bbox.setFromObject(mesh);
      }
    }
    renderer.render(scene, camera);
  }
  animate();
} 

class Photo extends React.Component{
  constructor(){
    super();
    window.m_url = this;
  }
  render(){
    const {intl:{formatMessage}} = this.props;
    if(this.props.imagePreviewUrl){ 
      e =this.props.imagePreviewUrl;
    }
    else if (this.props.name){
      e =this.props.name;
    }
    filter = this.props.filter;
    return(<div id="imgPreview"><p>{formatMessage(messages.load)}</p></div>);
  }
}

export default injectIntl(Photo);