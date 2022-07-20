const socketController = (socket) => {
    console.log('Cliente conectado', socket.id);

    socket.on('disconnect', () => {
        console.log('Cliente desconectado', socket.id);
    });

    socket.on('enviarMensaje', (payload) => {

        socket.broadcast.emit('enviarMensaje', payload);
    });
}         

module.exports = socketController;