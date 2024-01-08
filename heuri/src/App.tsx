import { useState } from "react";
import { Route } from "react-router-dom";
import {
    Admin, Resource,
    // ListGuesser, EditGuesser, ShowGuesser
} from "react-admin";

import { Amplify } from "aws-amplify";
import { CognitoAuthProvider, Login } from "ra-auth-cognito";
import { CognitoUserPool } from "amazon-cognito-identity-js";

import { dataProvider as fakeDataProvider } from "./providers/FakeDataProvider";
import { buildDataProvider } from "./providers";

import amplifyconfig from "./amplifyconfiguration.json";
import * as mutations from "./graphql/mutations";
import * as queries from "./graphql/queries";

import { TestContext } from "./contexts/testContexts";

import contests from "./components/contests";
import submissions from "./components/submissions";
import testCases from "./components/testCases";
import { SubmissionCompare } from "./components/submissions/SubmissionCompare";
import { SubmissionCompareWith } from "./components/submissions/SubmissionCompareWith";
import { TestCaseCompareWith } from "./components/testCases/TestCaseCompareWith";
import { QueryClient } from "react-query";


Amplify.configure(amplifyconfig);

const userPool = new CognitoUserPool({
    UserPoolId: amplifyconfig.aws_user_pools_id,
    ClientId: amplifyconfig.aws_user_pools_web_client_id,
});
const authProvider = CognitoAuthProvider(userPool);

export const App = () => {
    const [isTest] = useState(false);

    const dataProvider = isTest ? fakeDataProvider : buildDataProvider({ queries, mutations });
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 1 * 60 * 1000, // 1 minutes
            },
        },
    });

    return (
        <TestContext.Provider value={isTest}>
            <Admin
                dataProvider={dataProvider}
                authProvider={authProvider}
                queryClient={queryClient}
                loginPage={Login}
            >
                <Resource {...contests} />
                <Resource {...submissions}>
                    <Route path=":id/compare/" element={<SubmissionCompare />} />
                    <Route path=":id/compare/:targetId" element={<SubmissionCompareWith />} />
                </Resource>
                <Resource {...testCases} >
                    <Route path=":id/compare/:targetId" element={<TestCaseCompareWith />} />
                </Resource>
            </Admin>
        </TestContext.Provider >
    );
};

