import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import vertexShader from "./shader/vertexShader";
import fragmentShader from "./shader/fragmentShader";

let uniforms;
let current_no = 0;
let past = 0;

/* 文字配列 */
const c_non =
  [
    0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
    0, 0, 0, 0, 0
  ];
const c_0 =
  [
    0, 1, 1, 1, 0,
    1, 0, 0, 0, 1,
    1, 0, 0, 1, 1,
    1, 0, 1, 0, 1,
    1, 1, 0, 0, 1,
    1, 0, 0, 0, 1,
    0, 1, 1, 1, 0
  ];
const c_1 =
  [
    0, 0, 1, 0, 0,
    0, 1, 1, 0, 0,
    0, 0, 1, 0, 0,
    0, 0, 1, 0, 0,
    0, 0, 1, 0, 0,
    0, 0, 1, 0, 0,
    0, 1, 1, 1, 0
  ];
const c_2 =
  [
    0, 1, 1, 1, 0,
    1, 0, 0, 0, 1,
    0, 0, 0, 0, 1,
    0, 0, 0, 1, 0,
    0, 0, 1, 0, 0,
    0, 1, 0, 0, 0,
    1, 1, 1, 1, 1
  ];
const c_3 =
  [
    1, 1, 1, 1, 1,
    0, 0, 0, 1, 0,
    0, 0, 1, 0, 0,
    0, 0, 0, 1, 0,
    0, 0, 0, 0, 1,
    1, 0, 0, 0, 1,
    0, 1, 1, 1, 0
  ];
const c_4 =
  [
    0, 0, 0, 1, 0,
    0, 0, 1, 1, 0,
    0, 1, 0, 1, 0,
    1, 0, 0, 1, 0,
    1, 1, 1, 1, 1,
    0, 0, 0, 1, 0,
    0, 0, 0, 1, 0
  ];
const c_5 =
  [
    1, 1, 1, 1, 1,
    1, 0, 0, 0, 0,
    1, 1, 1, 1, 0,
    0, 0, 0, 0, 1,
    0, 0, 0, 0, 1,
    1, 0, 0, 0, 1,
    0, 1, 1, 1, 0
  ];
const c_6 =
  [
    0, 0, 1, 1, 0,
    0, 1, 0, 0, 0,
    1, 0, 0, 0, 0,
    1, 1, 1, 1, 0,
    1, 0, 0, 0, 1,
    1, 0, 0, 0, 1,
    0, 1, 1, 1, 0
  ];
const c_7 =
  [
    1, 1, 1, 1, 1,
    0, 0, 0, 0, 1,
    0, 0, 0, 1, 0,
    0, 0, 1, 0, 0,
    0, 0, 1, 0, 0,
    0, 0, 1, 0, 0,
    0, 0, 1, 0, 0
  ];
const c_8 =
  [
    0, 1, 1, 1, 0,
    1, 0, 0, 0, 1,
    1, 0, 0, 0, 1,
    0, 1, 1, 1, 0,
    1, 0, 0, 0, 1,
    1, 0, 0, 0, 1,
    0, 1, 1, 1, 0
  ];
const c_9 =
  [
    0, 1, 1, 1, 0,
    1, 0, 0, 0, 1,
    1, 0, 0, 0, 1,
    0, 1, 1, 1, 1,
    0, 0, 0, 0, 1,
    0, 0, 0, 1, 0,
    0, 1, 1, 0, 0
  ];

let current_character = c_non;


/**
 * Sizes
 */
let sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

// Canvas
const canvas = document.querySelector(".webgl");

// Scene
const scene = new THREE.Scene();

/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader();

// Geometry
const pw = 1.0;
const ph = 1.5;
const geometry = new THREE.PlaneGeometry(pw, ph, 32, 32);

