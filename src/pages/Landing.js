import React, { useEffect } from 'react';
import '../styles/Landing.css';
import { Link } from 'react-router-dom';


const Landing = () => {
    useEffect(() => {
        document.body.classList.add('landing-body');
        return () => {
            document.body.classList.remove('landing-body');
        };
    }, []);

    const ChatButtons = [
        { id: 1, text: 'Cristo', imgSrc: '/components/272243943_447319577103312_1197167401850518755_n.jpg' },
        { id: 2, text: 'Pacho', imgSrc: '/components/285291523_856188839103906_1318554899983793930_n.jpg' },
        { id: 3, text: 'Nikel', imgSrc: '/components/338421478_717270473428490_1097359253517125803_n.jpg' },
        { id: 4, text: 'Milo', imgSrc: '/components/365434125_1226280028054187_9088930986898858553_n.jpg' },
        { id: 5, text: 'Nene', imgSrc: '/components/image.png' },
    ];

    return (
        <div className='dragBar'>
            <div className="menu">
                <div className='TopButtons'>
                    <Link to="/Profile">
                    <button className='profile'></button>
                    </Link>
                    <Link to="/Settings">
                    <button className='settings'></button>
                    </Link>
                    <Link to="/SignIn">
                    <button className='exit'></button>
                    </Link>
                </div>
                <div className='Features'>
                    <button className='Anclados'></button>
                    <button className='Carrera'></button>
                    <button className='Gambling'></button>
                </div>
                <div className='separator'></div>
                <div className='chats'>
                    <div className='ChatsList'>
                        {ChatButtons.map(button => (
                            <button key={button.id} className='chatButton'>
                                <img src={button.imgSrc} className='chatIcon' alt={`Icon for ${button.text}`} />
                                <span className='chatText'>{button.text}</span>
                            </button>
                        ))}
                    </div>
                    <button className='ShowMore'>Mostrar más</button>
                </div>
            </div>
        </div>
    );
};

export default Landing;
