import Http from 'fullbase-axios'

export default function ({ hosts = {}, format = {}, pagingFormat = {}, conf = {}, msg = {}, ver = {}, token = {} } = {}) {
  const dfFormat = { errno: 'errno', errmsg: 'errmsg', data: 'data' }
  const dfPagingFormat = {
    numsPerPage: 'numsPerPage',
    currentPage: 'currentPage',
    count: 'count',
    totalPages: 'totalPages',
    data: 'data'
  }
  const xFormat = { ...dfFormat, ...format }
  const xPagingFormat = { ...dfPagingFormat, ...pagingFormat }
  const pagingFormatObj = {}
  pagingFormatObj[xPagingFormat.numsPerPage] = 0
  pagingFormatObj[xPagingFormat.currentPage] = 0
  pagingFormatObj[xPagingFormat.count] = 0
  pagingFormatObj[xPagingFormat.totalPages] = 0
  pagingFormatObj[xPagingFormat.data] = []
  const formatObj = {}
  formatObj[xFormat.errno] = ''
  formatObj[xFormat.errmsg] = ''

  // ver 处理
  const dfVer = { needMethod: ['get'], getFn: () => '', key: 'ver' }
  const xVer = { ...dfVer, ...ver }

  // token 处理
  const dfToken = { needMethod: ['post', 'del', 'put', 'patch'], key: 'token', getFn: () => '', setFn: () => '', }
  const xToken = { ...dfToken, ...token }

  const dfMsg = { successNo: 0, errorFn: () => '', successFn: () => '' }
  const xMsg = { ...dfMsg, ...msg }

  return function (target) {
    target.prototype.http = new Http({ trim: true, hosts, format: xFormat, conf })
    // 默认数据
    target.prototype.dfData = { ...formatObj }
    target.prototype.dfData[xFormat.data] = ''
    // 默认数据 - 对像
    target.prototype.dfDataObj = { ...formatObj }
    target.prototype.dfDataObj[xFormat.data] = {}
    // 默认数据 - 数据
    target.prototype.dfDataArr = { ...formatObj }
    target.prototype.dfDataArr[xFormat.data] = []
    // 默认数据 - 分页
    target.prototype.dfDataPage = { ...formatObj, data: pagingFormatObj }

    async function httpMethod({ method, url, opt, conf = {}, msg = false }) {
      let newUrl = url
      const isVer = xVer.needMethod.indexOf(method) >= 0
      if (isVer) {
        const verVal = await xVer.getFn({ url, opt })
        newUrl = url.replace(/^\/([\w\d-_]*)\//, `/$1/ver/${verVal}/`)
      }
      const isToken = xToken.needMethod.indexOf(method) >= 0
      if (isToken) {
        if (!conf.headers) {
          conf.headers = {}
        }
        conf.headers[xToken.key] = await xToken.getFn()
      }
      const data = await this.http[method](newUrl, opt, conf)
      if (data[xToken.key]) {
        xToken.setFn(data[xToken.key])
      }
      // 消息处理
      if (msg) {
        if (data[xFormat.errno] !== xMsg.successNo) {
          const msgArr = []
          const errmsg = data[xFormat.errmsg]
          if (errmsg && typeof errmsg === 'object') {
            Object.keys(errmsg).forEach((key) => {
              msgArr.push(errmsg[key])
            })
          } else {
            msgArr.push(errmsg)
          }
          data[xFormat.errmsg] = msgArr.join(',')
          typeof xMsg.errorFn === 'function' && xMsg.errorFn(data)
        } else {
          typeof xMsg.successFn === 'function' && xMsg.successFn(typeof msg === 'string' ? msg : '操作成功')
        }
      }
      return data
    }

    target.prototype.httpGet = async function (url = '', opt = {}, msg = false, conf = {}) {
      return httpMethod.call(this, { method: 'get', url, opt, msg, conf })
    }
    target.prototype.httpPost = async function (url, opt, msg = false, conf = {}) {
      return httpMethod.call(this, { method: 'post', url, opt, msg, conf })
    }
    target.prototype.httpDel = async function (url, opt, msg = false, conf = {}) {
      return httpMethod.call(this, { method: 'delete', url, opt, msg, conf })
    }
    target.prototype.httpPut = async function (url, opt, msg = false, conf = {}) {
      return httpMethod.call(this, { method: 'put', url, opt, msg, conf })
    }
    target.prototype.httpPatch = async function (url, opt, msg = false, conf = {}) {
      return httpMethod.call(this, { method: 'patch', url, opt, msg, conf })
    }
  }
}

