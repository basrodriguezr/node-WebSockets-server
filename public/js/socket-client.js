//Referencias del html
const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');
const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar = document.querySelector('#btnEnviar');

const socket = io();

socket.on('connect', () => {
    //console.log('Conectado al servidor');
    lblOffline.style.display = 'none';
    lblOnline.style.display = '';

});

socket.on('disconnect', () => {
    //console.log('Desconectado del servidor');
    lblOnline.style.display = 'none';
    lblOffline.style.display = '';
});

socket.on('enviarMensaje', (payload) => {
    console.log('Desde el servidor:', payload);
});

const payload = {
    nombre: 'Juan',
    mensaje: 'Hola mundo'
}

socket.emit('enviarMensaje', payload, (id) => {  //callback  para recibir el id del mensaje  enviado por el servidor y poder mostrarlo en el html        
    console.log('Mensaje enviado', id); 
});

btnEnviar.addEventListener('click', () => {
    const mensaje = txtMensaje.value;
    socket.emit('enviarMensaje', mensaje);
    txtMensaje.value = '';
    txtMensaje.focus();
    console.log(mensaje );
});