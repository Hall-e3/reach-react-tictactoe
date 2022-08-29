import React from "react";
import { connect } from "react-redux";
import { CustomButton, Loader, Modal } from "../components";
import { get_account_address, accept_wager } from "../actions/metaMaskAction";
import leftside from "../assets/images/cryptocurrencies.png";

function Player(props) {
  const [open, setOpen] = React.useState(false);
  const [player, setPlayer] = React.useState(null);
  // const handleGetAccount = () => {
  //   props.get_account_address();
  // };
  React.useEffect(() => {
    props.get_account_address();
  }, []);

  console.log(props.wallet);
  console.log(props.playerInfo);
  console.log(props.accept_loading);
  
  const handleAcceptWager = () => {
    console.log("Am accepting");
    if (props.wallet !== null && props.playerInfo !== null) {
      props.accept_wager(props.wallet, props.playerInfo);
    }
  };

  if (props.accepted) {
    window.location.href = "/game";
  }

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
        {open && (
          <Modal setOpen={setOpen} player={player}>
            <CustomButton
              text={props.accept_loading ? <Loader /> : "Accept Wager"}
              onClick={handleAcceptWager}
              data-modal-toggle="popup-modal"
              type="button"
              className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            />
            {!props.accept_loading && (
              <CustomButton
                onClick={() => setOpen(false)}
                text="Decline Wager"
                data-modal-toggle="popup-modal"
                type="button"
                className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
              />
            )}
          </Modal>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  metaMask: state.metaMask,
  meta_mask_loading: state.metaMask.meta_mask_loading,
  wallet: state.metaMask.wallet,
  error: state.metaMask.error,
  accept_loading: state.metaMask.accept_loading,
  accepted: state.metaMask.accepted,
  playerInfo: state.metaMask.playerInfo,
});

export default connect(mapStateToProps, { get_account_address, accept_wager })(
  Player
);
