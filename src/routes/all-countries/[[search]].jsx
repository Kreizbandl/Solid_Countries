import jsonCountries from '../../countries.json';
import { createEffect, createSignal, onCleanup } from "solid-js";
import { useParams } from "@solidjs/router";
import { A } from "@solidjs/router"

export default function Search() {

  const params = useParams()
  const [countriesToDisplay, setCountriesToDisplay] = createSignal()
  const [heading, setHeading] = createSignal()
  setHeading('All Countries')

  /* Sortiert Länder alphabetisch */
  const sortedJsonCountries = jsonCountries.sort((a, b) => {
    return a.name.common.localeCompare(b.name.common)
  })
  sortedJsonCountries.forEach(country => {
    if (!country.flags.alt) {
      country.flags.alt = 'Flag of country "' + country.name.common + '"';
    }
  });

  createEffect(() => {
    let filteredCountries = sortedJsonCountries
    setHeading('All Countries')
    /* Zeigt nur die entsprechenden Länder, wenn ein Suchbegriff vorhanden */
    if (params.search) {
      setHeading('Found countries for ' + params.search)
      /* Verwendet nur passende Länder */
      filteredCountries = filteredCountries.filter(country => {
        return country.name.common.includes(params.search)
      });
    }
    /* Zeigt Fehlermeldung, wenn keine Länder gefunden wurden */
    if (filteredCountries.length === 0) {
      setHeading('Nothing found for ' + params.search)
    }

    setCountriesToDisplay(filteredCountries)

    onCleanup(() => { })
  })


  return (
    <main>
      {/* Überschrift */}
      <h1>{heading}</h1>
      <div class="country-cards">
        {/* Durchlaufen der Liste von Ländern */}
        <For each={countriesToDisplay()}>{(country, i) =>
          /* Link zur Detailansicht des Landes mit Label und alternativem Bildtext */
          <A href={`/country-detail/${encodeURIComponent(country.name.common)}`} class="card"
            aria-label={`Got to detail screen of ${country.name.common}`}>
            <h2>{country.name.common}</h2>
            <img alt={country.flags.alt}
              src={country.flags.png}></img>
          </A>
        }</For>

      </div>
    </main>
  );
}
