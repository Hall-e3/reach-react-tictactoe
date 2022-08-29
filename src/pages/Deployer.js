import React from "react";
import { connect } from "react-redux";
import { CustomButton, Loader, Form, Input, Modal } from "../components";
import {
  get_account_address,
  set_contract_info,
  accept_wager,
} from "../actions/metaMaskAction";
import leftside from "../assets/images/cryptocurrencies.png";

function Deployer(props) {
  const [deploy, setDeploy] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [player, setPlayer] = React.useState(null);
  const [selectPlayer, setSelectPlayer] = React.useState(false);
  const [wager, setWager] = React.useState("");
  const { wallet, playerInfo, deployContract } = props;

  console.log(props.accepted);

  const handleWager = (e) => {
    e.preventDefault();
    if (wager) {
      props.set_contract_info(wallet, wager);
    }
  };
  const handleAcceptWager = () => {
    if (wallet !== null && playerInfo !== null) {
      props.accept_wager(wallet, playerInfo);
    }
    setOpen(false);
  };

  if (props.accepted) {
    window.location.href = "/game";
  }

  React.useEffect(() => {
    if (deployContract) {
      setSelectPlayer(true);
    }
  }, [deployContract]);

  return (
    <div
      className="w-full h-screen bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${leftside})` }}
    >
      <div className="w-full h-full flex items-center justify-center">
        <div className="flex flex-col space-y-8 w-full">
          <div>
            <h4 className="text-center text-8xl font-bold">Tic Tac Toe</h4>
          </div>

          {!selectPlayer ? (
            <div className="flex flex-col gap-y-8 items-center justify-center">
              <div>
                <h5 className="text-center text-4xl font-bold">Deployer</h5>
              </div>

              {!deploy ? (
                <div>
                  <CustomButton
                    text={
                      props.meta_mask_loading ? <Loader /> : "Deploy Contract"
                    }
                    className="bg-green-600 text-white font-bold p-4 rounded-md uppercase"
                    block
                    onClick={() => {
                      props.get_account_address();
                      setDeploy(true);
                    }}
                  />
                </div>
              ) : (
                <Form
                  onSubmit={handleWager}
                  className="flex flex-col space-y-6"
                >
                  <Input
                    type="number"
                    placeholder="Default Wager"
                    className="p-4 w-full"
                    name="wager"
                    value={wager}
                    onChange={(e) => setWager(e.target.value)}
                  />
                  <CustomButton
                    type="submit"
                    text={props.deployer_loading ? <Loader /> : "Set Wager"}
                    className="bg-green-600 text-white font-bold p-4 rounded-md uppercase"
                    block
                  />
                </Form>
              )}
            </div>
          ) : (
            <div className="w-full flex flex-col gap-y-8 items-center justify-center">
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
          )}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  metaMask: state.metaMask,
  meta_mask_loading: state.metaMask.meta_mask_loading,
  wallet: state.metaMask.wallet,
  error: state.metaMask.error,
  playerInfo: state.metaMask.playerInfo,
  deployer_loading: state.metaMask.deployer_loading,
  deployContract: state.metaMask.deployContract,
  accepted: state.metaMask.accepted,
});

export default connect(mapStateToProps, {
  get_account_address,
  set_contract_info,
  accept_wager,
})(Deployer);
