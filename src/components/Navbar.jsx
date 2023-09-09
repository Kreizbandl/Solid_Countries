import { A } from "@solidjs/router"
import { createSignal } from "solid-js";
import "./Navbar.css";
export default function Navbar() {

    const [searchValue, setSearchValue] = createSignal(""); // Hier wird der Wert des Input-Felds gespeichert

    return (
        <nav class="navbar">
            <A href="/">
                <img alt="Logo of the website all-countries" src="./logo.png"/>
            </A>
                    
            <ul>
                <li>
                    <label for="search">Search: </label>
                    <input type="text" id="search" name="search" value={searchValue()} onInput={(e) => setSearchValue(e.target.value)}/>
                    <A href={`/all-countries/${encodeURIComponent(searchValue())}`}>Search wip</A>
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
