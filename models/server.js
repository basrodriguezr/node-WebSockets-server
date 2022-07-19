const express = require('express');
const cors = require('cors')



class Server{
    constructor(){
            this.app = express();
            this.port = process.env.PORT;
            this.paths = {};        

            //middlewares
            this.middelwares();

            this.routes();
    }

    
    middelwares(){
         //COORS
        this.app.use(cors());        
                    
         //directorio publico
        this.app.use(express.static('public'));     
    }

    routes(){
        //this.app.use('/api',require('./routes/api'));
    }

    listen(){
        this.app.listen(this.port || 3000,()=>{
            console.log(`Listening at http://localhost:${this.port}`)
        });
    }
}

module.exports = Server;