<template>
  <div style="width: 210mm; min-height: 297mm; margin: 0 auto; padding: 20mm; background-color: #ffffff; border: 1px solid #ddd; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
    <h1 style="text-align: center; margin-bottom: 20px; font-size: 24px;">个人信息展示</h1>
    
    <div style="padding: 10mm;">
      <!-- 基本信息 -->
      <h2 style="margin-bottom: 15px; border-bottom: 1px solid #ddd; padding-bottom: 10px; font-size: 18px;">基本信息</h2>
      <el-form :model="form" label-width="120px" style="margin-bottom: 20px; border: 1px solid #ddd; border-radius: 4px;">
        <el-row :gutter="0">
          <el-col :span="12" v-for="(item, index) in basicInfo" :key="index" style="border-bottom: 1px solid #eee; border-right: 1px solid #eee; padding: 10px 0;">
            <el-form-item :label="item.label" style="margin: 0;">
              <span>{{ item.value }}</span>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      
      <!-- 工作技能 -->
      <h2 style="margin-bottom: 15px; border-bottom: 1px solid #ddd; padding-bottom: 10px; font-size: 18px;">工作技能</h2>
      <el-form :model="form" label-width="120px" style="margin-bottom: 20px; border: 1px solid #ddd; border-radius: 4px;">
        <el-row :gutter="0">
          <el-col :span="24" v-for="(item, index) in skillsInfo" :key="index" style="border-bottom: 1px solid #eee; padding: 10px 0;">
            <el-form-item :label="item.label" style="margin: 0;">
              <span>{{ item.value }}</span>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      
      <!-- 教育经历 -->
      <h2 style="margin-bottom: 15px; border-bottom: 1px solid #ddd; padding-bottom: 10px; font-size: 18px;">教育经历</h2>
      <el-table :data="educationInfo" style="width: 100%; margin-bottom: 20px;">
        <el-table-column prop="school" label="教育机构" width="200"></el-table-column>
        <el-table-column prop="period" label="时间"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
      </el-table>
      
      <!-- 兴趣爱好 -->
      <h2 style="margin-bottom: 15px; border-bottom: 1px solid #ddd; padding-bottom: 10px; font-size: 18px;">兴趣/爱好</h2>
      <el-form :model="form" label-width="120px" style="border: 1px solid #ddd; border-radius: 4px;">
        <el-row :gutter="0">
          <el-col :span="24" v-for="(item, index) in hobbiesInfo" :key="index" style="border-bottom: 1px solid #eee; padding: 10px 0;">
            <el-form-item :label="item.label" style="margin: 0;">
              <span>{{ item.value }}</span>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'

// 导入 Element Plus 组件
import { ElForm, ElFormItem, ElRow, ElCol, ElTable, ElTableColumn } from 'element-plus';

// 导入样式
import 'element-plus/es/components/form/style/css';
import 'element-plus/es/components/row/style/css';
import 'element-plus/es/components/col/style/css';
import 'element-plus/es/components/table/style/css';

// 表单模型
const form = ref({})

// 基本信息数据
const basicInfo = ref([
  { label: '姓名', value: '田欣' },
  { label: '性别', value: '女' },
  { label: '民族', value: '土家族' },
  { label: '出生日期', value: '1998-01-13' },
  { label: '婚姻状况', value: '未婚' },
  { label: '籍贯', value: '湖南省' },
  { label: '学历', value: '本科' },
  { label: '联系方式', value: '18574319130' },
  { label: '应聘职位', value: 'AI agent 需求开发工程师' },
  { label: '专业', value: '计算机科学与技术' },
  { label: '毕业院校', value: '上海应用技术大学' },
  { label: '现居住地', value: '深圳' }
])

// 工作技能数据
const skillsInfo = ref([
  { label: '技能', value: '快速用AI赋能传统行业' }
])

// 教育经历数据
const educationInfo = ref([
  { 
    school: '上海第二工业大学', 
    period: '2018年9月 - 2021年12月', 
    address: '上海市浦东新区金海路2360号' 
  },
  { 
    school: '上海应用技术大学', 
    period: '2023年3月 - 2025年7月', 
    address: '上海市徐汇区漕宝路120号' 
  }
])

// 兴趣爱好数据
const hobbiesInfo = ref([
  { label: '爱好', value: '运动' }
])
</script>
