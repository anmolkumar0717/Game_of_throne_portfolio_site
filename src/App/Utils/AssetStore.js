import { createStore } from "zustand/vanilla";

const assetsToLoad = [
  {
    id:'got_model',
    path:'/models/got_model.glb',
    type: 'model' 
  },
  {
    id:'avatar',
    path:'/models/avatar.glb',
    type:'model'
  }
];

const assetStore = createStore((set) => ({
  assetsToLoad,
  loadedAssets: {},
  addLoadedAsset: (asset, id) =>
    set((state) => ({
      loadedAssets: {
        ...state.loadedAssets,
        [id]: asset,
      },
    })),
}));

export default assetStore;
