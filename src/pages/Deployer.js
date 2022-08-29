import React from "react";
import { connect } from "react-redux";
import { CustomButton, Loader, Form, Input } from "../components";
import { get_account_address } from "../actions/metaMaskAction";
import leftside from "../assets/images/cryptocurrencies.png";
import { useUtils } from "../hooks/useUtils";

function Deployer(props) {
  const [deploy, setDeploy] = React.useState(false);
  const [wager, setWager] = React.useState("");
  const { DeployerPromises } = useUtils(wager);

  console.log(wager);
  const handleWager = (e) => {
    e.preventDefault();
    if (wager) {
      DeployerPromises(wager);
    }
  };

  // console.log(props.wallet);
  // if (props.wallet) {
  //   if (props.wallet !== null || props.wallet !== undefined) {
  //     setDeploy(true);
  //   }
  // }

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
              <Form onSubmit={handleWager} className="flex flex-col space-y-6">
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
