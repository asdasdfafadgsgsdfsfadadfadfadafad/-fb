const express = require("express");
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(cors())
// const pg = require("pg").Pool
// const client = new pg({
//    user:"postgres",
//    password:"01203328888m",
//    host:"127.0.0.1",
//    port:5432,
//    database:"boat"
// })
// const { Pool } = require('pg')
// const pool = new Pool({
//     user:"postgres",
//     password:"01203328888m",
//     host:"127.0.0.1",
//     port:5432,
//     database:"boat",
//     max: 20,
//     idleTimeoutMillis: 0,
//     connectionTimeoutMillis: 0,
  
// })

// const data  = async () =>{
//     pool.connect()
//     .then(client => {
//       return client.query('SELECT * FROM users') 
//         .then(res => {
//           client.release()
//           console.log(res.rows[0]) // your callback here
//         })
//         .catch(e => {
//           client.release()
//           console.log(err.stack) // your callback here
//         })
//     })
// }
// data()






app.get("/",(req,resp)=>{
    resp.json("heroku works finally")
})
// app.listen(3000)























