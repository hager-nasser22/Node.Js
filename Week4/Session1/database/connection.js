import mysql2 from "mysql2";
const query = mysql2.createConnection({
    host:'localhost',
    user:'root',
    password:"",
    database:'route1'
});
export default query;