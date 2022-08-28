
import { loadStdlib } from "@reach-sh/stdlib";
import * as backend from "./build/index.main.mjs";
const reach = loadStdlib(process.env);

const startingBalance = reach.parseCurrency(100);

const [accAlice, accBob] = await reach.newTestAccounts(2, startingBalance);
console.log("Hello, Deployer and Api!");

console.log("Launching...");
const ctcAlice = accAlice.contract(backend);

const API = async (name) => {
  const acc = await reach.newTestAccount(startingBalance);
  const ctc = acc.contract(backend, await ctcAlice.getInfo());
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
    this.acc = acct ?? reach.newTestAccount(startingBalance);
    this.ctc = this.acc.contract(backend, info);
  }
  winner = async (winner) => {
    try {
      const winarr = ["Player1", "Player2"];
      await this.ctc.apis.Admin.winner(winner);
      console.log(` The winner is ${winarr[winner % 2]}`);
    } catch (error) {
      console.log(error);
    }
  };
}

console.log("Starting backends...");
try {
  await Promise.all([
    backend.Deployer(ctcAlice, {
      wager: reach.parseCurrency(1),
      ready: async () => {
        console.log(
          "Contract is ready to be attached to\n Contract info:",
          await ctcAlice.getInfo()
        );
        throw 42;
      },
      // implement Deployer's interact object here
    }),
  ]);
} catch (error) {
  console.log(error);
}

const info = await ctcAlice.getInfo();
const Adm = new Admins(info, accAlice);
const P1 = await API("Player1");
const P2 = await API("Player2");

await P1.acceptWager();
await P2.acceptWager();

await Adm.winner(0);

console.log("Goodbye, Deployer and Api!");