import { Amplify } from "aws-amplify";
import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from "react-admin";
import { CognitoAuthProvider, Login } from "ra-auth-cognito";
import { CognitoUserPool } from "amazon-cognito-identity-js";

import { dataProvider as fakeDataProvider } from "./providers/fakeDataProvider";
import { buildDataProvider } from "./providers";

import amplifyconfig from "./amplifyconfiguration.json";
import * as mutations from "./graphql/mutations";
import * as queries from "./graphql/queries";

Amplify.configure(amplifyconfig);

const userPool = new CognitoUserPool({
    UserPoolId: amplifyconfig.aws_user_pools_id,
    ClientId: amplifyconfig.aws_user_pools_web_client_id,
});
const authProvider = CognitoAuthProvider(userPool);

const dataProvider = buildDataProvider({ queries, mutations });

export const App = () => {
    console.log(amplifyconfig);
    return (
        <Admin
            dataProvider={fakeDataProvider}
            // dataProvider={dataProvider}
            authProvider={authProvider}
            loginPage={Login}
        >
            <Resource name="contests" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
            {/* <Resource name="submissions" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} /> */}
        </Admin>
    );
};

