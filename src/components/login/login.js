import HttpRequest from './../../application/third/axios'
import {
  Toast
} from 'vant'
export default {
  name: 'login',
  data() {
    return {
      userInfo: {
        name: '',
        password: ''
      }
    }
  },
  created() {
  },
  methods: {

    /** 
     * 登录按钮校验
     * @author 常连海 2018-09-10
     * @return void;
     */
    loginSubmit(name = 'admin', password = '') {

      var timer = null;
      window.clearTimeout(timer);


      // 1.==>>非空校验
      if (name.length === 0) {
        Toast('用户名不能为空请，请输入');
        return;
      } else if (password.length === 0) {
        Toast('密码不能为空请，请输入')
        return;
      }


      // 2.==>>信息校验
      if (name !== 'admin' || password !== '123456') {
        Toast('用户名活密码不正确，请重新输入');
        timer = setTimeout(() => {
          this.userInfo.name = '';
          this.userInfo.password = '';
        }, 1000);
        return;
      }


      // 3.==>>验证完毕，信息正确 ， 调整到首页
      Toast.success('登录成功');
      setTimeout(() => {
        this.$router.push('/home');
      },3000);
    }
  }


}
