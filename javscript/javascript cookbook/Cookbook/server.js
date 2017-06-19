var express = require('express'),
    app = express();
    app.use(express.static('./'));
    app.listen(3000,function(){
      console.log("Server started at 3000");
    });
