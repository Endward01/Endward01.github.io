import Particles from "react-tsparticles";
import particlesConfig from "./config/particlesConfig";
const ParticleBackground = () => {
  return <Particles data-generated="true" params={particlesConfig}></Particles>;
};

export default ParticleBackground;
