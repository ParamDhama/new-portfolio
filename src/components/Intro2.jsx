import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHtml5, FaJs, FaNode, FaPython, FaReact } from 'react-icons/fa';

const logos = [FaHtml5, FaJs, FaNode, FaPython, FaReact];
const logoTitle = ['Html', "JavaScript", "Node", "Python", "React"];

const developerQuotes = [
    { author: "Linus Torvalds", quote: "Talk is cheap. Show me the code." },
    { author: "Ron Jeffries", quote: "Code never lies, comments sometimes do." },
    { author: "Robert C. Martin", quote: "Bad code can function, but it slows progress and creates technical debt." },
    { author: "Cory House", quote: "Code is like humor. When you have to explain it, it’s bad." },
    { author: "John Johnson", quote: "First, solve the problem. Then, write the code." },
    { author: "Steve McConnell", quote: "Good code is its own best documentation. Don’t over-explain." },
    { author: "Robert C. Martin", quote: "Clean code always looks like it was written by someone who cares." },
    { author: "Jeff Atwood", quote: "The best code is the code you never have to write." },
    { author: "Austin Freeman", quote: "Simplicity is the soul of efficiency." },
    { author: "Robert C. Martin", quote: "You should name a variable using the same care as naming a first-born child." },
    { author: "Robert C. Martin", quote: "The only way to go fast is to go well." },
    { author: "Steve Maguire", quote: "Fix the cause, not the symptom. Solve root issues, not superficial bugs." },
    { author: "Jason C. McDonald", quote: "Don’t write better error messages; write code that doesn’t need them." },
    { author: "Martin Fowler", quote: "Any fool can write code that a computer understands. Make it human-friendly." },
    { author: "Edsger W. Dijkstra", quote: "If debugging is the process of removing bugs, then programming must be adding them." }
];



const Intro2 = () => {
    const [index, setIndex] = useState(Math.floor(Math.random() * logos.length))
    const [load, setLoad] = useState(1)
    const [showIntro, setShowIntro] = useState(true);
    const [quoteIndex,] = useState(Math.floor(Math.random() * developerQuotes.length));

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

    // Hide the intro panel after 10 seconds.
    useEffect(() => {
        const timer = setTimeout(() => setShowIntro(false), 3000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const logoTimer = setTimeout(() => {
            setIndex((prevIndex) => (prevIndex + 1) % logos.length);
        }, 1000);
        return () => clearTimeout(logoTimer);
    }, [index]);

    useEffect(() => {
        const logoTimer = setTimeout(() => {

            setLoad((prev) => prev < 100 ? (prev + 1) : 100);
        }, 3000 / 120);
        return () => clearTimeout(logoTimer);
    }, [load]);


    const ActiveLogo = logos[index];
    const ActiveTitle = logoTitle[index];

    return (
        <AnimatePresence mode='wait'>
            {showIntro && (
                <motion.div
                    className="fixed top-0 left-0 w-full h-full z-[150] bg-gradient-to-b from-purple-500 to-purple-800"
                    initial={{ opacity: 1, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 0 }}
                    transition={{ duration: 1 }}
                    style={{ pointerEvents: 'all', touchAction: 'none' }}
                >

                    <div
                        className="flex flex-col justify-center items-center h-2/3 text-9xl text-white font-bold "
                    >
                        <AnimatePresence mode='wait'>
                            <motion.div
                                key={`logo-${index}`}
                                className="flex flex-col w-full items-center justify-center"
                                initial={{ opacity: 0, scale: 0.1, x: '-100%' }}
                                animate={{ opacity: 1, scale: 1.3, x: 0 }}
                                exit={{ opacity: 0, scale: 0.1, x: '100%' }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className=" border-white border-4 rounded-xl p-6">
                                    <ActiveLogo />
                                </div>

                                <motion.h1
                                    key={`title-${index}`}
                                    className="text-center mt-10 text-2xl"
                                    initial={{ opacity: 0, scale: 0.1 }}
                                    animate={{ opacity: 1, scale: 1.3 }}
                                    exit={{ opacity: 0, scale: 0.1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {ActiveTitle}
                                </motion.h1>
                            </motion.div>
                        </AnimatePresence>

                    </div>

                    <div className='absolute bottom-28 md:bottom-20 w-screen text-white text-2xl flex justify-center items-center'>
                        <div className='w-96 text-center'>
                            &quot;{developerQuotes[quoteIndex].quote}&quot; — {developerQuotes[quoteIndex].author}
                        </div>
                    </div>
                    <div className='absolute bottom-15 md:bottom-20 right-5 md:right-20 text-white text-xl md:text-2xl '>
                        {load}%
                    </div>
                    <div className='absolute bottom-10 left-2 h-2 bg-yellow-300 rounded-2xl' style={{ width: `${load - 6}vw` }}>

                    <div
                        className="hidden md:block"
                        style={{
                            width: `${load - 4}vw`, // Dynamically setting width for medium and larger screens
                        }}
                    />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Intro2;