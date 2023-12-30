import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from "react-admin";
import { CognitoAuthProvider, Login } from "ra-auth-cognito";
import { CognitoUserPool } from "amazon-cognito-identity-js";
import { dataProvider } from "./dataProvider";

import amplifyconfig from "./amplifyconfiguration.json";
const userPool = new CognitoUserPool({
    UserPoolId: amplifyconfig.aws_user_pools_id,
    ClientId: amplifyconfig.aws_user_pools_web_client_id,
});
const authProvider = CognitoAuthProvider(userPool);

export const App = () => {
    console.log(amplifyconfig);
    return (
        <Admin
            dataProvider={dataProvider}
            authProvider={authProvider}
            loginPage={Login}
        >
            <Resource name="posts" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
            <Resource name="comments" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
        </Admin>
    );
};

