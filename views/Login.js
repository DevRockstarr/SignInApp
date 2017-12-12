import React, { Component } from 'react'

import axios from 'axios'


export default class Login extends Component {

  constructor(props){
    super(props)
    
    this.state = {
      email: '',
      password: ''
    }

    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);
    this.goSignin = this.goSignin.bind(this);

  }

  login(e) {
    e.preventDefault();

    if(this.state.email===''){
      alert('please input the email')
      return;
    }
    
    axios.post('http://localhost:8000/login', this.state)
    .then(res=>{
      localStorage.setItem('email', this.state.email)
      window.location.assign('/');
    })
    .catch(err=> {
      alert('Invalidate User!')
      console.log(err);
    })
  }

  onChange(e) {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }

  goSignin(){
    window.location.assign('/signup');
  }

  render() {
    return (
      <div className="row">
        <div className="offset-md-3 col-md-6">
          <form onSubmit={this.login}>
            <div style={{marginTop: 50 + 'px'}} className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={this.state.email} onChange={this.onChange} />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password"  value={this.state.password} onChange={this.onChange}/>
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
          </form>          
          <button type="button" className="btn btn-link" onClick={this.goSignin}>Don't you have account?</button>                 
        </div>
      </div>
    )
  }
}
