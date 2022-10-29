import React from 'react'

const CardComp = (props) => {
  return (
    <div>
        <div style={{border:'1px solid green',width:'750px',padding:'1rem',margin:'0 1rem',textAlign:'center'}}>
            <h5>{props.user.name}</h5>
            <h6>{props.user.company.name}</h6>
            <p>{props.user.company.catchPhrase}</p>
        </div>
    </div>
  )
}

export default CardComp