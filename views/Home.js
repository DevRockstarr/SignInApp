import React, { Component } from 'react'

import { Redirect } from 'react-router'

// import axios from 'axios'

export default class Login extends Component {

  componentWillMount(){
    // axios.post('http://localhost:8000/checklogin')
    // .then(res=>{
    // })
    // .catch(err=> {
    //   window.location.assign('/login');
    // })
    
  }

  render() {
    var email = localStorage.getItem('email')
    if (email===null)
      return <Redirect to='/login'/>
    else
      return (
        <div>
          <h1>Welcome to Our Page!!!</h1>       
        </div>
      )
  }
}
