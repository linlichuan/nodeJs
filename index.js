const path = require('path')
const express = require('express')
const app = express()
const loginRouter = require("./router/login")

app.set("views",path.join("./","views"))
app.set("view engine","ejs")

app.get("/",function(req,res){
	res.redirect("/linlichuan/login")
})

app.get("/:program",function(req,res){
	if(req.params.program != "linlichuan"){
		res.redirect("/linlichuan/login")
	}
})

app.get("/linlichuan/login",function(req,res){
	res.render("login/login",{
		
	})
})

app.use("/user",loginRouter)

app.listen(3000)