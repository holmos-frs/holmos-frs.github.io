/* Borrowed from 
 * https://threejs.org/docs/#examples/controls/OrbitControls
 */
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var scene = new THREE.Scene();

var settings = {
	displacementScale: 0.2,
  rotationSpeed: 0.0
}

var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.001, 10000);


var controls = new THREE.OrbitControls( camera );

/* Create a sample cube */
var geometry = new THREE.PlaneGeometry(1, 1, 300, 300);
var texture = new THREE.TextureLoader().load('blattunterseite.png');
var material = new THREE.MeshStandardMaterial({
  color: 0xffffff,
	map: texture,
	displacementMap: texture,
	displacementScale: settings.displacementScale,
});

var cube = new THREE.Mesh(geometry, material);
scene.add( cube );

var light = new THREE.AmbientLight(0xffffff, 1);
scene.add( light );

var light2 = new THREE.HemisphereLight(0xffffbb, 0x080820, 2);
scene.add( light2 );

camera.position.set(0, 2, 2);
controls.update();

var rotSpeed = 0.001;


function initGui() {
	var gui = new dat.GUI();

	gui.add(settings, "displacementScale").min(0).max(1).onChange(function(val) {
		material.displacementScale = val;
	});
  gui.add(settings, "rotationSpeed").min(0.00).max(0.05).onChange(function(val) {
    rotSpeed = val;
  });
}
camera.position.x = 0.1329388466632482;
camera.position.y = -1.4775537828015028;
camera.position.z = 0.9807223919202779;
camera.rotation.x = 1.0406578721223902;
camera.rotation.y = 0.02661888571859346;
camera.rotation.z = -0.04538019542812724;

function animate() {
	requestAnimationFrame(animate);

  cube.rotation.z += settings["rotationSpeed"];
	controls.update();
	renderer.render(scene, camera);
}

initGui();
animate();

function onWindowResize() {

	camera.aspect = window.innerWidth / window.innerHeight;
	
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );
}
window.onresize = onWindowResize;
