import { A } from "@solidjs/router"
import "./Navbar.css";
export default function Navbar() {
  return (
    <nav class="navbar">
        <A href="/">
            {/* <img alt="Logo of the website all-countries" src="../assets/logo.png"/> */}
            Home wip
        </A>
                
        <ul>
            <li>
                <label for="search">Search: </label>
                <input type="text" id="search" name="search"/>
                <A href="/">Search wip</A>
            </li>
            <li>
                <A href="/">All Countries wip</A>
            </li>
            <li>
                <A href="/">Contact wip</A>
            </li>
        </ul>
    </nav>
  );
}
