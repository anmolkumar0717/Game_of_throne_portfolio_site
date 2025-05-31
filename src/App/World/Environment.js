import * as THREE from "three";

import App from "../App.js";
import assetStore from "../Utils/AssetStore.js";
import { RectAreaLight } from "three";
import clickhandal from "./click_handel.js";

export default class Environment {
  constructor() {
    this.app = new App();
    this.scene = this.app.scene;
    this.camera = this.app.camera
    this.physics = this.app.world.physics;
    this.assetStore = assetStore.getState()
    this.got_model = this.assetStore.loadedAssets.got_model.scene
    console.log(this.got_model)

    this.loadEnvironment();
    this.loadModel();
  }

  loadEnvironment() {
    // const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    // this.scene.add(ambientLight);

    // this.directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    // this.directionalLight.position.set(1, 1, 1);
    // this.directionalLight.castShadow = true;
    // this.scene.add(this.directionalLight);
    
    // dragon light
    let x = -6.574069976806641
    let y = 18.72556495666504
    let z = -9.635074615478516

    const width = 2;
    const height = 2;
    const intensity = 5;

    const rectLight = new RectAreaLight( 0xFF6FDA, intensity+4,  width, height );
    rectLight.position.set(x,y+5,z)
    rectLight.rotation.x = 80

    
    this.scene.add(rectLight)


    

    x = 39.9138 
    z = 37.2714

    y = 16.4666 

    const rectLight1 = new RectAreaLight( 0xF9FF27, intensity,  width+4, height+1 );
    rectLight1.position.set(x,y,z)
    rectLight1.rotation.x = 80
    this.scene.add(rectLight1)



    x = 12.43
    y = 11.7745
    z = 20.6872 

    const rectLight2 = new RectAreaLight( 0xF9FF27, intensity,  width+12, height+4 );
    rectLight2.position.set(x,y+2,z)
    rectLight2.rotation.x = 80
    this.scene.add(rectLight2)



    x = 61.9437
    y = 16.7298 
    z = 7.67958

    const rectLight3 = new RectAreaLight( 0xFF0000, intensity ,  width+12, height+4 );
    rectLight3.position.set(x,y,z)
    rectLight3.rotation.x = 80
    this.scene.add(rectLight3)

 

    x = 63.5125
    y = 12.3072
    z = -2.47803

    const rectLight4 = new RectAreaLight( 0xFDFFFE, intensity,  width+12, height+4 );
    rectLight4.position.set(x,y+2,z)
    rectLight4.rotation.x = 80
    this.scene.add(rectLight4)



    x = 8.99151
    y = 32.4064
    z = -43.7117
    
    const rectLight5 = new RectAreaLight( 0xFDFFFE, intensity,  width+12, height+4 );
    rectLight5.position.set(x,y+2,z)
    rectLight5.rotation.x = 80
    this.scene.add(rectLight5)



    x = 8.45139
    z = -31.8637 
    y = 38.9862

    const rectLight6 = new RectAreaLight( 0xFDFFFE, intensity,  width+12, height+8 );
    rectLight6.position.set(x,y+2,z)
    rectLight6.rotation.x = 80
    this.scene.add(rectLight6)



    x = 10.0723
    z = -37.4676
    y = 24.7192 

    const rectLight7 = new RectAreaLight( 0xFDFFFE, intensity,  width+12, height+8 );
    rectLight7.position.set(x,y+2,z)
    rectLight7.rotation.x = 80
    this.scene.add(rectLight7)



    x = -1.70462 
    z = 37.269 
    y = 14.0171

    const rectLight8 = new RectAreaLight( 0xFDFFFE, intensity+0.5,  width+2, height+12 );
    rectLight8.position.set(x,y,z)
    rectLight8.rotation.x = 80
    this.scene.add(rectLight8)




    x = -18.2864
    y = 22.8938
    z = 37.269

    const rectLight9 = new RectAreaLight( 0xFDFFFE, intensity,  width+2, height+12 );
    rectLight9.position.set(x,y,z)
    rectLight9.rotation.x = 80
    this.scene.add(rectLight9)

    
    x = -40.7889
    y = 35.2166
    z = 40.6296 

    const rectLight10 = new RectAreaLight( 0xFDFFFE, intensity,  width+8, height+8);
    rectLight10.position.set(x,y,z)
    rectLight10.rotation.x = 80
    this.scene.add(rectLight10)



    x = -43.5169
    y = 31.4958 
    z = -5.06526

    const rectLight11 = new RectAreaLight( 0xFF4A3B, intensity,  width+8, height+8);
    rectLight11.position.set(x,y,z)
    rectLight11.rotation.x = 80
    this.scene.add(rectLight11)




    x = -33.9755
    y = 20.8478 
    z = -62.6101 

    const rectLight12 = new RectAreaLight( 0xFFFEE8, intensity,  width+8, height+8);
    rectLight12.position.set(x,y,z)
    rectLight12.rotation.x = 80
    this.scene.add(rectLight12)



    x = -54.9575
    y = 12.7185 
    z = -63.809

    const rectLight13 = new RectAreaLight( 0xFFFEE8, intensity,  width+4, height+12);
    rectLight13.position.set(x,y,z)
    rectLight13.rotation.x = 80
    this.scene.add(rectLight13)



    x = -12.9935
    y = 15.0398
    z = -65.2078 

    const rectLight14 = new RectAreaLight( 0xFFFEE8, intensity,  width+4, height+12);
    rectLight14.position.set(x,y,z)
    rectLight14.rotation.x = 80
    this.scene.add(rectLight14)

  }

