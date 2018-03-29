import { storage } from '@/services'
// $ENV, faas_testing | faas_development | faas_production
let faasEnv = window.$ENV ? window.$ENV.split('_').pop() : null
let env = faasEnv !== 'production'
  ? (storage.getItem('env') || 'alpha')
  : 'production'

const config = require('./environment/' + env).default

export default config
