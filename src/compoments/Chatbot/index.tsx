/* eslint-disable no-useless-escape */

import React, { FormEvent, useState } from 'react'
import styled from 'styled-components';
import { saudacoes } from "./falas"

type MsgType = {
    who : string;
    msg: string
}

const apontamentos = ["13:45- 13/07/2022 - 2º Via RG - Vapt Vulp Lapa " , "9:00 - 10/08/2022 - INSS - Vapt Vulp Lapa"]
export default function ChatBot() {

    const [msg , setMsg] = useState<string>("")
    const [msgHistory , setMsgHistory] = useState<MsgType[]>([])

    function handleResponse(msg:MsgType) {
        const msgArray = msg.msg.split(" ")
        console.log(msgArray)
        if( saudacoes.includes(msgArray[0])  ) {
            const resposta = {
                who: "server",
                msg : `Olá cidadão, tudo bem ? em que posso ajudar? 
                        1 - Consultar Agendamentos
                        2 - Marcar serviços
                        3 - Outros
                
                `
            }

            return(resposta)

        } 

        if(msgArray[0] === "1") {

            const resposta = {
                who: "server",
                msg : `Suas consultas:
                        ${apontamentos.map( item => {return item})}
                        
                `
            }

            return(resposta)
        }

        if (msgArray.includes("")) {

        }
        
        
        
        else {
            return {
                who : "server",
                msg : "não entendi"
            }
        }


    }


    function handleSubmit(event: FormEvent) {
        event.preventDefault()
        if(msg.replace(" ","") === "") {
            alert("Ops,Favor preencha o campo")
            return 
        }
        const newMsg = {
            who: 'user',
            msg: msg
        }
        const resp = handleResponse(newMsg) as MsgType
        const oldHistory = msgHistory
        const newHistory = oldHistory.concat(newMsg)
        const zap = newHistory.concat(resp)
        

        setMsgHistory(zap)
        setMsg("")
    }

  return (

    <Container>
        <div>ChatBot</div>
        <div className='chatbot-area'>
            {msgHistory.map( msg => {
                return (
                    <p>{msg.who}| {msg.msg}</p>
                )
            })}
        </div>
        <form action="">
            <input 
                type="text" 
                placeholder='enviar msg' 
                onChange={e => setMsg(e.target.value)}
                value={msg}
            /> 
            <button 
                type='submit'
                onClick={handleSubmit}
            >
                Enviar</button>  
        </form>
        
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    border: 1px solid black;
    padding: 10px;
    .chatbox {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        border: 1px solid black;
        padding: 5px;

        
    }
`;