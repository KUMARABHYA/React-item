import React from 'react';
import './Item.css'

const Fruits = (props) => {
    console.log(props);

    return (
        <div>
            <table className="table">
                <tr className="row">
                    <td className="name" >{props.name}</td>
                    <td>{props.quantity}</td>
                    <td className="deleteButton" onClick={props.click}>delete</td>
                </tr>
            </table>
        </div>
    )
};

export default Fruits;