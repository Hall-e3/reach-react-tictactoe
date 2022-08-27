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
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1]
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
export async function Player1(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Player1 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Player1 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  
  
  const v67 = stdlib.protect(ctc0, interact.wager, 'for Player1\'s interact field wager');
  
  const v70 = stdlib.protect(ctc0, await interact.makeChoice(), {
    at: './index.rsh:22:50:application',
    fs: ['at ./index.rsh:20:15:application call to [unknown function] (defined at: ./index.rsh:20:19:function exp)'],
    msg: 'makeChoice',
    who: 'Player1'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v67, v70],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:25:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v67, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v72, v73], secs: v75, time: v74, didSend: v31, from: v71 } = txn1;
      
      sim_r.txns.push({
        amt: v72,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v72, v73], secs: v75, time: v74, didSend: v31, from: v71 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v82], secs: v84, time: v83, didSend: v42, from: v81 } = txn2;
  ;
  ;
  ;
  stdlib.protect(ctc1, await interact.seeChoice(stdlib.checkedBigNumberify('./index.rsh:35:17:decimal', stdlib.UInt_max, '1')), {
    at: './index.rsh:45:23:application',
    fs: ['at ./index.rsh:44:7:application call to [unknown function] (defined at: ./index.rsh:44:31:function exp)'],
    msg: 'seeChoice',
    who: 'Player1'
    });
  
  return;
  
  
  
  
  };
export async function Player2(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Player2 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Player2 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v72, v73], secs: v75, time: v74, didSend: v31, from: v71 } = txn1;
  ;
  stdlib.protect(ctc1, await interact.acceptWager(v72), {
    at: './index.rsh:29:25:application',
    fs: ['at ./index.rsh:28:15:application call to [unknown function] (defined at: ./index.rsh:28:19:function exp)'],
    msg: 'acceptWager',
    who: 'Player2'
    });
  const v80 = stdlib.protect(ctc0, await interact.makeChoice(), {
    at: './index.rsh:30:50:application',
    fs: ['at ./index.rsh:28:15:application call to [unknown function] (defined at: ./index.rsh:28:19:function exp)'],
    msg: 'makeChoice',
    who: 'Player2'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v71, v72, v80],
    evt_cnt: 1,
    funcNum: 1,
    lct: v74,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v72, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v82], secs: v84, time: v83, didSend: v42, from: v81 } = txn2;
      
      sim_r.txns.push({
        amt: v72,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'from',
        to: v71,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'from',
        to: v81,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v82], secs: v84, time: v83, didSend: v42, from: v81 } = txn2;
  ;
  ;
  ;
  stdlib.protect(ctc1, await interact.seeChoice(stdlib.checkedBigNumberify('./index.rsh:35:17:decimal', stdlib.UInt_max, '1')), {
    at: './index.rsh:45:23:application',
    fs: ['at ./index.rsh:44:7:application call to [unknown function] (defined at: ./index.rsh:44:31:function exp)'],
    msg: 'seeChoice',
    who: 'Player2'
    });
  
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiADAAEIJgIAAQAiNQAxGEEBJihkSSJbNQEkWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0kjDEAAWSMSRCM0ARJENARJIhJMNAISEUQpZEk1A4EgWzX/STUFFzX+gATVFRkUNP4WULA0/4gA5LEisgE0/7III7IQNANXACCyB7OxIrIBNP+yCCOyEDEAsgezQgBQSIGgjQaIALYiNAESRDQESSISTDQCEhFESTUFSSJbNf8kWzX+gASs0R/DNP8WUDT+FlCwNP+IAIYxADT/FlApSwFXAChnSCM1ATIGNQJCABwxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQoNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEgQIxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rjQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 40,
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
                "name": "v72",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v73",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
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
                "name": "v72",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v73",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
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
                "internalType": "uint256",
                "name": "v82",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
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
                "internalType": "uint256",
                "name": "v82",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405161075d38038061075d833981016040819052610022916101e7565b6000805543600355604080513381528251602080830191909152808401518051838501520151606082015290517fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f959181900360800190a160208101515161008c90341460076100ef565b6040805180820182526000602080830182815233808552868301515182526001938490554390935584518083019390935251828501528351808303850181526060909201909352805191926100e79260029290910190610118565b50505061027c565b816101145760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b82805461012490610241565b90600052602060002090601f016020900481019282610146576000855561018c565b82601f1061015f57805160ff191683800117855561018c565b8280016001018555821561018c579182015b8281111561018c578251825591602001919060010190610171565b5061019892915061019c565b5090565b5b80821115610198576000815560010161019d565b604080519081016001600160401b03811182821017156101e157634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156101fa57600080fd5b6102026101b1565b835181526040601f198301121561021857600080fd5b6102206101b1565b60208581015182526040909501518582015293810193909352509092915050565b600181811c9082168061025557607f821691505b6020821081141561027657634e487b7160e01b600052602260045260246000fd5b50919050565b6104d28061028b6000396000f3fe6080604052600436106100405760003560e01c80631e93b0f114610049578063832307571461006d578063873779a114610082578063ab53f2c61461009557005b3661004757005b005b34801561005557600080fd5b506003545b6040519081526020015b60405180910390f35b34801561007957600080fd5b5060015461005a565b610047610090366004610380565b6100b8565b3480156100a157600080fd5b506100aa610268565b604051610064929190610398565b6100c86001600054146009610305565b6100e2813515806100db57506001548235145b600a610305565b6000808055600280546100f4906103f5565b80601f0160208091040260200160405190810160405280929190818152602001828054610120906103f5565b801561016d5780601f106101425761010080835404028352916020019161016d565b820191906000526020600020905b81548152906001019060200180831161015057829003601f168201915b5050505050806020019051810190610185919061042a565b6040805133815284356020808301919091528501358183015290519192507f3957da95a08a7316b724c4fe20ec058158ff5f626860362a6b6aafcb999f7225919081900360600190a16101df816020015134146008610305565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561021c573d6000803e3d6000fd5b506020810151604051339180156108fc02916000818181858888f1935050505015801561024d573d6000803e3d6000fd5b50600080805560018190556102649060029061032a565b5050565b60006060600054600280805461027d906103f5565b80601f01602080910402602001604051908101604052809291908181526020018280546102a9906103f5565b80156102f65780601f106102cb576101008083540402835291602001916102f6565b820191906000526020600020905b8154815290600101906020018083116102d957829003601f168201915b50505050509050915091509091565b816102645760405163100960cb60e01b81526004810182905260240160405180910390fd5b508054610336906103f5565b6000825580601f10610346575050565b601f0160209004906000526020600020908101906103649190610367565b50565b5b8082111561037c5760008155600101610368565b5090565b60006040828403121561039257600080fd5b50919050565b82815260006020604081840152835180604085015260005b818110156103cc578581018301518582016060015282016103b0565b818111156103de576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061040957607f821691505b6020821081141561039257634e487b7160e01b600052602260045260246000fd5b60006040828403121561043c57600080fd5b6040516040810181811067ffffffffffffffff8211171561046d57634e487b7160e01b600052604160045260246000fd5b60405282516001600160a01b038116811461048757600080fd5b8152602092830151928101929092525091905056fea2646970667358221220a4634c1d524a9628de0b7ab8b1dd513bea85d0ead6f497365e146a3ea05d5bda64736f6c634300080c0033`,
  BytecodeLen: 1885,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:26:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:42:11:after expr stmt semicolon',
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
  "Player1": Player1,
  "Player2": Player2
  };
export const _APIs = {
  };
