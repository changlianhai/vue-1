import axios from 'axios'



// ==>> 拦截器
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});



//==>> 定义配置新建一个 axios 实例 (进行相应的配置)
const _axios = axios.create({
  baseURL: 'http://localhost:3000',

  //==>> 如果请求话费了超过 `timeout` 的时间，请求将被中断
  timeout: 3000,

   //==>> `validateStatus` 定义对于给定的HTTP 响应状态码是 resolve 或 reject  promise 。
  validateStatus: (status) => {
    return status >= 200 && status < 300; 
  },


  //==>> Headers` 是即将被发送的自定义请求头
  headers:{
    toke: '222'
  },

  // ==>>发送数据前数据处理
  transformRequest: [data => {
    return data;
  }],

   // ==> transformResponse` 在传递给 then/catch 前，允许修改响应数据
  transformResponse: [data => {
    return data;
  }],


  //==>> 'proxy' 定义代理服务器的主机名称和端口
  // proxy: {
  //   host: 'http://localhost:3000',
  //   port: 9000,
  // }


  
});








class HttpRequest {

  static get(url, params = {}) {
    return axios.get(url, params);
  }

  static post(url, params = {}) {
    return axios.post(url, params);
  }


  static delete(url, params = {}) {
    return axios.delete(url, params);
  }


  static put(url, params = {}) {
    return axios.put(url, params);
  }
  
}

export default HttpRequest;
