import React from 'react'
import {useState} from 'react'

function Registration() {
    const[name, setName] = React.useState('');
    const[email, setEmail] = React.useState('');
    const[password, setPassword] = React.useState('');
    

    function getData(e){
        e.preventDefault();
        //alert(name+email+password)
        const data = {name, email, password};
        console.log(data);
    }
	return (
		<div>
			<h2>Registration</h2>
			<form>
  <div class="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name"/>
  </div>

  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} class="form-control" id="exampleInputPassword1" placeholder="Password" />
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Register</button>
</form>
		</div>
	)
}

export default Registration