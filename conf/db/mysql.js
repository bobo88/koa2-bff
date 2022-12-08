const mysql = require('mysql')
const { MYSQL_CONF } = require('./db')

const mysqlConnect = mysql.createConnection(MYSQL_CONF)

// 开始连接
mysqlConnect.connect()

function exec(sql) {
  const promise = new Promise((resolve, reject) => {
    mysqlConnect.query(sql, (err, result) => {
      if (err) {
        reject(err)
        return
      }
      resolve(result)
    })
  })
  return promise
}

module.exports = {
  exec,
  escape: mysql.escape,
}
