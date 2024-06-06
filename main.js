const path = require("path")
const fs = require("node:fs")

// let mypath="C:\\Users\\HP\\OneDrive\\Documents\\BACKEND_DEV\\ClutterClear"

fs.readdir(__dirname, (err, files) => {
    if (err) throw err

    files.forEach((file) => {
        let ext_name = path.extname(file)

        if (ext_name.charAt(0) == '.' && ext_name != ".js" && ext_name != ".json") {

            let clutter_newpath = path.join(__dirname, `\\${ext_name.slice(1)}`)

            let oldpath = path.join(__dirname, file)
            let newpath = path.join(clutter_newpath, file)

            if (fs.existsSync(clutter_newpath) == false) {
                fs.mkdirSync(ext_name.slice(1))
            }
            fs.copyFileSync(oldpath, newpath)
            fs.unlinkSync(oldpath)
        }
    })
})

console.log("Clutter Cleared Successfully.......")