import './App.css';
import {ButtonUsers} from "./ButtonUsers";
import {UsersList} from "./UsersList";
import {useState} from "react";

function App() {

    const [state, setState] = useState([]);


    const handleClickShow = () => {
        fetch('https://randomuser.me/api/?results=6')
            .then(res => res.json())
            .then(data => {
                setState(data.results)
            })
    }

    const handleClickAdd = () => {
        fetch('https://randomuser.me/api/?results=1')
            .then(res => res.json())
            .then(data => {
                setState(state.concat(data.results));
            })
    }
    return (

        <div className="App">
            <ButtonUsers click={handleClickShow} text="Show random 6 users"/>
            <ButtonUsers click={handleClickAdd} text="Add new user"/>
            <UsersList state={state}/>
        </div>
    )
}

export default App;
