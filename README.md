# COMPLUS | MERKLE DISTRIBUTOR

Merkle Distributor is designed to quickly and automatically distribute tokens among any number of project participants.

The contract makes it possible to send tokens using a huge list of addresses. The smart contract is based on the Merkle tree that allows the contract to store just one fixed-size number with information about all the data in this tree (for example, a huge list of recipient addresses).

The Merkle tree algorithm can only distribute tokens to pre-specified user addresses. Mass distribution of tokens to random addresses is impossible.

Merkle Airdrop provides millions of accounts with access to selected contract features by saving a single number to make sure the account is in the list. In the Merkle Airdrop scheme, tokens are not distributed using an address list, instead users 'claim' their tokens themselves by sending a transaction to the contract and paying a fee. Users add special data to the transaction that allows the contract to easily verify that they are whitelisted. The contract does not have to store the list itself.

This contract is very cost-effective, because it only needs one number for an address list of any size. The contract is autonomous, extremely simple to launch and does not require any support.

## Local Development

The following assumes the use of `node@>=10`

#### Install Dependencies

`yarn`

#### Compile Contracts

`yarn compile`
