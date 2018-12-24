import React from 'react';

const Header = (props)=>{
    return (
        <div>
            <h1>test {props.name} and i {props.age} years old</h1>
            <p>{props.children}</p>
            <input type="text" onChange={props.oncl} value={props.name} />
        </div>
    )
};

export default Header