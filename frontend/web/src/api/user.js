import $$request from '../http/index'

const user = {
  userAdd(params){
    return $$request.post('user/add',params)
  }
}

export default user