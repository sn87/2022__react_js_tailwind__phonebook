const Person = ({person}) => {
    return (
        <tr className="odd:bg-white even:bg-slate-100">
        <td>{person.name}</td>
        <td>{person.number}</td>
        </tr>
    )
  
}

export default Person;
