import React, { Component } from "react";
import "../../App.css";
import { Container, Row, Col } from "react-bootstrap";
<<<<<<< HEAD
import metamask from "../../images/metamask.png";
import { Image } from "react-bootstrap";
const { ethers } = require("ethers");
export default class ConnectWallet extends Component {
=======
import metamask from '../../images/metamask.svg';
import coinbase from '../../images/coinbase.svg';
import fortmatic from '../../images/fortmatic.png';
import portis from '../../images/portis.png';
import walletconnection from '../../images/walletconnection.png';
import impulse from '../../images/impulse.png';
import { Image } from "react-bootstrap";
const { ethers } = require("ethers");

const eventList = require("../../contract/EventList.json");

function WrongNetwork(props) {
  if (!props.networkStatus) {
    return null;
  }

  return (
    <div>
      <div className="wrong"
          style={{ 
            marginTop: 10,
            textAlign: "center",
            backgroundColor: "#e26861",
            color: "#ffffff",
            fontSize: 20,
            padding:10,
            borderRadius: 15,
            width: 230,
            marginLeft: "auto",
            marginRight: "auto"
           }}>
        <img style={{ width: 20 }} src={impulse}/>
        &nbsp;&nbsp;Wrong Network
      </div>
      <div style={{
            textAlign: "center",
            color: "#f21321",
            fontSize: 25,
            fontFamily: "MyWebFont"
      }}>
        MUST BE ON THE <br/>OPTIMISM NETWORK
      </div>
    </div>
    
  );
}

export default class ConnectWallet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      networkStatus: false
    };

    this.connectMetamask = this.connectMetamask.bind(this);
  }

>>>>>>> imbueworld/Influencer-Decentralized/master
  connectMetamask = async () => {
    console.log("clicked");
    try {
      const ethereum = window.ethereum;
<<<<<<< HEAD
=======
      console.log('ethereum', ethereum);
      
>>>>>>> imbueworld/Influencer-Decentralized/master
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(
          window.ethereum,
          "any"
        );
        // Prompt user for account connections
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
<<<<<<< HEAD
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
=======
        console.log("Address:", await signer.getAddress());
        console.log("Network:", await provider.getNetwork());
        const network = await provider.getNetwork();
        console.log("Network Name:", network.name);

        let balance = await provider.getBalance(signer.getAddress());
        console.log(`balance: ${ethers.utils.formatEther(balance)}`);
        if (network.name === 'unknown') {
          this.setState({ networkStatus: false });
          localStorage.setItem('walletaddress', await signer.getAddress());
          localStorage.setItem('walletBalance', ethers.utils.formatEther(balance));

          const contract = new ethers.Contract(eventList.networks['5777'].address, eventList.abi, provider);
          
          console.log('contract', contract);
          var eventCount = await contract.eventCount();
          var eventArray = [];
          for (var i = 1; i <= eventCount; i++) {
            var temp = await contract.events(i);
            eventArray.push(temp);
          }

          localStorage.setItem('events', JSON.stringify(eventArray));
          localStorage.setItem('eventCount', eventCount);

          this.props.history.push("HomePage")
        } else {
          this.setState({ networkStatus: true });
          // alert('Must Be On The Matic Network')
        }
      } else {
        this.setState({ networkStatus: true });
        console.log("Not Connected");
      }
    } catch (error) {
      this.setState({ networkStatus: true });
      console.log("error is: ", error);
    }
  }


  render() {
    const networkStatus = this.state.networkStatus;
    
    return (
      <div
        style={{ background: "#F3F3F3", width: "100vw", height: "100vh"}}
      >
        <div className='container' style={{ width: "100%" }}>
          <div>
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
          </div>
          <div style={{
                position: "absolute",
                top: 40,
                right: 300,
          }}>
            <a className="wallet-button" onClick={this.connectMetamask}>Connect Wallet</a>
          </div>
          <div
            style={{
              width: 280,
              marginTop: 100,
              marginLeft: "auto",
              marginRight: "auto"
            }}
          >
            <div>
              <div
                style={{
                  fontSize: 13,
                  padding: 10,
                  backgroundColor: "#EDEDED",
                  borderRadius: 10,
                  border: "1px solid #E9E9E9"
                }}
              >
                By connecting a wallet, you agree to Uniswap Labs' 
                <a style={{ color: "#FE4B39" }} href="terms"> Terms of Service</a> and
                acknowledge that you have read and understand the 
                <a style={{ color: "#FE4B39" }} href="disc"> Uniswap protocol disclaimer.
                </a>
              </div>
              <a className="connect-button"
                  style={{ marginTop: 20 }}
                  onClick={this.connectMetamask}>
                MetaMask
                <img style={{ height: 30, position: "absolute", top: 5, right: 10 }} src={metamask} />
              </a>
              <a className="connect-button"
                  style={{ marginTop: 10 }}>
                WalletConnection
                <img style={{ height: 30, position: "absolute", top: 5, right: 10 }} src={walletconnection} />
              </a>
              <a className="connect-button"
                  style={{ marginTop: 10 }}>
                Coinbase Wallet
                <img style={{ height: 30, position: "absolute", top: 5, right: 10 }} src={coinbase} />
              </a>
              <a className="connect-button"
                  style={{ marginTop: 10 }}>
                Fortmatic
                <img style={{ height: 30, position: "absolute", top: 5, right: 10 }} src={fortmatic} />
              </a>
              <a className="connect-button"
                  style={{ marginTop: 10 }}>
                Portis
                <img style={{ height: 30, position: "absolute", top: 5, right: 10 }} src={portis} />
              </a>
            </div>
          </div>
          <WrongNetwork networkStatus={this.state.networkStatus} />
        </div>
        
>>>>>>> imbueworld/Influencer-Decentralized/master
      </div>
    );
  }
}
