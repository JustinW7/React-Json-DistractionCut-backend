// import json-server in index.js file 
const jsonServer=require('json-server')

// create a server for json file 
const mediaPlayerServer=jsonServer.create()

// set up a path for json file 
const router =jsonServer.router('db.json');


// return a middleware used by json server u
// when changes occurs and we need to update middlewares are used 


const middlewares=jsonServer.defaults()


//setup a port for running json server 
// to run in a separte port in select a random 

const port =4000  ||process.env .port 

// use middlewares and router in server 
mediaPlayerServer.use(middlewares)
mediaPlayerServer.use(router)


//to make it running 

// to listen server for resolving request from 

mediaPlayerServer.listen(port,()=>{
  console.log(`mediaplayer listening at port${port},and waiting for the client request!!!`);

})
