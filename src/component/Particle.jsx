import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

export default function Particle() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine); // enables twinkle and shadow
    }).then(() => setInit(true));
  }, []);

  const options = useMemo(() => ({
    fullScreen: { enable: true, zIndex: -1 },
    background: {
      color: "#0f172a"
    },
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          area: 800
        }
      },
      color: {
        value: ["#38bdf8", "#f472b6", "#facc15", "#22c55e"]
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 5, // Stronger visibility
        random: false
      },
      size: {
        value: { min: 2, max: 4 }, // Larger bubbles
        random: true
      },
      move: {
        enable: true,
        speed: 1.2,
        direction: "top",
        outModes: {
          default: "out"
        }
      },
      shadow: {
        enable: true,
        blur: 10,
        color: "#a855f7"
      },
      twinkle: {
        particles: {
          enable: true,
          frequency: 0.1,
          opacity: 1 // Max brightness
        }
      }
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse"
        },
        onClick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        repulse: {
          distance: 120
        },
        push: {
          quantity: 4
        }
      }
    },
    detectRetina: true
  }), []);

  return init ? (
    <Particles
      id="tsparticles"
      options={options}
      particlesLoaded={() => console.log("✨ Strong Glow Particles Loaded")}
    />
  ) : null;
}
