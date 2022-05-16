import React from 'react'

function Employee(props) {
  return (
    <div>
    <div classNmae="card" >
    <img src="..." classNmae="card-img-top" alt="..."></img>
    <div classNmae="card-body">
        <h5 classNmae="card-title">{props.name}</h5>
        <p classNmae="card-text">{props.age} </p>

    </div>
    </div>
    </div>
  )
}

export default Employee