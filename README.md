# Appiness Nodejs task


Used below things
<pre>
Javascript
Express
babel - to compile down to vanilla javascript from es6
body-parser - to parse the incoming request
mongodb
mongosee - ODM  
Docker

</pre>

### Api End-points :
<pre>
- ` /api/register `  : POST : To register a user.
- ` /api/reset ` : POST : To Reset database (FOR TEST).
</pre>

### Ex. Register
Input : 
<pre>
- username
- email
- password
</pre>
Output : (For 1st user)

```json
{
    "status": "SUCCESS",
    "message": "prasanna is register as ROLE_ADMIN"
}
```
Output : (For subsequent user with different email)
```json
{
    "status": "SUCCESS",
    "message": "prasanna is register as ROLE_USER"
}
```
Output : (For same email)
```json
{
    "status": "FAILURE",
    "message": "prasanna1@gmail.com is already taken"
}
```


---

