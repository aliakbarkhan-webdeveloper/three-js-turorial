import * as THREE from "./three.module.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  2,
  10
);
const geometry = new THREE.SphereGeometry(1, 5, 5,2,1.2);
const material = new THREE.MeshBasicMaterial({ color: "red",wireframe:true });
const cube = new THREE.Mesh(geometry, material);

scene.add(cube);
camera.position.z = 6;
// cube.position.x = 3;

const canvas = document.querySelector("#draw");
const renderer = new THREE.WebGLRenderer({ canvas: canvas });

renderer.setSize(window.innerWidth, window.innerHeight);

const clock = new THREE.Clock();
function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x = clock.getElapsedTime()*0.5;
  cube.rotation.y = clock.getElapsedTime()*0.5 ;
  renderer.render(scene, camera);
}

animate();
