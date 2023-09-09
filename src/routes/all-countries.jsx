import { A } from "@solidjs/router"
import jsonCountries from '../countries.json';
import { For, createSignal } from "solid-js";

export default function AllCountries() {

    /* const [jsonCountries, setJsonCountries] = createSignal(); */

    //sort countries
    const sortedJsonCountries = jsonCountries.sort((a,b) => {
        return a.name.common.localeCompare(b.name.common);
    })

    return (
      <main>
        <h1>All Countries!</h1>
        <div class="country-cards">
            
            <For each={sortedJsonCountries}>{(country,i) =>
                <A href="/" class="card">
                    <h2>{ country.name.common }</h2>
                    <img src={ country.flags.png } alt={ country.flags.alt } />
                </A>
            }</For>
            
        </div>
      </main>
    );
  }
  