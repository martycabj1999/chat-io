"use strict";

var Logger = function Logger(req, res, next) {
    var originalUrl = req.originalUrl,
        body = req.body,
        params = req.params,
        method = req.method;

    console.log("");
    console.log("\x1b[35m", 'method: ' + method, "\x1b[0m");
    console.log("\x1b[35m", 'url: ' + originalUrl, "\x1b[0m");
    console.log("\x1b[35m", 'params: ' + JSON.stringify(params), "\x1b[0m");
    console.log("\x1b[35m", 'body: ' + JSON.stringify(body), "\x1b[0m");
    next();
};

module.exports = Logger;
//# sourceMappingURL=logger.config.js.map