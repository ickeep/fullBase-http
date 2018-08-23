# fullBase-http

## 使用

``` js
import Http from 'fullBase-http'
import Config from '../../config/config'
import { notification } from 'antd'

const { hosts, format } = Config
const msg = {
  successNo: 0,
  errorFn: (data) => notification.error({
    message: data[format.errno],
    description: data[format.errmsg]
  }),
  successFn: (message) => notification.success({ message })
}
const ver = {
  needMethod: [],
  getFn: ({ url, opt } = {}) => 'var'
}
const token = {
  needMethod: ['get'],
  getFn: () => 'token',
  setFn: (token) => console.log(token)
}
export default Http({ hosts, msg, format, ver, token })
``` 