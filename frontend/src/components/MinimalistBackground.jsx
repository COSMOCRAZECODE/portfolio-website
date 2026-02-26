import { motion } from 'framer-motion';

function MinimalistBackground() {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: -1,
            backgroundColor: '#ffffff',
            overflow: 'hidden'
        }}>
            {/* Animated Grid Texture Overlay */}
            <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)',
                backgroundSize: '50px 50px',
                zIndex: 0
            }}></div>

            {/* Bright, Vibrant Floating Orbs */}
            <motion.div
                animate={{
                    y: [0, -80, 0],
                    x: [0, 60, 0],
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0]
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                style={{
                    position: 'absolute',
                    top: '-20%',
                    right: '-10%',
                    width: '900px',
                    height: '900px',
                    background: 'radial-gradient(circle, rgba(99, 102, 241, 0.25) 0%, rgba(255,255,255,0) 60%)',
                    borderRadius: '50%',
                    zIndex: 1
                }}
            />

            <motion.div
                animate={{
                    y: [0, 60, 0],
                    x: [0, -90, 0],
                    scale: [1, 1.15, 1],
                    rotate: [0, -90, 0]
                }}
                transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
                style={{
                    position: 'absolute',
                    bottom: '-25%',
                    left: '-15%',
                    width: '1000px',
                    height: '1000px',
                    background: 'radial-gradient(circle, rgba(16, 185, 129, 0.25) 0%, rgba(255,255,255,0) 60%)',
                    borderRadius: '50%',
                    zIndex: 1
                }}
            />

            {/* Sharp, Highly Visible Geometric Shapes */}
            <motion.div
                animate={{ y: [0, -30, 0], rotate: [0, 45, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                style={{
                    position: 'absolute',
                    top: '20%',
                    left: '10%',
                    width: '180px',
                    height: '180px',
                    background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.8), rgba(59, 130, 246, 0.8))',
                    borderRadius: '30%',
                    zIndex: 2,
                    boxShadow: '0 20px 40px rgba(99, 102, 241, 0.3)',
                }}
            />

            <motion.div
                animate={{ y: [0, 40, 0], rotate: [45, 135, 45], scale: [1, 1.1, 1] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                style={{
                    position: 'absolute',
                    bottom: '25%',
                    right: '15%',
                    width: '240px',
                    height: '240px',
                    background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.8), rgba(52, 211, 153, 0.8))',
                    borderRadius: '50%',
                    zIndex: 2,
                    boxShadow: '0 20px 40px rgba(16, 185, 129, 0.3)',
                }}
            />

            {/* Added a dynamic accent ring */}
            <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                style={{
                    position: 'absolute',
                    top: '40%',
                    right: '30%',
                    width: '300px',
                    height: '300px',
                    border: '3px dashed rgba(99, 102, 241, 0.3)',
                    borderRadius: '50%',
                    zIndex: 1,
                }}
            />
        </div>
    );
}

export default MinimalistBackground;
