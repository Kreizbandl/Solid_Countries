import { useParams } from "solid-start";
import jsonCountries from '../../countries.json';

export default function CountryDetail() {

    const params = useParams();

    /* Suche der Länder mittels Suchbegriff */
    const country = jsonCountries.find(
      country => country.name.common === decodeURIComponent(params.country));

    return (
      <main>
        <div class="country-detail">
            {/* Informationen eines Landes mit Bild mit alternativem Text */}
            <h1>{ country.name.common }</h1>
            <img alt={ country.flags.alt || 'Flag of country ' + country.name.common } 
              src={ country.flags.png }></img>
            <p>Population: { country.population }</p>
        </div>
      </main>
    );
  }
  