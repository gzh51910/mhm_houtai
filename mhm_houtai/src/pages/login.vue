<template>
  <div class="login">
    <h1>管理员登录</h1>
    <el-form
      class="demo-input-suffix"
      ref="loginForm"
      :model="loginForm"
      v-model="loginForm"
      :rules="rules"
    >
      <el-form-item prop="username">
        <el-input placeholder="管理员用户" v-model="loginForm.username">
          <i slot="prefix" class="el-icon-s-custom"></i>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" placeholder="管理员密码" v-model="loginForm.password">
          <i slot="prefix" class="el-icon-lock"></i>
        </el-input>
      </el-form-item>
    </el-form>
    <div class="login_login">
      <button @click="submitForm">立即登录</button>
    </div>
  </div>
</template>
<script>
import { mainUrl } from "../config.json";
export default {
  data() {
    return {
      errorMsg: "",
      loginForm: {
        username: "",
        password: "",
        mdl: true
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 2,
            max: 12,
            message: "长度在 3 到 12 个字符",
            trigger: "blur"
          }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 20, message: "长度在 6 到 20 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm() {
      this.$refs.loginForm.validate(async valid => {
        if (valid) {
          //校验成功，发送ajax请求
          console.log("success");
          this.$router.push("/main");

          let { username, password } = this.loginForm;

          let result = await this.$axios.get(mainUrl + "/login", {
            params: {
              username,
              password
            }
          });

          let { data, headers } = result;
          console.log(result);

          if (data.status === 0) {
            this.errorMsg = "用户名或密码错误";
          } else {
            let user = data.data;

            user.Authorization = headers.authorization;
            this.$store.commit("login", user);
            // localStorage.setItem("Authorization", Authorization);
            let redirectUrl = this.$route.query.redirectUrl || "/main";
            this.$router.replace(redirectUrl);
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>
<style lang="scss">
.login {
  width: 300px;
  height: 220px;
  background-color: #a9a9a9;
  margin: 100px auto;
  //main部分
  a {
    text-decoration: none;
  }
  .login {
    overflow: hidden;

    .demo-input-suffix {
      margin-top: 40px;
      input {
        background-color: #f2f2f2;
        border: 1px solid #a9a9a9;
        height: 50px;
      }
      .el-input {
        background-color: #f2f2f2;
        width: 70%;
        display: inline-block;
        height: 50px;
        line-height: 50px;
        margin: 0px 45px;
        input::-webkit-input-placeholder {
          color: rgba(0, 0, 0, 0.397);
        }
        input::-moz-input-placeholder {
          color: rgba(0, 0, 0, 0.466);
        }
        input::-ms-input-placeholder {
          color: rgba(0, 0, 0, 0.459);
        }
        .el-icon-s-custom {
          color: black;
        }
      }
      .el-icon-lock {
        color: black;
      }
      .el-icon-view {
        color: black;
      }
    }
    .none_id {
      color: #666;
    }
    .login_login {
      background-color: #14b9c8b4;
      width: 320px;
      display: inline-block;
      height: 50px;
      line-height: 50px;
      margin: 20px 45px;
      border-radius: 5px;
      color: white;
      .el-icon-arrow-right {
        background-color: #14b9c865;
        width: 50px;
        height: 50px;
        text-align: center;
        float: left;
        line-height: 50px;
      }
      button {
        text-align: center;
        width: 250px;
        float: left;
      }
    }
    p {
      margin-left: 45px;
      font-size: 13px;
      font-weight: 400;
      span {
        float: right;
        margin-right: 30px;
      }
    }
  }
}
</style>

