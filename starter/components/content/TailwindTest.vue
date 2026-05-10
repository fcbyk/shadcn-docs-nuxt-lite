<template>
  <div class="p-8 max-w-4xl">
    <!-- Hello Tailwind 标题 -->
    <h1 class="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
      Hello Tailwind CSS! 🎉
    </h1>

    <!-- 卡片展示 -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <!-- 卡片 1 -->
      <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
        <h2 class="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400">✨ 基础样式</h2>
        <p class="text-gray-700 dark:text-gray-300 mb-4">
          Tailwind CSS 让样式编写变得超级简单！
        </p>
        <button class="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors duration-200">
          点击我
        </button>
      </div>

      <!-- 卡片 2 -->
      <div class="p-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg shadow-lg text-white">
        <h2 class="text-xl font-semibold mb-3">🎨 渐变效果</h2>
        <p class="mb-4 opacity-90">
          支持漂亮的渐变背景和现代设计
        </p>
        <div class="flex gap-2 flex-wrap">
          <span class="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">标签 1</span>
          <span class="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">标签 2</span>
          <span class="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">标签 3</span>
        </div>
      </div>
    </div>

    <!-- 按钮展示 -->
    <div class="mb-8">
      <h2 class="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">🔘 按钮样式</h2>
      <div class="flex flex-wrap gap-4">
        <button class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5">
          主要按钮
        </button>
        <button class="px-6 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-medium rounded-lg transition-colors duration-200">
          次要按钮
        </button>
        <button class="px-6 py-3 border-2 border-purple-500 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 font-medium rounded-lg transition-all duration-200">
          边框按钮
        </button>
        <button class="px-6 py-3 bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
          渐变按钮
        </button>
      </div>
    </div>

    <!-- 徽章展示 -->
    <div class="mb-8">
      <h2 class="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">🏷️ 状态徽章</h2>
      <div class="flex flex-wrap gap-3">
        <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium rounded-full">
          信息
        </span>
        <span class="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-sm font-medium rounded-full">
          成功
        </span>
        <span class="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 text-sm font-medium rounded-full">
          警告
        </span>
        <span class="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 text-sm font-medium rounded-full">
          错误
        </span>
      </div>
    </div>

    <!-- 动画展示 -->
    <div class="mb-8">
      <h2 class="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">🎬 悬停动画</h2>
      <div class="flex gap-4 flex-wrap">
        <div class="w-20 h-20 bg-blue-500 rounded-lg cursor-pointer transition-all duration-300 hover:scale-110 hover:rotate-12 shadow-md hover:shadow-xl flex items-center justify-center text-white font-bold">
          缩放
        </div>
        <div class="w-20 h-20 bg-green-500 rounded-full cursor-pointer transition-all duration-300 hover:scale-125 shadow-md hover:shadow-xl flex items-center justify-center text-white font-bold">
          圆形
        </div>
        <div class="w-20 h-20 bg-purple-500 rounded-lg cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex items-center justify-center text-white font-bold">
          上移
        </div>
      </div>
    </div>

    <!-- 响应式提示 -->
    <div class="p-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
      <h2 class="text-2xl font-bold mb-3">📱 响应式设计</h2>
      <p class="mb-4">
        调整浏览器窗口大小，查看响应式布局效果！
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div class="p-4 bg-white/10 backdrop-blur-sm rounded-md">
          <strong>移动端</strong><br>
          <span class="text-sm opacity-90">单列布局</span>
        </div>
        <div class="p-4 bg-white/10 backdrop-blur-sm rounded-md hidden sm:block">
          <strong>平板端</strong><br>
          <span class="text-sm opacity-90">两列布局</span>
        </div>
        <div class="p-4 bg-white/10 backdrop-blur-sm rounded-md hidden lg:block">
          <strong>桌面端</strong><br>
          <span class="text-sm opacity-90">三列布局</span>
        </div>
      </div>
    </div>

    <!-- 底部提示 -->
    <div class="mt-8 p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900">
      <p class="text-center text-gray-700 dark:text-gray-300">
        ✅ 如果看到以上内容正常显示，说明 Tailwind CSS 已经生效！
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
// 这是一个简单的 Tailwind CSS 测试组件
</script>

<style scoped>
/* 如果需要额外的自定义样式，可以在这里添加 */
</style>
