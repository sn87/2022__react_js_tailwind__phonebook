const Filter = ({filterFunction}) => {
    
    // event handler for filter-input
    const handleFilterChange = (event) => {
        filterFunction(event.target.value);
    }

    return(
    <div>
      <label htmlFor="filter" className="text-lg">Filter by Name</label>
      <input className="border py-2 px-3 w-full rounded" onChange={handleFilterChange} type="text" name="filter" id="filter" ></input>
    </div>
  )
}

export default Filter;