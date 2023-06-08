import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import CanvasLoader from "../Loader";

const Room = ({ isMobile }: { isMobile?: boolean }) => {
  const room: any = useGLTF("./MonsantoHouse/001.gltf");

  const { nodes, materials } = room;

  return (
    <group dispose={null} position={[0, -1, 0]}>
      <mesh
        geometry={nodes.model_0.geometry}
        material={materials["Default OBJ.002"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.model_1.geometry}
        material={materials["Default OBJ.002"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.model_2.geometry}
        material={materials["Default OBJ.002"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.model_3.geometry}
        material={materials["Default OBJ.002"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.model_4.geometry}
        material={materials["Default OBJ.005"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.model_5.geometry}
        material={materials["Default OBJ.005"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.model_6.geometry}
        material={materials["Default OBJ.005"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.model_7.geometry}
        material={materials["Default OBJ.005"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.model_8.geometry}
        material={materials["Default OBJ.005"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.model_9.geometry}
        material={materials["Default OBJ.009"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.model_10.geometry}
        material={materials["Default OBJ.010"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.model_11.geometry}
        material={materials["Default OBJ.011"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.model_12.geometry}
        material={materials["Default OBJ.012"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.model_13.geometry}
        material={materials["Default OBJ.014"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.model_14.geometry}
        material={materials["Default OBJ.015"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.model_15.geometry}
        material={materials["Default OBJ.009"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.model_16.geometry}
        material={materials["Default OBJ.017"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.model_17.geometry}
        material={materials["Default OBJ.018"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.model_18.geometry}
        material={materials["Default OBJ.019"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.model_19.geometry}
        material={materials["Default OBJ.020"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.model_20.geometry}
        material={materials["Default OBJ.031"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.model_21.geometry}
        material={materials["Default OBJ.022"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.model_22.geometry}
        material={materials["Default OBJ.023"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.model_23.geometry}
        material={materials["Default OBJ.024"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.model_24.geometry}
        material={materials["Default OBJ.025"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.model_25.geometry}
        material={materials["Default OBJ.026"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.model_26.geometry}
        material={materials["Default OBJ.027"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.model_27.geometry}
        material={materials["Default OBJ.021"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.model_28.geometry}
        material={materials["Default OBJ.030"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.model_29.geometry}
        material={materials["Default OBJ.030"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
};

const RoomCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);
    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [6, -6, 2], fov: 75 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <ambientLight castShadow intensity={0.2} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <spotLight
        position={[20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Room isMobile={isMobile} />
      </Suspense>

      {/* <Preload all /> */}
    </Canvas>
  );
};

export default RoomCanvas;
