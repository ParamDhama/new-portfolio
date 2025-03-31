import React, { useRef, useEffect } from 'react';

const CanvasParticles = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const particlesArray = [];
        const numberOfParticles = 100;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Adjust canvas size on resize
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', resizeCanvas);

        // Particle Class
        class Particle {
            constructor(x, y, size, color, speedX, speedY) {
                this.x = x;
                this.y = y;
                this.size = size;
                this.color = color;
                this.speedX = speedX;
                this.speedY = speedY;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                // Bounce off walls
                if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
                if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
            }

            draw() {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();
            }
        }

        // Create Particles
        const createParticles = () => {
            for (let i = 0; i < numberOfParticles; i++) {
                const size = Math.random() * 3 + 1;
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                const speedX = (Math.random() - 0.5) * 2;
                const speedY = (Math.random() - 0.5) * 2;
                const color = `rgba(255, 255, 255, ${Math.random()})`;
                particlesArray.push(new Particle(x, y, size, color, speedX, speedY));
            }
        };

        // Animate Particles
        const animateParticles = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particlesArray.forEach((particle) => {
                particle.update();
                particle.draw();
            });
            requestAnimationFrame(animateParticles);
        };

        // Initialize Particles
        createParticles();
        animateParticles();

        // Clean up on unmount
        return () => {
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
            }}
        />
    );
};

export default CanvasParticles;
