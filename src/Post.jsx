import React from 'react'


function Post(props) {
    console.log(props)
    console.log(props.student)
    console.log(props.score)
    return (
    <>
    {/* <h2>Profile : {props.myId}</h2>
    <h2>{props.children}</h2> */}

    <p>Content from Post</p>
    <h2>Student Name : {props.student}</h2>
    <p>Score {props.score} </p>
    
    </>
  )
}

export default Post
