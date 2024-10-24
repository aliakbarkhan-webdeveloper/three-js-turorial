import * as THREE from "./three.module.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  2,
  10
);

//Ambient Light
// const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
// scene.add(ambientLight);

//directional light Light

// const directionLight = new THREE.DirectionalLight(0xffffff, 1);
// directionLight.position.set(-1, 1, 1);
// scene.add(directionLight);

//Point Light

const pointLight = new THREE.PointLight(0xffffff, 1,10,2);
pointLight.position.set(1, 3, 5);
scene.add(pointLight);

const geometry = new THREE.CylinderGeometry(1, 1, 3, 5, 9);
// const material = new THREE.MeshBasicMaterial({ color: "red"});
const material = new THREE.MeshStandardMaterial({
  color: "red",
  wireframe: false,
});
console.log(material);

const cube = new THREE.Mesh(geometry, material);

scene.add(cube);
camera.position.z = 6;
// cube.position.x = 3;
// cube.scale.y = 1.2;
const canvas = document.querySelector("#draw");
const renderer = new THREE.WebGLRenderer({ canvas: canvas });

renderer.setSize(window.innerWidth, window.innerHeight);

const clock = new THREE.Clock();
function animate() {
  requestAnimationFrame(animate);
  // cube.rotation.x += 0.01;
  cube.rotation.y = clock.getElapsedTime() * 0.1;
  renderer.render(scene, camera);
}

animate();
