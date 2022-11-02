/*
 * @Author: your name
 * @Date: 2022-09-30 11:16:55
 * @LastEditors: your name
 * @LastEditTime: 2022-09-30 11:20:44
 * @Description:
 */
const apiEnv: ApiEnv = 'dev'

const envMap = {
  dev: {
    baseUrl: 'http://m.dev.xxx.com',
    apiBaseUrl: 'https://m.devapi.xxx.com',
  },
  beta: {
    baseUrl: 'http://m.beta.xxx.com',
    apiBaseUrl: 'https://m.betaapi.xxx.com',
  },
  prod: {
    baseUrl: 'https://m.xxx.com',
    apiBaseUrl: 'https://m.api.xxx.com',
  },
  local: {
    baseUrl: 'http://m.dev.xxx.com',
    apiBaseUrl: 'https://m.devapi.xxx.com',
  },
}

type ApiEnv = keyof typeof envMap
type Env<T extends ApiEnv> = {
  apiEnv: T
} & typeof envMap[T]

function createEnv(apiEnv: ApiEnv): Env<typeof apiEnv> {
  return Object.assign({ apiEnv }, envMap[apiEnv])
}

const env = createEnv(apiEnv)
export default env
