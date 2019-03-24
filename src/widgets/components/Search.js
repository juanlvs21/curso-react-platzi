import React from 'react';
import './Search.css';
// function Search(props) {
//   return (
//     <form action=""></form>
//   )
// }

const Search = (props) => (
  <form 
  className="Search" 
  onSubmit={props.handleSubmit}
  >
    <input
      ref={props.setRef}
      type="text"
      name="search"
      placeholder="Busca tu video favorito"
      className="Search-input"
      value={props.value}
      onChange={props.handleChange}
    />
  </form>
)

export default Search