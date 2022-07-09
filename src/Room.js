import react, {useState} from 'react';

function Room() {
    //const state = useState(true);
    //console.log(state);
    const [isLit, setLit] = useState(true); 
    const [age, setAge] = useState(23);
    function updateLit() {
        console.log("Button Clicked");
        setLit(!isLit);
    }
    return (
    <div>
        This room is {isLit? "lit" : "dark"}
        <br/>
        <button onClick={updateLit}>Toggle Light</button>
    </div>
    );
}

export default Room;
