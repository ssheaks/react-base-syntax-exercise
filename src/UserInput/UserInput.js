import React from 'react';

const UserInput = (props) => {
    console.log('input:', props)
    return(
    <div className='userInput'>
        <h1>User Input</h1>
        <input type='text' onChange={props.changeName} value={props.username}/>
    </div>
    )
}

export default UserInput