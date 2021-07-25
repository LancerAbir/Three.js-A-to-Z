//TODO: ============  Create Renderer  =============
let renderer = new THREE.WebGLRenderer({
   canvas: document.getElementById("myCanvas"),
   antialias: true,
});
// Renderer Color (Background Color)
renderer.setClearColor(0x00ff00);
// Renderer Pixel Ratio
renderer.setPixelRatio(window.getComputedStyle);
// Renderer set Size
renderer.setSize(window.innerWidth, window.innerHeight);



//TODO: ============  Create Renderer  =============

