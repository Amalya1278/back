const express=require('express')
const app=express()
const PORT=3000
const users=[]
const orders=[]
const products=[]
const validEmail=(email)=>{users.find((user)=>user.email==email)}


app.use(express.json())
app.post('/users/register',(req,res)=>{
    const {username,email,password,is_admin=false}=req.body
    if(username.length<3){
       return res.send("username should be valid")
    }
    if(password.length<6){
         return res.send("password should be valid")
    }
    if(validEmail(email)){
        return res.send("email already exists")
    }
    const user={id:Date.now(), username,email,password,is_admin}
    users.push(user)
    
})

app.post('/users/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find((user) => user.username === username);
      if (user && user.password === password) {
     return res.send("login");
    } else {
     return res.send("something gone wrong with username or password");
    }
  });

app.post('/products',(req,res)=>{
    const {name,description,price,category,image_url,is_active=true}=req.body
    if(name.length<1){
        return res.send("name is invalid")
    }
    if(price<=0){
        return res.send("the price must be valid")
    }
    const product={id:Date.now(),name,description,price,category,image_url,is_active}
    products.push(product)
    res.send(product)
})
app.get('/products',(req,res)=>{
    
    res.send(products)
})

app.post('/orders',(req,res)=>{
    const {user_id,products,total_price,status='PENDING'}=req.body
    if(total_price<0){
       return res.send("price must be valid")
    }
    if(products.length==0){
        return res.send("something gone wrong")
    }
    const order={user_id,products,total_price,status}
    orders.push(order)
    res.send(order)
})
app.get('/orders',(req,res)=>{
    res.send(orders)
})
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})