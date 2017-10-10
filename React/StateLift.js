import React from "react";

const myStyle= {
  borderRadius: 4,
  borderWidth: 1,
  borderColor: 'steelBlue',
  borderStyle: "solid",
  display: "inlineBlock", 
  float: "left", 
  margin: 5 ,
  padding: 8,
}

/* You must complete this Component. 
  - It should receive a addPerson handler from the parent
  - And use the Controlled Component Pattern to read handle inputs
*/
class NewPerson extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>New Person  - Please Complete me</p>
        <input />
        <button>Save</button>
      </div>
    )
  }
}

/* You must complete this Component. 
  - It should receive the list of persons from the the parent
  - And create an <ul> containing all names 
*/
class AllPersons extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>All Persons - Complete me</p>
        <ul>
        </ul>
      </div>
    )
  }
}


export default class StateLift extends React.Component {

  constructor(props) {
    super(props);
    //Some intial data to start with
    this.state = { persons: [{ name: "Peter" }, { name: "Ole" }] };
  }

  render() {
    return (
      <div >
        <h2>Lifting State Up Demo</h2>
        <h4>Total Persons: {this.state.persons.length}</h4>
        <div style={myStyle}>
          <AllPersons /*Figure out what to put here */  />
        </div>
        <div style={myStyle}>
          <NewPerson  /* Figure out what to put here */  />
        </div>
      </div>
    );
  }
}
