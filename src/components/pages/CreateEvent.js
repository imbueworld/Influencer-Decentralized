import React, { Component } from "react";
import "../../App.css";
<<<<<<< HEAD
import { Container, Row, Col } from "react-bootstrap";
export default class CreateEvent extends Component {
  render() {
=======
import ethereum from '../../images/ethereum.jpg';
import { Container, Row, Col } from "react-bootstrap";
import { Form } from 'react-bootstrap';
import "react-datetime/css/react-datetime.css";
import Datetime from "react-datetime";
const { ethers } = require("ethers");

const eventList = require("../../contract/EventList.json");


export default class CreateEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      walletAddress: "",
      address: '',
      walletBalance: '',
      eventType: false,
      name: '',
      dateTime: '',
      description: '',
      price: ''
    };

    this.setEventType = this.setEventType.bind(this);
    this.unsetEventType = this.unsetEventType.bind(this);
    this.handleEventName = this.handleEventName.bind(this);
    this.handleEventDateTime = this.handleEventDateTime.bind(this);
    this.handleEventDescription = this.handleEventDescription.bind(this);
    this.handleEventPrice = this.handleEventPrice.bind(this);
  }

  setEventType() {
    this.setState(state => ({
      eventType: true
    }));
  }

  unsetEventType() {
    this.setState(state => ({
      eventType: false
    }));
  }

  handleEventName(e) {
    this.setState(state => ({
      name: e.target.value
    }));
  }

  handleEventDateTime(e) {
    this.setState(state => ({
      dateTime: e.toString()
    }));
  }

  handleEventDescription(e) {
    this.setState(state => ({
      description: e.target.value
    }));
  }

  handleEventPrice(e) {
    this.setState(state => ({
      price: e.target.value
    }));
  }

  componentDidMount = async () => {
    const walletAddress = await localStorage.getItem("walletaddress");
    console.log("wallet Address:", walletAddress);
    this.setState({ walletAddress: walletAddress, walletBalance: localStorage.getItem('walletBalance') });
    var str = this.state.walletAddress;
    var res = str.substring(0, 7);
    var last2 = str.slice(-4);
    console.log("res:", res + '...' + last2);
    this.setState({ address: res + '...' + last2 });

    console.log('events', JSON.parse(localStorage.getItem('events')));
    console.log('eventCount', localStorage.getItem('eventCount'));
    this.setState({
      eventCount: localStorage.getItem('eventCount'),
      events: JSON.parse(localStorage.getItem('events'))
    });
  }

  createEvent = async () => {
    console.log('state', this.state);
    try {
      const ethereum = window.ethereum;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(
          window.ethereum,
          "any"
        );

        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();

        const contract = new ethers.Contract(eventList.networks['5777'].address, eventList.abi, signer);

        if (this.state.eventType == false) {
          this.setState(state => ({
            price: 0
          }));
        }

        await contract.createEvent(this.state.name, this.state.dateTime, this.state.description, this.state.eventType, parseInt(this.state.price), this.state.walletAddress);

        var eventCount = await contract.eventCount();
        var eventArray = [];
        for (var i = 1; i <= eventCount; i++) {
          var temp = await contract.events(i);
          eventArray.push(temp);
        }

        localStorage.setItem('events', JSON.stringify(eventArray));
        localStorage.setItem('eventCount', eventCount);

        console.log('eventArray', eventArray);
        this.props.history.push("HomePage");
      }
    } catch (err) {
      console.log("error is :", err);
    }
  }


  render() {
    const eventType = this.state.eventType;

    const address = this.state.address;
    const walletBalance = this.state.walletBalance;


>>>>>>> imbueworld/Influencer-Decentralized/master
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
<<<<<<< HEAD
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
=======
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
          <div className="wallet-status">
            <div style={{ width: 15, height: 15, backgroundColor: "#9CFFA6", borderRadius: "50%", marginTop: 8 }}>
            </div>
            <div style={{ height: 31, 
                          backgroundColor: "#edeef2", 
                          fontSize: 11,
                          lineHeight: "31px",
                          paddingLeft: 10,
                          paddingRight: 10,
                          fontWeight: 500,
                          marginLeft: 10 }}>
                          { walletBalance } ETH
                          <span style={{ marginLeft: 10, padding: "5px 8px", borderRadius: 5, backgroundColor: "#f7f8fa"}}>
                            { address }
                            <img style={{ width: 12, marginLeft: 10 }} src={ethereum} />
                          </span>
            </div>
          </div>
>>>>>>> imbueworld/Influencer-Decentralized/master
          <h6
            style={{
              textAlign: "center",
              color: "#495049",
<<<<<<< HEAD
              marginTop: 40,
              fontFamily: "Sans-serif",
              fontSize: 25,
            }}
=======
              marginTop: 100,
              fontFamily: "MyWebFont",
              fontSize: 25,
            }}
            onClick={ this.createEvent }
>>>>>>> imbueworld/Influencer-Decentralized/master
          >
            CREATE EVENT
          </h6>
          <form style={{ marginTop: 50 }}>
            <div className='form-group'>
<<<<<<< HEAD

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
=======
              <input
                className='event-input form-control'
                placeholder='Event Name'
                value={this.state.name}
                onChange={this.handleEventName}
              />
            </div>
            <div className='form-group'>
              <Datetime 
                ref="datetime"
                className='event-input' 
                inputProps={{placeholder: 'Select Date/Time'}}
                placeholder='Select Date/Time'
                value={this.state.dateTime}
                onChange={this.handleEventDateTime}
              />
            </div>
            <div className='form-group'>
              <input
                className='event-input form-control '
                placeholder='Event Description'
                value={this.state.description}
                onChange={this.handleEventDescription}
              />
            </div>

            <div className='form-group'>
              <div style={{
                paddingBottom: 10,
                borderBottom: "1px solid",
                width: 294,
                marginLeft: "auto",
                marginRight: "auto",
                fontFamily: "MyWebFont",
                display: "flex",
                marginTop: 20

              }}>
                <div onClick={this.unsetEventType} className={"deactive" + (eventType ? 'show' : 'hidden')} style={{ width: 147, textAlign: "center", cursor: "pointer"}}>FREE</div>

                <div onClick={this.setEventType} className={"deactive" + (!eventType ? 'show' : 'hidden')} style={{ width: 147, textAlign: "center", cursor: "pointer"}}>PAID</div>
              </div>
              { this.state.eventType && 
                <div style={{ marginTop: 20 }} className='form-group'>
                  <input
                    className='event-input form-control '
                    placeholder='Price(USDT)'
                    value={this.state.price}
                    onChange={this.handleEventPrice}
                  />
                </div>
              }
            </div>

            <div style={{
                marginTop: 50,
                textAlign: "center",
              }}>
                <a onClick={this.createEvent} className="wallet-button">CREATE EVENT</a>
            </div>
          </form>
         
>>>>>>> imbueworld/Influencer-Decentralized/master
        </Container>
      </div>
    );
  }
}
