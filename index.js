const Server= require('./models/server');
require('dotenv').config(); 
const server= new Server();
server.execute();



// const app = express();



//io.on('connection',(socket)=>{  // socket == cliente
//console.log(socket.id); // imprimir id del socket conectado
//socket.emit('mensaje-bienvenida',{
// msg:'Bienvenido al server',
//  fecha: new Date()
//});

// Escuchar el Evento
//socket.on('mensaje-to-server',(data) => {  

  // console.log(data);
//io.emit('mensaje-from-server',data); // usar socket para mandar a un cliente en espefcicifico , io para andar a todo los clientes 

 //});


//});


//server.listen(8080,()=> {

//console.log('Server corriendo en puerto :8080');

//});