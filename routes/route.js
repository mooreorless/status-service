var _ = require('lodash');
var uuid = require('node-uuid');

module.exports = function (app){
    _services = [];
    /*
    * @api {get} / Request homepage
    */
    app.get('/', function (req, res){
        res.send('Hello World');
    })

    /* 
    * @api {get} /api/status 
    * @apiName status
    * @apiresponse returns all data in _services
    */
    app.get('/api/status', function(req, res){
        res.send(_services);
    });

    /*
    * @api {post} /api/status 
    * @apiName status
    */
    app.post('/api/status',function(req, res){
        if(!req.body.hasOwnProperty('serviceName') ||
           !req.body.hasOwnProperty('value')){
               res.statusCode = 400;
               return res.send('Error 400: Post syntax incorrect.');
           } else {
               var uuid4 = uuid.v4();
               var newService = {
                   id : uuid4,
                   serviceName : req.body.serviceName,
                   value : req.body.value
               };
               _services.push(newService);
               res.json(true);
           }
    });

    /*
    * @api {get} /api/status/:id Request service information
    * @apiName GetHost
    * @apiParam {String}
    */
    app.get('/api/status/:id', function(req, res){
        var service = _services.filter( function (s){
            return s.id == req.params.id;
        })[0];

        res.json(service);
    });
}
