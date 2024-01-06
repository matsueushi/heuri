/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getContest = /* GraphQL */ `query GetContest($id: ID!) {
  getContest(id: $id) {
    id
    name
    workingDir
    description
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetContestQueryVariables,
  APITypes.GetContestQuery
>;
export const listContests = /* GraphQL */ `query ListContests(
  $filter: ModelContestFilterInput
  $limit: Int
  $nextToken: String
) {
  listContests(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      workingDir
      description
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListContestsQueryVariables,
  APITypes.ListContestsQuery
>;
export const getSubmission = /* GraphQL */ `query GetSubmission($id: ID!) {
  getSubmission(id: $id) {
    id
    contestId
    functionName
    description
    status
    testcases
    score
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetSubmissionQueryVariables,
  APITypes.GetSubmissionQuery
>;
export const listSubmissions = /* GraphQL */ `query ListSubmissions(
  $filter: ModelSubmissionFilterInput
  $limit: Int
  $nextToken: String
) {
  listSubmissions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      contestId
      functionName
      description
      status
      testcases
      score
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSubmissionsQueryVariables,
  APITypes.ListSubmissionsQuery
>;
export const getTestCase = /* GraphQL */ `query GetTestCase($id: ID!) {
  getTestCase(id: $id) {
    id
    submissionId
    seed
    status
    score
    input
    output
    startedAt
    endedAt
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetTestCaseQueryVariables,
  APITypes.GetTestCaseQuery
>;
export const listTestCases = /* GraphQL */ `query ListTestCases(
  $filter: ModelTestCaseFilterInput
  $limit: Int
  $nextToken: String
) {
  listTestCases(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      submissionId
      seed
      status
      score
      input
      output
      startedAt
      endedAt
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTestCasesQueryVariables,
  APITypes.ListTestCasesQuery
>;
