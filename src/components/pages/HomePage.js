import React, { Component } from "react";
import "../../App.css";
import download from '../../images/download.svg';
import ethereum from '../../images/ethereum.jpg';
import { Container } from "react-bootstrap";

function NoEvent(props) {
  if (props.eventCount != 0) {
    return null;
  }

  return (
    <div
      style={{
        textAlign: "center",
        color: "#495049",
        marginTop: 40,
        fontFamily: "Sans-serif",
        fontSize: 14
      }}
    >
      NO UPCOMING EVENTS... CREATE ONE
    </div>
  );
}

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      walletAddress: "",
      address: '',
      walletBalance: '',
      eventCount: 0,
      events: []
    };

    // this.startEvent = this.startEvent.bind(this);

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

    var contractEvents = JSON.parse(localStorage.getItem('events'));
    this.setState({
      eventCount: localStorage.getItem('eventCount'),
      events: JSON.parse(localStorage.getItem('events'))
    });
  }

  startEvent(eventName) {
    console.log('eventName', eventName);
  }

  render() {
    const address = this.state.address;
    const walletBalance = this.state.walletBalance;

    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    var events = [];
    for (var i = 0; i < this.state.events.length; i++) {
      var temp = {};
      temp.name = this.state.events[i][1];
      var date = new Date(this.state.events[i][2]);

      temp.date = monthNames[date.getMonth()] + ' ' 
      + date.getDate()  + 'TH ' 
      + date.getFullYear()
      temp.time = (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) + ':'
      + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) + ':'
      + (date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds());
      events.push(temp);
    }

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
          <div
            style={{
              textAlign: "center",
              marginTop: 50,
              fontSize: 22,
              fontFamily: "MyWebFont",
            }}>
            UPCOMING<br/>EVENT
          </div>
          <NoEvent eventCount={this.state.eventCount} />
          
          <div style={{
              textAlign: "center",
              marginTop: 50
            }}>
              <a className="wallet-button" onClick={() => this.props.history.push("CreateEvent")}>CREATE EVENT</a>
          </div>
          {
            this.state.eventCount > 0 &&
            events.map(event => (
            <div
              style={{
                width: 755,
                height: 67,
                backgroundColor: "#242429",
                marginRight: "auto",
                marginLeft: "auto",
                marginTop: 20,
                borderRadius: 25,
                color: "#ffffff",
                position: "relative"
              }}>
                <span style={{  fontSize: 22,
                                fontFamily: "MyWebFont",
                                lineHeight: "67px",
                                paddingLeft: 25 }}>
                  { event['name'] }
                </span>
                <span style={{  fontSize: 12,
                                fontFamily: "MyWebFont",
                                lineHeight: "17px",
                                paddingLeft: 25,
                                position: "absolute",
                                top: 15 }}>
                  { event['date'] } <br/> { event['time']}
                </span>
                <img src={download} style={{ width: 30, left: 520, position: "absolute", top: 20 }} />
                <a style={{
                  backgroundColor: "#ffffff",
                  textAlign: "center",
                  padding: "9px 17px",
                  color: "#242429",
                  fontFamily: "MyWebFont",
                  position: "absolute",
                  left: 580,
                  top: 16,
                  borderRadius: 20,
                  cursor: "pointer",
                  fontSize: 12
                }}
                  value={event['name']}
                  onClick={this.startEvent.bind(this, event['name'])}>
                  START EVENT
                </a>
            </div>
            ))
          }
        </Container>
      </div>
    );
  }
}
