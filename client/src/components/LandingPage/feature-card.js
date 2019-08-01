import React, { Component } from "react";

class FeatureCard extends Component {
    render() {
        return (
            <div className="container-fluid mt-5" id="features">
                <div className="row">
                    <div className="col d-flex justify-content-center">
                        <h1 className="display-4 mb-3 ft-title pl-3"><b>Key Features</b></h1>
                    </div>
                </div>
                <div className="row justify-content-center align-items-center mb-4">
                    <div className="col">
                        <div className="card-deck">
                            <div className="card border-0">
                                <div className="card-body text-center align-self-center">
                                    <i className="far fa-calendar-alt fa-7x mb-3"></i>
                                    <h3 className="card-title">Schedules</h3>
                                    <p className="card-text">Never miss an event ever again! Through our app, you can visualize and sort your list of events all in one place.</p>
                                </div>
                            </div>
                            <div className="card border-0">
                                <div className="card-body text-center align-self-center">
                                    <i className="fas fa-qrcode fa-7x mb-3"></i>
                                    <h3 className="card-title">Attendance</h3>
                                    <p className="card-text">Check in users quickly and securely with unique personal QR codes. Utilize this information to know who and how many people attended each event!</p>
                                </div>
                            </div>
                            <div className="card border-0">
                                <div className="card-body text-center align-self-center">
                                    <i className="far fa-comments fa-7x mb-3"></i>
                                    <h3 className="card-title">In-App Chat</h3>
                                    <p className="card-text">Keep in the loop by staying in touch with everyone through our in-app messaging platform!</p>
                                </div>
                            </div>
                            <div className="card border-0">
                                <div className="card-body text-center align-self-center">
                                    <i className="fas fa-poll fa-7x mb-3"></i>
                                    <h3 className="card-title">Vote/Polls</h3>
                                    <p className="card-text">It's never been easier to ask questions and keep track of the answers! Quickly resolve issues, problems, or questions through our voting/poll feature.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FeatureCard;