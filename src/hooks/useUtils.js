import React from "react";
import { loadStdlib } from "@reach-sh/stdlib";
import * as backend from "../build/index.main.mjs";
import { connect, useSelector } from "react-redux";
import { get_account_address } from "../actions/metaMaskAction";
const reach = loadStdlib("ETH");

function useUtils(props) {
  const [wager, setWager] = React.useState("");
  console.log(props.wallet);

  const ctcPlayerX = props.wallet?.contract(backend);
  const ctcPlayerO = props.wallet?.contract(backend, ctcPlayerX.getInfo());

  const handleInputChange = (e) => {
    setWager(e.target.value);
  };

  const API = async (name) => {
    const ctc = props.wallet.contract(backend, await ctcPlayerX.getInfo());
    const acceptWager = async () => {
      try {
        await ctc.apis.Players.acceptWager();
        console.log(`${name} accepted wager`);
      } catch (error) {
        console.log("Error");
      }
    };

    return { acceptWager };
  };

  class Admins {
    constructor(info, acct) {
      this.acc = props.wallet;
      this.ctc = this.acc?.contract(backend, info);
    }
    winner = async (winner) => {
      console.log(winner);
      try {
        const winarr = ["PlayerX", "PlayerO", "Draw"];
        await this.ctc.apis.Admin.winner(winner);
        console.log(` The winner is ${winarr[winner % 3]}`);
      } catch (error) {
        console.log(error);
      }
    };
  }

  const Admin = new Admins(props.wallet, ctcPlayerX);

  const DeployerPromises = async (wager) => {
    console.log(wager);
    try {
      await Promise.all([
        backend.Deployer(ctcPlayerX, {
          wager: reach.parseCurrency(wager),
          ready: async () => {
            console.log("Contract");
            await ctcPlayerX.getInfo();
            throw 42;
          },
        }),
      ]);
      return await ctcPlayerX.getInfo();
    } catch (error) {
      console.log(error);
    }
  };

  // const info = await ctcAlice.getInfo();
  // const Adm = new Admins(wallet, accAlice);
  // const P1 = await API("Player1");
  // const P2 = await API("Player2");

  // await P1.acceptWager();
  // await P2.acceptWager();

  // console.log("Goodbye, Deployer and Api!");
  return {
    Admin,
    wager,
    API,
    handleInputChange,
    DeployerPromises,
  };
}

const mapStateToProps = (state) => ({
  metaMask: state.metaMask,
  wallet: state.metaMask.wallet,
});

export default connect(mapStateToProps, { get_account_address })(useUtils);
