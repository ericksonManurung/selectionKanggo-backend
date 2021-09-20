# Selection for Kanggo (Back-End-Developer)

## INSTALL PACKAGE
* bcryptjs
* express
* dotenv
* jsonwebtoken
* sequelize orm
* pg (database postgres)

## Base URL for server development
http://localhost:3000/

## Base URL for Production
https://kanggo-back-end.herokuapp.com

## End Points
* POST/users/register
* POST/users/login
* GET/products
* POST/products
* PUT/products/:id
* DELETE/products/:id
* GET/orders
* POST/orders
* DELETE/orders/:id
* PATCH/payments/:id

## Set Up Local
After clone repository<br/>
open viscode or another text editor and then open terminal<br/>
enter to folder selectionKanggo-backend type <i>"cd selectionKanggo-backend"</i><br/>
install all dependecies type <i>"npm i"</i><br/>
open file app.js then comment line number 1. after that uncomment line number 2<br/>
and then type <i>"npm run db:magic</i>" (make sure you already install Postgres into your PC or laptop)<br/>


## REGISTER USER
* URL
```url
/users/register
```
* Method:
```method
POST
```
* URL Params
```params
None
```
* Data Body
    ```data
    Required:
    {
        name: req.body.name,
        email: req.body.email
        password: req.body.password
    }
    ```
* Success Response:
    Code: 201
    ```res
    Content:
    {
        "success": true,
        "message": "success register.."
    }
    ```
* Error Response:
    Code : 400
    ```err
    Content:
    {
        "errorMessage": [
            "Validation error: Email can not be null",
            "Validation error: Password can not be null",
        ]
    }
    ```
    - OR
    Code: 500
    ```or
    Content:
    {
        "errorMessage": "Internal Server Error"
    }
    ```


## LOGIN USER
* URL
```url
/users/login
```
* Method:
```method
POST
```
* URL Params
```params
None
```
* Data Body
    Required:
    ```data
    {
        "email": req.body.email,
        "password": req.body.password
    }
    ```
* Success Response:
    Code: 200
    ```res
    Content:
    {
        "success": true,
        "access_token": "<access token>"
    }
    ```
* Error Response:
    Code : 400
    ```err
    Content:
    {
        "errorMessage": [
            "Validation error: Email can not be null",
            "Validation error: Password can not be null"
        ]
    }
    ```
    - OR
    Code: 500
    ```or
    Content:
    {
        "errorMessage": "Internal Server Error"
    }
    ```

## GET PRODUCT
* URL
```url
/products
```
* Method:
```method
GET
```
* URL Params
```params
None
```
* Data Body
```data
None
```
* Success Response:
    Code: 200
    ```response
    Content:
    {
        "success": true,
        "data": [   
            {
                "id": 1,
                "name": "Mouse",
                "price": 250000,
                "qty": 12,
            },
            {
                "id": 2,
                "name": "Laptop",
                "price": 11000000,
                "qty": 6,
            },
            {
                "id": 3,
                "name": "Keyboard",
                "price": 2100000,
                "qty": 18,
            }
            
        ]
    }
    ```
* Error Response:
    Code: 500
    ```err
    Content
    {
        "errorMessage": "Internal Server Error"
    }
    ```
    

## POST PRODUCT
* URL
```url
/products
```
* Method:
```url
POST
```
* URL Params
```params
None
```
* Data Body
    Required:
    ```data
    {
        "name": req.body.name,
        "price": req.body.price,
        "qty": req.body.qty
    }
    ```
* Success Response:
    Code: 201
    ```response
    Content:
    {
        "success": true,
        "product": {
            "id": 1,
            "name": "Mouse",
            "price": 2100000,
            "qty": 3
        }
    }
    ```
* Error Response:
    Code : 400
    ```errResponse
    Content:
    {
        "success": false,
        "errorMessage": [
            "Validation error: name can not be null",
            "Validation error: price can not be null",
            "Validation error: qty can not be null"
        ]
    }
    ```
    OR
    Code: 500
    ```or
    Content:
    {
        "errorMessage": "Internal Server Error"
    }
    ```


