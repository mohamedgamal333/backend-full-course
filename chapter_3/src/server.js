import express from 'express';
// we use path module that help us to use file and directory paths,we use name import like  path,dirname from path module 
import path ,{ dirname} from 'path'  
// we use name import like  fileURLToPath from url module
import { fileURLToPath } from 'url';
import authRoutes from './routes/authRoutes.js';
import todoRoutes from './routes/todoRoutes.js';
import authMidddleware from './middleware/authMiddleware.js';
const app =express()
// using process.env.PORT to  read environment variable  port, porcess is used to know information about the current program(enviroment varialble)
const PORT = process.env.PORT || 5000;
// fileURLToPath converts the module URL into a filesystem path
// import.meta.url provides the URL of the current ES module
const __filename = fileURLToPath(import.meta.url)
// get the directory name from the file path    
const __dirname = dirname(__filename)
// Middleware 
app.use(express.json())
// serves the HTML file from the /public directory
// tells express to serve all file from the public folder as a static folder assets /file.
// any requests for any file inside /public  the css file will be resolve to be public directory.
// public directory is considered a static folder, and any file inside it allows to browser to request
// ** method path.join is used to build paths suitable with os 
app.use(express.static(path.join(__dirname,'../public')))


// this is endpoint serving up the HTML file from the / public directory 
app.get('/',(req,res)=>{
    
    res.sendFile(path.join(__dirname, '../public/index.html')); 

})

// Routes
// this meaning any request starting with /auth will be handled by authRoutes router(send to authRoutes),
//  and the routes defined in authRoutes will be prefixed with /auth
app.use('/auth',authRoutes)

// This meaning any request starting with /todos will be handled by todoRoutes router(send to todoRoutes),
// and the routes defined in todoRoutes will be prefixed with /todos
app.use('/todos',authMidddleware,todoRoutes)











app.listen(PORT,()=>{
    console.log(`Server has start on port:${PORT}`)
})

