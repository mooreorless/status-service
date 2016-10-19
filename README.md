# Service Status Microservice
Service status microservice to receive json containing a key value pair. This service will use presistent storage to store all the data being posted. Each service posting to the serivce must create a unique id for the host sending the information. When pushing service updates the service must update instead of creating a new record. 

Status: [![Build Status](https://travis-ci.org/BondAnthony/status-service.svg?branch=master)](https://travis-ci.org/BondAnthony/status-service)

# Install 
Install the service on your local machine by running ```npm install``` to use mocha from command line you will need to run ```npm install -g mocha```.
- You can also install nodemon for development ```npm install -g nodemon```
# Run
Run the application by executing ```npm start``` or ```nodemon server.js```.

# Tests
Execute tests by running ```moch test``` or ```npm test```
Please develop test cases when possible.

# Example
POST - http://localhost:3000/api/status
```
{
    "serviceName": "replication",
    "value": 1
}
```
