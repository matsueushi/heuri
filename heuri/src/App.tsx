import { Amplify } from "aws-amplify";
import {
    Admin, Resource,
    // ListGuesser, EditGuesser, ShowGuesser
} from "react-admin";
import { Route } from "react-router-dom";
import { CognitoAuthProvider, Login } from "ra-auth-cognito";
import { CognitoUserPool } from "amazon-cognito-identity-js";

import { dataProvider as fakeDataProvider } from "./providers/FakeDataProvider";
import { buildDataProvider } from "./providers";

import amplifyconfig from "./amplifyconfiguration.json";
import * as mutations from "./graphql/mutations";
import * as queries from "./graphql/queries";

import contests from "./components/contests";
import submissions from "./components/submissions";
import { SubmissionList } from "./components/submissions/SubmissionList";

Amplify.configure(amplifyconfig);

const userPool = new CognitoUserPool({
    UserPoolId: amplifyconfig.aws_user_pools_id,
    ClientId: amplifyconfig.aws_user_pools_web_client_id,
});
const authProvider = CognitoAuthProvider(userPool);

const dataProvider = buildDataProvider({ queries, mutations });

export const App = () => {
    return (
        <Admin
            dataProvider={fakeDataProvider}
            // dataProvider={dataProvider}
            authProvider={authProvider}
            loginPage={Login}
        >
            <Resource {...contests}>
                <Route path=":id/submissions" element={<SubmissionList />} />
            </Resource>
            <Resource {...submissions} />
        </Admin>
    );
};

