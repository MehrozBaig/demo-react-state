import react, {useState} from 'react';
import './Room.css'

function Room() {
    //const state = useState(true);
    //console.log(state);
    let [isLit, setLit] = useState(true); 
    function updateLit() {
        console.log("Button Clicked");
        setLit(!isLit);
    }
    return (
    <div className={'room ${isLit? "lit": "dark"}'}>
        This room is {isLit? "lit" : "dark"}
        <br/>
        <button onClick={updateLit}>Toggle Light</button>
    </div>
    );
}

export default Room;
