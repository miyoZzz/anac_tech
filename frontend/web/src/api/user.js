import $$request from '../http/index'

const user = {
  userAdd(params){
    return $$request.post('user/add',params)
  },
  // 测试接口
  test(params){
    return $$request.post('user/test', params)
  }
}

export default user