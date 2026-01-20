import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

const deployedContracts = {
  11155111: {
    Sepolia: {
      contracts: {
        MiniDEX: {
          address: "0x04BC510Cc015EC4176c2BDf0CF4AF0206a27B4a8",
          abi: [
            {
              "inputs": [
                { "internalType": "uint256", "name": "_amountA", "type": "uint256" },
                { "internalType": "uint256", "name": "_amountB", "type": "uint256" }
              ],
              "name": "addLiquidity",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                { "internalType": "uint256", "name": "_amountAIn", "type": "uint256" }
              ],
              "name": "swapAforB",
              "outputs": [{ "internalType": "uint256", "name": "amountBOut", "type": "uint256" }],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                { "internalType": "address", "name": "_tokenA", "type": "address" },
                { "internalType": "address", "name": "_tokenB", "type": "address" }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "inputs": [],
              "name": "reserveA",
              "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "reserveB",
              "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "tokenA",
              "outputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "tokenB",
              "outputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }],
              "stateMutability": "view",
              "type": "function"
            }
          ],
        },
      },
    },
  },
} as const satisfies GenericContractsDeclaration; // <--- THIS PART IS CRITICAL

export default deployedContracts;

