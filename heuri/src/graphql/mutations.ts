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
    functionName
    description
    status
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
    functionName
    description
    status
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
    functionName
    description
    status
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
export const createTestCase = /* GraphQL */ `mutation CreateTestCase(
  $input: CreateTestCaseInput!
  $condition: ModelTestCaseConditionInput
) {
  createTestCase(input: $input, condition: $condition) {
    id
    submissionId
    status
    seed
    score
    startedAt
    endedAt
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTestCaseMutationVariables,
  APITypes.CreateTestCaseMutation
>;
export const updateTestCase = /* GraphQL */ `mutation UpdateTestCase(
  $input: UpdateTestCaseInput!
  $condition: ModelTestCaseConditionInput
) {
  updateTestCase(input: $input, condition: $condition) {
    id
    submissionId
    status
    seed
    score
    startedAt
    endedAt
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTestCaseMutationVariables,
  APITypes.UpdateTestCaseMutation
>;
export const deleteTestCase = /* GraphQL */ `mutation DeleteTestCase(
  $input: DeleteTestCaseInput!
  $condition: ModelTestCaseConditionInput
) {
  deleteTestCase(input: $input, condition: $condition) {
    id
    submissionId
    status
    seed
    score
    startedAt
    endedAt
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTestCaseMutationVariables,
  APITypes.DeleteTestCaseMutation
>;
