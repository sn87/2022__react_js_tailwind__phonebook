import Person from './Person.js';

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

export default Persons;