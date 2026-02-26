import { useEffect, useRef } from 'react';

function NeuralNetBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles = [];
        const particleCount = 100;
        const connectionDistance = 150;

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 1,
                vy: (Math.random() - 0.5) * 1,
                radius: Math.random() * 2 + 1
            });
        }

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#111827'; // Dark gray/blue tailwind gray-900
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Update positions
            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                p.x += p.vx;
                p.y += p.vy;

                // Bounce off edges
                if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

                // Draw particle
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = '#0ea5e9'; // sky-500
                ctx.fill();

                // Draw connections
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < connectionDistance) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        // Opacity based on distance
                        const opacity = 1 - (dist / connectionDistance);
                        ctx.strokeStyle = `rgba(14, 165, 233, ${opacity * 0.5})`; // bright blue lines
                        ctx.lineWidth = 1;
                        ctx.stroke();
                    }
                }
            }
            requestAnimationFrame(draw);
        };

        let animationFrameId = requestAnimationFrame(draw);

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: -1,
            backgroundColor: '#111827',
            overflow: 'hidden'
        }}>
            <canvas ref={canvasRef} style={{ opacity: 0.6 }} />
        </div>
    );
}

export default NeuralNetBackground;
