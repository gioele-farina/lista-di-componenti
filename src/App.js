import './App.css';
import React, { Component } from 'react';

import Person from './Person/Person.js';

class App extends Component {

  state = {
    persons: [
      {id: '1', name: 'Gioele'},
      {id: '2', name: 'Valentina'},
      {id: '3', name: 'Pippo'},
      {id: '4', name: 'Pippa'},
    ]
  }

  changeNameHandler = (event, personId) => {
    const newPersons = [...this.state.persons];

    const personIndex = newPersons.findIndex(p => {
      return p.id == personId;
    });

    const person = {
      ...newPersons[personIndex]
    };
    person.name = event.target.value;

    newPersons[personIndex] = person;

    this.setState({
      persons: newPersons,
    })
  }

  render() {

    let persons = (
      <div>
        {
          this.state.persons.map((person, index) => {
            return (
              <div>
                <Person
                  key={person.id}
                  name={person.name}
                  changeName={(event) => this.changeNameHandler(event, person.id)}
                />
              </div>
            );
          })
        }
      </div>
    );

    return (
      <div className="App">
        <h1>Fare una lista di persone. Ogni persona ha un input che permette di variarne il nome.</h1>
        {persons}
      </div>
    );
  }
}

export default App;
