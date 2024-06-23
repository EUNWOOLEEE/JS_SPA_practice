import * as THREE from 'https://cdn.skypack.dev/three@0.134.0';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.134.0/examples/jsm/loaders/GLTFLoader.js';
import Component from '../core/Component.js'

export default class Background extends Component {
	setUp() {
		this.$state = {
			pos_x: 0,
			pos_y: 0,
			pos_z: 0,
		}
	}

	mounted() {
		this.renderBackground();
	}

	renderBackground() {
		const scene = new THREE.Scene();

		const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
		camera.position.y = 0.5;
		camera.position.z = 1;

		const renderer = new THREE.WebGLRenderer({ canvas: this.$target, antialias: true });
		renderer.setSize(window.innerWidth, window.innerHeight);
		
		const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);

		const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
		directionalLight.position.set(5, 10, 7.5);
		directionalLight.castShadow = true;

		const pointLight = new THREE.PointLight(0xffed9c, 2, 30, 40);
		pointLight.position.set(-0.75, 0.45, 0.17);

		scene.add(ambientLight, directionalLight, pointLight);

		const loader = new GLTFLoader();
		let model;

		loader.load("../graphic_src/andys_room/scene.gltf", function (gltf) {
			model = gltf.scene;
			scene.add(model);
			renderer.render(scene, camera);
		}, undefined, function (error) {
			console.log('load error');
		});

		// 배경 텍스처
		// const skyboxLoader = new THREE.CubeTextureLoader();
		// const skyboxTexture = skyboxLoader.load([
		// 	'path/to/skybox_px.jpg', // +x
		// 	'path/to/skybox_nx.jpg', // -x
		// 	'path/to/skybox_py.jpg', // +y
		// 	'path/to/skybox_ny.jpg', // -y
		// 	'path/to/skybox_pz.jpg', // +z
		// 	'path/to/skybox_nz.jpg'  // -z
		// ]);
		// scene.background = skyboxTexture;

		const animate = function () {
			requestAnimationFrame(animate);

			if (model) {
				renderer.render(scene, camera);
			}

		};

		animate();
	}

	setEvent() {
		this.addEvent('keydown', 'KeyW', ({ target }) => {
			const prev = this.$state.pos_z;
			this.forward(prev);
		})
		this.addEvent('keydown', 'KeyS', ({ target }) => {
			const prev = this.$state.pos_z;
			this.back(prev);
		})
		this.addEvent('keydown', 'KeyA', ({ target }) => {
			const prev = this.$state.pos_x;
			this.toLeft(prev);
		})
		this.addEvent('keydown', 'KeyD', ({ target }) => {
			const prev = this.$state.pos_x;
			this.toRight(prev);
		})
		this.addEvent('keydown', 'ArrowUp', ({ target }) => {
			const prev = this.$state.pos_y;
			this.up(prev);
		})
		this.addEvent('keydown', 'ArrowDown', ({ target }) => {
			const prev = this.$state.pos_y;
			this.down(prev);
		})
	}

	forward(prev) {
		this.setState({ pos_z: prev + 1 });
	}

	back(prev) {
		this.setState({ pos_z: prev - 1 });
	}

	toLeft(prev) {
		this.setState({ pos_x: prev - 1 });
	}

	toRight(prev) {
		this.setState({ pos_x: prev + 1 });
	}

	up(prev) {
		this.setState({ pos_y: prev + 1 });
	}

	down(prev) {
		this.setState({ pos_y: prev - 1 });
	}

}