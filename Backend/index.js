const registerService =require('./register');
const loginService =require('./login');
const verifyService =require('./verify');
const util = require('./utils');


const healthPath="/health";
const loginPath="/login";
const verifyPath="/verify";
const registerPath="/register";


export const handler = async(event) => {
    console.log("Request Event: ",event)
    let response; 
    switch(true){
        case event.httpMethod === "GET" && event.path === healthPath:
            response = util.buildResponse(200); 
            break;
        case event.httpMethod === "POST" && event.path === registerPath:
            const registerBody= JSON.parse(event.body);
            response = await registerService.register(registerBody); 
            break;
        case event.httpMethod === "POST" && event.path === loginPath:
            const loginbody = JSON.parse(event.body);
            response = loginService.login(loginbody); 
            break;
        case event.httpMethod === "POST" && event.path === verifyPath:
            response = util.buildResponse(200); 
            break; 
        default:
            response = util.buildResponse(404, "404 Not found");
    }
     
        return response;
};
  