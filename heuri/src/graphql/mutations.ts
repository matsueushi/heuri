/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createContest = /* GraphQL */ `mutation CreateContest(
  $input: CreateContestInput!
  $condition: ModelContestConditionInput
) {
  createContest(input: $input, condition: $condition) {
    id
    name
    description
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateContestMutationVariables,
  APITypes.CreateContestMutation
>;
export const updateContest = /* GraphQL */ `mutation UpdateContest(
  $input: UpdateContestInput!
  $condition: ModelContestConditionInput
) {
  updateContest(input: $input, condition: $condition) {
    id
    name
    description
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateContestMutationVariables,
  APITypes.UpdateContestMutation
>;
export const deleteContest = /* GraphQL */ `mutation DeleteContest(
  $input: DeleteContestInput!
  $condition: ModelContestConditionInput
) {
  deleteContest(input: $input, condition: $condition) {
    id
    name
    description
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteContestMutationVariables,
  APITypes.DeleteContestMutation
>;
export const createSubmission = /* GraphQL */ `mutation CreateSubmission(
  $input: CreateSubmissionInput!
  $condition: ModelSubmissionConditionInput
) {
  createSubmission(input: $input, condition: $condition) {
    id
    contestId
    func
    description
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateSubmissionMutationVariables,
  APITypes.CreateSubmissionMutation
>;
export const updateSubmission = /* GraphQL */ `mutation UpdateSubmission(
  $input: UpdateSubmissionInput!
  $condition: ModelSubmissionConditionInput
) {
  updateSubmission(input: $input, condition: $condition) {
    id
    contestId
    func
    description
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateSubmissionMutationVariables,
  APITypes.UpdateSubmissionMutation
>;
export const deleteSubmission = /* GraphQL */ `mutation DeleteSubmission(
  $input: DeleteSubmissionInput!
  $condition: ModelSubmissionConditionInput
) {
  deleteSubmission(input: $input, condition: $condition) {
    id
    contestId
    func
    description
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteSubmissionMutationVariables,
  APITypes.DeleteSubmissionMutation
>;
