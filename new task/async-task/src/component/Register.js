// import { useState } from "react"
import React from 'react'
import {Formik, Field, ErrorMessage, Form} from 'formik';
import userSchema from './schema/schemaUser';


export default function Register() {
  // const [userData, setUserData] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   phone: "",
  //   message: ""


  // });
  
// const eventFunction = (e) => {
//   const { name, value } = e.target;
//   setUserData((preval) => {
//     return{
//       ...preval,
//       [name]: value,
//     }
//   }
//   )
// }
  
    
//  const submitFunction = (e) => {
//   e.preventDefault()
//   console.log(userData)
//   setUserData({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     message: ""
//   });
//   }

const startingValue = {
firstName: "",
lastName: "",
email: "",
password: ""
};

const submitFunction = (values) =>{
  console.log(values);
  };
  return (
    
    
      
      <section style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
      <div style={{ width: '100%', paddingRight: '50px' }}>
        <h2>Register</h2>
 <Formik initialValues={startingValue} onSubmit={submitFunction} validationSchema={userSchema} >
    <Form>
    <div className='row'>
      <div className="form-group col-lg-6">
       
        <label htmlFor="firstName">First Name:</label>
        <Field type="text" className="form-control" name="firstName" />
      </div>
      <div className="form-group col-lg-6">
        <label htmlFor="lastName">Last Name:</label>
        <Field type="text" className="form-control" name="lastName"/>
        <ErrorMessage name="lastName"/>
      </div>
      </div>
      <div className='row'>
      <div className="form-group col-lg-6">
        <label htmlFor="email">Email:</label>
        <Field type="email" className="form-control" name="email"/>
        <ErrorMessage name="email"/>
      </div>
      <div className="form-group col-lg-6">
        <label htmlFor="phone">Password:</label>
        <Field type="password" className="form-control" name="password"/>
        <ErrorMessage name="password"/>
      </div>
      </div>
      {/* <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea className="form-control" name="message"></textarea>
        <ErrorMessage name="message"/>
      </div> */}
      <button type="submit" className="btn btn-primary  mt-5">Submit</button>
    </Form>
    </Formik>
    </div>
    </section>
 

  )
}
