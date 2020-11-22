import {
  Color,
  ConeGeometry,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
  Vector3,
} from 'three';

export class Agent {
  constructor() {
    const geometry = new ConeGeometry(1, 1, 21);
    const material = new MeshBasicMaterial({
	  color: 0xff0000,
	  wireframe: true,
    });

    this.mesh = new Mesh(geometry, material);
    this.direction = 1;

    this.heading = new Vector3(1, 1, 1);
    this.side = this.heading;
    this.mass = 1.0;
    this.maxSpeed = 1.0;
    this.maxForce = 1.0;
    this.maxTurnRate = 1.0;
  }

  getMesh() {
    return this.mesh;
  }

  actOnEnvironment({ delta }) {
    this.mesh.rotation.x += delta * 0.01;
    this.mesh.rotation.y += delta * 1.75;

    // Set position
    this.mesh.position.x += this.direction * delta;
    if (this.mesh.position.x > 4) {
      this.direction -= 1;
    } else if (this.mesh.position.x < -4) {
      this.direction = 1;
    }
  }
}
