import React, { Component } from "react";
import "./Log.css";
import SecNavbar from './SecNavbar';

class Log extends Component {
  constructor(props) {
    super(props);
    this.doSomething = this.doSomething.bind(this);
  }
  doSomething = function(e) {
    e.preventDefault();
  };
  render() {
    return ([
      <SecNavbar/>,
      <div className="log">
        <div className="subtitle">KEEP YPUR CLIENTS CLOSE WITH LOGIN / SIGN UP PAGE</div>
        <div className="sub_sep"/>        
        <div className="windows" >
          <div className="window sign">
            <div className="window_title">SIGN UP</div>
            <form>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="inputEmail4">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                    placeholder="Email"
                  />
                </div>

                <div className="form-group col-md-6">
                  <label for="inputPassword4">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword4"
                    placeholder="Password"
                  />
                </div>
              </div>
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
              <div className="form-group">
                <label for="inputAddress">Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder="1234 Main St"
                />
              </div>
              <div className="form-group">
                <label for="inputAddress2">Address 2</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress2"
                  placeholder="Apartment, studio, or floor"
                />
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="inputCity">City</label>
                  <input type="text" className="form-control" id="inputCity" />
                </div>
                <div className="form-group col-md-4">
                  <label for="inputState">State</label>
                  <select id="inputState" className="form-control">
                    <option selected>Choose...</option>
                    <option>...</option>
                  </select>
                </div>
                <div className="form-group col-md-2">
                  <label for="inputZip">Zip</label>
                  <input type="text" className="form-control" id="inputZip" />
                </div>
              </div>
              <div className="form-group">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label className="form-check-label" for="gridCheck">
                    Check me out
                  </label>
                </div>
              </div>
              <button type="submit" className="btn btn-primary" onClick={this.doSomething}>
                Sign up
              </button>
            </form>
          </div>

          <div className="window" onSubmit={this.doSomething}>
            <div className="window_title">LOGIN</div>
            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <small id="emailHelp" className="form-text text-muted" />
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">
                  Keep me logged
                </label>
              </div>
              <button type="submit" className="btn sub btn-primary" onClick={this.doSomething}>
                Login
              </button>
            </form>
            <div className="face">
              <i class="fab fa-facebook-f" /> <p> login with facebook</p>
            </div>
            <div className="google">
              <i class="fab fa-google" /> <p> login with google</p>
            </div>
          </div>
        </div>
      </div>
    ]
    );
  }
}

export default Log;
