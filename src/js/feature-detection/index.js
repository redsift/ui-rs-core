import checkWebPFeature from './webp';

let FeatureDetection = {
  webp(feature, cb) {
    checkWebPFeature(feature, cb);
  }
}

export { FeatureDetection };
