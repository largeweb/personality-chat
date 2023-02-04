import { useState, useEffect } from 'react';
import '../App.css';
// import bg from './images/dealer2.png';
import CharacterSwitchPage from '../components/CharacterSwitchPopup';
import ChatDialog from '../components/ChatDialog';

let bg;

function Dealer() {

  // useEffect to set the background image as a url
  useEffect(() => {
    bg = "https://i.postimg.cc/1tLsBmXr/dealer2.png";
    document.body.style.backgroundImage = `url(${bg})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
  }, []);

  const cn = "Dealer";
  const cg = "Dealer: Alright let's keep this on the low. What will it be this time? "; // the first cn# of chars are not visible in the chat

  const bp = `A weed drug dealer is an individual who sells marijuana or cannabis-based products illegally. They typically operate outside the legal market and may have connections with organized crime groups. They are known for their ability to acquire and distribute marijuana to clients, and for their knowledge of different strains and products. They may also be involved in other illegal activities such as money laundering, and are likely to be aware of and able to navigate the risks associated with their illegal activities.  Key characteristics of a weed drug dealer would include their ability to acquire and distribute marijuana, knowledge of different strains and products, ability to navigate the risks associated with their illegal activities, and strong connections with other individuals involved in illegal activities. They are also likely to be very discreet and secretive about their activities, as well as being able to adapt quickly to changes in the illegal market. The conversation begins with you. ${cg} `;
    const ubp = `User: `;

    const uep = ". ";
    const cbp = `${cn}: `;

    const cep = ". ";
  const ep = `${cn}: `;

  const lm = "Dealing...";

  return (
    <div className="App">
      <div style={{left:"0",right:"0",top:"0",bottom:"0",position:"fixed",backgroundSize:"cover",backgroundImage:`url(${bg})`,backgroundPosition:"center",backgroundRepeat:"no-repeat",zIndex:"-1"}}></div>
      <CharacterSwitchPage />
      <ChatDialog cn={cn} cg={cg} bp={bp} ep={ep} ubp={ubp} uep={uep} cbp={cbp} cep={cep} lm={lm} />
    </div>
  );
}

export default Dealer;
