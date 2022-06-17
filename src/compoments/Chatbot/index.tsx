
import React, { FormEvent, useState } from 'react'
import styled from 'styled-components';

type MsgType = {
    who : string;
    msg: string
}
export default function ChatBot() {

    const [msg , setMsg] = useState<string>("")
    const [msgHistory , setMsgHistory] = useState<MsgType[]>([])

    function handleResponse(msg:MsgType) {
        if(msg.msg === "oi") {
            const resposta = {
                who: "server",
                msg : "ola cidadão em que posso ajudar? 1- Ver seus agendamentos"
            }

            return(resposta)

        } else {
            return {
                who : "server",
                msg : "não entendi"
            }
        }


    }


    function handleSubmit(event: FormEvent) {
        event.preventDefault()
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
    .chatbox {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        
    }
`;