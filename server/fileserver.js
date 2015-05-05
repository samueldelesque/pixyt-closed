var static = require('node-static')
var file = new static.Server('./public')
var port = 2012

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        file.serve(request, response, function (e, res) {
            if (e && (e.status === 404)) { // If the file wasn't found
                file.serveFile('/index.html', 404, {}, request, response);
            }
        });
    }).resume();
}).listen(port);

console.log("App files are now served on port "+port);