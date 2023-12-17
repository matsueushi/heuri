/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateContest = /* GraphQL */ `subscription OnCreateContest(
  $filter: ModelSubscriptionContestFilterInput
  $owner: String
) {
  onCreateContest(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateContestSubscriptionVariables,
  APITypes.OnCreateContestSubscription
>;
export const onUpdateContest = /* GraphQL */ `subscription OnUpdateContest(
  $filter: ModelSubscriptionContestFilterInput
  $owner: String
) {
  onUpdateContest(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateContestSubscriptionVariables,
  APITypes.OnUpdateContestSubscription
>;
export const onDeleteContest = /* GraphQL */ `subscription OnDeleteContest(
  $filter: ModelSubscriptionContestFilterInput
  $owner: String
) {
  onDeleteContest(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteContestSubscriptionVariables,
  APITypes.OnDeleteContestSubscription
>;
export const onCreateSubmission = /* GraphQL */ `subscription OnCreateSubmission(
  $filter: ModelSubscriptionSubmissionFilterInput
  $owner: String
) {
  onCreateSubmission(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateSubmissionSubscriptionVariables,
  APITypes.OnCreateSubmissionSubscription
>;
export const onUpdateSubmission = /* GraphQL */ `subscription OnUpdateSubmission(
  $filter: ModelSubscriptionSubmissionFilterInput
  $owner: String
) {
  onUpdateSubmission(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateSubmissionSubscriptionVariables,
  APITypes.OnUpdateSubmissionSubscription
>;
export const onDeleteSubmission = /* GraphQL */ `subscription OnDeleteSubmission(
  $filter: ModelSubscriptionSubmissionFilterInput
  $owner: String
) {
  onDeleteSubmission(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteSubmissionSubscriptionVariables,
  APITypes.OnDeleteSubmissionSubscription
>;
