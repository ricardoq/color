import React, { Component } from 'react';

import './add-remove.css';

function AddRemove({remove, add}) {

    return (
        <div className="button-group">
            <button className="remove" onClick={remove}>Remove color</button>        
            <button className="add" onClick={add}>Add color</button>        
        </div>
    );
}

export default AddRemove;