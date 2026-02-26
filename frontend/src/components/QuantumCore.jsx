import { motion } from 'framer-motion';

function QuantumCore() {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: -1,
            backgroundColor: '#0a0a14', // Very dark blue/black base
            overflow: 'hidden'
        }}>
            {/* Hexagonal Cyber Grid */}
            <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                backgroundImage: `
                    linear-gradient(30deg, #ec4899 12%, transparent 12.5%, transparent 87%, #ec4899 87.5%, #ec4899),
                    linear-gradient(150deg, #ec4899 12%, transparent 12.5%, transparent 87%, #ec4899 87.5%, #ec4899),
                    linear-gradient(30deg, #ec4899 12%, transparent 12.5%, transparent 87%, #ec4899 87.5%, #ec4899),
                    linear-gradient(150deg, #ec4899 12%, transparent 12.5%, transparent 87%, #ec4899 87.5%, #ec4899),
                    linear-gradient(60deg, #8b5cf6 25%, transparent 25.5%, transparent 75%, #8b5cf6 75%, #8b5cf6),
                    linear-gradient(60deg, #8b5cf6 25%, transparent 25.5%, transparent 75%, #8b5cf6 75%, #8b5cf6)
                `,
                backgroundSize: '80px 140px',
                backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px',
                opacity: 0.03, // Barely visible pattern
                zIndex: 0
            }}></div>

            {/* Glowing Core Neon Orbs */}
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.6, 0.3],
                    filter: ['blur(80px)', 'blur(120px)', 'blur(80px)']
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                style={{
                    position: 'absolute',
                    top: '10%',
                    right: '15%',
                    width: '400px',
                    height: '400px',
                    background: 'radial-gradient(circle, #ec4899 0%, transparent 70%)',
                    borderRadius: '50%',
                    zIndex: 1
                }}
            />

            <motion.div
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.5, 0.2, 0.5],
                    filter: ['blur(100px)', 'blur(60px)', 'blur(100px)']
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                style={{
                    position: 'absolute',
                    bottom: '5%',
                    left: '10%',
                    width: '500px',
                    height: '500px',
                    background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)',
                    borderRadius: '50%',
                    zIndex: 1
                }}
            />

            {/* Cyber Scanning Lines */}
            <motion.div
                animate={{ top: ['-10%', '110%'] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                style={{
                    position: 'absolute',
                    left: 0,
                    width: '100%',
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent, #06b6d4, transparent)',
                    boxShadow: '0 0 15px #06b6d4',
                    zIndex: 2,
                    opacity: 0.5
                }}
            />
            <motion.div
                animate={{ top: ['110%', '-10%'] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 3 }}
                style={{
                    position: 'absolute',
                    left: 0,
                    width: '100%',
                    height: '1px',
                    background: 'linear-gradient(90deg, transparent, #ec4899, transparent)',
                    boxShadow: '0 0 10px #ec4899',
                    zIndex: 2,
                    opacity: 0.3
                }}
            />

            {/* Floating Data Nodes */}
            {[...Array(15)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{
                        y: [0, Math.random() * -100, 0],
                        opacity: [0, 0.8, 0]
                    }}
                    transition={{
                        duration: 5 + Math.random() * 5,
                        repeat: Infinity,
                        delay: Math.random() * 5,
                        ease: "easeOut"
                    }}
                    style={{
                        position: 'absolute',
                        bottom: `${10 + Math.random() * 80}%`,
                        left: `${5 + Math.random() * 90}%`,
                        width: '4px',
                        height: '4px',
                        backgroundColor: i % 2 === 0 ? '#06b6d4' : '#ec4899',
                        boxShadow: `0 0 8px ${i % 2 === 0 ? '#06b6d4' : '#ec4899'}`,
                        borderRadius: '50%',
                        zIndex: 2
                    }}
                />
            ))}
        </div>
    );
}

export default QuantumCore;
