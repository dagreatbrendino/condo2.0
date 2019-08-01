import React, { Component } from "react";
import API from "../../utils/API";
import "./style.css";

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            subject: "",
            message: ""
        };
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        API.postContactForm({
            name: this.state.name,
            email: this.state.email,
            subject: this.state.subject,
            message: this.state.message
        });
        //reset the form to blank
        this.setState({
            name: "",
            email: "",
            subject: "",
            message: ""
        });
    }

    render() {
        return (
            <div className="container vh-100 mt-5" id="contact">
                <div className="row">
                    <div className="col d-flex justify-content-center">
                        <h1 className="display-4 ft-title text-center mt-4 pl-3"><b>Contact Us</b></h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col d-flex justify-content-center">
                    <h3 className="lead my-4">Tell us about your upcoming conference or big event and we'll custom tailor our app to fit your unique needs!</h3>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <form>
                            <div className="form-row">
                                <div className="form-group col">
                                    <label htmlFor="fullNameInput" className="d-none"></label>
                                    <input className="form-control border-top-0 border-left-0 border-right-0 border-dark rounded-0 px-1 pb-0"
                                        name="name"
                                        id="fullNameInput"
                                        value={this.state.name}
                                        onChange={this.handleInputChange}
                                        type="text"
                                        placeholder="First and Last Name"
                                    />
                                </div>
                                <div className="form-group col">
                                    <label htmlFor="emailInput" className="d-none"></label>
                                    <input className="form-control border-top-0 border-left-0 border-right-0 border-dark rounded-0 px-1 pb-0"
                                        name="email"
                                        id="emailInput"
                                        value={this.state.email}
                                        onChange={this.handleInputChange}
                                        type="text"
                                        placeholder="Email"
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="subjectInput" className="d-none"></label>
                                <input className="form-control border-top-0 border-left-0 border-right-0 border-dark rounded-0 px-1 pb-0"
                                    name="subject"
                                    id="subjectInput"
                                    value={this.state.subject}
                                    onChange={this.handleInputChange}
                                    type="text"
                                    placeholder="Subject"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="messageArea" className="d-none"></label>
                                <textarea className="form-control border-dark pl-2"
                                    name="message"
                                    id="messageArea"
                                    value={this.state.message}
                                    onChange={this.handleInputChange}
                                    type="text"
                                    placeholder="Tell us what you need..."
                                    rows="5"
                                />
                            </div>
                            <button 
                                className="btn btn-dark px-5"
                                type="submit"
                                name="contact"
                                onClick={this.handleFormSubmit}
                            >Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactForm;