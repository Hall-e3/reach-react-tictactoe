"reach 0.1";
// 2players connect
// Someone sends the outcome to the backend and total is sent to the winner
const Player = {
  getValue: Fun([], UInt),
  seeChoice: Fun([UInt], Null),
};

export const main = Reach.App(() => {
  const Deployer = Participant("Deployer", {
    ready: Fun([], Null),
    wager: UInt,
  });
  const Players = API("Players", {
    acceptWager: Fun([], Null),
  });
  const Admin = API("Admin", {
    winner: Fun([UInt], Null),
  });
  init();

  Deployer.only(() => {
    const wager = declassify(interact.wager);
  });

  Deployer.publish(wager);

  Deployer.interact.ready();

  const [end, amt, howMany, addrs] = parallelReduce([
    false,
    0,
    0,
    Array.replicate(3, Deployer),
  ])
    .invariant(balance() == amt)
    .while(!end)
    .api(
      Players.acceptWager,
      () => {
        check(howMany < 2);
      },
      () => wager,
      (k) => {
        const addr = addrs.set(howMany % 2, this);
        k(null);
        return [end, amt + wager, howMany + 1, addr];
      }
    )
    .api(
      Admin.winner,
      (_) => {
        check(this == Deployer);
        check(howMany == 2);
      },
      (_) => 0,
      (win, k) => {
        transfer(balance()).to(addrs[win % 3]);
        k(null);
        return [true, 0, howMany, addrs];
      }
    );

  transfer(balance()).to(Deployer);
  commit();
  exit();
});
