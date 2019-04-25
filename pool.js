const mysql=require('mysql');
let pool=mysql.createPool({
  user:'root',
  password:'',
  database:'mfresh',
  port:3306,
  host:'127.0.0.1',
//	user:'m3jxn1nwy3',
//  password:'kih3h3mmzxh2yzkkllhjm4jh0zmky53iljilz5wy',
//  database:'app_mfresh',
//  port:3306,
//  host:'w.rdc.sae.sina.com.cn',
  connectionLimit:10
});
module.exports=pool;