  loadModel(){

    this.physics.add(this.got_model.children[329],"fixed", "cuboid")
    // this.physics.add(this.got_model.children[334],"fixed", "cuboid")
    addPhysicsToChildren(this.got_model.children[334], this.physics);
    this.physics.add(this.got_model.children[337],"fixed", "cuboid")
    
    // this.physics.add(this.got_model.children[238],"fixed", "cuboid")
    addPhysicsToChildren(this.got_model.children[238], this.physics);
    // this.physics.add(this.got_model.children[119],"fixed", "cuboid")
    addPhysicsToChildren(this.got_model.children[119], this.physics);
    // this.physics.add(this.got_model.children[180],"fixed", "cuboid")
    addPhysicsToChildren(this.got_model.children[180], this.physics);
    // this.physics.add(this.got_model.children[179],"fixed", "cuboid")
    addPhysicsToChildren(this.got_model.children[179], this.physics);
    // this.physics.add(this.got_model.children[326],"fixed", "cuboid")
    addPhysicsToChildren(this.got_model.children[326], this.physics);
    
    addPhysicsToChildren(this.got_model.children[340],this.physics)



    // Inside loadModel()
this.raycaster = new THREE.Raycaster();
this.mouse = new THREE.Vector2();

// Store class context
const camera = this.camera;
const got_model = this.got_model;
const raycaster = this.raycaster;
const mouse = this.mouse;

window.addEventListener("click", (event) => {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  // If your camera has no `.instance`, use `camera` directly
  raycaster.setFromCamera(mouse, camera.instance || camera);

  const projectMesh = got_model.children[175].children[4]; // Replace with a named mesh if preferred
  const aboutmeMesh = got_model.children[175].children[2];
  const pricingMesh = got_model.children[175].children[3];
  const learnmoreMesh = got_model.children[175].children[5];
  const rmcsMesh = got_model.children[333]
  const backMesh = got_model.children[334]
  const gotPortfolioMesh = got_model.children[177]
  const solarSystemMesh = got_model.children[178]



  
  if (!projectMesh) return;

  const intersects_project = raycaster.intersectObject(projectMesh, true);
  const intersects_pricing = raycaster.intersectObject(pricingMesh, true);
  const intersect_aboutme = raycaster.intersectObject(aboutmeMesh, true);
  const intersect_rmcsMesh = raycaster.intersectObject(rmcsMesh, true);
  const intersect_backMesh = raycaster.intersectObject(backMesh, true);
  const intersect_gotMesh = raycaster.intersectObject(gotPortfolioMesh, true);
  const intersect_solar = raycaster.intersectObject(solarSystemMesh, true);
  const intersect_learn = raycaster.intersectObject(learnmoreMesh, true); 

  

  if (intersects_project.length > 0) {
    const tablePos = new THREE.Vector3(-32.654, 15.018674850463867, -66);
      const cameraPos = new THREE.Vector3(tablePos.x, tablePos.y + 60, tablePos.z);
    
      this.camera.setTransitionTarget(cameraPos, tablePos);
      this.click = document.getElementById('click')
      this.click.play()
      this.transition = document.getElementById('transition')
      this.transition.play()
  }
  if (intersect_learn.length > 0){
    this.click = document.getElementById('click')
    this.click.play()
    window.open(
      'https://medium.com/@anmolkumar0717/️-building-my-3d-game-of-thrones-inspired-portfolio-site-22b7756ea5d0',
      'Learn More'
    )

  }
  if (intersects_pricing.length > 0){
    this.click = document.getElementById('click')
    this.click.play()
    window.open(
      'https://www.upwork.com/services/product/development-it-a-stunning-3d-portfolio-website-1902800077231684570?ref=fl_profile',
      'Pricing', 
      'width=800,height=600,resizable=yes,scrollbars=yes'
    )
  }
  if (intersect_aboutme.length > 0){
    this.click = document.getElementById('click')
    this.click.play()
    document.querySelector(".aboutme").classList.add('card-container')
      window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.card-container').classList.add('active');
  });
  }
  document.querySelector(".close_button").addEventListener('click',()=>{
    document.querySelector(".aboutme").classList.remove('card-container')
  })
  if (intersect_rmcsMesh.length > 0){
    this.click = document.getElementById('click')
    this.click.play()
    document.querySelector(".rmcs-mesh").classList.add('rmcs-container')
        document.querySelector(".solar").classList.remove('solar-container')
        document.querySelector(".got").classList.remove('got-container')
    
  }
      document.querySelector(".close_button1").addEventListener('click',()=>{
    document.querySelector(".rmcs-mesh").classList.remove('rmcs-container')
  })
  document.querySelector(".Visit").addEventListener('click',()=>{
    window.open(
      'https://rmcs-amazing-game.vercel.app/',
      'Rmcs-An incredible game'
    )

  })

  if (intersect_backMesh.length > 0){
    this.click = document.getElementById('click')
    this.click.play()
          this.transition = document.getElementById('transition')
      this.transition.play()
            document.querySelector(".solar").classList.remove('solar-container')
        document.querySelector(".got").classList.remove('got-container')
        document.querySelector(".rmcs-mesh").classList.remove('rmcs-container')

camera.setbacktransitionTarget(
  camera.initialCameraOffset.clone(),
  camera.initialLookAt.clone()
);
  }if (intersect_gotMesh.length > 0){
    this.click = document.getElementById('click')
    this.click.play()
    document.querySelector(".solar").classList.remove('solar-container')
    document.querySelector(".rmcs-mesh").classList.remove('rmcs-container')
    document.querySelector(".got").classList.add('got-container')
  }
  document.querySelector(".close_button3").addEventListener('click',()=>{
    document.querySelector(".got").classList.remove('got-container')
  })

    document.querySelector(".Visit-got").addEventListener('click',()=>{
    document.querySelector(".got").classList.remove('got-container')
    camera.setbacktransitionTarget(
  camera.initialCameraOffset.clone(),
  camera.initialLookAt.clone()
);

  })

  if (intersect_solar.length > 0){
    this.click = document.getElementById('click')
    this.click.play()
    document.querySelector(".rmcs-mesh").classList.remove('rmcs-container')
    document.querySelector(".got").classList.remove('got-container')
    document.querySelector(".solar").classList.add('solar-container')
  }
  document.querySelector(".close_button4").addEventListener('click',()=>{
    document.querySelector(".solar").classList.remove('solar-container')
  })

   document.querySelector(".Visit-solar").addEventListener('click',()=>{
    window.open(
      'https://planet-threejs.vercel.app/',
      'Solar System'
    )
   })



  
  
  


  

});








    this.scene.add(this.got_model)
    
    

  }



}

// function addDynamicPhysicsToChildren(object, physics) {
//   object.children.forEach((child) => {
//       physics.add(child, "dynamic", "cuboid"); // Add physics to the current child
//       if (child.children && child.children.length > 0) {
//           // Recursively call the function for the child
//           addPhysicsToChildren(child, physics);
//       }
//   });
// }

function addPhysicsToChildren(object, physics) {
  object.children.forEach((child) => {
      // Ensure the child has geometry and bounding box
      if (child.isMesh && child.geometry) {
          child.geometry.computeBoundingBox(); // Compute bounding box if needed
          physics.add(child, "fixed", "cuboid"); // Add physics to the mesh
      }

      // Recursively process the child if it has children
      if (child.children && child.children.length > 0) {
          addPhysicsToChildren(child, physics);
      }
  });
}



