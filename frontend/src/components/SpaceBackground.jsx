import { Canvas } from '@react-three/fiber';
import { Stars, OrbitControls, Sparkles } from '@react-three/drei';

function SpaceBackground() {
    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1, background: '#050510' }}>
            <Canvas camera={{ position: [0, 0, 1] }}>
                <ambientLight intensity={0.1} />
                {/* Subtle, dense starfield simulating deep space */}
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

                {/* Slow-moving space dust/galaxies for minimalist depth */}
                <Sparkles count={200} scale={150} size={4} speed={0.2} opacity={0.2} color="#bb86fc" />
                <Sparkles count={150} scale={120} size={6} speed={0.4} opacity={0.15} color="#03dac6" />

                {/* 
            OrbitControls allow the user to subtly pan the background with the mouse, 
            giving an interactive but non-intrusive feel. enableZoom is false so it doesn't break scrolling.
        */}
                <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
        </div>
    );
}

export default SpaceBackground;
