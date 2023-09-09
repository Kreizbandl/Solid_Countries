import { A } from "@solidjs/router"
import "./Navbar.css";
export default function Navbar() {
  return (
    <nav class="navbar">
        <A href="/">
            <img alt="Logo of the website all-countries" src="./logo.png"/>
        </A>
                
        <ul>
            <li>
                <label for="search">Search: </label>
                <input type="text" id="search" name="search"/>
                <A href="/all-countries">Search wip</A>
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
