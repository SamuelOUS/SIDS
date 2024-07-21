import React, { useState } from "react";
import { Link } from 'react-router-dom';
import '../styles/Settings.css';


const Settings = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [profileData, setProfileData] = useState({
        name: "Samuel Osorio Uribe",
        alias: "Pacho",
        status: "feliz",
        moneySpent: 0,
        moneyWon: 0
    });

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfileData({
            ...profileData,
            [name]: value
        });
    };

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
                <button className="EditButton" onClick={handleEditToggle}></button>
                <div className="ProfileData">
                    {isEditing ? (
                        <>   <input className="EditName" type="text" name="name" value={profileData.name} onChange={handleChange} />
                        <input className="EditAlias" type="text" name="alias" value={profileData.alias} onChange={handleChange} />
                        <input className="EditStatus" type="text" name="status" value={profileData.status} onChange={handleChange} />
                        <button className=" SaveButton" onClick={handleEditToggle}>Guardar</button>
                        </>
                    ) : (
                        <>
                            <div className="Name">{profileData.name}</div>
                            <div className="Alias">{profileData.alias}</div>
                            <br></br>
                            <div className="Status">Estado:</div>
                            <div className="StatusText">{profileData.status}</div>
                            <br></br>
                            <div className="MoneyExpent">Dinero gastado: <br></br>{profileData.moneySpent}</div>
                            <div className="MoneyWon">Dinero ganado:<br></br>{profileData.moneyWon}</div>
                        </>
                    )}
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

export default Settings;
