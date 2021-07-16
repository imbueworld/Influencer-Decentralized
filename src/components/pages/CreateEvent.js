import React, { Component } from "react";
import "../../App.css";
import { Container, Row, Col } from "react-bootstrap";
export default class CreateEvent extends Component {
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
              fontSize: 25,
            }}
          >
            CREATE EVENT
          </h6>
          <form style={{ marginTop: 50 }}>
            <div className='form-group'>

              <input
                type='email'
                className='form-control'
                id='exampleInputEmail1'
                aria-describedby='emailHelp'
                placeholder='Event Name'
              />

            </div>
            <div className='form-group'>

              <input
                type='date'
                className='form-control'
                id='exampleInputPassword1'
                placeholder='Select Date/ Time'
              />
            </div>

            <div className='form-group'>

              <input
                type='text'
                className='form-control'
                id='exampleInputPassword1'
                placeholder='Event Description'
              />
            </div>

            <Row>
              <Col >Free</Col>
              <Col><div className="row row-bordered"><h6 style={{ textAlign: "right" }}>Paid</h6></div> </Col>
            </Row>
            <Row>
              <Col ></Col>
              <Col><div className="row row-bordered">
                <input
                  type='text'
                  className='form-control'
                  id='exampleInputPassword1'
                  placeholder='Price(MATIC)'
                /></div> </Col>
            </Row>


          </form>

          <h6
            className='centered'
            onClick={() => this.props.history.push("EventList")}
          >
            CREATE EVENT
          </h6>
        </Container>
      </div>
    );
  }
}
