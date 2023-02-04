import { useState, useEffect, useRef } from 'react';
import '../App.css';

// character name & user name
// beginning prompt, end prompt, user message beginning & end prompts, character message beginning & end prompts
// bp
//   ma: {
//     'ubp [user message] uep' ,
//     'cbp [character message] cep' ,
//     'ubp [user message] uep' ,
//     'cbp [character message] cep' ,
//     ...
//   }
// ep
function ChatDialog({cn, cg, bp, ep, ubp, uep, cbp, cep, lm}) {

  const [ma,sma] = useState([cg]); // messages array
  const [m,sm] = useState(''); // current message value
  const [s,ss] = useState(false); // sending bool

  const chatContainerRef = useRef(null);
  useEffect(() => {
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }, [ma]);

  const sendMessage = async() => {
    if(s) return;
    ss(true)
    console.log("sending")
    const mc = ubp + m + uep;
    sma([...ma, mc, cbp + lm]);
    let f=bp+ma.join('')+mc+ep;
    console.log("f is ");
    console.log(f);
    try {
      const response = await fetch('https://139.144.173.69:443/gpt-gen', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', },
        body: JSON.stringify({input:f}),
      })
      const data = await response.json();
      console.log(data.choices[0].text);
      const cc = cbp + data.choices[0].text + cep;
      sma([...ma, mc, cc]);
      sm('');
    } catch (error) { console.error('Error:', error); }
    ss(false)
  }

  const undoMessage = () => {
    console.log("undoing")
    // find a the position of the first semicolon
    let sliceLen = ma[ma.length-1].indexOf(':') + 2;
    // if slice len is greater than ubp or cn, then sliceLen is 0
    if (sliceLen > ubp.length+3 || sliceLen > cn.length+3) sliceLen = 0;
    console.log("sliceLen is " + sliceLen)
    sm(ma[ma.length-1].substring(sliceLen));
    sma(ma.slice(0, ma.length - 1));
  }

  return (
    <div className="App">
      <div>
        <textarea style={{opacity:"0.7",position:"fixed",overflowY:"scroll",top:"80%",width:"60%",left:"8%",height:"8%",fontSize:"12px",borderRadius:"2%",border:"4px solid blue",backgroundColor:"lightblue",zIndex:"3"}} type="text" value={m} placeholder={`Ask ${cn} Anything...`} onChange={(e) => sm(e.target.value)} />
        <button onClick={sendMessage} style={s ? {display:"none"} : {position:"fixed",top:"80%",textAlign:"center",width:"24%",left:"70%",fontSize:"10px",height:"6%",border:"3px solid blue",borderRadius:"10%",opacity:"0.7",zIndex:"3"}}>Send 🔥</button>
        <button onClick={undoMessage} style={{position:"fixed",top:"86%",textAlign:"center",width:"12%",left:"82%",fontSize:"10px",height:"4%",border:"3px solid blue",borderRadius:"10%",opacity:"0.7",zIndex:"3"}}>Undo 📲</button>
        <button onClick={(e) => sma([cg])} style={{position:"fixed",textAlign:"center",top:"86%",width:"12%",left:"70%",fontSize:"10px",height:"4%",border:"3px solid blue",borderRadius:"10%",backgroundColor:"white",opacity:"0.7",zIndex:"3"}}>Reset 🔁</button>
        <div ref={chatContainerRef} className='message-box'>
        {ma.map((mc, mi) => {
          const isCharMessage = mc.startsWith(cbp);
          return (
            <div key={mi} className={`${isCharMessage ? "char-message" : "user-message"}`}>
              {isCharMessage ? <div style={{marginLeft:"15px",fontSize:"12px"}}> {'>'} {cn}</div> : <div style={{marginRight:"15px",fontSize:"12px"}}>User {'<'} </div>}
              {isCharMessage ? mc.substring(cbp.length) : mc.substring(ubp.length)}
            </div>
          );
        })}
        </div>
      </div>
    </div>
  );
}

export default ChatDialog;