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
export default function Root() {
  return (
    <Html lang="en">
      <Head>
        {/* if set valid for all routes */}
        <Title>SolidCountries</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>

            <Navbar/>

            {/* loads corresponding components */}
            <Routes>
              <Route path="/country-detail/:country" component={CountryDetail} />
              <FileRoutes />
            </Routes>

          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
