import "./styles.css";
import {useState} from 'react';

var EmojiDatabase = {
  "😀" : "Grinning Face",
  "😁" : "Beaming Face with Smiling Eyes",
  "😅" : "Grinning Face with Sweat",
  "🤣" : "Rolling on the Floor Laughing",
  "😂" : "Face with Tears of Joy",
  "😉" : "Winking Face",
  "😊" : "Smiling Face with Smiling Eyes",
  "😍" : "Smiling Face with Heart-Eyes",
  "😋" : "Face Savoring Food",
  "😜" : "Winking Face with Tongue",
  "🤔" : "Thinking Face",
  "😏" : "Smirking Face",
};
let emojiArray = Object.keys(EmojiDatabase);  
 function App() {
   const [emoji, setEmoji] = useState('');
   function InputHandler(event){
    let userInput =  event.target.value;
    let emojiMeaning = EmojiDatabase[userInput];
    
    if(emojiMeaning===undefined)
    {
      emojiMeaning = "Emoji not found"
    }
    else
    setEmoji(emojiMeaning)
  }
  function clickHandler(item){
    let emojiMeaning = EmojiDatabase[item];
    setEmoji(emojiMeaning);
  }
  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input 
      placeholder="Enter an emoji"
      onChange = {InputHandler}/>
      <div className="output">{emoji}</div>
      <p>Emoji we know</p>
      <div>
      {
        emojiArray.map((item)=>{
          return (
            <span 
              onClick={()=>clickHandler(item)} 
              key={item}
              style={{padding:".6rem", fontSize: "2rem", cursor:"pointer"}}> {item} </span>
          )})
      }
      </div>
      </div>
  );
}
export default App
