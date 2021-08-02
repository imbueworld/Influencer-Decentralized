import React, { Component } from "react";
import "../../App.css";
import { Container, Row, Col } from "react-bootstrap";
import { Image } from "react-bootstrap";
import share from "../../images/share.png";
export default class EventList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      walletAddress: "",
      address: '',
      walletBalance: '',
    };
  }

  componentDidMount = async () => {
    const walletAddress = await localStorage.getItem("walletaddress");
    console.log("wallet Address:", walletAddress);
    this.setState({ walletAddress: walletAddress, walletBalance: localStorage.getItem('walletBalance') });
    var str = this.state.walletAddress;
    var res = str.substring(0, 7);
    var last2 = str.slice(-4);
    console.log("res:", res + '...' + last2);
    this.setState({ address: res + '...' + last2 })


  };
  render() {
    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginRight: 60,
            marginTop: 20,
            // width: 100
          }}
        >
          <div style={{ marginTop: 12, marginRight: 20 }}>
            <span className='dot' style={{ backgroundColor: "#3AF048" }} />
          </div>
          <div
            style={{
              backgroundColor: "#C8C8C8",
              paddingLeft: 20,
              paddingRight: 20,
              marginTop: 5,
              marginBottom: 5,
              fontSize: 16,
              width: 300,
            }}
          >
            <Row>
              <Col style={{ width: 80, marginTop: 5 }}>{this.state.walletBalance} ETH</Col>
              <Col
                style={{
                  backgroundColor: "#FFFFFF",
                  marginTop: 5,
                  marginBottom: 5,
                  borderRadius: 5,
                }}
              >
                {this.state.address}
              </Col>
            </Row>
          </div>
        </div>

        <div className='MyContainer'>
          <h1
            style={{
              textAlign: "center",
              color: "#495049",
              //   marginTop: 40,
              fontFamily: "Sans-serif",
              //   marginLeft: 10,
              fontSize: 70,
            }}
          >
            I M B U E
          </h1>
          <Container
            className='MyContainer'
            style={{
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              alignSelf: "center",
            }}
          >
            <h3
              style={{
                textAlign: "center",
                color: "#878585",
                marginTop: 90,
                fontFamily: "Sans-serif",
                fontSize: 30,
              }}
            >
              UPCOMING
              <br /> EVENT
            </h3>

            <h6
              style={{ marginTop: 30 }}
              className='centered'
              onClick={() => this.props.history.push("ConnectWallet")}
            >
              CREATE EVENT
            </h6>
            <div
              style={{
                backgroundColor: "#000",
                borderRadius: 20,
                marginTop: 40,
                height: 80,
              }}
            >
              <Row>
                <Col>
                  <h1 style={{ color: "#FFFFFF", marginTop: 13, width: 250 }}>
                    MAX'S ABS & CORE
                  </h1>
                </Col>
                <Col style={{ color: "#FFFFFF", marginTop: 8 }}>
                  <h3 style={{ textAlign: "center", marginLeft: 10 }}>
                    JULY 12TH 2021 <br /> 8PM-10PM
                  </h3>
                </Col>
                <Col style={{ color: "#FFFFFF", marginTop: 20 }}>
                  <Image
                    src={share}
                    style={{ width: 30, height: 30, marginLeft: 80 }}
                  />
                </Col>
                <Col
                  style={{
                    marginTop: 20,
                    backgroundColor: "#FFFFFF",
                    borderRadius: 20,
                    height: 40,
                    width: 10,
                    marginLeft: 80,
                  }}
                >
                  <h5
                    style={{
                      color: "#000",
                      textAlign: "center",
                      marginTop: 10,
                    }}
                  >
                    CREATE EVENT
                  </h5>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}
