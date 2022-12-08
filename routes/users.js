const router = require('koa-router')()
// 引入 API 列表
const { userList } = require('../conf/controller/user')
const { SuccessModel, ErrorModel } = require('../conf/model/resModel')

router.prefix('/users')

router.get('/', async function (ctx, next) {
  ctx.body = 'this is a users response!'
  const body = ctx.request.body
  let { pageIndex = 1 } = body
  const listData = await userList(pageIndex)
  ctx.body = new SuccessModel(listData)
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router
