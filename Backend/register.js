const AWS = require('aws-sdk');
AWS.config.update({
    region:'us-east-1'
})
const util = require('./utils')
const dynamodb = new AWS.DynamoDB.DocumentClient();
const userTable= 'prototype-username';

async function register(userInfo){
    const name = userinfo.name;
    const email = userinfo.email;
    const username = userinfo.username;
    const password = userinfo.password;

    if(!username || !name || !email || !password){
       return  
    }
}
