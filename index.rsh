"reach 0.1";

const Player = {
  makeChoice: Fun([], UInt),
  seeChoice: Fun([UInt], Null),
};

export const main = Reach.App(() => {
  const Player1 = Participant("Player1", {
    ...Player,
    wager: UInt,
  });

  const Player2 = Participant("Player2", {
    ...Player,
    acceptWager: Fun([UInt], Null),
  });
  init();

  Player1.only(() => {
    const wager = declassify(interact.wager);
    // const handP1 = declassify(interact.makeChoice());
  });

  Player1.publish(wager, handP1).pay(wager);
  commit();

  Player2.only(() => {
    interact.acceptWager(wager);
    // const handP2 = declassify(interact.makeChoice());
  });

  Player2.publish(handP2).pay(wager);

const outcome = 1;

  const [forPlayer1, forPlayer2] =
    outcome == 2 ? [2, 0] : outcome == 0 ? [0, 2] : /* tie      */ [1, 1];
  transfer(forPlayer1 * wager).to(Player1);
  transfer(forPlayer2 * wager).to(Player2);

  commit();

  each([Player1, Player2], () => {
    interact.seeChoice(outcome);
  });
});
