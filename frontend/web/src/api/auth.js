import $$request from '../http/index'

const auth = {
  register(userinfo){
    return $$request.post('auth/register', userinfo)
  },
  getSms(params){
    return $$request.post('auth/getSms', params)
  }
}

export default auth
