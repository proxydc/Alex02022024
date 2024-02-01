(()=>{var t={972:(t,e,s)=>{const o=new(0,s(900).Pool)({host:"localhost",port:5432,database:"postgres",user:"postgres",password:"Proxiad2024*!"});t.exports=o},679:(t,e,s)=>{const o=s(972),c=s(626);t.exports={getAuthentification:(t,e)=>{const{login_name:s,pass_word:n}=t.body;o.query(c.getAuthentification,[s,n],((t,s)=>{if(t)throw t;!s.rows.length&&e.send("Login failed"),e.status(200).send("Login success!")}))},getAccounts:(t,e)=>{o.query(c.getAccounts,((t,s)=>{if(t)throw t;e.status(200).json(s.rows)}))},getAccountById:(t,e)=>{const s=parseInt(t.params.id);o.query(c.getAccountById,[s],((t,s)=>{if(t)throw t;e.status(200).json(s.rows)}))},addAccount:(t,e)=>{const{login_name:s,diplay_name:n,pass_word:a}=t.body;o.query(c.checkLoginExists,[s],((t,u)=>{u.rows.length&&e.send("Login already exists."),o.query(c.addAccount,[s,n,a],((t,s)=>{if(t)throw t;e.status(201).send("Account created Successfully!")}))}))},deleteAccountById:(t,e)=>{const s=parseInt(t.params.id);o.query(c.getAccountById,[s],((t,n)=>{!n.rows.length&&e.send("Account does not exist in the database"),o.query(c.deleteAccountById,[s],((t,s)=>{if(t)throw t;e.status(200).send("Account deleted Successfully!")}))}))},updateAccount:(t,e)=>{const s=parseInt(t.params.id),{diplay_name:n,pass_word:a}=t.body;o.query(c.getAccountById,[s],((t,u)=>{!u.rows.length&&e.send("Account does not exist in the database"),o.query(c.updateAccount,[s,n,a],((t,s)=>{if(t)throw t;e.status(200).send("Account updated Successfully!")}))}))}}},626:t=>{t.exports={getAuthentification:"select a from account a where a.login_name = $1 and a.pass_word = $2",getAccounts:"select * from account",getAccountById:"select * from account where id = $1",checkLoginExists:"select a from account a where a.login_name = $1",addAccount:"insert into account(login_name, diplay_name, pass_word) values ($1, $2, $3)",updateAccount:"update account set diplay_name = $2, pass_word = $3 where id = $1",deleteAccountById:"delete from account where id = $1"}},650:(t,e,s)=>{const{Router:o}=s(860),c=s(679),n=o();n.post("/",c.getAuthentification),n.get("/",c.getAccounts),n.post("/",c.addAccount),n.get("/:id",c.getAccountById),n.put("/:id",c.updateAccount),n.delete("/:id",c.deleteAccountById),t.exports=n},860:t=>{"use strict";t.exports=require("express")},900:t=>{"use strict";t.exports=require("pg")}},e={};function s(o){var c=e[o];if(void 0!==c)return c.exports;var n=e[o]={exports:{}};return t[o](n,n.exports,s),n.exports}(()=>{const t=s(860),e=s(650),o=t();o.use(t.json()),o.get("/",((t,e)=>{e.send("Hello Proxiad Backend!")})),o.use("/api/v1/accounts",e),o.listen(3e3,(function(t){}))})()})();