var div = document.createElement('div')
div.textContent = Date()
div.style.backgroundColor = "#ff0"
div.style.position = "fixed"
div.style.bottom = "10px"
div.style.right = "10px"
div.style.zIndex = 100000
document.body.insertBefore(div, document.body.firstChild)
