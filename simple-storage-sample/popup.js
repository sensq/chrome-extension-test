const setLocalStorage = (key, value) => {
    // key-valueのkey名を変数にしたい場合は[]でkey名を括る
    chrome.storage.local.set(
        {
            [key]: value
        }
    );
}

// Storageの参照処理は非同期で行われるため、PromiseでWrapしておかないと正常に取得できない
// 呼び出す際にはasync/awaitを使う
const getLocalStorage = (key) => {
    return new Promise(resolve => {
        chrome.storage.local.get(key, value => {
            resolve(value[key])
        });
    })
}

const deleteLocalStorage = () => {
    chrome.storage.local.clear()
}


window.onload = async () => {
    let value = await getLocalStorage("storage_memo")
    document.getElementById("memo").value = value || ""
}

document.getElementById("save-button").onclick = async () => {
    let str = document.getElementById("memo").value
    setLocalStorage("storage_memo", str)

    document.getElementById("result").innerHTML = "<font color=red>Saved!!</font>"
    await new Promise(resolve => setTimeout(resolve, 1000));
    document.getElementById("result").innerHTML = ""
};

document.getElementById("clear-button").onclick = async () => {
    deleteLocalStorage()

    document.getElementById("memo").value = ""
    document.getElementById("result").innerHTML = "<font color=blue>Cleared!!</font>"
    await new Promise(resolve => setTimeout(resolve, 1000));
    document.getElementById("result").innerHTML = ""
};
