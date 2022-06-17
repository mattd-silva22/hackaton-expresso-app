
import styled from 'styled-components'

export default function Footer() {
  return (
    <Container>
        <Content>
            <nav className='footer-nav'>
                

                        <div className="footer-nav-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.479 7.57827L15.093 3.12502C13.2787 1.62499 10.7213 1.62499 8.90703 3.12502L3.52097 7.57827C2.55059 8.38059 2 9.59706 2 10.8663V18.8739C2 20.5419 3.28643 22 5 22H7C8.65685 22 10 20.6569 10 19V15.6848C10 15.0044 10.5044 14.5587 11 14.5587H13C13.4956 14.5587 14 15.0044 14 15.6848V19C14 20.6569 15.3431 22 17 22H19C20.7136 22 22 20.5419 22 18.8739V10.8663C22 9.59706 21.4494 8.38059 20.479 7.57827Z" fill="#727171"/>
                            </svg>

                            <p>Home</p>
                        </div>
                        
                    

                    
                        <div className="footer-nav-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 6C3 4.34315 4.34315 3 6 3H8.67963C9.34834 3 9.9728 3.3342 10.3437 3.8906L11.4063 5.4844C11.7772 6.0408 12.4017 6.375 13.0704 6.375H18C19.6569 6.375 21 7.71815 21 9.375V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6Z" stroke="#727171" stroke-width="2"/>
                            </svg>

                            <p>Categorias</p>
                        </div>
                    

                    
                        <div className="footer-nav-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 13.9021 3.5901 15.6665 4.59721 17.1199C4.70168 17.2707 4.7226 17.4653 4.64529 17.6317L3.42747 20.2519C3.23699 20.5853 3.47768 21 3.86159 21H12Z" stroke="#727171" stroke-width="2"/>
                                <path d="M8 13.15C8.63513 13.15 9.15 12.6351 9.15 12C9.15 11.3649 8.63513 10.85 8 10.85C7.36487 10.85 6.85 11.3649 6.85 12C6.85 12.6351 7.36487 13.15 8 13.15Z" fill="#727171" stroke="#727171" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M16 13.15C16.6351 13.15 17.15 12.6351 17.15 12C17.15 11.3649 16.6351 10.85 16 10.85C15.3649 10.85 14.85 11.3649 14.85 12C14.85 12.6351 15.3649 13.15 16 13.15Z" fill="#727171" stroke="#727171" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12 13.15C12.6351 13.15 13.15 12.6351 13.15 12C13.15 11.3649 12.6351 10.85 12 10.85C11.3649 10.85 10.85 11.3649 10.85 12C10.85 12.6351 11.3649 13.15 12 13.15Z" fill="#727171" stroke="#727171" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>  

                            <p>Assistente</p>
                        </div>
                        
                    

                    
                        <div className="footer-nav-icon">
                            
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C10.3431 4 9 5.34315 9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7C15 5.34315 13.6569 4 12 4ZM7 7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7C17 9.76142 14.7614 12 12 12C9.23858 12 7 9.76142 7 7Z" fill="#727171"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 20C9.07112 20 7.3346 19.1139 6.33536 17.9708C6.03088 17.6225 5.95154 17.3163 5.96074 17.0651C5.97055 16.7971 6.08641 16.487 6.3472 16.1692C6.88287 15.5164 7.9013 15 8.99998 15H15C16.0987 15 17.1171 15.5164 17.6528 16.1692C17.9135 16.487 18.0294 16.7971 18.0392 17.0651C18.0484 17.3163 17.9691 17.6225 17.6646 17.9708C16.6654 19.1139 14.9288 20 12 20ZM4.82956 19.2871C6.30212 20.9716 8.65325 22 12 22C15.3467 22 17.6978 20.9716 19.1704 19.2871C19.7746 18.5958 20.0676 17.8036 20.0379 16.9919C20.0088 16.1971 19.6744 15.48 19.1988 14.9004C18.2617 13.7585 16.6627 13 15 13H8.99998C7.33723 13 5.73821 13.7585 4.80113 14.9004C4.32553 15.48 3.99119 16.1971 3.96208 16.9919C3.93235 17.8036 4.22533 18.5958 4.82956 19.2871Z" fill="#727171"/>
                            </svg>
                            <p>Seus dados</p>
                        </div>
                        
                    
                
            </nav>
        </Content>
    </Container>
  )
}



const Container = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    width: 100%;

    

    box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.25);

`;

const Content = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.6rem;
    width: 90%;
    max-width: 1920px;

    

    

    .footer-nav {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 100%;

        gap: 7.0rem;

        @media(max-width: 720px){
            &{
                gap: 2.5rem;
            }
        }

        
 

    }
    
    .footer-nav-icon {
        display: flex;
        align-items: center;
        justify-content: center;

        flex-direction: column;

        font-weight: 700;

        color: #727171;

        text-align: center;
        
        

        

        p {
            white-space: nowrap;

            @media(max-width: 720px){
            &{
                font-size: 1.2rem;
            }
        }
        }

       
    }

`