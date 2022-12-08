const env = process.env.NODE_ENV

// 配置
let MYSQL_CONF

if (env === 'dev') {
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: 'Woailaopo_1209',
    port: '3306',
    database: 'bff_schema',
  }
}

if (env === 'production') {
  // MYSQL_CONF = {
  //   host: 'localhost',
  //   user: 'root',
  //   password: 'password',
  //   port: '3306',
  //   database: 'yuanbo_web'
  // }
}

module.exports = {
  MYSQL_CONF,
}
