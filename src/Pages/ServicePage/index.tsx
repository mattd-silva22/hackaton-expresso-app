import React from 'react'
import styled from 'styled-components'

export default function ServicePage() {
  return (
    <Container>
        <Content>

            <header className='nav'>
                <div className='back-btn'>
                    <div className='back-btn-2'>back</div>
                </div>

                <svg width="70" height="56" viewBox="0 0 70 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M63 0H7C3.1395 0 0 3.1395 0 7V49C0 52.8605 3.1395 56 7 56H63C66.8605 56 70 52.8605 70 49V7C70 3.1395 66.8605 0 63 0ZM23.5025 14C27.531 14 30.5025 16.9715 30.5025 21C30.5025 25.0285 27.531 28 23.5025 28C19.474 28 16.5025 25.0285 16.5025 21C16.5025 16.9715 19.4705 14 23.5025 14ZM36.505 42H10.5V40.3725C10.5 35.567 16.366 30.625 23.5025 30.625C30.639 30.625 36.505 35.567 36.505 40.3725V42ZM59.5 38.5H45.5V31.5H59.5V38.5ZM59.5 24.5H42V17.5H59.5V24.5Z" fill="#606362"/>
                </svg>

                <h1>Obter carteira de identidade - 2ª via</h1>

            </header>

        </Content>
    </Container>
  )
}


const Container = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

`


const Content = styled.div`
    .nav {

    }
`


