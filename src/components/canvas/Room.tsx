import {
  Environment,
  OrbitControls,
  Preload,
  useGLTF,
} from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import CanvasLoader from "../Loader";
import * as THREE from "three";

const Room = ({ isMobile }: { isMobile?: boolean }) => {
  console.log(isMobile, "isMobile");
  const room: any = useGLTF("./MonsantoHouse/merge.gltf");
  const floorColorMap = useLoader(
    THREE.TextureLoader,
    "/floor_tiles_06/FloorsCheckerboard_S_Diffuse.jpg"
  );
  const floorNormalMap = useLoader(
    THREE.TextureLoader,
    "/floor_tiles_06/FloorsCheckerboard_S_Normal.jpg"
  );

  const { nodes } = room;

  const FlowMeshPhongMaterial = (
    <meshPhongMaterial
      side={THREE.DoubleSide}
      map={floorColorMap}
      normalMap={floorNormalMap}
    ></meshPhongMaterial>
  );
  const GlassMeshPhysicalMaterial = (
    <meshPhysicalMaterial
      color={0xffffff}
      transmission={0.5}
      opacity={1}
      metalness={0}
      roughness={0}
      ior={1.52}
      thickness={0.8}
      specularIntensity={1}
      specularColor="#ffffff"
      lightMapIntensity={1}
    ></meshPhysicalMaterial>
  );

  return (
    <group dispose={null}>
      <mesh geometry={nodes.model_1.geometry} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.model_0.geometry} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.model_2.geometry} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.model_3.geometry} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.model_4.geometry} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.model_5.geometry} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.model_6.geometry} rotation={[Math.PI / 2, 0, 0]} />
      <mesh
        geometry={nodes.model_7.geometry}
        rotation={[Math.PI / 2, 0, 0]}
      ></mesh>
      <mesh geometry={nodes.model_8.geometry} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.model_9.geometry} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.model_10.geometry} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.model_11.geometry} rotation={[Math.PI / 2, 0, 0]}>
        {FlowMeshPhongMaterial}
      </mesh>
      <mesh
        geometry={nodes.model_12.geometry}
        rotation={[Math.PI / 2, 0, 0]}
      ></mesh>
      <mesh geometry={nodes.model_13.geometry} rotation={[Math.PI / 2, 0, 0]}>
        {FlowMeshPhongMaterial}
      </mesh>
      <mesh geometry={nodes.model_14.geometry} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.model_15.geometry} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.model_16.geometry} rotation={[Math.PI / 2, 0, 0]}>
        {FlowMeshPhongMaterial}
      </mesh>
      <mesh geometry={nodes.model_17.geometry} rotation={[Math.PI / 2, 0, 0]}>
        {FlowMeshPhongMaterial}
      </mesh>
      <mesh geometry={nodes.model_18.geometry} rotation={[Math.PI / 2, 0, 0]}>
        {FlowMeshPhongMaterial}
      </mesh>
      <mesh geometry={nodes.model_19.geometry} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.model_20.geometry} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.model_21.geometry} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.model_22.geometry} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.model_23.geometry} rotation={[Math.PI / 2, 0, 0]}>
        {FlowMeshPhongMaterial}
      </mesh>
      <mesh geometry={nodes.model_24.geometry} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.model_25.geometry} rotation={[Math.PI / 2, 0, 0]}>
        {FlowMeshPhongMaterial}
      </mesh>
      <mesh geometry={nodes.model_26.geometry} rotation={[Math.PI / 2, 0, 0]}>
        {FlowMeshPhongMaterial}
      </mesh>
      <mesh geometry={nodes.model_27.geometry} rotation={[Math.PI / 2, 0, 0]}>
        {GlassMeshPhysicalMaterial}
      </mesh>
      <mesh geometry={nodes.model_28.geometry} rotation={[Math.PI / 2, 0, 0]}>
        {GlassMeshPhysicalMaterial}
      </mesh>
      <mesh geometry={nodes.model_29.geometry} rotation={[Math.PI / 2, 0, 0]}>
        {GlassMeshPhysicalMaterial}
      </mesh>
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
      camera={{ position: [6, 1, 2], fov: 75 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Environment preset="forest" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Room isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default RoomCanvas;
