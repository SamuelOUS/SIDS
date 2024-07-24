import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Wheel } from 'react-custom-roulette';
import '../styles/Roulette.css';

const Roulette = () => {

    useEffect(() => {
        document.body.classList.add('roulette-body');
        return () => {
            document.body.classList.remove('roulette-body');
        };
    }, []);

    
    const [mustSpin, setMustSpin] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState(0);

    const ChatButtons = [
        { id: 1, text: 'Cristo', imgSrc: '/components/272243943_447319577103312_1197167401850518755_n.jpg' },
        { id: 2, text: 'Pacho', imgSrc: '/components/285291523_856188839103906_1318554899983793930_n.jpg' },
        { id: 3, text: 'Nikel', imgSrc: '/components/338421478_717270473428490_1097359253517125803_n.jpg' },
        { id: 4, text: 'Milo', imgSrc: '/components/365434125_1226280028054187_9088930986898858553_n.jpg' },
        { id: 5, text: 'Nene', imgSrc: '/components/image.png' },
    ];

    const DataRoulette = [
        { id: 1, text: "Sexo" },
        { id: 2, text: "Volver" },
        { id: 3, text: "Dejarla" },
        { id: 4, text: "Amarla" },
        { id: 5, text: "Robarla" },
        { id: 6, text: "Matarla" }
    ];

    const segments = DataRoulette.map(item => ({ option: item.text }));

    const handleSpinClick = () => {
        const newPrizeNumber = Math.floor(Math.random() * DataRoulette.length);
        setPrizeNumber(newPrizeNumber);
        setMustSpin(true);
    };

    return (
        <div className='dragBar'>
            <div className="InterfaceLayerRoulette">
                <div className='rouletteContainer'>
                    <Wheel
                        
                        mustStartSpinning={mustSpin}
                        prizeNumber={prizeNumber}
                        data={segments}
                        outerBorderWidth={20} 
                        outerBorderColor='#292424'

                        innerBorderWidth={20}
                        innerBorderColor=''
                        innerRadius={20}

                        radiusLineWidth={10}
                        radiusLineColor="#F6BE6E"

                        backgroundColors={['#1E201D', '#A50603']}
                        textColors={['#ffffff']}
                        


                        onStopSpinning={() => {
                            setMustSpin(false);
                            setPrizeNumber(prizeNumber);
                        }}
                    />
                    
                    <button onClick={handleSpinClick} className='spinButton'>Girar</button>
                    {prizeNumber !== null && <div className='selectedResult'>Seleccionado: {DataRoulette[prizeNumber].text}</div>}
                </div>
            </div>
            <div className='InterfaceLayer'>
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
                        <Link to='/Pings'>
                            <button className='Ping'></button>
                        </Link>
                        <Link to='/Gambling'>
                            <button className='Gambling'></button>
                        </Link>
                        <Link to='/Roulette'>
                            <button className='Roulette'></button>
                        </Link>
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
                        <Link to='/ShowMore'>
                            <button className='ShowMore'>Mostrar más</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Roulette;
