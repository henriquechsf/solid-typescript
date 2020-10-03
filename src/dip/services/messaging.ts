import { MessagingProtocol } from '../model/interfaces/messaging-protocol';

export default class Messaging implements MessagingProtocol {
  sendMessage(msg: string): void {
    console.log('Mensagem enviada: ', msg);
  }
}
