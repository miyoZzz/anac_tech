import $$request from '../http/index'

const test = {
  // 测试表单接口
  form(params){
    return $$request.post('test/form', params)
  }
}

export default test