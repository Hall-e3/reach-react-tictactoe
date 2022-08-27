import React from "react";
import { CustomButton, Form, Input } from "../components";
const Deploying = () => {
  return <div>Deploying... please wait.</div>;
};
const Deploy = () => {
  const [deploying, setDeploying] = React.useState(false);
  return (
    <div>
      <div>
        Wager (pay to deploy):
        <br />
        <CustomButton onClick={() => {}} text="Deploy" />
      </div>
      {deploying && <Deploying />}
    </div>
  );
};

export default function Attacher() {
  const [deploy, setDeploy] = React.useState(false);
  return (
    <div>
      <div>
        <h4>Deployer(PlayerX)</h4>
      </div>
      {/* setting wager */}
      <Form>
        <Input type="number" onChange={() => {}} placeholder="Default Wager" />
        <CustomButton
          onClick={() => {
            setDeploy(true);
          }}
          text="Set Wager"
        />
      </Form>
      {deploy && <Deploy />}
    </div>
  );
}
