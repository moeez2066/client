import React, { useState } from 'react';
import { Workout } from './activities/workout';
import { Sports } from './activities/sports';
import arm from './img/arm.png';
import './styles/styles.css'; // Import your CSS file

export function Home() {
    const [workoutToggle, setWorkoutToggle] = useState(false);
    const [sportsToggle, setSportsToggle] = useState(false);

    return (
        <div
            class="container">
            <div class="title-image">
                <img src={arm} alt="GymByte" width="117.5" height="160" />
                <h1>GymByte</h1>
            </div>
            <h2>Want to make your workout more interactive?</h2>
            <h3>THANK YOU FOR COMING TO THE CRC TODAY!</h3>
            <h4>If you would like some insight on your workout for today please fill this out after each workout or fill it out once you finish your workout.</h4>

            <hr></hr>

            <form>
                <p>Are you here for a workout or to play sports?</p>

                <input
                    type="radio"
                    name="activity"
                    value={workoutToggle}
                    onChange={() => { setWorkoutToggle(true); setSportsToggle(false); }}
                />
                <label>Workout</label>

                <input
                    type="radio"
                    name="activity"
                    value={sportsToggle}
                    onChange={() => { setWorkoutToggle(false); setSportsToggle(true); }}
                />
                <label>Sports</label>
            </form>

            {
                workoutToggle
                &&
                <Workout />
            }

            {
                sportsToggle
                &&
                <Sports />
            }
        </div>
    );
}

export function getTodaysDate() {
    const days = {
        0: "Sunday",
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday",
        4: "Thursday",
        5: "Friday",
        6: "Saturday"
    }

    const months = {
        0: "January",
        1: "February",
        2: "March",
        3: "April",
        4: "May",
        5: "June",
        6: "July",
        7: "August",
        8: "September",
        9: "October",
        10: "November",
        11: "December"
    }

    const todaysDate = new Date();

    const day = todaysDate.getDay();
    const month = todaysDate.getMonth();
    const date = todaysDate.getDate();
    const year = todaysDate.getFullYear();

    return `${days[day]}, ${months[month]} ${date}, ${year}`
}

export default Home;