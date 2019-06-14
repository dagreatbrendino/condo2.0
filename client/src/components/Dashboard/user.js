import React, { Component } from "react";
import { connect } from "react-redux"
import API from "../../utils/API";
import QRCode from "qrcode";
import "./style.css";

const mapStateToProps = state => ({
    useragent: state.useragent
})

class UserDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            school: "",
            committee: "",
        };
    };

    componentDidMount() {
        this.getUserInfo();
    };

    getUserInfo = () => {
                API.getSchools()
                    .then(schoolRes => {
                        console.log(schoolRes)
                        this.setState({
                            school: schoolRes.data.filter(sch => sch.id === this.props.useragent.schoolId)[0].name
                        });
                    });
                
                API.getCommittees()
                    .then(committeeRes => {
                        this.setState({
                            committee: committeeRes.data.filter(comm => comm.id === this.props.useragent.committeeId)[0].name
                        });
                    });

                const opts = {
                    type: "image/png",
                };

                QRCode.toDataURL(" " + this.props.useragent.id, opts, function (err, url) {
                    if (err) throw err

                    let img = document.getElementById("image");
                    img.src = url;
                });
    };

    render() {
        let imageStyle = {
            width: "300px"
        }
        return (
            <div className="card mt-5 border-0 text-center">
                <div className="card-body">
                    <h1 className="display-3">{this.props.useragent.name}</h1>
                    <p className="h3">{this.props.useragent.type}</p>
                    <p className="h3">{this.state.school}</p>
                    <p className="h4">{this.state.committee}</p>
                    <p className="h5">{this.props.useragent.country}</p>

                    <img id="image" style={imageStyle} alt="qr-rendered"/>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(UserDashboard);