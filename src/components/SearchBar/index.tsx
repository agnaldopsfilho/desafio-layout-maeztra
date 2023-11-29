import { useState } from "react";
import "./styles.scss";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <form
      className="search-bar__form"
      onSubmit={(event) => {
        event.preventDefault();
        console.log("Searched: ", searchInput);
        window.alert(`Buscado: ${searchInput}`);
      }}
    >
      <fieldset>
        <input
          type="search"
          placeholder="O que você busca?"
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
        />
        <button type="submit">Buscar</button>
      </fieldset>
    </form>
  );
};

export default SearchBar;
