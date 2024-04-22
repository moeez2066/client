import React, { useState } from 'react';
import benchPressGif from '../img/benchpress.gif';
import { getTodaysDate } from '../Home';

export function BenchPress() {
    const [weight, setWeight] = useState("");
    const [reps, setReps] = useState("");
    const [sets, setSets] = useState("");

    const [summary, setSummary] = useState("");


    function getSummary() {
        const caloriesBurned = weight / 150 * 5 * reps * sets;

        return (
            <div>
                <p>{getTodaysDate()}</p>
                <p>{`Today you did ${sets} sets of ${reps} reps of bench press at ${weight} lbs.`}</p>
                <p>{`\u{1F525}Today you burned ${caloriesBurned} Calories!\u{1F525}`}</p>
                <img src={benchPressGif} alt="bench press gif" />
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
                    <li>Lie down on a flat bench with your feet flat on the ground.</li>
                    <li>Grip the barbell slightly wider than shoulder-width apart, with your hands positioned firmly on the bar.</li>
                </ul>
                <li><span class="bold">Lift Off</span></li>
                <ul class="list-disc-bullets">
                    <li>Lift the barbell off the rack and hold it directly above your chest with your arms fully extended.</li>
                </ul>
                <li><span class="bold">Lower the Bar</span></li>
                <ul class="list-disc-bullets">
                    <li>Slowly lower the barbell towards your chest, keeping your elbows at around a 45-degree angle to your body.</li>
                </ul>
                <li><span class="bold">Press Up</span></li>
                <ul class="list-disc-bullets">
                    <li>Press the barbell back up to the starting position by extending your arms, while maintaining control and stability throughout the movement.</li>
                </ul>
                <li><span class="bold">Breathing</span></li>
                <ul class="list-disc-bullets">
                    <li>Inhale as you lower the barbell towards your chest.</li>
                    <li>Exhale as you press the barbell back up.</li>
                </ul>
            </ol>

            <h3 class="list-header">Muscle Groups Worked</h3>
            <ul class="list-no-top-margin">
                <li><span class="bold">Primary Muscles</span>: The bench press primarily targets the pectoralis major (chest muscles).</li>
                <li><span class="bold">Secondary Muscles</span>: It also engages the anterior deltoids (front shoulders) and the triceps brachii (back of the arms).</li>
            </ul>

            <h3 class="list-header">Related Exercises</h3>
            <ol class="list-no-top-margin">
                <li><span class="bold">Incline Bench Press</span>: This variation targets the upper chest and front shoulders more than the flat bench press.</li>
                <li><span class="bold">Dumbbell Bench Press</span>: Similar to the barbell bench press but with dumbbells, allowing for a greater range of motion and engaging stabilizer muscles.</li>
                <li><span class="bold">Close-Grip Bench Press</span>: Targets the triceps more than the chest by using a narrower grip on the barbell.</li>
                <li><span class="bold">Push-Ups</span>: A bodyweight exercise that also works the chest, shoulders, and triceps.</li>
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

export default BenchPress;