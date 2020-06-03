import $$request from '../http/index'

const user = {
  userAdd(params){
    return $$request.get('user/add',params)
  }
}

export default user