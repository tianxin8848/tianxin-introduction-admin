卡片的底怎么不是白色的？
我需要查看 WorkbenchHeader 组件的实现，了解它的卡片样式是如何定义的。
        
            
toolName: search_codebase
            
status: success
          
query: WorkbenchHeader 组件的实现，特别是卡片样式的定义
          
我需要查看 card-box 类的定义，了解它的样式设置，以及 Card 组件的实现，来找出为什么背景颜色不同。
        
            
toolName: view_files
            
status: success
          
            
filePath: /Users/gohu/Documents/GitHub/Txian-admin/packages/@core/base/design/src/css/global.css
          
我需要查看用户自己写的卡片组件，了解它们的样式定义，找出为什么背景颜色不同。
        
            
toolName: view_files
            
status: success
          
            
filePath: /Users/gohu/Documents/GitHub/Txian-admin/apps/web-ele/src/views/profile/info/infoCom/BirthdayCard.vue
          
我需要查看用户的其他卡片组件，了解它们的样式定义，找出为什么背景颜色不同。
        
            
toolName: view_files
            
status: success
          
            
filePath: /Users/gohu/Documents/GitHub/Txian-admin/apps/web-ele/src/views/profile/info/infoCom/ContactCard.vue
          
我已经找到了问题所在：

1. **卡片样式的差异**：
   - 框架内置组件（如 WorkbenchHeader）使用了 `card-box` 类，它定义为 `bg-card text-card-foreground border-border rounded-xl border`
   - 您自己写的卡片直接使用了 `bg-white` 类

2. **颜色定义**：
   - 在 `global.css` 中，`card-box` 类使用 `bg-card` 作为背景色
   - 在 `default.css` 中，`--card` 变量定义为 `0 0% 100%`，这实际上就是白色
   - 但在不同主题或模式下，`--card` 变量的值可能会被改变，导致背景颜色不同

3. **解决方案**：
   - 将您自己写的卡片组件中的 `bg-white` 改为 `bg-card`，这样可以保持与框架组件的一致性
   - 或者直接使用 `card-box` 类，这样可以获得完整的卡片样式

例如，您可以将 BirthdayCard.vue 修改为：
```vue
<template>
  <div class="card-box p-6 mb-6">
    <h2 class="text-lg font-semibold mb-4">个人出生年月日</h2>
    <div class="text-gray-700">
      <p>出生日期：1998年1月13日</p>
    </div>
  </div>
</template>
```

这样，您的卡片背景颜色就会与框架内置组件保持一致了。
