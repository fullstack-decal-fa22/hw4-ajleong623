import React from 'react';

/* TODO: Translate the below class component to a functional component! */
function Color(props) {
    return (
        <button onclick ={() => props.handleClick(props.color)}>Post props.color</button>
    )
}
export default Color;