class Sockets{
constructor(io){
 this.io=io;
 this.socketEvents();    
}

socketEvents(){
// On Connection
  this.io.on('connection',(socket)=>{      
    //Escuchar el Evento: mesanje-to-server
      socket.on('mensaje-to-server',(data) => {  
      console.log(data);
      this.io.emit('mensaje-from-server',data); // usar socket para mandar a un cliente en espefcicifico , io para andar a todo los clientes 
      });
              
  });
     

}


}


module.exports=Sockets;