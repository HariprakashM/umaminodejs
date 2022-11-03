const axios  = require('axios');
const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());

app.get("/test", async function (req, res) {
    var config = {
        method: 'get',
        url: 'https://ttanalytics.leadsflo.co/api/website/1/pageviews?start_at=1667277615418&end_at=1667364015418&unit=hour&tz=America/Los_Angeles',
        headers: { 
          'Authorization': 'Bearer eyJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwiYWxnIjoiUEJFUzItSFMyNTYrQTEyOEtXIiwicDJjIjozMDQ3LCJwMnMiOiJXQ1lXa3lscXZ5djdOU3NDSktlUzdBIn0.rIuFYeFOQQJrFUscJ16C0fBsBH73KSLXQxEhC6jBbMBak1fm89ODEA.ZW8VMQBnwpVvFl_bQioa0Q.5O318pwjwL-HGgekYIB6ruDF4nom1vtUxPztlgxfXNBlCQzOVLSCdczK7fAPUFzzM7DdPRUImosiP_9Jux0CDXn9ebvvOHcaSYkwtHYr142UnopDmt-LxyR5wXY16kghDqy_fyTfem7WXFt3ofDPVdaWNROPi8lmf5LmeQBXl_hlF9I70Bfu5YM36ujs5uk7AFUmWRSrLDqhAuARJVqBjQ.l8hyWJI1CSs4fcx4LJL5LQ'
        }
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
})
app.get("/", (req, res) =>
  res.send(`Server Running successfully.....!`)
);

const port= 5000;
app.listen(port,()=>console.log(`server running on port ${port}`));