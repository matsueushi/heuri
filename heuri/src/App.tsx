import { type AuthUser } from "aws-amplify/auth";
import { type UseAuthenticator } from "@aws-amplify/ui-react-core";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import { Refine } from "@refinedev/core";
import routerBindings, { NavigateToResource, UnsavedChangesNotifier } from "@refinedev/react-router-v6";
import dataProvider from "@refinedev/simple-rest";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import { HeadlessInferencer } from "@refinedev/inferencer/headless";

import { Layout } from "./components/layout";

import "./App.css";

type AppProps = {
  signOut?: UseAuthenticator["signOut"]; //() => void;
  user?: AuthUser;
};

const App = ({ signOut, user }: AppProps) => {
  return (
    <BrowserRouter>
      <Refine
        routerProvider={routerBindings}
        dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
        resources={[
          {
            name: "blog_posts",
            list: "/blog-posts",
            show: "/blog-posts/show/:id",
            create: "/blog-posts/create",
            edit: "/blog-posts/edit/:id",
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
                Hello, user {user?.username}
                <button onClick={signOut} >
                  SignOut
                </button>
                <Outlet />
              </Layout>
            }
          >
            <Route index element={<NavigateToResource resource="blog_posts" />} />
            <Route path="blog-posts">
              <Route index element={<HeadlessInferencer />} />
              <Route path="show/:id" element={<HeadlessInferencer />} />
              <Route path="edit/:id" element={<HeadlessInferencer />} />
              <Route path="create" element={<HeadlessInferencer />} />
            </Route>
          </Route>
        </Routes>
        <UnsavedChangesNotifier />
      </Refine>
    </BrowserRouter>
  );
};

// サインアップしない
const withAuthenticatorOptions = {
  hideSignUp: true,
};

const AppWithAuth = withAuthenticator(App, withAuthenticatorOptions);

export default AppWithAuth;
