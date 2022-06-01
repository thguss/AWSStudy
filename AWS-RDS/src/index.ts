import express from "express";

import db from "./loaders/database";
import user from "./models/Users"

// mysql 자체에서 제공하는 node.js interface -> mysql
// orm -> 만들기 편함
// mysql -> query를 문자열 그대로 날림.
// sql injection에 취약

db.authenticate()
  .then(()=>{
    console.log("Connection has been established successfully.")
  })
  .catch((error)=>{
    console.error('Unable to connect to the database:', error);
  })

db.sync();
user.sync();

const app = express();

const PORT = 3000;
const OK = 200;

app.use(express.json());
app.use("/", require("./routes/index"));

// app.get("/", function(req, res) {
//     res.status(OK).send({ data : "hi!" }); 
// })

// app.post("/", function(req, res) {
//     const { data } = req.body;

//     res.status(OK).send( {data : `${data}를 입력받았습니다.`});
// }) 

app.listen(PORT, function(){
    console.log(`listening on ${PORT}`);
})

export default app;