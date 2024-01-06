/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateContestInput = {
  id?: string | null,
  name: string,
  description: string,
};

export type ModelContestConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelContestConditionInput | null > | null,
  or?: Array< ModelContestConditionInput | null > | null,
  not?: ModelContestConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Contest = {
  __typename: "Contest",
  id: string,
  name: string,
  description: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateContestInput = {
  id: string,
  name?: string | null,
  description?: string | null,
};

export type DeleteContestInput = {
  id: string,
};

export type CreateSubmissionInput = {
  id?: string | null,
  contestId: string,
  functionName: string,
  description: string,
  status: string,
};

export type ModelSubmissionConditionInput = {
  contestId?: ModelIDInput | null,
  functionName?: ModelStringInput | null,
  description?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelSubmissionConditionInput | null > | null,
  or?: Array< ModelSubmissionConditionInput | null > | null,
  not?: ModelSubmissionConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Submission = {
  __typename: "Submission",
  id: string,
  contestId: string,
  functionName: string,
  description: string,
  status: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateSubmissionInput = {
  id: string,
  contestId?: string | null,
  functionName?: string | null,
  description?: string | null,
  status?: string | null,
};

export type DeleteSubmissionInput = {
  id: string,
};

export type CreateTestCaseInput = {
  id?: string | null,
  submissionId: string,
  status: string,
  seed: number,
  score?: number | null,
  startedAt?: string | null,
  endedAt?: string | null,
};

export type ModelTestCaseConditionInput = {
  submissionId?: ModelIDInput | null,
  status?: ModelStringInput | null,
  seed?: ModelIntInput | null,
  score?: ModelIntInput | null,
  startedAt?: ModelStringInput | null,
  endedAt?: ModelStringInput | null,
  and?: Array< ModelTestCaseConditionInput | null > | null,
  or?: Array< ModelTestCaseConditionInput | null > | null,
  not?: ModelTestCaseConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type TestCase = {
  __typename: "TestCase",
  id: string,
  submissionId: string,
  status: string,
  seed: number,
  score?: number | null,
  startedAt?: string | null,
  endedAt?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateTestCaseInput = {
  id: string,
  submissionId?: string | null,
  status?: string | null,
  seed?: number | null,
  score?: number | null,
  startedAt?: string | null,
  endedAt?: string | null,
};

export type DeleteTestCaseInput = {
  id: string,
};

export type ModelContestFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelContestFilterInput | null > | null,
  or?: Array< ModelContestFilterInput | null > | null,
  not?: ModelContestFilterInput | null,
};

export type ModelContestConnection = {
  __typename: "ModelContestConnection",
  items:  Array<Contest | null >,
  nextToken?: string | null,
};

export type ModelSubmissionFilterInput = {
  id?: ModelIDInput | null,
  contestId?: ModelIDInput | null,
  functionName?: ModelStringInput | null,
  description?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelSubmissionFilterInput | null > | null,
  or?: Array< ModelSubmissionFilterInput | null > | null,
  not?: ModelSubmissionFilterInput | null,
};

export type ModelSubmissionConnection = {
  __typename: "ModelSubmissionConnection",
  items:  Array<Submission | null >,
  nextToken?: string | null,
};

export type ModelTestCaseFilterInput = {
  id?: ModelIDInput | null,
  submissionId?: ModelIDInput | null,
  status?: ModelStringInput | null,
  seed?: ModelIntInput | null,
  score?: ModelIntInput | null,
  startedAt?: ModelStringInput | null,
  endedAt?: ModelStringInput | null,
  and?: Array< ModelTestCaseFilterInput | null > | null,
  or?: Array< ModelTestCaseFilterInput | null > | null,
  not?: ModelTestCaseFilterInput | null,
};

export type ModelTestCaseConnection = {
  __typename: "ModelTestCaseConnection",
  items:  Array<TestCase | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionContestFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionContestFilterInput | null > | null,
  or?: Array< ModelSubscriptionContestFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionSubmissionFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  contestId?: ModelSubscriptionIDInput | null,
  functionName?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSubmissionFilterInput | null > | null,
  or?: Array< ModelSubscriptionSubmissionFilterInput | null > | null,
};

export type ModelSubscriptionTestCaseFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  submissionId?: ModelSubscriptionIDInput | null,
  status?: ModelSubscriptionStringInput | null,
  seed?: ModelSubscriptionIntInput | null,
  score?: ModelSubscriptionIntInput | null,
  startedAt?: ModelSubscriptionStringInput | null,
  endedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTestCaseFilterInput | null > | null,
  or?: Array< ModelSubscriptionTestCaseFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type CreateContestMutationVariables = {
  input: CreateContestInput,
  condition?: ModelContestConditionInput | null,
};

export type CreateContestMutation = {
  createContest?:  {
    __typename: "Contest",
    id: string,
    name: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateContestMutationVariables = {
  input: UpdateContestInput,
  condition?: ModelContestConditionInput | null,
};

export type UpdateContestMutation = {
  updateContest?:  {
    __typename: "Contest",
    id: string,
    name: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteContestMutationVariables = {
  input: DeleteContestInput,
  condition?: ModelContestConditionInput | null,
};

export type DeleteContestMutation = {
  deleteContest?:  {
    __typename: "Contest",
    id: string,
    name: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateSubmissionMutationVariables = {
  input: CreateSubmissionInput,
  condition?: ModelSubmissionConditionInput | null,
};

export type CreateSubmissionMutation = {
  createSubmission?:  {
    __typename: "Submission",
    id: string,
    contestId: string,
    functionName: string,
    description: string,
    status: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateSubmissionMutationVariables = {
  input: UpdateSubmissionInput,
  condition?: ModelSubmissionConditionInput | null,
};

export type UpdateSubmissionMutation = {
  updateSubmission?:  {
    __typename: "Submission",
    id: string,
    contestId: string,
    functionName: string,
    description: string,
    status: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteSubmissionMutationVariables = {
  input: DeleteSubmissionInput,
  condition?: ModelSubmissionConditionInput | null,
};

export type DeleteSubmissionMutation = {
  deleteSubmission?:  {
    __typename: "Submission",
    id: string,
    contestId: string,
    functionName: string,
    description: string,
    status: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateTestCaseMutationVariables = {
  input: CreateTestCaseInput,
  condition?: ModelTestCaseConditionInput | null,
};

export type CreateTestCaseMutation = {
  createTestCase?:  {
    __typename: "TestCase",
    id: string,
    submissionId: string,
    status: string,
    seed: number,
    score?: number | null,
    startedAt?: string | null,
    endedAt?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateTestCaseMutationVariables = {
  input: UpdateTestCaseInput,
  condition?: ModelTestCaseConditionInput | null,
};

export type UpdateTestCaseMutation = {
  updateTestCase?:  {
    __typename: "TestCase",
    id: string,
    submissionId: string,
    status: string,
    seed: number,
    score?: number | null,
    startedAt?: string | null,
    endedAt?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteTestCaseMutationVariables = {
  input: DeleteTestCaseInput,
  condition?: ModelTestCaseConditionInput | null,
};

export type DeleteTestCaseMutation = {
  deleteTestCase?:  {
    __typename: "TestCase",
    id: string,
    submissionId: string,
    status: string,
    seed: number,
    score?: number | null,
    startedAt?: string | null,
    endedAt?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetContestQueryVariables = {
  id: string,
};

export type GetContestQuery = {
  getContest?:  {
    __typename: "Contest",
    id: string,
    name: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListContestsQueryVariables = {
  filter?: ModelContestFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListContestsQuery = {
  listContests?:  {
    __typename: "ModelContestConnection",
    items:  Array< {
      __typename: "Contest",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSubmissionQueryVariables = {
  id: string,
};

export type GetSubmissionQuery = {
  getSubmission?:  {
    __typename: "Submission",
    id: string,
    contestId: string,
    functionName: string,
    description: string,
    status: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListSubmissionsQueryVariables = {
  filter?: ModelSubmissionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSubmissionsQuery = {
  listSubmissions?:  {
    __typename: "ModelSubmissionConnection",
    items:  Array< {
      __typename: "Submission",
      id: string,
      contestId: string,
      functionName: string,
      description: string,
      status: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTestCaseQueryVariables = {
  id: string,
};

export type GetTestCaseQuery = {
  getTestCase?:  {
    __typename: "TestCase",
    id: string,
    submissionId: string,
    status: string,
    seed: number,
    score?: number | null,
    startedAt?: string | null,
    endedAt?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListTestCasesQueryVariables = {
  filter?: ModelTestCaseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTestCasesQuery = {
  listTestCases?:  {
    __typename: "ModelTestCaseConnection",
    items:  Array< {
      __typename: "TestCase",
      id: string,
      submissionId: string,
      status: string,
      seed: number,
      score?: number | null,
      startedAt?: string | null,
      endedAt?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateContestSubscriptionVariables = {
  filter?: ModelSubscriptionContestFilterInput | null,
  owner?: string | null,
};

export type OnCreateContestSubscription = {
  onCreateContest?:  {
    __typename: "Contest",
    id: string,
    name: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateContestSubscriptionVariables = {
  filter?: ModelSubscriptionContestFilterInput | null,
  owner?: string | null,
};

export type OnUpdateContestSubscription = {
  onUpdateContest?:  {
    __typename: "Contest",
    id: string,
    name: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteContestSubscriptionVariables = {
  filter?: ModelSubscriptionContestFilterInput | null,
  owner?: string | null,
};

export type OnDeleteContestSubscription = {
  onDeleteContest?:  {
    __typename: "Contest",
    id: string,
    name: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateSubmissionSubscriptionVariables = {
  filter?: ModelSubscriptionSubmissionFilterInput | null,
  owner?: string | null,
};

export type OnCreateSubmissionSubscription = {
  onCreateSubmission?:  {
    __typename: "Submission",
    id: string,
    contestId: string,
    functionName: string,
    description: string,
    status: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateSubmissionSubscriptionVariables = {
  filter?: ModelSubscriptionSubmissionFilterInput | null,
  owner?: string | null,
};

export type OnUpdateSubmissionSubscription = {
  onUpdateSubmission?:  {
    __typename: "Submission",
    id: string,
    contestId: string,
    functionName: string,
    description: string,
    status: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteSubmissionSubscriptionVariables = {
  filter?: ModelSubscriptionSubmissionFilterInput | null,
  owner?: string | null,
};

export type OnDeleteSubmissionSubscription = {
  onDeleteSubmission?:  {
    __typename: "Submission",
    id: string,
    contestId: string,
    functionName: string,
    description: string,
    status: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateTestCaseSubscriptionVariables = {
  filter?: ModelSubscriptionTestCaseFilterInput | null,
  owner?: string | null,
};

export type OnCreateTestCaseSubscription = {
  onCreateTestCase?:  {
    __typename: "TestCase",
    id: string,
    submissionId: string,
    status: string,
    seed: number,
    score?: number | null,
    startedAt?: string | null,
    endedAt?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateTestCaseSubscriptionVariables = {
  filter?: ModelSubscriptionTestCaseFilterInput | null,
  owner?: string | null,
};

export type OnUpdateTestCaseSubscription = {
  onUpdateTestCase?:  {
    __typename: "TestCase",
    id: string,
    submissionId: string,
    status: string,
    seed: number,
    score?: number | null,
    startedAt?: string | null,
    endedAt?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteTestCaseSubscriptionVariables = {
  filter?: ModelSubscriptionTestCaseFilterInput | null,
  owner?: string | null,
};

export type OnDeleteTestCaseSubscription = {
  onDeleteTestCase?:  {
    __typename: "TestCase",
    id: string,
    submissionId: string,
    status: string,
    seed: number,
    score?: number | null,
    startedAt?: string | null,
    endedAt?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
