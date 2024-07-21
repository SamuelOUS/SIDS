import React from "react";
import { Link } from 'react-router-dom';
import '../styles/Profile.css';

const Profile = () => {
    const ChatButtons = [
        { id: 1, text: 'Cristo', imgSrc: '/components/272243943_447319577103312_1197167401850518755_n.jpg' },
        { id: 2, text: 'Pacho', imgSrc: '/components/285291523_856188839103906_1318554899983793930_n.jpg' },
        { id: 3, text: 'Nikel', imgSrc: '/components/338421478_717270473428490_1097359253517125803_n.jpg' },
        { id: 4, text: 'Milo', imgSrc: '/components/365434125_1226280028054187_9088930986898858553_n.jpg' },
        { id: 5, text: 'Nene', imgSrc: '/components/image.png' },
    ];

    return(
        <div className='dragBar'>
            <div className='InterfaceLayerProfile'>
                <div className="ProfilePhoto"></div>
                <div className="ProfileData">

                    <div className="Name">Samuel Osorio Uribe</div>
                    
                    <div className="Alias">Pacho</div>
                    <br></br>
                    <div className="Status">Estado:</div>
                    
                    <div className="StatusText">feliz</div>
                    <br></br>
                    <div className="MoneyExpent">Dinero gastado: <br></br>0</div>
                    
                    <div className="MoneyWon">Dinero ganado:<br></br>0</div>
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

export default Profile;
