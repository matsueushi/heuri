import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/api";
import { type AuthUser } from "aws-amplify/auth";
import { type UseAuthenticator } from "@aws-amplify/ui-react-core";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import amplifyconfig from "./amplifyconfiguration.json";

import { Refine } from "@refinedev/core";
import routerBindings, { NavigateToResource, UnsavedChangesNotifier } from "@refinedev/react-router-v6";
import dataProvider from "@refinedev/simple-rest";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";

import { Layout } from "./components/layout";
import { listContests } from "./graphql/queries";

import "./App.css";
import { createContest } from "./graphql/mutations";
import { CreatePost, EditPost, PostList, ShowPost } from "./pages/contests";

Amplify.configure(amplifyconfig);

const client = generateClient();

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
                Hello, user {user?.username}
                <br />
                <button onClick={signOut} >
                  SignOut
                </button>
                <br />
                <button onClick={async () => {
                  try {
                    await client.graphql({
                      query: createContest, variables: {
                        input: {
                          name: "aaa",
                          description: "xxx",
                        }
                      }
                    });
                  } catch (errors) {
                    console.error(errors);
                  }
                }}>
                  create
                </button>
                <button onClick={async () => {
                  try {
                    const response = await client.graphql({ query: listContests });
                    response.data.listContests.items.map((cont, i) => console.log(cont.name, i));
                  } catch (errors) {
                    console.error(errors);
                  }
                }}>
                  list contests
                </button>
                <Outlet />
              </Layout>
            }
          >
            <Route index element={<NavigateToResource resource="blog_posts" />} />
            <Route path="contests">
              <Route index element={<PostList />} />
              <Route path="show/:id" element={<ShowPost />} />
              <Route path="edit/:id" element={<EditPost />} />
              <Route path="create" element={<CreatePost />} />
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
