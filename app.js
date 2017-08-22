var express = require("express")
var multer = require("multer")
var storage = multer.memoryStorage()
var upload = multer({storage: storage})

var app = express()

app.set('port', (process.env.PORT || 5000))

app.post('/upload', upload.single('userFile'), function (req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
  var file = req.file
  res.jsonp({
    filename: file.originalname,
    size: file.size
  })
})


app.use(express.static(__dirname + "/public"))

app.listen(app.get("port"), function() {
  console.log("Node app is running at http://localhost:" + app.get('port'))
})
