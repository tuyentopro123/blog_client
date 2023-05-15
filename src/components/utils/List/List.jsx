import React from 'react'
import './List.scss'

const List = ({children,header,active,style}) => {
  return (
    <div className={`list`} style={style}>
      <div className={`list__header ${active ? active : ""}`}>
        <h2>{header}</h2>
      </div>
      <div className="list__post">
        {children}
      </div>
    </div>
  )
}

export default List