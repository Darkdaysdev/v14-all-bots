let _sys = require('./bot/Global/Settings/_system.json')
let botcuk = [
  {
    name: "Mainframe",
    namespace: "takachi",
    script: 'takachi',
    watch: false,
    exec_mode: "cluster",
    max_memory_restart: "2G",
    cwd: "./bot/Server/Voucher"
  },
  {
    name: "Controller",
    namespace: "takachi",
    script: 'takachi',
    watch: false,
    exec_mode: "cluster",
    max_memory_restart: "2G",
    cwd: "./bot/Server/Controller"
  },
  {
    name: "Statistics",
    namespace: "takachi",
    script: 'takachi',
    watch: false,
    exec_mode: "cluster",
    max_memory_restart: "2G",
    cwd: "./bot/Server/Statistics"
  },
  {
    name: "Sync",
    namespace: "takachi",
    script: 'takachi',
    watch: false,
    exec_mode: "cluster",
    max_memory_restart: "2G",
    cwd: "./bot/Server/Sync"
  },
  {
    name: "Security_I",
    namespace: "takachi",
    script: 'takachi',
    watch: false,
    exec_mode: "cluster",
    max_memory_restart: "2G",
    cwd: "./bot/Server/Guard_I"
  },
  {
    name: "Security_II",
    namespace: "takachi",
    script: 'takachi',
    watch: false,
    exec_mode: "cluster",
    max_memory_restart: "2G",
    cwd: "./bot/Server/Guard_II"
  },
  {
    name: "Distributors",
    namespace: "takachi",
    script: 'takachi',
    watch: false,
    exec_mode: "cluster",
    max_memory_restart: "2G",
    cwd: "./bot/Server/Distributors"
  },

  {
    name: "Web",
    namespace: "takachi",
    script: 'takachi',
    watch: false,
    exec_mode: "cluster",
    max_memory_restart: "2G",
    cwd: "./bot/Server/Web"  
  },

  {
    name: "API",
    namespace: "takachi",
    script: 'takachi',
    watch: false,
    exec_mode: "cluster",
    max_memory_restart: "2G",
    cwd: "./bot/Server/API"  
  },
  
]

if(_sys.TOKENS.WELCOME.Active) {
  botcuk.push(
    {
      name: "Voices",
      namespace: "takachi",
      script: 'takachi.js',
      watch: false,
      exec_mode: "cluster",
      max_memory_restart: "2G",
      cwd: "./bot/Server/Welcome"  
    }
  )
}

module.exports = {
  apps: botcuk
};