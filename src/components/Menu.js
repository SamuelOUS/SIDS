import '../styles/Global.css';
import React from 'react';
import { Link } from 'react-router-dom';

const ChatButtons = [
  { id: 1, text: 'Cristo', imgSrc: '/components/272243943_447319577103312_1197167401850518755_n.jpg' },
  { id: 2, text: 'Pacho', imgSrc: '/components/285291523_856188839103906_1318554899983793930_n.jpg' },
  { id: 3, text: 'Nikel', imgSrc: '/components/338421478_717270473428490_1097359253517125803_n.jpg' },
  { id: 4, text: 'Milo', imgSrc: '/components/365434125_1226280028054187_9088930986898858553_n.jpg' },
  { id: 5, text: 'Nene', imgSrc: '/components/image.png' },
];

const Menu = () => (
  <div className='dragBar'>
    <div className='InterfaceLayer'>
      <div className="menu">
        <div className="TopButtons">
          <div className="leftButtons">
            <Link to="/Profile"><button className="profile" /></Link>
          </div>
          <div className="rightButtons">
            <Link to="/Settings"><button className="settings" /></Link>
            <Link to="/SignIn"><button className="exit" /></Link>
          </div>
        </div>


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
      <div className='separator'></div>
        <Link to='/ShowMore'><button className='ShowMore'>Mostrar más</button></Link>
      </div>
    </div>
  </div>
);

export default Menu;
