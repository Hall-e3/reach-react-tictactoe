import React from "react";
import { connect } from "react-redux";
import { CustomButton, Modal } from "../components";
import { get_account_address } from "../actions/metaMaskAction";
import leftside from "../assets/images/cryptocurrencies.png";

function Player(props) {
  const [open, setOpen] = React.useState(false);
  const [player, setPlayer] = React.useState(null);
  const handleGetAccount = () => {
    props.get_account_address();
  };
  return (
    <div
      className="w-full h-screen bg-no-repeat bg-contain"
      style={{ backgroundImage: `url(${leftside})` }}
    >
      <div className="w-full h-full flex flex-col items-center justify-center max-lg-auto ">
        <div>
          <h4 className="text-center text-8xl font-bold">Tic Tac Toe</h4>
        </div>

        <div className="w-full flex flex-col gap-y-8 items-center justify-center">
          <div>
            <p className="text-2xl font-thin text-green-600">
              Please Select A Role
            </p>
          </div>
          <div className="flex gap-4">
            <div>
              <CustomButton
                text="X"
                className="bg-black hover:bg-green-600 text-white font-bold p-10 rounded-md uppercase"
                block
                onClick={() => {
                  setOpen(!open);
                  setPlayer("X");
                }}
              />
            </div>
            <div>
              <CustomButton
                text="O"
                className="bg-black  hover:bg-green-600 text-white font-bold p-10 rounded-md uppercase"
                block
                onClick={() => {
                  setOpen(!open);
                  setPlayer("O");
                }}
              />
            </div>
          </div>
        </div>
        {open && <Modal setOpen={setOpen} player={player} />}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  metaMask: state.metaMask,
  meta_mask_loading: state.metaMask.meta_mask_loading,
  wallet: state.metaMask.wallet,
  error: state.metaMask.error,
});

export default connect(mapStateToProps, { get_account_address })(Player);
