---
title: "[react native] React Native 將專案打包成 apk 檔"
keywords: [react native]
---

# 說明

今天主要是來介紹如何將 React Native 的專案輸出成 apk 檔，因為 expo 輸出的 apk 檔較大，一個沒有任何功能的專案用 expo 輸出也要 60 幾 MB，而利用原本的 React Native 輸出成 apk 後，只有 20~30MB 左右。

## **前置**

要使用 React Native 來打包專案的話，**Java** 的版本要是 **11** 以上，並且需安裝 **Android Studio** ，因為我們會需要 **Android Studio** 的 **adb** 指令工具。

Java 安裝完的預設位置會在：

```javascript
C:\\Program Files\\Java\\jdk-18.0.1.1\\bin
```

Android Studio 的 adb 工具預設會在：

```javascript
C:\\Users\\User\\AppData\\Local\\Android\\Sdk\\platform-tools
```

確定以上的前置工具都安裝成功後，我們還需要將以上路徑貼到環境變數，這樣才能在作業系統的任何地方使用它們的功能。

如果你是 win10 的話，在左下角的搜尋打上 **環境變數** ，

![](https://cdn-images-1.medium.com/max/800/1*Kc53EiB-mpKtZM7h03yDvQ.png)

點擊 **編輯系統環境變數** ，會出現以下畫面：

![](https://cdn-images-1.medium.com/max/800/1*shHKyla6AZDt0vYyQpqc-Q.png)

點擊 **環境變數** ，在系統變數中找到 **Path** 並點擊 **編輯**：

![](https://cdn-images-1.medium.com/max/800/1*XJTLu8e3qC4OYs4umAgvUw.png)

之後將 **Java** 和 **Android Studio Platform Tools** 的目錄新增到 Path：

![](https://cdn-images-1.medium.com/max/800/1*xeJJiKewVU358t0sM-ljgQ.png)

新增成功後按下確定，之後打開我們的終端機輸入幾條指令來測試看看：

```javascript
java - version;
```

![](https://cdn-images-1.medium.com/max/800/1*AaTpSlcYalSTX1bx4D10RA.png)

```javascript
adb;
```

![](https://cdn-images-1.medium.com/max/800/1*Ik9x2VBW_RkRR24oSg9_Rg.png)

要是都有出現以上的資訊代表安裝成功了。

## **初始化與編譯打包專案**

先在隨便一個目錄下執行以下指令來將 Native 專案初始化：

```javascript
npx react-native init testBuildApk <-- 填你自己的專案名稱
```

之後切換到該目錄並打開你的編譯器，我是用 VSCode，所以可以使用 code 指令來開啟目錄。

```javascript
cd testBuildApk
code .
```

接著輸入以下指令，來讓 React Native 編譯並打包你的專案，記得執行時要打開手機模擬器，成功的話模擬器就會安裝該 app 了。

```javascript
npx react-native run-android
```

而如果編譯失敗的話，查看一下是否是 SDK 的問題

![](https://cdn-images-1.medium.com/max/800/1*fWBPTL4iqpJgASIOLZVnEA.png)

如果有上面圖片中的問題，我們需要在專案的 **android** 資料夾底下新增一個檔案，名為 **local.properties** ，之後該檔案利用 **sdk.dir** 來定義 SDK 的位置，作者的 SDK 檔案位置為以下：

```javascript
sdk.dir=C:\\Users\\User\\AppData\\Local\\Android\\Sdk
```

定義完後再執行一次編譯指令即可。

## **Keytool**

接著我們要使用 keytool 指令來產生簽章：

```
keytool -genkeypair -v -storetype PKCS12 -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
```

輸入 keystore 密碼並且回答完一系列問題後，你的專案目錄會產生一份金鑰檔案，名為**my-upload-key.keystore。**

之後將該金鑰檔案移置 **android/app** 目錄底下，如下圖所示：

![](https://cdn-images-1.medium.com/max/800/1*clYpa4LkbPqE4_RXeogdGQ.png)

打開 **android** 資料夾底下的 **gradle.properties** 檔案，將以下指令貼到檔案的最底下：

```javascript
MYAPP\_UPLOAD\_STORE\_FILE=my-upload-key.keystore

MYAPP\_UPLOAD\_KEY\_ALIAS=my-key-alias

MYAPP\_UPLOAD\_STORE\_PASSWORD=***** <-- 你剛剛建立keystore的密碼

MYAPP\_UPLOAD\_KEY\_PASSWORD=***** <-- 你剛剛建立keystore的密碼
```

再來到 **android/app** 資料夾底下，打開 **build.gradle** 檔案，在該檔案底下搜尋 **buildTypes** ，並把以下指令貼上，覆蓋掉原本的 **buildTypes**：

```javascript
signingConfigs {
    release {
        if (project.hasProperty('MYAPP_UPLOAD_STORE_FILE')) {
            storeFile file(MYAPP_UPLOAD_STORE_FILE)
            storePassword MYAPP_UPLOAD_STORE_PASSWORD
            keyAlias MYAPP_UPLOAD_KEY_ALIAS
            keyPassword MYAPP_UPLOAD_KEY_PASSWORD
        }
    }

buildTypes {
    debug {
        signingConfig signingConfigs.debug
    }
    release {
        signingConfig signingConfigs.debug
        minifyEnabled enableProguardInReleaseBuilds
        proguardFiles getDefaultProguardFile("proguard-android.txt"), "proguard-rules.pro"
    }
}
```

### **將專案打包成 apk**

最後回到我們的終端機，先切換到 android 目錄底下：

```javascript
cd android
```

並執行以下指令，就會將你的專案打包成 apk 檔案了：

```javascript
gradlew assembleRelease
```

打包後的 apk 檔案預設會在：

```javascript
你的專案名稱\android\app\build\outputs\apk
```

## **給自己的補充**

如果有用到 **react-native-vector-icons package**，需要在 **android/app** 資料夾底下的 **build.gradle** 檔案 apply 以下指令：

```javascript
apply from: "../../node\_modules/react-native-vector-icons/fonts.gradle"
```
