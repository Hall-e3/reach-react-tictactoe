import React from "react";
import { connect } from "react-redux";
import { CustomButton, Loader, Form, Input } from "../components";
import { get_account_address } from "../actions/metaMaskAction";
import leftside from "../assets/images/cryptocurrencies.png";
import useUtils from "../hooks/useUtils";

function Deployer(props) {
  const [deploy, setDeploy] = React.useState(false);
  const { DeployerPromises, wager, handleInputChange } = useUtils();
  console.log(wager);

  const handleGetAccount = () => {
    props.get_account_address();
    DeployerPromises();
  };

  const handleWager = async (e) => {
    e.preventDefault();
    if (wager) {
      console.log(wager);
      DeployerPromises(wager);
    }
    setDeploy(true);
  };

  console.log(props.wallet);
  if (props.wallet) {
    if (props.wallet !== null || props.wallet !== undefined) {
      window.location.href = "/home";
    }
  }

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

          <div className="flex flex-col gap-y-8 items-center justify-center">
            <div>
              <h5 className="text-center text-4xl font-bold">Deployer</h5>
            </div>
            {deploy ? (
              <div>
                <CustomButton
                  text={
                    props.meta_mask_loading ? <Loader /> : "Deploy Contract"
                  }
                  className="bg-green-600 text-white font-bold p-4 rounded-md uppercase"
                  block
                  onClick={handleGetAccount}
                />
              </div>
            ) : (
              <Form onSubmit={handleWager} className="flex flex-col space-y-6">
                <Input
                  type="number"
                  placeholder="Default Wager"
                  className="p-4 w-full"
                  value={wager}
                  name="wager"
                  onChange={handleInputChange}
                />
                <CustomButton
                  type="Deploy Contract"
                  onClick={() => {}}
                  text="Set Wager"
                  className="bg-green-600 text-white font-bold p-4 rounded-md uppercase"
                  block
                />
              </Form>
            )}
          </div>
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
});

export default connect(mapStateToProps, { get_account_address })(Deployer);
