# NodeJS CRUD Project with MongoDB & Express
- Node app created using express and mongodb
- User CRUD features
- Nodemon for development monitor script

## Requirements

For development, you will only need Node.js and a node global package, NPM, installed in your environment.

## Install

    $ git clone https://github.com/vc-vishakha/node-crud-mongodb
    $ cd node-crud-mongodb
    $ npm install

## Running project
- Start server with `npm start` command

## Available APIs  
- Health check - Method [GET](http://127.0.0.1:3000/health) - `/health`
- User
  - List - Method [GET](http://127.0.0.1:3000/user/list) - `/user/list`
  - Create - Method [POST](http://127.0.0.1:3000/user) - `/user`

    <code>
    Params: {
        "name": "Lorem ipsum",
        "email": "lorem@gmail.com",
        "phone": "+911297346465",
        "age": 22
    }
    </code>


  - Update - [PATCH](http://127.0.0.1:3000/user) - `/user`

    <code>
        Params: {
            "id: "ID", 
            "name": "Lorem ipsum",
            "email": "lorem@gmail.com",
            "phone": "+911297346465",
            "age": 22
        }
    </code>
    <br/>
  - Delete - Method [DELETE](http://127.0.0.1:3000/user/:id) - `/user/:id`