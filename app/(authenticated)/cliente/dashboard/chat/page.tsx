"use client"

import { io } from "socket.io-client"

//Comando para instalar o socket client: npm install socket.io-client

export default function Chat(){

    const socket = io('http://localhost:8181')

    let token = localStorage.getItem("token")

    socket.on('connect', function(){
        console.log('Conectado ao servidor Socket.io com o ID:', socket.id);

        const room = {
                serviceMysqlId: 1
        }

        // Vincula a mensagem apenas para a sala correspondente ao serviço
        socket.emit('class', room)

    })

    return(
        <>
       <form id="chat">
        <div className="messages"></div>
        <input id="message" placeholder=" Digite sua mensagem"/>
        <button type="submit">Enviar</button>
    </form>
        </>
    )
}