uniforms = {
  c_11: { type: "i", value: current_character[0] },
  c_12: { type: "i", value: current_character[1] },
  c_13: { type: "i", value: current_character[2] },
  c_14: { type: "i", value: current_character[3] },
  c_15: { type: "i", value: current_character[4] },
  c_21: { type: "i", value: current_character[5] },
  c_22: { type: "i", value: current_character[6] },
  c_23: { type: "i", value: current_character[7] },
  c_24: { type: "i", value: current_character[8] },
  c_25: { type: "i", value: current_character[9] },
  c_31: { type: "i", value: current_character[10] },
  c_32: { type: "i", value: current_character[11] },
  c_33: { type: "i", value: current_character[12] },
  c_34: { type: "i", value: current_character[13] },
  c_35: { type: "i", value: current_character[14] },
  c_41: { type: "i", value: current_character[15] },
  c_42: { type: "i", value: current_character[16] },
  c_43: { type: "i", value: current_character[17] },
  c_44: { type: "i", value: current_character[18] },
  c_45: { type: "i", value: current_character[19] },
  c_51: { type: "i", value: current_character[20] },
  c_52: { type: "i", value: current_character[21] },
  c_53: { type: "i", value: current_character[22] },
  c_54: { type: "i", value: current_character[23] },
  c_55: { type: "i", value: current_character[24] },
  c_61: { type: "i", value: current_character[25] },
  c_62: { type: "i", value: current_character[26] },
  c_63: { type: "i", value: current_character[27] },
  c_64: { type: "i", value: current_character[28] },
  c_65: { type: "i", value: current_character[29] },
  c_71: { type: "i", value: current_character[30] },
  c_72: { type: "i", value: current_character[31] },
  c_73: { type: "i", value: current_character[32] },
  c_74: { type: "i", value: current_character[33] },
  c_75: { type: "i", value: current_character[34] },
  time: { type: 'f', value: 0.0 },
  resolution: { type: 'v2', value: new THREE.Vector2(pw, ph)},
};

// Material
const material = new THREE.RawShaderMaterial({
  uniforms: uniforms,
  vertexShader: vertexShader,
  fragmentShader: fragmentShader,
  transparent: true,
  //side: THREE.DoubleSide,
  opacity: 1.0
});

// Mesh
let mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

window.addEventListener("resize", () => {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  renderer.setSize(sizes.width, sizes.height);
  //renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setPixelRatio(window.devicePixelRatio);
});

// Camera
let camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.set(0, 0, 1.0);
scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setClearColor(0xFFFFFF, 1.0);
//renderer.setClearColor(0x000000, 1.0);

/**
 * Animate
 */
const clock = new THREE.Clock();

const animate = () => {
  //時間取得
  const elapsedTime = clock.getElapsedTime();

  controls.update();

  renderer.render(scene, camera);
  uniforms.time.value += 0.025;

  window.requestAnimationFrame(animate);

  if (clock.elapsedTime > 10) {
    clock.stop();
    clock.start();
  }
  let et = Math.trunc(clock.elapsedTime);
  if (et < 0) {
    et = 0;
  }
  current_character = [];
  switch (et) {
    case 0:
      current_character = c_0;
      break;
    case 1:
      current_character = c_1;
      break;
    case 2:
      current_character = c_2;
      break;
    case 3:
      current_character = c_3;
      break;
    case 4:
      current_character = c_4;
      break;
    case 5:
      current_character = c_5;
      break;
    case 6:
      current_character = c_6;
      break;
    case 7:
      current_character = c_7;
      break;
    case 8:
      current_character = c_8;
      break;
    case 9:
      current_character = c_9;
      break;
    default:
      current_character = c_non;
  }

  uniforms.c_11.value = current_character[0];
  uniforms.c_12.value = current_character[1];
  uniforms.c_13.value = current_character[2];
  uniforms.c_14.value = current_character[3];
  uniforms.c_15.value = current_character[4];
  uniforms.c_21.value = current_character[5];
  uniforms.c_22.value = current_character[6];
  uniforms.c_23.value = current_character[7];
  uniforms.c_24.value = current_character[8];
  uniforms.c_25.value = current_character[9];
  uniforms.c_31.value = current_character[10];
  uniforms.c_32.value = current_character[11];
  uniforms.c_33.value = current_character[12];
  uniforms.c_34.value = current_character[13];
  uniforms.c_35.value = current_character[14];
  uniforms.c_41.value = current_character[15];
  uniforms.c_42.value = current_character[16];
  uniforms.c_43.value = current_character[17];
  uniforms.c_44.value = current_character[18];
  uniforms.c_45.value = current_character[19];
  uniforms.c_51.value = current_character[20];
  uniforms.c_52.value = current_character[21];
  uniforms.c_53.value = current_character[22];
  uniforms.c_54.value = current_character[23];
  uniforms.c_55.value = current_character[24];
  uniforms.c_61.value = current_character[25];
  uniforms.c_62.value = current_character[26];
  uniforms.c_63.value = current_character[27];
  uniforms.c_64.value = current_character[28];
  uniforms.c_65.value = current_character[29];
  uniforms.c_71.value = current_character[30];
  uniforms.c_72.value = current_character[31];
  uniforms.c_73.value = current_character[32];
  uniforms.c_74.value = current_character[33];
  uniforms.c_75.value = current_character[34];
};

animate();
