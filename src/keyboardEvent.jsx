import React, { useState } from 'react';

export default function KeyEvents() {
    function handleKeyDown(e) {
        alert('Key pressed: ', <h1>{e.key}</h1>);
        if(e.key === 'Enter'){
            alert('Enter key was pressed');
        }
    }
    return <input onKeyDown={handleKeyDown} placeholder="Type something..." />;
}
