import React from 'react'

const ItemListContainer = ({item1, item2, item3}) => {
  return (
    <div>
        <ul>
            <li>{item1}</li>
            <li>{item2}</li>
            <li>{item3}</li>
        </ul>
    </div>
  )
}

export default ItemListContainer