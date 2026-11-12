const os = require('os'); // import os module
const express = require('express'); //import framework
const app = express(); //Create Application
const PORT = 3000;
app.get('/', (req, res) => {
    res.send('<center><h1>Welcome to home page</h1></center>');
})
app.get('/menu', (req, res) => {
    res.send('<center><h1>Welcome to menu page</h1></center>');
})
app.get('/about', (req, res) => {
    res.send('<center><h1>Welcome to about page</h1></center>');
})
app.get('/info', (req, res) => {
    let server_info = `<center>
        <h1 style='color: green'>Your Server Information</h1>
        <hr/>
        <ul style='list-style: none; font-size: 20px; color: blue'>
            <li>
                "Platform:" ${os.platform()}
            </li>
            <li>
                "Architecture:" ${os.arch()}
            </li>
            <li>
                "Hostname:" ${os.hostname()}             
            <li>
                "Home Directory:" ${os.homedir()}
            </li>
            <li>
               "CPU Cores:" ${os.cpus().length} 
            </li>
            <li>
                "OS Cores:" ${os.type()}
            </li>
            <li>
                "OS Release:" ${os.release()} 
            </li>
        </ul>
    </center>`
    res.send(server_info);
})
app.listen(PORT,()=>{
    console.log(`Server started on port:  http://localhost:${PORT}`)
})
    