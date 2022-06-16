import { useState } from 'react'

const Filter = (props) => {
  return(
    <div>
      <label htmlFor="filter" className="text-lg">Filter by Name (just start typing):</label>
      <input value={props.filter} className="border py-2 px-3 w-full rounded" onChange={props.handleFilterChange} type="text" name="filter" id="filter" ></input>
    </div>
  )
}

const PersonForm = (props) => {
  return (
    <form>
        <label htmlFor="name" className="text-lg">Name: </label>
        <input value={props.newName} className="border py-2 px-3 w-full rounded" onChange={props.handleNameChange} type="text" name="name" id="name"  />
        <label htmlFor="number" className="text-lg">Number: </label>
        <input value={props.newNumber} className="border py-2 px-3 w-full rounded" onChange={props.handleNumberChange} type="tel" name="number" id="number" />
        <button type="submit" className="block bg-blue-600 hover:bg-blue-900 text-white text-lg p-4 my-2 rounded" onClick={props.addPerson}>Add Person</button>
  </form>
  );
}

const Persons = ({persons, filter}) => {

  return (
    <table className="text-lg text-left w-full mt-10">
      <thead>
        <tr>
          <th>Name</th>
          <th>Number</th>
        </tr>
      </thead>
      <tbody>
      {persons.filter(personFilter => 
        personFilter.name.toLowerCase().includes(filter.toLowerCase()) || filter === '')
      .map(person => 
        <Person key={person.id} person={person}/>
      )}
      </tbody>
    </table>
  );
}

const Person = ({person}) => {
  return (
    <tr className="odd:bg-white even:bg-slate-100">
      <td>{person.name}</td>
      <td>{person.number}</td>
    </tr>
  )

}

const App = () => {
  const [persons, setPersons] = useState([
      { name: 'Arielle Mermaid ', number: '050-123456', id: 1 },
      { name: 'Bea Catwoman', number: '48-30-536456', id: 2 },
      { name: 'Batman Galore', number: '1-42-224455', id: 3 },
      { name: 'Kit Hasselhoff', number: '030-12345789', id: 4 }
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('')

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length+1
    }

    let personExists = false;
    persons.forEach(person => {
      if (person.name === personObject.name && person.number === personObject.number) personExists = true;
    });

    if (personExists){
      alert(`${newName} is already added to phonebook`); 
    }else{
      setPersons(persons.concat(personObject));
      setNewName('');
      setNewNumber('');
    }    
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  }


  return (
    <div className="container mx-auto lg:w-2/3">
      <h2 className="text-2xl text-center font-bold">Phonebook</h2>
      <p className="text-center">(Minimalistic and responsive design with React and Tailwind CSS)</p>    
      <div className="md:flex md:flex-row mt-10">        
        <div className="md:basis-1/2 px-5 md:border-r-4 border-t-4">          
          <h3 className="text-xl font-bold mb-2">Numbers</h3>
          <Filter filter={filter} handleFilterChange={handleFilterChange} />
          <Persons persons={persons} filter={filter}/>
          
        </div>
        <div className="md:basis-1/2 px-5 border-t-4">
          <h3 className="text-xl font-bold mb-2">Add a new Person</h3>
          <PersonForm 
            handleNameChange={handleNameChange} 
            handleNumberChange={handleNumberChange} 
            addPerson={addPerson}
            newName={newName}
            newNumber={newNumber}
          />
        </div>
      </div>
    </div>
  )
}

export default App