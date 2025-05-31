import * as THREE from 'three';
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { sizesStore } from './Utils/Store.js';

import App from './App.js';

export default class Camera {
    constructor() {

        this.transitionTarget = null;
        this.backtransitionTarget = null;
        


        this.app = new App();
        this.canvas = this.app.canvas;

        this.sizesStore = sizesStore;
        this.sizes = this.sizesStore.getState();

        this.setInstance();
        this.setControls();
        this.setResizeListener();
    }
    setTransitionTarget(pos, lookAt) {
  this.transitionTarget = {
    pos,
    lookAt
  };
}
setbacktransitionTarget (pos,lookAt){
  this.backtransitionTarget={
    pos,
    lookAt
  }

}


    setInstance() {
  // Define base character position and rotation
  this.initialCharacterPosition = new THREE.Vector3(0, 0, 0);
  this.initialCharacterRotation = new THREE.Quaternion(); // Identity quaternion

  // Calculate and store initial camera position
  this.initialCameraOffset = new THREE.Vector3(150, 140, 150);
  this.initialCameraOffset.applyQuaternion(this.initialCharacterRotation);
  this.initialCameraOffset.add(this.initialCharacterPosition);

  // Store a clone of the lookAt target
  this.initialLookAt = this.initialCharacterPosition.clone();

  // Now create the camera
  this.instance = new THREE.PerspectiveCamera(
    35,
    this.sizes.width / this.sizes.height,
    1,
    2000
  );

  this.instance.position.copy(this.initialCameraOffset);
}


    setControls() {
        this.controls = new OrbitControls(this.instance, this.canvas);
        this.controls.enableDamping = true;
    }

    setResizeListener() {
        this.sizesStore.subscribe((sizes) => {
            this.instance.aspect = sizes.width / sizes.height;
            this.instance.updateProjectionMatrix();
        });
    }

    loop() {
  this.controls.update();

  if (this.transitionTarget) {
    this.instance.position.lerp(this.transitionTarget.pos, 0.1);
    this.controls.target.lerp(this.transitionTarget.lookAt, 0.1);
    // this.instance.lookAt(this.controls.target);
    this.instance.up.set(0, 0, -1)

    // Stop the transition when close enough
    if (this.instance.position.distanceTo(this.transitionTarget.pos) < 0.5) {
      this.transitionTarget = null;
      this.controls.enableRotate = true;
      this.controls.enableZoom = true;
      this.controls.enablePan = true;
    }
  }
  if (this.backtransitionTarget){
    this.instance.position.lerp(this.backtransitionTarget.pos, 0.1);
    this.controls.target.lerp(this.backtransitionTarget.lookAt, 0.1);
    // this.instance.lookAt(this.controls.target);
    this.instance.up.set(0, 1, 0)
    

    // Stop the transition when close enough
    if (this.instance.position.distanceTo(this.backtransitionTarget.pos) < 0.5) {
      this.backtransitionTarget = null;
      this.controls.enableRotate = true;
      this.controls.enableZoom = true;
      this.controls.enablePan = true;

  }

}

}
}
