import $$request from '../http/index'

const article = {
  articleDetail(params){
    return $$request.get('/article/detail',params)
  },
  articleList(params){
    return $$request.get('/article/list',params)
  }
}

export default article