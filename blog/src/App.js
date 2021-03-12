// import React, { Component } from 'react';
// // import logo from './logo.svg';
// import './App.css';

// import Person from './Person'
// import UserInput from './UserInput'
// import UserOutput from './UserOutput'

 
// class App extends Component {
//   state = {                   //state line 11 to 26
//     persons: [
//       {name:'Vicky',age: 20},
//       {name:'Abhi',age: 21},
//       {name:'Abhya',age: 23}
//     ],
//     otherState: 'some other value'
//   }
//   switchNameHandler = ()=> {   //Handling Event with Methods line 18 & 26
//     // console.log('was clicked')
//     this.setState({       // Manipulating the State
//       persons: [
//         {name:'Abhya',age: 23},
//       {name:'Abhi',age: 21},
//       {name:'vicky',age: 20}
//       ]
//     })
//   }
//   render() {
//     return(
//       <div className="App">
//         <h1>Hi, I'm Abhyanand</h1>
//         <p>I am working in TTN</p>
//         <button onClick={this.switchNameHandler} >Switch Name</button>
//        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
//        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>hobbies=cricket</Person>
//        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>  
       
//        {/* <UserInput />
//        <button>Submit</button>
//        <UserOutput />
//        <UserOutput />
//        <UserOutput />
//        <UserOutput /> */}
       

//       </div>
      
//     );
//   }
// }
// export default App;



import React, { useState } from "react";
import "./App.css";
import Fruits from './Item/Item';

function App() {
  const [fruitState, setFruitState] = useState({
    fruits: [],
  });

  const addRowHandler = (input_tag, name) => {
    console.log(name);
    input_tag.value = "";
    console.log(input_tag);
    var fname = name.split("-");
    console.log(fname);
    setFruitState({
      fruits: [
        ...fruitState.fruits,
        { id: name, name: fname[0], quantity: fname[1] },
       
      ],
    });
    console.log(fruitState.fruits);
  };

  const handleKeyPress = (event, input_tag, value) => {
    console.log(event);
    if (event.charCode === 13) {
      console.log(event);

      addRowHandler(input_tag, value);
    }
  };

  const deleteFruitHandler = (index) => {
    const fruits2 = [...fruitState.fruits];
    fruits2.splice(index, 1);
    setFruitState({
      fruits: fruits2,
    });
  };

  var fruits = (
    <div>
      {fruitState.fruits.map((fruit, index) => {
        return (
          <Fruits
            key={fruit.id}
            name={fruit.name}
            quantity={fruit.quantity}
            click={() => deleteFruitHandler(index)}
          />
        );
      })}
    </div>
  );

  return (
    <div className="App">
      <input
        type="text"
        id="configname"
        name="configname"
        onKeyPress={(event) =>
          handleKeyPress(
            event,
            document.getElementById("configname"),
            document.getElementById("configname").value
          )
        }
      ></input>
      <br />
      <button class="submitButton" 
        onClick={() =>
          addRowHandler(
            document.getElementById("configname"),
            document.getElementById("configname").value
          )
        }
      >
        Submit
      </button>
      {fruits}
    </div>
  );
}

export default App;