import React, { Component } from "react";
import "../../App.css";
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
          <h1
            style={{
              textAlign: "center",
              color: "#495049",
              marginTop: 40,
              fontFamily: "Sans-serif",
            }}
          >
            I M B U E
          </h1>
          <h6
            style={{
              textAlign: "center",
              color: "#949494",
              marginTop: 40,
              fontFamily: "Sans-serif",
            }}
          >
            LIVESTREAM TO YOUR FAVORITE
            <br />
            AUDIENCES AND GET PAID IN CRYPTO
          </h6>
          <h3
            style={{
              textAlign: "center",
              color: "#495049",
              marginTop: 40,
              fontFamily: "Sans-serif",
            }}
          >
            CONNECT YOUR
            <br /> WALLET TO SIGN IN
          </h3>

          <h6 className='centered' onClick={() => this.props.history.push("ConnectWallet")}>Connect Wallet</h6>
        </Container>
      </div>
    );
  }
}
