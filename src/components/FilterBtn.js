import React from 'react';

const FilterBtn = (props) => (
    <button>Show Simpsons only : {props.show ? "ON" : "OFF"}</button>
)

export default FilterBtn;