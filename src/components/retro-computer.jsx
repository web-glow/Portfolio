import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { Model } from "../components/retro-computer-loader";

const RetroComputer = () => {
    return (
        <Canvas
            style={{
                height: "470px",
                width: "500px",
            }}
        >
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.5} />
            {/* directional light gives it the 3d look */}
            <directionalLight position={[1, 5, 2]} intensity={1} />
            <directionalLight position={[-1, -5, -2]} intensity={0.2} />
            <Suspense fallback={null}>
                <Model />
            </Suspense>
        </Canvas>
    );
};

export default RetroComputer;
