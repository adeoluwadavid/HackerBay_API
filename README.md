# Adewole NodeJs API for HackerBay

A simple stateless microservice in Nodejs to demonstrate jwt, json patching and thumbnail generation.

### First steps

Your can get a copy of this project by using the;
* git clone command, or the download zip alternative provided on github

Using the terminal, move into the root folder of this project and then run

```
npm install

```
to install required dependencies.

### Furthermore
A secret variable is required for the token generation at login. Therefore, on your project directory:
* Create an env file
* Inside .env file, type the following : 

```
SECRET="<secret>"
```
*N/B: The secret variable can be any text of your choice*

### Testing
To start the API server run

```
npm start
```
You can then start making requests via postman.

To test the application on your local machine, run

```
npm test
```

To test the application with code-coverage, run

```
npm test-with-coverage
```

A code coverage report will be seen on your console.

## API Endpoints

### Signin
* Request Method: POST
* URL: https://localhost:3000/api/signin

Request body should contain username and password; the API will return a token for the user which will be used for future requests to the server.
* Sample Request: {
                    "username": "Caleb",
                    "password": "1234"
                }
* Sample Response: {
                    "success": true,
                    "user": "Caleb",
                    "token": "xxxxxxxxxxxxxxx.xxxxxxxxxxxxxxxxx.xxxxxxxxxxxxxx"   
                }
* Note: Any username/password combination is accepted, since this it just a mock authentication service*

### JSON Patch
* Request Method: PATCH
* URL: http://localhost:3000/api/jsonpatcher?token=token=your_generated_web_token_at_signin

This endpoint accepts two parameters (document and patch) which are JSON objects.
* Sample Request: {
                    "document": {
                            "title": "Things Fall Apart", 
                            "year": "1958"
                        },
                    "patch": [
                            {
                                "op": "replace", 
                                "path": "/title", 
                                "value": "Arrow of God"
                            }
                        ]
                }
* Sample Response: {
                    "success": true,
                    "data": {
                        "title": "Arrow of God",
                        "year": "1958"
                    }
                }
* Note: Set token equals the token received at sigin

## Used Libraries
* [mocha](http://mochajs.org) - For automated tests.
* [Istanbul](https://www.istanbul.js.org) - For test coverage.
* [jsonwebtoken](https://www.npmjs.com/package/mysql2) - Token generation and verification.
* [should](https://www.npmjs.com/package/should) - Expressive assertion library.
* [supertest](https://www.npmjs.com/package/supertest) - For High level HTTP tests.

## About Me
* **David Adewole** -
www.github.com/adeoluwadavid
