// Automatically generated with Reach 0.1.11 (f33abc3d)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (f33abc3d)';
export const _backendVersion = 23;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc3 = stdlib.T_Bool;
  
  return {
    infos: {
      },
    views: {
      3: [ctc0, ctc1, ctc2, ctc1, ctc3, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function _Admin_winner3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Admin_winner3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Admin_winner3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc1]);
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Data({
    Admin_winner0_54: ctc4,
    Players_acceptWager0_54: ctc5
    });
  const ctc7 = stdlib.T_Null;
  
  
  const [v279, v280, v287, v288, v289, v290, v294] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc1, ctc2, ctc1, ctc3, ctc1, ctc1]);
  const v308 = ctc.selfAddress();
  const v310 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:52:11:application call to [unknown function] (defined at: ./index.rsh:52:11:function exp)', 'at ./index.rsh:30:52:application call to "runAdmin_winner0_54" (defined at: ./index.rsh:50:9:function exp)', 'at ./index.rsh:30:52:application call to [unknown function] (defined at: ./index.rsh:30:52:function exp)'],
    msg: 'in',
    who: 'Admin_winner'
    });
  const v314 = stdlib.addressEq(v308, v279);
  stdlib.assert(v314, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:53:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:52:11:application call to [unknown function] (defined at: ./index.rsh:52:11:function exp)', 'at ./index.rsh:52:11:application call to [unknown function] (defined at: ./index.rsh:52:11:function exp)', 'at ./index.rsh:30:52:application call to "runAdmin_winner0_54" (defined at: ./index.rsh:50:9:function exp)', 'at ./index.rsh:30:52:application call to [unknown function] (defined at: ./index.rsh:30:52:function exp)'],
    msg: null,
    who: 'Admin_winner'
    });
  const v316 = stdlib.eq(v290, stdlib.checkedBigNumberify('./index.rsh:54:26:decimal', stdlib.UInt_max, '2'));
  stdlib.assert(v316, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:54:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:52:11:application call to [unknown function] (defined at: ./index.rsh:52:11:function exp)', 'at ./index.rsh:52:11:application call to [unknown function] (defined at: ./index.rsh:52:11:function exp)', 'at ./index.rsh:30:52:application call to "runAdmin_winner0_54" (defined at: ./index.rsh:50:9:function exp)', 'at ./index.rsh:30:52:application call to [unknown function] (defined at: ./index.rsh:30:52:function exp)'],
    msg: null,
    who: 'Admin_winner'
    });
  const v321 = ['Admin_winner0_54', v310];
  
  const txn1 = await (ctc.sendrecv({
    args: [v279, v280, v287, v288, v289, v290, v294, v321],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:56:14:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v327], secs: v329, time: v328, didSend: v220, from: v326 } = txn1;
      
      switch (v327[0]) {
        case 'Admin_winner0_54': {
          const v330 = v327[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_winner"
            });
          ;
          const v340 = v330[stdlib.checkedBigNumberify('./index.rsh:50:9:spread', stdlib.UInt_max, '0')];
          const v342 = stdlib.safeMod(v340, stdlib.checkedBigNumberify('./index.rsh:58:44:decimal', stdlib.UInt_max, '2'));
          const v344 = v287[v342];
          const v348 = stdlib.sub(v294, v294);
          sim_r.txns.push({
            kind: 'from',
            to: v344,
            tok: undefined /* Nothing */
            });
          const v349 = null;
          const v350 = await txn1.getOutput('Admin_winner', 'v349', ctc7, v349);
          
          sim_r.txns.push({
            kind: 'from',
            to: v279,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          break;
          }
        case 'Players_acceptWager0_54': {
          const v370 = v327[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc1, ctc3, ctc1, ctc1, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v327], secs: v329, time: v328, didSend: v220, from: v326 } = txn1;
  switch (v327[0]) {
    case 'Admin_winner0_54': {
      const v330 = v327[1];
      undefined /* setApiDetails */;
      ;
      const v340 = v330[stdlib.checkedBigNumberify('./index.rsh:50:9:spread', stdlib.UInt_max, '0')];
      const v342 = stdlib.safeMod(v340, stdlib.checkedBigNumberify('./index.rsh:58:44:decimal', stdlib.UInt_max, '2'));
      const v344 = v287[v342];
      const v348 = stdlib.sub(v294, v294);
      ;
      const v349 = null;
      const v350 = await txn1.getOutput('Admin_winner', 'v349', ctc7, v349);
      if (v220) {
        stdlib.protect(ctc7, await interact.out(v330, v350), {
          at: './index.rsh:51:7:application',
          fs: ['at ./index.rsh:51:7:application call to [unknown function] (defined at: ./index.rsh:51:7:function exp)', 'at ./index.rsh:59:10:application call to "k" (defined at: ./index.rsh:57:16:function exp)', 'at ./index.rsh:57:16:application call to [unknown function] (defined at: ./index.rsh:57:16:function exp)'],
          msg: 'out',
          who: 'Admin_winner'
          });
        }
      else {
        }
      
      ;
      return;
      
      break;
      }
    case 'Players_acceptWager0_54': {
      const v370 = v327[1];
      return;
      break;
      }
    }
  
  
  };
export async function Deployer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Deployer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Deployer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Tuple([ctc0]);
  const ctc3 = stdlib.T_Tuple([]);
  const ctc4 = stdlib.T_Data({
    Admin_winner0_54: ctc2,
    Players_acceptWager0_54: ctc3
    });
  
  
  const v276 = stdlib.protect(ctc0, interact.wager, 'for Deployer\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v276],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:26:12:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:26:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v280], secs: v282, time: v281, didSend: v27, from: v279 } = txn1;
      
      ;
      
      const v285 = [v279, v279];
      const v287 = v285;
      const v288 = stdlib.checkedBigNumberify('./index.rsh:32:5:decimal', stdlib.UInt_max, '0');
      const v289 = false;
      const v290 = stdlib.checkedBigNumberify('./index.rsh:33:5:decimal', stdlib.UInt_max, '0');
      const v291 = v281;
      const v294 = stdlib.checkedBigNumberify('./index.rsh:20:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v297 = v289 ? false : true;
        
        return v297;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v279,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v280], secs: v282, time: v281, didSend: v27, from: v279 } = txn1;
  ;
  stdlib.protect(ctc1, await interact.ready(), {
    at: './index.rsh:28:26:application',
    fs: ['at ./index.rsh:28:26:application call to [unknown function] (defined at: ./index.rsh:28:26:function exp)', 'at ./index.rsh:28:26:application call to "liftedInteract" (defined at: ./index.rsh:28:26:application)'],
    msg: 'ready',
    who: 'Deployer'
    });
  
  const v285 = [v279, v279];
  let v287 = v285;
  let v288 = stdlib.checkedBigNumberify('./index.rsh:32:5:decimal', stdlib.UInt_max, '0');
  let v289 = false;
  let v290 = stdlib.checkedBigNumberify('./index.rsh:33:5:decimal', stdlib.UInt_max, '0');
  let v291 = v281;
  let v294 = stdlib.checkedBigNumberify('./index.rsh:20:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v297 = v289 ? false : true;
    
    return v297;})()) {
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc4],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v327], secs: v329, time: v328, didSend: v220, from: v326 } = txn2;
    switch (v327[0]) {
      case 'Admin_winner0_54': {
        const v330 = v327[1];
        undefined /* setApiDetails */;
        ;
        const v340 = v330[stdlib.checkedBigNumberify('./index.rsh:50:9:spread', stdlib.UInt_max, '0')];
        const v342 = stdlib.safeMod(v340, stdlib.checkedBigNumberify('./index.rsh:58:44:decimal', stdlib.UInt_max, '2'));
        const v344 = v287[v342];
        const v348 = stdlib.sub(v294, v294);
        ;
        const v349 = null;
        await txn2.getOutput('Admin_winner', 'v349', ctc1, v349);
        const cv287 = v287;
        const cv288 = stdlib.checkedBigNumberify('./index.rsh:60:23:decimal', stdlib.UInt_max, '0');
        const cv289 = true;
        const cv290 = v290;
        const cv291 = v328;
        const cv294 = v348;
        
        v287 = cv287;
        v288 = cv288;
        v289 = cv289;
        v290 = cv290;
        v291 = cv291;
        v294 = cv294;
        
        continue;
        break;
        }
      case 'Players_acceptWager0_54': {
        const v370 = v327[1];
        undefined /* setApiDetails */;
        const v378 = stdlib.add(v294, v280);
        ;
        const v398 = stdlib.safeMod(v290, stdlib.checkedBigNumberify('./index.rsh:45:42:decimal', stdlib.UInt_max, '2'));
        const v400 = stdlib.Array_set(v287, v398, v326);
        const v401 = null;
        await txn2.getOutput('Players_acceptWager', 'v401', ctc1, v401);
        const v407 = stdlib.safeAdd(v288, v280);
        const v408 = stdlib.safeAdd(v290, stdlib.checkedBigNumberify('./index.rsh:47:45:decimal', stdlib.UInt_max, '1'));
        const cv287 = v400;
        const cv288 = v407;
        const cv289 = v289;
        const cv290 = v408;
        const cv291 = v328;
        const cv294 = v378;
        
        v287 = cv287;
        v288 = cv288;
        v289 = cv289;
        v290 = cv290;
        v291 = cv291;
        v294 = cv294;
        
        continue;
        break;
        }
      }
    
    }
  ;
  return;
  
  
  };
