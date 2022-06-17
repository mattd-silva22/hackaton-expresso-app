import { Container, Content } from "./styled";





export function SearchBar() {
    
    return (
        <Container>
            <Content>
                <div className="search-bar">

                    <div className="search-bar">
                        

                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z" stroke="#334155" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M14 14L11.1 11.1" stroke="#334155" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                        <input type="text" placeholder="Pesquise por serviços" />

                    </div>


                </div>
            </Content>
        </Container>
        

    )
}