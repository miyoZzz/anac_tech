import $$request from '../http/index'

const auth = {
  register(userinfo){
    return $$request.post('auth/register', userinfo)
  },
  login(login_data){
    return $$request.post('auth/login', login_data)
  },
  getSms(params){
    return $$request.post('auth/getSms', params)
  }
}

export default auth