export async function _Players_acceptWager3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Players_acceptWager3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Players_acceptWager3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([]);
  const ctc5 = stdlib.T_Tuple([ctc1]);
  const ctc6 = stdlib.T_Data({
    Admin_winner0_54: ctc5,
    Players_acceptWager0_54: ctc4
    });
  const ctc7 = stdlib.T_Null;
  
  
  const [v279, v280, v287, v288, v289, v290, v294] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc1, ctc2, ctc1, ctc3, ctc1, ctc1]);
  const v300 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:40:10:application call to [unknown function] (defined at: ./index.rsh:40:10:function exp)', 'at ./index.rsh:30:52:application call to "runPlayers_acceptWager0_54" (defined at: ./index.rsh:38:9:function exp)', 'at ./index.rsh:30:52:application call to [unknown function] (defined at: ./index.rsh:30:52:function exp)'],
    msg: 'in',
    who: 'Players_acceptWager'
    });
  const v302 = stdlib.lt(v290, stdlib.checkedBigNumberify('./index.rsh:41:25:decimal', stdlib.UInt_max, '2'));
  stdlib.assert(v302, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:41:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:40:10:application call to [unknown function] (defined at: ./index.rsh:40:10:function exp)', 'at ./index.rsh:40:10:application call to [unknown function] (defined at: ./index.rsh:40:10:function exp)', 'at ./index.rsh:30:52:application call to "runPlayers_acceptWager0_54" (defined at: ./index.rsh:38:9:function exp)', 'at ./index.rsh:30:52:application call to [unknown function] (defined at: ./index.rsh:30:52:function exp)'],
    msg: null,
    who: 'Players_acceptWager'
    });
  const v306 = ['Players_acceptWager0_54', v300];
  
  const txn1 = await (ctc.sendrecv({
    args: [v279, v280, v287, v288, v289, v290, v294, v306],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [v280, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v327], secs: v329, time: v328, didSend: v220, from: v326 } = txn1;
      
      switch (v327[0]) {
        case 'Admin_winner0_54': {
          const v330 = v327[1];
          
          break;
          }
        case 'Players_acceptWager0_54': {
          const v370 = v327[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Players_acceptWager"
            });
          const v378 = stdlib.add(v294, v280);
          sim_r.txns.push({
            amt: v280,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v398 = stdlib.safeMod(v290, stdlib.checkedBigNumberify('./index.rsh:45:42:decimal', stdlib.UInt_max, '2'));
          const v400 = stdlib.Array_set(v287, v398, v326);
          const v401 = null;
          const v402 = await txn1.getOutput('Players_acceptWager', 'v401', ctc7, v401);
          
          const v407 = stdlib.safeAdd(v288, v280);
          const v408 = stdlib.safeAdd(v290, stdlib.checkedBigNumberify('./index.rsh:47:45:decimal', stdlib.UInt_max, '1'));
          const v552 = v400;
          const v553 = v407;
          const v554 = v289;
          const v555 = v408;
          const v557 = v378;
          if (v289) {
            sim_r.txns.push({
              kind: 'from',
              to: v279,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            sim_r.isHalt = false;
            }
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc1, ctc3, ctc1, ctc1, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v327], secs: v329, time: v328, didSend: v220, from: v326 } = txn1;
  switch (v327[0]) {
    case 'Admin_winner0_54': {
      const v330 = v327[1];
      return;
      break;
      }
    case 'Players_acceptWager0_54': {
      const v370 = v327[1];
      undefined /* setApiDetails */;
      const v378 = stdlib.add(v294, v280);
      ;
      const v398 = stdlib.safeMod(v290, stdlib.checkedBigNumberify('./index.rsh:45:42:decimal', stdlib.UInt_max, '2'));
      const v400 = stdlib.Array_set(v287, v398, v326);
      const v401 = null;
      const v402 = await txn1.getOutput('Players_acceptWager', 'v401', ctc7, v401);
      if (v220) {
        stdlib.protect(ctc7, await interact.out(v370, v402), {
          at: './index.rsh:39:7:application',
          fs: ['at ./index.rsh:39:7:application call to [unknown function] (defined at: ./index.rsh:39:7:function exp)', 'at ./index.rsh:46:10:application call to "k" (defined at: ./index.rsh:44:11:function exp)', 'at ./index.rsh:44:11:application call to [unknown function] (defined at: ./index.rsh:44:11:function exp)'],
          msg: 'out',
          who: 'Players_acceptWager'
          });
        }
      else {
        }
      
      const v407 = stdlib.safeAdd(v288, v280);
      const v408 = stdlib.safeAdd(v290, stdlib.checkedBigNumberify('./index.rsh:47:45:decimal', stdlib.UInt_max, '1'));
      const v552 = v400;
      const v553 = v407;
      const v554 = v289;
      const v555 = v408;
      const v557 = v378;
      if (v289) {
        ;
        return;
        }
      else {
        return;
        }
      break;
      }
    }
  
  
  };
export async function Admin_winner(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Admin_winner expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Admin_winner expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _Admin_winner3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Players_acceptWager(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Players_acceptWager expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Players_acceptWager expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _Players_acceptWager3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Admin_winner(uint64)byte[0]`, `Players_acceptWager()byte[0]`],
    pure: [],
    sigs: [`Admin_winner(uint64)byte[0]`, `Players_acceptWager()byte[0]`]
    },
  appApproval: `BiAHAAECIAMInYysigsmAwABAAEBIjUAMRhBAhwoZEkiWzUBIQVbNQI2GgAXSUEAMyI1BCM1BkkhBgxAABAhBhJENhoBNf8pNP9QQgAsgfXZhdEDEkQoNf8qNP9QIQWvUEIAFjYaAhc1BDYaAzYaARdJJAxAANwkEkQhBDQBEkQ0BEkiEkw0AhIRRClkKmRQSTUDSUpJVwAgNf8lWzX+VyhANf2BcVs1/IF5WzX7STUFNfqABB4G5rA0+lCwNPoiVUAAQTT6VwEINfmxIrIBNPuyCCOyEDT9JTT5FyQYCyVYsgezgAgAAAAAAAABXbAoNQc0/zT+NP0iIzT8MgY0+0kJQgCLNP6IAU2ACAAAAAAAAAGRsCg1BzT/NP40/SIlNPwkGAtSMQBQNP0lSTT8JBgLCIFAUlA0A4FoWzT+CDQDV3ABFzT8IwgyBjT7NP4IQgA9IhJEgaCNBogA+iI0ARJENARJIhJMNAISEURJNQUXNf+ABILEYf40/xZQsDEANP8xADEAUCIiIjIGIkIAADX/Nf41/TX8Nfs1+jX5Nfg0/EEAE7EisgE0/7III7IQNPiyB7NCADE0+DT5FlA0+lA0+xZQKVA0/RZQNP8WUClLAVcAf2cqSwFXfwJnSCEENQEyBjUCQgAcMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKDQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCEEMTUSRCIxNhJEIjE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 129,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v280",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v280",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T9",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T7",
                    "name": "_Admin_winner0_54",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Players_acceptWager0_54",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T9",
                "name": "v327",
                "type": "tuple"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v349",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v401",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "Admin_winner",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Players_acceptWager",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T9",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T7",
                    "name": "_Admin_winner0_54",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Players_acceptWager0_54",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T9",
                "name": "v327",
                "type": "tuple"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200147f3803806200147f833981016040819052620000269162000406565b60008055436003556200003862000239565b604080513381528351602080830191909152840151518183015290517f28822ae872174fb8917549901c639f920e5c2ef0fb881ea78a94dee578586e9d9181900360600190a16200008c34156007620000fa565b80513390819052815160200152620000a362000253565b80513390526020808401515182518201528251818301805191909152805160009201829052805160400182905280516060018290528051436080909101525160a00152620000f18162000124565b50505062000570565b81620001205760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b806020015160400151156200019257805151602082015160a001516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801562000176573d6000803e3d6000fd5b50600080805560018190556200018f906002906200027e565b50565b6200019c620002bd565b8151516001600160a01b03168152815160209081015181830152808301805151604080850191909152815183015160608086019190915260006080860181905283519091015160a08087019190915292519092015160c0850152600390915543600155516200020e91839101620004a8565b604051602081830303815290604052600290805190602001906200023492919062000302565b505050565b60405180602001604052806200024e62000391565b905290565b6040805160808101825260009181018281526060820192909252908152602081016200024e620003af565b5080546200028c9062000533565b6000825580601f106200029d575050565b601f0160209004906000526020600020908101906200018f9190620003ef565b6040805160e08101825260008082526020820152908101620002de62000391565b81526020016000815260200160001515815260200160008152602001600081525090565b828054620003109062000533565b90600052602060002090601f0160209004810192826200033457600085556200037f565b82601f106200034f57805160ff19168380011785556200037f565b828001600101855582156200037f579182015b828111156200037f57825182559160200191906001019062000362565b506200038d929150620003ef565b5090565b60405180604001604052806002906020820280368337509192915050565b6040518060c00160405280620003c462000391565b8152602001600081526020016000151581526020016000815260200160008152602001600081525090565b5b808211156200038d5760008155600101620003f0565b60008183036040808212156200041b57600080fd5b80518082016001600160401b0380821183831017156200044b57634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156200046557600080fd5b8351945060208501915084821081831117156200049257634e487b7160e01b600052604160045260246000fd5b5090915260209384015182529283015250919050565b81516001600160a01b039081168252602080840151818401526040808501516101008501939291850160005b6002811015620004f5578251851682529183019190830190600101620004d4565b50505050506060830151608083015260808301516200051860a084018215159052565b5060a083015160c083015260c083015160e083015292915050565b600181811c908216806200054857607f821691505b602082108114156200056a57634e487b7160e01b600052602260045260246000fd5b50919050565b610eff80620005806000396000f3fe6080604052600436106100565760003560e01c80631e93b0f11461005f57806383230757146100835780639d5e8f8a14610098578063ab53f2c6146100bb578063d93b2de1146100de578063e2196a67146100e657005b3661005d57005b005b34801561006b57600080fd5b506003545b6040519081526020015b60405180910390f35b34801561008f57600080fd5b50600154610070565b6100ab6100a6366004610a41565b6100f9565b604051901515815260200161007a565b3480156100c757600080fd5b506100d061013d565b60405161007a929190610a5a565b6100ab6101da565b61005d6100f4366004610ab7565b610219565b600061010361083e565b602081810180515160009081905290515182015185905260408051808201909152818152918201526101358282610249565b519392505050565b60006060600054600280805461015290610ae5565b80601f016020809104026020016040519081016040528092919081815260200182805461017e90610ae5565b80156101cb5780601f106101a0576101008083540402835291602001916101cb565b820191906000526020600020905b8154815290600101906020018083116101ae57829003601f168201915b50505050509050915091509091565b60006101e461083e565b60208101515160019081905250604080518082019091526000808252602082015261020f8282610249565b6020015192915050565b604080518082019091526000808252602082015261024561023f36849003840184610bd0565b82610249565b5050565b610259600360005414600a6105dc565b815161027490158061026d57508251600154145b600b6105dc565b60008080556002805461028690610ae5565b80601f01602080910402602001604051908101604052809291908181526020018280546102b290610ae5565b80156102ff5780601f106102d4576101008083540402835291602001916102ff565b820191906000526020600020905b8154815290600101906020018083116102e257829003601f168201915b50505050508060200190518101906103179190610c9c565b905061033460408051808201909152600060208201908152815290565b7f458d15ab73b8dc0c4c1f9d2ce4f1acf0a55f31ebf1e3f374653041f2849b98123385604051610365929190610d59565b60405180910390a1600060208501515151600181111561038757610387610acf565b14156104b35760208085015151015181526103a4341560086105dc565b60408201518151516103b7906002610602565b600281106103c7576103c7610dc0565b60200201516001600160a01b03166108fc8360c001519081150290604051600060405180830381858888f19350505050158015610408573d6000803e3d6000fd5b50604051600081527f90efe584029c25cf3e5d23d7f0e1dc90c03a7caaf21fea3bcb33441f1ec91a989060200160405180910390a16000835261044961085d565b825181516001600160a01b03909116905260208084015182518201526040808501518284018051919091528051600093018390528051600192019190915260a085015181516060015251436080909101525b602082015160a001526104ad81610650565b506105d6565b60016020850151515160018111156104cd576104cd610acf565b14156105d6576104e48260200151341460096105dc565b604051600081527f5911e74548b2bce0b6ccb04975d78173ea2a65f182177af643a1d273bad3b6c89060200160405180910390a16000602084015261052761085d565b825181516001600160a01b039091169052602080840151825190910152604083015160a0840151610564919061055e906002610602565b3361075b565b816020015160000181905250610582836060015184602001516107eb565b60208083018051909101919091526080840151905190151560409091015260a08301516105b09060016107eb565b602082810180516060019290925290514360809091015260c0840151908401510161049b565b50505050565b816102455760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b60008161063f5760405162461bcd60e51b815260206004820152600b60248201526a646976206279207a65726f60a81b60448201526064016105f9565b6106498284610dd6565b9392505050565b806020015160400151156106ba57805151602082015160a001516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156106a0573d6000803e3d6000fd5b50600080805560018190556106b790600290610886565b50565b6106c26108c0565b8151516001600160a01b03168152815160209081015181830152808301805151604080850191909152815183015160608086019190915260006080860181905283519091015160a08087019190915292519092015160c08501526003909155436001555161073291839101610df8565b60405160208183030381529060405260029080519060200190610756929190610903565b505050565b610763610987565b60005b60028110156107bd5784816002811061078157610781610dc0565b602002015182826002811061079857610798610dc0565b6001600160a01b039092166020929092020152806107b581610e96565b915050610766565b50818184600281106107d1576107d1610dc0565b6001600160a01b0390921660209290920201529392505050565b6000826107f88382610eb1565b91508110156108385760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b60448201526064016105f9565b92915050565b6040518060400160405280600081526020016108586109a5565b905290565b6040805160808101825260009181018281526060820192909252908152602081016108586109b8565b50805461089290610ae5565b6000825580601f106108a2575050565b601f0160209004906000526020600020908101906106b791906109f6565b6040805160e081018252600080825260208201529081016108df610987565b81526020016000815260200160001515815260200160008152602001600081525090565b82805461090f90610ae5565b90600052602060002090601f0160209004810192826109315760008555610977565b82601f1061094a57805160ff1916838001178555610977565b82800160010185558215610977579182015b8281111561097757825182559160200191906001019061095c565b506109839291506109f6565b5090565b60405180604001604052806002906020820280368337509192915050565b6040518060200160405280610858610a0b565b6040518060c001604052806109cb610987565b8152602001600081526020016000151581526020016000815260200160008152602001600081525090565b5b8082111561098357600081556001016109f7565b60408051606081019091528060008152602001610a346040518060200160405280600081525090565b8152600060209091015290565b600060208284031215610a5357600080fd5b5035919050565b82815260006020604081840152835180604085015260005b81811015610a8e57858101830151858201606001528201610a72565b81811115610aa0576000606083870101525b50601f01601f191692909201606001949350505050565b600060808284031215610ac957600080fd5b50919050565b634e487b7160e01b600052602160045260246000fd5b600181811c90821680610af957607f821691505b60208210811415610ac957634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff81118282101715610b5357610b53610b1a565b60405290565b6040516020810167ffffffffffffffff81118282101715610b5357610b53610b1a565b6040516060810167ffffffffffffffff81118282101715610b5357610b53610b1a565b60405160e0810167ffffffffffffffff81118282101715610b5357610b53610b1a565b80151581146106b757600080fd5b60008183036080811215610be357600080fd5b610beb610b30565b833581526060601f1983011215610c0157600080fd5b610c09610b59565b610c11610b7c565b602086013560028110610c2357600080fd5b81526020603f1985011215610c3757600080fd5b610c3f610b59565b60408701358152602082015260608601359350610c5b84610bc2565b604081019390935291825260208101919091529392505050565b80516001600160a01b0381168114610c8c57600080fd5b919050565b8051610c8c81610bc2565b60006101008284031215610caf57600080fd5b610cb7610b9f565b610cc083610c75565b81526020808401518183015284605f850112610cdb57600080fd5b610ce3610b30565b806080860187811115610cf557600080fd5b604087015b81811015610d1857610d0b81610c75565b8452928401928401610cfa565b508160408601528051606086015250505050610d3660a08401610c91565b608082015260c083015160a082015260e083015160c08201528091505092915050565b6001600160a01b0383168152815160208083019190915282015151805160a08301919060028110610d9a57634e487b7160e01b600052602160045260246000fd5b806040850152506020810151516060840152604081015115156080840152509392505050565b634e487b7160e01b600052603260045260246000fd5b600082610df357634e487b7160e01b600052601260045260246000fd5b500690565b81516001600160a01b039081168252602080840151818401526040808501516101008501939291850160005b6002811015610e43578251851682529183019190830190600101610e24565b5050505050606083015160808301526080830151610e6560a084018215159052565b5060a083015160c083015260c083015160e083015292915050565b634e487b7160e01b600052601160045260246000fd5b6000600019821415610eaa57610eaa610e80565b5060010190565b60008219821115610ec457610ec4610e80565b50019056fea2646970667358221220e2e8d61ab58e4ceb5f2ce6ef724c8c8ea809eccb71ac06b96c3ed711b5c22b6664736f6c634300080c0033`,
  BytecodeLen: 5247,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:65:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:30:52:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Admin_winner": Admin_winner,
  "Deployer": Deployer,
  "Players_acceptWager": Players_acceptWager
  };
export const _APIs = {
  Admin: {
    winner: Admin_winner
    },
  Players: {
    acceptWager: Players_acceptWager
    }
  };
