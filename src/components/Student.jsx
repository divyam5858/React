import React from 'react'
import PropTypes from 'prop-types'

const Student = (props) => {
  return (
    <div>
      <p>this is {props.name} and {props.age} yrs old and is {props.isstudent ? "student" :"not a student"}</p>
    </div>
  )
}
Student.propTypes ={
    name: PropTypes.string,
    age: PropTypes.number,
    isstudent:PropTypes.bool
}


export default Student
