import { useState, useEffect } from 'react';
import Intro1 from './Intro1';
import Intro2 from './Intro2';

const Intro = () => {
    const [showIntro1, setShowIntro1] = useState(true);
    const [showIntro2, setShowIntro2] = useState(false);

    // When Intro1 finishes, show Intro2
    useEffect(() => {
        if (!showIntro1) {
            setShowIntro2(true);
        }
    }, [showIntro1]);

    return (
        <div>
            {showIntro1 && <Intro1 onEnd={() => setShowIntro1(false)} />}
            {showIntro2 && <Intro2 />}
        </div>
    );
};

export default Intro;
