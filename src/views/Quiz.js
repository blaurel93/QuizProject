import React, { useState } from "react";
import { useAuth0 } from "../react-auth0-spa";
import axios from "axios";

function Quiz() {
    const { loading, user } = useAuth0();
    const [state, setState] = useState({
        Pa1: "",
        Pa2: ""
    })

    const handleTyping = (e) => {

        console.log("we are typing", e.target.value)
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const handleSubmit = () => {
        var submission = {}
        submission.user_email = user.user_email
        submission.answers = [state.Pa1, state.Pa2]
        axios.post("http://localhost:3001/savequiz", submission)
            .then(function () {
                console.log("were back from the backend")
            })
    }

    console.log("this is our state", state)
    return (
        <div>
            <div>
                <h1> Hello from my quiz!!</h1>
                <p name="Planet">The Universe</p>
            </div>
            <div>
                <p name="p1">How far is the Earth from the Sun?</p>
                <input name="Pa1" onChange={handleTyping}></input>
            </div>
            <div>
                <p name="p2">How far is the Earth from the Sun?</p>
                <input name="Pa2" onChange={handleTyping}></input>
            </div>
            <div>
                <button name="button" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}

export default Quiz;