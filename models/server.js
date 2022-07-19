const express = require('express');
const cors = require('cors');


class Server{
    constructor(){
            this.app = express();
            this.port = process.env.PORT;
            this.server = require('http').createServer(this.app);
            this.io = require('socket.io')(this.server);

            this.paths = {};        

            //middlewares
            this.middelwares();

            this.routes();
            
            this.sockets();
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

    //sockets
    sockets(){
        this.io.on("connection", (socket) => {
            console.log('Cliente conectado', socket.id);

            socket.on('disconnect', () => {
                console.log('Cliente desconectado', socket.id);
            });
        });
    }

    listen(){
        this.server.listen(this.port || 3000,()=>{
            console.log(`Listening at http://localhost:${this.port}`)
        });
    }
}

module.exports = Server;