import {
  Vector3,
} from 'three';

export class Observation {
  distanceTo(a, b) {
    return Math.sqrt((a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y));
  }

  closestAgents(agent, items, n) {
    const agents = [].concat(items);
    agents.sort((a, b) => {
      distanceTo(agent, a) - distanceTo(agent, b);
    });

    return agents.slice(1, n + 1);
  }

  move({agent, agents, delta}) {
    for (const [index, peerAgent] of agents) {
      const peerDistance = this.distanceTo(agent.getPosition(), peerAgent.getPosition())
      if (peerDistance < 0.2) {
        agent.steerAway()
      }

      agent.move({delta})
    }
  }

}
