import React, { Component } from "react";
import RCG from "react-captcha-generator";
import "./Contact.css";
import axios from "axios";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      captcha: "",
      tryAgain: false,
      name: "",
      email: "",
      message: ""
    };
    this.result = this.result.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  async handleSubmit(e) {
    e.preventDefault();
    if (
      this.check() &&
      this.state.message !== "" &&
      this.state.email !== "" &&
      this.state.name !== ""
    ) {
      const { name, email, message } = this.state;
      this.setState({
        name: "",
        email: "",
        message: "",
        tryAgain: false
      });

      console.log('Sending email')
      const form = await axios.post("http://localhost:3000" + "/api/form", {
        name,
        email,
        message
      });
    } else if (this.check() === false) {
      this.setState({
        tryAgain: true
      });
    } else if (this.check() === true) {
      this.setState({
        tryAgain: false
      });
    }
  }

  result(text) {
    this.setState({
      captcha: text
    });
  }

  check() {
    const { captcha } = this.state;
    return captcha.toLowerCase() === this.captchaEnter.value.toLowerCase();
  }

  render() {
    return (
      <div className="contact" name="contact">
        <form className="contact-form" onSubmit={this.handleSubmit}>
          <div className="titles">
            <span className="contact-title">Contact me</span>
            <span className="contact-subtitle">
              Got a question? I'd love to from you. Send me a message and I'll
              respond as soon as possible.
            </span>
          </div>
          <span className="label">Name:</span>
          <input
            type="text"
            value={this.state.name}
            className="contact-input name"
            name="name"
            onChange={this.handleChange}
          />
          <span className="label">Email:</span>
          <input
            type="email"
            value={this.state.email}
            className="contact-input email"
            name="email"
            onChange={this.handleChange}
          />
          <span className="label" name="message">
            Message:
          </span>
          <textarea
            type="text"
            value={this.state.message}
            className="contact-input message"
            name="message"
            onChange={this.handleChange}
          />
          <RCG result={this.result} />
          <span className="label">Enter the code:</span>
          <input
            type="text"
            className={
              this.state.tryAgain === false
                ? "contact-input"
                : "contact-input red"
            }
            ref={ref => (this.captchaEnter = ref)}
          />
          <input type="submit" value="Send message" className="submit" />
        </form>
      </div>
    );
  }
}

export default Contact;
