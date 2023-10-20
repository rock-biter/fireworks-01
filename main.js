import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import * as dat from 'lil-gui'
import Firework from './src/Firework'
import gsap from 'gsap'

/**
 * Debug
 */
const gui = new dat.GUI()
const params = { progress: 0 }

// gui
// 	.add(params, 'progress', 0, 1, 0.01)
// 	.name('progress')
// 	.onChange((val) => {
// 		firework.material.uniforms.progress.value = val
// 	})

/**
 * Scene
 */
const scene = new THREE.Scene()

window.addEventListener('click', () => {
	// firework.mesh.rotation.setFromVector3(new THREE.Vector3().random())
	const firework = new Firework(100, 3, clock.getElapsedTime())
	scene.add(firework.mesh)
	fireworks.push(firework)
	// firework.material.uniforms.uStartTime.value = clock.getElapsedTime()
	// gsap.fromTo(
	// 	firework.material.uniforms.uProgress,
	// 	{
	// 		value: 0,
	// 	},
	// 	{
	// 		value: 2,
	// 		duration: 3,
	// 		ease: 'power4.out',
	// 	}
	// )
})

/**
 * Manhattan
 */
const material = new THREE.MeshNormalMaterial()
const geometry = new THREE.BoxGeometry(1, 1, 1)

const mesh = new THREE.Mesh(geometry, material)
// scene.add(mesh)

const fireworks = []

/**
 * render sizes
 */
const sizes = {
	width: window.innerWidth,
	height: window.innerHeight,
}
/**
 * Camera
 */
const fov = 60
const camera = new THREE.PerspectiveCamera(fov, sizes.width / sizes.height, 0.1)
camera.position.set(12, 12, 12)
camera.lookAt(new THREE.Vector3(0, 2.5, 0))

/**
 * Show the axes of coordinates system
 */
const axesHelper = new THREE.AxesHelper(3)
// scene.add(axesHelper)

/**
 * renderer
 */
const renderer = new THREE.WebGLRenderer({
	antialias: window.devicePixelRatio < 2,
	logarithmicDepthBuffer: true,
})
document.body.appendChild(renderer.domElement)
handleResize()

/**
 * OrbitControls
 */
const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true

/**
 * Three js Clock
 */
const clock = new THREE.Clock()

/**
 * frame loop
 */
function tic() {
	/**
	 * tempo trascorso dal frame precedente
	 */
	const deltaTime = clock.getDelta()
	/**
	 * tempo totale trascorso dall'inizio
	 */
	const time = clock.getElapsedTime()
	// console.log(time, deltaTime)

	// fireworks.forEach(({ material }) => (material.uniforms.uTime.value = time))
	fireworks.forEach((f) => f.update(deltaTime))

	controls.update()

	renderer.render(scene, camera)

	requestAnimationFrame(tic)
}

requestAnimationFrame(tic)

window.addEventListener('resize', handleResize)

function handleResize() {
	sizes.width = window.innerWidth
	sizes.height = window.innerHeight

	camera.aspect = sizes.width / sizes.height
	camera.updateProjectionMatrix()

	renderer.setSize(sizes.width, sizes.height)

	const pixelRatio = Math.min(window.devicePixelRatio, 2)
	renderer.setPixelRatio(pixelRatio)
}
