import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import CanvasLoader from "../Loader";

const Room = ({ isMobile }: { isMobile?: boolean }) => {
  const { scene } = useGLTF("/MonsantoHouse/006-1.glb", "/draco/gltf/");

  return (
    <group
      dispose={null}
      position={[0, -2, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
      scale={isMobile ? 1.4 : 2}
    >
      <primitive object={scene} />
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
        position={[-20, 30, -20]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <spotLight
        position={[20, 30, 20]}
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

      <Preload all />
    </Canvas>
  );
};

export default RoomCanvas;
