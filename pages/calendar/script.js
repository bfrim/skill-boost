function submitFile() {
    const errorMessageLabel = document.getElementById("errorMessageLabel")
    const file = document.getElementById("fileInput").files[0]
    const reader = new FileReader()

    if (!file) {
        return
    }

    if (!file.name.endsWith(".skillboost")) {
        errorMessageLabel.textContent = "You must submit a .skillboost file"
        return
    }

    reader.readAsText(file)

    reader.onload = () => {
        const calendar = JSON.parse(reader.result)
        console.log(calendar.entries)
    }
}

function saveFileLocally(data, fileName, type) {
    let file = new Blob([data], {type})
    let a = document.createElement("a")
    let url = URL.createObjectURL(file)
    a.href = url
    a.download = fileName
    document.body.appendChild(a)
    a.click()
    setTimeout(() => {
        document.body.removeChild(a)
        URL.revokeObjectURL(url)
    }, 0)
}

function saveCalendar() {
    saveFileLocally("hello there", "hello.txt", "text/plain")
}