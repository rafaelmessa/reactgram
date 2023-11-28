const express = require("express")
const router = express()



//teste
router.get("/", (req,res) => {
    res.send("API Funcionando");
});



module.exports = router

