import React from 'react'

const Person = (props)=> {
    return (
        <div><p>I'm a {props.name}, I am {props.age} years old , i am from delhi</p>
        <p>{props.children}</p></div>
    )
}

export default Person;