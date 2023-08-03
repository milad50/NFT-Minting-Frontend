import { atom } from 'jotai'

type Config = {
  CONTRACT_ADDRESS: string
  SCAN_LINK: string
  NETWORK: {
    NAME: string
    SYMBOL: string
    ID: number
  }
  NFT_NAME: string
  SYMBOL: string
  MAX_MINT_AMOUNT: number
  MAX_SUPPLY: number
  WEI_COST: number
  GAS_LIMIT: number
  SITE_NAME: string
}

export const configAtom = atom<Config>({
  CONTRACT_ADDRESS: '0x87BA6fEce1822998EF6F8bF71699090b51408561',
  SCAN_LINK: 'https://goerli.blockpi.network/v1/rpc/public',
  NETWORK: {
    NAME: 'Goerli',
    SYMBOL: 'ETH',
    ID: 5,
  },
  NFT_NAME: 'JOHN',
  SYMBOL: 'JOHN',
  MAX_MINT_AMOUNT: 10000,
  MAX_SUPPLY: 100000,
  WEI_COST: 100000000000000,
  GAS_LIMIT: 285000,
  SITE_NAME: 'JOHN',
})
