"reach 0.1";

import { initializeConnect } from "react-redux/es/components/connect";

const Player = {
  seeOutCome: Fun([UInt], UInt),
};

export const main = Reach.App(() => {
  const PlayerX = Participant("PlayerX", {
    ...Player,
    wager: UInt,
  });
  const PlayerO = Participant("PlayerO", {
    ...Player,
    acceptWager: Fun([UInt], Null),
  });
  init();

  PlayerX.only(() => {
    const wager = declassify(interact.wager);
  });
  PlayerX.publish(wager).pay(wager);
  commit();

  PlayerO.only(() => {
    interact.acceptWager(wager);
  });
  PlayerO.publish(wager).pay(wager);

  const outcome = seeOutCome();

  const [forPlayerX, forPlayerO] =
    outcome === 2 ? [2, 0] : outcome === 0 ? [0, 2] : /* tie      */ [1, 1];
  transfer(forPlayerX * wager).to(PlayerX);
  transfer(forPlayerO * wager).to(PlayerO);
  commit();
});
