import React, { useRef, useEffect } from 'react'; 
import CustomHook from './CustomHook';
import './Home.css'; // Import CSS file for Home component styles

function Home() {
    const scrollTab = useRef();
    CustomHook(scrollTab);

    // Add useEffect to trigger animation on component mount
    useEffect(() => {
        const section = scrollTab.current;
        section.classList.add('pop-in'); // Add 'pop-in' class to trigger animation
        return () => {
            section.classList.remove('pop-in'); // Remove 'pop-in' class on component unmount
        };
    }, []);

    return (
        <section ref={scrollTab} className='home'>
            <div className="content">
                <div className="name">
                    HI THIS IS <span>DHARANI</span>
                </div>
                <div className="des">
                    {/* 30 */}
                    A passionate Computer Science Student interested in mastering full stack development currently learning JavaScript and React,Data Structures and Algorithms.
                </div>
                
                <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className='animation active'>
                    MyResume
                </a>
            </div>
            <div className="avatar">
                <div className="card">
                    <img src="/Profile.png" alt="" />
                    <h1 color="white">📍Chennai,TamilNadu  </h1>
                </div>
            </div>
        </section>
    );
}

export default Home;
