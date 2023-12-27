import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/api";
import { type AuthUser } from "aws-amplify/auth";
import { type UseAuthenticator } from "@aws-amplify/ui-react-core";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import amplifyconfig from "./amplifyconfiguration.json";

import { Refine } from "@refinedev/core";
import routerBindings, { NavigateToResource, UnsavedChangesNotifier } from "@refinedev/react-router-v6";
// import dataProvider from "@refinedev/simple-rest";
import { amplifyDataProvider } from "./dataProviders";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";

import { Layout } from "./components/layout";


import "./App.css";
import { CreateContest, EditContest, ContestList, ShowContest } from "./pages/contests";

Amplify.configure(amplifyconfig);

type AppProps = {
  signOut?: UseAuthenticator["signOut"]; //() => void;
  user?: AuthUser;
};

const client = generateClient();
const dataProvider = amplifyDataProvider(client);

const App = ({ signOut, user }: AppProps): JSX.Element => {
  return (
    <BrowserRouter>
      <Refine
        routerProvider={routerBindings}
        // dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
        dataProvider={dataProvider}
        resources={[
          {
            name: "contests",
            list: "/contests",
            show: "/contests/show/:id",
            create: "/contests/create",
            edit: "/contests/edit/:id",
          },
        ]}
        options={{
          syncWithLocation: true,
          warnWhenUnsavedChanges: true,
        }}
      >
        <Routes>
          <Route
            element={
              <Layout>
                <button onClick={signOut} >
                  SignOut
                </button>
                <Outlet />
              </Layout>
            }
          >
            <Route index element={<NavigateToResource resource="contests" />} />
            <Route path="contests">
              <Route index element={<ContestList />} />
              <Route path="show/:id" element={<ShowContest />} />
              <Route path="edit/:id" element={<EditContest />} />
              <Route path="create" element={<CreateContest />} />
            </Route>
          </Route>
        </Routes>
        <UnsavedChangesNotifier />
      </Refine >
    </BrowserRouter >
  );
};

// サインアップしない
const withAuthenticatorOptions = {
  hideSignUp: true,
};

const AppWithAuth = withAuthenticator(App, withAuthenticatorOptions);

export default AppWithAuth;
