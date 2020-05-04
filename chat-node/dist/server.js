"use strict";

var _http = require("http");

var _http2 = _interopRequireDefault(_http);

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cors = require("cors");

var _cors2 = _interopRequireDefault(_cors);

var _socket = require("socket.io");

var _socket2 = _interopRequireDefault(_socket);

var _env = require("./config/env.config");

var _env2 = _interopRequireDefault(_env);

var _logger = require("./config/logger.config");

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var server = _http2.default.createServer(app);

app.use((0, _cors2.default)());
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use(_bodyParser2.default.json());
app.use(_logger2.default);

var io = (0, _socket2.default)(server);

io.on('connection', function (client) {
  console.log('Usuario conectado');

  client.on('disconnect', function () {

    console.log('Usuario Desconectado');
  });

  /* Escuchar el cliente */

  client.on('sendMessage', function (payload) {

    client.broadcast.emit('reciveMessage', payload);
    client.emit('reciveMessage', payload);

    console.log(payload);
  });
});

// ChatRouter.routesConfig(app);

server.listen(_env2.default.port, function () {
  console.log("\x1b[34m", 'Application listening at port ' + _env2.default.port, "\x1b[0m");
});
//# sourceMappingURL=server.js.map