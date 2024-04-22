import React, { useState } from 'react';
import basketballGif from '../img/basketball.gif';
import soccerGif from '../img/soccer.gif';
import volleyballGif from '../img/volleyball.gif';
import { getTodaysDate } from '../Home';

export function Sports() {
    const [minutes, setMinutes] = useState("");
    const [sport, setSports] = useState("basketball");

    const [summary, setSummary] = useState("");

    const sportGif = {
        "basketball": basketballGif,
        "soccer": soccerGif,
        "volleyball": volleyballGif
    }

    const sportCalories = {
        "basketball": 5,
        "soccer": 10,
        "volleyball": 5
    }


    function getSummary() {
        const caloriesBurned = sportCalories[sport] * minutes;

        return (
            <div>
                <p>{getTodaysDate()}</p>
                <p>{`Today you spent ${minutes} minutes playing ${sport}.`}</p>
                <p>{`\u{1F525}Today you burned ${caloriesBurned} Calories!\u{1F525}`}</p>
                <img src={sportGif[sport]} alt={`${sport} gif`} />
            </div>
        );
    }

    function onSubmit(e) {
        e.preventDefault();

        setSummary(getSummary());
    }


    return (
        <div>
            <select name="sports" value={sport} onChange={e => setSports(e.target.value)}>
                <option value="basketball">basketball</option>
                <option value="soccer">soccer</option>
                <option value="volleyball">volleyball</option>
            </select>

            <form onSubmit={onSubmit}>
                <div>
                    <label>Time Spent: </label>
                    <input type="number" value={minutes} onChange={(e) => setMinutes(e.target.value)} />
                    <label>minutes</label>
                </div>
                <input type="submit"></input>
            </form>

            <hr></hr>

            <p>{summary}</p>
        </div>
    );
}

export default Sports;