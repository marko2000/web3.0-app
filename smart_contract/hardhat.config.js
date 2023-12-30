require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-goerli.g.alchemy.com/v2/iFmdz4DT0EBLY0tWN68IbzOyj4kh2UMC',
      accounts: [
        '64e581bdf678b2ba9acb2e67f589d9ee0f3f623bfcdb30c07071d9e3369c31af'
      ]
    }
  }
}