#!/usr/bin/node

const mysql=require('mysql');

const con=mysql.createConnection({
  host:'localhost',
      user:;'root',
      password:'ddd',
      database:'test'
});

con.connet();

//operation database
const sql='select * from books where book_id=?';
/*查
con.query(sql,[100],function(err,result){
  if(err){
    console.err(err);
    process.exit(100);
  }
  console.log(result);
});
*/

const sql='insert into books(book_id,title,status) value(?,?,?)';
con.query(sql,[2,'Node.js',0],function(err,result){
  if(err){
    console.error(err);
    process.exit(100);
  }
  console.log(result);
});

/*
const sql='update books set title=?where book_id=?';
con.query(sql,['MySQL Programming',2],function(err,result){
  if(err){
    console.error(err);
    process.exit(100);
  }
  console.log(result);
})
*/

/*const  sql='delete from books where book_id=?';
con.query(sql,[2],function(err,result){
  if(err){
    console.error(err);
    process.exit(100);
  }
  console.log(result);
});*/

con.end();
