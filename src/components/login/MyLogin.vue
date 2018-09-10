<template>
  <div class="login">
      <div class="login_div">
      <h3>Welcome</h3>
      <div class="login_div_area">
            <p><input type="text" placeholder="用户名" v-model.trim="userInfo.name"/></p>
            <p><input type="password" placeholder="密码" v-model.trim="userInfo.password"/></p>
            <p class="login_div_btn" @click='loginSubmit(userInfo.name, userInfo.password)'><input type="button" value="立即登录"></p>
            <div class="login_div_area_sett"><span>修改密码?</span><span>|</span><span>立即注册</span></div>
      </div>
  </div>
  </div>
</template>
<script src='./login.js'></script>
<style scoped>
    * {box-sizing: border-box;}
    .login {position: absolute;top:0;left:0;width:100%;height: 100%; background-image: -webkit-linear-gradient(top, #6cc7b6,#4f96c0, #3778c8); }
    .login_div {margin: 10rem auto;width:88%;}
    .login_div h3 {padding:4rem 0;color:#fff;font-size: 5rem;}
    .login_div_area p{padding:1%  2%;justify-content: center;align-items: center;margin-bottom:1rem;}
    .login_div_area p input {width: 100%;padding: 1rem 2rem;color:#fff;border-radius:1.5rem;border: 0 none;border:1px solid #91c6d4;background-color:transparent;font-size: 1.4rem;}
    .login_div_area .login_div_btn input {background-color:#53b0f5;border:0 none;font-size: 1.6rem;box-shadow: 0px 0px  2px #4eaff4;}
    .login_div_area .login_div_area_sett span {margin-right:.5rem;color:#fff;}
    ::-webkit-input-placeholder {color: #fff; }
    ::-moz-input-placeholder {color: #fff; }
    ::-ms-input-placeholder {color: #fff; }
</style>

