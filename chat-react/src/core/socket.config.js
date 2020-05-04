import io from 'socket.io-client'; 

const socketUrl = 'https://chat-node-be.herokuapp.com/';

export const socket = io(socketUrl);

export const connectSocket = () => {
    return new Promise(resolve => {
        socket.on('connect', () => {
            resolve(socket);
        });
    });
};
