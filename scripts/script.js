// Handles loading the events for <model-viewer>'s slotted progress bar
const modelViewer = document.querySelector("model-viewer");

window.switchSrc = (element, name) => {
  const base = "./assets/" + name;
  // mv['src'] = base + '.glb';
  // mv['poster'] = base + '.webp';
  // mv['ios-src'] = base + '.usdz';
  modelViewer.setAttribute("src",  base + '.glb');
  modelViewer.setAttribute("poster",  base + '.webp');
  modelViewer.setAttribute("ios-src",  base + '.usdz');
  
  const slides = document.querySelectorAll(".slide");
  slides.forEach((element) => {element.classList.remove("selected");});
  element.classList.add("selected");
};

document.querySelector(".slider").addEventListener('beforexrselect', (ev) => {
  // Keep slider interactions from affecting the XR scene.
  ev.preventDefault();
});

const onProgress = (event) => {
  const progressBar = event.target.querySelector('.progress-bar');
  const updatingBar = event.target.querySelector('.update-bar');

  updatingBar.style.width = `${event.detail.totalProgress * 100}%`;

  if (event.detail.totalProgress === 1) {
    progressBar.classList.add('hide');
  } else {
    progressBar.classList.remove('hide');
    // if (event.detail.totalProgress === 0) {
    //   event.target.querySelector('.center-pre-prompt').classList.add('hide');
    // }
  }
};
modelViewer.addEventListener('progress', onProgress);