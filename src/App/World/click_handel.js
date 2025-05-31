import assetStore from "../Utils/AssetStore.js";
import * as THREE from "three";
import App from "../App.js";

export default class clickhandal{
    constructor(){
      this.app = new App()  
      this.assetStore = assetStore.getState()
      this.camera = this.app.camera

      this.got_model = this.assetStore.loadedAssets.got_model.scene
        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();

        window.addEventListener('click', onClick, false);

        function onClick(event) {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, this.camera.instance);

  const myMesh = this.got_model.children[310]
  console.log(myMesh)

  const intersects = raycaster.intersectObject(myMesh, true); // or false if not a group

  if (intersects.length > 0) {
    console.log("myMesh was clicked!");
    // Optional action
  } else {
    console.log("myMesh was NOT clicked.");
  }
}
    }
}