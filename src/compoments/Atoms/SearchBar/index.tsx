import { useServices } from "../../../Providers/ServicesContext";
import { Content } from "./styled";

export function SearchBar() {
  const { setSearch } = useServices();
  return (
    <Content>
      <div className="search-bar">
        <div className="search-bar">
          <img src={require("../../../assets/lupa.svg").default} alt="Lupa" />

          <input
            type="text"
            placeholder="Pesquise por serviços"
            onChange={(e) => setSearch(e.currentTarget.value)}
          />
        </div>
      </div>
    </Content>
  );
}
