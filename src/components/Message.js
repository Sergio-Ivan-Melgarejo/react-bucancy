import React from 'react'

const Message = ({msg,bgColor,color}) => {
    let style = {
        padding: "1rem",
        marginBottom: "1rem",
        textAlign:"center",
        color: color || "#fff", 
        fontWeight: "bold",
        backgroundColor: bgColor || "#000"
    }
  return (
    <div style={style} >
        {/* <p>{msg || "sin mensaje"}</p> */}
        <p dangerouslySetInnerHTML={{__html:msg || "sin mensaje"}} />
    </div>
  )
}

export default Message