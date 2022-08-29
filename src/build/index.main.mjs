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
  const ctc2 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
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
  const ctc2 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc1]);
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Data({
    Admin_winner0_55: ctc4,
    Players_acceptWager0_55: ctc5
    });
  const ctc7 = stdlib.T_Null;
  
  
  const [v280, v281, v288, v289, v290, v291, v295] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc1, ctc2, ctc1, ctc3, ctc1, ctc1]);
  const v309 = ctc.selfAddress();
  const v311 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:52:11:application call to [unknown function] (defined at: ./index.rsh:52:11:function exp)', 'at ./index.rsh:30:52:application call to "runAdmin_winner0_55" (defined at: ./index.rsh:50:9:function exp)', 'at ./index.rsh:30:52:application call to [unknown function] (defined at: ./index.rsh:30:52:function exp)'],
    msg: 'in',
    who: 'Admin_winner'
    });
  const v315 = stdlib.addressEq(v309, v280);
  stdlib.assert(v315, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:53:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:52:11:application call to [unknown function] (defined at: ./index.rsh:52:11:function exp)', 'at ./index.rsh:52:11:application call to [unknown function] (defined at: ./index.rsh:52:11:function exp)', 'at ./index.rsh:30:52:application call to "runAdmin_winner0_55" (defined at: ./index.rsh:50:9:function exp)', 'at ./index.rsh:30:52:application call to [unknown function] (defined at: ./index.rsh:30:52:function exp)'],
    msg: null,
    who: 'Admin_winner'
    });
  const v317 = stdlib.eq(v291, stdlib.checkedBigNumberify('./index.rsh:54:26:decimal', stdlib.UInt_max, '2'));
  stdlib.assert(v317, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:54:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:52:11:application call to [unknown function] (defined at: ./index.rsh:52:11:function exp)', 'at ./index.rsh:52:11:application call to [unknown function] (defined at: ./index.rsh:52:11:function exp)', 'at ./index.rsh:30:52:application call to "runAdmin_winner0_55" (defined at: ./index.rsh:50:9:function exp)', 'at ./index.rsh:30:52:application call to [unknown function] (defined at: ./index.rsh:30:52:function exp)'],
    msg: null,
    who: 'Admin_winner'
    });
  const v322 = ['Admin_winner0_55', v311];
  
  const txn1 = await (ctc.sendrecv({
    args: [v280, v281, v288, v289, v290, v291, v295, v322],
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
      
      
      const {data: [v328], secs: v330, time: v329, didSend: v221, from: v327 } = txn1;
      
      switch (v328[0]) {
        case 'Admin_winner0_55': {
          const v331 = v328[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_winner"
            });
          ;
          const v341 = v331[stdlib.checkedBigNumberify('./index.rsh:50:9:spread', stdlib.UInt_max, '0')];
          const v343 = stdlib.safeMod(v341, stdlib.checkedBigNumberify('./index.rsh:58:44:decimal', stdlib.UInt_max, '3'));
          const v345 = v288[v343];
          const v349 = stdlib.sub(v295, v295);
          sim_r.txns.push({
            kind: 'from',
            to: v345,
            tok: undefined /* Nothing */
            });
          const v350 = null;
          const v351 = await txn1.getOutput('Admin_winner', 'v350', ctc7, v350);
          
          sim_r.txns.push({
            kind: 'from',
            to: v280,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          break;
          }
        case 'Players_acceptWager0_55': {
          const v371 = v328[1];
          
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
  const {data: [v328], secs: v330, time: v329, didSend: v221, from: v327 } = txn1;
  switch (v328[0]) {
    case 'Admin_winner0_55': {
      const v331 = v328[1];
      undefined /* setApiDetails */;
      ;
      const v341 = v331[stdlib.checkedBigNumberify('./index.rsh:50:9:spread', stdlib.UInt_max, '0')];
      const v343 = stdlib.safeMod(v341, stdlib.checkedBigNumberify('./index.rsh:58:44:decimal', stdlib.UInt_max, '3'));
      const v345 = v288[v343];
      const v349 = stdlib.sub(v295, v295);
      ;
      const v350 = null;
      const v351 = await txn1.getOutput('Admin_winner', 'v350', ctc7, v350);
      if (v221) {
        stdlib.protect(ctc7, await interact.out(v331, v351), {
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
    case 'Players_acceptWager0_55': {
      const v371 = v328[1];
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
    Admin_winner0_55: ctc2,
    Players_acceptWager0_55: ctc3
    });
  
  
  const v277 = stdlib.protect(ctc0, interact.wager, 'for Deployer\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v277],
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
      
      
      const {data: [v281], secs: v283, time: v282, didSend: v27, from: v280 } = txn1;
      
      ;
      
      const v286 = [v280, v280, v280];
      const v288 = v286;
      const v289 = stdlib.checkedBigNumberify('./index.rsh:32:5:decimal', stdlib.UInt_max, '0');
      const v290 = false;
      const v291 = stdlib.checkedBigNumberify('./index.rsh:33:5:decimal', stdlib.UInt_max, '0');
      const v292 = v282;
      const v295 = stdlib.checkedBigNumberify('./index.rsh:20:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v298 = v290 ? false : true;
        
        return v298;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v280,
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
  const {data: [v281], secs: v283, time: v282, didSend: v27, from: v280 } = txn1;
  ;
  stdlib.protect(ctc1, await interact.ready(), {
    at: './index.rsh:28:26:application',
    fs: ['at ./index.rsh:28:26:application call to [unknown function] (defined at: ./index.rsh:28:26:function exp)', 'at ./index.rsh:28:26:application call to "liftedInteract" (defined at: ./index.rsh:28:26:application)'],
    msg: 'ready',
    who: 'Deployer'
    });
  
  const v286 = [v280, v280, v280];
  let v288 = v286;
  let v289 = stdlib.checkedBigNumberify('./index.rsh:32:5:decimal', stdlib.UInt_max, '0');
  let v290 = false;
  let v291 = stdlib.checkedBigNumberify('./index.rsh:33:5:decimal', stdlib.UInt_max, '0');
  let v292 = v282;
  let v295 = stdlib.checkedBigNumberify('./index.rsh:20:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v298 = v290 ? false : true;
    
    return v298;})()) {
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc4],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v328], secs: v330, time: v329, didSend: v221, from: v327 } = txn2;
    switch (v328[0]) {
      case 'Admin_winner0_55': {
        const v331 = v328[1];
        undefined /* setApiDetails */;
        ;
        const v341 = v331[stdlib.checkedBigNumberify('./index.rsh:50:9:spread', stdlib.UInt_max, '0')];
        const v343 = stdlib.safeMod(v341, stdlib.checkedBigNumberify('./index.rsh:58:44:decimal', stdlib.UInt_max, '3'));
        const v345 = v288[v343];
        const v349 = stdlib.sub(v295, v295);
        ;
        const v350 = null;
        await txn2.getOutput('Admin_winner', 'v350', ctc1, v350);
        const cv288 = v288;
        const cv289 = stdlib.checkedBigNumberify('./index.rsh:60:23:decimal', stdlib.UInt_max, '0');
        const cv290 = true;
        const cv291 = v291;
        const cv292 = v329;
        const cv295 = v349;
        
        v288 = cv288;
        v289 = cv289;
        v290 = cv290;
        v291 = cv291;
        v292 = cv292;
        v295 = cv295;
        
        continue;
        break;
        }
      case 'Players_acceptWager0_55': {
        const v371 = v328[1];
        undefined /* setApiDetails */;
        const v379 = stdlib.add(v295, v281);
        ;
        const v399 = stdlib.safeMod(v291, stdlib.checkedBigNumberify('./index.rsh:45:42:decimal', stdlib.UInt_max, '2'));
        const v401 = stdlib.Array_set(v288, v399, v327);
        const v402 = null;
        await txn2.getOutput('Players_acceptWager', 'v402', ctc1, v402);
        const v408 = stdlib.safeAdd(v289, v281);
        const v409 = stdlib.safeAdd(v291, stdlib.checkedBigNumberify('./index.rsh:47:45:decimal', stdlib.UInt_max, '1'));
        const cv288 = v401;
        const cv289 = v408;
        const cv290 = v290;
        const cv291 = v409;
        const cv292 = v329;
        const cv295 = v379;
        
        v288 = cv288;
        v289 = cv289;
        v290 = cv290;
        v291 = cv291;
        v292 = cv292;
        v295 = cv295;
        
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
  const ctc2 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([]);
  const ctc5 = stdlib.T_Tuple([ctc1]);
  const ctc6 = stdlib.T_Data({
    Admin_winner0_55: ctc5,
    Players_acceptWager0_55: ctc4
    });
  const ctc7 = stdlib.T_Null;
  
  
  const [v280, v281, v288, v289, v290, v291, v295] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc1, ctc2, ctc1, ctc3, ctc1, ctc1]);
  const v301 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:40:10:application call to [unknown function] (defined at: ./index.rsh:40:10:function exp)', 'at ./index.rsh:30:52:application call to "runPlayers_acceptWager0_55" (defined at: ./index.rsh:38:9:function exp)', 'at ./index.rsh:30:52:application call to [unknown function] (defined at: ./index.rsh:30:52:function exp)'],
    msg: 'in',
    who: 'Players_acceptWager'
    });
  const v303 = stdlib.lt(v291, stdlib.checkedBigNumberify('./index.rsh:41:25:decimal', stdlib.UInt_max, '2'));
  stdlib.assert(v303, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:41:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:40:10:application call to [unknown function] (defined at: ./index.rsh:40:10:function exp)', 'at ./index.rsh:40:10:application call to [unknown function] (defined at: ./index.rsh:40:10:function exp)', 'at ./index.rsh:30:52:application call to "runPlayers_acceptWager0_55" (defined at: ./index.rsh:38:9:function exp)', 'at ./index.rsh:30:52:application call to [unknown function] (defined at: ./index.rsh:30:52:function exp)'],
    msg: null,
    who: 'Players_acceptWager'
    });
  const v307 = ['Players_acceptWager0_55', v301];
  
  const txn1 = await (ctc.sendrecv({
    args: [v280, v281, v288, v289, v290, v291, v295, v307],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [v281, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v328], secs: v330, time: v329, didSend: v221, from: v327 } = txn1;
      
      switch (v328[0]) {
        case 'Admin_winner0_55': {
          const v331 = v328[1];
          
          break;
          }
        case 'Players_acceptWager0_55': {
          const v371 = v328[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Players_acceptWager"
            });
          const v379 = stdlib.add(v295, v281);
          sim_r.txns.push({
            amt: v281,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v399 = stdlib.safeMod(v291, stdlib.checkedBigNumberify('./index.rsh:45:42:decimal', stdlib.UInt_max, '2'));
          const v401 = stdlib.Array_set(v288, v399, v327);
          const v402 = null;
          const v403 = await txn1.getOutput('Players_acceptWager', 'v402', ctc7, v402);
          
          const v408 = stdlib.safeAdd(v289, v281);
          const v409 = stdlib.safeAdd(v291, stdlib.checkedBigNumberify('./index.rsh:47:45:decimal', stdlib.UInt_max, '1'));
          const v553 = v401;
          const v554 = v408;
          const v555 = v290;
          const v556 = v409;
          const v558 = v379;
          if (v290) {
            sim_r.txns.push({
              kind: 'from',
              to: v280,
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
  const {data: [v328], secs: v330, time: v329, didSend: v221, from: v327 } = txn1;
  switch (v328[0]) {
    case 'Admin_winner0_55': {
      const v331 = v328[1];
      return;
      break;
      }
    case 'Players_acceptWager0_55': {
      const v371 = v328[1];
      undefined /* setApiDetails */;
      const v379 = stdlib.add(v295, v281);
      ;
      const v399 = stdlib.safeMod(v291, stdlib.checkedBigNumberify('./index.rsh:45:42:decimal', stdlib.UInt_max, '2'));
      const v401 = stdlib.Array_set(v288, v399, v327);
      const v402 = null;
      const v403 = await txn1.getOutput('Players_acceptWager', 'v402', ctc7, v402);
      if (v221) {
        stdlib.protect(ctc7, await interact.out(v371, v403), {
          at: './index.rsh:39:7:application',
          fs: ['at ./index.rsh:39:7:application call to [unknown function] (defined at: ./index.rsh:39:7:function exp)', 'at ./index.rsh:46:10:application call to "k" (defined at: ./index.rsh:44:11:function exp)', 'at ./index.rsh:44:11:application call to [unknown function] (defined at: ./index.rsh:44:11:function exp)'],
          msg: 'out',
          who: 'Players_acceptWager'
          });
        }
      else {
        }
      
      const v408 = stdlib.safeAdd(v289, v281);
      const v409 = stdlib.safeAdd(v291, stdlib.checkedBigNumberify('./index.rsh:47:45:decimal', stdlib.UInt_max, '1'));
      const v553 = v401;
      const v554 = v408;
      const v555 = v290;
      const v556 = v409;
      const v558 = v379;
      if (v290) {
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
  appApproval: `BiAHAAEgAgMInYysigsmAwABAAEBIjUAMRhBAiMoZEkiWzUBIQVbNQI2GgAXSUEAMyI1BCM1BkkhBgxAABAhBhJENhoBNf8pNP9QQgAsgfXZhdEDEkQoNf8qNP9QIQWvUEIAFjYaAhc1BDYaAzYaARdJJQxAAOAlEkQhBDQBEkQ0BEkiEkw0AhIRRClkKmRQSTUDSUpJVwAgNf8kWzX+VyhgNf2BkQFbNfyBmQFbNftJNQU1+oAEHgbmsDT6ULA0+iJVQABCNPpXAQg1+bEisgE0+7III7IQNP0kNPkXIQQYCyRYsgezgAgAAAAAAAABXrAoNQc0/zT+NP0iIzT8MgY0+0kJQgCPNP6IAVGACAAAAAAAAAGSsCg1BzT/NP40/SIkNPwlGAtSMQBQNP0kSTT8JRgLCIFgUlA0A4GIAVs0/gg0A1eQARc0/CMIMgY0+zT+CEIAQCISRIGgjQaIAP0iNAESRDQESSISTDQCEhFESTUFFzX/gASCxGH+NP8WULAxADT/MQAxAFAxAFAiIiIyBiJCAAA1/zX+Nf01/DX7Nfo1+TX4NPxBABOxIrIBNP+yCCOyEDT4sgezQgAxNPg0+RZQNPpQNPsWUClQNP0WUDT/FlApSwFXAH9nKksBV38iZ0ghBDUBMgY1AkIAHDEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCg0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQhBDE1EkQiMTYSRCIxNxJEIjUBIjUCQv+uNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 161,
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
                "name": "v281",
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
                "name": "v281",
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
                    "name": "_Admin_winner0_55",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Players_acceptWager0_55",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T9",
                "name": "v328",
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
    "name": "_reach_oe_v350",
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
    "name": "_reach_oe_v402",
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
                    "name": "_Admin_winner0_55",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Players_acceptWager0_55",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T9",
                "name": "v328",
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
  Bytecode: `0x6080604052604051620014783803806200147883398101604081905262000026916200040e565b60008055436003556200003862000241565b604080513381528351602080830191909152840151518183015290517f28822ae872174fb8917549901c639f920e5c2ef0fb881ea78a94dee578586e9d9181900360600190a16200008c3415600762000102565b805133908190528151602001819052815160400152620000ab6200025b565b80513390526020808401515182518201528251818301805191909152805160009201829052805160400182905280516060018290528051436080909101525160a00152620000f9816200012c565b50505062000571565b81620001285760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b806020015160400151156200019a57805151602082015160a001516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156200017e573d6000803e3d6000fd5b5060008080556001819055620001979060029062000286565b50565b620001a4620002c5565b8151516001600160a01b03168152815160209081015181830152808301805151604080850191909152815183015160608086019190915260006080860181905283519091015160a08087019190915292519092015160c0850152600390915543600155516200021691839101620004b0565b604051602081830303815290604052600290805190602001906200023c9291906200030a565b505050565b60405180602001604052806200025662000399565b905290565b60408051608081018252600091810182815260608201929092529081526020810162000256620003b7565b508054620002949062000534565b6000825580601f10620002a5575050565b601f016020900490600052602060002090810190620001979190620003f7565b6040805160e08101825260008082526020820152908101620002e662000399565b81526020016000815260200160001515815260200160008152602001600081525090565b828054620003189062000534565b90600052602060002090601f0160209004810192826200033c576000855562000387565b82601f106200035757805160ff191683800117855562000387565b8280016001018555821562000387579182015b82811115620003875782518255916020019190600101906200036a565b5062000395929150620003f7565b5090565b60405180606001604052806003906020820280368337509192915050565b6040518060c00160405280620003cc62000399565b8152602001600081526020016000151581526020016000815260200160008152602001600081525090565b5b80821115620003955760008155600101620003f8565b60008183036040808212156200042357600080fd5b80518082016001600160401b0380821183831017156200045357634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156200046d57600080fd5b8351945060208501915084821081831117156200049a57634e487b7160e01b600052604160045260246000fd5b5090915260209384015182529283015250919050565b81516001600160a01b039081168252602080840151818401526040808501516101208501939291850160005b6003811015620004fd578251851682529183019190830190600101620004dc565b50505050606084015160a084015250608083015180151560c08401525060a083015160e083015260c0909201516101009091015290565b600181811c908216806200054957607f821691505b602082108114156200056b57634e487b7160e01b600052602260045260246000fd5b50919050565b610ef780620005816000396000f3fe6080604052600436106100565760003560e01c80631e93b0f11461005f57806383230757146100835780639d5e8f8a14610098578063ab53f2c6146100bb578063d93b2de1146100de578063e2196a67146100e657005b3661005d57005b005b34801561006b57600080fd5b506003545b6040519081526020015b60405180910390f35b34801561008f57600080fd5b50600154610070565b6100ab6100a6366004610a41565b6100f9565b604051901515815260200161007a565b3480156100c757600080fd5b506100d061013d565b60405161007a929190610a5a565b6100ab6101da565b61005d6100f4366004610ab7565b610219565b600061010361083e565b602081810180515160009081905290515182015185905260408051808201909152818152918201526101358282610249565b519392505050565b60006060600054600280805461015290610ae5565b80601f016020809104026020016040519081016040528092919081815260200182805461017e90610ae5565b80156101cb5780601f106101a0576101008083540402835291602001916101cb565b820191906000526020600020905b8154815290600101906020018083116101ae57829003601f168201915b50505050509050915091509091565b60006101e461083e565b60208101515160019081905250604080518082019091526000808252602082015261020f8282610249565b6020015192915050565b604080518082019091526000808252602082015261024561023f36849003840184610bd0565b82610249565b5050565b610259600360005414600a6105dc565b815161027490158061026d57508251600154145b600b6105dc565b60008080556002805461028690610ae5565b80601f01602080910402602001604051908101604052809291908181526020018280546102b290610ae5565b80156102ff5780601f106102d4576101008083540402835291602001916102ff565b820191906000526020600020905b8154815290600101906020018083116102e257829003601f168201915b50505050508060200190518101906103179190610c9c565b905061033460408051808201909152600060208201908152815290565b7f458d15ab73b8dc0c4c1f9d2ce4f1acf0a55f31ebf1e3f374653041f2849b98123385604051610365929190610d57565b60405180910390a1600060208501515151600181111561038757610387610acf565b14156104b35760208085015151015181526103a4341560086105dc565b60408201518151516103b7906003610602565b600381106103c7576103c7610dbe565b60200201516001600160a01b03166108fc8360c001519081150290604051600060405180830381858888f19350505050158015610408573d6000803e3d6000fd5b50604051600081527fc911a2110ee39cdb4a268898abc6b3cf401b42e51c88d3efab821b603fc4781b9060200160405180910390a16000835261044961085d565b825181516001600160a01b03909116905260208084015182518201526040808501518284018051919091528051600093018390528051600192019190915260a085015181516060015251436080909101525b602082015160a001526104ad81610650565b506105d6565b60016020850151515160018111156104cd576104cd610acf565b14156105d6576104e48260200151341460096105dc565b604051600081527fe58ce9eca18223974fb0de4a49c89bcae461354ce26112d76bc15c2d735839289060200160405180910390a16000602084015261052761085d565b825181516001600160a01b039091169052602080840151825190910152604083015160a0840151610564919061055e906002610602565b3361075b565b816020015160000181905250610582836060015184602001516107eb565b60208083018051909101919091526080840151905190151560409091015260a08301516105b09060016107eb565b602082810180516060019290925290514360809091015260c0840151908401510161049b565b50505050565b816102455760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b60008161063f5760405162461bcd60e51b815260206004820152600b60248201526a646976206279207a65726f60a81b60448201526064016105f9565b6106498284610dd4565b9392505050565b806020015160400151156106ba57805151602082015160a001516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156106a0573d6000803e3d6000fd5b50600080805560018190556106b790600290610886565b50565b6106c26108c0565b8151516001600160a01b03168152815160209081015181830152808301805151604080850191909152815183015160608086019190915260006080860181905283519091015160a08087019190915292519092015160c08501526003909155436001555161073291839101610df6565b60405160208183030381529060405260029080519060200190610756929190610903565b505050565b610763610987565b60005b60038110156107bd5784816003811061078157610781610dbe565b602002015182826003811061079857610798610dbe565b6001600160a01b039092166020929092020152806107b581610e8e565b915050610766565b50818184600381106107d1576107d1610dbe565b6001600160a01b0390921660209290920201529392505050565b6000826107f88382610ea9565b91508110156108385760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b60448201526064016105f9565b92915050565b6040518060400160405280600081526020016108586109a5565b905290565b6040805160808101825260009181018281526060820192909252908152602081016108586109b8565b50805461089290610ae5565b6000825580601f106108a2575050565b601f0160209004906000526020600020908101906106b791906109f6565b6040805160e081018252600080825260208201529081016108df610987565b81526020016000815260200160001515815260200160008152602001600081525090565b82805461090f90610ae5565b90600052602060002090601f0160209004810192826109315760008555610977565b82601f1061094a57805160ff1916838001178555610977565b82800160010185558215610977579182015b8281111561097757825182559160200191906001019061095c565b506109839291506109f6565b5090565b60405180606001604052806003906020820280368337509192915050565b6040518060200160405280610858610a0b565b6040518060c001604052806109cb610987565b8152602001600081526020016000151581526020016000815260200160008152602001600081525090565b5b8082111561098357600081556001016109f7565b60408051606081019091528060008152602001610a346040518060200160405280600081525090565b8152600060209091015290565b600060208284031215610a5357600080fd5b5035919050565b82815260006020604081840152835180604085015260005b81811015610a8e57858101830151858201606001528201610a72565b81811115610aa0576000606083870101525b50601f01601f191692909201606001949350505050565b600060808284031215610ac957600080fd5b50919050565b634e487b7160e01b600052602160045260246000fd5b600181811c90821680610af957607f821691505b60208210811415610ac957634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff81118282101715610b5357610b53610b1a565b60405290565b6040516020810167ffffffffffffffff81118282101715610b5357610b53610b1a565b6040516060810167ffffffffffffffff81118282101715610b5357610b53610b1a565b60405160e0810167ffffffffffffffff81118282101715610b5357610b53610b1a565b80151581146106b757600080fd5b60008183036080811215610be357600080fd5b610beb610b30565b833581526060601f1983011215610c0157600080fd5b610c09610b59565b610c11610b7c565b602086013560028110610c2357600080fd5b81526020603f1985011215610c3757600080fd5b610c3f610b59565b60408701358152602082015260608601359350610c5b84610bc2565b604081019390935291825260208101919091529392505050565b80516001600160a01b0381168114610c8c57600080fd5b919050565b8051610c8c81610bc2565b60006101208284031215610caf57600080fd5b610cb7610b9f565b610cc083610c75565b81526020808401518183015284605f850112610cdb57600080fd5b610ce3610b7c565b8060a0860187811115610cf557600080fd5b604087015b81811015610d1857610d0b81610c75565b8452928401928401610cfa565b508160408601528051606086015250505050610d3660c08401610c91565b608082015260e083015160a08201526101009092015160c083015250919050565b6001600160a01b0383168152815160208083019190915282015151805160a08301919060028110610d9857634e487b7160e01b600052602160045260246000fd5b806040850152506020810151516060840152604081015115156080840152509392505050565b634e487b7160e01b600052603260045260246000fd5b600082610df157634e487b7160e01b600052601260045260246000fd5b500690565b81516001600160a01b039081168252602080840151818401526040808501516101208501939291850160005b6003811015610e41578251851682529183019190830190600101610e22565b50505050606084015160a084015250608083015180151560c08401525060a083015160e083015260c0909201516101009091015290565b634e487b7160e01b600052601160045260246000fd5b6000600019821415610ea257610ea2610e78565b5060010190565b60008219821115610ebc57610ebc610e78565b50019056fea264697066735822122082c0243e4cdbd10d74947de4bbf3bdbfb2e92c050dbc35385cfdff65f7ae03e264736f6c634300080c0033`,
  BytecodeLen: 5240,
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
