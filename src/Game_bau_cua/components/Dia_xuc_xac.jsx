import React from "react";
import { useSpring, animated } from "react-spring";

export default function Dia_xuc_xac(props) {
  let { id, hinhAnh } = props.xuc_xac;

  //animate
  const [propsAnimate, set, stop] = useSpring(() => ({
    to: {
      xyz: [900, 900, 900],
    },
    from: {
      xyz: [0, 0, 0],
    },
    config: {
      duration: 500,
    },
    // reset: true,
  }));

  set({
    to: {
      xyz: [900, 900, 900],
    },
    from: {
      xyz: [0, 0, 0],
    },
  });

  return (
    <div className="scene">
      <animated.div
        className="cube"
        style={{
          transform: propsAnimate.xyz.interpolate(
            (x, y, z) =>
              `translateZ(-25px) rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`
          ),
        }}
      >
        <div className="cube__face front">
          <img src={hinhAnh} className="h-12" />
        </div>
        <div className="cube__face right">
          <img src="./img/game_bau_cua/bau.png" className="h-12" />
        </div>
        <div className="cube__face back">
          <img src="./img/game_bau_cua/bau.png" className="h-12" />
        </div>
        <div className="cube__face left">
          <img src="./img/game_bau_cua/bau.png" className="h-12" />
        </div>
        <div className="cube__face top">
          <img src="./img/game_bau_cua/bau.png" className="h-12" />
        </div>
        <div className="cube__face bottom">
          <img src="./img/game_bau_cua/bau.png" className="h-12" />
        </div>
      </animated.div>
    </div>
  );
}
