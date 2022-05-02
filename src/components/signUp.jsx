// import React from "react";
// import { useNavigate } from "react-router-dom";

// const SignUp = () => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Finally All is working Properly");
//   };

//   let navigate = useNavigate();

//   return (
//     <div>
//       <h2>Sign Up Form</h2>
//       <form>
//         <label htmlFor="name">UserName</label>
//         <input id="name" type="text" placeholder="Type your name" />

//         <br />
//         <br />
//         <label htmlFor="email">Email</label>
//         <input id="email" type="text" placeholder="Type your Email" />
//         <br />
//         <br />
//         <label htmlFor="">Password</label>
//         <input type="text" placeholder="Type your password" />
//         <br />
//         <br />
//         <label htmlFor="">Age</label>
//         <input type="number" placeholder="Type your age" />
//         <br />
//         <br />
//         <button onClick={handleSubmit} className="btn btn-success">
//           Submit
//         </button>
//         <button onClick={() => navigate("/")} className="btn btn-danger">
//           Go Back
//         </button>
//       </form>
//     </div>
//   );
// };

// export default SignUp;

 

import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import Input from "./input";

class SignUp extends Component {
  state = {
    account: { username: "", password: "", email: "", age: "" },
    errors: {},
  };

  validate = () => {
    const errors = {};

    const { account } = this.state;
    if (account.username.trim() === "")
      errors.username = "Username is required.";
    if (account.password.trim() === "")
      errors.password = "Password is required.";
    if (account.email.trim() === "") errors.email = "Email is required.";
    if (account.age.trim() === "") errors.age = "Age is required.";

    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    console.log(errors);
    this.setState({ errors: errors || {} });
    if (errors) return;
    // console.log("ok ha g");
  };
  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };



  // const navigate = useNavigate();


  render() {

    const { account, errors } = this.state;

    return (
      <div>
        <h2>Sign Up Form</h2>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={account.username}
            label="Username"
            onChange={this.handleChange}
            error={errors.username}
          />
          <Input
            name="password"
            value={account.password}
            label="Password"
            onChange={this.handleChange}
            error={errors.password}
          />
          <Input
            name="email"
            value={account.email}
            label="Email"
            onChange={this.handleChange}
            error={errors.email}
          />
          <Input
            name="age"
            value={account.age}
            label="Age"
            onChange={this.handleChange}
            error={errors.age}
          />
 
          <br />
          <button className="btn btn-success">Submit</button>
          <br />
        
        </form>
<br /><br /><br />
        <div>
            {/* <button className="btn btn-danger" onClick={() => this.handleButton}>Go Back</button> */}
          {/* <button onClick={() => navigate("/")} className="btn btn-danger">
            Go Back
          </button> */}
        </div>
      </div>
    );
  }
}

export default SignUp;




