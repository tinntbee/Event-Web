import React from "react";
import PropTypes from "prop-types";
import "./style.css";

AccountDetail.propTypes = {};

function AccountDetail(props) {
  return (
    <div className="Account-detail">
      <div className="Sidebar">
        <h2 className="Title">My Account</h2>
        <ul>
          <li className="active">
            <h3>Account Information</h3>
          </li>
          <li>
            <h3>Registered Events</h3>
          </li>
          <li>
            <h3>Host</h3>
          </li>
        </ul>
      </div>
      <div className="Container">
        <div className="Container__header">
          <h3 className="Title">Account Information</h3>
        </div>
        <div className="Container__body">
          <div className="Avatar__content">
            <h4>Avatar</h4>
            <div>
              <img
                alt=""
                className="Avatar"
                src="https://scontent.fvca1-4.fna.fbcdn.net/v/t1.6435-9/133922219_2916809551977269_4941951420019022316_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=174925&_nc_ohc=nJ4fpqi-zCUAX9E385Q&_nc_ht=scontent.fvca1-4.fna&oh=271e2e49408e50373a2a751e03ea70ac&oe=617A1F1C"
              />
              <button className="Upload">Upload</button>
              <button className="Remove">Remove</button>
            </div>
          </div>
          <div className="Information__content">
            <div className="Information__input Nickname">
              <div>
                <h4>Nickname</h4>
                <p className="Input-detail">Visible with other player</p>
              </div>
              <input type="text" placeholder="Nickname"></input>
            </div>

            <div className="Information__input Nickname">
              <div>
                <h4>Full name</h4>
                <p className="Input-detail">Real Full name of you</p>
              </div>
              <input type="text" value="Nguyễn Trung Tín" disabled="true"></input>
            </div>

            <div className="Information__input Nickname short">
              <div>
                <h4>Sex</h4>
                <p className="Input-detail">Visible with other player</p>
              </div>
              <input type="text" value="Male"></input>
            </div>

            <div className="Information__input Nickname">
              <div>
                <h4>University</h4>
                <p className="Input-detail">University of you</p>
              </div>
              <input type="text" value="HCMUTE"></input>
            </div>

            <div className="Information__input Nickname">
              <div>
                <h4>Faculty</h4>
                <p className="Input-detail">Faculty of you</p>
              </div>
              <input type="text" value="Information Technology"></input>
            </div>

            <div className="Information__input Nickname short">
              <div>
                <h4>Class</h4>
                <p className="Input-detail"></p>
              </div>
              <input type="text" value="181103B"></input>
            </div>

            <div className="Information__input Nickname">
              <div>
                <h4>Email</h4>
                <p className="Input-detail">Visible with other player</p>
              </div>
              <input type="text" value="18110381@student.hcmute.edu.vn" disabled="true"></input>
            </div>

            <div className="Information__input Nickname">
              <div>
                <h4>Phone number</h4>
                <p className="Input-detail">Contact you</p>
              </div>
              <input type="text" value="+84 945 918 317"></input>
            </div>

            <div className="Information__input Nickname short"></div>
          </div>
          <div className="Linked__account">
            <h4>Linked Account</h4>
            <p className="Input-detail">Contact you other way</p>
            <div className="Linked-contact Facebook-contact">
              <img className="icon" alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Facebook-icon-1.png/480px-Facebook-icon-1.png"/>
              <p>Sign in with Facebook</p>
              <button>Connect</button>
            </div>
          </div>
        </div>
        <div className="Container__footer"></div>
      </div>
    </div>
  );
}

export default AccountDetail;
