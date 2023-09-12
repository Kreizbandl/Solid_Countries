import jsonCountries from '../../countries.json';
import { createEffect, createSignal, onCleanup } from "solid-js";
import { useParams } from "@solidjs/router";
import { A } from "@solidjs/router"

export default function Search() {

    const params = useParams();
    const [countriesToDisplay, setCountriesToDisplay] = createSignal();
    
    //sort countries
    const sortedJsonCountries = jsonCountries.sort((a,b) => {
        return a.name.common.localeCompare(b.name.common);
    })

    createEffect(() => {
      let filteredCountries = sortedJsonCountries;

      if(params.search){
        filteredCountries = filteredCountries.filter(country => {
          return country.name.common.includes(params.search)
        });
      }

      setCountriesToDisplay(filteredCountries);

      console.log(countriesToDisplay);

      onCleanup(() => {});
    });


    return (
      <main>
        <h1>CountriesList</h1>
        <div class="country-cards">
            
            <For each={countriesToDisplay()}>{(country,i) =>
                <A href={`/country-detail/${encodeURIComponent(country.name.common)}`} class="card">
                    <h2>{ country.name.common }</h2>
                    <img alt={ country.flags.alt || 'Flag of country ' + country.name.common } src={ country.flags.png }></img>
                </A>
            }</For>
            
        </div>
      </main>
    );
  }
  