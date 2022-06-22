import { useState } from 'react';
import Persons from './components/Persons.js';
import PersonForm from './components/PersonForm.js';
import Filter from './components/Filter.js';

const App = () => {
  const [persons, setPersons] = useState([
      { name: 'Arielle Mermaid ', number: '050-123456', id: 1 },
      { name: 'Bea Catwoman', number: '48-30-536456', id: 2 },
      { name: 'Batman Galore', number: '1-42-224455', id: 3 },
      { name: 'Kit Hasselhoff', number: '030-12345789', id: 4 }
  ]);
  const [filter, setFilter] = useState('')

  // create a person object and save it to state
  const createPerson = (name, number) => {
    const personObject = {
      name: name,
      number: number,
      id: persons.length+1
    }

    // check if the person with that number exists already
    let personExists = false;
    persons.forEach(person => {
      if (person.name === personObject.name && person.number === personObject.number) personExists = true;
    });

    personExists 
      ? alert(`${name} is already added to phonebook`)
      : setPersons(persons.concat(personObject));    
    
  }

  // filter function: set input to state object
  const filterFunction = (input) => {
    setFilter(input);
  }

  return (
    <div className="container mx-auto lg:w-2/3">
      <h2 className="text-2xl text-center font-bold">Phonebook</h2>
      <p className="text-center">(Minimalistic and responsive design with React and Tailwind CSS)</p>    
      <div className="md:flex md:flex-row mt-10">        
        <div className="md:basis-1/2 px-5 md:border-r-4 border-t-4">          
          <h3 className="text-xl font-bold mb-2">Numbers</h3>
          <Filter filterFunction={filterFunction} />
          <Persons persons={persons} filter={filter}/>          
        </div>
        <div className="md:basis-1/2 px-5 border-t-4">
          <h3 className="text-xl font-bold mb-2">Add a new Person</h3>
          <PersonForm createPerson={createPerson} />
        </div>
      </div>
    </div>
  )
}

export default App;