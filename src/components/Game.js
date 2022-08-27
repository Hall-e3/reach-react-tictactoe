import React from "react";
import { loadStdlib } from "@reach-sh/stdlib";
import * as backend from "../main/index.main.mjs";
import Board from "../components/Board";
import CustomButton from "./commons/CustomButton";
import leftside from "../assets/images/cryptocurrencies.png";
import { connect } from "react-redux";
const reach = loadStdlib(process.env);

const reducer = (state, action) => {
  switch (action.type) {
    case "JUMP":
      return {
        ...state,
        xIsNext: action.payload.step % 2 === 0,
        history: state.history.slice(0, action.payload.step + 1),
      };
    case "MOVE":
      return {
        ...state,
        history: state.history.concat({ squares: action.payload.squares }),
        xIsNext: !state.xIsNext,
      };
    default:
      return state;
  }
};

function Game(props) {
  const [outcome, setOutCome] = React.useState(null);
  console.log(outcome);
  const ctcPlayerX = props.account_address?.contract(backend);
  const ctcPlayerO = props.account_address?.contract(
    backend,
    ctcPlayerO.getInfo()
  );

  const Player = (person) => ({
    seeOutCome: (outcome) => {
      console.log(`Winnner is ${outcome}`);
      console.log(`${person} has played ....`);
      return outcome;
    },
  });

  const AllPromise = async (ctcPlayerX, ctcPlayerO) => {
    await Promise.all([
      ctcPlayerX?.PlayerX({
        ...Player("PlayerX"),
      }),
      ctcPlayerO?.PlayerO({
        ...Player("PlayerO"),
      }),
    ]);
  };

  React.useEffect(() => {
    AllPromise();
  }, []);

  const [state, dispatch] = React.useReducer(reducer, {
    xIsNext: true,
    history: [{ squares: Array(9).fill(null) }],
  });
  const { xIsNext, history } = state;

  const jumpTo = (step) => {
    dispatch({ type: "JUMP", payload: { step } });
  };

  const handleClick = (i) => {
    const currentSquare = history[history.length - 1]; //last element
    const squares = currentSquare.squares.slice(); // creating a copy of squares
    const winner = calculateWinner(squares); //get winner
    if (winner || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? "X" : "O";
    dispatch({ type: "MOVE", payload: { squares } });
  };

  const currentSquare = history[history.length - 1];
  const winner = calculateWinner(currentSquare.squares);

  const outcomes = ["X", "D", "O"];

  const handleOutCome = () => {
    for (let i = 0; i <= outcomes.length; i++) {
      if (winner === outcomes[i]) {
        return i;
      }
    }
  };
  const legs = handleOutCome();

  React.useEffect(() => {
    setOutCome(legs);
  }, [legs]);

  const status = winner
    ? winner === "D"
      ? "Draw"
      : "Winner is " + winner
    : "Next player is " + (xIsNext ? "X" : "O");
  const moves = history.map((step, move) => {
    const game_description = move ? "Go to step#" + move : "Start the Game";
    return (
      <div className="shadow-lg rounded-lg p-2  m-2 text-black" key={move}>
        <CustomButton
          className="p-2 text-black"
          onClick={() => jumpTo(move)}
          text={game_description}
        />
      </div>
    );
  });
  return (
    <div
      className={`w-full h-full grid grid-cols-1 sm:grid-cols-2 ${
        winner && "flex flex-wrap disabled"
      }`}
    >
      <div className="bg-black space-y-10">
        <div>
          <img
            src={leftside}
            alt="leftside"
            className="object-cover h-100 w-100 flex items-center justify-center"
          />
        </div>
        <div className="text-4xl text-center font-bold text-white">
          {status}
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center p-10 items-center gap-y-4">
        <div>
          <h1 className="text-2xl font-bold">{`Welcome Player ${props.account_address?._hex}`}</h1>
        </div>
        <Board
          onClick={(i) => handleClick(i)}
          squares={currentSquare.squares}
        />
        <CustomButton
          text="Play Again"
          block
          className="bg-green-700 p-4 rounded-md"
          onClick={() => window.location.reload()}
        />
      </div>
      {/* <div className=" text-black m-15 flex-1">
        <div className="text-4xl text-center font-bold">{status}</div>
        <div className="flex flex-wrap justify-center items-center text-black">
          {moves}
        </div>
      </div> */}
    </div>
  );
}

const mapStateToProps = (state) => ({
  metaMask: state.metaMask,
  account_address: state.metaMask.account_address,
});

export default connect(mapStateToProps, {})(Game);

const calculateWinner = (squares) => {
  const winnerLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  let isDraw = true;
  for (let i = 0; i < winnerLines.length; i++) {
    const [a, b, c] = winnerLines[i];
    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
      return squares[a];
    }
    if (!squares[a] || !squares[b] || !squares[c]) {
      isDraw = false;
    }
  }
  if (isDraw) return "D";
  return null;
};