## UPDATE PRODUCT
* URL
```url
/product/:id
```
* Method:
```method
PUT
```
* URL Params
```params
:id
```
* Data Body
    ```data
    Required: 
    {
        "name": req.body.name,
        "price": req.body.price,
        "qty": req.body.qty
    }
    ```
* Success Response:
    Code: 200
    ```res
    Content:
    {
        "success": true,
        "product": {
            "id": 3,
            "name": "Hardisk",
            "price": 9600000,
            "qty": 4
        }
    }
    ```
    - OR
    Code: 404
    ```err
    Content:
    {
        "errorMessage": "Data not found"
    }
    ```
* Error Response:
    Code: 500
    Content:
    {
        "errorMessage": "Internal Server Error"
    }
    ```


# DELETE PRODUCT
* URL
```url
/product/:id
```
* Method:
```delete
DELETE
```
* URL Params
```params
:id
```
* Data body
```data
None
```
* Success Response:
    Code: 200
    Content:
    {
        "success": true,
        "message": "success delete Product"
    }
    ```
    - OR
    Code: 404
    ```err
    Content
    {
        "errorMessage": "Data not found"
    }
    ```
* Error Response:
    Code: 500
    ```err
    Content:
    {
        "errorMessage": "Internal Server Error"
    }
    ```


## GET ORDERS
* URL
```url
/orders
```
* Method:
```method
GET
```
* URL Params
```params
None
```
* Request Headers
```headers
access_token : <access token>
```
* Data Body
```data
None
```
* Success Response:
    Code: 200
    ```response
    Content:
    {
        "success": true,
        "data": [
            {
                "id": 1,
                "UserId": 1,
                "MasterProductId": 1,
                "amount": 1,
                "status": "pending"
            },
            {
                "id": 2,
                "UserId": 1,
                "MasterProductId": 2,
                "amount": 1,
                "status": "paid"
            }
        ]
    }
    ```
* Error Response:
    Code: 500
    ```err
    Content
    {
        "errorMessage": "Internal Server Error"
    }
    ```


## POST ORDERS
* URL
```url
/orders
```
* Method:
```url
POST
```
* URL Params
```params
None
```
* Request Headers
```headers
access_token : <access token>
```
* Data Body
    Required:
    ```data
    {
        "MasterProductId": 1,
        "amount": 1
    }
    ```
* Success Response:
    Code: 201
    ```response
    Content:
    {
        "data": {
            "id": 5,
            "MasterProductId": 1,
            "amount": 1,
            "status": "pending",
            "UserId": 3
        }
    }
    ```
* Error Response:
    Code : 400
    ```errResponse
    Content:
    {
        "errorMessage": [
            "Validation error: amount can not be null",
            "Validation error: MasterProductId can not be null"
        ]
    }
    ```
    OR
    Code: 500
    ```or
    Content:
    {
        "errorMessage": "Internal Server Error"
    }
    ```


# DELETE ORDERS
* URL
```url
/orders/:id
```
* Method:
```delete
DELETE
```
* URL Params
```params
:id
```
* Request Headers
```headers
access_token : <access token>
```
* Data body
```data
None
```
* Success Response:
    Code: 200
    Content:
    {
        "success": true,
        "message": "success delete Order"
    }
    ```
    - OR
    Code: 404
    ```err
    Content
    {
        "errorMessage": "Data not found"
    }
    ```
* Error Response:
    Code: 500
    ```err
    Content:
    {
        "errorMessage": "Internal Server Error"
    }
    ```


## UPDATE PAYMENT
* URL
```url
/payments/:id
```
* Method:
```method
PATCH
```
* URL Params
```params
:id
```
* Request Headers
```headers
access_token : <access token>
```
* Data Body
    ```data
   None
    ```
* Success Response:
    Code: 200
    ```res
    Content:
    {
        "success": true,
        "message": "proccess payment success"
    }
    ```
    - OR
    Code: 404
    ```err
    Content:
    {
        "errorMessage": "Data not found"
    }
    ```
* Error Response:
    Code: 500
    Content:
    {
        "errorMessage": "Internal Server Error"
    }
    ```