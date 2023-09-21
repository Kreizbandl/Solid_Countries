import { A } from "@solidjs/router"
import { createSignal } from "solid-js";
import "./Navbar.css";
export default function Navbar() {

    const [searchValue, setSearchValue] = createSignal("");

    /* Navigation zur Länderliste mit dem eingegebenen Suchbegriff */
    const navigateToSearch = () => {
        /* Suchbegriff mit `encodeURIComponent` kodiert */
        const encodedSearchValue = encodeURIComponent(searchValue());
        if (encodedSearchValue) {
            /* Navigation, indem durch URL Aktualisierung */
            window.location.href = `/all-countries/${encodedSearchValue}`;
        }
    };

    return (
        <nav class="navbar">
            {/* Logo-Link mit beschreibendem Label und alternativem Text */}
            <A href="/">
                <img alt="Logo of the website all-countries" src="./logo.png"/>
            </A>
            <ul>
                <li>
                    {/* Eingabefeld für die Suche mit beschreibendem Label und auslösbar über die Enter-Taste */}
                    <input type="text" id="search" name="search"aria-label="Enter a country to search for" 
                        value={searchValue()} onInput={(e) => setSearchValue(e.target.value)}
                        onKeyPress={(e) => { if (e.key === "Enter") { navigateToSearch(); } }}
                    />
                    {/* Link zum Auslösen der Suche mit beschreibendem Label */}
                    <A href={`/`} id="search-button" onClick={navigateToSearch} aria-label="Search for Countries">Search</A>
                </li>
                <li>
                    {/* Link zur Liste alle Länder mit beschreibendem Label */}
                    <A href="/all-countries" aria-label="Go to all countries screen">All Countries</A>
                </li>
                <li>
                    {/* Link zum Kontaktformular mit beschreibendem Label */}
                    <A href="/contact" aria-label="Go to the contact form">Contact</A>
                </li>
            </ul>
        </nav>
    );
}
