import { useState, useEffect } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function CharacterSwitchPopup() {

  const [o,so] = useState(false);

  const open = () => {
    so(true);
    }

    const close = () => {
    so(false);
    }

  return (
    <div className="App">
        {/* {o && <button style={{position:"fixed",zIndex:"11",top:"6%",left:"78%",width:"16%",height:"8%",opacity:"0.9", border:"5px solid blue",fontSize:"100%"}} onClick={close}>❌</button>}
        {!o && <button style={{position:"fixed",zIndex:"11",top:"6%",left:"78%",width:"16%",height:"8%",opacity:"0.5",border:"5px solid brown"}} onClick={open}>Menu</button>}
        {o && <div style={{position:"fixed",zIndex:"10",top:"10%",left:"5%",bottom:"10%",right:"5%",background:"white",borderRadius:"10%",border:"5px solid blue"}}>
            <Link to={'/socrates'}><button style={{backgroundImage:`url(${socratesBG})`,backgroundSize:"100% 100%",position:"fixed",zIndex:"11",top:"15%",left:"10%",width:"15%",height:"10%",opacity:"0.6"}}><span style={{background:"white"}}>Socrates</span></button></Link>
            <Link to={'/grant-cardone'}><button style={{backgroundImage:`url(${grantcardoneBG})`,backgroundSize:"100% 100%",position:"fixed",zIndex:"11",top:"15%",left:"30%",width:"15%",height:"10%",opacity:"0.6"}}><span style={{background:"white"}}>Grant</span></button></Link>
            <Link to={'/kanye-west'}><button style={{backgroundImage:`url(${kanyewestBG})`,backgroundSize:"100% 100%",backgroundImage:`url(${socratesBG})`,backgroundSize:"100% 100%",position:"fixed",zIndex:"11",top:"15%",left:"50%",width:"15%",height:"10%",opacity:"0.6"}}><span style={{background:"white"}}>Ye</span></button></Link>
            <Link to={'/wolf-of-wall-street'}><button style={{backgroundImage:`url(${wolfofwallstreetBG})`,backgroundSize:"100% 100%",position:"fixed",zIndex:"11",top:"15%",left:"70%",width:"15%",height:"10%",opacity:"0.6"}}><span style={{background:"white"}}>Wolf</span></button></Link>
            <Link to={'/travis-scott'}><button style={{backgroundImage:`url(${travisscottBG})`,backgroundSize:"100% 100%",position:"fixed",zIndex:"11",top:"30%",left:"10%",width:"15%",height:"10%",opacity:"0.6"}}><span style={{background:"white"}}>Travis</span></button></Link>
            <Link to={'/andrew-tate'}><button style={{backgroundImage:`url(${andrewtateBG})`,backgroundSize:"100% 100%",position:"fixed",zIndex:"11",top:"30%",left:"30%",width:"15%",height:"10%",opacity:"0.6"}}><span style={{background:"white"}}>Tate</span></button></Link>
            <Link to={'/tech-support'}><button style={{backgroundImage:`url(${techsupportBG})`,backgroundSize:"100% 100%",position:"fixed",zIndex:"11",top:"30%",left:"50%",width:"15%",height:"10%",opacity:"0.6"}}><span style={{background:"white"}}>Support</span></button></Link>
            <Link to={'/the-rock'}><button style={{backgroundImage:`url(${therockBG})`,backgroundSize:"100% 100%",position:"fixed",zIndex:"11",top:"30%",left:"70%",width:"15%",height:"10%",opacity:"0.6"}}><span style={{background:"white"}}>Rock</span></button></Link>
            <Link to={'/elon-musk'}><button style={{backgroundImage:`url(${elonmuskBG})`,backgroundSize:"100% 100%",position:"fixed",zIndex:"11",top:"45%",left:"10%",width:"15%",height:"10%",opacity:"0.6"}}><span style={{background:"white"}}>Elon</span></button></Link>
            <Link to={'/onlyfans-model'}><button style={{backgroundImage:`url(${onlyfansmodelBG})`,backgroundSize:"100% 100%",position:"fixed",zIndex:"11",top:"45%",left:"30%",width:"15%",height:"10%",opacity:"0.6"}}><span style={{background:"white"}}>OnlyFans</span></button></Link>
            <Link to={'/dealer'}><button style={{backgroundImage:`url(${dealerBG})`,backgroundSize:"100% 100%",position:"fixed",zIndex:"11",top:"45%",left:"50%",width:"15%",height:"10%",opacity:"0.6"}}><span style={{background:"white"}}>Dealer</span></button></Link>
            <Link to={'/alien'}><button style={{backgroundImage:`url(${alienBG})`,backgroundSize:"100% 100%",position:"fixed",zIndex:"11",top:"45%",left:"70%",width:"15%",height:"10%",opacity:"0.6"}}><span style={{background:"white"}}>Alien</span></button></Link>
            <Link to={'/god'}><button style={{backgroundImage:`url(${godBG})`,backgroundSize:"100% 100%",position:"fixed",zIndex:"11",top:"60%",left:"10%",width:"15%",height:"10%",opacity:"0.6"}}><span style={{background:"white"}}>God</span></button></Link>
            <Link to={'/rosalina'}><button style={{backgroundImage:`url(${rosalinaBG})`,backgroundSize:"100% 100%",position:"fixed",zIndex:"11",top:"60%",left:"30%",width:"15%",height:"10%",opacity:"0.6"}}><span style={{background:"white"}}>Rosalina</span></button></Link>
            <Link to={'/joe-rogan'}><button style={{backgroundImage:`url(${joeroganBG})`,backgroundSize:"100% 100%",position:"fixed",zIndex:"11",top:"60%",left:"50%",width:"15%",height:"10%",opacity:"0.6"}}><span style={{background:"white"}}>Joe</span></button></Link>
            <Link to={'/jack-harlow'}><button style={{backgroundImage:`url(${jackharlowBG})`,backgroundSize:"100% 100%",position:"fixed",zIndex:"11",top:"60%",left:"70%",width:"15%",height:"10%",opacity:"0.6"}}><span style={{background:"white"}}>Harlow</span></button></Link>
            <Link to={'/snoop-dogg'}><button style={{backgroundImage:`url(${snoopdoggBG})`,backgroundSize:"100% 100%",position:"fixed",zIndex:"11",top:"75%",left:"10%",width:"15%",height:"10%",opacity:"0.6"}}><span style={{background:"white"}}>Snoop</span></button></Link>
            <Link to={'/donald-trump'}><button style={{backgroundImage:`url(${donaldtrumpBG})`,backgroundSize:"100% 100%",position:"fixed",zIndex:"11",top:"75%",left:"30%",width:"15%",height:"10%",opacity:"0.6"}}><span style={{background:"white"}}>Trump</span></button></Link>
            <Link to={'/joe-biden'}><button style={{backgroundImage:`url(${joebidenBG})`,backgroundSize:"100% 100%",position:"fixed",zIndex:"11",top:"75%",left:"50%",width:"15%",height:"10%",opacity:"0.6"}}><span style={{background:"white"}}>Biden</span></button></Link>
            <Link to={'/putin'}><button style={{backgroundImage:`url(${putinBG})`,backgroundSize:"100% 100%",position:"fixed",zIndex:"11",top:"75%",left:"70%",width:"15%",height:"10%",opacity:"0.6"}}><span style={{background:"white"}}>Putin</span></button></Link>
        </div>} */}
    </div>
  );
}

export default CharacterSwitchPopup;
