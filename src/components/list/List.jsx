import React from 'react'

const List = ({items}) => {
    if(!items) return null
  return (
    <ul>
        {
            items.map((item,i) => 
            <li key={i}>{item}</li>
            )
        }
    </ul>
  )
}

export default List;