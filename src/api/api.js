import request from '@/util/axios'
console.log('envirment', process.env)
function analyseQuery(data) {
  var str = '?'
  for (const key in data) {
    str += key + '=' + data[key] + '&'
  }
  return str.substr(0, str.length - 1)
}
export default {
  appInfo() {
    return request({
      url: '/cf/app/info',
      method: 'get'
    })
  },
  login(data) {
    return request({
      url: '/cf/user/login' + `${analyseQuery(data)}`,
      method: 'post'
    })
  },
  logout() {
    return request({
      url: '/cf/user/logout',
      method: 'post'
    })
  },
  userinfo() {
    return request({
      url: '/cf/user/info',
      method: 'get'
    })
  },
  getImToken() {
    return request({
      url: '/cf/rongcloud/token',
      method: 'get'
    })
  },
  // index
  // 获取直播地址
  getLive() {
    return request({
      url: '/cf/game/live',
      method: 'get'
    })
  },
  // 获取比赛信息
  getGameInfo() {
    return request({
      url: '/cf/game/info',
      method: 'get'
    })
  },
  // 投注
  gameBet(data) {
    return request({
      url: '/cf/game/bet' + `${analyseQuery(data)}`,
      method: 'post'
    })
  },
  // 获取最近比赛结果生成图表
  getLastGameList() {
    return request({
      url: '/cf/game/task/list',
      method: 'get'
    })
  },
  // 分页加载比赛结果
  getLastGameHistory(data) {
    return request({
      url: '/cf/game/task/history' + `${analyseQuery(data)}`,
      method: 'get'
    })
  },
  // 获取投注记录
  userBetHistory(data = { pageNum: 1, pageSize: 10 }) {
    return request({
      url: '/cf/user/bet/history' + `${analyseQuery(data)}`,
      method: 'get'
    })
  },
  // 获取投注金额列表
  getGameFastBetAmount() {
    return request({
      url: '/cf/game/bet-fast-amount',
      method: 'get'
    })
  },
  // 撤回消息
  deleteMsg(data) {
    return request({
      url: '/cf/rongcloud/message/recall',
      method: 'post',
      data
    })
  }

}
