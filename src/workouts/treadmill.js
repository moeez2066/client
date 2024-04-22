import React, { useState } from 'react';
import treadmillGif from '../img/treadmill.gif';
import { getTodaysDate } from '../Home';

export function Treadmill() {
    const [speed, setSpeed] = useState("");
    const [incline, setIncline] = useState("");
    const [minutes, setMinutes] = useState("");

    const [summary, setSummary] = useState("");


    function getSummary() {
        const caloriesBurned = ((0.1 * speed) + (1.8 * speed * incline) + 3.5) * minutes;

        return (
            <div>
                <p>{getTodaysDate()}</p>
                <p>{`Today you spent ${minutes} minutes on the treadmill at ${speed} mi/hr at ${incline} degrees.`}</p>
                <p>{`\u{1F525}Today you burned ${caloriesBurned} Calories!\u{1F525}`}</p>
                <img src={treadmillGif} alt="treadmill gif" />
            </div>
        );
    }

    function onSubmit(e) {
        e.preventDefault();

        setSummary(getSummary());
    }

    return (
        <div>
            <h3 class="list-header">Guide</h3>
            <ol class="list-no-top-margin">
                <li><span class="bold">Setup</span></li>
                <ul class="list-disc-bullets">
                    <li>Start by standing on the treadmill with your feet on the side rails.</li>
                    <li>Set the speed and incline to a comfortable level before starting.</li>
                </ul>
                <li><span class="bold">Starting</span></li>
                <ul class="list-disc-bullets">
                    <li>Hold onto the handrails for balance and safety as you begin walking or jogging.</li>
                </ul>
                <li><span class="bold">Walking or Running</span></li>
                <ul class="list-disc-bullets">
                    <li>Gradually increase the speed to a pace that challenges you but allows you to maintain good form.</li>
                    <li>Keep your posture upright, shoulders relaxed, and core engaged.</li>
                    <li>Land on your mid-foot and roll through to your toes with each step.</li>
                </ul>
                <li><span class="bold">Cool Down</span></li>
                <ul class="list-disc-bullets">
                    <li>Once you've completed your workout, gradually reduce the speed to a slower pace for a few minutes to cool down.</li>
                </ul>
            </ol>

            <h3 class="list-header">Muscle Groups Worked</h3>
            <ul class="list-no-top-margin">
                <li><span class="bold">Primary Muscles</span>: The treadmill primarily targets the muscles of the lower body, including:</li>
                <ul>
                    <li>Quadriceps (front of the thighs)</li>
                    <li>Hamstrings (back of the thighs)</li>
                    <li>Calves (gastrocnemius and soleus)</li>
                    <li>Glutes (buttocks)</li>
                </ul>
            </ul>

            <h3 class="list-header">Related Exercises</h3>
            <ol class="list-no-top-margin">
                <li><span class="bold">Outdoor Running</span>: Provides similar benefits to treadmill running but with variations in terrain and scenery.</li>
                <li><span class="bold">Stair Climbing</span>: Mimics the uphill incline of a treadmill and works the same lower-body muscles, particularly the calves and glutes.</li>
                <li><span class="bold">Elliptical Machine</span>: Offers a low-impact alternative to treadmill running, engaging similar muscle groups while reducing impact on the joints.</li>
                <li><span class="bold">Cycling</span>: Works the lower body, including the quadriceps, hamstrings, and calves, while being gentler on the joints compared to running.</li>
            </ol>

            <form onSubmit={onSubmit}>
                <div>
                    <label>Speed: </label>
                    <input type="number" value={speed} onChange={(e) => setSpeed(e.target.value)} />
                    <label>mi/hr</label>
                </div>
                <div>
                    <label>Incline: </label>
                    <input type="number" value={incline} onChange={(e) => setIncline(e.target.value)} />
                    <label>degrees</label>
                </div>
                <div>
                    <label>Time: </label>
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

export default Treadmill;