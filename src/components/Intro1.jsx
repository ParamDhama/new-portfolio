import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import person from '/person.png';

const Intro1 = ({ onEnd }) => {
    const [showIntro, setShowIntro] = useState(true);

    // Disable scrolling while the intro is active.
    useEffect(() => {
        document.body.style.overflow = showIntro ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [showIntro]);

    // Disable interactions while the intro is active.
    const disableEvents = (e) => {
        e.stopPropagation();
        e.preventDefault();
        return false;
    }

    useEffect(() => {
        if (showIntro) {
            document.documentElement.style.overflow = 'hidden';
            document.body.style.pointerEvents = 'none';
            document.addEventListener('keydown', disableEvents, true);
            document.addEventListener('click', disableEvents, true);
        } else {
            document.documentElement.style.overflow = '';
            document.body.style.pointerEvents = '';
            document.removeEventListener('keydown', disableEvents, true);
            document.removeEventListener('click', disableEvents, true);
        }
        return () => {
            document.documentElement.style.overflow = '';
            document.body.style.pointerEvents = '';
            document.removeEventListener('keydown', disableEvents, true);
            document.removeEventListener('click', disableEvents, true);
        };
    }, [showIntro]);
    // Extended timer to allow extra content to be seen.
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowIntro(false);
            onEnd();  // Trigger when Intro1 ends
        }, 3000);
        return () => clearTimeout(timer);
    }, [onEnd]);

    return (
        <AnimatePresence>
            {showIntro && (
                <motion.div
                    className="fixed top-0 left-0 w-full h-full z-[150] bg-gradient-to-b from-purple-500 to-purple-800 overflow-hidden"
                    initial={{ opacity: 1, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 0 }}
                    transition={{ duration: .5 }}
                >
                    {/* Subtle animated background overlay */}
                    <motion.div
                        className="absolute inset-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.2 }}
                        transition={{ duration: 2 }}
                        style={{
                            background: 'linear-gradient(270deg, #8B5CF6, #4F46E5, #8B5CF6)',
                            backgroundSize: '400% 400%',
                        }}
                    />
                    <div className="relative z-10 flex flex-col justify-center items-center h-screen">
                        {/* Profile Image and Name */}
                        <motion.div
                            className="flex flex-col justify-center items-center"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <img
                                src={person}
                                alt="Profile"
                                className="w-72 md:w-96 rounded-full"
                                style={{ boxShadow: "0px 0px 30px rgba(255, 255, 255, 0.6)" }}
                            />
                            <h1 className="text-center text-yellow-300 text-6xl font-bold mt-8">Param Dhama</h1>
                        </motion.div>

                        {/* Tagline & Mission Statement */}
                        <motion.div
                            className="mt-6 text-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.8 }}
                        >
                            <h2 className="text-white text-2xl font-medium">
                                Building innovative solutions that break the mold.
                            </h2>
                            <p className="text-yellow-300 text-lg mt-2">
                                Transforming ideas into groundbreaking digital realities.
                            </p>
                        </motion.div>

                        {/* Quick Profile Snapshot */}
                        <motion.div
                            className="flex space-x-4 mt-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5, duration: 0.8 }}
                        >
                            <span className="text-white text-lg">React</span>
                            <span className="text-white text-lg">Node.js</span>
                            <span className="text-white text-lg">Python</span>
                        </motion.div>

                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Intro1;
