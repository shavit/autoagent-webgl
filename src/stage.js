import {
  Color,
  Clock,
  ConeGeometry,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from 'three';
import Doc from './document';
import { Agent } from './agent';

class Stage {
  constructor(w, h) {
    this.width = w;
    this.height = h;
    this.direction = 1;

    this.__setStage();
    this.__setAgents(3);

    // Resize events
    this.__displayRatio = this.__displayRatio.bind(this);
    this.__onWindowResize = this.__onWindowResize.bind(this);
    window.addEventListener('resize', this.__onWindowResize.bind(this), false);
  }

  __animate() {
    window.requestAnimationFrame(this.__animate.bind(this));

    const delta = this.clock.getDelta();
    for (const agent of this.agents) {
        agent.actOnEnvironment({ delta });
    }

    this.renderer.render(this.scene, this.scene.camera);
  }

  __setStage() {
    const renderer = new WebGLRenderer();
    renderer.setSize(this.width, this.height);
    this.renderer = renderer;
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    const camera = new PerspectiveCamera(75, this.__displayRatio(), 0.1, 100);
    camera.position.set(0, 0, 14);
    camera.up.set(0, 0, 1);
    this.scene = new Scene();
    this.scene.background = new Color(0xefefef);
    this.scene.camera = camera;

    this.clock = new Clock();
  }

  __setAgents(n) {
    this.agents = [];
    for (let i = 0; i < n; i++) {
      const agent = new Agent();
      const mesh = agent.getMesh();

      this.agents.push(agent);
      this.scene.add(mesh);
    }
  }

  __onWindowResize() {
    // let wX = window.innerWidth / 2
    // let wY = window.innerHeight / 2
    this.scene.camera.aspect = this.__displayRatio();
    this.scene.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  __displayRatio() {
    return window.innerWidth / window.innerHeight;
  }

  render() {
    this.__animate();
    return this.renderer.domElement;
  }
}

export class StageDom extends Doc {
  constructor() {
    super();
    this.stage = new Stage(600, 400);
    this.render();
  }

  render() {
    this.innerHTML = null;
    this.appendChild(this.stage.render());
  }
}
