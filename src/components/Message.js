import React from 'react'

const Message = ({msg,bgColor,color}) => {
    let style = {
        padding: "1em",
        marginBottom: "1em",
        textAlign:"center",
        color: color || "#fff", 
        fontWeight: "bold",
        backgroundColor: bgColor || "#000",
        fontSize: "1.4em"
    }
  return (
    <div style={style} >
        {/* <p>{msg || "sin mensaje"}</p> */}
        <p dangerouslySetInnerHTML={{__html:msg || "sin mensaje"}} />
    </div>
  )
}

export default Message