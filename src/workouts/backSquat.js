import React, { useState } from 'react';
import backSquatGif from '../img/backsquat.gif';
import { getTodaysDate } from '../Home';

export function BackSquat() {
    const [weight, setWeight] = useState("");
    const [reps, setReps] = useState("");
    const [sets, setSets] = useState("");

    const [summary, setSummary] = useState("");


    function getSummary() {
        const caloriesBurned = 0.32 * weight / 25  * sets * reps;

        return (
            <div>
                <p>{getTodaysDate()}</p>
                <p>{`Today you did ${sets} sets of ${reps} reps of bench press at ${weight} lbs.`}</p>
                <p>{`\u{1F525}Today you burned ${caloriesBurned} Calories!\u{1F525}`}</p>
                <img src={backSquatGif} alt="back squat gif" />
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
                    <li>Stand with your feet shoulder-width apart and position a barbell on a squat rack at about chest height.</li>
                    <li>Step under the barbell and place it across your upper back, resting it on your trapezius muscles (upper traps) or slightly lower on your rear delts.</li>
                </ul>
                <li><span class="bold">Lift Off</span></li>
                <ul class="list-disc-bullets">
                    <li>Grip the barbell with your hands slightly wider than shoulder-width apart to stabilize the bar on your back.</li>
                    <li>Lift the barbell off the rack by straightening your legs and stepping back to clear the rack.</li>
                </ul>
                <li><span class="bold">Squatting</span></li>
                <ul class="list-disc-bullets">
                    <li>Keep your chest up, back straight, and core engaged.</li>
                    <li>Lower your body by bending your knees and pushing your hips back, as if you're sitting down into a chair.</li>
                    <li>Lower yourself until your thighs are at least parallel to the ground or lower (depending on flexibility and comfort).</li>
                </ul>
                <li><span class="bold">Standing Up</span></li>
                <ul class="list-disc-bullets">
                    <li>Push through your heels and extend your hips and knees simultaneously to lift yourself back up to the starting position.</li>
                    <li>Keep your chest up and maintain control throughout the movement.</li>
                </ul>
                <li><span class="bold">Breathing</span></li>
                <ul class="list-disc-bullets">
                    <li>Inhale as you lower into the squat.</li>
                    <li>Exhale as you push back up to the starting position.</li>
                </ul>
            </ol>

            <h3 class="list-header">Muscle Groups Worked</h3>
            <ul class="list-no-top-margin">
                <li><span class="bold">Primary Muscles</span>: The back squat primarily targets the quadriceps (front of the thighs), gluteus maximus (buttocks), hamstrings (back of the thighs), and erector spinae (lower back muscles).</li>
                <li><span class="bold">Secondary Muscles</span>: It also engages the calves, adductors (inner thighs), and core muscles for stabilization.</li>
            </ul>

            <h3 class="list-header">Related Exercises</h3>
            <ol class="list-no-top-margin">
                <li><span class="bold">Front Squat</span>: Similar to the back squat but with the barbell held in front of your shoulders, which emphasizes the quads and core more.</li>
                <li><span class="bold">Overhead Squat</span>: Involves holding a barbell or dumbbells overhead while squatting, challenging shoulder stability and overall body strength.</li>
                <li><span class="bold">Bulgarian Split Squat</span>: A single-leg squat variation that focuses on each leg individually, improving balance and unilateral leg strength.</li>
                <li><span class="bold">Leg Press</span>: Uses a machine to perform a squatting motion in a seated position, primarily targeting the quads, hamstrings, and glutes.</li>
            </ol>

            <form onSubmit={onSubmit}>
                <div>
                    <label>Weight: </label>
                    <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
                    <label>lbs</label>
                </div>
                <div>
                    <label>Reps: </label>
                    <input type="number" value={reps} onChange={(e) => setReps(e.target.value)} />
                    <label></label>
                </div>
                <div>
                    <label>Sets: </label>
                    <input type="number" value={sets} onChange={(e) => setSets(e.target.value)} />
                    <label></label>
                </div>
                <input type="submit"></input>
            </form>

            <hr></hr>

            <p>{summary}</p>
        </div>
    );
}

export default BackSquat;