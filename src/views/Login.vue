<template>
  <div class="login">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>登录页面</span>
        </div>
      </template>
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
        label-width="120px"
        class="demo-ruleForm"
      >
        <el-form-item label="账号" prop="username">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password" type="password"></el-input>
        </el-form-item>
        <div class="form-bottom">
          <el-button type="primary" size="small" @click="onLogin(ruleFormRef)">登录</el-button>
          <el-button type="success" size="small" @click="onRegistry">注册</el-button>
        </div>
      </el-form>
    </el-card>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import router from '@/router'
import { demo1 } from '@/apis/demo1'
import http from '@/apis/http'


interface RuleForm {
  username: string,
  password: string,
}
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
  username: '',
  password: '',
})

const rules = reactive<FormRules<RuleForm>>({
  username: [
    {
      required: true, message: '账号不能为空'
    }
  ],
  password: [
    {
      required: true, message: '密码不能为空'
    }
  ]
})

const onLogin = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  console.log(formEl)
  await formEl.validate((valid, fields) => {
    if (valid) {
      http.post('/login', ruleForm).then(res => {
        console.log(res)
      })
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

const onRegistry = async () => {
  const a = await demo1
  console.log(a)
  router.push('/registry')
}

</script>

<style lang="scss" scoped>
.login{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #5cdbd3;
  .box-card{
    width: 30%;
    .form-bottom{
      text-align: center;
    }
  }
}
</style>
