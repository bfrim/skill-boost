function submitFile() {
    const fileLabel = document.getElementById("fileLabel")
    const file = document.getElementById("fileInput").files[0]
    const reader = new FileReader()

    if (!file) {
        return
    }

    if (!file.name.endsWith(".skillboost")) {
        fileLabel.textContent = "You must submit a .skillboost file"
        return
    }

    reader.readAsText(file)

    reader.onload = () => {
        const calendar = JSON.parse(reader.result)
        console.log(calendar.entries)
    }
}