import React from "react";
import { CustomButton, Header, Loader } from "../components";
import side from "../assets/images/cryptocurrencies.png";
import { connect } from "react-redux";
import { get_account_address } from "../actions/metaMaskAction";
function Home(props) {
  const handleGetAccount = () => {
    if (typeof window !== "undefined") {
      props.get_account_address();
    }
  };
  console.log(props.account_address);
  if (props.account_address) {
    if (props.account_address !== null || props.account_address !== undefined) {
      window.location.href = "/deploy";
    }
  }
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
              text={props.meta_mask_loading ? <Loader /> : "Play Game"}
              className="bg-black text-white font-bold p-4 rounded-md"
              block
              onClick={handleGetAccount}
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

const mapStateToProps = (state) => ({
  metaMask: state.metaMask,
  meta_mask_loading: state.metaMask.meta_mask_loading,
  account_address: state.metaMask.account_address,
  error: state.metaMask.error,
});

export default connect(mapStateToProps, { get_account_address })(Home);
