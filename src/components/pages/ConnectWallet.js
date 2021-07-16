import React, { Component } from "react";
import "../../App.css";
import { Container, Row, Col } from "react-bootstrap";
import metamask from "../../images/metamask.png";
import { Image } from "react-bootstrap";
const { ethers } = require("ethers");
export default class ConnectWallet extends Component {
  connectMetamask = async () => {
    console.log("clicked");
    try {
      const ethereum = window.ethereum;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(
          window.ethereum,
          "any"
        );
        // Prompt user for account connections
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        console.log("Account:", await signer.getAddress());
        console.log("Account:", await provider.getNetwork());
        const network = await provider.getNetwork();
        console.log("Network:", network.name);

        let balance = await provider.getBalance(signer.getAddress());
        console.log(`balance: ${ethers.utils.formatEther(balance)}`);
        if (network.name === 'maticmum') {
          localStorage.setItem('walletaddress', await signer.getAddress());
          localStorage.setItem('walletBalance', ethers.utils.formatEther(balance));
          this.props.history.push("EventList")
        } else {
          alert('Must Be On The Matic Network')
        }
      } else {
        console.log("Not Connected");
      }
    } catch (error) {
      console.log("error is: ", error);
    }
  };
  render() {
    return (
      <div
        style={{ backgroundColor: "#EEEEEE", width: "100vw", height: "100vh" }}
      >
        <Row className='divstyle' style={{ width: "100%" }}>
          <Col style={{ marginLeft: 200, marginTop: 60 }}>
            <h1
              style={{
                textAlign: "right",
                color: "#495049",
                //   marginTop: 40,
                fontFamily: "Sans-serif",
              }}
            >
              I M B U E
            </h1>
          </Col>
          <Col>
            <h6
              className='createWalletcentered'
              onClick={() => this.props.history.push("HomePage")}
            >
              Connect Wallet
            </h6>
          </Col>
        </Row>
        <Container
          className='divstyle'
          style={{
            width: "30%",
            marginTop: 50,
          }}
        >
          <div style={{ backgroundColor: "#FFFFFF", height: 250 }}>
            <div className='divstyle'>
              <div
                style={{
                  backgroundColor: "#F2F2F2",
                  margin: 9,
                  paddingTop: 5,
                  borderRadius: 10,
                }}
              >
                <h6
                  style={{
                    margin: 10,
                    fontSize: 13,
                    paddingLeft: 10,
                    paddingBottom: 20,
                  }}
                >
                  By connecting a wallet, you agree to Uniswap Labs'
                  <a style={{ color: "#FE4B39" }} href="terms">Terms of Service</a> and
                  acknowledge that you have read and understand the
                  <a style={{ color: "#FE4B39" }} href="disc">
                    Uniswap protocol disclaimer.
                  </a>
                </h6>
              </div>
            </div>
            <div className='divnextBoxstyle'>
              <div
                style={{
                  backgroundColor: "#F2F2F2",
                  margin: 9,
                  paddingTop: 5,
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: "#808080",
                }}
              >
                <div className='metamaskcontainer' onClick={this.connectMetamask}>
                  <div className='metamaskproduct'>
                    <h6
                      style={{
                        margin: 10,
                        fontSize: 15,
                        paddingLeft: 10,
                        // paddingBottom: 20,
                        // width: '90%'
                      }}
                    >
                      MetaMask
                    </h6>
                  </div>
                  <div className='metamaskproduct'>
                    <Image
                      src={metamask}
                      style={{ width: 30, height: 30, marginLeft: 230 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <h1
          className='p'
          style={{
            fontFamily: "Times New Roman",
            textAlign: "center",
            marginTop: 80,
            color: "#FE4B39",
            marginLeft: 200,
            marginRight: 200,
          }}
        >
          MUST BE ON THE MATIC NETWORK
        </h1>
      </div>
    );
  }
}
