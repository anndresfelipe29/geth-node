
var registerContract = web3.eth.contract([{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"getInfo","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_info","type":"string"}],"name":"setInfo","outputs":[],"stateMutability":"nonpayable","type":"function"}]);
var register = registerContract.new(
   {
     from: web3.eth.accounts[0], 
     data: '0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040518060400160405280600381526020017f536f6c00000000000000000000000000000000000000000000000000000000008152506001908051906020019061009c9291906100a2565b50610147565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106100e357805160ff1916838001178555610111565b82800160010185558215610111579182015b828111156101105782518255916020019190600101906100f5565b5b50905061011e9190610122565b5090565b61014491905b80821115610140576000816000905550600101610128565b5090565b90565b6103a7806101566000396000f3fe608060405234801561001057600080fd5b506004361061005e576000357c0100000000000000000000000000000000000000000000000000000000900480635a9b0b89146100635780638da5cb5b146100e6578063937f6e7714610130575b600080fd5b61006b6101eb565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100ab578082015181840152602081019050610090565b50505050905090810190601f1680156100d85780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6100ee61028d565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6101e96004803603602081101561014657600080fd5b810190808035906020019064010000000081111561016357600080fd5b82018360208201111561017557600080fd5b8035906020019184600183028401116401000000008311171561019757600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506102b2565b005b606060018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156102835780601f1061025857610100808354040283529160200191610283565b820191906000526020600020905b81548152906001019060200180831161026657829003601f168201915b5050505050905090565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b80600190805190602001906102c89291906102cc565b5050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061030d57805160ff191683800117855561033b565b8280016001018555821561033b579182015b8281111561033a57825182559160200191906001019061031f565b5b509050610348919061034c565b5090565b61036e91905b8082111561036a576000816000905550600101610352565b5090565b9056fea26469706673582212204b318f631ea61b4d5480d143e3bddd91bcdee152620d16ff1bc37cb85eaa726364736f6c63430006040033', 
     gas: '4700000'
   }, function (e, contract){
    console.log(e, contract);
    if (typeof contract.address !== 'undefined') {
         console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    }
 })