import { A } from "@solidjs/router"
import jsonCountries from '../countries.json';
import { For } from "solid-js";

export default function AllCountries() {

    //sort countries
    const sortedJsonCountries = jsonCountries.sort((a,b) => {
        return a.name.common.localeCompare(b.name.common);
    })

    return (
      <main>
        <h1>CountriesList</h1>
        <div class="country-cards">
            
            <For each={sortedJsonCountries}>{(country,i) =>
                <A href={`/country-detail/${encodeURIComponent(country.name.common)}`} class="card">
                    <h2>{ country.name.common }</h2>
                    <img src={ country.flags.png } alt={ country.flags.alt } />
                </A>
            }</For>
            
        </div>
      </main>
    );
  }
  