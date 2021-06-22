import express from "express"
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static("public"))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.set('view engine','ejs')

app.get('/links', (req, res) => {
   return res.render('links/index')
})

app.listen(PORT, () => console.log(`${PORT} ONLINE`))