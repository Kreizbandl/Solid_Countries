// @refresh reload
import { Suspense } from "solid-js";
import {
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import { Route } from "@solidjs/router";
import Navbar from "~/components/Navbar";
import CountryDetail from "./routes/country-detail/[country]";
import "./root.css";
import Search from "./routes/all-countries/[[search]]";
export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>SolidCountries</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
            {/* Navigationsmenü */}
            <Navbar/>
            {/* Dynamische Einbindung der Seiten */}
            <Routes>
              {/* Detailansicht für ein bestimmtes Land */}
              <Route path="/country-detail/:country" component={CountryDetail} />
              {/* Seite mit allen Ländern und optoinalem Suchbegriff */}
              <Route path="/all-countries/:search?" component={Search} />
              {/* Datei-Routen */}
              <FileRoutes />
            </Routes>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
