import './App.css';
import {ButtonUsers} from "./ButtonUsers";
import {UsersList} from "./UsersList";
import {useState} from "react";

function App() {

    const [state, setState] = useState([]);


    const handleClick = () => {
        fetch('https://randomuser.me/api/?results=6')
            .then(res => res.json())
            .then(data => {
                setState(data.results)
            })
    }
    return (

        <div className="App">
            <ButtonUsers click={handleClick}/>
            <UsersList state={state}/>
        </div>
    );
}

export default App;
