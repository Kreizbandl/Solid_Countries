import { useParams } from "solid-start";
import jsonCountries from '../../countries.json';

export default function CountryDetail() {

    const params = useParams();

    const country = jsonCountries.find(country => country.name.common === decodeURIComponent(params.country));
    console.log(country);

    return (
      <main>
        <div class="country-detail">
            <h1>{ country.name.common }</h1>
            <img alt={ country.flags.alt || 'Flag of country ' + country.name.common } src={ country.flags.png }></img>
            <p>Population: { country.population }</p>
        </div>
      </main>
    );
  }
  