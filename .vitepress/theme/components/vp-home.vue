<script lang="ts" setup>
  // code……
</script>

<template>
  <f-main>
    <f-text align="center" bold block :size="25"> 一个让你轻松完成上传任务的工具 </f-text>

    <f-text align="center" style="margin-top: 20px">
      <f-button round type="primary" class="start" href="/docs/hello.html">
        😊 快速开始
      </f-button>
      <f-button
        round
        href="https://github.com/XJ-Up/quickupload"
        target="_blank"
        style="margin-left: 20px"
      >
        Github
      </f-button>
    </f-text>

    <f-divider margin="40px" color="#eef" />

    <f-text bold block>欢迎使用</f-text>
    <f-text block>⚡ 欢迎使用 quickupload</f-text>
  </f-main>
</template>

<style scoped>
  .f-main {
    max-width: 620px;
    margin: 40px auto;
    box-sizing: border-box;
    padding: 40px;
    padding-bottom: 0;
  }

  .f-button-default {
    margin-left: 10px;
  }

  .f-text {
    display: block;
    line-height: 40px;
  }
</style>
