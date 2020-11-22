import {
  Vector3,
} from 'three';

export class Vehicle {
  constructor(props) {
    this.location = props.location;
    this.velocity = props.velocity;
    this.acceleration = props.acceleration;
    this.maxSpeed = props.maxSpeed;
    this.maxForce = props.maxForce;
  }
}
