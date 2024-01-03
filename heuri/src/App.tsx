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
import testcases from "./components/testcases";
import { TestCaseList } from "./components/testcases/TestCaseList";
import { useState } from "react";
import { TestContext } from "./contexts/testContexts";

Amplify.configure(amplifyconfig);

const userPool = new CognitoUserPool({
    UserPoolId: amplifyconfig.aws_user_pools_id,
    ClientId: amplifyconfig.aws_user_pools_web_client_id,
});
const authProvider = CognitoAuthProvider(userPool);

export const App = () => {
    const [isTest] = useState(true);

    const dataProvider = isTest ? fakeDataProvider : buildDataProvider({ queries, mutations });

    return (
        <TestContext.Provider value={isTest}>
            <Admin
                dataProvider={dataProvider}
                authProvider={authProvider}
                loginPage={Login}
            >
                <Resource {...contests}>
                    <Route path=":id/submissions" element={<SubmissionList />} />
                </Resource>
                <Resource {...submissions}>
                    <Route path=":id/testcases" element={<TestCaseList />} />
                </Resource>
                <Resource {...testcases} />
            </Admin>
        </TestContext.Provider >
    );
};

