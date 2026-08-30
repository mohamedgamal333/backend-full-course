import express from 'express';
import path ,{ dirname} from 'path'  
import { fileURLToPath } from 'url';

const app =express()
const PORT = process.env.PORT || 5000;

// get a file path form the URL of the current module
const __filename = fileURLToPath(import.meta.url)
// get the directory name from the file path    
const __dirname = dirname(__filename)
// serves the HTML file from the /public directory
// tells express to serve all file from the public folder as a static folder assets /file.
// any requests for the css file will be resolve to be public directory.
app.use(express.static(path.join(__dirname,'../public')))


// this is endpoint serving up the HTML file from the / public directory 
app.get('/',(req,res)=>{

    res.sendFile(path.join(__dirname,'public', 'index.html')); 
})

app.listen(PORT,()=>{
    console.log(`Server has start on port:${PORT}`)
})



// import express from 'express';
// import path from 'path';

// const app = express();

// const PORT = process.env.PORT || 5000;

// const __dirname = import.meta.dirname;

// app.use(express.static(path.join(__dirname, '../public')));

// app.listen(PORT, () => {
//     console.log(`Server has started on port: ${PORT}`);
// });