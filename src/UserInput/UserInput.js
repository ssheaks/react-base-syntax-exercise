import React from 'react';

const UserInput = (props) => {
    return(
    <div className='userInput'>
        <h1>User Input</h1>
        <input type='text' onChange={props.changeName}/>
    </div>
    )
}

export default UserInput