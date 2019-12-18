# simple-storage-sample

chrome.storageのAPIを使ってデータの保存/参照/削除を行うシンプルなサンプル  
のつもりだったが、callbackやasync/awaitなどのJavascript特有の仕様を知らないとあまりシンプルに思えないかもしれない。  
主にオプション画面でアドオンの設定を保存させておきたいときに使用する。

※manifest.jsonに以下を記述する必要があるので注意  

```json
"permissions": [
    "storage"
]
```

- ポップアップ内のテキストエリアにテキストを入力し、Saveボタンクリックでテキストを保存
- アドオンのポップアップを開き直すと前回保存したテキストが入力された状態で開かれる
- ClearボタンをクリックするとLocalStorageのデータを削除