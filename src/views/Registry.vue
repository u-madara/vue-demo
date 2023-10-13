<template>
  <div class="registry">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>注册页面</span>
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
        <el-form-item label="手机号" prop="phone">
          <el-input v-model="ruleForm.phone"></el-input>
        </el-form-item>
        <div class="form-bottom">
          <el-button type="primary" size="small" @click="onRegistry(ruleFormRef)">注册</el-button>
          <el-button type="success" size="small" @click="onLogin">去登录</el-button>
        </div>
      </el-form>
    </el-card>
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import router from '@/router'

interface RuleForm {
  username: string,
  password: string,
  phone: number
}
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
  username: '',
  password: '',
  phone: '',
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
  ],
  phone: [
    {
      required: true, message: '手机号不能为空'
    }
  ]
})

const onRegistry = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

const onLogin = () => {
  router.push('/login')
}

</script>

<style lang="scss" scoped>
.registry{
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
