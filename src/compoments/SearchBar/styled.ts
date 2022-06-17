import styled from 'styled-components'

export const Container = styled.div` 
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    
    
    
`


export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.6rem;
    width: 90%;
    max-width: 1920px;
    

    padding: 2.2rem 0;

    .search-bar {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #E6E6E6;
        padding: 0.5rem 1.0rem;
        border-radius: 50px;
        gap: 0.5rem;

        font-size: 1.2rem;
       
        width: 360px;
        width: 90%;

        

        

        

        
        

        input {
            background: transparent;
            border : none;
            font-size: 1.6rem;
            width: 100%;
            padding: 0px 1.0rem;

            color: var(--n-700);
          
        }


        svg {
            width: 1.8rem;
        }
    }



`