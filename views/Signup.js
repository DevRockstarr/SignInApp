import React, { Component } from 'react'

import axios from 'axios'

export default class Login extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      name: '',
      email: '',
      telephone: '',
      company: '',
      officalVisit: false,
      escort: false,
      escortName: '',
      password: '',
      confirmPassword: ''
    }

    this.signUp = this.signUp.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onCheck = this.onCheck.bind(this);
  }

  signUp(e) {
    e.preventDefault();
    
    if(this.state.name===''){
      alert('Please input the name')
      return;
    }

    if(this.state.email===''){
      alert('Please input the email')
      return;
    }

    if(this.state.telephone===''){
      alert('Please input the telephone')
      return;
    }

    if(this.state.password===''){
      alert('Please input the password')
      return;
    }

    if(this.state.password!==this.state.confirmPassword){
      alert('Password is not correct.')
      return;
    }

    var bodyParameter = {
      name: this.state.name,
      email: this.state.email,
      telephone: this.state.telephone,
      company: this.state.company,
      officialVisit: this.state.officalVisit,
      escort: this.state.escort,
      escortName: this.state.escortName,
      password: this.state.password
    }
    
    axios.post('http://localhost:8000/signup', bodyParameter)
    .then(res=>{
      alert('success')
      window.location.assign('/login')
    })
    .catch(err=> {
      alert('can not login')
      console.log(err);
    })

  }

  onChange(e) {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }

  onCheck(e) {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.checked
    })
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="offset-md-3 col-md-6">
            <form onSubmit={this.signUp}>

              <div style={{marginTop: 50 + 'px'}} className="form-group">
                <label htmlFor="inputName">Name</label>
                <input type="text" name="name" className="form-control" id="inputName" placeholder="Name"  value={this.state.name} onChange={this.onChange}/>
              </div>

              <div className="form-group">
                <label htmlFor="inputEmail">Email</label>
                <input type="email" name="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email" value={this.state.email} onChange={this.onChange} />
              </div>

              <div className="form-group">
                <label htmlFor="inputTelephone">Telephone</label>
                <input type="text" name="telephone" className="form-control" id="inputTelephone" placeholder="Telephone number"  value={this.state.telephone} onChange={this.onChange}/>
              </div>

              <div className="form-group">
                <label htmlFor="inputCompany">Company</label>
                <input type="text" name="company" className="form-control" id="inputCompany" placeholder="Company"  value={this.state.company} onChange={this.onChange}/>
              </div>

              <div style={{marginTop: 10 + 'px'}} className="checkbox checkbox-primary">
                  <input id="checkboxOfficalVisit" name="officalVisit" type="checkbox" checked={this.state.officalVisit} onChange={this.onCheck} />
                  <label style={{marginLeft: 10 + 'px'}} htmlFor="checkboxOfficalVisit"> Official visit</label>
              </div>

              <div className="checkbox checkbox-primary" style={{marginBottom: 10 + 'px'}}>
                  <input id="checkboxEscort" name="escort" type="checkbox" checked={this.state.escort} onChange={this.onCheck} />
                  <label style={{marginLeft: 10 + 'px'}} htmlFor="checkboxEscort">Escort required</label>
              </div>

              <div id="escortGroup" style={{display: this.state.escort? 'block' : 'none'}} className="form-group">
                <label htmlFor="inputEscortName">Escort name</label>
                <input type="text" name="escortName" className="form-control" id="inputEscortName" placeholder="Escort name"  value={this.state.escortName} onChange={this.onChange}/>
              </div>

              <div className="form-group">
                <label htmlFor="inputPassword">Password</label>
                <input type="password" name="password" className="form-control" id="inputPassword" placeholder="Password"  value={this.state.password} onChange={this.onChange}/>
              </div>

              <div className="form-group">
                <label htmlFor="inputConfirmPassword">Confirm password</label>
                <input type="password" name="confirmPassword" className="form-control" id="inputConfirmPassword" placeholder="Confirm password"  value={this.state.confirmPassword} onChange={this.onChange}/>            
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
             
            </form>
            
          </div>
        </div>        
      </div>
    )
  }
}
