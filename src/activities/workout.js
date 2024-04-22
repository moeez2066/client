import React, { useState } from 'react';
import Treadmill from '../workouts/treadmill';
import BenchPress from '../workouts/benchPress';
import LegPress from '../workouts/backSquat';

export function Workout() {
    const [selectedWorkout, setSelectedWorkout] = useState("treadmill");

    const workoutComponent = {
        "treadmill": <Treadmill />,
        "benchPress": <BenchPress />,
        "legPress": <LegPress />
    };


    return (
        <div>
            <select name="exercises" onChange={e => setSelectedWorkout(e.target.value)}>
                <option value="treadmill">treadmill</option>
                <option value="benchPress">bench press</option>
                <option value="legPress">back squat</option>
            </select>

            {workoutComponent[selectedWorkout]}
        </div>
    );
}

export default Workout;