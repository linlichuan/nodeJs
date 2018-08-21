const express = require('express')
const router = express.Router()

router.get("/:name",function(req,res){
	res.send("hallo" + "," + req.params.name)
})

module.exports = router