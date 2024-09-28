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