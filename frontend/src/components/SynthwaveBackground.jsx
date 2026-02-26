import { motion } from 'framer-motion';

function SynthwaveBackground() {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: -1,
            backgroundColor: '#0b0221', // deep space purple
            overflow: 'hidden',
            perspective: '1000px'
        }}>
            {/* Sun */}
            <div style={{
                position: 'absolute',
                top: '40%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '300px',
                height: '300px',
                borderRadius: '50%',
                background: 'linear-gradient(to bottom, #ff007f 0%, #ff8c00 100%)',
                boxShadow: '0 0 100px #ff007f, 0 0 50px #ff8c00',
                zIndex: 0
            }}>
                {/* Sun lines */}
                {[...Array(6)].map((_, i) => (
                    <div key={i} style={{
                        position: 'absolute',
                        bottom: `${i * 15}%`,
                        left: 0,
                        width: '100%',
                        height: `${i * 2 + 2}px`,
                        backgroundColor: '#0b0221'
                    }} />
                ))}
            </div>

            {/* Grid Floor */}
            <div style={{
                position: 'absolute',
                bottom: '-50%',
                left: '-50%',
                width: '200%',
                height: '150%',
                backgroundImage: `
                    linear-gradient(transparent 95%, rgba(0, 255, 255, 0.8) 100%),
                    linear-gradient(90deg, transparent 95%, rgba(0, 255, 255, 0.8) 100%)
                `,
                backgroundSize: '80px 80px',
                transform: 'rotateX(75deg)',
                transformOrigin: 'top center',
                boxShadow: 'inset 0 100px 100px #0b0221',
                zIndex: 1
            }}>
                {/* Moving overlay to simulate travel */}
                <motion.div
                    animate={{ y: [0, 80] }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    style={{
                        position: 'absolute',
                        top: 0, left: 0, right: 0, bottom: 0,
                        backgroundImage: `linear-gradient(transparent 95%, rgba(0, 255, 255, 1) 100%)`,
                        backgroundSize: '80px 80px',
                    }}
                />
            </div>

            {/* Horizon Line */}
            <div style={{
                position: 'absolute',
                top: '55%',
                left: 0,
                width: '100%',
                height: '2px',
                backgroundColor: '#00ffff',
                boxShadow: '0 0 20px 5px #ff007f',
                zIndex: 2
            }} />

            {/* Dark overlay to ensure text readability globally */}
            <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                backgroundColor: 'rgba(11, 2, 33, 0.65)',
                zIndex: 3
            }} />
        </div>
    );
}

export default SynthwaveBackground;
