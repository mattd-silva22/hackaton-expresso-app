import { Content } from "./styled";

export function SearchBar() {
  return (
    <Content>
      <div className="search-bar">
        <div className="search-bar">
          <img src={require("../../assets/lupa.svg").default} alt="Lupa" />

          <input type="text" placeholder="Pesquise por serviços" />
        </div>
      </div>
    </Content>
  );
}
