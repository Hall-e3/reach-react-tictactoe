import React from "react";
import { loadStdlib } from "@reach-sh/stdlib";
import * as backend from "../build/index.main.mjs";
import { useSelector } from "react-redux";
const reach = loadStdlib("ETH");

export default function useUtils() {
  const { wallet } = useSelector((state) => state.metaMask);
  const ctcPlayerX = wallet?.contract(backend);
  const ctcPlayerO = wallet?.contract(backend, ctcPlayerX.getInfo());

  console.log(wallet);

  const [wager, setWager] = React.useState("");
  console.log(wager);
  const handleInputChange = (e) => {
    setWager(e.target.value);
  };
  const API = async (name) => {
    const ctc = wallet.contract(backend, await ctcPlayerX.getInfo());
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
      this.acc = wallet;
      this.ctc = this.acc?.contract(backend, info);
    }
    winner = async (winner) => {
      console.log(winner);
      try {
        const winarr = ["Player1", "Player2", "Draw"];
        await this.ctc.apis.Admin.winner(winner);
        console.log(` The winner is ${winarr[winner % 3]}`);
      } catch (error) {
        console.log(error);
      }
    };
  }
  const Admin = new Admins();
  const DeployerPromises = async () => {
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

  // await Adm.winner(0);

  // console.log("Goodbye, Deployer and Api!");
  return {
    wager,
    Admin,
    handleInputChange,
    API,
    DeployerPromises,
  };
}
