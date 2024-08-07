---
layout: home
hero:
  name: Quick Upload
  
  tagline: 一个让你轻松实现Android上传功能框架
  image:
    src: /brand.gif
  actions:
    - theme: brand
      text: 快速使用
      link: /start
features:
  - icon: ⚡
    title: 纯Kotlin编写
    details: 简洁、现代的编程语言。
  - icon: 🛠️
    title: 高效的协程
    details: 异步处理上传任务，保证界面流畅。
  - icon: ✊
    title: OkHttp封装
    details: 稳定可靠的HTTP请求处理。
    
---
<script setup>
import { onMounted } from 'vue';
import Swal from 'sweetalert2';
onMounted(() => {
// 选择所有 <span> 标签
  const spans = document.querySelectorAll('span');

  spans.forEach((span, index) => {
    // 检查 <span> 的文本内容
    if (span.textContent.includes('演示视频')) {
        // 设置点击事件
    span.addEventListener('click', function() {
      // 动态设置弹出框内容
      Swal.fire({
        imageUrl: './one.gif',
         width: 857,
        imageWidth: 857,
        imageHeight: 563,
        imageAlt: 'Dynamic GIF',
        showConfirmButton: false,
        showCloseButton: true
      });
    });
    }
  });
  // 选择导航链接
      const demoLink = document.querySelector('a[href="javascript:void(0)"]');

      if (demoLink) {
        demoLink.addEventListener('click', (event) => {
          event.preventDefault(); // 阻止默认行为
        
        });
      }
//  tippy('#my-menu-id',   { 
//         content: `<div class='text-center' style=' width:1224px; height:804px'><img src="./one.gif" alt="Example GIF"  /></div>`,
//          arrow: false,
//           allowHTML: true,
//           placement: 'left',
//           theme:'light-border',
//         });
})
 
</script>