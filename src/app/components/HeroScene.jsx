import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import useSpline from "@splinetool/r3f-spline";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { OrthographicCamera } from "@react-three/drei";

export default function HeroScene() {
  return (
    <div className="w-screen h-screen absolute top-0 left-0">
      <Canvas>
        <Scene />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}

function Scene({ ...props }) {
  const { nodes, materials } = useSpline(
    "https://prod.spline.design/gAxm3pT7UimwtwzH/scene.splinecode"
  );

  const ref = useRef();

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0;
      ref.current.rotation.y += 0.01;
    }
  });

  return (
    <>
      <color />
      <group {...props} dispose={null}>
        <scene name="Scene 1">
          <mesh
            ref={ref}
            name="Path"
            geometry={nodes.Path.geometry}
            material={materials["Path Material"]}
            castShadow
            receiveShadow
            position={[1, 1, 1]}
            scale={[1, 1, 1]}
          />
          <OrthographicCamera
            name="Camera"
            makeDefault={true}
            zoom={0.5}
            far={100000}
            near={-100000}
            up={[0, -1, 0]}
            position={[1, 1, 1]}
            rotation={[1, 1, 1]}
            scale={1}
          />
        </scene>
      </group>
    </>
  );
}
