import React from "react";
import { CustomButton, Header } from "../components";
import side from "../assets/images/cryptocurrencies.png";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="p-6 sm:px-40 md:grid md:grid-cols-2">
        <div className="mb-4 sm:hidden flex items-center justify-center">
          <img src={side} alt="side" />
        </div>
        <div className="flex flex-col md:w-5/6 gap-y-6 justify-center">
          <div>
            <h3 className="font-bold text-3xl">
              Play Tic Tac Toe Game on
              <span className="text-green-500 text-4xl"> Reach blockchain</span>
            </h3>
          </div>
          <div>
            <p className="text-sm leading-6">
              Tic tac toe game on reach blockchain illustrates the authenticity
              and transparency aspects of blockchain and elaborating the
              decentralized characteristics of blockchain applications.
              Therefore you can have have fun knowing at the back of the head
              it's safe
            </p>
          </div>
          <div>
            <CustomButton
              text="Play Game"
              className="bg-black text-white font-bold p-4 rounded-md"
              block
              onClick={() => (window.location.href = "/play")}
            />
          </div>
        </div>
        <div className="hidden sm:block">
          <img src={side} alt="side" />
        </div>
      </div>
    </div>
  );
}
