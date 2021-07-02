// Create Scene
const scene = new THREE.Scene();

// camera add
/*
fov (Float) — Camera frustum vertical field of view.
aspect (Float) — Camera frustum aspect ratio. 
near (Float) — Camera frustum near plane.
far (Float) — Camera frustum far plane.
*/
const camera = new THREE.PerspectiveCamera(
   45,
   window.innerWidth / window.innerHeight,
   1,
   1000
);

// Create Renderer
/*
camera er picture content hoy 
*/
const renderer = new THREE.WebGLRenderer();
// Renderer Size
renderer.setSize(window.innerWidth, window.innerHeight);
// Create Renderer Element (page e thakar jonno)
document.body.appendChild(renderer.domElement);

// Responsive
window.addEventListener("resize", function () {
   const width = window.innerWidth;
   const height = window.innerHeight;
   renderer.setSize(width, height);
   camera.aspect = width / height;
   camera.updateProjectionMatrix();
});

// control with mouse
/**
 * 1. add file OrbitControls
 */
const mouseControl = new THREE.OrbitControls(camera, renderer.domElement);

// Create Shape ---> BoxGeometry
/*
1. Create Shape --> BoxGeometry("width", "height", "depth")
2. Color --> MeshBasicMaterial( {color: 0x00ff00} )
3. Create Cube --> Mesh( geometry, material )
4. Add to Scene --> scene.add(cube)
*/
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
   color: "red",
   wireframe: false,
});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Change Camera Position
camera.position.z = 3;

// Work Logic
const update = function () {
   // rotation
   cube.rotation.x += 0.01;
   cube.rotation.y += 0.002;
};

// Draw Scene
const render = function () {
   renderer.render(scene, camera);
};

// loop working
const GameLooping = function () {
   requestAnimationFrame(GameLooping);
   update();
   render();
};

GameLooping();
