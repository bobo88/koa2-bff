const axios = require('axios')
const { exec } = require('../db/mysql')

// 获取百度美女图
const beautyList =
  'https://image.baidu.com/search/acjson?tn=resultjson_com&logid=11675912631845458643&ipn=rj&ct=201326592&is=&fp=result&fr=ala&word=%E7%BE%8E%E5%A5%B3%E5%9B%BE&cg=girl&queryWord=%E7%BE%8E%E5%A5%B3%E5%9B%BE&cl=2&lm=-1&ie=utf-8&oe=utf-8&adpicid=&st=&z=&ic=&hd=&latest=&copyright=&s=&se=&tab=&width=&height=&face=&istype=&qc=&nc=&expermode=&nojc=&isAsync=&pn=60&rn=30&gsm=3c&1670313780014='

//--------------------------------- USER LIST -------------------------------------------------------------
// 1、API：-- 获取用户列表
const userList = async (pageIndex) => {
  const resData = await axios.get(beautyList)
  let pageSize = 20
  let limitStart = pageSize * (pageIndex - 1)
  let sqlTotal = 'SELECT COUNT(*) as total FROM test_user WHERE 1=1 '
  let sql = `SELECT * FROM test_user WHERE 1=1 `
  sql += `ORDER BY id ASC `
  if (pageIndex) {
    sql += `LIMIT ${limitStart}, ${pageSize} `
  } else {
    sql += `LIMIT 0, 5 `
  }
  sql += ';'
  sqlTotal += ';'
  let rows = await exec(sqlTotal)
  return {
    total: rows[0].total || 0,
    list: await exec(sql),
    beautyList: resData.data.data || [],
  }
}

module.exports = {
  userList,
}
