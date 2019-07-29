import React, { Component } from "react";
// import API from "../../utils/API";
import { connect } from "react-redux"
import Navbar from "../Navbar";
import UserDashboard from "./user";
import Schedule from "./schedule";
// import { scheduled } from "rxjs";
import "./style.css";

const mapStateToProps = state => ({
    useragent: state.useragent
})
class Dashboard extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="container-fluid mt-5 pt-5">
                    <div className="row">
                        <div className="col-lg-5 align-self-center">
                            <UserDashboard />
                        </div>
                        <div className="col-lg-7 align-self-center mt-5">
                            <div className="container-fluid">
                                <div className="row">
                                    {this.props.useragent.type === "admin" ?
                                        <div className="col d-flex justify-content-end mb-2">
                                            <a className="btn btn-outline-dark px-3 mr-2" href="/createuser"><i className="fas fa-user-plus mr-2"></i>Create User</a>
                                            <a className="btn btn-outline-dark px-3" href="/createevent"><i className="fas fa-plus mr-2"></i>Add Event</a>
                                        </div>
                                        :
                                        <div></div>
                                    }
                                </div>
                                <div className="row">
                                    {this.props.useragent.type === "advisor" ?
                                        <div className="col d-flex justify-content-end mb-2">
                                            <a className="btn btn-outline-dark px-3 mr-2" href="/createuser"><i className="fas fa-user-plus mr-2"></i>Create Delegate</a>
                                           
                                        </div>
                                        :
                                        <div></div>
                                    }
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <Schedule/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Dashboard); 