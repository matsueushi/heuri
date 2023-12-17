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
    description
    submissions {
      nextToken
      __typename
    }
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
    contestID
    func
    description
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
      contestID
      func
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
  APITypes.ListSubmissionsQueryVariables,
  APITypes.ListSubmissionsQuery
>;
export const submissionsByContestID = /* GraphQL */ `query SubmissionsByContestID(
  $contestID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelSubmissionFilterInput
  $limit: Int
  $nextToken: String
) {
  submissionsByContestID(
    contestID: $contestID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      contestID
      func
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
  APITypes.SubmissionsByContestIDQueryVariables,
  APITypes.SubmissionsByContestIDQuery
>;
