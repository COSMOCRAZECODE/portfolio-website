import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PointMaterial, Points } from '@react-three/drei';
import * as THREE from 'three';

function NeuralParticles() {
    const ref = useRef();

    // Generate random points in a sphere to simulate a nebula/neural cloud
    const count = 3000;
    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            const phi = Math.acos(-1 + (2 * i) / count);
            const theta = Math.sqrt(count * Math.PI) * phi;
            const r = 2.5 + Math.random() * 1.5; // Radius

            pos[i * 3] = r * Math.cos(theta) * Math.sin(phi);
            pos[i * 3 + 1] = r * Math.sin(theta) * Math.sin(phi);
            pos[i * 3 + 2] = r * Math.cos(phi);
        }
        return pos;
    }, [count]);

    useFrame((state, delta) => {
        // Slowly rotate the entire point cloud
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;

        // Slight pulsing effect scaling based on time (simulating neural firing)
        const scale = 1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
        ref.current.scale.set(scale, scale, scale);
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#03dac6" // Teal/cyan neural energy color
                    size={0.015}
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                />
            </Points>
        </group>
    );
}

function NeuralNebula() {
    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1, background: '#02020a' }}>
            <Canvas camera={{ position: [0, 0, 5] }}>
                <ambientLight intensity={0.5} />
                <NeuralParticles />
            </Canvas>
        </div>
    );
}

export default NeuralNebula;
