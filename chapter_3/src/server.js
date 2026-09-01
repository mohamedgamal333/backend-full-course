import express from 'express';
// we use path module that help us to use file and directory paths,we use name import like  path,dirname from path module 
import path ,{ dirname} from 'path'  
// we use name import like  fileURLToPath from url module
import { fileURLToPath } from 'url';

const app =express()
// using process.env.PORT to  read environment variable  port, porcess is used to know information about the current program(enviroment varialble)
const PORT = process.env.PORT || 5000;
// fileURLToPath converts the module URL into a filesystem path
// import.meta.url provides the URL of the current ES module
const __filename = fileURLToPath(import.meta.url)
// get the directory name from the file path    
const __dirname = dirname(__filename)
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

app.listen(PORT,()=>{
    console.log(`Server has start on port:${PORT}`)
})


// this is another method with different code and clean code in our course the mentor use the above method,
//  i always search for different and easy ways that use low and clean code.
// import express from 'express';
// import path from 'path';

// const app = express();

// const PORT = process.env.PORT || 5000;

// const __dirname = import.meta.dirname;

// app.use(express.static(path.join(__dirname, '../public')));

// app.listen(PORT, () => {
//     console.log(`Server has started on port: ${PORT}`);
// });  
app.use(express.static(path.join(__dirname,'../public')))
app.get('/',(req,res)=>{
    res.sendFile()
})