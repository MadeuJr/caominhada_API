import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: "*",
  }
})
export class LocationGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('locationUpdate')
  handleLocationUpdate(@MessageBody() data: any) {
    
    this.server.emit(`location-${data.passeadorId}`, data);
  }
}