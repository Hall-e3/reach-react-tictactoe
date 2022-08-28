import React from "react";
import { CustomButton, CustomTextArea, Form, Input } from "../components";

const Attacher = () => {
  return (
    <div>
      <div className="flex flex-col space-y-8 p-12">
        <h3>Player O</h3>
        <Form className="flex flex-col space-y-8">
          <CustomTextArea
            type="text"
            onChange={() => {}}
            placeholder="Default Wager"
            className="p-4 w-full"
            rows={5}
          />
          <CustomButton
            onClick={() => {}}
            text="Accept"
            className="bg-black text-white font-bold p-4 rounded-md uppercase"
            block
          />
        </Form>
      </div>
    </div>
  );
};

const SetWager = ({ attacher }) => {
  return (
    <div>
      <div className="flex flex-col space-y-8 p-12">
        <h3>Player X</h3>
        <Form className="flex flex-col space-y-8">
          <Input
            type="number"
            onChange={() => {}}
            placeholder="Default Wager"
            className="p-4 w-full"
          />
          <CustomButton
            onClick={() => {}}
            text="Set Wager"
            className="bg-black text-white font-bold p-4 rounded-md uppercase"
            block
          />
        </Form>
      </div>
    </div>
  );
};

export default function Deployer() {
  const [deploy, setDeploy] = React.useState(false);
  const [wager, setWager] = React.useState(false);
  const [attacher, setAttacher] = React.useState(false);
  return (
    <div className="w-full h-full">
      <div className="w-full max-lg-auto ">
        <div>
          <h4 className="text-center text-4xl font-bold">Tic Tac Toe</h4>
        </div>
        {!deploy ? (
          <div className="flex flex-col gap-y-8 items-center justify-center">
            <div>
              <p className="text-2xl font-thin text-green-600">
                Please Select A Role
              </p>
            </div>
            <div>
              <CustomButton
                text="X"
                className="bg-black text-white font-bold p-8 rounded-md uppercase"
                block
                onClick={() => {
                  setWager(true);
                  setDeploy(true);
                }}
              />
            </div>
            <div>
              <CustomButton
                text="O"
                className="bg-black text-white font-bold p-8 rounded-md uppercase"
                block
                onClick={() => {
                  setAttacher(true);
                  setDeploy(true);
                }}
              />
            </div>
          </div>
        ) : (
          <div>
            {wager && <SetWager />}
            {attacher && <Attacher />}
          </div>
        )}
      </div>
    </div>
  );
}
