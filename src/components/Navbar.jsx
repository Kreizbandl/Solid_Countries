import { A } from "@solidjs/router"
import { createSignal } from "solid-js";
import "./Navbar.css";
export default function Navbar() {

    const [searchValue, setSearchValue] = createSignal("");

    const navigateToSearch = () => {
        const encodedSearchValue = encodeURIComponent(searchValue());
        if (encodedSearchValue) {
          // Hier wird die Navigation durchgeführt, indem die URL aktualisiert wird
          window.location.href = `/all-countries/${encodedSearchValue}`;
        }
      };

    return (
        <nav class="navbar">
            <A href="/">
                <img alt="Logo of the website all-countries" src="./logo.png"/>
            </A>
                    
            <ul>
                <li>
                    <input 
                        type="text" 
                        id="search" 
                        name="search"
                        aria-label="Enter a country to search for" 
                        value={searchValue()} 
                        onInput={(e) => setSearchValue(e.target.value)}
                        onKeyPress={(e) => {
                            if (e.key === "Enter") {
                              navigateToSearch();
                            }
                          }}
                    />
                    <A href={`/`} onClick={navigateToSearch}>Search</A>
                </li>
                <li>
                    <A href="/all-countries">All Countries</A>
                </li>
                <li>
                    <A href="/contact">Contact</A>
                </li>
            </ul>
        </nav>
    );
}
