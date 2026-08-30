const express = require('express');
const app = express();
const PORT = 8383;
let data = ['Ahmed']

// middleware
app.use(express.json())

//Type 1 - website endpoints (these endpoints are for sending back html and they typically 
// come when a user enters a url in a browser.)

// CRUD method  -create (POST) - read (GET) - update (PUt) - delete (DELETE)

app.get('/',(req,res)=>{
    console.log ('ya i hit endpoint, ',req.method)
    res.send(`<body style="background-color:pink;
        color:blue";
        ">
        <h1>Data: </h1>
        <p>${JSON.stringify(data)}</p>
        <a href="/dashboard">Dashboard</a>
        
        </body>`)
})


app.get('/dashboard',(req,res)=>{
    console.log ('ya i hid /dashboard endpoint, ')
    res.send(`<body>
        
        <h1>Dashboard page</h1>
        <a href="/">Home</a>
        
        </body>`)
})



//Type 2 - API endpoints (non visual)

app.get('/api/data',(req,res)=>{
    console.log("this api endpoint")
    res.send(data)
})


app.post('/api/data',(req,res)=>{
    const newEntry=req.body
    res.sendStatus(201)
    console.log(newEntry)
    data.push(newEntry.name)

})

app.delete('/api/data',(req,res)=>{

    data.pop()
    console.log("we delete the element off the end of array")
    res.sendStatus(203)
})



app.listen(PORT,(req,res)=>{console.log(`This server has started on port:${PORT}`)})
















































// const express = require('express')
// const app = express()
// const PORT = 8383
//   let data =['mohamed']


// // middleware
// app.use(express.json())



// app.get('/',(req,res)=>{
//     console.log("User requested the home page website")
//     res.send(`
//         <body style="background-color:pink;color:blue;">
//         <h1>Data</h1>


//         <p>${JSON.stringify(data)}</p>

//         <a href="/dashboard">Dashboard</a>

//         </body>
//         <script>console.log('This is my script')</script>
//        `)
// })

// app.get('/dashboard',(req,res)=>{
//     res.send(`
        
        
//         <h1>Dashboard Page</h1>
//         <a href="/">Home</a>
        
//         `)
// })

// app.get('/api/data',(req,res)=>{
//     res.status(599).send(data)
// })



// app.post('/api/data',(req,res)=>{
//       // someone wants to create a user  (for example when they click on sign up button )
//       // the user clicks the sign up button after entering their credentials, and their browser is wired up to send  out a new network request to the server to 
//       // handle that action 
//     const newEntry=req.body
//     console.log(newEntry)
//     data.push(newEntry.name)
//     res.sendStatus(201)
// })

// app.delete('/api/data/',(req,res)=>{
//     data.pop()
//     console.log('we deleted the element off the end of the array')
//     res.sendStatus(203)


// })




// app.listen(PORT,(req,res)=>{
//     console.log(`This server has started on port:${PORT}`)
// })

