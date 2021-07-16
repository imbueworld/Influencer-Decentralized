import React, { Component } from "react";
import "../../App.css";
import { Container } from "react-bootstrap";
export default class HomePage extends Component {
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
              color: "#495049",
              marginTop: 40,
              fontFamily: "Sans-serif",
              fontSize: 25
            }}
          >
            UPCOMING
            <br />
            EVENT
          </h6>
          <h3
            style={{
              textAlign: "center",
              color: "#495049",
              marginTop: 40,
              fontFamily: "Sans-serif",
              fontSize: 14
            }}
          >
            NO UPCOMING EVENTS... CREATE ONE
          </h3>

          <h6 className='centered' onClick={() => this.props.history.push("CreateEvent")}>CREATE EVENT</h6>
        </Container>
      </div>
    );
  }
}
