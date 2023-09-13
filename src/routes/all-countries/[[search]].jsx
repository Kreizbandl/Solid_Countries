import jsonCountries from '../../countries.json';
import { createEffect, createSignal, onCleanup } from "solid-js";
import { useParams } from "@solidjs/router";
import { A } from "@solidjs/router"

export default function Search() {

    const params = useParams()
    const [countriesToDisplay, setCountriesToDisplay] = createSignal()
    const [heading, setHeading] = createSignal()
    setHeading('All Countries')
    
    //sort countries
    const sortedJsonCountries = jsonCountries.sort((a,b) => {
        return a.name.common.localeCompare(b.name.common)
    })

    createEffect(() => {
      let filteredCountries = sortedJsonCountries
      setHeading('All Countries')
      if(params.search){
        setHeading('Found countries for ' + params.search)
        filteredCountries = filteredCountries.filter(country => {
          return country.name.common.includes(params.search)
        });
      }
      if(filteredCountries.length === 0){
        setHeading('Nothing found for ' + params.search)
      }

      setCountriesToDisplay(filteredCountries)

      console.log(countriesToDisplay)

      onCleanup(() => {})
    })


    return (
      <main>
        <h1>{ heading }</h1>
        <div class="country-cards">
            
            <For each={countriesToDisplay()}>{(country,i) =>
                <A href={`/country-detail/${encodeURIComponent(country.name.common)}`} class="card" aria-label={`Got to detail screen of ${ country.name.common }`}>
                    <h2>{ country.name.common }</h2>
                    <img alt={ country.flags.alt || 'Flag of country ' + country.name.common } src={ country.flags.png }></img>
                </A>
            }</For>
            
        </div>
      </main>
    );
  }
  