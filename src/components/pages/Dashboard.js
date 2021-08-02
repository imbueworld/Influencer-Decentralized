import React, { Component } from "react";
import "../../App.css";
import logo from '../../images/logo.jpg';
import { Container } from "react-bootstrap";
export default class Dashboard extends Component {
  render() {
    return (
        <div className='MyContainer'>
          <Container
            className='MyContainer'
            style={{
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              alignSelf: "center",
            }}
          >
            <div
              style={{
                textAlign: "center",
                marginTop: 36,
                fontSize:40,
                fontFamily: "MyWebFont",
              }}
            >
              I M B U E
            </div>
            <div
              style={{
                fontFamily: "LuloCleanW01-One",
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: 12,
                lineHeight: "17px",
                alignItems: "center",
                textAlign: "center",
                marginTop: 40,
              }}
            >
              LIVESTREAM TO YOUR FAVORITE
              <br />
              AUDIENCES AND GET PAID IN CRYPTO
            </div>
            <div
              style={{
                fontFamily: "LuloCleanW01-One",
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: "22px",
                lineHeight: "31px",
                alignItems: "center",
                textAlign: "center",
                marginTop: "20px"

              }}
            >
              CONNECT YOUR
              <br /> WALLET TO SIGN IN
            </div>
            <div style={{
              textAlign: "center",
              marginTop: 150
            }}>
              <a className="wallet-button" onClick={() => this.props.history.push("ConnectWallet")}>Connect Wallet</a>
            </div>
          </Container>
        </div>
    );
  }
}
