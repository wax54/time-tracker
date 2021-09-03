import React, {useState} from 'react';
import NewGoal from '../forms/NewGoal';

const SetGoals = () => {
    const [ timeFrame, setTimeFrame ] = useState('Every Week');

    return (
        <div className="container-fluid p-2 align-items-center justify-content-around">
            <div className="row border m-3 p-4 rounded shadow justify-content-center">
                <h1>{timeFrame} I want to spend...</h1>
                <h4>20 Hours doing anything for school</h4> 
                <h4>5 Hours coding for school</h4>
                <h4>2 Hours coding for fun</h4>
                <h4>And...</h4>
                <NewGoal timeFrame={timeFrame} />
            </div>
        </div>
    )
};

export default SetGoals