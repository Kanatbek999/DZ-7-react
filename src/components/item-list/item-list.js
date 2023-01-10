import React, { useEffect, useState, useContext } from 'react';
import './item-list.css';
import { Consumer } from '../swapi-context';



const ItemList = ({setItemId, swapi}) => {
  const [state, setState] = useState({data: []})


  console.log(ItemList);

  useEffect(() => {
    swapi.getAllPeople()
    .then(data => setState({data: data}))
  }, [])

   console.log(useEffect);

  const content = state.data.map(item => {
   
    return(
       <li key={item.id} onClick={() => setItemId(item.id)} className="list-group-item">{item.name}</li> 
    )
  })
  console.log(content);
  return(
  <ul className="item-list list-group">
    {content}
  </ul>
  )
}

export default ItemList    