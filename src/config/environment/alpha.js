let config = {
  ace: {
    metas: {
      appName: 'melody',
      appVersion: '4.4.0'
    },
    ncp: '2.0.0',
    secure: true
  },
  modules: {
    default: {
      uri: 'https://app-api-shop.alpha.elenet.me/invoke/'
    },
    shop: {
      uri: 'https://app-api-shop.alpha.elenet.me/shop/invoke/'
    }
  },
  sequenceConfigUrl: 'https://shadow.elemecdn.com/crayfish/seiya/prod_seqs'
}

export default config
