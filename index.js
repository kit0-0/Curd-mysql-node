const express = require('express');
const SQLpool = require('./config/db'); 
const app = express();

//middlewares
app.use(express.json());

//routes
app.use('/api/v1/employees', require('./routers/employeeRoutes'));

app.get("/test",(req,res)=>{
  res.status(200).send("<h1>Hello World</h1>")
})

//port
const port = 3000;

//listening
SQLpool.query('SELECT 1')
  .then(() => {
    console.log('Database connected');

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error('Error connecting to database:', err);
  });


