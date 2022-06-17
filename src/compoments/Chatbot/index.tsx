import React from 'react'
import styled from 'styled-components';

export default function ChatBot() {
  return (

    <Container>
        <div>ChatBot</div>
        <div className='chatbot'>

        </div>

        <input type="text" placeholder='enviar msg'/>
    </Container>
  )
}

const Container = styled.div`
    
`;