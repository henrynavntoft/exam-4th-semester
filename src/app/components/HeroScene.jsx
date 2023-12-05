import useSpline from "@splinetool/r3f-spline";
import { OrthographicCamera } from "@react-three/drei";

export default function Scene({ ...props }) {
  const { nodes, materials } = useSpline(
    "https://prod.spline.design/gAxm3pT7UimwtwzH/scene.splinecode"
  );
  return (
    <>
      <color attach="background" args={["transparent"]} />
      <group {...props} dispose={null}>
        <scene name="Scene 1">
          <OrthographicCamera
            name="Camera"
            makeDefault={true}
            zoom={0.9}
            far={100000}
            near={-100000}
            up={[0, -1, 0]}
            position={[15.81, -942.76, -200.12]}
            rotation={[1.77, 0.03, 0.12]}
            scale={1}
          />
          <group name="Group" position={[12.25, 23.5, 0.47]}>
            <mesh
              name="Sphere"
              geometry={nodes.Sphere.geometry}
              material={materials["Sphere Material"]}
              castShadow
              receiveShadow
              position={[-41.68, -5.74, 72.18]}
              rotation={[0, -Math.PI / 2, 0]}
            />
            <mesh
              name="Sphere 3"
              geometry={nodes["Sphere 3"].geometry}
              material={materials["Sphere 3 Material"]}
              castShadow
              receiveShadow
              position={[47.14, 102.55, 103.84]}
              rotation={[0, -0.99, 0]}
            />
            <mesh
              name="Sphere 2"
              geometry={nodes["Sphere 2"].geometry}
              material={materials["Sphere 2 Material"]}
              castShadow
              receiveShadow
              rotation={[0, -Math.PI / 2, 0]}
            />
          </group>
          <OrthographicCamera
            name="1"
            makeDefault={false}
            far={10000}
            near={-50000}
          />
          <hemisphereLight
            name="Default Ambient Light"
            intensity={0.75}
            color="#ffffff"
          />
        </scene>
      </group>
    </>
  );
}
