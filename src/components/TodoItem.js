import React from 'react';

export default function TodoItem(probs){
    return(
        <div>
            <li>
                <span> <strong><u>title:</u></strong> {probs.title} </span>
                <span> <strong><u>description:</u></strong> {probs.description}</span>
            </li>
        </div>
    )
}