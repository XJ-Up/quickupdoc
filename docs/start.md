## 1.  快速开始
### 依赖配置
- 添加仓库

```groovy
// build.gradle(Project:)
allprojects {
    repositories {
        maven { url 'https://jitpack.io' }
    }
}
```

- 添加依赖

```groovy
// build.gradle(Module:)
dependencies {
    implementation 'com.github.XJ-Up:quickupload:1.1.0'
}
```
## 2.详细使用说明

### 第一步 Application进行初始化配置
```kotlin
//defaultNotificationChannel用于后台服务需自行createNotificationChannel详情见demo(startForegroundService)
//debug 用于是否打印日志
 UploadConfiguration.initialize(
            context = this,
            defaultNotificationChannel = notificationChannelID,
            debug = BuildConfig.DEBUG
        )
```
### 第二步 创建并启动上传任务（可分开）
#### 构建数据类并继承 UploadObserverBase() ，其中fileName、filePath均为自定义内容
```kotlin
data class FileItem(
    val fileName: String,
    val filePath: String,
) : UploadObserverBase()
```
#### 创建数据类对象 赋值uploadId 添加至观察者
```kotlin
fileItem = FileItem(name(Uri.parse(path)), path)
fileItem?.uploadId = path //根据你的具体情况选择合适的值作为 uploadId
//添加至观察者
UploadService.observers.add(fileItem)
```
### 创建 QuickUploadRequest 并赋值给数据类
```kotlin
 --单文件上传
val request = QuickUploadRequest(this, serverUrl = "你的上传地址")
    .setMethod("POST")
    .addFileToUpload(
        filePath = fileItem!!.filePath,
        parameterName = "files"
    )
    .setResumedFileStart(0)//如果需要断点续传调用此方法，默认情况下不需要调用
fileItem.quickUploadRequest = request

 --多个单文件上传
fileList.forEachIndexed { index, s ->
    val request =
        QuickUploadRequest(this, serverUrl = "你的上传地址")
            .setMethod("POST")
            .addFileToUpload(
                filePath = s.filePath,
                parameterName = "files"
            )
    s.quickUploadRequest = request
}

 --多文件同时上传
val  request=QuickUploadRequest(this, serverUrl = "你的上传地址")
    .setMethod("POST")
    .apply {
        it.filePath .forEachIndexed { index, s ->
            addFileToUpload(
                filePath = s,
                parameterName = "files"
            )
        }
    }
filesItem.quickUploadRequest=request

```
#### 开始或停止上传
```kotlin
fileItem.startUpload()
fileItem.stopUpload()
```
#### 断点续传 
```kotlin
   //如果需要断点续传调用此方法，默认情况下不需要调用（注意：0或不传效果都是重新上传，此方法必须在startUpload之前调用）
   //参数传入上次断点位置（一般这个位置通过后台服务器获取）
   quickUploadRequest.setResumedFileStart(0)
                  
```
### 第三步 监听上传获取上传详情
```kotlin
   fileItem.refresh { uploadStatus, uploadInfo, throwable, serverResponse ->
    when (uploadStatus) {
        UploadStatus.DEFAULT -> {
            //默认初始化状态
        }
        UploadStatus.Wait -> {
            //加入上传队列，但不一定开始上传时
        }
        UploadStatus.InProgress -> {
            //上传中进度
        }
        UploadStatus.Success -> {
            //上传成功时
        }
        UploadStatus.Error -> {
            //出现异常时
        }
        UploadStatus.Completed -> {
            //上传完成时调用 ，注意：成功或错误都会触发
        }
        else -> {}
    }

}
```
### 自定义日志
 ```kotlin
      	    Logger.setDelegate(object : Logger.Ext{
            override fun debug(component: String, uploadId: String, message: String) {
               
            }

            override fun error(
                component: String,
                uploadId: String,
                message: String,
                exception: Throwable?
            ) {
               
            }

            override fun info(component: String, uploadId: String, message: String) {
               
            }

        })
 ```
###  配置或管理 API

```kotlin
        quickUploadRequest.addArrayParameter()//将具有多个值的参数添加到此上传请求中
        quickUploadRequest.addHeader()//向此上传请求添加标头
        quickUploadRequest.addParameter()//为该上传请求添加一个参数
        quickUploadRequest.setMethod()//设置要使用的HTTP方法
        quickUploadRequest.setMaxRetries()//设置发生错误时库将尝试的最大重试次数
        quickUploadRequest.setAutoDeleteFilesAfterSuccessfulUpload()//设置上传成功后自动删除文件
        quickUploadRequest.setUploadID()//设置上传id



        UploadConfiguration.dispatcher= //设置自定义调度器
        UploadConfiguration.maxConcurrentTasks=//设置最大并发任务数
        UploadConfiguration.retryPolicy=//设置上传服务重试策略 
        UploadConfiguration.defaultNotificationChannel=//设置通知通道
        
```
### 具体使用可参考demo  

**GitHub项目地址**: [点我](https://github.com/XJ-Up/quickupload)

## 3.常见问题解答
- 如何处理上传失败？
**当上传失败时 refresh 中的 UploadStatus.Error ->会触发，通过exception参数获取异常信息 ，常见的异常：
UserCancelledUploadException 用户已取消上传的异常 
UploadError 上传过程错误的异常 
NoNetworkException 网络连接断开的异常。它们都继承Throwable。通过判断异常决定后续处理 **
- 如何取消上传任务？
```kotlin
UploadService.taskList//获取当前所有活跃的上传任务
UploadService.stopAllUploads()//停止所有活动的上传任务。onError触发。
UploadService.stopUpload(uploadId)//停止特定上传任务
UploadService.stop(context)//如果当前没有正在运行的任务，则停止 UploadService
UploadService.stop(context, forceStop = true) //强制停止 UploadService 中止任何当前正在运行的任务
```
- 如何获取上传进度？
**当上传开始时 refresh 中的 UploadStatus.InProgress ->会触发，通过 uploadInfo.progressPercent获取 **

## 4.结语
**希望这个框架能帮助你简化上传任务，提高开发效率。如果你有任何问题或建议，欢迎在GitHub[点我](https://github.com/XJ-Up/quickupload)上提出Issue或提交Pull Request。让我们一起打造更好的开源项目！ **



