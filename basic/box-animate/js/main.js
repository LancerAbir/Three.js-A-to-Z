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

// const camera = new THREE.OrthographicCamera(
//    window.innerWidth / -500,
//    window.innerWidth / 500,
//    window.innerHeight / 500,
//    window.innerHeight / -500,
//    1,
//    1000
// );

// Create Renderer
/*
camera er picture content hoy 
*/
const renderer = new THREE.WebGLRenderer();
// Renderer Color (Background Color)
renderer.setClearColor("#999999");
// Renderer Size
renderer.setSize(window.innerWidth, window.innerHeight);
// Create Renderer Element (page e thakar jonno)
document.body.appendChild(renderer.domElement);

// Responsive
window.addEventListener("resize", () => {
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
4. Add to Scene --> scene.add(mesh)
*/
const length = 12,
   width = 8;

const shape = new THREE.Shape();
shape.moveTo(0, 0);
shape.lineTo(0, width);
shape.lineTo(length, width);
shape.lineTo(length, 0);
shape.lineTo(0, 0);

const extrudeSettings = {
   steps: 2,
   depth: 16,
   bevelEnabled: true,
   bevelThickness: 5,
   bevelSize: 2,
   bevelOffset: -3,
   bevelSegments: 3,
};

const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
const material = new THREE.MeshLambertMaterial({
   color: 0xffcc00,
   wireframe: false,
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Change Camera Position
camera.position.z = 60;

// // Light
// const light = new THREE.PointLight(0xffffff, 1, 500);
// light.position.set(10, 0, 25);
// scene.add(light);

// Soft Light
const spotLight = new THREE.SpotLight(0xffffff);
spotLight.position.set(100, 1000, 100);

spotLight.castShadow = true;

spotLight.shadow.mapSize.width = 1024;
spotLight.shadow.mapSize.height = 1024;

spotLight.shadow.camera.near = 500;
spotLight.shadow.camera.far = 4000;
spotLight.shadow.camera.fov = 30;

scene.add(spotLight);

// Work Logic
const update = () => {
   // position
   mesh.position.x = -2;
   mesh.position.y = 2;
   mesh.position.z = 2;

   // Rotation Animation
   mesh.rotation.x += 0.01; //speed and x position
   mesh.rotation.y += 0.002; // y position moving
   mesh.rotation.z += 0.02; // z position moving

   // shape change
   // mesh.scale.x -= 0.01;
};

// Draw Scene
const render = () => {
   renderer.render(scene, camera);
};

// loop working
const GameLooping = () => {
   requestAnimationFrame(GameLooping);
   update();
   render();
};

GameLooping();
