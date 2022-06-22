import { useState } from 'react'

const PersonForm = ({createPerson}) => {

    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');

    // event handler for adding the person
    const addPerson = (event) => {
      event.preventDefault();
      createPerson(newName, newNumber);
      setNewName('');
      setNewNumber('');   
    }

    // event handler for name-input
    const handleNameChange = (event) => {
      setNewName(event.target.value);
    }

    // event handler for number-input
    const handleNumberChange = (event) => {
      setNewNumber(event.target.value);
    }

    return (
      <form>
          <label htmlFor="name" className="text-lg">Name</label>
          <input value={newName} className="border py-2 px-3 w-full rounded" onChange={handleNameChange} type="text" name="name" id="name"  />
          <label htmlFor="number" className="text-lg">Number</label>
          <input value={newNumber} className="border py-2 px-3 w-full rounded" onChange={handleNumberChange} type="tel" name="number" id="number" />
          <button type="submit" className="block bg-blue-600 hover:bg-blue-900 text-white text-lg p-4 my-2 rounded" onClick={addPerson}>Add Person</button>
    </form>
    );
  }

  export default PersonForm;