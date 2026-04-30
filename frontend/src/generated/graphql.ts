import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  BigInt: { input: any; output: any };
};

export enum AgGridSortDirection {
  Asc = "asc",
  Desc = "desc",
}

export type AnchorSeqDateData = {
  __typename?: "AnchorSeqDateData";
  ANCHOR_ONCOTREE_CODE: Scalars["String"]["output"];
  ANCHOR_SEQUENCING_DATE: Scalars["String"]["output"];
  DMP_PATIENT_ID: Scalars["String"]["output"];
  MRN: Scalars["String"]["output"];
};

export type BamComplete = {
  __typename?: "BamComplete";
  date: Scalars["String"]["output"];
  status: Scalars["String"]["output"];
  temposHasEvent: Array<Tempo>;
  temposHasEventAggregate?: Maybe<BamCompleteTempoTemposHasEventAggregationSelection>;
  temposHasEventConnection: BamCompleteTemposHasEventConnection;
};

export type BamCompleteTemposHasEventArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  options?: InputMaybe<TempoOptions>;
  where?: InputMaybe<TempoWhere>;
};

export type BamCompleteTemposHasEventAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<TempoWhere>;
};

export type BamCompleteTemposHasEventConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<BamCompleteTemposHasEventConnectionSort>>;
  where?: InputMaybe<BamCompleteTemposHasEventConnectionWhere>;
};

export type BamCompleteAggregateSelection = {
  __typename?: "BamCompleteAggregateSelection";
  count: Scalars["Int"]["output"];
  date: StringAggregateSelection;
  status: StringAggregateSelection;
};

export type BamCompleteConnectInput = {
  temposHasEvent?: InputMaybe<
    Array<BamCompleteTemposHasEventConnectFieldInput>
  >;
};

export type BamCompleteConnectWhere = {
  node: BamCompleteWhere;
};

export type BamCompleteCreateInput = {
  date: Scalars["String"]["input"];
  status: Scalars["String"]["input"];
  temposHasEvent?: InputMaybe<BamCompleteTemposHasEventFieldInput>;
};

export type BamCompleteDeleteInput = {
  temposHasEvent?: InputMaybe<Array<BamCompleteTemposHasEventDeleteFieldInput>>;
};

export type BamCompleteDisconnectInput = {
  temposHasEvent?: InputMaybe<
    Array<BamCompleteTemposHasEventDisconnectFieldInput>
  >;
};

export type BamCompleteEdge = {
  __typename?: "BamCompleteEdge";
  cursor: Scalars["String"]["output"];
  node: BamComplete;
};

export type BamCompleteOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more BamCompleteSort objects to sort BamCompletes by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<BamCompleteSort>>;
};

export type BamCompleteRelationInput = {
  temposHasEvent?: InputMaybe<Array<BamCompleteTemposHasEventCreateFieldInput>>;
};

/** Fields to sort BamCompletes by. The order in which sorts are applied is not guaranteed when specifying many fields in one BamCompleteSort object. */
export type BamCompleteSort = {
  date?: InputMaybe<SortDirection>;
  status?: InputMaybe<SortDirection>;
};

export type BamCompleteTempoTemposHasEventAggregationSelection = {
  __typename?: "BamCompleteTempoTemposHasEventAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<BamCompleteTempoTemposHasEventNodeAggregateSelection>;
};

export type BamCompleteTempoTemposHasEventNodeAggregateSelection = {
  __typename?: "BamCompleteTempoTemposHasEventNodeAggregateSelection";
  accessLevel: StringAggregateSelection;
  billedBy: StringAggregateSelection;
  costCenter: StringAggregateSelection;
  custodianInformation: StringAggregateSelection;
  embargoDate: StringAggregateSelection;
  initialPipelineRunDate: StringAggregateSelection;
  smileTempoId: StringAggregateSelection;
};

export type BamCompleteTemposHasEventAggregateInput = {
  AND?: InputMaybe<Array<BamCompleteTemposHasEventAggregateInput>>;
  NOT?: InputMaybe<BamCompleteTemposHasEventAggregateInput>;
  OR?: InputMaybe<Array<BamCompleteTemposHasEventAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  node?: InputMaybe<BamCompleteTemposHasEventNodeAggregationWhereInput>;
};

export type BamCompleteTemposHasEventConnectFieldInput = {
  connect?: InputMaybe<Array<TempoConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  where?: InputMaybe<TempoConnectWhere>;
};

export type BamCompleteTemposHasEventConnection = {
  __typename?: "BamCompleteTemposHasEventConnection";
  edges: Array<BamCompleteTemposHasEventRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type BamCompleteTemposHasEventConnectionSort = {
  node?: InputMaybe<TempoSort>;
};

export type BamCompleteTemposHasEventConnectionWhere = {
  AND?: InputMaybe<Array<BamCompleteTemposHasEventConnectionWhere>>;
  NOT?: InputMaybe<BamCompleteTemposHasEventConnectionWhere>;
  OR?: InputMaybe<Array<BamCompleteTemposHasEventConnectionWhere>>;
  node?: InputMaybe<TempoWhere>;
};

export type BamCompleteTemposHasEventCreateFieldInput = {
  node: TempoCreateInput;
};

export type BamCompleteTemposHasEventDeleteFieldInput = {
  delete?: InputMaybe<TempoDeleteInput>;
  where?: InputMaybe<BamCompleteTemposHasEventConnectionWhere>;
};

export type BamCompleteTemposHasEventDisconnectFieldInput = {
  disconnect?: InputMaybe<TempoDisconnectInput>;
  where?: InputMaybe<BamCompleteTemposHasEventConnectionWhere>;
};

export type BamCompleteTemposHasEventFieldInput = {
  connect?: InputMaybe<Array<BamCompleteTemposHasEventConnectFieldInput>>;
  create?: InputMaybe<Array<BamCompleteTemposHasEventCreateFieldInput>>;
};

export type BamCompleteTemposHasEventNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<BamCompleteTemposHasEventNodeAggregationWhereInput>>;
  NOT?: InputMaybe<BamCompleteTemposHasEventNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<BamCompleteTemposHasEventNodeAggregationWhereInput>>;
  accessLevel_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  accessLevel_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  accessLevel_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  accessLevel_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  accessLevel_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  accessLevel_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  accessLevel_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  accessLevel_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  accessLevel_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  accessLevel_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  accessLevel_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  accessLevel_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  accessLevel_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  accessLevel_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  accessLevel_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  billedBy_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  billedBy_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  billedBy_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  billedBy_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  billedBy_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  billedBy_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  billedBy_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  billedBy_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  billedBy_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  billedBy_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  billedBy_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  billedBy_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  billedBy_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  billedBy_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  billedBy_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  costCenter_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  costCenter_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  costCenter_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  costCenter_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  costCenter_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  costCenter_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  costCenter_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  costCenter_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  costCenter_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  costCenter_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  costCenter_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  costCenter_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  costCenter_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  costCenter_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  costCenter_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  custodianInformation_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars["Float"]["input"]
  >;
  custodianInformation_AVERAGE_LENGTH_GT?: InputMaybe<
    Scalars["Float"]["input"]
  >;
  custodianInformation_AVERAGE_LENGTH_GTE?: InputMaybe<
    Scalars["Float"]["input"]
  >;
  custodianInformation_AVERAGE_LENGTH_LT?: InputMaybe<
    Scalars["Float"]["input"]
  >;
  custodianInformation_AVERAGE_LENGTH_LTE?: InputMaybe<
    Scalars["Float"]["input"]
  >;
  custodianInformation_LONGEST_LENGTH_EQUAL?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  custodianInformation_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  custodianInformation_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  custodianInformation_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  custodianInformation_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  custodianInformation_SHORTEST_LENGTH_EQUAL?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  custodianInformation_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  custodianInformation_SHORTEST_LENGTH_GTE?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  custodianInformation_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  custodianInformation_SHORTEST_LENGTH_LTE?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  embargoDate_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  embargoDate_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  embargoDate_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  embargoDate_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  embargoDate_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  embargoDate_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  embargoDate_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  embargoDate_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  embargoDate_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  embargoDate_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  embargoDate_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  embargoDate_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  embargoDate_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  embargoDate_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  embargoDate_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  initialPipelineRunDate_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars["Float"]["input"]
  >;
  initialPipelineRunDate_AVERAGE_LENGTH_GT?: InputMaybe<
    Scalars["Float"]["input"]
  >;
  initialPipelineRunDate_AVERAGE_LENGTH_GTE?: InputMaybe<
    Scalars["Float"]["input"]
  >;
  initialPipelineRunDate_AVERAGE_LENGTH_LT?: InputMaybe<
    Scalars["Float"]["input"]
  >;
  initialPipelineRunDate_AVERAGE_LENGTH_LTE?: InputMaybe<
    Scalars["Float"]["input"]
  >;
  initialPipelineRunDate_LONGEST_LENGTH_EQUAL?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  initialPipelineRunDate_LONGEST_LENGTH_GT?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  initialPipelineRunDate_LONGEST_LENGTH_GTE?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  initialPipelineRunDate_LONGEST_LENGTH_LT?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  initialPipelineRunDate_LONGEST_LENGTH_LTE?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  initialPipelineRunDate_SHORTEST_LENGTH_EQUAL?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  initialPipelineRunDate_SHORTEST_LENGTH_GT?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  initialPipelineRunDate_SHORTEST_LENGTH_GTE?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  initialPipelineRunDate_SHORTEST_LENGTH_LT?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  initialPipelineRunDate_SHORTEST_LENGTH_LTE?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  smileTempoId_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  smileTempoId_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  smileTempoId_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  smileTempoId_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  smileTempoId_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  smileTempoId_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  smileTempoId_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  smileTempoId_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  smileTempoId_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  smileTempoId_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  smileTempoId_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  smileTempoId_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  smileTempoId_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  smileTempoId_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  smileTempoId_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type BamCompleteTemposHasEventRelationship = {
  __typename?: "BamCompleteTemposHasEventRelationship";
  cursor: Scalars["String"]["output"];
  node: Tempo;
};

export type BamCompleteTemposHasEventUpdateConnectionInput = {
  node?: InputMaybe<TempoUpdateInput>;
};

export type BamCompleteTemposHasEventUpdateFieldInput = {
  connect?: InputMaybe<Array<BamCompleteTemposHasEventConnectFieldInput>>;
  create?: InputMaybe<Array<BamCompleteTemposHasEventCreateFieldInput>>;
  delete?: InputMaybe<Array<BamCompleteTemposHasEventDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<BamCompleteTemposHasEventDisconnectFieldInput>>;
  update?: InputMaybe<BamCompleteTemposHasEventUpdateConnectionInput>;
  where?: InputMaybe<BamCompleteTemposHasEventConnectionWhere>;
};

export type BamCompleteUpdateInput = {
  date?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  temposHasEvent?: InputMaybe<Array<BamCompleteTemposHasEventUpdateFieldInput>>;
};

export type BamCompleteWhere = {
  AND?: InputMaybe<Array<BamCompleteWhere>>;
  NOT?: InputMaybe<BamCompleteWhere>;
  OR?: InputMaybe<Array<BamCompleteWhere>>;
  date?: InputMaybe<Scalars["String"]["input"]>;
  date_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  date_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  date_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  date_MATCHES?: InputMaybe<Scalars["String"]["input"]>;
  date_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  status_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  status_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  status_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  status_MATCHES?: InputMaybe<Scalars["String"]["input"]>;
  status_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  temposHasEventAggregate?: InputMaybe<BamCompleteTemposHasEventAggregateInput>;
  /** Return BamCompletes where all of the related BamCompleteTemposHasEventConnections match this filter */
  temposHasEventConnection_ALL?: InputMaybe<BamCompleteTemposHasEventConnectionWhere>;
  /** Return BamCompletes where none of the related BamCompleteTemposHasEventConnections match this filter */
  temposHasEventConnection_NONE?: InputMaybe<BamCompleteTemposHasEventConnectionWhere>;
  /** Return BamCompletes where one of the related BamCompleteTemposHasEventConnections match this filter */
  temposHasEventConnection_SINGLE?: InputMaybe<BamCompleteTemposHasEventConnectionWhere>;
  /** Return BamCompletes where some of the related BamCompleteTemposHasEventConnections match this filter */
  temposHasEventConnection_SOME?: InputMaybe<BamCompleteTemposHasEventConnectionWhere>;
  /** Return BamCompletes where all of the related Tempos match this filter */
  temposHasEvent_ALL?: InputMaybe<TempoWhere>;
  /** Return BamCompletes where none of the related Tempos match this filter */
  temposHasEvent_NONE?: InputMaybe<TempoWhere>;
  /** Return BamCompletes where one of the related Tempos match this filter */
  temposHasEvent_SINGLE?: InputMaybe<TempoWhere>;
  /** Return BamCompletes where some of the related Tempos match this filter */
  temposHasEvent_SOME?: InputMaybe<TempoWhere>;
};

export type BamCompletesConnection = {
  __typename?: "BamCompletesConnection";
  edges: Array<BamCompleteEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type BigIntAggregateSelection = {
  __typename?: "BigIntAggregateSelection";
  average?: Maybe<Scalars["BigInt"]["output"]>;
  max?: Maybe<Scalars["BigInt"]["output"]>;
  min?: Maybe<Scalars["BigInt"]["output"]>;
  sum?: Maybe<Scalars["BigInt"]["output"]>;
};

export type Cohort = {
  __typename?: "Cohort";
  cohortId: Scalars["String"]["output"];
  cohortStatus: Scalars["String"]["output"];
  hasCohortCompleteCohortCompletes: Array<CohortComplete>;
  hasCohortCompleteCohortCompletesAggregate?: Maybe<CohortCohortCompleteHasCohortCompleteCohortCompletesAggregationSelection>;
  hasCohortCompleteCohortCompletesConnection: CohortHasCohortCompleteCohortCompletesConnection;
  hasCohortSampleSamples: Array<Sample>;
  hasCohortSampleSamplesAggregate?: Maybe<CohortSampleHasCohortSampleSamplesAggregationSelection>;
  hasCohortSampleSamplesConnection: CohortHasCohortSampleSamplesConnection;
};

export type CohortHasCohortCompleteCohortCompletesArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  options?: InputMaybe<CohortCompleteOptions>;
  where?: InputMaybe<CohortCompleteWhere>;
};

export type CohortHasCohortCompleteCohortCompletesAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<CohortCompleteWhere>;
};

export type CohortHasCohortCompleteCohortCompletesConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<
    Array<CohortHasCohortCompleteCohortCompletesConnectionSort>
  >;
  where?: InputMaybe<CohortHasCohortCompleteCohortCompletesConnectionWhere>;
};

export type CohortHasCohortSampleSamplesArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  options?: InputMaybe<SampleOptions>;
  where?: InputMaybe<SampleWhere>;
};

export type CohortHasCohortSampleSamplesAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<SampleWhere>;
};

export type CohortHasCohortSampleSamplesConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<CohortHasCohortSampleSamplesConnectionSort>>;
  where?: InputMaybe<CohortHasCohortSampleSamplesConnectionWhere>;
};

export type CohortAggregateSelection = {
  __typename?: "CohortAggregateSelection";
  cohortId: StringAggregateSelection;
  cohortStatus: StringAggregateSelection;
  count: Scalars["Int"]["output"];
};

export type CohortCohortCompleteHasCohortCompleteCohortCompletesAggregationSelection =
  {
    __typename?: "CohortCohortCompleteHasCohortCompleteCohortCompletesAggregationSelection";
    count: Scalars["Int"]["output"];
    node?: Maybe<CohortCohortCompleteHasCohortCompleteCohortCompletesNodeAggregateSelection>;
  };

export type CohortCohortCompleteHasCohortCompleteCohortCompletesNodeAggregateSelection =
  {
    __typename?: "CohortCohortCompleteHasCohortCompleteCohortCompletesNodeAggregateSelection";
    date: StringAggregateSelection;
    endUsers: StringAggregateSelection;
    importDate: BigIntAggregateSelection;
    pipelineVersion: StringAggregateSelection;
    pmUsers: StringAggregateSelection;
    projectSubtitle: StringAggregateSelection;
    projectTitle: StringAggregateSelection;
    status: StringAggregateSelection;
    type: StringAggregateSelection;
  };

export type CohortComplete = {
  __typename?: "CohortComplete";
  cohortsHasCohortComplete: Array<Cohort>;
  cohortsHasCohortCompleteAggregate?: Maybe<CohortCompleteCohortCohortsHasCohortCompleteAggregationSelection>;
  cohortsHasCohortCompleteConnection: CohortCompleteCohortsHasCohortCompleteConnection;
  date: Scalars["String"]["output"];
  endUsers: Scalars["String"]["output"];
  importDate: Scalars["BigInt"]["output"];
  pipelineVersion?: Maybe<Scalars["String"]["output"]>;
  pmUsers: Scalars["String"]["output"];
  projectSubtitle: Scalars["String"]["output"];
  projectTitle: Scalars["String"]["output"];
  status: Scalars["String"]["output"];
  type: Scalars["String"]["output"];
};

export type CohortCompleteCohortsHasCohortCompleteArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  options?: InputMaybe<CohortOptions>;
  where?: InputMaybe<CohortWhere>;
};

export type CohortCompleteCohortsHasCohortCompleteAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<CohortWhere>;
};

export type CohortCompleteCohortsHasCohortCompleteConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<
    Array<CohortCompleteCohortsHasCohortCompleteConnectionSort>
  >;
  where?: InputMaybe<CohortCompleteCohortsHasCohortCompleteConnectionWhere>;
};

export type CohortCompleteAggregateSelection = {
  __typename?: "CohortCompleteAggregateSelection";
  count: Scalars["Int"]["output"];
  date: StringAggregateSelection;
  endUsers: StringAggregateSelection;
  importDate: BigIntAggregateSelection;
  pipelineVersion: StringAggregateSelection;
  pmUsers: StringAggregateSelection;
  projectSubtitle: StringAggregateSelection;
  projectTitle: StringAggregateSelection;
  status: StringAggregateSelection;
  type: StringAggregateSelection;
};

export type CohortCompleteCohortCohortsHasCohortCompleteAggregationSelection = {
  __typename?: "CohortCompleteCohortCohortsHasCohortCompleteAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<CohortCompleteCohortCohortsHasCohortCompleteNodeAggregateSelection>;
};

export type CohortCompleteCohortCohortsHasCohortCompleteNodeAggregateSelection =
  {
    __typename?: "CohortCompleteCohortCohortsHasCohortCompleteNodeAggregateSelection";
    cohortId: StringAggregateSelection;
    cohortStatus: StringAggregateSelection;
  };

export type CohortCompleteCohortsHasCohortCompleteAggregateInput = {
  AND?: InputMaybe<Array<CohortCompleteCohortsHasCohortCompleteAggregateInput>>;
  NOT?: InputMaybe<CohortCompleteCohortsHasCohortCompleteAggregateInput>;
  OR?: InputMaybe<Array<CohortCompleteCohortsHasCohortCompleteAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  node?: InputMaybe<CohortCompleteCohortsHasCohortCompleteNodeAggregationWhereInput>;
};

export type CohortCompleteCohortsHasCohortCompleteConnectFieldInput = {
  connect?: InputMaybe<Array<CohortConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  where?: InputMaybe<CohortConnectWhere>;
};

export type CohortCompleteCohortsHasCohortCompleteConnection = {
  __typename?: "CohortCompleteCohortsHasCohortCompleteConnection";
  edges: Array<CohortCompleteCohortsHasCohortCompleteRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type CohortCompleteCohortsHasCohortCompleteConnectionSort = {
  node?: InputMaybe<CohortSort>;
};

export type CohortCompleteCohortsHasCohortCompleteConnectionWhere = {
  AND?: InputMaybe<
    Array<CohortCompleteCohortsHasCohortCompleteConnectionWhere>
  >;
  NOT?: InputMaybe<CohortCompleteCohortsHasCohortCompleteConnectionWhere>;
  OR?: InputMaybe<Array<CohortCompleteCohortsHasCohortCompleteConnectionWhere>>;
  node?: InputMaybe<CohortWhere>;
};

export type CohortCompleteCohortsHasCohortCompleteCreateFieldInput = {
  node: CohortCreateInput;
};

export type CohortCompleteCohortsHasCohortCompleteDeleteFieldInput = {
  delete?: InputMaybe<CohortDeleteInput>;
  where?: InputMaybe<CohortCompleteCohortsHasCohortCompleteConnectionWhere>;
};

export type CohortCompleteCohortsHasCohortCompleteDisconnectFieldInput = {
  disconnect?: InputMaybe<CohortDisconnectInput>;
  where?: InputMaybe<CohortCompleteCohortsHasCohortCompleteConnectionWhere>;
};

export type CohortCompleteCohortsHasCohortCompleteFieldInput = {
  connect?: InputMaybe<
    Array<CohortCompleteCohortsHasCohortCompleteConnectFieldInput>
  >;
  create?: InputMaybe<
    Array<CohortCompleteCohortsHasCohortCompleteCreateFieldInput>
  >;
};

export type CohortCompleteCohortsHasCohortCompleteNodeAggregationWhereInput = {
  AND?: InputMaybe<
    Array<CohortCompleteCohortsHasCohortCompleteNodeAggregationWhereInput>
  >;
  NOT?: InputMaybe<CohortCompleteCohortsHasCohortCompleteNodeAggregationWhereInput>;
  OR?: InputMaybe<
    Array<CohortCompleteCohortsHasCohortCompleteNodeAggregationWhereInput>
  >;
  cohortId_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  cohortId_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  cohortId_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  cohortId_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  cohortId_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  cohortId_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  cohortId_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  cohortId_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  cohortId_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  cohortId_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  cohortId_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  cohortId_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  cohortId_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  cohortId_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  cohortId_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  cohortStatus_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  cohortStatus_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  cohortStatus_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  cohortStatus_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  cohortStatus_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  cohortStatus_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  cohortStatus_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  cohortStatus_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  cohortStatus_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  cohortStatus_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  cohortStatus_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  cohortStatus_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  cohortStatus_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  cohortStatus_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  cohortStatus_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type CohortCompleteCohortsHasCohortCompleteRelationship = {
  __typename?: "CohortCompleteCohortsHasCohortCompleteRelationship";
  cursor: Scalars["String"]["output"];
  node: Cohort;
};

export type CohortCompleteCohortsHasCohortCompleteUpdateConnectionInput = {
  node?: InputMaybe<CohortUpdateInput>;
};

export type CohortCompleteCohortsHasCohortCompleteUpdateFieldInput = {
  connect?: InputMaybe<
    Array<CohortCompleteCohortsHasCohortCompleteConnectFieldInput>
  >;
  create?: InputMaybe<
    Array<CohortCompleteCohortsHasCohortCompleteCreateFieldInput>
  >;
  delete?: InputMaybe<
    Array<CohortCompleteCohortsHasCohortCompleteDeleteFieldInput>
  >;
  disconnect?: InputMaybe<
    Array<CohortCompleteCohortsHasCohortCompleteDisconnectFieldInput>
  >;
  update?: InputMaybe<CohortCompleteCohortsHasCohortCompleteUpdateConnectionInput>;
  where?: InputMaybe<CohortCompleteCohortsHasCohortCompleteConnectionWhere>;
};

export type CohortCompleteConnectInput = {
  cohortsHasCohortComplete?: InputMaybe<
    Array<CohortCompleteCohortsHasCohortCompleteConnectFieldInput>
  >;
};

export type CohortCompleteConnectWhere = {
  node: CohortCompleteWhere;
};

export type CohortCompleteCreateInput = {
  cohortsHasCohortComplete?: InputMaybe<CohortCompleteCohortsHasCohortCompleteFieldInput>;
  date: Scalars["String"]["input"];
  endUsers: Scalars["String"]["input"];
  importDate: Scalars["BigInt"]["input"];
  pipelineVersion?: InputMaybe<Scalars["String"]["input"]>;
  pmUsers: Scalars["String"]["input"];
  projectSubtitle: Scalars["String"]["input"];
  projectTitle: Scalars["String"]["input"];
  status: Scalars["String"]["input"];
  type: Scalars["String"]["input"];
};

export type CohortCompleteDeleteInput = {
  cohortsHasCohortComplete?: InputMaybe<
    Array<CohortCompleteCohortsHasCohortCompleteDeleteFieldInput>
  >;
};

export type CohortCompleteDisconnectInput = {
  cohortsHasCohortComplete?: InputMaybe<
    Array<CohortCompleteCohortsHasCohortCompleteDisconnectFieldInput>
  >;
};

export type CohortCompleteEdge = {
  __typename?: "CohortCompleteEdge";
  cursor: Scalars["String"]["output"];
  node: CohortComplete;
};

export type CohortCompleteOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more CohortCompleteSort objects to sort CohortCompletes by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<CohortCompleteSort>>;
};

export type CohortCompleteRelationInput = {
  cohortsHasCohortComplete?: InputMaybe<
    Array<CohortCompleteCohortsHasCohortCompleteCreateFieldInput>
  >;
};

/** Fields to sort CohortCompletes by. The order in which sorts are applied is not guaranteed when specifying many fields in one CohortCompleteSort object. */
export type CohortCompleteSort = {
  date?: InputMaybe<SortDirection>;
  endUsers?: InputMaybe<SortDirection>;
  importDate?: InputMaybe<SortDirection>;
  pipelineVersion?: InputMaybe<SortDirection>;
  pmUsers?: InputMaybe<SortDirection>;
  projectSubtitle?: InputMaybe<SortDirection>;
  projectTitle?: InputMaybe<SortDirection>;
  status?: InputMaybe<SortDirection>;
  type?: InputMaybe<SortDirection>;
};

export type CohortCompleteUpdateInput = {
  cohortsHasCohortComplete?: InputMaybe<
    Array<CohortCompleteCohortsHasCohortCompleteUpdateFieldInput>
  >;
  date?: InputMaybe<Scalars["String"]["input"]>;
  endUsers?: InputMaybe<Scalars["String"]["input"]>;
  importDate?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_DECREMENT?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_INCREMENT?: InputMaybe<Scalars["BigInt"]["input"]>;
  pipelineVersion?: InputMaybe<Scalars["String"]["input"]>;
  pmUsers?: InputMaybe<Scalars["String"]["input"]>;
  projectSubtitle?: InputMaybe<Scalars["String"]["input"]>;
  projectTitle?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
};

export type CohortCompleteWhere = {
  AND?: InputMaybe<Array<CohortCompleteWhere>>;
  NOT?: InputMaybe<CohortCompleteWhere>;
  OR?: InputMaybe<Array<CohortCompleteWhere>>;
  cohortsHasCohortCompleteAggregate?: InputMaybe<CohortCompleteCohortsHasCohortCompleteAggregateInput>;
  /** Return CohortCompletes where all of the related CohortCompleteCohortsHasCohortCompleteConnections match this filter */
  cohortsHasCohortCompleteConnection_ALL?: InputMaybe<CohortCompleteCohortsHasCohortCompleteConnectionWhere>;
  /** Return CohortCompletes where none of the related CohortCompleteCohortsHasCohortCompleteConnections match this filter */
  cohortsHasCohortCompleteConnection_NONE?: InputMaybe<CohortCompleteCohortsHasCohortCompleteConnectionWhere>;
  /** Return CohortCompletes where one of the related CohortCompleteCohortsHasCohortCompleteConnections match this filter */
  cohortsHasCohortCompleteConnection_SINGLE?: InputMaybe<CohortCompleteCohortsHasCohortCompleteConnectionWhere>;
  /** Return CohortCompletes where some of the related CohortCompleteCohortsHasCohortCompleteConnections match this filter */
  cohortsHasCohortCompleteConnection_SOME?: InputMaybe<CohortCompleteCohortsHasCohortCompleteConnectionWhere>;
  /** Return CohortCompletes where all of the related Cohorts match this filter */
  cohortsHasCohortComplete_ALL?: InputMaybe<CohortWhere>;
  /** Return CohortCompletes where none of the related Cohorts match this filter */
  cohortsHasCohortComplete_NONE?: InputMaybe<CohortWhere>;
  /** Return CohortCompletes where one of the related Cohorts match this filter */
  cohortsHasCohortComplete_SINGLE?: InputMaybe<CohortWhere>;
  /** Return CohortCompletes where some of the related Cohorts match this filter */
  cohortsHasCohortComplete_SOME?: InputMaybe<CohortWhere>;
  date?: InputMaybe<Scalars["String"]["input"]>;
  date_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  date_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  date_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  date_MATCHES?: InputMaybe<Scalars["String"]["input"]>;
  date_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  endUsers?: InputMaybe<Scalars["String"]["input"]>;
  endUsers_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  endUsers_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  endUsers_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  endUsers_MATCHES?: InputMaybe<Scalars["String"]["input"]>;
  endUsers_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  importDate?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_IN?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  importDate_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  pipelineVersion?: InputMaybe<Scalars["String"]["input"]>;
  pipelineVersion_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  pipelineVersion_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  pipelineVersion_IN?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  pipelineVersion_MATCHES?: InputMaybe<Scalars["String"]["input"]>;
  pipelineVersion_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  pmUsers?: InputMaybe<Scalars["String"]["input"]>;
  pmUsers_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  pmUsers_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  pmUsers_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  pmUsers_MATCHES?: InputMaybe<Scalars["String"]["input"]>;
  pmUsers_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  projectSubtitle?: InputMaybe<Scalars["String"]["input"]>;
  projectSubtitle_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  projectSubtitle_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  projectSubtitle_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  projectSubtitle_MATCHES?: InputMaybe<Scalars["String"]["input"]>;
  projectSubtitle_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  projectTitle?: InputMaybe<Scalars["String"]["input"]>;
  projectTitle_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  projectTitle_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  projectTitle_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  projectTitle_MATCHES?: InputMaybe<Scalars["String"]["input"]>;
  projectTitle_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  status_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  status_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  status_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  status_MATCHES?: InputMaybe<Scalars["String"]["input"]>;
  status_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
  type_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  type_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  type_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  type_MATCHES?: InputMaybe<Scalars["String"]["input"]>;
  type_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
};

export type CohortCompletesConnection = {
  __typename?: "CohortCompletesConnection";
  edges: Array<CohortCompleteEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type CohortConnectInput = {
  hasCohortCompleteCohortCompletes?: InputMaybe<
    Array<CohortHasCohortCompleteCohortCompletesConnectFieldInput>
  >;
  hasCohortSampleSamples?: InputMaybe<
    Array<CohortHasCohortSampleSamplesConnectFieldInput>
  >;
};

export type CohortConnectWhere = {
  node: CohortWhere;
};

export type CohortCreateInput = {
  cohortId: Scalars["String"]["input"];
  cohortStatus: Scalars["String"]["input"];
  hasCohortCompleteCohortCompletes?: InputMaybe<CohortHasCohortCompleteCohortCompletesFieldInput>;
  hasCohortSampleSamples?: InputMaybe<CohortHasCohortSampleSamplesFieldInput>;
};

export type CohortDeleteInput = {
  hasCohortCompleteCohortCompletes?: InputMaybe<
    Array<CohortHasCohortCompleteCohortCompletesDeleteFieldInput>
  >;
  hasCohortSampleSamples?: InputMaybe<
    Array<CohortHasCohortSampleSamplesDeleteFieldInput>
  >;
};

export type CohortDisconnectInput = {
  hasCohortCompleteCohortCompletes?: InputMaybe<
    Array<CohortHasCohortCompleteCohortCompletesDisconnectFieldInput>
  >;
  hasCohortSampleSamples?: InputMaybe<
    Array<CohortHasCohortSampleSamplesDisconnectFieldInput>
  >;
};

export type CohortEdge = {
  __typename?: "CohortEdge";
  cursor: Scalars["String"]["output"];
  node: Cohort;
};

export type CohortHasCohortCompleteCohortCompletesAggregateInput = {
  AND?: InputMaybe<Array<CohortHasCohortCompleteCohortCompletesAggregateInput>>;
  NOT?: InputMaybe<CohortHasCohortCompleteCohortCompletesAggregateInput>;
  OR?: InputMaybe<Array<CohortHasCohortCompleteCohortCompletesAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  node?: InputMaybe<CohortHasCohortCompleteCohortCompletesNodeAggregationWhereInput>;
};

export type CohortHasCohortCompleteCohortCompletesConnectFieldInput = {
  connect?: InputMaybe<Array<CohortCompleteConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  where?: InputMaybe<CohortCompleteConnectWhere>;
};

export type CohortHasCohortCompleteCohortCompletesConnection = {
  __typename?: "CohortHasCohortCompleteCohortCompletesConnection";
  edges: Array<CohortHasCohortCompleteCohortCompletesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type CohortHasCohortCompleteCohortCompletesConnectionSort = {
  node?: InputMaybe<CohortCompleteSort>;
};

export type CohortHasCohortCompleteCohortCompletesConnectionWhere = {
  AND?: InputMaybe<
    Array<CohortHasCohortCompleteCohortCompletesConnectionWhere>
  >;
  NOT?: InputMaybe<CohortHasCohortCompleteCohortCompletesConnectionWhere>;
  OR?: InputMaybe<Array<CohortHasCohortCompleteCohortCompletesConnectionWhere>>;
  node?: InputMaybe<CohortCompleteWhere>;
};

export type CohortHasCohortCompleteCohortCompletesCreateFieldInput = {
  node: CohortCompleteCreateInput;
};

export type CohortHasCohortCompleteCohortCompletesDeleteFieldInput = {
  delete?: InputMaybe<CohortCompleteDeleteInput>;
  where?: InputMaybe<CohortHasCohortCompleteCohortCompletesConnectionWhere>;
};

export type CohortHasCohortCompleteCohortCompletesDisconnectFieldInput = {
  disconnect?: InputMaybe<CohortCompleteDisconnectInput>;
  where?: InputMaybe<CohortHasCohortCompleteCohortCompletesConnectionWhere>;
};

export type CohortHasCohortCompleteCohortCompletesFieldInput = {
  connect?: InputMaybe<
    Array<CohortHasCohortCompleteCohortCompletesConnectFieldInput>
  >;
  create?: InputMaybe<
    Array<CohortHasCohortCompleteCohortCompletesCreateFieldInput>
  >;
};

export type CohortHasCohortCompleteCohortCompletesNodeAggregationWhereInput = {
  AND?: InputMaybe<
    Array<CohortHasCohortCompleteCohortCompletesNodeAggregationWhereInput>
  >;
  NOT?: InputMaybe<CohortHasCohortCompleteCohortCompletesNodeAggregationWhereInput>;
  OR?: InputMaybe<
    Array<CohortHasCohortCompleteCohortCompletesNodeAggregationWhereInput>
  >;
  date_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  date_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  date_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  date_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  date_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  date_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  date_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  date_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  date_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  date_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  date_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  date_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  endUsers_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  endUsers_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  endUsers_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  endUsers_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  endUsers_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  endUsers_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  endUsers_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  endUsers_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  endUsers_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  endUsers_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  endUsers_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  endUsers_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  endUsers_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  endUsers_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  endUsers_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  importDate_AVERAGE_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_AVERAGE_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_AVERAGE_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_AVERAGE_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_AVERAGE_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_MAX_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_MAX_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_MAX_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_MAX_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_MAX_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_MIN_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_MIN_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_MIN_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_MIN_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_MIN_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_SUM_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_SUM_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_SUM_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_SUM_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_SUM_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  pipelineVersion_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  pipelineVersion_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  pipelineVersion_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  pipelineVersion_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  pipelineVersion_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  pipelineVersion_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  pipelineVersion_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  pipelineVersion_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  pipelineVersion_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  pipelineVersion_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  pipelineVersion_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  pipelineVersion_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  pipelineVersion_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  pipelineVersion_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  pipelineVersion_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  pmUsers_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  pmUsers_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  pmUsers_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  pmUsers_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  pmUsers_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  pmUsers_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  pmUsers_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  pmUsers_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  pmUsers_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  pmUsers_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  pmUsers_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  pmUsers_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  pmUsers_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  pmUsers_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  pmUsers_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  projectSubtitle_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  projectSubtitle_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  projectSubtitle_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  projectSubtitle_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  projectSubtitle_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  projectSubtitle_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  projectSubtitle_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  projectSubtitle_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  projectSubtitle_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  projectSubtitle_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  projectSubtitle_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  projectSubtitle_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  projectSubtitle_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  projectSubtitle_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  projectSubtitle_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  projectTitle_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  projectTitle_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  projectTitle_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  projectTitle_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  projectTitle_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  projectTitle_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  projectTitle_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  projectTitle_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  projectTitle_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  projectTitle_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  projectTitle_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  projectTitle_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  projectTitle_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  projectTitle_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  projectTitle_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  status_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  status_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  status_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  status_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  status_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  status_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  status_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  status_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  status_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  status_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  status_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  status_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  status_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  status_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  status_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  type_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  type_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  type_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  type_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  type_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  type_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  type_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  type_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  type_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  type_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  type_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  type_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  type_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  type_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  type_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type CohortHasCohortCompleteCohortCompletesRelationship = {
  __typename?: "CohortHasCohortCompleteCohortCompletesRelationship";
  cursor: Scalars["String"]["output"];
  node: CohortComplete;
};

export type CohortHasCohortCompleteCohortCompletesUpdateConnectionInput = {
  node?: InputMaybe<CohortCompleteUpdateInput>;
};

export type CohortHasCohortCompleteCohortCompletesUpdateFieldInput = {
  connect?: InputMaybe<
    Array<CohortHasCohortCompleteCohortCompletesConnectFieldInput>
  >;
  create?: InputMaybe<
    Array<CohortHasCohortCompleteCohortCompletesCreateFieldInput>
  >;
  delete?: InputMaybe<
    Array<CohortHasCohortCompleteCohortCompletesDeleteFieldInput>
  >;
  disconnect?: InputMaybe<
    Array<CohortHasCohortCompleteCohortCompletesDisconnectFieldInput>
  >;
  update?: InputMaybe<CohortHasCohortCompleteCohortCompletesUpdateConnectionInput>;
  where?: InputMaybe<CohortHasCohortCompleteCohortCompletesConnectionWhere>;
};

export type CohortHasCohortSampleSamplesAggregateInput = {
  AND?: InputMaybe<Array<CohortHasCohortSampleSamplesAggregateInput>>;
  NOT?: InputMaybe<CohortHasCohortSampleSamplesAggregateInput>;
  OR?: InputMaybe<Array<CohortHasCohortSampleSamplesAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  node?: InputMaybe<CohortHasCohortSampleSamplesNodeAggregationWhereInput>;
};

export type CohortHasCohortSampleSamplesConnectFieldInput = {
  connect?: InputMaybe<Array<SampleConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  where?: InputMaybe<SampleConnectWhere>;
};

export type CohortHasCohortSampleSamplesConnection = {
  __typename?: "CohortHasCohortSampleSamplesConnection";
  edges: Array<CohortHasCohortSampleSamplesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type CohortHasCohortSampleSamplesConnectionSort = {
  node?: InputMaybe<SampleSort>;
};

export type CohortHasCohortSampleSamplesConnectionWhere = {
  AND?: InputMaybe<Array<CohortHasCohortSampleSamplesConnectionWhere>>;
  NOT?: InputMaybe<CohortHasCohortSampleSamplesConnectionWhere>;
  OR?: InputMaybe<Array<CohortHasCohortSampleSamplesConnectionWhere>>;
  node?: InputMaybe<SampleWhere>;
};

export type CohortHasCohortSampleSamplesCreateFieldInput = {
  node: SampleCreateInput;
};

export type CohortHasCohortSampleSamplesDeleteFieldInput = {
  delete?: InputMaybe<SampleDeleteInput>;
  where?: InputMaybe<CohortHasCohortSampleSamplesConnectionWhere>;
};

export type CohortHasCohortSampleSamplesDisconnectFieldInput = {
  disconnect?: InputMaybe<SampleDisconnectInput>;
  where?: InputMaybe<CohortHasCohortSampleSamplesConnectionWhere>;
};

export type CohortHasCohortSampleSamplesFieldInput = {
  connect?: InputMaybe<Array<CohortHasCohortSampleSamplesConnectFieldInput>>;
  create?: InputMaybe<Array<CohortHasCohortSampleSamplesCreateFieldInput>>;
};

export type CohortHasCohortSampleSamplesNodeAggregationWhereInput = {
  AND?: InputMaybe<
    Array<CohortHasCohortSampleSamplesNodeAggregationWhereInput>
  >;
  NOT?: InputMaybe<CohortHasCohortSampleSamplesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<CohortHasCohortSampleSamplesNodeAggregationWhereInput>>;
  datasource_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  datasource_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  datasource_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  datasource_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  datasource_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  datasource_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  datasource_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  datasource_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  datasource_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  datasource_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  datasource_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  datasource_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  datasource_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  datasource_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  datasource_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  sampleCategory_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  sampleCategory_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  sampleCategory_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  sampleCategory_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  sampleCategory_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  sampleCategory_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  sampleCategory_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  sampleCategory_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  sampleCategory_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  sampleCategory_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  sampleCategory_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  sampleCategory_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  sampleCategory_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  sampleCategory_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  sampleCategory_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  sampleClass_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  sampleClass_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  sampleClass_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  sampleClass_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  sampleClass_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  smileSampleId_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  smileSampleId_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  smileSampleId_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  smileSampleId_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  smileSampleId_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  smileSampleId_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  smileSampleId_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  smileSampleId_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  smileSampleId_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  smileSampleId_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  smileSampleId_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  smileSampleId_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  smileSampleId_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  smileSampleId_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  smileSampleId_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type CohortHasCohortSampleSamplesRelationship = {
  __typename?: "CohortHasCohortSampleSamplesRelationship";
  cursor: Scalars["String"]["output"];
  node: Sample;
};

export type CohortHasCohortSampleSamplesUpdateConnectionInput = {
  node?: InputMaybe<SampleUpdateInput>;
};

export type CohortHasCohortSampleSamplesUpdateFieldInput = {
  connect?: InputMaybe<Array<CohortHasCohortSampleSamplesConnectFieldInput>>;
  create?: InputMaybe<Array<CohortHasCohortSampleSamplesCreateFieldInput>>;
  delete?: InputMaybe<Array<CohortHasCohortSampleSamplesDeleteFieldInput>>;
  disconnect?: InputMaybe<
    Array<CohortHasCohortSampleSamplesDisconnectFieldInput>
  >;
  update?: InputMaybe<CohortHasCohortSampleSamplesUpdateConnectionInput>;
  where?: InputMaybe<CohortHasCohortSampleSamplesConnectionWhere>;
};

export type CohortOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more CohortSort objects to sort Cohorts by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<CohortSort>>;
};

export type CohortRelationInput = {
  hasCohortCompleteCohortCompletes?: InputMaybe<
    Array<CohortHasCohortCompleteCohortCompletesCreateFieldInput>
  >;
  hasCohortSampleSamples?: InputMaybe<
    Array<CohortHasCohortSampleSamplesCreateFieldInput>
  >;
};

export type CohortSampleHasCohortSampleSamplesAggregationSelection = {
  __typename?: "CohortSampleHasCohortSampleSamplesAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<CohortSampleHasCohortSampleSamplesNodeAggregateSelection>;
};

export type CohortSampleHasCohortSampleSamplesNodeAggregateSelection = {
  __typename?: "CohortSampleHasCohortSampleSamplesNodeAggregateSelection";
  datasource: StringAggregateSelection;
  sampleCategory: StringAggregateSelection;
  sampleClass: StringAggregateSelection;
  smileSampleId: StringAggregateSelection;
};

/** Fields to sort Cohorts by. The order in which sorts are applied is not guaranteed when specifying many fields in one CohortSort object. */
export type CohortSort = {
  cohortId?: InputMaybe<SortDirection>;
  cohortStatus?: InputMaybe<SortDirection>;
};

export type CohortUpdateInput = {
  cohortId?: InputMaybe<Scalars["String"]["input"]>;
  cohortStatus?: InputMaybe<Scalars["String"]["input"]>;
  hasCohortCompleteCohortCompletes?: InputMaybe<
    Array<CohortHasCohortCompleteCohortCompletesUpdateFieldInput>
  >;
  hasCohortSampleSamples?: InputMaybe<
    Array<CohortHasCohortSampleSamplesUpdateFieldInput>
  >;
};

export type CohortWhere = {
  AND?: InputMaybe<Array<CohortWhere>>;
  NOT?: InputMaybe<CohortWhere>;
  OR?: InputMaybe<Array<CohortWhere>>;
  cohortId?: InputMaybe<Scalars["String"]["input"]>;
  cohortId_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  cohortId_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  cohortId_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  cohortId_MATCHES?: InputMaybe<Scalars["String"]["input"]>;
  cohortId_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  cohortStatus?: InputMaybe<Scalars["String"]["input"]>;
  cohortStatus_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  cohortStatus_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  cohortStatus_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  cohortStatus_MATCHES?: InputMaybe<Scalars["String"]["input"]>;
  cohortStatus_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  hasCohortCompleteCohortCompletesAggregate?: InputMaybe<CohortHasCohortCompleteCohortCompletesAggregateInput>;
  /** Return Cohorts where all of the related CohortHasCohortCompleteCohortCompletesConnections match this filter */
  hasCohortCompleteCohortCompletesConnection_ALL?: InputMaybe<CohortHasCohortCompleteCohortCompletesConnectionWhere>;
  /** Return Cohorts where none of the related CohortHasCohortCompleteCohortCompletesConnections match this filter */
  hasCohortCompleteCohortCompletesConnection_NONE?: InputMaybe<CohortHasCohortCompleteCohortCompletesConnectionWhere>;
  /** Return Cohorts where one of the related CohortHasCohortCompleteCohortCompletesConnections match this filter */
  hasCohortCompleteCohortCompletesConnection_SINGLE?: InputMaybe<CohortHasCohortCompleteCohortCompletesConnectionWhere>;
  /** Return Cohorts where some of the related CohortHasCohortCompleteCohortCompletesConnections match this filter */
  hasCohortCompleteCohortCompletesConnection_SOME?: InputMaybe<CohortHasCohortCompleteCohortCompletesConnectionWhere>;
  /** Return Cohorts where all of the related CohortCompletes match this filter */
  hasCohortCompleteCohortCompletes_ALL?: InputMaybe<CohortCompleteWhere>;
  /** Return Cohorts where none of the related CohortCompletes match this filter */
  hasCohortCompleteCohortCompletes_NONE?: InputMaybe<CohortCompleteWhere>;
  /** Return Cohorts where one of the related CohortCompletes match this filter */
  hasCohortCompleteCohortCompletes_SINGLE?: InputMaybe<CohortCompleteWhere>;
  /** Return Cohorts where some of the related CohortCompletes match this filter */
  hasCohortCompleteCohortCompletes_SOME?: InputMaybe<CohortCompleteWhere>;
  hasCohortSampleSamplesAggregate?: InputMaybe<CohortHasCohortSampleSamplesAggregateInput>;
  /** Return Cohorts where all of the related CohortHasCohortSampleSamplesConnections match this filter */
  hasCohortSampleSamplesConnection_ALL?: InputMaybe<CohortHasCohortSampleSamplesConnectionWhere>;
  /** Return Cohorts where none of the related CohortHasCohortSampleSamplesConnections match this filter */
  hasCohortSampleSamplesConnection_NONE?: InputMaybe<CohortHasCohortSampleSamplesConnectionWhere>;
  /** Return Cohorts where one of the related CohortHasCohortSampleSamplesConnections match this filter */
  hasCohortSampleSamplesConnection_SINGLE?: InputMaybe<CohortHasCohortSampleSamplesConnectionWhere>;
  /** Return Cohorts where some of the related CohortHasCohortSampleSamplesConnections match this filter */
  hasCohortSampleSamplesConnection_SOME?: InputMaybe<CohortHasCohortSampleSamplesConnectionWhere>;
  /** Return Cohorts where all of the related Samples match this filter */
  hasCohortSampleSamples_ALL?: InputMaybe<SampleWhere>;
  /** Return Cohorts where none of the related Samples match this filter */
  hasCohortSampleSamples_NONE?: InputMaybe<SampleWhere>;
  /** Return Cohorts where one of the related Samples match this filter */
  hasCohortSampleSamples_SINGLE?: InputMaybe<SampleWhere>;
  /** Return Cohorts where some of the related Samples match this filter */
  hasCohortSampleSamples_SOME?: InputMaybe<SampleWhere>;
};

export type CohortsConnection = {
  __typename?: "CohortsConnection";
  edges: Array<CohortEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type CreateBamCompletesMutationResponse = {
  __typename?: "CreateBamCompletesMutationResponse";
  bamCompletes: Array<BamComplete>;
  info: CreateInfo;
};

export type CreateCohortCompletesMutationResponse = {
  __typename?: "CreateCohortCompletesMutationResponse";
  cohortCompletes: Array<CohortComplete>;
  info: CreateInfo;
};

export type CreateCohortsMutationResponse = {
  __typename?: "CreateCohortsMutationResponse";
  cohorts: Array<Cohort>;
  info: CreateInfo;
};

export type CreateDbGapsMutationResponse = {
  __typename?: "CreateDbGapsMutationResponse";
  dbGaps: Array<DbGap>;
  info: CreateInfo;
};

/** Information about the number of nodes and relationships created during a create mutation */
export type CreateInfo = {
  __typename?: "CreateInfo";
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars["String"]["output"]>;
  nodesCreated: Scalars["Int"]["output"];
  relationshipsCreated: Scalars["Int"]["output"];
};

export type CreateMafCompletesMutationResponse = {
  __typename?: "CreateMafCompletesMutationResponse";
  info: CreateInfo;
  mafCompletes: Array<MafComplete>;
};

export type CreatePatientAliasesMutationResponse = {
  __typename?: "CreatePatientAliasesMutationResponse";
  info: CreateInfo;
  patientAliases: Array<PatientAlias>;
};

export type CreatePatientsMutationResponse = {
  __typename?: "CreatePatientsMutationResponse";
  info: CreateInfo;
  patients: Array<Patient>;
};

export type CreateProjectsMutationResponse = {
  __typename?: "CreateProjectsMutationResponse";
  info: CreateInfo;
  projects: Array<Project>;
};

export type CreateQcCompletesMutationResponse = {
  __typename?: "CreateQcCompletesMutationResponse";
  info: CreateInfo;
  qcCompletes: Array<QcComplete>;
};

export type CreateRequestMetadataMutationResponse = {
  __typename?: "CreateRequestMetadataMutationResponse";
  info: CreateInfo;
  requestMetadata: Array<RequestMetadata>;
};

export type CreateRequestsMutationResponse = {
  __typename?: "CreateRequestsMutationResponse";
  info: CreateInfo;
  requests: Array<Request>;
};

export type CreateSampleAliasesMutationResponse = {
  __typename?: "CreateSampleAliasesMutationResponse";
  info: CreateInfo;
  sampleAliases: Array<SampleAlias>;
};

export type CreateSampleMetadataMutationResponse = {
  __typename?: "CreateSampleMetadataMutationResponse";
  info: CreateInfo;
  sampleMetadata: Array<SampleMetadata>;
};

export type CreateSamplesMutationResponse = {
  __typename?: "CreateSamplesMutationResponse";
  info: CreateInfo;
  samples: Array<Sample>;
};

export type CreateStatusesMutationResponse = {
  __typename?: "CreateStatusesMutationResponse";
  info: CreateInfo;
  statuses: Array<Status>;
};

export type CreateTemposMutationResponse = {
  __typename?: "CreateTemposMutationResponse";
  info: CreateInfo;
  tempos: Array<Tempo>;
};

export type DashboardCohort = {
  __typename?: "DashboardCohort";
  _total?: Maybe<Scalars["Int"]["output"]>;
  _uniqueSampleCount?: Maybe<Scalars["Int"]["output"]>;
  billed?: Maybe<Scalars["String"]["output"]>;
  cohortId: Scalars["String"]["output"];
  endUsers?: Maybe<Scalars["String"]["output"]>;
  importDate?: Maybe<Scalars["String"]["output"]>;
  initialCohortDeliveryDate?: Maybe<Scalars["String"]["output"]>;
  pipelineVersion?: Maybe<Scalars["String"]["output"]>;
  pmUsers?: Maybe<Scalars["String"]["output"]>;
  projectSubtitle?: Maybe<Scalars["String"]["output"]>;
  projectTitle?: Maybe<Scalars["String"]["output"]>;
  searchableSampleIds?: Maybe<Scalars["String"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  totalSampleCount?: Maybe<Scalars["Int"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
};

export type DashboardCohortInput = {
  _total?: InputMaybe<Scalars["Int"]["input"]>;
  _uniqueSampleCount?: InputMaybe<Scalars["Int"]["input"]>;
  billed?: InputMaybe<Scalars["String"]["input"]>;
  changedFieldNames: Array<Scalars["String"]["input"]>;
  changelog?: InputMaybe<Scalars["String"]["input"]>;
  cohortId: Scalars["String"]["input"];
  endUsers?: InputMaybe<Scalars["String"]["input"]>;
  importDate?: InputMaybe<Scalars["String"]["input"]>;
  initialCohortDeliveryDate?: InputMaybe<Scalars["String"]["input"]>;
  pipelineVersion?: InputMaybe<Scalars["String"]["input"]>;
  pmUsers?: InputMaybe<Scalars["String"]["input"]>;
  projectSubtitle?: InputMaybe<Scalars["String"]["input"]>;
  projectTitle?: InputMaybe<Scalars["String"]["input"]>;
  searchableSampleIds?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  totalSampleCount?: InputMaybe<Scalars["Int"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
};

export type DashboardPatient = {
  __typename?: "DashboardPatient";
  _total?: Maybe<Scalars["Int"]["output"]>;
  anchorOncotreeCode?: Maybe<Scalars["String"]["output"]>;
  anchorSequencingDate?: Maybe<Scalars["String"]["output"]>;
  cmoPatientId?: Maybe<Scalars["String"]["output"]>;
  cmoSampleIds?: Maybe<Scalars["String"]["output"]>;
  consentPartA?: Maybe<Scalars["String"]["output"]>;
  consentPartC?: Maybe<Scalars["String"]["output"]>;
  dmpPatientId?: Maybe<Scalars["String"]["output"]>;
  inDbGap?: Maybe<Scalars["Boolean"]["output"]>;
  mrn?: Maybe<Scalars["String"]["output"]>;
  race?: Maybe<Scalars["String"]["output"]>;
  smilePatientId: Scalars["String"]["output"];
  totalSampleCount?: Maybe<Scalars["Int"]["output"]>;
};

export type DashboardRecordColumnFilter = {
  field: Scalars["String"]["input"];
  filter: Scalars["String"]["input"];
};

export type DashboardRecordContext = {
  fieldName?: InputMaybe<Scalars["String"]["input"]>;
  values: Array<Scalars["String"]["input"]>;
};

export type DashboardRecordSort = {
  colId: Scalars["String"]["input"];
  sort: AgGridSortDirection;
};

export type DashboardRequest = {
  __typename?: "DashboardRequest";
  _total?: Maybe<Scalars["Int"]["output"]>;
  bicAnalysis?: Maybe<Scalars["Boolean"]["output"]>;
  dataAccessEmails?: Maybe<Scalars["String"]["output"]>;
  dataAnalystEmail?: Maybe<Scalars["String"]["output"]>;
  dataAnalystName?: Maybe<Scalars["String"]["output"]>;
  genePanel?: Maybe<Scalars["String"]["output"]>;
  igoDeliveryDate?: Maybe<Scalars["String"]["output"]>;
  igoProjectId?: Maybe<Scalars["String"]["output"]>;
  igoRequestId: Scalars["String"]["output"];
  ilabRequestId?: Maybe<Scalars["String"]["output"]>;
  importDate?: Maybe<Scalars["String"]["output"]>;
  investigatorEmail?: Maybe<Scalars["String"]["output"]>;
  investigatorName?: Maybe<Scalars["String"]["output"]>;
  isCmoRequest?: Maybe<Scalars["Boolean"]["output"]>;
  labHeadEmail?: Maybe<Scalars["String"]["output"]>;
  labHeadName?: Maybe<Scalars["String"]["output"]>;
  otherContactEmails?: Maybe<Scalars["String"]["output"]>;
  piEmail?: Maybe<Scalars["String"]["output"]>;
  projectManagerName?: Maybe<Scalars["String"]["output"]>;
  qcAccessEmails?: Maybe<Scalars["String"]["output"]>;
  toleratedSampleErrors?: Maybe<Array<Maybe<ToleratedSampleValidationError>>>;
  totalSampleCount?: Maybe<Scalars["Int"]["output"]>;
  validationReport?: Maybe<Scalars["String"]["output"]>;
  validationStatus?: Maybe<Scalars["Boolean"]["output"]>;
};

export type DashboardSample = {
  __typename?: "DashboardSample";
  _total?: Maybe<Scalars["Int"]["output"]>;
  accessLevel?: Maybe<Scalars["String"]["output"]>;
  altId?: Maybe<Scalars["String"]["output"]>;
  analyteType?: Maybe<Scalars["String"]["output"]>;
  baitSet?: Maybe<Scalars["String"]["output"]>;
  bamCompleteDate?: Maybe<Scalars["String"]["output"]>;
  bamCompleteStatus?: Maybe<Scalars["String"]["output"]>;
  billed?: Maybe<Scalars["Boolean"]["output"]>;
  billedBy?: Maybe<Scalars["String"]["output"]>;
  cancerType?: Maybe<Scalars["String"]["output"]>;
  cancerTypeDetailed?: Maybe<Scalars["String"]["output"]>;
  cfDNA2dBarcode?: Maybe<Scalars["String"]["output"]>;
  changelog?: Maybe<Scalars["String"]["output"]>;
  cmoPatientId?: Maybe<Scalars["String"]["output"]>;
  cmoSampleName?: Maybe<Scalars["String"]["output"]>;
  collectionYear?: Maybe<Scalars["String"]["output"]>;
  costCenter?: Maybe<Scalars["String"]["output"]>;
  custodianInformation?: Maybe<Scalars["String"]["output"]>;
  dbGapStudy?: Maybe<Scalars["String"]["output"]>;
  dmpPatientAlias?: Maybe<Scalars["String"]["output"]>;
  dmpRecommendedCoverage?: Maybe<Scalars["String"]["output"]>;
  embargoDate?: Maybe<Scalars["String"]["output"]>;
  genePanel?: Maybe<Scalars["String"]["output"]>;
  historicalCmoSampleNames?: Maybe<Scalars["String"]["output"]>;
  igoComplete?: Maybe<Scalars["Boolean"]["output"]>;
  igoDeliveryDate?: Maybe<Scalars["String"]["output"]>;
  igoQcReports?: Maybe<Array<Maybe<IgoQcReport>>>;
  igoSampleStatus?: Maybe<Scalars["String"]["output"]>;
  importDate?: Maybe<Scalars["String"]["output"]>;
  initialPipelineRunDate?: Maybe<Scalars["String"]["output"]>;
  instrumentModel?: Maybe<Scalars["String"]["output"]>;
  investigatorSampleId?: Maybe<Scalars["String"]["output"]>;
  irbConsentProtocol?: Maybe<Scalars["String"]["output"]>;
  mafCompleteDate?: Maybe<Scalars["String"]["output"]>;
  mafCompleteNormalPrimaryId?: Maybe<Scalars["String"]["output"]>;
  mafCompleteStatus?: Maybe<Scalars["String"]["output"]>;
  molecularAccessionNumber?: Maybe<Scalars["String"]["output"]>;
  oncotreeCode?: Maybe<Scalars["String"]["output"]>;
  platform?: Maybe<Scalars["String"]["output"]>;
  preservation?: Maybe<Scalars["String"]["output"]>;
  primaryId?: Maybe<Scalars["String"]["output"]>;
  qcCompleteDate?: Maybe<Scalars["String"]["output"]>;
  qcCompleteReason?: Maybe<Scalars["String"]["output"]>;
  qcCompleteResult?: Maybe<Scalars["String"]["output"]>;
  qcCompleteStatus?: Maybe<Scalars["String"]["output"]>;
  race?: Maybe<Scalars["String"]["output"]>;
  recipe?: Maybe<Scalars["String"]["output"]>;
  recordId: Scalars["String"]["output"];
  revisable?: Maybe<Scalars["Boolean"]["output"]>;
  sampleCategory: Scalars["String"]["output"];
  sampleClass?: Maybe<Scalars["String"]["output"]>;
  sampleCohortIds?: Maybe<Scalars["String"]["output"]>;
  sampleOrigin?: Maybe<Scalars["String"]["output"]>;
  sampleType?: Maybe<Scalars["String"]["output"]>;
  sequencingDate?: Maybe<Scalars["String"]["output"]>;
  sex?: Maybe<Scalars["String"]["output"]>;
  smileSampleId: Scalars["String"]["output"];
  species?: Maybe<Scalars["String"]["output"]>;
  tissueLocation?: Maybe<Scalars["String"]["output"]>;
  tumorOrNormal?: Maybe<Scalars["String"]["output"]>;
  validationReport?: Maybe<Scalars["String"]["output"]>;
  validationStatus?: Maybe<Scalars["Boolean"]["output"]>;
};

export type DashboardSampleInput = {
  _total?: InputMaybe<Scalars["Int"]["input"]>;
  accessLevel?: InputMaybe<Scalars["String"]["input"]>;
  altId?: InputMaybe<Scalars["String"]["input"]>;
  analyteType?: InputMaybe<Scalars["String"]["input"]>;
  baitSet?: InputMaybe<Scalars["String"]["input"]>;
  bamCompleteDate?: InputMaybe<Scalars["String"]["input"]>;
  bamCompleteStatus?: InputMaybe<Scalars["String"]["input"]>;
  billed?: InputMaybe<Scalars["Boolean"]["input"]>;
  billedBy?: InputMaybe<Scalars["String"]["input"]>;
  cancerType?: InputMaybe<Scalars["String"]["input"]>;
  cancerTypeDetailed?: InputMaybe<Scalars["String"]["input"]>;
  cfDNA2dBarcode?: InputMaybe<Scalars["String"]["input"]>;
  changedFieldNames: Array<Scalars["String"]["input"]>;
  changelog?: InputMaybe<Scalars["String"]["input"]>;
  cmoPatientId?: InputMaybe<Scalars["String"]["input"]>;
  cmoSampleName?: InputMaybe<Scalars["String"]["input"]>;
  collectionYear?: InputMaybe<Scalars["String"]["input"]>;
  costCenter?: InputMaybe<Scalars["String"]["input"]>;
  custodianInformation?: InputMaybe<Scalars["String"]["input"]>;
  dbGapStudy?: InputMaybe<Scalars["String"]["input"]>;
  dmpPatientAlias?: InputMaybe<Scalars["String"]["input"]>;
  dmpRecommendedCoverage?: InputMaybe<Scalars["String"]["input"]>;
  embargoDate?: InputMaybe<Scalars["String"]["input"]>;
  genePanel?: InputMaybe<Scalars["String"]["input"]>;
  historicalCmoSampleNames?: InputMaybe<Scalars["String"]["input"]>;
  igoComplete?: InputMaybe<Scalars["Boolean"]["input"]>;
  igoDeliveryDate?: InputMaybe<Scalars["String"]["input"]>;
  igoSampleStatus?: InputMaybe<Scalars["String"]["input"]>;
  importDate?: InputMaybe<Scalars["String"]["input"]>;
  initialPipelineRunDate?: InputMaybe<Scalars["String"]["input"]>;
  instrumentModel?: InputMaybe<Scalars["String"]["input"]>;
  investigatorSampleId?: InputMaybe<Scalars["String"]["input"]>;
  irbConsentProtocol?: InputMaybe<Scalars["String"]["input"]>;
  mafCompleteDate?: InputMaybe<Scalars["String"]["input"]>;
  mafCompleteNormalPrimaryId?: InputMaybe<Scalars["String"]["input"]>;
  mafCompleteStatus?: InputMaybe<Scalars["String"]["input"]>;
  molecularAccessionNumber?: InputMaybe<Scalars["String"]["input"]>;
  oncotreeCode?: InputMaybe<Scalars["String"]["input"]>;
  platform?: InputMaybe<Scalars["String"]["input"]>;
  preservation?: InputMaybe<Scalars["String"]["input"]>;
  primaryId?: InputMaybe<Scalars["String"]["input"]>;
  qcCompleteDate?: InputMaybe<Scalars["String"]["input"]>;
  qcCompleteReason?: InputMaybe<Scalars["String"]["input"]>;
  qcCompleteResult?: InputMaybe<Scalars["String"]["input"]>;
  qcCompleteStatus?: InputMaybe<Scalars["String"]["input"]>;
  race?: InputMaybe<Scalars["String"]["input"]>;
  recipe?: InputMaybe<Scalars["String"]["input"]>;
  recordId: Scalars["String"]["input"];
  revisable?: InputMaybe<Scalars["Boolean"]["input"]>;
  sampleCategory: Scalars["String"]["input"];
  sampleClass?: InputMaybe<Scalars["String"]["input"]>;
  sampleCohortIds?: InputMaybe<Scalars["String"]["input"]>;
  sampleOrigin?: InputMaybe<Scalars["String"]["input"]>;
  sampleType?: InputMaybe<Scalars["String"]["input"]>;
  sequencingDate?: InputMaybe<Scalars["String"]["input"]>;
  sex?: InputMaybe<Scalars["String"]["input"]>;
  smileSampleId: Scalars["String"]["input"];
  species?: InputMaybe<Scalars["String"]["input"]>;
  tissueLocation?: InputMaybe<Scalars["String"]["input"]>;
  tumorOrNormal?: InputMaybe<Scalars["String"]["input"]>;
  validationReport?: InputMaybe<Scalars["String"]["input"]>;
  validationStatus?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type DbGap = {
  __typename?: "DbGap";
  dbGapStudy: Scalars["String"]["output"];
  samplesHasDbgap: Array<Sample>;
  samplesHasDbgapAggregate?: Maybe<DbGapSampleSamplesHasDbgapAggregationSelection>;
  samplesHasDbgapConnection: DbGapSamplesHasDbgapConnection;
  smileDbGapId: Scalars["String"]["output"];
};

export type DbGapSamplesHasDbgapArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  options?: InputMaybe<SampleOptions>;
  where?: InputMaybe<SampleWhere>;
};

export type DbGapSamplesHasDbgapAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<SampleWhere>;
};

export type DbGapSamplesHasDbgapConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<DbGapSamplesHasDbgapConnectionSort>>;
  where?: InputMaybe<DbGapSamplesHasDbgapConnectionWhere>;
};

export type DbGapAggregateSelection = {
  __typename?: "DbGapAggregateSelection";
  count: Scalars["Int"]["output"];
  dbGapStudy: StringAggregateSelection;
  smileDbGapId: StringAggregateSelection;
};

export type DbGapConnectInput = {
  samplesHasDbgap?: InputMaybe<Array<DbGapSamplesHasDbgapConnectFieldInput>>;
};

export type DbGapConnectWhere = {
  node: DbGapWhere;
};

export type DbGapCreateInput = {
  dbGapStudy: Scalars["String"]["input"];
  samplesHasDbgap?: InputMaybe<DbGapSamplesHasDbgapFieldInput>;
  smileDbGapId: Scalars["String"]["input"];
};

export type DbGapDeleteInput = {
  samplesHasDbgap?: InputMaybe<Array<DbGapSamplesHasDbgapDeleteFieldInput>>;
};

export type DbGapDisconnectInput = {
  samplesHasDbgap?: InputMaybe<Array<DbGapSamplesHasDbgapDisconnectFieldInput>>;
};

export type DbGapEdge = {
  __typename?: "DbGapEdge";
  cursor: Scalars["String"]["output"];
  node: DbGap;
};

export type DbGapOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more DbGapSort objects to sort DbGaps by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<DbGapSort>>;
};

export type DbGapRelationInput = {
  samplesHasDbgap?: InputMaybe<Array<DbGapSamplesHasDbgapCreateFieldInput>>;
};

export type DbGapSampleSamplesHasDbgapAggregationSelection = {
  __typename?: "DbGapSampleSamplesHasDbgapAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<DbGapSampleSamplesHasDbgapNodeAggregateSelection>;
};

export type DbGapSampleSamplesHasDbgapNodeAggregateSelection = {
  __typename?: "DbGapSampleSamplesHasDbgapNodeAggregateSelection";
  datasource: StringAggregateSelection;
  sampleCategory: StringAggregateSelection;
  sampleClass: StringAggregateSelection;
  smileSampleId: StringAggregateSelection;
};

export type DbGapSamplesHasDbgapAggregateInput = {
  AND?: InputMaybe<Array<DbGapSamplesHasDbgapAggregateInput>>;
  NOT?: InputMaybe<DbGapSamplesHasDbgapAggregateInput>;
  OR?: InputMaybe<Array<DbGapSamplesHasDbgapAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  node?: InputMaybe<DbGapSamplesHasDbgapNodeAggregationWhereInput>;
};

export type DbGapSamplesHasDbgapConnectFieldInput = {
  connect?: InputMaybe<Array<SampleConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  where?: InputMaybe<SampleConnectWhere>;
};

export type DbGapSamplesHasDbgapConnection = {
  __typename?: "DbGapSamplesHasDbgapConnection";
  edges: Array<DbGapSamplesHasDbgapRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type DbGapSamplesHasDbgapConnectionSort = {
  node?: InputMaybe<SampleSort>;
};

export type DbGapSamplesHasDbgapConnectionWhere = {
  AND?: InputMaybe<Array<DbGapSamplesHasDbgapConnectionWhere>>;
  NOT?: InputMaybe<DbGapSamplesHasDbgapConnectionWhere>;
  OR?: InputMaybe<Array<DbGapSamplesHasDbgapConnectionWhere>>;
  node?: InputMaybe<SampleWhere>;
};

export type DbGapSamplesHasDbgapCreateFieldInput = {
  node: SampleCreateInput;
};

export type DbGapSamplesHasDbgapDeleteFieldInput = {
  delete?: InputMaybe<SampleDeleteInput>;
  where?: InputMaybe<DbGapSamplesHasDbgapConnectionWhere>;
};

export type DbGapSamplesHasDbgapDisconnectFieldInput = {
  disconnect?: InputMaybe<SampleDisconnectInput>;
  where?: InputMaybe<DbGapSamplesHasDbgapConnectionWhere>;
};

export type DbGapSamplesHasDbgapFieldInput = {
  connect?: InputMaybe<Array<DbGapSamplesHasDbgapConnectFieldInput>>;
  create?: InputMaybe<Array<DbGapSamplesHasDbgapCreateFieldInput>>;
};

export type DbGapSamplesHasDbgapNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<DbGapSamplesHasDbgapNodeAggregationWhereInput>>;
  NOT?: InputMaybe<DbGapSamplesHasDbgapNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<DbGapSamplesHasDbgapNodeAggregationWhereInput>>;
  datasource_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  datasource_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  datasource_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  datasource_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  datasource_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  datasource_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  datasource_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  datasource_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  datasource_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  datasource_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  datasource_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  datasource_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  datasource_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  datasource_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  datasource_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  sampleCategory_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  sampleCategory_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  sampleCategory_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  sampleCategory_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  sampleCategory_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  sampleCategory_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  sampleCategory_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  sampleCategory_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  sampleCategory_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  sampleCategory_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  sampleCategory_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  sampleCategory_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  sampleCategory_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  sampleCategory_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  sampleCategory_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  sampleClass_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  sampleClass_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  sampleClass_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  sampleClass_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  sampleClass_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  smileSampleId_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  smileSampleId_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  smileSampleId_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  smileSampleId_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  smileSampleId_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  smileSampleId_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  smileSampleId_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  smileSampleId_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  smileSampleId_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  smileSampleId_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  smileSampleId_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  smileSampleId_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  smileSampleId_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  smileSampleId_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  smileSampleId_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type DbGapSamplesHasDbgapRelationship = {
  __typename?: "DbGapSamplesHasDbgapRelationship";
  cursor: Scalars["String"]["output"];
  node: Sample;
};

export type DbGapSamplesHasDbgapUpdateConnectionInput = {
  node?: InputMaybe<SampleUpdateInput>;
};

export type DbGapSamplesHasDbgapUpdateFieldInput = {
  connect?: InputMaybe<Array<DbGapSamplesHasDbgapConnectFieldInput>>;
  create?: InputMaybe<Array<DbGapSamplesHasDbgapCreateFieldInput>>;
  delete?: InputMaybe<Array<DbGapSamplesHasDbgapDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<DbGapSamplesHasDbgapDisconnectFieldInput>>;
  update?: InputMaybe<DbGapSamplesHasDbgapUpdateConnectionInput>;
  where?: InputMaybe<DbGapSamplesHasDbgapConnectionWhere>;
};

/** Fields to sort DbGaps by. The order in which sorts are applied is not guaranteed when specifying many fields in one DbGapSort object. */
export type DbGapSort = {
  dbGapStudy?: InputMaybe<SortDirection>;
  smileDbGapId?: InputMaybe<SortDirection>;
};

export type DbGapUpdateInput = {
  dbGapStudy?: InputMaybe<Scalars["String"]["input"]>;
  samplesHasDbgap?: InputMaybe<Array<DbGapSamplesHasDbgapUpdateFieldInput>>;
  smileDbGapId?: InputMaybe<Scalars["String"]["input"]>;
};

export type DbGapWhere = {
  AND?: InputMaybe<Array<DbGapWhere>>;
  NOT?: InputMaybe<DbGapWhere>;
  OR?: InputMaybe<Array<DbGapWhere>>;
  dbGapStudy?: InputMaybe<Scalars["String"]["input"]>;
  dbGapStudy_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  dbGapStudy_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  dbGapStudy_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  dbGapStudy_MATCHES?: InputMaybe<Scalars["String"]["input"]>;
  dbGapStudy_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  samplesHasDbgapAggregate?: InputMaybe<DbGapSamplesHasDbgapAggregateInput>;
  /** Return DbGaps where all of the related DbGapSamplesHasDbgapConnections match this filter */
  samplesHasDbgapConnection_ALL?: InputMaybe<DbGapSamplesHasDbgapConnectionWhere>;
  /** Return DbGaps where none of the related DbGapSamplesHasDbgapConnections match this filter */
  samplesHasDbgapConnection_NONE?: InputMaybe<DbGapSamplesHasDbgapConnectionWhere>;
  /** Return DbGaps where one of the related DbGapSamplesHasDbgapConnections match this filter */
  samplesHasDbgapConnection_SINGLE?: InputMaybe<DbGapSamplesHasDbgapConnectionWhere>;
  /** Return DbGaps where some of the related DbGapSamplesHasDbgapConnections match this filter */
  samplesHasDbgapConnection_SOME?: InputMaybe<DbGapSamplesHasDbgapConnectionWhere>;
  /** Return DbGaps where all of the related Samples match this filter */
  samplesHasDbgap_ALL?: InputMaybe<SampleWhere>;
  /** Return DbGaps where none of the related Samples match this filter */
  samplesHasDbgap_NONE?: InputMaybe<SampleWhere>;
  /** Return DbGaps where one of the related Samples match this filter */
  samplesHasDbgap_SINGLE?: InputMaybe<SampleWhere>;
  /** Return DbGaps where some of the related Samples match this filter */
  samplesHasDbgap_SOME?: InputMaybe<SampleWhere>;
  smileDbGapId?: InputMaybe<Scalars["String"]["input"]>;
  smileDbGapId_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  smileDbGapId_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  smileDbGapId_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  smileDbGapId_MATCHES?: InputMaybe<Scalars["String"]["input"]>;
  smileDbGapId_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
};

export type DbGapsConnection = {
  __typename?: "DbGapsConnection";
  edges: Array<DbGapEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

/** Information about the number of nodes and relationships deleted during a delete mutation */
export type DeleteInfo = {
  __typename?: "DeleteInfo";
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars["String"]["output"]>;
  nodesDeleted: Scalars["Int"]["output"];
  relationshipsDeleted: Scalars["Int"]["output"];
};

export type IgoQcReport = {
  __typename?: "IgoQcReport";
  IGORecommendation?: Maybe<Scalars["String"]["output"]>;
  comments?: Maybe<Scalars["String"]["output"]>;
  investigatorDecision?: Maybe<Scalars["String"]["output"]>;
  qcReportType?: Maybe<Scalars["String"]["output"]>;
};

export type MafComplete = {
  __typename?: "MafComplete";
  date: Scalars["String"]["output"];
  normalPrimaryId: Scalars["String"]["output"];
  status: Scalars["String"]["output"];
  temposHasEvent: Array<Tempo>;
  temposHasEventAggregate?: Maybe<MafCompleteTempoTemposHasEventAggregationSelection>;
  temposHasEventConnection: MafCompleteTemposHasEventConnection;
};

export type MafCompleteTemposHasEventArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  options?: InputMaybe<TempoOptions>;
  where?: InputMaybe<TempoWhere>;
};

export type MafCompleteTemposHasEventAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<TempoWhere>;
};

export type MafCompleteTemposHasEventConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<MafCompleteTemposHasEventConnectionSort>>;
  where?: InputMaybe<MafCompleteTemposHasEventConnectionWhere>;
};

export type MafCompleteAggregateSelection = {
  __typename?: "MafCompleteAggregateSelection";
  count: Scalars["Int"]["output"];
  date: StringAggregateSelection;
  normalPrimaryId: StringAggregateSelection;
  status: StringAggregateSelection;
};

export type MafCompleteConnectInput = {
  temposHasEvent?: InputMaybe<
    Array<MafCompleteTemposHasEventConnectFieldInput>
  >;
};

export type MafCompleteConnectWhere = {
  node: MafCompleteWhere;
};

export type MafCompleteCreateInput = {
  date: Scalars["String"]["input"];
  normalPrimaryId: Scalars["String"]["input"];
  status: Scalars["String"]["input"];
  temposHasEvent?: InputMaybe<MafCompleteTemposHasEventFieldInput>;
};

export type MafCompleteDeleteInput = {
  temposHasEvent?: InputMaybe<Array<MafCompleteTemposHasEventDeleteFieldInput>>;
};

export type MafCompleteDisconnectInput = {
  temposHasEvent?: InputMaybe<
    Array<MafCompleteTemposHasEventDisconnectFieldInput>
  >;
};

export type MafCompleteEdge = {
  __typename?: "MafCompleteEdge";
  cursor: Scalars["String"]["output"];
  node: MafComplete;
};

export type MafCompleteOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more MafCompleteSort objects to sort MafCompletes by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<MafCompleteSort>>;
};

export type MafCompleteRelationInput = {
  temposHasEvent?: InputMaybe<Array<MafCompleteTemposHasEventCreateFieldInput>>;
};

/** Fields to sort MafCompletes by. The order in which sorts are applied is not guaranteed when specifying many fields in one MafCompleteSort object. */
export type MafCompleteSort = {
  date?: InputMaybe<SortDirection>;
  normalPrimaryId?: InputMaybe<SortDirection>;
  status?: InputMaybe<SortDirection>;
};

export type MafCompleteTempoTemposHasEventAggregationSelection = {
  __typename?: "MafCompleteTempoTemposHasEventAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<MafCompleteTempoTemposHasEventNodeAggregateSelection>;
};

export type MafCompleteTempoTemposHasEventNodeAggregateSelection = {
  __typename?: "MafCompleteTempoTemposHasEventNodeAggregateSelection";
  accessLevel: StringAggregateSelection;
  billedBy: StringAggregateSelection;
  costCenter: StringAggregateSelection;
  custodianInformation: StringAggregateSelection;
  embargoDate: StringAggregateSelection;
  initialPipelineRunDate: StringAggregateSelection;
  smileTempoId: StringAggregateSelection;
};

export type MafCompleteTemposHasEventAggregateInput = {
  AND?: InputMaybe<Array<MafCompleteTemposHasEventAggregateInput>>;
  NOT?: InputMaybe<MafCompleteTemposHasEventAggregateInput>;
  OR?: InputMaybe<Array<MafCompleteTemposHasEventAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  node?: InputMaybe<MafCompleteTemposHasEventNodeAggregationWhereInput>;
};

export type MafCompleteTemposHasEventConnectFieldInput = {
  connect?: InputMaybe<Array<TempoConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  where?: InputMaybe<TempoConnectWhere>;
};

export type MafCompleteTemposHasEventConnection = {
  __typename?: "MafCompleteTemposHasEventConnection";
  edges: Array<MafCompleteTemposHasEventRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type MafCompleteTemposHasEventConnectionSort = {
  node?: InputMaybe<TempoSort>;
};

export type MafCompleteTemposHasEventConnectionWhere = {
  AND?: InputMaybe<Array<MafCompleteTemposHasEventConnectionWhere>>;
  NOT?: InputMaybe<MafCompleteTemposHasEventConnectionWhere>;
  OR?: InputMaybe<Array<MafCompleteTemposHasEventConnectionWhere>>;
  node?: InputMaybe<TempoWhere>;
};

export type MafCompleteTemposHasEventCreateFieldInput = {
  node: TempoCreateInput;
};

export type MafCompleteTemposHasEventDeleteFieldInput = {
  delete?: InputMaybe<TempoDeleteInput>;
  where?: InputMaybe<MafCompleteTemposHasEventConnectionWhere>;
};

export type MafCompleteTemposHasEventDisconnectFieldInput = {
  disconnect?: InputMaybe<TempoDisconnectInput>;
  where?: InputMaybe<MafCompleteTemposHasEventConnectionWhere>;
};

export type MafCompleteTemposHasEventFieldInput = {
  connect?: InputMaybe<Array<MafCompleteTemposHasEventConnectFieldInput>>;
  create?: InputMaybe<Array<MafCompleteTemposHasEventCreateFieldInput>>;
};

export type MafCompleteTemposHasEventNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<MafCompleteTemposHasEventNodeAggregationWhereInput>>;
  NOT?: InputMaybe<MafCompleteTemposHasEventNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<MafCompleteTemposHasEventNodeAggregationWhereInput>>;
  accessLevel_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  accessLevel_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  accessLevel_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  accessLevel_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  accessLevel_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  accessLevel_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  accessLevel_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  accessLevel_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  accessLevel_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  accessLevel_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  accessLevel_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  accessLevel_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  accessLevel_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  accessLevel_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  accessLevel_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  billedBy_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  billedBy_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  billedBy_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  billedBy_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  billedBy_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  billedBy_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  billedBy_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  billedBy_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  billedBy_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  billedBy_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  billedBy_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  billedBy_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  billedBy_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  billedBy_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  billedBy_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  costCenter_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  costCenter_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  costCenter_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  costCenter_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  costCenter_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  costCenter_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  costCenter_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  costCenter_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  costCenter_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  costCenter_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  costCenter_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  costCenter_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  costCenter_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  costCenter_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  costCenter_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  custodianInformation_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars["Float"]["input"]
  >;
  custodianInformation_AVERAGE_LENGTH_GT?: InputMaybe<
    Scalars["Float"]["input"]
  >;
  custodianInformation_AVERAGE_LENGTH_GTE?: InputMaybe<
    Scalars["Float"]["input"]
  >;
  custodianInformation_AVERAGE_LENGTH_LT?: InputMaybe<
    Scalars["Float"]["input"]
  >;
  custodianInformation_AVERAGE_LENGTH_LTE?: InputMaybe<
    Scalars["Float"]["input"]
  >;
  custodianInformation_LONGEST_LENGTH_EQUAL?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  custodianInformation_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  custodianInformation_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  custodianInformation_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  custodianInformation_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  custodianInformation_SHORTEST_LENGTH_EQUAL?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  custodianInformation_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  custodianInformation_SHORTEST_LENGTH_GTE?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  custodianInformation_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  custodianInformation_SHORTEST_LENGTH_LTE?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  embargoDate_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  embargoDate_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  embargoDate_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  embargoDate_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  embargoDate_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  embargoDate_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  embargoDate_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  embargoDate_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  embargoDate_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  embargoDate_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  embargoDate_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  embargoDate_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  embargoDate_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  embargoDate_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  embargoDate_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  initialPipelineRunDate_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars["Float"]["input"]
  >;
  initialPipelineRunDate_AVERAGE_LENGTH_GT?: InputMaybe<
    Scalars["Float"]["input"]
  >;
  initialPipelineRunDate_AVERAGE_LENGTH_GTE?: InputMaybe<
    Scalars["Float"]["input"]
  >;
  initialPipelineRunDate_AVERAGE_LENGTH_LT?: InputMaybe<
    Scalars["Float"]["input"]
  >;
  initialPipelineRunDate_AVERAGE_LENGTH_LTE?: InputMaybe<
    Scalars["Float"]["input"]
  >;
  initialPipelineRunDate_LONGEST_LENGTH_EQUAL?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  initialPipelineRunDate_LONGEST_LENGTH_GT?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  initialPipelineRunDate_LONGEST_LENGTH_GTE?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  initialPipelineRunDate_LONGEST_LENGTH_LT?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  initialPipelineRunDate_LONGEST_LENGTH_LTE?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  initialPipelineRunDate_SHORTEST_LENGTH_EQUAL?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  initialPipelineRunDate_SHORTEST_LENGTH_GT?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  initialPipelineRunDate_SHORTEST_LENGTH_GTE?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  initialPipelineRunDate_SHORTEST_LENGTH_LT?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  initialPipelineRunDate_SHORTEST_LENGTH_LTE?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  smileTempoId_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  smileTempoId_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  smileTempoId_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  smileTempoId_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  smileTempoId_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  smileTempoId_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  smileTempoId_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  smileTempoId_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  smileTempoId_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  smileTempoId_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  smileTempoId_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  smileTempoId_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  smileTempoId_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  smileTempoId_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  smileTempoId_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type MafCompleteTemposHasEventRelationship = {
  __typename?: "MafCompleteTemposHasEventRelationship";
  cursor: Scalars["String"]["output"];
  node: Tempo;
};

export type MafCompleteTemposHasEventUpdateConnectionInput = {
  node?: InputMaybe<TempoUpdateInput>;
};

export type MafCompleteTemposHasEventUpdateFieldInput = {
  connect?: InputMaybe<Array<MafCompleteTemposHasEventConnectFieldInput>>;
  create?: InputMaybe<Array<MafCompleteTemposHasEventCreateFieldInput>>;
  delete?: InputMaybe<Array<MafCompleteTemposHasEventDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<MafCompleteTemposHasEventDisconnectFieldInput>>;
  update?: InputMaybe<MafCompleteTemposHasEventUpdateConnectionInput>;
  where?: InputMaybe<MafCompleteTemposHasEventConnectionWhere>;
};

export type MafCompleteUpdateInput = {
  date?: InputMaybe<Scalars["String"]["input"]>;
  normalPrimaryId?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  temposHasEvent?: InputMaybe<Array<MafCompleteTemposHasEventUpdateFieldInput>>;
};

export type MafCompleteWhere = {
  AND?: InputMaybe<Array<MafCompleteWhere>>;
  NOT?: InputMaybe<MafCompleteWhere>;
  OR?: InputMaybe<Array<MafCompleteWhere>>;
  date?: InputMaybe<Scalars["String"]["input"]>;
  date_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  date_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  date_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  date_MATCHES?: InputMaybe<Scalars["String"]["input"]>;
  date_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  normalPrimaryId?: InputMaybe<Scalars["String"]["input"]>;
  normalPrimaryId_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  normalPrimaryId_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  normalPrimaryId_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  normalPrimaryId_MATCHES?: InputMaybe<Scalars["String"]["input"]>;
  normalPrimaryId_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  status_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  status_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  status_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  status_MATCHES?: InputMaybe<Scalars["String"]["input"]>;
  status_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  temposHasEventAggregate?: InputMaybe<MafCompleteTemposHasEventAggregateInput>;
  /** Return MafCompletes where all of the related MafCompleteTemposHasEventConnections match this filter */
  temposHasEventConnection_ALL?: InputMaybe<MafCompleteTemposHasEventConnectionWhere>;
  /** Return MafCompletes where none of the related MafCompleteTemposHasEventConnections match this filter */
  temposHasEventConnection_NONE?: InputMaybe<MafCompleteTemposHasEventConnectionWhere>;
  /** Return MafCompletes where one of the related MafCompleteTemposHasEventConnections match this filter */
  temposHasEventConnection_SINGLE?: InputMaybe<MafCompleteTemposHasEventConnectionWhere>;
  /** Return MafCompletes where some of the related MafCompleteTemposHasEventConnections match this filter */
  temposHasEventConnection_SOME?: InputMaybe<MafCompleteTemposHasEventConnectionWhere>;
  /** Return MafCompletes where all of the related Tempos match this filter */
  temposHasEvent_ALL?: InputMaybe<TempoWhere>;
  /** Return MafCompletes where none of the related Tempos match this filter */
  temposHasEvent_NONE?: InputMaybe<TempoWhere>;
  /** Return MafCompletes where one of the related Tempos match this filter */
  temposHasEvent_SINGLE?: InputMaybe<TempoWhere>;
  /** Return MafCompletes where some of the related Tempos match this filter */
  temposHasEvent_SOME?: InputMaybe<TempoWhere>;
};

export type MafCompletesConnection = {
  __typename?: "MafCompletesConnection";
  edges: Array<MafCompleteEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type Mutation = {
  __typename?: "Mutation";
  createBamCompletes: CreateBamCompletesMutationResponse;
  createCohortCompletes: CreateCohortCompletesMutationResponse;
  createCohorts: CreateCohortsMutationResponse;
  createDbGaps: CreateDbGapsMutationResponse;
  createMafCompletes: CreateMafCompletesMutationResponse;
  createPatientAliases: CreatePatientAliasesMutationResponse;
  createPatients: CreatePatientsMutationResponse;
  createProjects: CreateProjectsMutationResponse;
  createQcCompletes: CreateQcCompletesMutationResponse;
  createRequestMetadata: CreateRequestMetadataMutationResponse;
  createRequests: CreateRequestsMutationResponse;
  createSampleAliases: CreateSampleAliasesMutationResponse;
  createSampleMetadata: CreateSampleMetadataMutationResponse;
  createSamples: CreateSamplesMutationResponse;
  createStatuses: CreateStatusesMutationResponse;
  createTempos: CreateTemposMutationResponse;
  deleteBamCompletes: DeleteInfo;
  deleteCohortCompletes: DeleteInfo;
  deleteCohorts: DeleteInfo;
  deleteDbGaps: DeleteInfo;
  deleteMafCompletes: DeleteInfo;
  deletePatientAliases: DeleteInfo;
  deletePatients: DeleteInfo;
  deleteProjects: DeleteInfo;
  deleteQcCompletes: DeleteInfo;
  deleteRequestMetadata: DeleteInfo;
  deleteRequests: DeleteInfo;
  deleteSampleAliases: DeleteInfo;
  deleteSampleMetadata: DeleteInfo;
  deleteSamples: DeleteInfo;
  deleteStatuses: DeleteInfo;
  deleteTempos: DeleteInfo;
  publishNewTempoCohortRequest?: Maybe<TempoCohortRequest>;
  updateBamCompletes: UpdateBamCompletesMutationResponse;
  updateCohortCompletes: UpdateCohortCompletesMutationResponse;
  updateCohorts: UpdateCohortsMutationResponse;
  updateDashboardSamples?: Maybe<Array<Maybe<DashboardSample>>>;
  updateDbGaps: UpdateDbGapsMutationResponse;
  updateMafCompletes: UpdateMafCompletesMutationResponse;
  updatePatientAliases: UpdatePatientAliasesMutationResponse;
  updatePatients: UpdatePatientsMutationResponse;
  updateProjects: UpdateProjectsMutationResponse;
  updateQcCompletes: UpdateQcCompletesMutationResponse;
  updateRequestMetadata: UpdateRequestMetadataMutationResponse;
  updateRequests: UpdateRequestsMutationResponse;
  updateSampleAliases: UpdateSampleAliasesMutationResponse;
  updateSampleMetadata: UpdateSampleMetadataMutationResponse;
  updateSamples: UpdateSamplesMutationResponse;
  updateStatuses: UpdateStatusesMutationResponse;
  updateTempoCohort?: Maybe<DashboardCohort>;
  updateTempos: UpdateTemposMutationResponse;
};

export type MutationCreateBamCompletesArgs = {
  input: Array<BamCompleteCreateInput>;
};

export type MutationCreateCohortCompletesArgs = {
  input: Array<CohortCompleteCreateInput>;
};

export type MutationCreateCohortsArgs = {
  input: Array<CohortCreateInput>;
};

export type MutationCreateDbGapsArgs = {
  input: Array<DbGapCreateInput>;
};

export type MutationCreateMafCompletesArgs = {
  input: Array<MafCompleteCreateInput>;
};

export type MutationCreatePatientAliasesArgs = {
  input: Array<PatientAliasCreateInput>;
};

export type MutationCreatePatientsArgs = {
  input: Array<PatientCreateInput>;
};

export type MutationCreateProjectsArgs = {
  input: Array<ProjectCreateInput>;
};

export type MutationCreateQcCompletesArgs = {
  input: Array<QcCompleteCreateInput>;
};

export type MutationCreateRequestMetadataArgs = {
  input: Array<RequestMetadataCreateInput>;
};

export type MutationCreateRequestsArgs = {
  input: Array<RequestCreateInput>;
};

export type MutationCreateSampleAliasesArgs = {
  input: Array<SampleAliasCreateInput>;
};

export type MutationCreateSampleMetadataArgs = {
  input: Array<SampleMetadataCreateInput>;
};

export type MutationCreateSamplesArgs = {
  input: Array<SampleCreateInput>;
};

export type MutationCreateStatusesArgs = {
  input: Array<StatusCreateInput>;
};

export type MutationCreateTemposArgs = {
  input: Array<TempoCreateInput>;
};

export type MutationDeleteBamCompletesArgs = {
  delete?: InputMaybe<BamCompleteDeleteInput>;
  where?: InputMaybe<BamCompleteWhere>;
};

export type MutationDeleteCohortCompletesArgs = {
  delete?: InputMaybe<CohortCompleteDeleteInput>;
  where?: InputMaybe<CohortCompleteWhere>;
};

export type MutationDeleteCohortsArgs = {
  delete?: InputMaybe<CohortDeleteInput>;
  where?: InputMaybe<CohortWhere>;
};

export type MutationDeleteDbGapsArgs = {
  delete?: InputMaybe<DbGapDeleteInput>;
  where?: InputMaybe<DbGapWhere>;
};

export type MutationDeleteMafCompletesArgs = {
  delete?: InputMaybe<MafCompleteDeleteInput>;
  where?: InputMaybe<MafCompleteWhere>;
};

export type MutationDeletePatientAliasesArgs = {
  delete?: InputMaybe<PatientAliasDeleteInput>;
  where?: InputMaybe<PatientAliasWhere>;
};

export type MutationDeletePatientsArgs = {
  delete?: InputMaybe<PatientDeleteInput>;
  where?: InputMaybe<PatientWhere>;
};

export type MutationDeleteProjectsArgs = {
  delete?: InputMaybe<ProjectDeleteInput>;
  where?: InputMaybe<ProjectWhere>;
};

export type MutationDeleteQcCompletesArgs = {
  delete?: InputMaybe<QcCompleteDeleteInput>;
  where?: InputMaybe<QcCompleteWhere>;
};

export type MutationDeleteRequestMetadataArgs = {
  delete?: InputMaybe<RequestMetadataDeleteInput>;
  where?: InputMaybe<RequestMetadataWhere>;
};

export type MutationDeleteRequestsArgs = {
  delete?: InputMaybe<RequestDeleteInput>;
  where?: InputMaybe<RequestWhere>;
};

export type MutationDeleteSampleAliasesArgs = {
  delete?: InputMaybe<SampleAliasDeleteInput>;
  where?: InputMaybe<SampleAliasWhere>;
};

export type MutationDeleteSampleMetadataArgs = {
  delete?: InputMaybe<SampleMetadataDeleteInput>;
  where?: InputMaybe<SampleMetadataWhere>;
};

export type MutationDeleteSamplesArgs = {
  delete?: InputMaybe<SampleDeleteInput>;
  where?: InputMaybe<SampleWhere>;
};

export type MutationDeleteStatusesArgs = {
  delete?: InputMaybe<StatusDeleteInput>;
  where?: InputMaybe<StatusWhere>;
};

export type MutationDeleteTemposArgs = {
  delete?: InputMaybe<TempoDeleteInput>;
  where?: InputMaybe<TempoWhere>;
};

export type MutationPublishNewTempoCohortRequestArgs = {
  tempoCohortRequest?: InputMaybe<TempoCohortRequestInput>;
};

export type MutationUpdateBamCompletesArgs = {
  update?: InputMaybe<BamCompleteUpdateInput>;
  where?: InputMaybe<BamCompleteWhere>;
};

export type MutationUpdateCohortCompletesArgs = {
  update?: InputMaybe<CohortCompleteUpdateInput>;
  where?: InputMaybe<CohortCompleteWhere>;
};

export type MutationUpdateCohortsArgs = {
  update?: InputMaybe<CohortUpdateInput>;
  where?: InputMaybe<CohortWhere>;
};

export type MutationUpdateDashboardSamplesArgs = {
  newDashboardSamples?: InputMaybe<Array<InputMaybe<DashboardSampleInput>>>;
};

export type MutationUpdateDbGapsArgs = {
  update?: InputMaybe<DbGapUpdateInput>;
  where?: InputMaybe<DbGapWhere>;
};

export type MutationUpdateMafCompletesArgs = {
  update?: InputMaybe<MafCompleteUpdateInput>;
  where?: InputMaybe<MafCompleteWhere>;
};

export type MutationUpdatePatientAliasesArgs = {
  update?: InputMaybe<PatientAliasUpdateInput>;
  where?: InputMaybe<PatientAliasWhere>;
};

export type MutationUpdatePatientsArgs = {
  update?: InputMaybe<PatientUpdateInput>;
  where?: InputMaybe<PatientWhere>;
};

export type MutationUpdateProjectsArgs = {
  update?: InputMaybe<ProjectUpdateInput>;
  where?: InputMaybe<ProjectWhere>;
};

export type MutationUpdateQcCompletesArgs = {
  update?: InputMaybe<QcCompleteUpdateInput>;
  where?: InputMaybe<QcCompleteWhere>;
};

export type MutationUpdateRequestMetadataArgs = {
  update?: InputMaybe<RequestMetadataUpdateInput>;
  where?: InputMaybe<RequestMetadataWhere>;
};

export type MutationUpdateRequestsArgs = {
  update?: InputMaybe<RequestUpdateInput>;
  where?: InputMaybe<RequestWhere>;
};

export type MutationUpdateSampleAliasesArgs = {
  update?: InputMaybe<SampleAliasUpdateInput>;
  where?: InputMaybe<SampleAliasWhere>;
};

export type MutationUpdateSampleMetadataArgs = {
  update?: InputMaybe<SampleMetadataUpdateInput>;
  where?: InputMaybe<SampleMetadataWhere>;
};

export type MutationUpdateSamplesArgs = {
  update?: InputMaybe<SampleUpdateInput>;
  where?: InputMaybe<SampleWhere>;
};

export type MutationUpdateStatusesArgs = {
  update?: InputMaybe<StatusUpdateInput>;
  where?: InputMaybe<StatusWhere>;
};

export type MutationUpdateTempoCohortArgs = {
  dashboardCohort?: InputMaybe<DashboardCohortInput>;
};

export type MutationUpdateTemposArgs = {
  update?: InputMaybe<TempoUpdateInput>;
  where?: InputMaybe<TempoWhere>;
};

/** Pagination information (Relay) */
export type PageInfo = {
  __typename?: "PageInfo";
  endCursor?: Maybe<Scalars["String"]["output"]>;
  hasNextPage: Scalars["Boolean"]["output"];
  hasPreviousPage: Scalars["Boolean"]["output"];
  startCursor?: Maybe<Scalars["String"]["output"]>;
};

export type Patient = {
  __typename?: "Patient";
  hasSampleSamples: Array<Sample>;
  hasSampleSamplesAggregate?: Maybe<PatientSampleHasSampleSamplesAggregationSelection>;
  hasSampleSamplesConnection: PatientHasSampleSamplesConnection;
  patientAliasesIsAlias: Array<PatientAlias>;
  patientAliasesIsAliasAggregate?: Maybe<PatientPatientAliasPatientAliasesIsAliasAggregationSelection>;
  patientAliasesIsAliasConnection: PatientPatientAliasesIsAliasConnection;
  smilePatientId: Scalars["String"]["output"];
};

export type PatientHasSampleSamplesArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  options?: InputMaybe<SampleOptions>;
  where?: InputMaybe<SampleWhere>;
};

export type PatientHasSampleSamplesAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<SampleWhere>;
};

export type PatientHasSampleSamplesConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<PatientHasSampleSamplesConnectionSort>>;
  where?: InputMaybe<PatientHasSampleSamplesConnectionWhere>;
};

export type PatientPatientAliasesIsAliasArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  options?: InputMaybe<PatientAliasOptions>;
  where?: InputMaybe<PatientAliasWhere>;
};

export type PatientPatientAliasesIsAliasAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<PatientAliasWhere>;
};

export type PatientPatientAliasesIsAliasConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<PatientPatientAliasesIsAliasConnectionSort>>;
  where?: InputMaybe<PatientPatientAliasesIsAliasConnectionWhere>;
};

export type PatientAggregateSelection = {
  __typename?: "PatientAggregateSelection";
  count: Scalars["Int"]["output"];
  smilePatientId: StringAggregateSelection;
};

export type PatientAlias = {
  __typename?: "PatientAlias";
  isAliasPatients: Array<Patient>;
  isAliasPatientsAggregate?: Maybe<PatientAliasPatientIsAliasPatientsAggregationSelection>;
  isAliasPatientsConnection: PatientAliasIsAliasPatientsConnection;
  namespace: Scalars["String"]["output"];
  value: Scalars["String"]["output"];
};

export type PatientAliasIsAliasPatientsArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  options?: InputMaybe<PatientOptions>;
  where?: InputMaybe<PatientWhere>;
};

export type PatientAliasIsAliasPatientsAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<PatientWhere>;
};

export type PatientAliasIsAliasPatientsConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<PatientAliasIsAliasPatientsConnectionSort>>;
  where?: InputMaybe<PatientAliasIsAliasPatientsConnectionWhere>;
};

export type PatientAliasAggregateSelection = {
  __typename?: "PatientAliasAggregateSelection";
  count: Scalars["Int"]["output"];
  namespace: StringAggregateSelection;
  value: StringAggregateSelection;
};

export type PatientAliasConnectInput = {
  isAliasPatients?: InputMaybe<
    Array<PatientAliasIsAliasPatientsConnectFieldInput>
  >;
};

export type PatientAliasConnectWhere = {
  node: PatientAliasWhere;
};

export type PatientAliasCreateInput = {
  isAliasPatients?: InputMaybe<PatientAliasIsAliasPatientsFieldInput>;
  namespace: Scalars["String"]["input"];
  value: Scalars["String"]["input"];
};

export type PatientAliasDeleteInput = {
  isAliasPatients?: InputMaybe<
    Array<PatientAliasIsAliasPatientsDeleteFieldInput>
  >;
};

export type PatientAliasDisconnectInput = {
  isAliasPatients?: InputMaybe<
    Array<PatientAliasIsAliasPatientsDisconnectFieldInput>
  >;
};

export type PatientAliasEdge = {
  __typename?: "PatientAliasEdge";
  cursor: Scalars["String"]["output"];
  node: PatientAlias;
};

export type PatientAliasIsAliasPatientsAggregateInput = {
  AND?: InputMaybe<Array<PatientAliasIsAliasPatientsAggregateInput>>;
  NOT?: InputMaybe<PatientAliasIsAliasPatientsAggregateInput>;
  OR?: InputMaybe<Array<PatientAliasIsAliasPatientsAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  node?: InputMaybe<PatientAliasIsAliasPatientsNodeAggregationWhereInput>;
};

export type PatientAliasIsAliasPatientsConnectFieldInput = {
  connect?: InputMaybe<Array<PatientConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  where?: InputMaybe<PatientConnectWhere>;
};

export type PatientAliasIsAliasPatientsConnection = {
  __typename?: "PatientAliasIsAliasPatientsConnection";
  edges: Array<PatientAliasIsAliasPatientsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type PatientAliasIsAliasPatientsConnectionSort = {
  node?: InputMaybe<PatientSort>;
};

export type PatientAliasIsAliasPatientsConnectionWhere = {
  AND?: InputMaybe<Array<PatientAliasIsAliasPatientsConnectionWhere>>;
  NOT?: InputMaybe<PatientAliasIsAliasPatientsConnectionWhere>;
  OR?: InputMaybe<Array<PatientAliasIsAliasPatientsConnectionWhere>>;
  node?: InputMaybe<PatientWhere>;
};

export type PatientAliasIsAliasPatientsCreateFieldInput = {
  node: PatientCreateInput;
};

export type PatientAliasIsAliasPatientsDeleteFieldInput = {
  delete?: InputMaybe<PatientDeleteInput>;
  where?: InputMaybe<PatientAliasIsAliasPatientsConnectionWhere>;
};

export type PatientAliasIsAliasPatientsDisconnectFieldInput = {
  disconnect?: InputMaybe<PatientDisconnectInput>;
  where?: InputMaybe<PatientAliasIsAliasPatientsConnectionWhere>;
};

export type PatientAliasIsAliasPatientsFieldInput = {
  connect?: InputMaybe<Array<PatientAliasIsAliasPatientsConnectFieldInput>>;
  create?: InputMaybe<Array<PatientAliasIsAliasPatientsCreateFieldInput>>;
};

export type PatientAliasIsAliasPatientsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<PatientAliasIsAliasPatientsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<PatientAliasIsAliasPatientsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<PatientAliasIsAliasPatientsNodeAggregationWhereInput>>;
  smilePatientId_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  smilePatientId_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  smilePatientId_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  smilePatientId_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  smilePatientId_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  smilePatientId_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  smilePatientId_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  smilePatientId_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  smilePatientId_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  smilePatientId_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  smilePatientId_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  smilePatientId_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  smilePatientId_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  smilePatientId_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  smilePatientId_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type PatientAliasIsAliasPatientsRelationship = {
  __typename?: "PatientAliasIsAliasPatientsRelationship";
  cursor: Scalars["String"]["output"];
  node: Patient;
};

export type PatientAliasIsAliasPatientsUpdateConnectionInput = {
  node?: InputMaybe<PatientUpdateInput>;
};

export type PatientAliasIsAliasPatientsUpdateFieldInput = {
  connect?: InputMaybe<Array<PatientAliasIsAliasPatientsConnectFieldInput>>;
  create?: InputMaybe<Array<PatientAliasIsAliasPatientsCreateFieldInput>>;
  delete?: InputMaybe<Array<PatientAliasIsAliasPatientsDeleteFieldInput>>;
  disconnect?: InputMaybe<
    Array<PatientAliasIsAliasPatientsDisconnectFieldInput>
  >;
  update?: InputMaybe<PatientAliasIsAliasPatientsUpdateConnectionInput>;
  where?: InputMaybe<PatientAliasIsAliasPatientsConnectionWhere>;
};

export type PatientAliasOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more PatientAliasSort objects to sort PatientAliases by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<PatientAliasSort>>;
};

export type PatientAliasPatientIsAliasPatientsAggregationSelection = {
  __typename?: "PatientAliasPatientIsAliasPatientsAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<PatientAliasPatientIsAliasPatientsNodeAggregateSelection>;
};

export type PatientAliasPatientIsAliasPatientsNodeAggregateSelection = {
  __typename?: "PatientAliasPatientIsAliasPatientsNodeAggregateSelection";
  smilePatientId: StringAggregateSelection;
};

export type PatientAliasRelationInput = {
  isAliasPatients?: InputMaybe<
    Array<PatientAliasIsAliasPatientsCreateFieldInput>
  >;
};

/** Fields to sort PatientAliases by. The order in which sorts are applied is not guaranteed when specifying many fields in one PatientAliasSort object. */
export type PatientAliasSort = {
  namespace?: InputMaybe<SortDirection>;
  value?: InputMaybe<SortDirection>;
};

export type PatientAliasUpdateInput = {
  isAliasPatients?: InputMaybe<
    Array<PatientAliasIsAliasPatientsUpdateFieldInput>
  >;
  namespace?: InputMaybe<Scalars["String"]["input"]>;
  value?: InputMaybe<Scalars["String"]["input"]>;
};

export type PatientAliasWhere = {
  AND?: InputMaybe<Array<PatientAliasWhere>>;
  NOT?: InputMaybe<PatientAliasWhere>;
  OR?: InputMaybe<Array<PatientAliasWhere>>;
  isAliasPatientsAggregate?: InputMaybe<PatientAliasIsAliasPatientsAggregateInput>;
  /** Return PatientAliases where all of the related PatientAliasIsAliasPatientsConnections match this filter */
  isAliasPatientsConnection_ALL?: InputMaybe<PatientAliasIsAliasPatientsConnectionWhere>;
  /** Return PatientAliases where none of the related PatientAliasIsAliasPatientsConnections match this filter */
  isAliasPatientsConnection_NONE?: InputMaybe<PatientAliasIsAliasPatientsConnectionWhere>;
  /** Return PatientAliases where one of the related PatientAliasIsAliasPatientsConnections match this filter */
  isAliasPatientsConnection_SINGLE?: InputMaybe<PatientAliasIsAliasPatientsConnectionWhere>;
  /** Return PatientAliases where some of the related PatientAliasIsAliasPatientsConnections match this filter */
  isAliasPatientsConnection_SOME?: InputMaybe<PatientAliasIsAliasPatientsConnectionWhere>;
  /** Return PatientAliases where all of the related Patients match this filter */
  isAliasPatients_ALL?: InputMaybe<PatientWhere>;
  /** Return PatientAliases where none of the related Patients match this filter */
  isAliasPatients_NONE?: InputMaybe<PatientWhere>;
  /** Return PatientAliases where one of the related Patients match this filter */
  isAliasPatients_SINGLE?: InputMaybe<PatientWhere>;
  /** Return PatientAliases where some of the related Patients match this filter */
  isAliasPatients_SOME?: InputMaybe<PatientWhere>;
  namespace?: InputMaybe<Scalars["String"]["input"]>;
  namespace_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  namespace_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  namespace_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  namespace_MATCHES?: InputMaybe<Scalars["String"]["input"]>;
  namespace_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  value?: InputMaybe<Scalars["String"]["input"]>;
  value_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  value_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  value_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  value_MATCHES?: InputMaybe<Scalars["String"]["input"]>;
  value_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
};

export type PatientAliasesConnection = {
  __typename?: "PatientAliasesConnection";
  edges: Array<PatientAliasEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type PatientConnectInput = {
  hasSampleSamples?: InputMaybe<
    Array<PatientHasSampleSamplesConnectFieldInput>
  >;
  patientAliasesIsAlias?: InputMaybe<
    Array<PatientPatientAliasesIsAliasConnectFieldInput>
  >;
};

export type PatientConnectWhere = {
  node: PatientWhere;
};

export type PatientCreateInput = {
  hasSampleSamples?: InputMaybe<PatientHasSampleSamplesFieldInput>;
  patientAliasesIsAlias?: InputMaybe<PatientPatientAliasesIsAliasFieldInput>;
  smilePatientId: Scalars["String"]["input"];
};

export type PatientDeleteInput = {
  hasSampleSamples?: InputMaybe<Array<PatientHasSampleSamplesDeleteFieldInput>>;
  patientAliasesIsAlias?: InputMaybe<
    Array<PatientPatientAliasesIsAliasDeleteFieldInput>
  >;
};

export type PatientDisconnectInput = {
  hasSampleSamples?: InputMaybe<
    Array<PatientHasSampleSamplesDisconnectFieldInput>
  >;
  patientAliasesIsAlias?: InputMaybe<
    Array<PatientPatientAliasesIsAliasDisconnectFieldInput>
  >;
};

export type PatientEdge = {
  __typename?: "PatientEdge";
  cursor: Scalars["String"]["output"];
  node: Patient;
};

export type PatientHasSampleSamplesAggregateInput = {
  AND?: InputMaybe<Array<PatientHasSampleSamplesAggregateInput>>;
  NOT?: InputMaybe<PatientHasSampleSamplesAggregateInput>;
  OR?: InputMaybe<Array<PatientHasSampleSamplesAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  node?: InputMaybe<PatientHasSampleSamplesNodeAggregationWhereInput>;
};

export type PatientHasSampleSamplesConnectFieldInput = {
  connect?: InputMaybe<Array<SampleConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  where?: InputMaybe<SampleConnectWhere>;
};

export type PatientHasSampleSamplesConnection = {
  __typename?: "PatientHasSampleSamplesConnection";
  edges: Array<PatientHasSampleSamplesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type PatientHasSampleSamplesConnectionSort = {
  node?: InputMaybe<SampleSort>;
};

export type PatientHasSampleSamplesConnectionWhere = {
  AND?: InputMaybe<Array<PatientHasSampleSamplesConnectionWhere>>;
  NOT?: InputMaybe<PatientHasSampleSamplesConnectionWhere>;
  OR?: InputMaybe<Array<PatientHasSampleSamplesConnectionWhere>>;
  node?: InputMaybe<SampleWhere>;
};

export type PatientHasSampleSamplesCreateFieldInput = {
  node: SampleCreateInput;
};

export type PatientHasSampleSamplesDeleteFieldInput = {
  delete?: InputMaybe<SampleDeleteInput>;
  where?: InputMaybe<PatientHasSampleSamplesConnectionWhere>;
};

export type PatientHasSampleSamplesDisconnectFieldInput = {
  disconnect?: InputMaybe<SampleDisconnectInput>;
  where?: InputMaybe<PatientHasSampleSamplesConnectionWhere>;
};

export type PatientHasSampleSamplesFieldInput = {
  connect?: InputMaybe<Array<PatientHasSampleSamplesConnectFieldInput>>;
  create?: InputMaybe<Array<PatientHasSampleSamplesCreateFieldInput>>;
};

export type PatientHasSampleSamplesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<PatientHasSampleSamplesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<PatientHasSampleSamplesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<PatientHasSampleSamplesNodeAggregationWhereInput>>;
  datasource_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  datasource_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  datasource_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  datasource_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  datasource_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  datasource_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  datasource_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  datasource_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  datasource_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  datasource_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  datasource_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  datasource_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  datasource_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  datasource_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  datasource_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  sampleCategory_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  sampleCategory_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  sampleCategory_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  sampleCategory_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  sampleCategory_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  sampleCategory_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  sampleCategory_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  sampleCategory_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  sampleCategory_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  sampleCategory_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  sampleCategory_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  sampleCategory_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  sampleCategory_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  sampleCategory_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  sampleCategory_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  sampleClass_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  sampleClass_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  sampleClass_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  sampleClass_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  sampleClass_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  smileSampleId_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  smileSampleId_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  smileSampleId_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  smileSampleId_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  smileSampleId_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  smileSampleId_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  smileSampleId_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  smileSampleId_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  smileSampleId_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  smileSampleId_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  smileSampleId_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  smileSampleId_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  smileSampleId_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  smileSampleId_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  smileSampleId_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type PatientHasSampleSamplesRelationship = {
  __typename?: "PatientHasSampleSamplesRelationship";
  cursor: Scalars["String"]["output"];
  node: Sample;
};

export type PatientHasSampleSamplesUpdateConnectionInput = {
  node?: InputMaybe<SampleUpdateInput>;
};

export type PatientHasSampleSamplesUpdateFieldInput = {
  connect?: InputMaybe<Array<PatientHasSampleSamplesConnectFieldInput>>;
  create?: InputMaybe<Array<PatientHasSampleSamplesCreateFieldInput>>;
  delete?: InputMaybe<Array<PatientHasSampleSamplesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<PatientHasSampleSamplesDisconnectFieldInput>>;
  update?: InputMaybe<PatientHasSampleSamplesUpdateConnectionInput>;
  where?: InputMaybe<PatientHasSampleSamplesConnectionWhere>;
};

export type PatientIdsTriplet = {
  __typename?: "PatientIdsTriplet";
  CMO_PATIENT_ID: Scalars["String"]["output"];
  DMP_PATIENT_ID?: Maybe<Scalars["String"]["output"]>;
  MRN: Scalars["String"]["output"];
  RACE?: Maybe<Scalars["String"]["output"]>;
};

export type PatientOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more PatientSort objects to sort Patients by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<PatientSort>>;
};

export type PatientPatientAliasPatientAliasesIsAliasAggregationSelection = {
  __typename?: "PatientPatientAliasPatientAliasesIsAliasAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<PatientPatientAliasPatientAliasesIsAliasNodeAggregateSelection>;
};

export type PatientPatientAliasPatientAliasesIsAliasNodeAggregateSelection = {
  __typename?: "PatientPatientAliasPatientAliasesIsAliasNodeAggregateSelection";
  namespace: StringAggregateSelection;
  value: StringAggregateSelection;
};

export type PatientPatientAliasesIsAliasAggregateInput = {
  AND?: InputMaybe<Array<PatientPatientAliasesIsAliasAggregateInput>>;
  NOT?: InputMaybe<PatientPatientAliasesIsAliasAggregateInput>;
  OR?: InputMaybe<Array<PatientPatientAliasesIsAliasAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  node?: InputMaybe<PatientPatientAliasesIsAliasNodeAggregationWhereInput>;
};

export type PatientPatientAliasesIsAliasConnectFieldInput = {
  connect?: InputMaybe<Array<PatientAliasConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  where?: InputMaybe<PatientAliasConnectWhere>;
};

export type PatientPatientAliasesIsAliasConnection = {
  __typename?: "PatientPatientAliasesIsAliasConnection";
  edges: Array<PatientPatientAliasesIsAliasRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type PatientPatientAliasesIsAliasConnectionSort = {
  node?: InputMaybe<PatientAliasSort>;
};

export type PatientPatientAliasesIsAliasConnectionWhere = {
  AND?: InputMaybe<Array<PatientPatientAliasesIsAliasConnectionWhere>>;
  NOT?: InputMaybe<PatientPatientAliasesIsAliasConnectionWhere>;
  OR?: InputMaybe<Array<PatientPatientAliasesIsAliasConnectionWhere>>;
  node?: InputMaybe<PatientAliasWhere>;
};

export type PatientPatientAliasesIsAliasCreateFieldInput = {
  node: PatientAliasCreateInput;
};

export type PatientPatientAliasesIsAliasDeleteFieldInput = {
  delete?: InputMaybe<PatientAliasDeleteInput>;
  where?: InputMaybe<PatientPatientAliasesIsAliasConnectionWhere>;
};

export type PatientPatientAliasesIsAliasDisconnectFieldInput = {
  disconnect?: InputMaybe<PatientAliasDisconnectInput>;
  where?: InputMaybe<PatientPatientAliasesIsAliasConnectionWhere>;
};

export type PatientPatientAliasesIsAliasFieldInput = {
  connect?: InputMaybe<Array<PatientPatientAliasesIsAliasConnectFieldInput>>;
  create?: InputMaybe<Array<PatientPatientAliasesIsAliasCreateFieldInput>>;
};

export type PatientPatientAliasesIsAliasNodeAggregationWhereInput = {
  AND?: InputMaybe<
    Array<PatientPatientAliasesIsAliasNodeAggregationWhereInput>
  >;
  NOT?: InputMaybe<PatientPatientAliasesIsAliasNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<PatientPatientAliasesIsAliasNodeAggregationWhereInput>>;
  namespace_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  namespace_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  namespace_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  namespace_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  namespace_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  namespace_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  namespace_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  namespace_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  namespace_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  namespace_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  namespace_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  namespace_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  namespace_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  namespace_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  namespace_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  value_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  value_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  value_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  value_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  value_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  value_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  value_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  value_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  value_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  value_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  value_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  value_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  value_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  value_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  value_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type PatientPatientAliasesIsAliasRelationship = {
  __typename?: "PatientPatientAliasesIsAliasRelationship";
  cursor: Scalars["String"]["output"];
  node: PatientAlias;
};

export type PatientPatientAliasesIsAliasUpdateConnectionInput = {
  node?: InputMaybe<PatientAliasUpdateInput>;
};

export type PatientPatientAliasesIsAliasUpdateFieldInput = {
  connect?: InputMaybe<Array<PatientPatientAliasesIsAliasConnectFieldInput>>;
  create?: InputMaybe<Array<PatientPatientAliasesIsAliasCreateFieldInput>>;
  delete?: InputMaybe<Array<PatientPatientAliasesIsAliasDeleteFieldInput>>;
  disconnect?: InputMaybe<
    Array<PatientPatientAliasesIsAliasDisconnectFieldInput>
  >;
  update?: InputMaybe<PatientPatientAliasesIsAliasUpdateConnectionInput>;
  where?: InputMaybe<PatientPatientAliasesIsAliasConnectionWhere>;
};

export type PatientRelationInput = {
  hasSampleSamples?: InputMaybe<Array<PatientHasSampleSamplesCreateFieldInput>>;
  patientAliasesIsAlias?: InputMaybe<
    Array<PatientPatientAliasesIsAliasCreateFieldInput>
  >;
};

export type PatientSampleHasSampleSamplesAggregationSelection = {
  __typename?: "PatientSampleHasSampleSamplesAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<PatientSampleHasSampleSamplesNodeAggregateSelection>;
};

export type PatientSampleHasSampleSamplesNodeAggregateSelection = {
  __typename?: "PatientSampleHasSampleSamplesNodeAggregateSelection";
  datasource: StringAggregateSelection;
  sampleCategory: StringAggregateSelection;
  sampleClass: StringAggregateSelection;
  smileSampleId: StringAggregateSelection;
};

/** Fields to sort Patients by. The order in which sorts are applied is not guaranteed when specifying many fields in one PatientSort object. */
export type PatientSort = {
  smilePatientId?: InputMaybe<SortDirection>;
};

export type PatientUpdateInput = {
  hasSampleSamples?: InputMaybe<Array<PatientHasSampleSamplesUpdateFieldInput>>;
  patientAliasesIsAlias?: InputMaybe<
    Array<PatientPatientAliasesIsAliasUpdateFieldInput>
  >;
  smilePatientId?: InputMaybe<Scalars["String"]["input"]>;
};

export type PatientWhere = {
  AND?: InputMaybe<Array<PatientWhere>>;
  NOT?: InputMaybe<PatientWhere>;
  OR?: InputMaybe<Array<PatientWhere>>;
  hasSampleSamplesAggregate?: InputMaybe<PatientHasSampleSamplesAggregateInput>;
  /** Return Patients where all of the related PatientHasSampleSamplesConnections match this filter */
  hasSampleSamplesConnection_ALL?: InputMaybe<PatientHasSampleSamplesConnectionWhere>;
  /** Return Patients where none of the related PatientHasSampleSamplesConnections match this filter */
  hasSampleSamplesConnection_NONE?: InputMaybe<PatientHasSampleSamplesConnectionWhere>;
  /** Return Patients where one of the related PatientHasSampleSamplesConnections match this filter */
  hasSampleSamplesConnection_SINGLE?: InputMaybe<PatientHasSampleSamplesConnectionWhere>;
  /** Return Patients where some of the related PatientHasSampleSamplesConnections match this filter */
  hasSampleSamplesConnection_SOME?: InputMaybe<PatientHasSampleSamplesConnectionWhere>;
  /** Return Patients where all of the related Samples match this filter */
  hasSampleSamples_ALL?: InputMaybe<SampleWhere>;
  /** Return Patients where none of the related Samples match this filter */
  hasSampleSamples_NONE?: InputMaybe<SampleWhere>;
  /** Return Patients where one of the related Samples match this filter */
  hasSampleSamples_SINGLE?: InputMaybe<SampleWhere>;
  /** Return Patients where some of the related Samples match this filter */
  hasSampleSamples_SOME?: InputMaybe<SampleWhere>;
  patientAliasesIsAliasAggregate?: InputMaybe<PatientPatientAliasesIsAliasAggregateInput>;
  /** Return Patients where all of the related PatientPatientAliasesIsAliasConnections match this filter */
  patientAliasesIsAliasConnection_ALL?: InputMaybe<PatientPatientAliasesIsAliasConnectionWhere>;
  /** Return Patients where none of the related PatientPatientAliasesIsAliasConnections match this filter */
  patientAliasesIsAliasConnection_NONE?: InputMaybe<PatientPatientAliasesIsAliasConnectionWhere>;
  /** Return Patients where one of the related PatientPatientAliasesIsAliasConnections match this filter */
  patientAliasesIsAliasConnection_SINGLE?: InputMaybe<PatientPatientAliasesIsAliasConnectionWhere>;
  /** Return Patients where some of the related PatientPatientAliasesIsAliasConnections match this filter */
  patientAliasesIsAliasConnection_SOME?: InputMaybe<PatientPatientAliasesIsAliasConnectionWhere>;
  /** Return Patients where all of the related PatientAliases match this filter */
  patientAliasesIsAlias_ALL?: InputMaybe<PatientAliasWhere>;
  /** Return Patients where none of the related PatientAliases match this filter */
  patientAliasesIsAlias_NONE?: InputMaybe<PatientAliasWhere>;
  /** Return Patients where one of the related PatientAliases match this filter */
  patientAliasesIsAlias_SINGLE?: InputMaybe<PatientAliasWhere>;
  /** Return Patients where some of the related PatientAliases match this filter */
  patientAliasesIsAlias_SOME?: InputMaybe<PatientAliasWhere>;
  smilePatientId?: InputMaybe<Scalars["String"]["input"]>;
  smilePatientId_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  smilePatientId_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  smilePatientId_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  smilePatientId_MATCHES?: InputMaybe<Scalars["String"]["input"]>;
  smilePatientId_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
};

export type PatientsConnection = {
  __typename?: "PatientsConnection";
  edges: Array<PatientEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type Project = {
  __typename?: "Project";
  hasRequestRequests: Array<Request>;
  hasRequestRequestsAggregate?: Maybe<ProjectRequestHasRequestRequestsAggregationSelection>;
  hasRequestRequestsConnection: ProjectHasRequestRequestsConnection;
  igoProjectId: Scalars["String"]["output"];
  namespace: Scalars["String"]["output"];
};

export type ProjectHasRequestRequestsArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  options?: InputMaybe<RequestOptions>;
  where?: InputMaybe<RequestWhere>;
};

export type ProjectHasRequestRequestsAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<RequestWhere>;
};

export type ProjectHasRequestRequestsConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<ProjectHasRequestRequestsConnectionSort>>;
  where?: InputMaybe<ProjectHasRequestRequestsConnectionWhere>;
};

export type ProjectAggregateSelection = {
  __typename?: "ProjectAggregateSelection";
  count: Scalars["Int"]["output"];
  igoProjectId: StringAggregateSelection;
  namespace: StringAggregateSelection;
};

export type ProjectConnectInput = {
  hasRequestRequests?: InputMaybe<
    Array<ProjectHasRequestRequestsConnectFieldInput>
  >;
};

export type ProjectConnectWhere = {
  node: ProjectWhere;
};

export type ProjectCreateInput = {
  hasRequestRequests?: InputMaybe<ProjectHasRequestRequestsFieldInput>;
  igoProjectId: Scalars["String"]["input"];
  namespace: Scalars["String"]["input"];
};

export type ProjectDeleteInput = {
  hasRequestRequests?: InputMaybe<
    Array<ProjectHasRequestRequestsDeleteFieldInput>
  >;
};

export type ProjectDisconnectInput = {
  hasRequestRequests?: InputMaybe<
    Array<ProjectHasRequestRequestsDisconnectFieldInput>
  >;
};

export type ProjectEdge = {
  __typename?: "ProjectEdge";
  cursor: Scalars["String"]["output"];
  node: Project;
};

export type ProjectHasRequestRequestsAggregateInput = {
  AND?: InputMaybe<Array<ProjectHasRequestRequestsAggregateInput>>;
  NOT?: InputMaybe<ProjectHasRequestRequestsAggregateInput>;
  OR?: InputMaybe<Array<ProjectHasRequestRequestsAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  node?: InputMaybe<ProjectHasRequestRequestsNodeAggregationWhereInput>;
};

export type ProjectHasRequestRequestsConnectFieldInput = {
  connect?: InputMaybe<Array<RequestConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  where?: InputMaybe<RequestConnectWhere>;
};

export type ProjectHasRequestRequestsConnection = {
  __typename?: "ProjectHasRequestRequestsConnection";
  edges: Array<ProjectHasRequestRequestsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type ProjectHasRequestRequestsConnectionSort = {
  node?: InputMaybe<RequestSort>;
};

export type ProjectHasRequestRequestsConnectionWhere = {
  AND?: InputMaybe<Array<ProjectHasRequestRequestsConnectionWhere>>;
  NOT?: InputMaybe<ProjectHasRequestRequestsConnectionWhere>;
  OR?: InputMaybe<Array<ProjectHasRequestRequestsConnectionWhere>>;
  node?: InputMaybe<RequestWhere>;
};

export type ProjectHasRequestRequestsCreateFieldInput = {
  node: RequestCreateInput;
};

export type ProjectHasRequestRequestsDeleteFieldInput = {
  delete?: InputMaybe<RequestDeleteInput>;
  where?: InputMaybe<ProjectHasRequestRequestsConnectionWhere>;
};

export type ProjectHasRequestRequestsDisconnectFieldInput = {
  disconnect?: InputMaybe<RequestDisconnectInput>;
  where?: InputMaybe<ProjectHasRequestRequestsConnectionWhere>;
};

export type ProjectHasRequestRequestsFieldInput = {
  connect?: InputMaybe<Array<ProjectHasRequestRequestsConnectFieldInput>>;
  create?: InputMaybe<Array<ProjectHasRequestRequestsCreateFieldInput>>;
};

export type ProjectHasRequestRequestsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ProjectHasRequestRequestsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ProjectHasRequestRequestsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<ProjectHasRequestRequestsNodeAggregationWhereInput>>;
  dataAccessEmails_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  dataAccessEmails_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  dataAccessEmails_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  dataAccessEmails_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  dataAccessEmails_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  dataAccessEmails_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  dataAccessEmails_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  dataAccessEmails_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  dataAccessEmails_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  dataAccessEmails_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  dataAccessEmails_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  dataAccessEmails_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  dataAccessEmails_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  dataAccessEmails_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  dataAccessEmails_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  dataAnalystEmail_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  dataAnalystEmail_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  dataAnalystEmail_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  dataAnalystEmail_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  dataAnalystEmail_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  dataAnalystEmail_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  dataAnalystEmail_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  dataAnalystEmail_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  dataAnalystEmail_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  dataAnalystEmail_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  dataAnalystEmail_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  dataAnalystEmail_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  dataAnalystEmail_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  dataAnalystEmail_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  dataAnalystEmail_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  dataAnalystName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  dataAnalystName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  dataAnalystName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  dataAnalystName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  dataAnalystName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  dataAnalystName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  dataAnalystName_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  dataAnalystName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  dataAnalystName_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  dataAnalystName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  dataAnalystName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  dataAnalystName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  dataAnalystName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  dataAnalystName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  dataAnalystName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  genePanel_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  genePanel_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  genePanel_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  genePanel_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  genePanel_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  genePanel_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  genePanel_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  genePanel_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  genePanel_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  genePanel_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  genePanel_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  genePanel_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  genePanel_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  genePanel_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  genePanel_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  igoDeliveryDate_AVERAGE_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  igoDeliveryDate_AVERAGE_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  igoDeliveryDate_AVERAGE_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  igoDeliveryDate_AVERAGE_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  igoDeliveryDate_AVERAGE_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  igoDeliveryDate_MAX_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  igoDeliveryDate_MAX_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  igoDeliveryDate_MAX_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  igoDeliveryDate_MAX_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  igoDeliveryDate_MAX_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  igoDeliveryDate_MIN_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  igoDeliveryDate_MIN_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  igoDeliveryDate_MIN_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  igoDeliveryDate_MIN_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  igoDeliveryDate_MIN_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  igoDeliveryDate_SUM_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  igoDeliveryDate_SUM_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  igoDeliveryDate_SUM_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  igoDeliveryDate_SUM_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  igoDeliveryDate_SUM_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  igoProjectId_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  igoProjectId_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  igoProjectId_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  igoProjectId_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  igoProjectId_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  igoProjectId_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  igoProjectId_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  igoProjectId_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  igoProjectId_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  igoProjectId_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  igoProjectId_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  igoProjectId_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  igoProjectId_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  igoProjectId_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  igoProjectId_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  igoRequestId_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  igoRequestId_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  igoRequestId_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  igoRequestId_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  igoRequestId_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  igoRequestId_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  igoRequestId_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  igoRequestId_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  igoRequestId_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  igoRequestId_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  igoRequestId_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  igoRequestId_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  igoRequestId_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  igoRequestId_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  igoRequestId_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  ilabRequestId_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  ilabRequestId_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  ilabRequestId_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  ilabRequestId_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  ilabRequestId_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  ilabRequestId_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  ilabRequestId_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  ilabRequestId_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  ilabRequestId_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  ilabRequestId_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  ilabRequestId_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  ilabRequestId_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  ilabRequestId_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  ilabRequestId_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  ilabRequestId_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  investigatorEmail_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars["Float"]["input"]
  >;
  investigatorEmail_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  investigatorEmail_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  investigatorEmail_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  investigatorEmail_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  investigatorEmail_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  investigatorEmail_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  investigatorEmail_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  investigatorEmail_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  investigatorEmail_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  investigatorEmail_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  investigatorEmail_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  investigatorEmail_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  investigatorEmail_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  investigatorEmail_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  investigatorName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  investigatorName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  investigatorName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  investigatorName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  investigatorName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  investigatorName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  investigatorName_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  investigatorName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  investigatorName_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  investigatorName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  investigatorName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  investigatorName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  investigatorName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  investigatorName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  investigatorName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  labHeadEmail_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  labHeadEmail_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  labHeadEmail_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  labHeadEmail_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  labHeadEmail_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  labHeadEmail_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  labHeadEmail_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  labHeadEmail_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  labHeadEmail_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  labHeadEmail_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  labHeadEmail_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  labHeadEmail_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  labHeadEmail_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  labHeadEmail_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  labHeadEmail_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  labHeadName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  labHeadName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  labHeadName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  labHeadName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  labHeadName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  labHeadName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  labHeadName_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  labHeadName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  labHeadName_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  labHeadName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  labHeadName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  labHeadName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  labHeadName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  labHeadName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  labHeadName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  libraryType_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  libraryType_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  libraryType_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  libraryType_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  libraryType_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  libraryType_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  libraryType_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  libraryType_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  libraryType_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  libraryType_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  libraryType_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  libraryType_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  libraryType_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  libraryType_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  libraryType_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  namespace_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  namespace_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  namespace_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  namespace_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  namespace_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  namespace_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  namespace_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  namespace_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  namespace_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  namespace_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  namespace_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  namespace_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  namespace_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  namespace_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  namespace_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  otherContactEmails_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars["Float"]["input"]
  >;
  otherContactEmails_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  otherContactEmails_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  otherContactEmails_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  otherContactEmails_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  otherContactEmails_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  otherContactEmails_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  otherContactEmails_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  otherContactEmails_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  otherContactEmails_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  otherContactEmails_SHORTEST_LENGTH_EQUAL?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  otherContactEmails_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  otherContactEmails_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  otherContactEmails_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  otherContactEmails_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  piEmail_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  piEmail_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  piEmail_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  piEmail_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  piEmail_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  piEmail_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  piEmail_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  piEmail_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  piEmail_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  piEmail_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  piEmail_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  piEmail_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  piEmail_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  piEmail_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  piEmail_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  projectManagerName_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars["Float"]["input"]
  >;
  projectManagerName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  projectManagerName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  projectManagerName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  projectManagerName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  projectManagerName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  projectManagerName_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  projectManagerName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  projectManagerName_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  projectManagerName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  projectManagerName_SHORTEST_LENGTH_EQUAL?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  projectManagerName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  projectManagerName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  projectManagerName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  projectManagerName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  qcAccessEmails_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  qcAccessEmails_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  qcAccessEmails_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  qcAccessEmails_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  qcAccessEmails_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  qcAccessEmails_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  qcAccessEmails_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  qcAccessEmails_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  qcAccessEmails_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  qcAccessEmails_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  qcAccessEmails_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  qcAccessEmails_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  qcAccessEmails_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  qcAccessEmails_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  qcAccessEmails_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  requestJson_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  requestJson_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  requestJson_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  requestJson_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  requestJson_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  requestJson_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  requestJson_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  requestJson_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  requestJson_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  requestJson_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  requestJson_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  requestJson_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  requestJson_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  requestJson_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  requestJson_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  smileRequestId_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  smileRequestId_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  smileRequestId_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  smileRequestId_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  smileRequestId_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  smileRequestId_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  smileRequestId_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  smileRequestId_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  smileRequestId_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  smileRequestId_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  smileRequestId_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  smileRequestId_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  smileRequestId_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  smileRequestId_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  smileRequestId_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  strand_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  strand_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  strand_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  strand_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  strand_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  strand_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  strand_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  strand_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  strand_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  strand_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  strand_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  strand_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  strand_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  strand_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  strand_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ProjectHasRequestRequestsRelationship = {
  __typename?: "ProjectHasRequestRequestsRelationship";
  cursor: Scalars["String"]["output"];
  node: Request;
};

export type ProjectHasRequestRequestsUpdateConnectionInput = {
  node?: InputMaybe<RequestUpdateInput>;
};

export type ProjectHasRequestRequestsUpdateFieldInput = {
  connect?: InputMaybe<Array<ProjectHasRequestRequestsConnectFieldInput>>;
  create?: InputMaybe<Array<ProjectHasRequestRequestsCreateFieldInput>>;
  delete?: InputMaybe<Array<ProjectHasRequestRequestsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<ProjectHasRequestRequestsDisconnectFieldInput>>;
  update?: InputMaybe<ProjectHasRequestRequestsUpdateConnectionInput>;
  where?: InputMaybe<ProjectHasRequestRequestsConnectionWhere>;
};

export type ProjectOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more ProjectSort objects to sort Projects by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<ProjectSort>>;
};

export type ProjectRelationInput = {
  hasRequestRequests?: InputMaybe<
    Array<ProjectHasRequestRequestsCreateFieldInput>
  >;
};

export type ProjectRequestHasRequestRequestsAggregationSelection = {
  __typename?: "ProjectRequestHasRequestRequestsAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<ProjectRequestHasRequestRequestsNodeAggregateSelection>;
};

export type ProjectRequestHasRequestRequestsNodeAggregateSelection = {
  __typename?: "ProjectRequestHasRequestRequestsNodeAggregateSelection";
  dataAccessEmails: StringAggregateSelection;
  dataAnalystEmail: StringAggregateSelection;
  dataAnalystName: StringAggregateSelection;
  genePanel: StringAggregateSelection;
  igoDeliveryDate: BigIntAggregateSelection;
  igoProjectId: StringAggregateSelection;
  igoRequestId: StringAggregateSelection;
  ilabRequestId: StringAggregateSelection;
  investigatorEmail: StringAggregateSelection;
  investigatorName: StringAggregateSelection;
  labHeadEmail: StringAggregateSelection;
  labHeadName: StringAggregateSelection;
  libraryType: StringAggregateSelection;
  namespace: StringAggregateSelection;
  otherContactEmails: StringAggregateSelection;
  piEmail: StringAggregateSelection;
  projectManagerName: StringAggregateSelection;
  qcAccessEmails: StringAggregateSelection;
  requestJson: StringAggregateSelection;
  smileRequestId: StringAggregateSelection;
  strand: StringAggregateSelection;
};

/** Fields to sort Projects by. The order in which sorts are applied is not guaranteed when specifying many fields in one ProjectSort object. */
export type ProjectSort = {
  igoProjectId?: InputMaybe<SortDirection>;
  namespace?: InputMaybe<SortDirection>;
};

export type ProjectUpdateInput = {
  hasRequestRequests?: InputMaybe<
    Array<ProjectHasRequestRequestsUpdateFieldInput>
  >;
  igoProjectId?: InputMaybe<Scalars["String"]["input"]>;
  namespace?: InputMaybe<Scalars["String"]["input"]>;
};

export type ProjectWhere = {
  AND?: InputMaybe<Array<ProjectWhere>>;
  NOT?: InputMaybe<ProjectWhere>;
  OR?: InputMaybe<Array<ProjectWhere>>;
  hasRequestRequestsAggregate?: InputMaybe<ProjectHasRequestRequestsAggregateInput>;
  /** Return Projects where all of the related ProjectHasRequestRequestsConnections match this filter */
  hasRequestRequestsConnection_ALL?: InputMaybe<ProjectHasRequestRequestsConnectionWhere>;
  /** Return Projects where none of the related ProjectHasRequestRequestsConnections match this filter */
  hasRequestRequestsConnection_NONE?: InputMaybe<ProjectHasRequestRequestsConnectionWhere>;
  /** Return Projects where one of the related ProjectHasRequestRequestsConnections match this filter */
  hasRequestRequestsConnection_SINGLE?: InputMaybe<ProjectHasRequestRequestsConnectionWhere>;
  /** Return Projects where some of the related ProjectHasRequestRequestsConnections match this filter */
  hasRequestRequestsConnection_SOME?: InputMaybe<ProjectHasRequestRequestsConnectionWhere>;
  /** Return Projects where all of the related Requests match this filter */
  hasRequestRequests_ALL?: InputMaybe<RequestWhere>;
  /** Return Projects where none of the related Requests match this filter */
  hasRequestRequests_NONE?: InputMaybe<RequestWhere>;
  /** Return Projects where one of the related Requests match this filter */
  hasRequestRequests_SINGLE?: InputMaybe<RequestWhere>;
  /** Return Projects where some of the related Requests match this filter */
  hasRequestRequests_SOME?: InputMaybe<RequestWhere>;
  igoProjectId?: InputMaybe<Scalars["String"]["input"]>;
  igoProjectId_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  igoProjectId_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  igoProjectId_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  igoProjectId_MATCHES?: InputMaybe<Scalars["String"]["input"]>;
  igoProjectId_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  namespace?: InputMaybe<Scalars["String"]["input"]>;
  namespace_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  namespace_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  namespace_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  namespace_MATCHES?: InputMaybe<Scalars["String"]["input"]>;
  namespace_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
};

export type ProjectsConnection = {
  __typename?: "ProjectsConnection";
  edges: Array<ProjectEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type QcComplete = {
  __typename?: "QcComplete";
  date: Scalars["String"]["output"];
  reason: Scalars["String"]["output"];
  result: Scalars["String"]["output"];
  status: Scalars["String"]["output"];
  temposHasEvent: Array<Tempo>;
  temposHasEventAggregate?: Maybe<QcCompleteTempoTemposHasEventAggregationSelection>;
  temposHasEventConnection: QcCompleteTemposHasEventConnection;
};

export type QcCompleteTemposHasEventArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  options?: InputMaybe<TempoOptions>;
  where?: InputMaybe<TempoWhere>;
};

export type QcCompleteTemposHasEventAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<TempoWhere>;
};

export type QcCompleteTemposHasEventConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<QcCompleteTemposHasEventConnectionSort>>;
  where?: InputMaybe<QcCompleteTemposHasEventConnectionWhere>;
};

export type QcCompleteAggregateSelection = {
  __typename?: "QcCompleteAggregateSelection";
  count: Scalars["Int"]["output"];
  date: StringAggregateSelection;
  reason: StringAggregateSelection;
  result: StringAggregateSelection;
  status: StringAggregateSelection;
};

export type QcCompleteConnectInput = {
  temposHasEvent?: InputMaybe<Array<QcCompleteTemposHasEventConnectFieldInput>>;
};

export type QcCompleteConnectWhere = {
  node: QcCompleteWhere;
};

export type QcCompleteCreateInput = {
  date: Scalars["String"]["input"];
  reason: Scalars["String"]["input"];
  result: Scalars["String"]["input"];
  status: Scalars["String"]["input"];
  temposHasEvent?: InputMaybe<QcCompleteTemposHasEventFieldInput>;
};

export type QcCompleteDeleteInput = {
  temposHasEvent?: InputMaybe<Array<QcCompleteTemposHasEventDeleteFieldInput>>;
};

export type QcCompleteDisconnectInput = {
  temposHasEvent?: InputMaybe<
    Array<QcCompleteTemposHasEventDisconnectFieldInput>
  >;
};

export type QcCompleteEdge = {
  __typename?: "QcCompleteEdge";
  cursor: Scalars["String"]["output"];
  node: QcComplete;
};

export type QcCompleteOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more QcCompleteSort objects to sort QcCompletes by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<QcCompleteSort>>;
};

export type QcCompleteRelationInput = {
  temposHasEvent?: InputMaybe<Array<QcCompleteTemposHasEventCreateFieldInput>>;
};

/** Fields to sort QcCompletes by. The order in which sorts are applied is not guaranteed when specifying many fields in one QcCompleteSort object. */
export type QcCompleteSort = {
  date?: InputMaybe<SortDirection>;
  reason?: InputMaybe<SortDirection>;
  result?: InputMaybe<SortDirection>;
  status?: InputMaybe<SortDirection>;
};

export type QcCompleteTempoTemposHasEventAggregationSelection = {
  __typename?: "QcCompleteTempoTemposHasEventAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<QcCompleteTempoTemposHasEventNodeAggregateSelection>;
};

export type QcCompleteTempoTemposHasEventNodeAggregateSelection = {
  __typename?: "QcCompleteTempoTemposHasEventNodeAggregateSelection";
  accessLevel: StringAggregateSelection;
  billedBy: StringAggregateSelection;
  costCenter: StringAggregateSelection;
  custodianInformation: StringAggregateSelection;
  embargoDate: StringAggregateSelection;
  initialPipelineRunDate: StringAggregateSelection;
  smileTempoId: StringAggregateSelection;
};

export type QcCompleteTemposHasEventAggregateInput = {
  AND?: InputMaybe<Array<QcCompleteTemposHasEventAggregateInput>>;
  NOT?: InputMaybe<QcCompleteTemposHasEventAggregateInput>;
  OR?: InputMaybe<Array<QcCompleteTemposHasEventAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  node?: InputMaybe<QcCompleteTemposHasEventNodeAggregationWhereInput>;
};

export type QcCompleteTemposHasEventConnectFieldInput = {
  connect?: InputMaybe<Array<TempoConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  where?: InputMaybe<TempoConnectWhere>;
};

export type QcCompleteTemposHasEventConnection = {
  __typename?: "QcCompleteTemposHasEventConnection";
  edges: Array<QcCompleteTemposHasEventRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type QcCompleteTemposHasEventConnectionSort = {
  node?: InputMaybe<TempoSort>;
};

export type QcCompleteTemposHasEventConnectionWhere = {
  AND?: InputMaybe<Array<QcCompleteTemposHasEventConnectionWhere>>;
  NOT?: InputMaybe<QcCompleteTemposHasEventConnectionWhere>;
  OR?: InputMaybe<Array<QcCompleteTemposHasEventConnectionWhere>>;
  node?: InputMaybe<TempoWhere>;
};

export type QcCompleteTemposHasEventCreateFieldInput = {
  node: TempoCreateInput;
};

export type QcCompleteTemposHasEventDeleteFieldInput = {
  delete?: InputMaybe<TempoDeleteInput>;
  where?: InputMaybe<QcCompleteTemposHasEventConnectionWhere>;
};

export type QcCompleteTemposHasEventDisconnectFieldInput = {
  disconnect?: InputMaybe<TempoDisconnectInput>;
  where?: InputMaybe<QcCompleteTemposHasEventConnectionWhere>;
};

export type QcCompleteTemposHasEventFieldInput = {
  connect?: InputMaybe<Array<QcCompleteTemposHasEventConnectFieldInput>>;
  create?: InputMaybe<Array<QcCompleteTemposHasEventCreateFieldInput>>;
};

export type QcCompleteTemposHasEventNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<QcCompleteTemposHasEventNodeAggregationWhereInput>>;
  NOT?: InputMaybe<QcCompleteTemposHasEventNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<QcCompleteTemposHasEventNodeAggregationWhereInput>>;
  accessLevel_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  accessLevel_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  accessLevel_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  accessLevel_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  accessLevel_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  accessLevel_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  accessLevel_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  accessLevel_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  accessLevel_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  accessLevel_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  accessLevel_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  accessLevel_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  accessLevel_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  accessLevel_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  accessLevel_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  billedBy_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  billedBy_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  billedBy_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  billedBy_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  billedBy_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  billedBy_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  billedBy_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  billedBy_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  billedBy_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  billedBy_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  billedBy_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  billedBy_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  billedBy_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  billedBy_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  billedBy_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  costCenter_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  costCenter_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  costCenter_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  costCenter_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  costCenter_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  costCenter_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  costCenter_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  costCenter_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  costCenter_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  costCenter_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  costCenter_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  costCenter_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  costCenter_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  costCenter_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  costCenter_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  custodianInformation_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars["Float"]["input"]
  >;
  custodianInformation_AVERAGE_LENGTH_GT?: InputMaybe<
    Scalars["Float"]["input"]
  >;
  custodianInformation_AVERAGE_LENGTH_GTE?: InputMaybe<
    Scalars["Float"]["input"]
  >;
  custodianInformation_AVERAGE_LENGTH_LT?: InputMaybe<
    Scalars["Float"]["input"]
  >;
  custodianInformation_AVERAGE_LENGTH_LTE?: InputMaybe<
    Scalars["Float"]["input"]
  >;
  custodianInformation_LONGEST_LENGTH_EQUAL?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  custodianInformation_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  custodianInformation_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  custodianInformation_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  custodianInformation_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  custodianInformation_SHORTEST_LENGTH_EQUAL?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  custodianInformation_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  custodianInformation_SHORTEST_LENGTH_GTE?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  custodianInformation_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  custodianInformation_SHORTEST_LENGTH_LTE?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  embargoDate_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  embargoDate_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  embargoDate_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  embargoDate_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  embargoDate_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  embargoDate_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  embargoDate_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  embargoDate_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  embargoDate_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  embargoDate_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  embargoDate_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  embargoDate_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  embargoDate_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  embargoDate_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  embargoDate_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  initialPipelineRunDate_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars["Float"]["input"]
  >;
  initialPipelineRunDate_AVERAGE_LENGTH_GT?: InputMaybe<
    Scalars["Float"]["input"]
  >;
  initialPipelineRunDate_AVERAGE_LENGTH_GTE?: InputMaybe<
    Scalars["Float"]["input"]
  >;
  initialPipelineRunDate_AVERAGE_LENGTH_LT?: InputMaybe<
    Scalars["Float"]["input"]
  >;
  initialPipelineRunDate_AVERAGE_LENGTH_LTE?: InputMaybe<
    Scalars["Float"]["input"]
  >;
  initialPipelineRunDate_LONGEST_LENGTH_EQUAL?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  initialPipelineRunDate_LONGEST_LENGTH_GT?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  initialPipelineRunDate_LONGEST_LENGTH_GTE?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  initialPipelineRunDate_LONGEST_LENGTH_LT?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  initialPipelineRunDate_LONGEST_LENGTH_LTE?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  initialPipelineRunDate_SHORTEST_LENGTH_EQUAL?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  initialPipelineRunDate_SHORTEST_LENGTH_GT?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  initialPipelineRunDate_SHORTEST_LENGTH_GTE?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  initialPipelineRunDate_SHORTEST_LENGTH_LT?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  initialPipelineRunDate_SHORTEST_LENGTH_LTE?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  smileTempoId_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  smileTempoId_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  smileTempoId_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  smileTempoId_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  smileTempoId_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  smileTempoId_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  smileTempoId_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  smileTempoId_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  smileTempoId_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  smileTempoId_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  smileTempoId_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  smileTempoId_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  smileTempoId_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  smileTempoId_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  smileTempoId_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QcCompleteTemposHasEventRelationship = {
  __typename?: "QcCompleteTemposHasEventRelationship";
  cursor: Scalars["String"]["output"];
  node: Tempo;
};

export type QcCompleteTemposHasEventUpdateConnectionInput = {
  node?: InputMaybe<TempoUpdateInput>;
};

export type QcCompleteTemposHasEventUpdateFieldInput = {
  connect?: InputMaybe<Array<QcCompleteTemposHasEventConnectFieldInput>>;
  create?: InputMaybe<Array<QcCompleteTemposHasEventCreateFieldInput>>;
  delete?: InputMaybe<Array<QcCompleteTemposHasEventDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<QcCompleteTemposHasEventDisconnectFieldInput>>;
  update?: InputMaybe<QcCompleteTemposHasEventUpdateConnectionInput>;
  where?: InputMaybe<QcCompleteTemposHasEventConnectionWhere>;
};

export type QcCompleteUpdateInput = {
  date?: InputMaybe<Scalars["String"]["input"]>;
  reason?: InputMaybe<Scalars["String"]["input"]>;
  result?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  temposHasEvent?: InputMaybe<Array<QcCompleteTemposHasEventUpdateFieldInput>>;
};

export type QcCompleteWhere = {
  AND?: InputMaybe<Array<QcCompleteWhere>>;
  NOT?: InputMaybe<QcCompleteWhere>;
  OR?: InputMaybe<Array<QcCompleteWhere>>;
  date?: InputMaybe<Scalars["String"]["input"]>;
  date_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  date_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  date_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  date_MATCHES?: InputMaybe<Scalars["String"]["input"]>;
  date_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  reason?: InputMaybe<Scalars["String"]["input"]>;
  reason_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  reason_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  reason_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  reason_MATCHES?: InputMaybe<Scalars["String"]["input"]>;
  reason_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  result?: InputMaybe<Scalars["String"]["input"]>;
  result_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  result_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  result_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  result_MATCHES?: InputMaybe<Scalars["String"]["input"]>;
  result_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  status_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  status_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  status_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  status_MATCHES?: InputMaybe<Scalars["String"]["input"]>;
  status_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  temposHasEventAggregate?: InputMaybe<QcCompleteTemposHasEventAggregateInput>;
  /** Return QcCompletes where all of the related QcCompleteTemposHasEventConnections match this filter */
  temposHasEventConnection_ALL?: InputMaybe<QcCompleteTemposHasEventConnectionWhere>;
  /** Return QcCompletes where none of the related QcCompleteTemposHasEventConnections match this filter */
  temposHasEventConnection_NONE?: InputMaybe<QcCompleteTemposHasEventConnectionWhere>;
  /** Return QcCompletes where one of the related QcCompleteTemposHasEventConnections match this filter */
  temposHasEventConnection_SINGLE?: InputMaybe<QcCompleteTemposHasEventConnectionWhere>;
  /** Return QcCompletes where some of the related QcCompleteTemposHasEventConnections match this filter */
  temposHasEventConnection_SOME?: InputMaybe<QcCompleteTemposHasEventConnectionWhere>;
  /** Return QcCompletes where all of the related Tempos match this filter */
  temposHasEvent_ALL?: InputMaybe<TempoWhere>;
  /** Return QcCompletes where none of the related Tempos match this filter */
  temposHasEvent_NONE?: InputMaybe<TempoWhere>;
  /** Return QcCompletes where one of the related Tempos match this filter */
  temposHasEvent_SINGLE?: InputMaybe<TempoWhere>;
  /** Return QcCompletes where some of the related Tempos match this filter */
  temposHasEvent_SOME?: InputMaybe<TempoWhere>;
};

export type QcCompletesConnection = {
  __typename?: "QcCompletesConnection";
  edges: Array<QcCompleteEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type Query = {
  __typename?: "Query";
  allAnchorSeqDateData: Array<AnchorSeqDateData>;
  allBlockedCohortIds: Array<Scalars["String"]["output"]>;
  bamCompletes: Array<BamComplete>;
  bamCompletesAggregate: BamCompleteAggregateSelection;
  bamCompletesConnection: BamCompletesConnection;
  cohortCompletes: Array<CohortComplete>;
  cohortCompletesAggregate: CohortCompleteAggregateSelection;
  cohortCompletesConnection: CohortCompletesConnection;
  cohorts: Array<Cohort>;
  cohortsAggregate: CohortAggregateSelection;
  cohortsConnection: CohortsConnection;
  dashboardCohorts: Array<DashboardCohort>;
  dashboardPatients: Array<DashboardPatient>;
  dashboardRequests: Array<DashboardRequest>;
  dashboardSampleHistory: Array<DashboardSample>;
  dashboardSamples: Array<DashboardSample>;
  dbGaps: Array<DbGap>;
  dbGapsAggregate: DbGapAggregateSelection;
  dbGapsConnection: DbGapsConnection;
  getValidationAdvice?: Maybe<ValidationAdvice>;
  mafCompletes: Array<MafComplete>;
  mafCompletesAggregate: MafCompleteAggregateSelection;
  mafCompletesConnection: MafCompletesConnection;
  patientAliases: Array<PatientAlias>;
  patientAliasesAggregate: PatientAliasAggregateSelection;
  patientAliasesConnection: PatientAliasesConnection;
  patients: Array<Patient>;
  patientsAggregate: PatientAggregateSelection;
  patientsConnection: PatientsConnection;
  projects: Array<Project>;
  projectsAggregate: ProjectAggregateSelection;
  projectsConnection: ProjectsConnection;
  qcCompletes: Array<QcComplete>;
  qcCompletesAggregate: QcCompleteAggregateSelection;
  qcCompletesConnection: QcCompletesConnection;
  requestMetadata: Array<RequestMetadata>;
  requestMetadataAggregate: RequestMetadataAggregateSelection;
  requestMetadataConnection: RequestMetadataConnection;
  requests: Array<Request>;
  requestsAggregate: RequestAggregateSelection;
  requestsConnection: RequestsConnection;
  sampleAliases: Array<SampleAlias>;
  sampleAliasesAggregate: SampleAliasAggregateSelection;
  sampleAliasesConnection: SampleAliasesConnection;
  sampleMetadata: Array<SampleMetadata>;
  sampleMetadataAggregate: SampleMetadataAggregateSelection;
  sampleMetadataConnection: SampleMetadataConnection;
  samples: Array<Sample>;
  samplesAggregate: SampleAggregateSelection;
  samplesConnection: SamplesConnection;
  statuses: Array<Status>;
  statusesAggregate: StatusAggregateSelection;
  statusesConnection: StatusesConnection;
  tempos: Array<Tempo>;
  temposAggregate: TempoAggregateSelection;
  temposConnection: TemposConnection;
};

export type QueryAllAnchorSeqDateDataArgs = {
  phiEnabled?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QueryBamCompletesArgs = {
  options?: InputMaybe<BamCompleteOptions>;
  where?: InputMaybe<BamCompleteWhere>;
};

export type QueryBamCompletesAggregateArgs = {
  where?: InputMaybe<BamCompleteWhere>;
};

export type QueryBamCompletesConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<BamCompleteSort>>>;
  where?: InputMaybe<BamCompleteWhere>;
};

export type QueryCohortCompletesArgs = {
  options?: InputMaybe<CohortCompleteOptions>;
  where?: InputMaybe<CohortCompleteWhere>;
};

export type QueryCohortCompletesAggregateArgs = {
  where?: InputMaybe<CohortCompleteWhere>;
};

export type QueryCohortCompletesConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<CohortCompleteSort>>>;
  where?: InputMaybe<CohortCompleteWhere>;
};

export type QueryCohortsArgs = {
  options?: InputMaybe<CohortOptions>;
  where?: InputMaybe<CohortWhere>;
};

export type QueryCohortsAggregateArgs = {
  where?: InputMaybe<CohortWhere>;
};

export type QueryCohortsConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<CohortSort>>>;
  where?: InputMaybe<CohortWhere>;
};

export type QueryDashboardCohortsArgs = {
  columnFilters?: InputMaybe<Array<DashboardRecordColumnFilter>>;
  limit: Scalars["Int"]["input"];
  offset: Scalars["Int"]["input"];
  searchVals?: InputMaybe<Array<Scalars["String"]["input"]>>;
  sort: DashboardRecordSort;
};

export type QueryDashboardPatientsArgs = {
  columnFilters?: InputMaybe<Array<DashboardRecordColumnFilter>>;
  limit: Scalars["Int"]["input"];
  offset: Scalars["Int"]["input"];
  phiEnabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  searchVals?: InputMaybe<Array<Scalars["String"]["input"]>>;
  sort: DashboardRecordSort;
};

export type QueryDashboardRequestsArgs = {
  columnFilters?: InputMaybe<Array<DashboardRecordColumnFilter>>;
  limit: Scalars["Int"]["input"];
  offset: Scalars["Int"]["input"];
  searchVals?: InputMaybe<Array<Scalars["String"]["input"]>>;
  sort: DashboardRecordSort;
};

export type QueryDashboardSampleHistoryArgs = {
  limit: Scalars["Int"]["input"];
  offset: Scalars["Int"]["input"];
  searchVals: Array<Scalars["String"]["input"]>;
  sort: DashboardRecordSort;
};

export type QueryDashboardSamplesArgs = {
  columnFilters?: InputMaybe<Array<DashboardRecordColumnFilter>>;
  includeDemographics: Scalars["Boolean"]["input"];
  limit: Scalars["Int"]["input"];
  offset: Scalars["Int"]["input"];
  phiEnabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  recordContexts?: InputMaybe<Array<InputMaybe<DashboardRecordContext>>>;
  searchVals?: InputMaybe<Array<Scalars["String"]["input"]>>;
  sort: DashboardRecordSort;
};

export type QueryDbGapsArgs = {
  options?: InputMaybe<DbGapOptions>;
  where?: InputMaybe<DbGapWhere>;
};

export type QueryDbGapsAggregateArgs = {
  where?: InputMaybe<DbGapWhere>;
};

export type QueryDbGapsConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<DbGapSort>>>;
  where?: InputMaybe<DbGapWhere>;
};

export type QueryGetValidationAdviceArgs = {
  igoQcReports?: InputMaybe<Scalars["String"]["input"]>;
  recordId?: InputMaybe<Scalars["String"]["input"]>;
  recordType: Scalars["String"]["input"];
  validationReport: Scalars["String"]["input"];
};

export type QueryMafCompletesArgs = {
  options?: InputMaybe<MafCompleteOptions>;
  where?: InputMaybe<MafCompleteWhere>;
};

export type QueryMafCompletesAggregateArgs = {
  where?: InputMaybe<MafCompleteWhere>;
};

export type QueryMafCompletesConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<MafCompleteSort>>>;
  where?: InputMaybe<MafCompleteWhere>;
};

export type QueryPatientAliasesArgs = {
  options?: InputMaybe<PatientAliasOptions>;
  where?: InputMaybe<PatientAliasWhere>;
};

export type QueryPatientAliasesAggregateArgs = {
  where?: InputMaybe<PatientAliasWhere>;
};

export type QueryPatientAliasesConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<PatientAliasSort>>>;
  where?: InputMaybe<PatientAliasWhere>;
};

export type QueryPatientsArgs = {
  options?: InputMaybe<PatientOptions>;
  where?: InputMaybe<PatientWhere>;
};

export type QueryPatientsAggregateArgs = {
  where?: InputMaybe<PatientWhere>;
};

export type QueryPatientsConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<PatientSort>>>;
  where?: InputMaybe<PatientWhere>;
};

export type QueryProjectsArgs = {
  options?: InputMaybe<ProjectOptions>;
  where?: InputMaybe<ProjectWhere>;
};

export type QueryProjectsAggregateArgs = {
  where?: InputMaybe<ProjectWhere>;
};

export type QueryProjectsConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<ProjectSort>>>;
  where?: InputMaybe<ProjectWhere>;
};

export type QueryQcCompletesArgs = {
  options?: InputMaybe<QcCompleteOptions>;
  where?: InputMaybe<QcCompleteWhere>;
};

export type QueryQcCompletesAggregateArgs = {
  where?: InputMaybe<QcCompleteWhere>;
};

export type QueryQcCompletesConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<QcCompleteSort>>>;
  where?: InputMaybe<QcCompleteWhere>;
};

export type QueryRequestMetadataArgs = {
  options?: InputMaybe<RequestMetadataOptions>;
  where?: InputMaybe<RequestMetadataWhere>;
};

export type QueryRequestMetadataAggregateArgs = {
  where?: InputMaybe<RequestMetadataWhere>;
};

export type QueryRequestMetadataConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<RequestMetadataSort>>>;
  where?: InputMaybe<RequestMetadataWhere>;
};

export type QueryRequestsArgs = {
  options?: InputMaybe<RequestOptions>;
  where?: InputMaybe<RequestWhere>;
};

export type QueryRequestsAggregateArgs = {
  where?: InputMaybe<RequestWhere>;
};

export type QueryRequestsConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<RequestSort>>>;
  where?: InputMaybe<RequestWhere>;
};

export type QuerySampleAliasesArgs = {
  options?: InputMaybe<SampleAliasOptions>;
  where?: InputMaybe<SampleAliasWhere>;
};

export type QuerySampleAliasesAggregateArgs = {
  where?: InputMaybe<SampleAliasWhere>;
};

export type QuerySampleAliasesConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<SampleAliasSort>>>;
  where?: InputMaybe<SampleAliasWhere>;
};

export type QuerySampleMetadataArgs = {
  options?: InputMaybe<SampleMetadataOptions>;
  where?: InputMaybe<SampleMetadataWhere>;
};

export type QuerySampleMetadataAggregateArgs = {
  where?: InputMaybe<SampleMetadataWhere>;
};

export type QuerySampleMetadataConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<SampleMetadataSort>>>;
  where?: InputMaybe<SampleMetadataWhere>;
};

export type QuerySamplesArgs = {
  options?: InputMaybe<SampleOptions>;
  where?: InputMaybe<SampleWhere>;
};

export type QuerySamplesAggregateArgs = {
  where?: InputMaybe<SampleWhere>;
};

export type QuerySamplesConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<SampleSort>>>;
  where?: InputMaybe<SampleWhere>;
};

export type QueryStatusesArgs = {
  options?: InputMaybe<StatusOptions>;
  where?: InputMaybe<StatusWhere>;
};

export type QueryStatusesAggregateArgs = {
  where?: InputMaybe<StatusWhere>;
};

export type QueryStatusesConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<StatusSort>>>;
  where?: InputMaybe<StatusWhere>;
};

export type QueryTemposArgs = {
  options?: InputMaybe<TempoOptions>;
  where?: InputMaybe<TempoWhere>;
};

export type QueryTemposAggregateArgs = {
  where?: InputMaybe<TempoWhere>;
};

export type QueryTemposConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<TempoSort>>>;
  where?: InputMaybe<TempoWhere>;
};

export type Request = {
  __typename?: "Request";
  bicAnalysis: Scalars["Boolean"]["output"];
  dataAccessEmails: Scalars["String"]["output"];
  dataAnalystEmail: Scalars["String"]["output"];
  dataAnalystName: Scalars["String"]["output"];
  genePanel: Scalars["String"]["output"];
  hasMetadataRequestMetadata: Array<RequestMetadata>;
  hasMetadataRequestMetadataAggregate?: Maybe<RequestRequestMetadataHasMetadataRequestMetadataAggregationSelection>;
  hasMetadataRequestMetadataConnection: RequestHasMetadataRequestMetadataConnection;
  hasSampleSamples: Array<Sample>;
  hasSampleSamplesAggregate?: Maybe<RequestSampleHasSampleSamplesAggregationSelection>;
  hasSampleSamplesConnection: RequestHasSampleSamplesConnection;
  igoDeliveryDate?: Maybe<Scalars["BigInt"]["output"]>;
  igoProjectId: Scalars["String"]["output"];
  igoRequestId: Scalars["String"]["output"];
  ilabRequestId?: Maybe<Scalars["String"]["output"]>;
  investigatorEmail: Scalars["String"]["output"];
  investigatorName: Scalars["String"]["output"];
  isCmoRequest: Scalars["Boolean"]["output"];
  labHeadEmail: Scalars["String"]["output"];
  labHeadName: Scalars["String"]["output"];
  libraryType?: Maybe<Scalars["String"]["output"]>;
  namespace: Scalars["String"]["output"];
  otherContactEmails: Scalars["String"]["output"];
  piEmail: Scalars["String"]["output"];
  pooledNormals?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  projectManagerName: Scalars["String"]["output"];
  projectsHasRequest: Array<Project>;
  projectsHasRequestAggregate?: Maybe<RequestProjectProjectsHasRequestAggregationSelection>;
  projectsHasRequestConnection: RequestProjectsHasRequestConnection;
  qcAccessEmails: Scalars["String"]["output"];
  requestJson: Scalars["String"]["output"];
  smileRequestId: Scalars["String"]["output"];
  strand?: Maybe<Scalars["String"]["output"]>;
};

export type RequestHasMetadataRequestMetadataArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  options?: InputMaybe<RequestMetadataOptions>;
  where?: InputMaybe<RequestMetadataWhere>;
};

export type RequestHasMetadataRequestMetadataAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<RequestMetadataWhere>;
};

export type RequestHasMetadataRequestMetadataConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<RequestHasMetadataRequestMetadataConnectionSort>>;
  where?: InputMaybe<RequestHasMetadataRequestMetadataConnectionWhere>;
};

export type RequestHasSampleSamplesArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  options?: InputMaybe<SampleOptions>;
  where?: InputMaybe<SampleWhere>;
};

export type RequestHasSampleSamplesAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<SampleWhere>;
};

export type RequestHasSampleSamplesConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<RequestHasSampleSamplesConnectionSort>>;
  where?: InputMaybe<RequestHasSampleSamplesConnectionWhere>;
};

export type RequestProjectsHasRequestArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  options?: InputMaybe<ProjectOptions>;
  where?: InputMaybe<ProjectWhere>;
};

export type RequestProjectsHasRequestAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<ProjectWhere>;
};

export type RequestProjectsHasRequestConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<RequestProjectsHasRequestConnectionSort>>;
  where?: InputMaybe<RequestProjectsHasRequestConnectionWhere>;
};

export type RequestAggregateSelection = {
  __typename?: "RequestAggregateSelection";
  count: Scalars["Int"]["output"];
  dataAccessEmails: StringAggregateSelection;
  dataAnalystEmail: StringAggregateSelection;
  dataAnalystName: StringAggregateSelection;
  genePanel: StringAggregateSelection;
  igoDeliveryDate: BigIntAggregateSelection;
  igoProjectId: StringAggregateSelection;
  igoRequestId: StringAggregateSelection;
  ilabRequestId: StringAggregateSelection;
  investigatorEmail: StringAggregateSelection;
  investigatorName: StringAggregateSelection;
  labHeadEmail: StringAggregateSelection;
  labHeadName: StringAggregateSelection;
  libraryType: StringAggregateSelection;
  namespace: StringAggregateSelection;
  otherContactEmails: StringAggregateSelection;
  piEmail: StringAggregateSelection;
  projectManagerName: StringAggregateSelection;
  qcAccessEmails: StringAggregateSelection;
  requestJson: StringAggregateSelection;
  smileRequestId: StringAggregateSelection;
  strand: StringAggregateSelection;
};

export type RequestConnectInput = {
  hasMetadataRequestMetadata?: InputMaybe<
    Array<RequestHasMetadataRequestMetadataConnectFieldInput>
  >;
  hasSampleSamples?: InputMaybe<
    Array<RequestHasSampleSamplesConnectFieldInput>
  >;
  projectsHasRequest?: InputMaybe<
    Array<RequestProjectsHasRequestConnectFieldInput>
  >;
};

export type RequestConnectWhere = {
  node: RequestWhere;
};

export type RequestCreateInput = {
  bicAnalysis: Scalars["Boolean"]["input"];
  dataAccessEmails: Scalars["String"]["input"];
  dataAnalystEmail: Scalars["String"]["input"];
  dataAnalystName: Scalars["String"]["input"];
  genePanel: Scalars["String"]["input"];
  hasMetadataRequestMetadata?: InputMaybe<RequestHasMetadataRequestMetadataFieldInput>;
  hasSampleSamples?: InputMaybe<RequestHasSampleSamplesFieldInput>;
  igoDeliveryDate?: InputMaybe<Scalars["BigInt"]["input"]>;
  igoProjectId: Scalars["String"]["input"];
  igoRequestId: Scalars["String"]["input"];
  ilabRequestId?: InputMaybe<Scalars["String"]["input"]>;
  investigatorEmail: Scalars["String"]["input"];
  investigatorName: Scalars["String"]["input"];
  isCmoRequest: Scalars["Boolean"]["input"];
  labHeadEmail: Scalars["String"]["input"];
  labHeadName: Scalars["String"]["input"];
  libraryType?: InputMaybe<Scalars["String"]["input"]>;
  namespace: Scalars["String"]["input"];
  otherContactEmails: Scalars["String"]["input"];
  piEmail: Scalars["String"]["input"];
  pooledNormals?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  projectManagerName: Scalars["String"]["input"];
  projectsHasRequest?: InputMaybe<RequestProjectsHasRequestFieldInput>;
  qcAccessEmails: Scalars["String"]["input"];
  requestJson: Scalars["String"]["input"];
  smileRequestId: Scalars["String"]["input"];
  strand?: InputMaybe<Scalars["String"]["input"]>;
};

export type RequestDeleteInput = {
  hasMetadataRequestMetadata?: InputMaybe<
    Array<RequestHasMetadataRequestMetadataDeleteFieldInput>
  >;
  hasSampleSamples?: InputMaybe<Array<RequestHasSampleSamplesDeleteFieldInput>>;
  projectsHasRequest?: InputMaybe<
    Array<RequestProjectsHasRequestDeleteFieldInput>
  >;
};

export type RequestDisconnectInput = {
  hasMetadataRequestMetadata?: InputMaybe<
    Array<RequestHasMetadataRequestMetadataDisconnectFieldInput>
  >;
  hasSampleSamples?: InputMaybe<
    Array<RequestHasSampleSamplesDisconnectFieldInput>
  >;
  projectsHasRequest?: InputMaybe<
    Array<RequestProjectsHasRequestDisconnectFieldInput>
  >;
};

export type RequestEdge = {
  __typename?: "RequestEdge";
  cursor: Scalars["String"]["output"];
  node: Request;
};

export type RequestHasMetadataRequestMetadataAggregateInput = {
  AND?: InputMaybe<Array<RequestHasMetadataRequestMetadataAggregateInput>>;
  NOT?: InputMaybe<RequestHasMetadataRequestMetadataAggregateInput>;
  OR?: InputMaybe<Array<RequestHasMetadataRequestMetadataAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  node?: InputMaybe<RequestHasMetadataRequestMetadataNodeAggregationWhereInput>;
};

export type RequestHasMetadataRequestMetadataConnectFieldInput = {
  connect?: InputMaybe<Array<RequestMetadataConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  where?: InputMaybe<RequestMetadataConnectWhere>;
};

export type RequestHasMetadataRequestMetadataConnection = {
  __typename?: "RequestHasMetadataRequestMetadataConnection";
  edges: Array<RequestHasMetadataRequestMetadataRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type RequestHasMetadataRequestMetadataConnectionSort = {
  node?: InputMaybe<RequestMetadataSort>;
};

export type RequestHasMetadataRequestMetadataConnectionWhere = {
  AND?: InputMaybe<Array<RequestHasMetadataRequestMetadataConnectionWhere>>;
  NOT?: InputMaybe<RequestHasMetadataRequestMetadataConnectionWhere>;
  OR?: InputMaybe<Array<RequestHasMetadataRequestMetadataConnectionWhere>>;
  node?: InputMaybe<RequestMetadataWhere>;
};

export type RequestHasMetadataRequestMetadataCreateFieldInput = {
  node: RequestMetadataCreateInput;
};

export type RequestHasMetadataRequestMetadataDeleteFieldInput = {
  delete?: InputMaybe<RequestMetadataDeleteInput>;
  where?: InputMaybe<RequestHasMetadataRequestMetadataConnectionWhere>;
};

export type RequestHasMetadataRequestMetadataDisconnectFieldInput = {
  disconnect?: InputMaybe<RequestMetadataDisconnectInput>;
  where?: InputMaybe<RequestHasMetadataRequestMetadataConnectionWhere>;
};

export type RequestHasMetadataRequestMetadataFieldInput = {
  connect?: InputMaybe<
    Array<RequestHasMetadataRequestMetadataConnectFieldInput>
  >;
  create?: InputMaybe<Array<RequestHasMetadataRequestMetadataCreateFieldInput>>;
};

export type RequestHasMetadataRequestMetadataNodeAggregationWhereInput = {
  AND?: InputMaybe<
    Array<RequestHasMetadataRequestMetadataNodeAggregationWhereInput>
  >;
  NOT?: InputMaybe<RequestHasMetadataRequestMetadataNodeAggregationWhereInput>;
  OR?: InputMaybe<
    Array<RequestHasMetadataRequestMetadataNodeAggregationWhereInput>
  >;
  igoRequestId_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  igoRequestId_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  igoRequestId_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  igoRequestId_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  igoRequestId_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  igoRequestId_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  igoRequestId_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  igoRequestId_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  igoRequestId_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  igoRequestId_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  igoRequestId_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  igoRequestId_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  igoRequestId_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  igoRequestId_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  igoRequestId_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  importDate_AVERAGE_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_AVERAGE_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_AVERAGE_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_AVERAGE_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_AVERAGE_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_MAX_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_MAX_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_MAX_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_MAX_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_MAX_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_MIN_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_MIN_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_MIN_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_MIN_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_MIN_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_SUM_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_SUM_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_SUM_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_SUM_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_SUM_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  requestMetadataJson_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars["Float"]["input"]
  >;
  requestMetadataJson_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  requestMetadataJson_AVERAGE_LENGTH_GTE?: InputMaybe<
    Scalars["Float"]["input"]
  >;
  requestMetadataJson_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  requestMetadataJson_AVERAGE_LENGTH_LTE?: InputMaybe<
    Scalars["Float"]["input"]
  >;
  requestMetadataJson_LONGEST_LENGTH_EQUAL?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  requestMetadataJson_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  requestMetadataJson_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  requestMetadataJson_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  requestMetadataJson_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  requestMetadataJson_SHORTEST_LENGTH_EQUAL?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  requestMetadataJson_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  requestMetadataJson_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  requestMetadataJson_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  requestMetadataJson_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type RequestHasMetadataRequestMetadataRelationship = {
  __typename?: "RequestHasMetadataRequestMetadataRelationship";
  cursor: Scalars["String"]["output"];
  node: RequestMetadata;
};

export type RequestHasMetadataRequestMetadataUpdateConnectionInput = {
  node?: InputMaybe<RequestMetadataUpdateInput>;
};

export type RequestHasMetadataRequestMetadataUpdateFieldInput = {
  connect?: InputMaybe<
    Array<RequestHasMetadataRequestMetadataConnectFieldInput>
  >;
  create?: InputMaybe<Array<RequestHasMetadataRequestMetadataCreateFieldInput>>;
  delete?: InputMaybe<Array<RequestHasMetadataRequestMetadataDeleteFieldInput>>;
  disconnect?: InputMaybe<
    Array<RequestHasMetadataRequestMetadataDisconnectFieldInput>
  >;
  update?: InputMaybe<RequestHasMetadataRequestMetadataUpdateConnectionInput>;
  where?: InputMaybe<RequestHasMetadataRequestMetadataConnectionWhere>;
};

export type RequestHasSampleSamplesAggregateInput = {
  AND?: InputMaybe<Array<RequestHasSampleSamplesAggregateInput>>;
  NOT?: InputMaybe<RequestHasSampleSamplesAggregateInput>;
  OR?: InputMaybe<Array<RequestHasSampleSamplesAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  node?: InputMaybe<RequestHasSampleSamplesNodeAggregationWhereInput>;
};

export type RequestHasSampleSamplesConnectFieldInput = {
  connect?: InputMaybe<Array<SampleConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  where?: InputMaybe<SampleConnectWhere>;
};

export type RequestHasSampleSamplesConnection = {
  __typename?: "RequestHasSampleSamplesConnection";
  edges: Array<RequestHasSampleSamplesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type RequestHasSampleSamplesConnectionSort = {
  node?: InputMaybe<SampleSort>;
};

export type RequestHasSampleSamplesConnectionWhere = {
  AND?: InputMaybe<Array<RequestHasSampleSamplesConnectionWhere>>;
  NOT?: InputMaybe<RequestHasSampleSamplesConnectionWhere>;
  OR?: InputMaybe<Array<RequestHasSampleSamplesConnectionWhere>>;
  node?: InputMaybe<SampleWhere>;
};

export type RequestHasSampleSamplesCreateFieldInput = {
  node: SampleCreateInput;
};

export type RequestHasSampleSamplesDeleteFieldInput = {
  delete?: InputMaybe<SampleDeleteInput>;
  where?: InputMaybe<RequestHasSampleSamplesConnectionWhere>;
};

export type RequestHasSampleSamplesDisconnectFieldInput = {
  disconnect?: InputMaybe<SampleDisconnectInput>;
  where?: InputMaybe<RequestHasSampleSamplesConnectionWhere>;
};

export type RequestHasSampleSamplesFieldInput = {
  connect?: InputMaybe<Array<RequestHasSampleSamplesConnectFieldInput>>;
  create?: InputMaybe<Array<RequestHasSampleSamplesCreateFieldInput>>;
};

export type RequestHasSampleSamplesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<RequestHasSampleSamplesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<RequestHasSampleSamplesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<RequestHasSampleSamplesNodeAggregationWhereInput>>;
  datasource_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  datasource_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  datasource_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  datasource_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  datasource_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  datasource_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  datasource_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  datasource_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  datasource_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  datasource_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  datasource_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  datasource_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  datasource_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  datasource_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  datasource_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  sampleCategory_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  sampleCategory_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  sampleCategory_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  sampleCategory_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  sampleCategory_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  sampleCategory_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  sampleCategory_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  sampleCategory_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  sampleCategory_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  sampleCategory_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  sampleCategory_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  sampleCategory_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  sampleCategory_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  sampleCategory_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  sampleCategory_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  sampleClass_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  sampleClass_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  sampleClass_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  sampleClass_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  sampleClass_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  smileSampleId_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  smileSampleId_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  smileSampleId_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  smileSampleId_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  smileSampleId_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  smileSampleId_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  smileSampleId_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  smileSampleId_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  smileSampleId_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  smileSampleId_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  smileSampleId_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  smileSampleId_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  smileSampleId_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  smileSampleId_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  smileSampleId_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type RequestHasSampleSamplesRelationship = {
  __typename?: "RequestHasSampleSamplesRelationship";
  cursor: Scalars["String"]["output"];
  node: Sample;
};

export type RequestHasSampleSamplesUpdateConnectionInput = {
  node?: InputMaybe<SampleUpdateInput>;
};

export type RequestHasSampleSamplesUpdateFieldInput = {
  connect?: InputMaybe<Array<RequestHasSampleSamplesConnectFieldInput>>;
  create?: InputMaybe<Array<RequestHasSampleSamplesCreateFieldInput>>;
  delete?: InputMaybe<Array<RequestHasSampleSamplesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<RequestHasSampleSamplesDisconnectFieldInput>>;
  update?: InputMaybe<RequestHasSampleSamplesUpdateConnectionInput>;
  where?: InputMaybe<RequestHasSampleSamplesConnectionWhere>;
};

export type RequestMetadata = {
  __typename?: "RequestMetadata";
  hasStatusStatuses: Array<Status>;
  hasStatusStatusesAggregate?: Maybe<RequestMetadataStatusHasStatusStatusesAggregationSelection>;
  hasStatusStatusesConnection: RequestMetadataHasStatusStatusesConnection;
  igoRequestId: Scalars["String"]["output"];
  importDate: Scalars["BigInt"]["output"];
  requestMetadataJson: Scalars["String"]["output"];
  requestsHasMetadata: Array<Request>;
  requestsHasMetadataAggregate?: Maybe<RequestMetadataRequestRequestsHasMetadataAggregationSelection>;
  requestsHasMetadataConnection: RequestMetadataRequestsHasMetadataConnection;
};

export type RequestMetadataHasStatusStatusesArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  options?: InputMaybe<StatusOptions>;
  where?: InputMaybe<StatusWhere>;
};

export type RequestMetadataHasStatusStatusesAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<StatusWhere>;
};

export type RequestMetadataHasStatusStatusesConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<RequestMetadataHasStatusStatusesConnectionSort>>;
  where?: InputMaybe<RequestMetadataHasStatusStatusesConnectionWhere>;
};

export type RequestMetadataRequestsHasMetadataArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  options?: InputMaybe<RequestOptions>;
  where?: InputMaybe<RequestWhere>;
};

export type RequestMetadataRequestsHasMetadataAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<RequestWhere>;
};

export type RequestMetadataRequestsHasMetadataConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<RequestMetadataRequestsHasMetadataConnectionSort>>;
  where?: InputMaybe<RequestMetadataRequestsHasMetadataConnectionWhere>;
};

export type RequestMetadataAggregateSelection = {
  __typename?: "RequestMetadataAggregateSelection";
  count: Scalars["Int"]["output"];
  igoRequestId: StringAggregateSelection;
  importDate: BigIntAggregateSelection;
  requestMetadataJson: StringAggregateSelection;
};

export type RequestMetadataConnectInput = {
  hasStatusStatuses?: InputMaybe<
    Array<RequestMetadataHasStatusStatusesConnectFieldInput>
  >;
  requestsHasMetadata?: InputMaybe<
    Array<RequestMetadataRequestsHasMetadataConnectFieldInput>
  >;
};

export type RequestMetadataConnectWhere = {
  node: RequestMetadataWhere;
};

export type RequestMetadataConnection = {
  __typename?: "RequestMetadataConnection";
  edges: Array<RequestMetadataEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type RequestMetadataCreateInput = {
  hasStatusStatuses?: InputMaybe<RequestMetadataHasStatusStatusesFieldInput>;
  igoRequestId: Scalars["String"]["input"];
  importDate: Scalars["BigInt"]["input"];
  requestMetadataJson: Scalars["String"]["input"];
  requestsHasMetadata?: InputMaybe<RequestMetadataRequestsHasMetadataFieldInput>;
};

export type RequestMetadataDeleteInput = {
  hasStatusStatuses?: InputMaybe<
    Array<RequestMetadataHasStatusStatusesDeleteFieldInput>
  >;
  requestsHasMetadata?: InputMaybe<
    Array<RequestMetadataRequestsHasMetadataDeleteFieldInput>
  >;
};

export type RequestMetadataDisconnectInput = {
  hasStatusStatuses?: InputMaybe<
    Array<RequestMetadataHasStatusStatusesDisconnectFieldInput>
  >;
  requestsHasMetadata?: InputMaybe<
    Array<RequestMetadataRequestsHasMetadataDisconnectFieldInput>
  >;
};

export type RequestMetadataEdge = {
  __typename?: "RequestMetadataEdge";
  cursor: Scalars["String"]["output"];
  node: RequestMetadata;
};

export type RequestMetadataHasStatusStatusesAggregateInput = {
  AND?: InputMaybe<Array<RequestMetadataHasStatusStatusesAggregateInput>>;
  NOT?: InputMaybe<RequestMetadataHasStatusStatusesAggregateInput>;
  OR?: InputMaybe<Array<RequestMetadataHasStatusStatusesAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  node?: InputMaybe<RequestMetadataHasStatusStatusesNodeAggregationWhereInput>;
};

export type RequestMetadataHasStatusStatusesConnectFieldInput = {
  connect?: InputMaybe<Array<StatusConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  where?: InputMaybe<StatusConnectWhere>;
};

export type RequestMetadataHasStatusStatusesConnection = {
  __typename?: "RequestMetadataHasStatusStatusesConnection";
  edges: Array<RequestMetadataHasStatusStatusesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type RequestMetadataHasStatusStatusesConnectionSort = {
  node?: InputMaybe<StatusSort>;
};

export type RequestMetadataHasStatusStatusesConnectionWhere = {
  AND?: InputMaybe<Array<RequestMetadataHasStatusStatusesConnectionWhere>>;
  NOT?: InputMaybe<RequestMetadataHasStatusStatusesConnectionWhere>;
  OR?: InputMaybe<Array<RequestMetadataHasStatusStatusesConnectionWhere>>;
  node?: InputMaybe<StatusWhere>;
};

export type RequestMetadataHasStatusStatusesCreateFieldInput = {
  node: StatusCreateInput;
};

export type RequestMetadataHasStatusStatusesDeleteFieldInput = {
  delete?: InputMaybe<StatusDeleteInput>;
  where?: InputMaybe<RequestMetadataHasStatusStatusesConnectionWhere>;
};

export type RequestMetadataHasStatusStatusesDisconnectFieldInput = {
  disconnect?: InputMaybe<StatusDisconnectInput>;
  where?: InputMaybe<RequestMetadataHasStatusStatusesConnectionWhere>;
};

export type RequestMetadataHasStatusStatusesFieldInput = {
  connect?: InputMaybe<
    Array<RequestMetadataHasStatusStatusesConnectFieldInput>
  >;
  create?: InputMaybe<Array<RequestMetadataHasStatusStatusesCreateFieldInput>>;
};

export type RequestMetadataHasStatusStatusesNodeAggregationWhereInput = {
  AND?: InputMaybe<
    Array<RequestMetadataHasStatusStatusesNodeAggregationWhereInput>
  >;
  NOT?: InputMaybe<RequestMetadataHasStatusStatusesNodeAggregationWhereInput>;
  OR?: InputMaybe<
    Array<RequestMetadataHasStatusStatusesNodeAggregationWhereInput>
  >;
  validationReport_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  validationReport_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  validationReport_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  validationReport_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  validationReport_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  validationReport_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  validationReport_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  validationReport_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  validationReport_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  validationReport_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  validationReport_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  validationReport_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  validationReport_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  validationReport_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  validationReport_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type RequestMetadataHasStatusStatusesRelationship = {
  __typename?: "RequestMetadataHasStatusStatusesRelationship";
  cursor: Scalars["String"]["output"];
  node: Status;
};

export type RequestMetadataHasStatusStatusesUpdateConnectionInput = {
  node?: InputMaybe<StatusUpdateInput>;
};

export type RequestMetadataHasStatusStatusesUpdateFieldInput = {
  connect?: InputMaybe<
    Array<RequestMetadataHasStatusStatusesConnectFieldInput>
  >;
  create?: InputMaybe<Array<RequestMetadataHasStatusStatusesCreateFieldInput>>;
  delete?: InputMaybe<Array<RequestMetadataHasStatusStatusesDeleteFieldInput>>;
  disconnect?: InputMaybe<
    Array<RequestMetadataHasStatusStatusesDisconnectFieldInput>
  >;
  update?: InputMaybe<RequestMetadataHasStatusStatusesUpdateConnectionInput>;
  where?: InputMaybe<RequestMetadataHasStatusStatusesConnectionWhere>;
};

export type RequestMetadataOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more RequestMetadataSort objects to sort RequestMetadata by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<RequestMetadataSort>>;
};

export type RequestMetadataRelationInput = {
  hasStatusStatuses?: InputMaybe<
    Array<RequestMetadataHasStatusStatusesCreateFieldInput>
  >;
  requestsHasMetadata?: InputMaybe<
    Array<RequestMetadataRequestsHasMetadataCreateFieldInput>
  >;
};

export type RequestMetadataRequestRequestsHasMetadataAggregationSelection = {
  __typename?: "RequestMetadataRequestRequestsHasMetadataAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<RequestMetadataRequestRequestsHasMetadataNodeAggregateSelection>;
};

export type RequestMetadataRequestRequestsHasMetadataNodeAggregateSelection = {
  __typename?: "RequestMetadataRequestRequestsHasMetadataNodeAggregateSelection";
  dataAccessEmails: StringAggregateSelection;
  dataAnalystEmail: StringAggregateSelection;
  dataAnalystName: StringAggregateSelection;
  genePanel: StringAggregateSelection;
  igoDeliveryDate: BigIntAggregateSelection;
  igoProjectId: StringAggregateSelection;
  igoRequestId: StringAggregateSelection;
  ilabRequestId: StringAggregateSelection;
  investigatorEmail: StringAggregateSelection;
  investigatorName: StringAggregateSelection;
  labHeadEmail: StringAggregateSelection;
  labHeadName: StringAggregateSelection;
  libraryType: StringAggregateSelection;
  namespace: StringAggregateSelection;
  otherContactEmails: StringAggregateSelection;
  piEmail: StringAggregateSelection;
  projectManagerName: StringAggregateSelection;
  qcAccessEmails: StringAggregateSelection;
  requestJson: StringAggregateSelection;
  smileRequestId: StringAggregateSelection;
  strand: StringAggregateSelection;
};

export type RequestMetadataRequestsHasMetadataAggregateInput = {
  AND?: InputMaybe<Array<RequestMetadataRequestsHasMetadataAggregateInput>>;
  NOT?: InputMaybe<RequestMetadataRequestsHasMetadataAggregateInput>;
  OR?: InputMaybe<Array<RequestMetadataRequestsHasMetadataAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  node?: InputMaybe<RequestMetadataRequestsHasMetadataNodeAggregationWhereInput>;
};

export type RequestMetadataRequestsHasMetadataConnectFieldInput = {
  connect?: InputMaybe<Array<RequestConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  where?: InputMaybe<RequestConnectWhere>;
};

export type RequestMetadataRequestsHasMetadataConnection = {
  __typename?: "RequestMetadataRequestsHasMetadataConnection";
  edges: Array<RequestMetadataRequestsHasMetadataRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type RequestMetadataRequestsHasMetadataConnectionSort = {
  node?: InputMaybe<RequestSort>;
};

export type RequestMetadataRequestsHasMetadataConnectionWhere = {
  AND?: InputMaybe<Array<RequestMetadataRequestsHasMetadataConnectionWhere>>;
  NOT?: InputMaybe<RequestMetadataRequestsHasMetadataConnectionWhere>;
  OR?: InputMaybe<Array<RequestMetadataRequestsHasMetadataConnectionWhere>>;
  node?: InputMaybe<RequestWhere>;
};

export type RequestMetadataRequestsHasMetadataCreateFieldInput = {
  node: RequestCreateInput;
};

export type RequestMetadataRequestsHasMetadataDeleteFieldInput = {
  delete?: InputMaybe<RequestDeleteInput>;
  where?: InputMaybe<RequestMetadataRequestsHasMetadataConnectionWhere>;
};

export type RequestMetadataRequestsHasMetadataDisconnectFieldInput = {
  disconnect?: InputMaybe<RequestDisconnectInput>;
  where?: InputMaybe<RequestMetadataRequestsHasMetadataConnectionWhere>;
};

export type RequestMetadataRequestsHasMetadataFieldInput = {
  connect?: InputMaybe<
    Array<RequestMetadataRequestsHasMetadataConnectFieldInput>
  >;
  create?: InputMaybe<
    Array<RequestMetadataRequestsHasMetadataCreateFieldInput>
  >;
};

export type RequestMetadataRequestsHasMetadataNodeAggregationWhereInput = {
  AND?: InputMaybe<
    Array<RequestMetadataRequestsHasMetadataNodeAggregationWhereInput>
  >;
  NOT?: InputMaybe<RequestMetadataRequestsHasMetadataNodeAggregationWhereInput>;
  OR?: InputMaybe<
    Array<RequestMetadataRequestsHasMetadataNodeAggregationWhereInput>
  >;
  dataAccessEmails_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  dataAccessEmails_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  dataAccessEmails_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  dataAccessEmails_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  dataAccessEmails_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  dataAccessEmails_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  dataAccessEmails_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  dataAccessEmails_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  dataAccessEmails_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  dataAccessEmails_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  dataAccessEmails_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  dataAccessEmails_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  dataAccessEmails_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  dataAccessEmails_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  dataAccessEmails_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  dataAnalystEmail_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  dataAnalystEmail_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  dataAnalystEmail_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  dataAnalystEmail_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  dataAnalystEmail_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  dataAnalystEmail_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  dataAnalystEmail_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  dataAnalystEmail_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  dataAnalystEmail_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  dataAnalystEmail_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  dataAnalystEmail_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  dataAnalystEmail_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  dataAnalystEmail_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  dataAnalystEmail_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  dataAnalystEmail_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  dataAnalystName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  dataAnalystName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  dataAnalystName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  dataAnalystName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  dataAnalystName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  dataAnalystName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  dataAnalystName_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  dataAnalystName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  dataAnalystName_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  dataAnalystName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  dataAnalystName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  dataAnalystName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  dataAnalystName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  dataAnalystName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  dataAnalystName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  genePanel_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  genePanel_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  genePanel_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  genePanel_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  genePanel_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  genePanel_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  genePanel_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  genePanel_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  genePanel_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  genePanel_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  genePanel_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  genePanel_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  genePanel_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  genePanel_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  genePanel_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  igoDeliveryDate_AVERAGE_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  igoDeliveryDate_AVERAGE_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  igoDeliveryDate_AVERAGE_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  igoDeliveryDate_AVERAGE_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  igoDeliveryDate_AVERAGE_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  igoDeliveryDate_MAX_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  igoDeliveryDate_MAX_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  igoDeliveryDate_MAX_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  igoDeliveryDate_MAX_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  igoDeliveryDate_MAX_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  igoDeliveryDate_MIN_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  igoDeliveryDate_MIN_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  igoDeliveryDate_MIN_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  igoDeliveryDate_MIN_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  igoDeliveryDate_MIN_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  igoDeliveryDate_SUM_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  igoDeliveryDate_SUM_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  igoDeliveryDate_SUM_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  igoDeliveryDate_SUM_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  igoDeliveryDate_SUM_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  igoProjectId_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  igoProjectId_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  igoProjectId_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  igoProjectId_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  igoProjectId_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  igoProjectId_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  igoProjectId_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  igoProjectId_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  igoProjectId_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  igoProjectId_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  igoProjectId_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  igoProjectId_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  igoProjectId_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  igoProjectId_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  igoProjectId_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  igoRequestId_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  igoRequestId_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  igoRequestId_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  igoRequestId_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  igoRequestId_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  igoRequestId_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  igoRequestId_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  igoRequestId_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  igoRequestId_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  igoRequestId_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  igoRequestId_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  igoRequestId_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  igoRequestId_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  igoRequestId_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  igoRequestId_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  ilabRequestId_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  ilabRequestId_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  ilabRequestId_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  ilabRequestId_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  ilabRequestId_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  ilabRequestId_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  ilabRequestId_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  ilabRequestId_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  ilabRequestId_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  ilabRequestId_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  ilabRequestId_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  ilabRequestId_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  ilabRequestId_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  ilabRequestId_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  ilabRequestId_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  investigatorEmail_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars["Float"]["input"]
  >;
  investigatorEmail_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  investigatorEmail_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  investigatorEmail_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  investigatorEmail_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  investigatorEmail_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  investigatorEmail_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  investigatorEmail_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  investigatorEmail_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  investigatorEmail_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  investigatorEmail_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  investigatorEmail_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  investigatorEmail_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  investigatorEmail_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  investigatorEmail_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  investigatorName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  investigatorName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  investigatorName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  investigatorName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  investigatorName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  investigatorName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  investigatorName_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  investigatorName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  investigatorName_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  investigatorName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  investigatorName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  investigatorName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  investigatorName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  investigatorName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  investigatorName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  labHeadEmail_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  labHeadEmail_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  labHeadEmail_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  labHeadEmail_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  labHeadEmail_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  labHeadEmail_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  labHeadEmail_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  labHeadEmail_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  labHeadEmail_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  labHeadEmail_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  labHeadEmail_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  labHeadEmail_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  labHeadEmail_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  labHeadEmail_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  labHeadEmail_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  labHeadName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  labHeadName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  labHeadName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  labHeadName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  labHeadName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  labHeadName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  labHeadName_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  labHeadName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  labHeadName_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  labHeadName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  labHeadName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  labHeadName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  labHeadName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  labHeadName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  labHeadName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  libraryType_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  libraryType_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  libraryType_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  libraryType_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  libraryType_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  libraryType_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  libraryType_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  libraryType_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  libraryType_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  libraryType_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  libraryType_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  libraryType_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  libraryType_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  libraryType_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  libraryType_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  namespace_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  namespace_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  namespace_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  namespace_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  namespace_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  namespace_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  namespace_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  namespace_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  namespace_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  namespace_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  namespace_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  namespace_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  namespace_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  namespace_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  namespace_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  otherContactEmails_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars["Float"]["input"]
  >;
  otherContactEmails_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  otherContactEmails_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  otherContactEmails_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  otherContactEmails_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  otherContactEmails_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  otherContactEmails_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  otherContactEmails_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  otherContactEmails_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  otherContactEmails_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  otherContactEmails_SHORTEST_LENGTH_EQUAL?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  otherContactEmails_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  otherContactEmails_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  otherContactEmails_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  otherContactEmails_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  piEmail_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  piEmail_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  piEmail_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  piEmail_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  piEmail_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  piEmail_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  piEmail_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  piEmail_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  piEmail_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  piEmail_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  piEmail_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  piEmail_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  piEmail_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  piEmail_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  piEmail_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  projectManagerName_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars["Float"]["input"]
  >;
  projectManagerName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  projectManagerName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  projectManagerName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  projectManagerName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  projectManagerName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  projectManagerName_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  projectManagerName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  projectManagerName_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  projectManagerName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  projectManagerName_SHORTEST_LENGTH_EQUAL?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  projectManagerName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  projectManagerName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  projectManagerName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  projectManagerName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  qcAccessEmails_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  qcAccessEmails_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  qcAccessEmails_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  qcAccessEmails_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  qcAccessEmails_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  qcAccessEmails_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  qcAccessEmails_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  qcAccessEmails_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  qcAccessEmails_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  qcAccessEmails_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  qcAccessEmails_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  qcAccessEmails_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  qcAccessEmails_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  qcAccessEmails_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  qcAccessEmails_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  requestJson_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  requestJson_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  requestJson_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  requestJson_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  requestJson_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  requestJson_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  requestJson_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  requestJson_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  requestJson_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  requestJson_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  requestJson_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  requestJson_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  requestJson_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  requestJson_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  requestJson_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  smileRequestId_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  smileRequestId_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  smileRequestId_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  smileRequestId_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  smileRequestId_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  smileRequestId_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  smileRequestId_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  smileRequestId_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  smileRequestId_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  smileRequestId_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  smileRequestId_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  smileRequestId_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  smileRequestId_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  smileRequestId_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  smileRequestId_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  strand_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  strand_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  strand_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  strand_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  strand_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  strand_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  strand_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  strand_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  strand_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  strand_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  strand_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  strand_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  strand_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  strand_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  strand_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type RequestMetadataRequestsHasMetadataRelationship = {
  __typename?: "RequestMetadataRequestsHasMetadataRelationship";
  cursor: Scalars["String"]["output"];
  node: Request;
};

export type RequestMetadataRequestsHasMetadataUpdateConnectionInput = {
  node?: InputMaybe<RequestUpdateInput>;
};

export type RequestMetadataRequestsHasMetadataUpdateFieldInput = {
  connect?: InputMaybe<
    Array<RequestMetadataRequestsHasMetadataConnectFieldInput>
  >;
  create?: InputMaybe<
    Array<RequestMetadataRequestsHasMetadataCreateFieldInput>
  >;
  delete?: InputMaybe<
    Array<RequestMetadataRequestsHasMetadataDeleteFieldInput>
  >;
  disconnect?: InputMaybe<
    Array<RequestMetadataRequestsHasMetadataDisconnectFieldInput>
  >;
  update?: InputMaybe<RequestMetadataRequestsHasMetadataUpdateConnectionInput>;
  where?: InputMaybe<RequestMetadataRequestsHasMetadataConnectionWhere>;
};

/** Fields to sort RequestMetadata by. The order in which sorts are applied is not guaranteed when specifying many fields in one RequestMetadataSort object. */
export type RequestMetadataSort = {
  igoRequestId?: InputMaybe<SortDirection>;
  importDate?: InputMaybe<SortDirection>;
  requestMetadataJson?: InputMaybe<SortDirection>;
};

export type RequestMetadataStatusHasStatusStatusesAggregationSelection = {
  __typename?: "RequestMetadataStatusHasStatusStatusesAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<RequestMetadataStatusHasStatusStatusesNodeAggregateSelection>;
};

export type RequestMetadataStatusHasStatusStatusesNodeAggregateSelection = {
  __typename?: "RequestMetadataStatusHasStatusStatusesNodeAggregateSelection";
  validationReport: StringAggregateSelection;
};

export type RequestMetadataUpdateInput = {
  hasStatusStatuses?: InputMaybe<
    Array<RequestMetadataHasStatusStatusesUpdateFieldInput>
  >;
  igoRequestId?: InputMaybe<Scalars["String"]["input"]>;
  importDate?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_DECREMENT?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_INCREMENT?: InputMaybe<Scalars["BigInt"]["input"]>;
  requestMetadataJson?: InputMaybe<Scalars["String"]["input"]>;
  requestsHasMetadata?: InputMaybe<
    Array<RequestMetadataRequestsHasMetadataUpdateFieldInput>
  >;
};

export type RequestMetadataWhere = {
  AND?: InputMaybe<Array<RequestMetadataWhere>>;
  NOT?: InputMaybe<RequestMetadataWhere>;
  OR?: InputMaybe<Array<RequestMetadataWhere>>;
  hasStatusStatusesAggregate?: InputMaybe<RequestMetadataHasStatusStatusesAggregateInput>;
  /** Return RequestMetadata where all of the related RequestMetadataHasStatusStatusesConnections match this filter */
  hasStatusStatusesConnection_ALL?: InputMaybe<RequestMetadataHasStatusStatusesConnectionWhere>;
  /** Return RequestMetadata where none of the related RequestMetadataHasStatusStatusesConnections match this filter */
  hasStatusStatusesConnection_NONE?: InputMaybe<RequestMetadataHasStatusStatusesConnectionWhere>;
  /** Return RequestMetadata where one of the related RequestMetadataHasStatusStatusesConnections match this filter */
  hasStatusStatusesConnection_SINGLE?: InputMaybe<RequestMetadataHasStatusStatusesConnectionWhere>;
  /** Return RequestMetadata where some of the related RequestMetadataHasStatusStatusesConnections match this filter */
  hasStatusStatusesConnection_SOME?: InputMaybe<RequestMetadataHasStatusStatusesConnectionWhere>;
  /** Return RequestMetadata where all of the related Statuses match this filter */
  hasStatusStatuses_ALL?: InputMaybe<StatusWhere>;
  /** Return RequestMetadata where none of the related Statuses match this filter */
  hasStatusStatuses_NONE?: InputMaybe<StatusWhere>;
  /** Return RequestMetadata where one of the related Statuses match this filter */
  hasStatusStatuses_SINGLE?: InputMaybe<StatusWhere>;
  /** Return RequestMetadata where some of the related Statuses match this filter */
  hasStatusStatuses_SOME?: InputMaybe<StatusWhere>;
  igoRequestId?: InputMaybe<Scalars["String"]["input"]>;
  igoRequestId_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  igoRequestId_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  igoRequestId_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  igoRequestId_MATCHES?: InputMaybe<Scalars["String"]["input"]>;
  igoRequestId_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  importDate?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_IN?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  importDate_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  requestMetadataJson?: InputMaybe<Scalars["String"]["input"]>;
  requestMetadataJson_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  requestMetadataJson_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  requestMetadataJson_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  requestMetadataJson_MATCHES?: InputMaybe<Scalars["String"]["input"]>;
  requestMetadataJson_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  requestsHasMetadataAggregate?: InputMaybe<RequestMetadataRequestsHasMetadataAggregateInput>;
  /** Return RequestMetadata where all of the related RequestMetadataRequestsHasMetadataConnections match this filter */
  requestsHasMetadataConnection_ALL?: InputMaybe<RequestMetadataRequestsHasMetadataConnectionWhere>;
  /** Return RequestMetadata where none of the related RequestMetadataRequestsHasMetadataConnections match this filter */
  requestsHasMetadataConnection_NONE?: InputMaybe<RequestMetadataRequestsHasMetadataConnectionWhere>;
  /** Return RequestMetadata where one of the related RequestMetadataRequestsHasMetadataConnections match this filter */
  requestsHasMetadataConnection_SINGLE?: InputMaybe<RequestMetadataRequestsHasMetadataConnectionWhere>;
  /** Return RequestMetadata where some of the related RequestMetadataRequestsHasMetadataConnections match this filter */
  requestsHasMetadataConnection_SOME?: InputMaybe<RequestMetadataRequestsHasMetadataConnectionWhere>;
  /** Return RequestMetadata where all of the related Requests match this filter */
  requestsHasMetadata_ALL?: InputMaybe<RequestWhere>;
  /** Return RequestMetadata where none of the related Requests match this filter */
  requestsHasMetadata_NONE?: InputMaybe<RequestWhere>;
  /** Return RequestMetadata where one of the related Requests match this filter */
  requestsHasMetadata_SINGLE?: InputMaybe<RequestWhere>;
  /** Return RequestMetadata where some of the related Requests match this filter */
  requestsHasMetadata_SOME?: InputMaybe<RequestWhere>;
};

export type RequestOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more RequestSort objects to sort Requests by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<RequestSort>>;
};

export type RequestProjectProjectsHasRequestAggregationSelection = {
  __typename?: "RequestProjectProjectsHasRequestAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<RequestProjectProjectsHasRequestNodeAggregateSelection>;
};

export type RequestProjectProjectsHasRequestNodeAggregateSelection = {
  __typename?: "RequestProjectProjectsHasRequestNodeAggregateSelection";
  igoProjectId: StringAggregateSelection;
  namespace: StringAggregateSelection;
};

export type RequestProjectsHasRequestAggregateInput = {
  AND?: InputMaybe<Array<RequestProjectsHasRequestAggregateInput>>;
  NOT?: InputMaybe<RequestProjectsHasRequestAggregateInput>;
  OR?: InputMaybe<Array<RequestProjectsHasRequestAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  node?: InputMaybe<RequestProjectsHasRequestNodeAggregationWhereInput>;
};

export type RequestProjectsHasRequestConnectFieldInput = {
  connect?: InputMaybe<Array<ProjectConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  where?: InputMaybe<ProjectConnectWhere>;
};

export type RequestProjectsHasRequestConnection = {
  __typename?: "RequestProjectsHasRequestConnection";
  edges: Array<RequestProjectsHasRequestRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type RequestProjectsHasRequestConnectionSort = {
  node?: InputMaybe<ProjectSort>;
};

export type RequestProjectsHasRequestConnectionWhere = {
  AND?: InputMaybe<Array<RequestProjectsHasRequestConnectionWhere>>;
  NOT?: InputMaybe<RequestProjectsHasRequestConnectionWhere>;
  OR?: InputMaybe<Array<RequestProjectsHasRequestConnectionWhere>>;
  node?: InputMaybe<ProjectWhere>;
};

export type RequestProjectsHasRequestCreateFieldInput = {
  node: ProjectCreateInput;
};

export type RequestProjectsHasRequestDeleteFieldInput = {
  delete?: InputMaybe<ProjectDeleteInput>;
  where?: InputMaybe<RequestProjectsHasRequestConnectionWhere>;
};

export type RequestProjectsHasRequestDisconnectFieldInput = {
  disconnect?: InputMaybe<ProjectDisconnectInput>;
  where?: InputMaybe<RequestProjectsHasRequestConnectionWhere>;
};

export type RequestProjectsHasRequestFieldInput = {
  connect?: InputMaybe<Array<RequestProjectsHasRequestConnectFieldInput>>;
  create?: InputMaybe<Array<RequestProjectsHasRequestCreateFieldInput>>;
};

export type RequestProjectsHasRequestNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<RequestProjectsHasRequestNodeAggregationWhereInput>>;
  NOT?: InputMaybe<RequestProjectsHasRequestNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<RequestProjectsHasRequestNodeAggregationWhereInput>>;
  igoProjectId_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  igoProjectId_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  igoProjectId_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  igoProjectId_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  igoProjectId_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  igoProjectId_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  igoProjectId_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  igoProjectId_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  igoProjectId_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  igoProjectId_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  igoProjectId_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  igoProjectId_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  igoProjectId_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  igoProjectId_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  igoProjectId_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  namespace_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  namespace_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  namespace_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  namespace_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  namespace_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  namespace_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  namespace_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  namespace_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  namespace_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  namespace_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  namespace_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  namespace_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  namespace_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  namespace_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  namespace_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type RequestProjectsHasRequestRelationship = {
  __typename?: "RequestProjectsHasRequestRelationship";
  cursor: Scalars["String"]["output"];
  node: Project;
};

export type RequestProjectsHasRequestUpdateConnectionInput = {
  node?: InputMaybe<ProjectUpdateInput>;
};

export type RequestProjectsHasRequestUpdateFieldInput = {
  connect?: InputMaybe<Array<RequestProjectsHasRequestConnectFieldInput>>;
  create?: InputMaybe<Array<RequestProjectsHasRequestCreateFieldInput>>;
  delete?: InputMaybe<Array<RequestProjectsHasRequestDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<RequestProjectsHasRequestDisconnectFieldInput>>;
  update?: InputMaybe<RequestProjectsHasRequestUpdateConnectionInput>;
  where?: InputMaybe<RequestProjectsHasRequestConnectionWhere>;
};

export type RequestRelationInput = {
  hasMetadataRequestMetadata?: InputMaybe<
    Array<RequestHasMetadataRequestMetadataCreateFieldInput>
  >;
  hasSampleSamples?: InputMaybe<Array<RequestHasSampleSamplesCreateFieldInput>>;
  projectsHasRequest?: InputMaybe<
    Array<RequestProjectsHasRequestCreateFieldInput>
  >;
};

export type RequestRequestMetadataHasMetadataRequestMetadataAggregationSelection =
  {
    __typename?: "RequestRequestMetadataHasMetadataRequestMetadataAggregationSelection";
    count: Scalars["Int"]["output"];
    node?: Maybe<RequestRequestMetadataHasMetadataRequestMetadataNodeAggregateSelection>;
  };

export type RequestRequestMetadataHasMetadataRequestMetadataNodeAggregateSelection =
  {
    __typename?: "RequestRequestMetadataHasMetadataRequestMetadataNodeAggregateSelection";
    igoRequestId: StringAggregateSelection;
    importDate: BigIntAggregateSelection;
    requestMetadataJson: StringAggregateSelection;
  };

export type RequestSampleHasSampleSamplesAggregationSelection = {
  __typename?: "RequestSampleHasSampleSamplesAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<RequestSampleHasSampleSamplesNodeAggregateSelection>;
};

export type RequestSampleHasSampleSamplesNodeAggregateSelection = {
  __typename?: "RequestSampleHasSampleSamplesNodeAggregateSelection";
  datasource: StringAggregateSelection;
  sampleCategory: StringAggregateSelection;
  sampleClass: StringAggregateSelection;
  smileSampleId: StringAggregateSelection;
};

/** Fields to sort Requests by. The order in which sorts are applied is not guaranteed when specifying many fields in one RequestSort object. */
export type RequestSort = {
  bicAnalysis?: InputMaybe<SortDirection>;
  dataAccessEmails?: InputMaybe<SortDirection>;
  dataAnalystEmail?: InputMaybe<SortDirection>;
  dataAnalystName?: InputMaybe<SortDirection>;
  genePanel?: InputMaybe<SortDirection>;
  igoDeliveryDate?: InputMaybe<SortDirection>;
  igoProjectId?: InputMaybe<SortDirection>;
  igoRequestId?: InputMaybe<SortDirection>;
  ilabRequestId?: InputMaybe<SortDirection>;
  investigatorEmail?: InputMaybe<SortDirection>;
  investigatorName?: InputMaybe<SortDirection>;
  isCmoRequest?: InputMaybe<SortDirection>;
  labHeadEmail?: InputMaybe<SortDirection>;
  labHeadName?: InputMaybe<SortDirection>;
  libraryType?: InputMaybe<SortDirection>;
  namespace?: InputMaybe<SortDirection>;
  otherContactEmails?: InputMaybe<SortDirection>;
  piEmail?: InputMaybe<SortDirection>;
  projectManagerName?: InputMaybe<SortDirection>;
  qcAccessEmails?: InputMaybe<SortDirection>;
  requestJson?: InputMaybe<SortDirection>;
  smileRequestId?: InputMaybe<SortDirection>;
  strand?: InputMaybe<SortDirection>;
};

export type RequestUpdateInput = {
  bicAnalysis?: InputMaybe<Scalars["Boolean"]["input"]>;
  dataAccessEmails?: InputMaybe<Scalars["String"]["input"]>;
  dataAnalystEmail?: InputMaybe<Scalars["String"]["input"]>;
  dataAnalystName?: InputMaybe<Scalars["String"]["input"]>;
  genePanel?: InputMaybe<Scalars["String"]["input"]>;
  hasMetadataRequestMetadata?: InputMaybe<
    Array<RequestHasMetadataRequestMetadataUpdateFieldInput>
  >;
  hasSampleSamples?: InputMaybe<Array<RequestHasSampleSamplesUpdateFieldInput>>;
  igoDeliveryDate?: InputMaybe<Scalars["BigInt"]["input"]>;
  igoDeliveryDate_DECREMENT?: InputMaybe<Scalars["BigInt"]["input"]>;
  igoDeliveryDate_INCREMENT?: InputMaybe<Scalars["BigInt"]["input"]>;
  igoProjectId?: InputMaybe<Scalars["String"]["input"]>;
  igoRequestId?: InputMaybe<Scalars["String"]["input"]>;
  ilabRequestId?: InputMaybe<Scalars["String"]["input"]>;
  investigatorEmail?: InputMaybe<Scalars["String"]["input"]>;
  investigatorName?: InputMaybe<Scalars["String"]["input"]>;
  isCmoRequest?: InputMaybe<Scalars["Boolean"]["input"]>;
  labHeadEmail?: InputMaybe<Scalars["String"]["input"]>;
  labHeadName?: InputMaybe<Scalars["String"]["input"]>;
  libraryType?: InputMaybe<Scalars["String"]["input"]>;
  namespace?: InputMaybe<Scalars["String"]["input"]>;
  otherContactEmails?: InputMaybe<Scalars["String"]["input"]>;
  piEmail?: InputMaybe<Scalars["String"]["input"]>;
  pooledNormals?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  pooledNormals_POP?: InputMaybe<Scalars["Int"]["input"]>;
  pooledNormals_PUSH?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  projectManagerName?: InputMaybe<Scalars["String"]["input"]>;
  projectsHasRequest?: InputMaybe<
    Array<RequestProjectsHasRequestUpdateFieldInput>
  >;
  qcAccessEmails?: InputMaybe<Scalars["String"]["input"]>;
  requestJson?: InputMaybe<Scalars["String"]["input"]>;
  smileRequestId?: InputMaybe<Scalars["String"]["input"]>;
  strand?: InputMaybe<Scalars["String"]["input"]>;
};

export type RequestWhere = {
  AND?: InputMaybe<Array<RequestWhere>>;
  NOT?: InputMaybe<RequestWhere>;
  OR?: InputMaybe<Array<RequestWhere>>;
  bicAnalysis?: InputMaybe<Scalars["Boolean"]["input"]>;
  dataAccessEmails?: InputMaybe<Scalars["String"]["input"]>;
  dataAccessEmails_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  dataAccessEmails_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  dataAccessEmails_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  dataAccessEmails_MATCHES?: InputMaybe<Scalars["String"]["input"]>;
  dataAccessEmails_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  dataAnalystEmail?: InputMaybe<Scalars["String"]["input"]>;
  dataAnalystEmail_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  dataAnalystEmail_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  dataAnalystEmail_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  dataAnalystEmail_MATCHES?: InputMaybe<Scalars["String"]["input"]>;
  dataAnalystEmail_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  dataAnalystName?: InputMaybe<Scalars["String"]["input"]>;
  dataAnalystName_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  dataAnalystName_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  dataAnalystName_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  dataAnalystName_MATCHES?: InputMaybe<Scalars["String"]["input"]>;
  dataAnalystName_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  genePanel?: InputMaybe<Scalars["String"]["input"]>;
  genePanel_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  genePanel_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  genePanel_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  genePanel_MATCHES?: InputMaybe<Scalars["String"]["input"]>;
  genePanel_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  hasMetadataRequestMetadataAggregate?: InputMaybe<RequestHasMetadataRequestMetadataAggregateInput>;
  /** Return Requests where all of the related RequestHasMetadataRequestMetadataConnections match this filter */
  hasMetadataRequestMetadataConnection_ALL?: InputMaybe<RequestHasMetadataRequestMetadataConnectionWhere>;
  /** Return Requests where none of the related RequestHasMetadataRequestMetadataConnections match this filter */
  hasMetadataRequestMetadataConnection_NONE?: InputMaybe<RequestHasMetadataRequestMetadataConnectionWhere>;
  /** Return Requests where one of the related RequestHasMetadataRequestMetadataConnections match this filter */
  hasMetadataRequestMetadataConnection_SINGLE?: InputMaybe<RequestHasMetadataRequestMetadataConnectionWhere>;
  /** Return Requests where some of the related RequestHasMetadataRequestMetadataConnections match this filter */
  hasMetadataRequestMetadataConnection_SOME?: InputMaybe<RequestHasMetadataRequestMetadataConnectionWhere>;
  /** Return Requests where all of the related RequestMetadata match this filter */
  hasMetadataRequestMetadata_ALL?: InputMaybe<RequestMetadataWhere>;
  /** Return Requests where none of the related RequestMetadata match this filter */
  hasMetadataRequestMetadata_NONE?: InputMaybe<RequestMetadataWhere>;
  /** Return Requests where one of the related RequestMetadata match this filter */
  hasMetadataRequestMetadata_SINGLE?: InputMaybe<RequestMetadataWhere>;
  /** Return Requests where some of the related RequestMetadata match this filter */
  hasMetadataRequestMetadata_SOME?: InputMaybe<RequestMetadataWhere>;
  hasSampleSamplesAggregate?: InputMaybe<RequestHasSampleSamplesAggregateInput>;
  /** Return Requests where all of the related RequestHasSampleSamplesConnections match this filter */
  hasSampleSamplesConnection_ALL?: InputMaybe<RequestHasSampleSamplesConnectionWhere>;
  /** Return Requests where none of the related RequestHasSampleSamplesConnections match this filter */
  hasSampleSamplesConnection_NONE?: InputMaybe<RequestHasSampleSamplesConnectionWhere>;
  /** Return Requests where one of the related RequestHasSampleSamplesConnections match this filter */
  hasSampleSamplesConnection_SINGLE?: InputMaybe<RequestHasSampleSamplesConnectionWhere>;
  /** Return Requests where some of the related RequestHasSampleSamplesConnections match this filter */
  hasSampleSamplesConnection_SOME?: InputMaybe<RequestHasSampleSamplesConnectionWhere>;
  /** Return Requests where all of the related Samples match this filter */
  hasSampleSamples_ALL?: InputMaybe<SampleWhere>;
  /** Return Requests where none of the related Samples match this filter */
  hasSampleSamples_NONE?: InputMaybe<SampleWhere>;
  /** Return Requests where one of the related Samples match this filter */
  hasSampleSamples_SINGLE?: InputMaybe<SampleWhere>;
  /** Return Requests where some of the related Samples match this filter */
  hasSampleSamples_SOME?: InputMaybe<SampleWhere>;
  igoDeliveryDate?: InputMaybe<Scalars["BigInt"]["input"]>;
  igoDeliveryDate_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  igoDeliveryDate_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  igoDeliveryDate_IN?: InputMaybe<
    Array<InputMaybe<Scalars["BigInt"]["input"]>>
  >;
  igoDeliveryDate_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  igoDeliveryDate_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  igoProjectId?: InputMaybe<Scalars["String"]["input"]>;
  igoProjectId_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  igoProjectId_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  igoProjectId_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  igoProjectId_MATCHES?: InputMaybe<Scalars["String"]["input"]>;
  igoProjectId_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  igoRequestId?: InputMaybe<Scalars["String"]["input"]>;
  igoRequestId_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  igoRequestId_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  igoRequestId_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  igoRequestId_MATCHES?: InputMaybe<Scalars["String"]["input"]>;
  igoRequestId_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  ilabRequestId?: InputMaybe<Scalars["String"]["input"]>;
  ilabRequestId_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  ilabRequestId_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  ilabRequestId_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  ilabRequestId_MATCHES?: InputMaybe<Scalars["String"]["input"]>;
  ilabRequestId_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  investigatorEmail?: InputMaybe<Scalars["String"]["input"]>;
  investigatorEmail_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  investigatorEmail_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  investigatorEmail_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  investigatorEmail_MATCHES?: InputMaybe<Scalars["String"]["input"]>;
  investigatorEmail_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  investigatorName?: InputMaybe<Scalars["String"]["input"]>;
  investigatorName_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  investigatorName_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  investigatorName_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  investigatorName_MATCHES?: InputMaybe<Scalars["String"]["input"]>;
  investigatorName_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  isCmoRequest?: InputMaybe<Scalars["Boolean"]["input"]>;
  labHeadEmail?: InputMaybe<Scalars["String"]["input"]>;
  labHeadEmail_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  labHeadEmail_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  labHeadEmail_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  labHeadEmail_MATCHES?: InputMaybe<Scalars["String"]["input"]>;
  labHeadEmail_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  labHeadName?: InputMaybe<Scalars["String"]["input"]>;
  labHeadName_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  labHeadName_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  labHeadName_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  labHeadName_MATCHES?: InputMaybe<Scalars["String"]["input"]>;
  labHeadName_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  libraryType?: InputMaybe<Scalars["String"]["input"]>;
  libraryType_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  libraryType_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  libraryType_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  libraryType_MATCHES?: InputMaybe<Scalars["String"]["input"]>;
  libraryType_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  namespace?: InputMaybe<Scalars["String"]["input"]>;
  namespace_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  namespace_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  namespace_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  namespace_MATCHES?: InputMaybe<Scalars["String"]["input"]>;
  namespace_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  otherContactEmails?: InputMaybe<Scalars["String"]["input"]>;
  otherContactEmails_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  otherContactEmails_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  otherContactEmails_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  otherContactEmails_MATCHES?: InputMaybe<Scalars["String"]["input"]>;
  otherContactEmails_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  piEmail?: InputMaybe<Scalars["String"]["input"]>;
  piEmail_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  piEmail_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  piEmail_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  piEmail_MATCHES?: InputMaybe<Scalars["String"]["input"]>;
  piEmail_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  pooledNormals?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  pooledNormals_INCLUDES?: InputMaybe<Scalars["String"]["input"]>;
  projectManagerName?: InputMaybe<Scalars["String"]["input"]>;
  projectManagerName_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  projectManagerName_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  projectManagerName_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  projectManagerName_MATCHES?: InputMaybe<Scalars["String"]["input"]>;
  projectManagerName_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  projectsHasRequestAggregate?: InputMaybe<RequestProjectsHasRequestAggregateInput>;
  /** Return Requests where all of the related RequestProjectsHasRequestConnections match this filter */
  projectsHasRequestConnection_ALL?: InputMaybe<RequestProjectsHasRequestConnectionWhere>;
  /** Return Requests where none of the related RequestProjectsHasRequestConnections match this filter */
  projectsHasRequestConnection_NONE?: InputMaybe<RequestProjectsHasRequestConnectionWhere>;
  /** Return Requests where one of the related RequestProjectsHasRequestConnections match this filter */
  projectsHasRequestConnection_SINGLE?: InputMaybe<RequestProjectsHasRequestConnectionWhere>;
  /** Return Requests where some of the related RequestProjectsHasRequestConnections match this filter */
  projectsHasRequestConnection_SOME?: InputMaybe<RequestProjectsHasRequestConnectionWhere>;
  /** Return Requests where all of the related Projects match this filter */
  projectsHasRequest_ALL?: InputMaybe<ProjectWhere>;
  /** Return Requests where none of the related Projects match this filter */
  projectsHasRequest_NONE?: InputMaybe<ProjectWhere>;
  /** Return Requests where one of the related Projects match this filter */
  projectsHasRequest_SINGLE?: InputMaybe<ProjectWhere>;
  /** Return Requests where some of the related Projects match this filter */
  projectsHasRequest_SOME?: InputMaybe<ProjectWhere>;
  qcAccessEmails?: InputMaybe<Scalars["String"]["input"]>;
  qcAccessEmails_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  qcAccessEmails_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  qcAccessEmails_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  qcAccessEmails_MATCHES?: InputMaybe<Scalars["String"]["input"]>;
  qcAccessEmails_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  requestJson?: InputMaybe<Scalars["String"]["input"]>;
  requestJson_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  requestJson_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  requestJson_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  requestJson_MATCHES?: InputMaybe<Scalars["String"]["input"]>;
  requestJson_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  smileRequestId?: InputMaybe<Scalars["String"]["input"]>;
  smileRequestId_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  smileRequestId_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  smileRequestId_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  smileRequestId_MATCHES?: InputMaybe<Scalars["String"]["input"]>;
  smileRequestId_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  strand?: InputMaybe<Scalars["String"]["input"]>;
  strand_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  strand_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  strand_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  strand_MATCHES?: InputMaybe<Scalars["String"]["input"]>;
  strand_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
};

export type RequestsConnection = {
  __typename?: "RequestsConnection";
  edges: Array<RequestEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type Sample = {
  __typename?: "Sample";
  cohortsHasCohortSample: Array<Cohort>;
  cohortsHasCohortSampleAggregate?: Maybe<SampleCohortCohortsHasCohortSampleAggregationSelection>;
  cohortsHasCohortSampleConnection: SampleCohortsHasCohortSampleConnection;
  datasource: Scalars["String"]["output"];
  hasDbgapDbGaps: Array<DbGap>;
  hasDbgapDbGapsAggregate?: Maybe<SampleDbGapHasDbgapDbGapsAggregationSelection>;
  hasDbgapDbGapsConnection: SampleHasDbgapDbGapsConnection;
  hasMetadataSampleMetadata: Array<SampleMetadata>;
  hasMetadataSampleMetadataAggregate?: Maybe<SampleSampleMetadataHasMetadataSampleMetadataAggregationSelection>;
  hasMetadataSampleMetadataConnection: SampleHasMetadataSampleMetadataConnection;
  hasTempoTempos: Array<Tempo>;
  hasTempoTemposAggregate?: Maybe<SampleTempoHasTempoTemposAggregationSelection>;
  hasTempoTemposConnection: SampleHasTempoTemposConnection;
  patientsHasSample: Array<Patient>;
  patientsHasSampleAggregate?: Maybe<SamplePatientPatientsHasSampleAggregationSelection>;
  patientsHasSampleConnection: SamplePatientsHasSampleConnection;
  requestsHasSample: Array<Request>;
  requestsHasSampleAggregate?: Maybe<SampleRequestRequestsHasSampleAggregationSelection>;
  requestsHasSampleConnection: SampleRequestsHasSampleConnection;
  revisable?: Maybe<Scalars["Boolean"]["output"]>;
  sampleAliasesIsAlias: Array<SampleAlias>;
  sampleAliasesIsAliasAggregate?: Maybe<SampleSampleAliasSampleAliasesIsAliasAggregationSelection>;
  sampleAliasesIsAliasConnection: SampleSampleAliasesIsAliasConnection;
  sampleCategory: Scalars["String"]["output"];
  sampleClass?: Maybe<Scalars["String"]["output"]>;
  smileSampleId: Scalars["String"]["output"];
};

export type SampleCohortsHasCohortSampleArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  options?: InputMaybe<CohortOptions>;
  where?: InputMaybe<CohortWhere>;
};

export type SampleCohortsHasCohortSampleAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<CohortWhere>;
};

export type SampleCohortsHasCohortSampleConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<SampleCohortsHasCohortSampleConnectionSort>>;
  where?: InputMaybe<SampleCohortsHasCohortSampleConnectionWhere>;
};

export type SampleHasDbgapDbGapsArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  options?: InputMaybe<DbGapOptions>;
  where?: InputMaybe<DbGapWhere>;
};

export type SampleHasDbgapDbGapsAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<DbGapWhere>;
};

export type SampleHasDbgapDbGapsConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<SampleHasDbgapDbGapsConnectionSort>>;
  where?: InputMaybe<SampleHasDbgapDbGapsConnectionWhere>;
};

export type SampleHasMetadataSampleMetadataArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  options?: InputMaybe<SampleMetadataOptions>;
  where?: InputMaybe<SampleMetadataWhere>;
};

export type SampleHasMetadataSampleMetadataAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<SampleMetadataWhere>;
};

export type SampleHasMetadataSampleMetadataConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<SampleHasMetadataSampleMetadataConnectionSort>>;
  where?: InputMaybe<SampleHasMetadataSampleMetadataConnectionWhere>;
};

export type SampleHasTempoTemposArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  options?: InputMaybe<TempoOptions>;
  where?: InputMaybe<TempoWhere>;
};

export type SampleHasTempoTemposAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<TempoWhere>;
};

export type SampleHasTempoTemposConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<SampleHasTempoTemposConnectionSort>>;
  where?: InputMaybe<SampleHasTempoTemposConnectionWhere>;
};

export type SamplePatientsHasSampleArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  options?: InputMaybe<PatientOptions>;
  where?: InputMaybe<PatientWhere>;
};

export type SamplePatientsHasSampleAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<PatientWhere>;
};

export type SamplePatientsHasSampleConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<SamplePatientsHasSampleConnectionSort>>;
  where?: InputMaybe<SamplePatientsHasSampleConnectionWhere>;
};

export type SampleRequestsHasSampleArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  options?: InputMaybe<RequestOptions>;
  where?: InputMaybe<RequestWhere>;
};

export type SampleRequestsHasSampleAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<RequestWhere>;
};

export type SampleRequestsHasSampleConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<SampleRequestsHasSampleConnectionSort>>;
  where?: InputMaybe<SampleRequestsHasSampleConnectionWhere>;
};

export type SampleSampleAliasesIsAliasArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  options?: InputMaybe<SampleAliasOptions>;
  where?: InputMaybe<SampleAliasWhere>;
};

export type SampleSampleAliasesIsAliasAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<SampleAliasWhere>;
};

export type SampleSampleAliasesIsAliasConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<SampleSampleAliasesIsAliasConnectionSort>>;
  where?: InputMaybe<SampleSampleAliasesIsAliasConnectionWhere>;
};

export type SampleAggregateSelection = {
  __typename?: "SampleAggregateSelection";
  count: Scalars["Int"]["output"];
  datasource: StringAggregateSelection;
  sampleCategory: StringAggregateSelection;
  sampleClass: StringAggregateSelection;
  smileSampleId: StringAggregateSelection;
};

export type SampleAlias = {
  __typename?: "SampleAlias";
  isAliasSamples: Array<Sample>;
  isAliasSamplesAggregate?: Maybe<SampleAliasSampleIsAliasSamplesAggregationSelection>;
  isAliasSamplesConnection: SampleAliasIsAliasSamplesConnection;
  namespace: Scalars["String"]["output"];
  value: Scalars["String"]["output"];
};

export type SampleAliasIsAliasSamplesArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  options?: InputMaybe<SampleOptions>;
  where?: InputMaybe<SampleWhere>;
};

export type SampleAliasIsAliasSamplesAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<SampleWhere>;
};

export type SampleAliasIsAliasSamplesConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<SampleAliasIsAliasSamplesConnectionSort>>;
  where?: InputMaybe<SampleAliasIsAliasSamplesConnectionWhere>;
};

export type SampleAliasAggregateSelection = {
  __typename?: "SampleAliasAggregateSelection";
  count: Scalars["Int"]["output"];
  namespace: StringAggregateSelection;
  value: StringAggregateSelection;
};

export type SampleAliasConnectInput = {
  isAliasSamples?: InputMaybe<
    Array<SampleAliasIsAliasSamplesConnectFieldInput>
  >;
};

export type SampleAliasConnectWhere = {
  node: SampleAliasWhere;
};

export type SampleAliasCreateInput = {
  isAliasSamples?: InputMaybe<SampleAliasIsAliasSamplesFieldInput>;
  namespace: Scalars["String"]["input"];
  value: Scalars["String"]["input"];
};

export type SampleAliasDeleteInput = {
  isAliasSamples?: InputMaybe<Array<SampleAliasIsAliasSamplesDeleteFieldInput>>;
};

export type SampleAliasDisconnectInput = {
  isAliasSamples?: InputMaybe<
    Array<SampleAliasIsAliasSamplesDisconnectFieldInput>
  >;
};

export type SampleAliasEdge = {
  __typename?: "SampleAliasEdge";
  cursor: Scalars["String"]["output"];
  node: SampleAlias;
};

export type SampleAliasIsAliasSamplesAggregateInput = {
  AND?: InputMaybe<Array<SampleAliasIsAliasSamplesAggregateInput>>;
  NOT?: InputMaybe<SampleAliasIsAliasSamplesAggregateInput>;
  OR?: InputMaybe<Array<SampleAliasIsAliasSamplesAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  node?: InputMaybe<SampleAliasIsAliasSamplesNodeAggregationWhereInput>;
};

export type SampleAliasIsAliasSamplesConnectFieldInput = {
  connect?: InputMaybe<Array<SampleConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  where?: InputMaybe<SampleConnectWhere>;
};

export type SampleAliasIsAliasSamplesConnection = {
  __typename?: "SampleAliasIsAliasSamplesConnection";
  edges: Array<SampleAliasIsAliasSamplesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type SampleAliasIsAliasSamplesConnectionSort = {
  node?: InputMaybe<SampleSort>;
};

export type SampleAliasIsAliasSamplesConnectionWhere = {
  AND?: InputMaybe<Array<SampleAliasIsAliasSamplesConnectionWhere>>;
  NOT?: InputMaybe<SampleAliasIsAliasSamplesConnectionWhere>;
  OR?: InputMaybe<Array<SampleAliasIsAliasSamplesConnectionWhere>>;
  node?: InputMaybe<SampleWhere>;
};

export type SampleAliasIsAliasSamplesCreateFieldInput = {
  node: SampleCreateInput;
};

export type SampleAliasIsAliasSamplesDeleteFieldInput = {
  delete?: InputMaybe<SampleDeleteInput>;
  where?: InputMaybe<SampleAliasIsAliasSamplesConnectionWhere>;
};

export type SampleAliasIsAliasSamplesDisconnectFieldInput = {
  disconnect?: InputMaybe<SampleDisconnectInput>;
  where?: InputMaybe<SampleAliasIsAliasSamplesConnectionWhere>;
};

export type SampleAliasIsAliasSamplesFieldInput = {
  connect?: InputMaybe<Array<SampleAliasIsAliasSamplesConnectFieldInput>>;
  create?: InputMaybe<Array<SampleAliasIsAliasSamplesCreateFieldInput>>;
};

export type SampleAliasIsAliasSamplesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<SampleAliasIsAliasSamplesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<SampleAliasIsAliasSamplesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<SampleAliasIsAliasSamplesNodeAggregationWhereInput>>;
  datasource_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  datasource_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  datasource_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  datasource_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  datasource_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  datasource_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  datasource_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  datasource_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  datasource_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  datasource_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  datasource_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  datasource_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  datasource_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  datasource_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  datasource_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  sampleCategory_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  sampleCategory_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  sampleCategory_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  sampleCategory_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  sampleCategory_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  sampleCategory_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  sampleCategory_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  sampleCategory_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  sampleCategory_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  sampleCategory_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  sampleCategory_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  sampleCategory_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  sampleCategory_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  sampleCategory_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  sampleCategory_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  sampleClass_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  sampleClass_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  sampleClass_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  sampleClass_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  sampleClass_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  smileSampleId_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  smileSampleId_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  smileSampleId_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  smileSampleId_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  smileSampleId_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  smileSampleId_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  smileSampleId_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  smileSampleId_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  smileSampleId_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  smileSampleId_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  smileSampleId_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  smileSampleId_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  smileSampleId_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  smileSampleId_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  smileSampleId_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type SampleAliasIsAliasSamplesRelationship = {
  __typename?: "SampleAliasIsAliasSamplesRelationship";
  cursor: Scalars["String"]["output"];
  node: Sample;
};

export type SampleAliasIsAliasSamplesUpdateConnectionInput = {
  node?: InputMaybe<SampleUpdateInput>;
};

export type SampleAliasIsAliasSamplesUpdateFieldInput = {
  connect?: InputMaybe<Array<SampleAliasIsAliasSamplesConnectFieldInput>>;
  create?: InputMaybe<Array<SampleAliasIsAliasSamplesCreateFieldInput>>;
  delete?: InputMaybe<Array<SampleAliasIsAliasSamplesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<SampleAliasIsAliasSamplesDisconnectFieldInput>>;
  update?: InputMaybe<SampleAliasIsAliasSamplesUpdateConnectionInput>;
  where?: InputMaybe<SampleAliasIsAliasSamplesConnectionWhere>;
};

export type SampleAliasOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more SampleAliasSort objects to sort SampleAliases by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<SampleAliasSort>>;
};

export type SampleAliasRelationInput = {
  isAliasSamples?: InputMaybe<Array<SampleAliasIsAliasSamplesCreateFieldInput>>;
};

export type SampleAliasSampleIsAliasSamplesAggregationSelection = {
  __typename?: "SampleAliasSampleIsAliasSamplesAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<SampleAliasSampleIsAliasSamplesNodeAggregateSelection>;
};

export type SampleAliasSampleIsAliasSamplesNodeAggregateSelection = {
  __typename?: "SampleAliasSampleIsAliasSamplesNodeAggregateSelection";
  datasource: StringAggregateSelection;
  sampleCategory: StringAggregateSelection;
  sampleClass: StringAggregateSelection;
  smileSampleId: StringAggregateSelection;
};

/** Fields to sort SampleAliases by. The order in which sorts are applied is not guaranteed when specifying many fields in one SampleAliasSort object. */
export type SampleAliasSort = {
  namespace?: InputMaybe<SortDirection>;
  value?: InputMaybe<SortDirection>;
};

export type SampleAliasUpdateInput = {
  isAliasSamples?: InputMaybe<Array<SampleAliasIsAliasSamplesUpdateFieldInput>>;
  namespace?: InputMaybe<Scalars["String"]["input"]>;
  value?: InputMaybe<Scalars["String"]["input"]>;
};

export type SampleAliasWhere = {
  AND?: InputMaybe<Array<SampleAliasWhere>>;
  NOT?: InputMaybe<SampleAliasWhere>;
  OR?: InputMaybe<Array<SampleAliasWhere>>;
  isAliasSamplesAggregate?: InputMaybe<SampleAliasIsAliasSamplesAggregateInput>;
  /** Return SampleAliases where all of the related SampleAliasIsAliasSamplesConnections match this filter */
  isAliasSamplesConnection_ALL?: InputMaybe<SampleAliasIsAliasSamplesConnectionWhere>;
  /** Return SampleAliases where none of the related SampleAliasIsAliasSamplesConnections match this filter */
  isAliasSamplesConnection_NONE?: InputMaybe<SampleAliasIsAliasSamplesConnectionWhere>;
  /** Return SampleAliases where one of the related SampleAliasIsAliasSamplesConnections match this filter */
  isAliasSamplesConnection_SINGLE?: InputMaybe<SampleAliasIsAliasSamplesConnectionWhere>;
  /** Return SampleAliases where some of the related SampleAliasIsAliasSamplesConnections match this filter */
  isAliasSamplesConnection_SOME?: InputMaybe<SampleAliasIsAliasSamplesConnectionWhere>;
  /** Return SampleAliases where all of the related Samples match this filter */
  isAliasSamples_ALL?: InputMaybe<SampleWhere>;
  /** Return SampleAliases where none of the related Samples match this filter */
  isAliasSamples_NONE?: InputMaybe<SampleWhere>;
  /** Return SampleAliases where one of the related Samples match this filter */
  isAliasSamples_SINGLE?: InputMaybe<SampleWhere>;
  /** Return SampleAliases where some of the related Samples match this filter */
  isAliasSamples_SOME?: InputMaybe<SampleWhere>;
  namespace?: InputMaybe<Scalars["String"]["input"]>;
  namespace_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  namespace_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  namespace_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  namespace_MATCHES?: InputMaybe<Scalars["String"]["input"]>;
  namespace_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  value?: InputMaybe<Scalars["String"]["input"]>;
  value_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  value_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  value_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  value_MATCHES?: InputMaybe<Scalars["String"]["input"]>;
  value_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
};

export type SampleAliasesConnection = {
  __typename?: "SampleAliasesConnection";
  edges: Array<SampleAliasEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type SampleCohortCohortsHasCohortSampleAggregationSelection = {
  __typename?: "SampleCohortCohortsHasCohortSampleAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<SampleCohortCohortsHasCohortSampleNodeAggregateSelection>;
};

export type SampleCohortCohortsHasCohortSampleNodeAggregateSelection = {
  __typename?: "SampleCohortCohortsHasCohortSampleNodeAggregateSelection";
  cohortId: StringAggregateSelection;
  cohortStatus: StringAggregateSelection;
};

export type SampleCohortsHasCohortSampleAggregateInput = {
  AND?: InputMaybe<Array<SampleCohortsHasCohortSampleAggregateInput>>;
  NOT?: InputMaybe<SampleCohortsHasCohortSampleAggregateInput>;
  OR?: InputMaybe<Array<SampleCohortsHasCohortSampleAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  node?: InputMaybe<SampleCohortsHasCohortSampleNodeAggregationWhereInput>;
};

export type SampleCohortsHasCohortSampleConnectFieldInput = {
  connect?: InputMaybe<Array<CohortConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  where?: InputMaybe<CohortConnectWhere>;
};

export type SampleCohortsHasCohortSampleConnection = {
  __typename?: "SampleCohortsHasCohortSampleConnection";
  edges: Array<SampleCohortsHasCohortSampleRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type SampleCohortsHasCohortSampleConnectionSort = {
  node?: InputMaybe<CohortSort>;
};

export type SampleCohortsHasCohortSampleConnectionWhere = {
  AND?: InputMaybe<Array<SampleCohortsHasCohortSampleConnectionWhere>>;
  NOT?: InputMaybe<SampleCohortsHasCohortSampleConnectionWhere>;
  OR?: InputMaybe<Array<SampleCohortsHasCohortSampleConnectionWhere>>;
  node?: InputMaybe<CohortWhere>;
};

export type SampleCohortsHasCohortSampleCreateFieldInput = {
  node: CohortCreateInput;
};

export type SampleCohortsHasCohortSampleDeleteFieldInput = {
  delete?: InputMaybe<CohortDeleteInput>;
  where?: InputMaybe<SampleCohortsHasCohortSampleConnectionWhere>;
};

export type SampleCohortsHasCohortSampleDisconnectFieldInput = {
  disconnect?: InputMaybe<CohortDisconnectInput>;
  where?: InputMaybe<SampleCohortsHasCohortSampleConnectionWhere>;
};

export type SampleCohortsHasCohortSampleFieldInput = {
  connect?: InputMaybe<Array<SampleCohortsHasCohortSampleConnectFieldInput>>;
  create?: InputMaybe<Array<SampleCohortsHasCohortSampleCreateFieldInput>>;
};

export type SampleCohortsHasCohortSampleNodeAggregationWhereInput = {
  AND?: InputMaybe<
    Array<SampleCohortsHasCohortSampleNodeAggregationWhereInput>
  >;
  NOT?: InputMaybe<SampleCohortsHasCohortSampleNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<SampleCohortsHasCohortSampleNodeAggregationWhereInput>>;
  cohortId_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  cohortId_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  cohortId_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  cohortId_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  cohortId_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  cohortId_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  cohortId_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  cohortId_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  cohortId_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  cohortId_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  cohortId_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  cohortId_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  cohortId_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  cohortId_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  cohortId_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  cohortStatus_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  cohortStatus_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  cohortStatus_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  cohortStatus_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  cohortStatus_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  cohortStatus_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  cohortStatus_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  cohortStatus_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  cohortStatus_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  cohortStatus_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  cohortStatus_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  cohortStatus_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  cohortStatus_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  cohortStatus_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  cohortStatus_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type SampleCohortsHasCohortSampleRelationship = {
  __typename?: "SampleCohortsHasCohortSampleRelationship";
  cursor: Scalars["String"]["output"];
  node: Cohort;
};

export type SampleCohortsHasCohortSampleUpdateConnectionInput = {
  node?: InputMaybe<CohortUpdateInput>;
};

export type SampleCohortsHasCohortSampleUpdateFieldInput = {
  connect?: InputMaybe<Array<SampleCohortsHasCohortSampleConnectFieldInput>>;
  create?: InputMaybe<Array<SampleCohortsHasCohortSampleCreateFieldInput>>;
  delete?: InputMaybe<Array<SampleCohortsHasCohortSampleDeleteFieldInput>>;
  disconnect?: InputMaybe<
    Array<SampleCohortsHasCohortSampleDisconnectFieldInput>
  >;
  update?: InputMaybe<SampleCohortsHasCohortSampleUpdateConnectionInput>;
  where?: InputMaybe<SampleCohortsHasCohortSampleConnectionWhere>;
};

export type SampleConnectInput = {
  cohortsHasCohortSample?: InputMaybe<
    Array<SampleCohortsHasCohortSampleConnectFieldInput>
  >;
  hasDbgapDbGaps?: InputMaybe<Array<SampleHasDbgapDbGapsConnectFieldInput>>;
  hasMetadataSampleMetadata?: InputMaybe<
    Array<SampleHasMetadataSampleMetadataConnectFieldInput>
  >;
  hasTempoTempos?: InputMaybe<Array<SampleHasTempoTemposConnectFieldInput>>;
  patientsHasSample?: InputMaybe<
    Array<SamplePatientsHasSampleConnectFieldInput>
  >;
  requestsHasSample?: InputMaybe<
    Array<SampleRequestsHasSampleConnectFieldInput>
  >;
  sampleAliasesIsAlias?: InputMaybe<
    Array<SampleSampleAliasesIsAliasConnectFieldInput>
  >;
};

export type SampleConnectWhere = {
  node: SampleWhere;
};

export type SampleCreateInput = {
  cohortsHasCohortSample?: InputMaybe<SampleCohortsHasCohortSampleFieldInput>;
  datasource: Scalars["String"]["input"];
  hasDbgapDbGaps?: InputMaybe<SampleHasDbgapDbGapsFieldInput>;
  hasMetadataSampleMetadata?: InputMaybe<SampleHasMetadataSampleMetadataFieldInput>;
  hasTempoTempos?: InputMaybe<SampleHasTempoTemposFieldInput>;
  patientsHasSample?: InputMaybe<SamplePatientsHasSampleFieldInput>;
  requestsHasSample?: InputMaybe<SampleRequestsHasSampleFieldInput>;
  revisable?: InputMaybe<Scalars["Boolean"]["input"]>;
  sampleAliasesIsAlias?: InputMaybe<SampleSampleAliasesIsAliasFieldInput>;
  sampleCategory: Scalars["String"]["input"];
  sampleClass?: InputMaybe<Scalars["String"]["input"]>;
  smileSampleId: Scalars["String"]["input"];
};

export type SampleDbGapHasDbgapDbGapsAggregationSelection = {
  __typename?: "SampleDbGapHasDbgapDbGapsAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<SampleDbGapHasDbgapDbGapsNodeAggregateSelection>;
};

export type SampleDbGapHasDbgapDbGapsNodeAggregateSelection = {
  __typename?: "SampleDbGapHasDbgapDbGapsNodeAggregateSelection";
  dbGapStudy: StringAggregateSelection;
  smileDbGapId: StringAggregateSelection;
};

export type SampleDeleteInput = {
  cohortsHasCohortSample?: InputMaybe<
    Array<SampleCohortsHasCohortSampleDeleteFieldInput>
  >;
  hasDbgapDbGaps?: InputMaybe<Array<SampleHasDbgapDbGapsDeleteFieldInput>>;
  hasMetadataSampleMetadata?: InputMaybe<
    Array<SampleHasMetadataSampleMetadataDeleteFieldInput>
  >;
  hasTempoTempos?: InputMaybe<Array<SampleHasTempoTemposDeleteFieldInput>>;
  patientsHasSample?: InputMaybe<
    Array<SamplePatientsHasSampleDeleteFieldInput>
  >;
  requestsHasSample?: InputMaybe<
    Array<SampleRequestsHasSampleDeleteFieldInput>
  >;
  sampleAliasesIsAlias?: InputMaybe<
    Array<SampleSampleAliasesIsAliasDeleteFieldInput>
  >;
};

export type SampleDisconnectInput = {
  cohortsHasCohortSample?: InputMaybe<
    Array<SampleCohortsHasCohortSampleDisconnectFieldInput>
  >;
  hasDbgapDbGaps?: InputMaybe<Array<SampleHasDbgapDbGapsDisconnectFieldInput>>;
  hasMetadataSampleMetadata?: InputMaybe<
    Array<SampleHasMetadataSampleMetadataDisconnectFieldInput>
  >;
  hasTempoTempos?: InputMaybe<Array<SampleHasTempoTemposDisconnectFieldInput>>;
  patientsHasSample?: InputMaybe<
    Array<SamplePatientsHasSampleDisconnectFieldInput>
  >;
  requestsHasSample?: InputMaybe<
    Array<SampleRequestsHasSampleDisconnectFieldInput>
  >;
  sampleAliasesIsAlias?: InputMaybe<
    Array<SampleSampleAliasesIsAliasDisconnectFieldInput>
  >;
};

export type SampleEdge = {
  __typename?: "SampleEdge";
  cursor: Scalars["String"]["output"];
  node: Sample;
};

export type SampleHasDbgapDbGapsAggregateInput = {
  AND?: InputMaybe<Array<SampleHasDbgapDbGapsAggregateInput>>;
  NOT?: InputMaybe<SampleHasDbgapDbGapsAggregateInput>;
  OR?: InputMaybe<Array<SampleHasDbgapDbGapsAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  node?: InputMaybe<SampleHasDbgapDbGapsNodeAggregationWhereInput>;
};

export type SampleHasDbgapDbGapsConnectFieldInput = {
  connect?: InputMaybe<Array<DbGapConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  where?: InputMaybe<DbGapConnectWhere>;
};

export type SampleHasDbgapDbGapsConnection = {
  __typename?: "SampleHasDbgapDbGapsConnection";
  edges: Array<SampleHasDbgapDbGapsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type SampleHasDbgapDbGapsConnectionSort = {
  node?: InputMaybe<DbGapSort>;
};

export type SampleHasDbgapDbGapsConnectionWhere = {
  AND?: InputMaybe<Array<SampleHasDbgapDbGapsConnectionWhere>>;
  NOT?: InputMaybe<SampleHasDbgapDbGapsConnectionWhere>;
  OR?: InputMaybe<Array<SampleHasDbgapDbGapsConnectionWhere>>;
  node?: InputMaybe<DbGapWhere>;
};

export type SampleHasDbgapDbGapsCreateFieldInput = {
  node: DbGapCreateInput;
};

export type SampleHasDbgapDbGapsDeleteFieldInput = {
  delete?: InputMaybe<DbGapDeleteInput>;
  where?: InputMaybe<SampleHasDbgapDbGapsConnectionWhere>;
};

export type SampleHasDbgapDbGapsDisconnectFieldInput = {
  disconnect?: InputMaybe<DbGapDisconnectInput>;
  where?: InputMaybe<SampleHasDbgapDbGapsConnectionWhere>;
};

export type SampleHasDbgapDbGapsFieldInput = {
  connect?: InputMaybe<Array<SampleHasDbgapDbGapsConnectFieldInput>>;
  create?: InputMaybe<Array<SampleHasDbgapDbGapsCreateFieldInput>>;
};

export type SampleHasDbgapDbGapsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<SampleHasDbgapDbGapsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<SampleHasDbgapDbGapsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<SampleHasDbgapDbGapsNodeAggregationWhereInput>>;
  dbGapStudy_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  dbGapStudy_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  dbGapStudy_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  dbGapStudy_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  dbGapStudy_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  dbGapStudy_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  dbGapStudy_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  dbGapStudy_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  dbGapStudy_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  dbGapStudy_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  dbGapStudy_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  dbGapStudy_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  dbGapStudy_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  dbGapStudy_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  dbGapStudy_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  smileDbGapId_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  smileDbGapId_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  smileDbGapId_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  smileDbGapId_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  smileDbGapId_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  smileDbGapId_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  smileDbGapId_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  smileDbGapId_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  smileDbGapId_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  smileDbGapId_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  smileDbGapId_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  smileDbGapId_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  smileDbGapId_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  smileDbGapId_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  smileDbGapId_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type SampleHasDbgapDbGapsRelationship = {
  __typename?: "SampleHasDbgapDbGapsRelationship";
  cursor: Scalars["String"]["output"];
  node: DbGap;
};

export type SampleHasDbgapDbGapsUpdateConnectionInput = {
  node?: InputMaybe<DbGapUpdateInput>;
};

export type SampleHasDbgapDbGapsUpdateFieldInput = {
  connect?: InputMaybe<Array<SampleHasDbgapDbGapsConnectFieldInput>>;
  create?: InputMaybe<Array<SampleHasDbgapDbGapsCreateFieldInput>>;
  delete?: InputMaybe<Array<SampleHasDbgapDbGapsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<SampleHasDbgapDbGapsDisconnectFieldInput>>;
  update?: InputMaybe<SampleHasDbgapDbGapsUpdateConnectionInput>;
  where?: InputMaybe<SampleHasDbgapDbGapsConnectionWhere>;
};

export type SampleHasMetadataSampleMetadataAggregateInput = {
  AND?: InputMaybe<Array<SampleHasMetadataSampleMetadataAggregateInput>>;
  NOT?: InputMaybe<SampleHasMetadataSampleMetadataAggregateInput>;
  OR?: InputMaybe<Array<SampleHasMetadataSampleMetadataAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  node?: InputMaybe<SampleHasMetadataSampleMetadataNodeAggregationWhereInput>;
};

export type SampleHasMetadataSampleMetadataConnectFieldInput = {
  connect?: InputMaybe<Array<SampleMetadataConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  where?: InputMaybe<SampleMetadataConnectWhere>;
};

export type SampleHasMetadataSampleMetadataConnection = {
  __typename?: "SampleHasMetadataSampleMetadataConnection";
  edges: Array<SampleHasMetadataSampleMetadataRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type SampleHasMetadataSampleMetadataConnectionSort = {
  node?: InputMaybe<SampleMetadataSort>;
};

export type SampleHasMetadataSampleMetadataConnectionWhere = {
  AND?: InputMaybe<Array<SampleHasMetadataSampleMetadataConnectionWhere>>;
  NOT?: InputMaybe<SampleHasMetadataSampleMetadataConnectionWhere>;
  OR?: InputMaybe<Array<SampleHasMetadataSampleMetadataConnectionWhere>>;
  node?: InputMaybe<SampleMetadataWhere>;
};

export type SampleHasMetadataSampleMetadataCreateFieldInput = {
  node: SampleMetadataCreateInput;
};

export type SampleHasMetadataSampleMetadataDeleteFieldInput = {
  delete?: InputMaybe<SampleMetadataDeleteInput>;
  where?: InputMaybe<SampleHasMetadataSampleMetadataConnectionWhere>;
};

export type SampleHasMetadataSampleMetadataDisconnectFieldInput = {
  disconnect?: InputMaybe<SampleMetadataDisconnectInput>;
  where?: InputMaybe<SampleHasMetadataSampleMetadataConnectionWhere>;
};

export type SampleHasMetadataSampleMetadataFieldInput = {
  connect?: InputMaybe<Array<SampleHasMetadataSampleMetadataConnectFieldInput>>;
  create?: InputMaybe<Array<SampleHasMetadataSampleMetadataCreateFieldInput>>;
};

export type SampleHasMetadataSampleMetadataNodeAggregationWhereInput = {
  AND?: InputMaybe<
    Array<SampleHasMetadataSampleMetadataNodeAggregationWhereInput>
  >;
  NOT?: InputMaybe<SampleHasMetadataSampleMetadataNodeAggregationWhereInput>;
  OR?: InputMaybe<
    Array<SampleHasMetadataSampleMetadataNodeAggregationWhereInput>
  >;
  additionalProperties_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars["Float"]["input"]
  >;
  additionalProperties_AVERAGE_LENGTH_GT?: InputMaybe<
    Scalars["Float"]["input"]
  >;
  additionalProperties_AVERAGE_LENGTH_GTE?: InputMaybe<
    Scalars["Float"]["input"]
  >;
  additionalProperties_AVERAGE_LENGTH_LT?: InputMaybe<
    Scalars["Float"]["input"]
  >;
  additionalProperties_AVERAGE_LENGTH_LTE?: InputMaybe<
    Scalars["Float"]["input"]
  >;
  additionalProperties_LONGEST_LENGTH_EQUAL?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  additionalProperties_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  additionalProperties_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  additionalProperties_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  additionalProperties_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  additionalProperties_SHORTEST_LENGTH_EQUAL?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  additionalProperties_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  additionalProperties_SHORTEST_LENGTH_GTE?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  additionalProperties_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  additionalProperties_SHORTEST_LENGTH_LTE?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  baitSet_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  baitSet_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  baitSet_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  baitSet_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  baitSet_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  baitSet_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  baitSet_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  baitSet_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  baitSet_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  baitSet_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  baitSet_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  baitSet_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  baitSet_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  baitSet_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  baitSet_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  cfDNA2dBarcode_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  cfDNA2dBarcode_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  cfDNA2dBarcode_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  cfDNA2dBarcode_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  cfDNA2dBarcode_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  cfDNA2dBarcode_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  cfDNA2dBarcode_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  cfDNA2dBarcode_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  cfDNA2dBarcode_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  cfDNA2dBarcode_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  cfDNA2dBarcode_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  cfDNA2dBarcode_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  cfDNA2dBarcode_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  cfDNA2dBarcode_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  cfDNA2dBarcode_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  cmoInfoIgoId_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  cmoInfoIgoId_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  cmoInfoIgoId_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  cmoInfoIgoId_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  cmoInfoIgoId_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  cmoInfoIgoId_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  cmoInfoIgoId_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  cmoInfoIgoId_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  cmoInfoIgoId_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  cmoInfoIgoId_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  cmoInfoIgoId_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  cmoInfoIgoId_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  cmoInfoIgoId_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  cmoInfoIgoId_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  cmoInfoIgoId_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  cmoPatientId_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  cmoPatientId_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  cmoPatientId_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  cmoPatientId_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  cmoPatientId_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  cmoPatientId_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  cmoPatientId_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  cmoPatientId_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  cmoPatientId_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  cmoPatientId_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  cmoPatientId_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  cmoPatientId_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  cmoPatientId_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  cmoPatientId_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  cmoPatientId_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  cmoSampleIdFields_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars["Float"]["input"]
  >;
  cmoSampleIdFields_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  cmoSampleIdFields_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  cmoSampleIdFields_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  cmoSampleIdFields_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  cmoSampleIdFields_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  cmoSampleIdFields_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  cmoSampleIdFields_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  cmoSampleIdFields_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  cmoSampleIdFields_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  cmoSampleIdFields_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  cmoSampleIdFields_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  cmoSampleIdFields_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  cmoSampleIdFields_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  cmoSampleIdFields_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  cmoSampleName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  cmoSampleName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  cmoSampleName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  cmoSampleName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  cmoSampleName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  cmoSampleName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  cmoSampleName_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  cmoSampleName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  cmoSampleName_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  cmoSampleName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  cmoSampleName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  cmoSampleName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  cmoSampleName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  cmoSampleName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  cmoSampleName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  collectionYear_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  collectionYear_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  collectionYear_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  collectionYear_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  collectionYear_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  collectionYear_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  collectionYear_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  collectionYear_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  collectionYear_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  collectionYear_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  collectionYear_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  collectionYear_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  collectionYear_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  collectionYear_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  collectionYear_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  genePanel_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  genePanel_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  genePanel_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  genePanel_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  genePanel_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  genePanel_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  genePanel_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  genePanel_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  genePanel_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  genePanel_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  genePanel_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  genePanel_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  genePanel_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  genePanel_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  genePanel_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  igoRequestId_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  igoRequestId_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  igoRequestId_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  igoRequestId_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  igoRequestId_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  igoRequestId_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  igoRequestId_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  igoRequestId_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  igoRequestId_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  igoRequestId_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  igoRequestId_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  igoRequestId_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  igoRequestId_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  igoRequestId_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  igoRequestId_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  importDate_AVERAGE_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_AVERAGE_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_AVERAGE_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_AVERAGE_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_AVERAGE_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_MAX_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_MAX_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_MAX_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_MAX_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_MAX_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_MIN_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_MIN_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_MIN_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_MIN_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_MIN_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_SUM_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_SUM_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_SUM_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_SUM_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_SUM_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  investigatorSampleId_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars["Float"]["input"]
  >;
  investigatorSampleId_AVERAGE_LENGTH_GT?: InputMaybe<
    Scalars["Float"]["input"]
  >;
  investigatorSampleId_AVERAGE_LENGTH_GTE?: InputMaybe<
    Scalars["Float"]["input"]
  >;
  investigatorSampleId_AVERAGE_LENGTH_LT?: InputMaybe<
    Scalars["Float"]["input"]
  >;
  investigatorSampleId_AVERAGE_LENGTH_LTE?: InputMaybe<
    Scalars["Float"]["input"]
  >;
  investigatorSampleId_LONGEST_LENGTH_EQUAL?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  investigatorSampleId_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  investigatorSampleId_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  investigatorSampleId_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  investigatorSampleId_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  investigatorSampleId_SHORTEST_LENGTH_EQUAL?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  investigatorSampleId_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  investigatorSampleId_SHORTEST_LENGTH_GTE?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  investigatorSampleId_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  investigatorSampleId_SHORTEST_LENGTH_LTE?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  libraries_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  libraries_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  libraries_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  libraries_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  libraries_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  libraries_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  libraries_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  libraries_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  libraries_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  libraries_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  libraries_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  libraries_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  libraries_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  libraries_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  libraries_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  oncotreeCode_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  oncotreeCode_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  oncotreeCode_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  oncotreeCode_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  oncotreeCode_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  oncotreeCode_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  oncotreeCode_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  oncotreeCode_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  oncotreeCode_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  oncotreeCode_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  oncotreeCode_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  oncotreeCode_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  oncotreeCode_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  oncotreeCode_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  oncotreeCode_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  preservation_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  preservation_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  preservation_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  preservation_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  preservation_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  preservation_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  preservation_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  preservation_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  preservation_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  preservation_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  preservation_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  preservation_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  preservation_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  preservation_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  preservation_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  primaryId_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  primaryId_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  primaryId_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  primaryId_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  primaryId_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  primaryId_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  primaryId_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  primaryId_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  primaryId_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  primaryId_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  primaryId_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  primaryId_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  primaryId_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  primaryId_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  primaryId_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  qcReports_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  qcReports_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  qcReports_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  qcReports_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  qcReports_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  qcReports_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  qcReports_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  qcReports_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  qcReports_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  qcReports_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  qcReports_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  qcReports_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  qcReports_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  qcReports_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  qcReports_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  sampleClass_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  sampleClass_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  sampleClass_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  sampleClass_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  sampleClass_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  sampleName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  sampleName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  sampleName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  sampleName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  sampleName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  sampleName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  sampleName_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  sampleName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  sampleName_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  sampleName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  sampleName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  sampleName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  sampleName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  sampleName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  sampleName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  sampleOrigin_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  sampleOrigin_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  sampleOrigin_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  sampleOrigin_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  sampleOrigin_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  sampleOrigin_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  sampleOrigin_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  sampleOrigin_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  sampleOrigin_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  sampleOrigin_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  sampleOrigin_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  sampleOrigin_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  sampleOrigin_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  sampleOrigin_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  sampleOrigin_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  sampleType_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  sampleType_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  sampleType_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  sampleType_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  sampleType_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  sampleType_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  sampleType_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  sampleType_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  sampleType_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  sampleType_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  sampleType_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  sampleType_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  sampleType_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  sampleType_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  sampleType_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  sex_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  sex_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  sex_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  sex_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  sex_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  sex_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  sex_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  sex_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  sex_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  sex_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  sex_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  sex_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  sex_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  sex_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  sex_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  species_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  species_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  species_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  species_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  species_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  species_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  species_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  species_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  species_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  species_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  species_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  species_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  species_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  species_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  species_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  tissueLocation_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  tissueLocation_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  tissueLocation_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  tissueLocation_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  tissueLocation_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  tissueLocation_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  tissueLocation_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  tissueLocation_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  tissueLocation_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  tissueLocation_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  tissueLocation_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  tissueLocation_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  tissueLocation_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  tissueLocation_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  tissueLocation_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  tubeId_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  tubeId_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  tubeId_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  tubeId_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  tubeId_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  tubeId_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  tubeId_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  tubeId_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  tubeId_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  tubeId_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  tubeId_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  tubeId_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  tubeId_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  tubeId_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  tubeId_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  tumorOrNormal_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  tumorOrNormal_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  tumorOrNormal_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  tumorOrNormal_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  tumorOrNormal_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  tumorOrNormal_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  tumorOrNormal_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  tumorOrNormal_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  tumorOrNormal_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  tumorOrNormal_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  tumorOrNormal_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  tumorOrNormal_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  tumorOrNormal_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  tumorOrNormal_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  tumorOrNormal_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type SampleHasMetadataSampleMetadataRelationship = {
  __typename?: "SampleHasMetadataSampleMetadataRelationship";
  cursor: Scalars["String"]["output"];
  node: SampleMetadata;
};

export type SampleHasMetadataSampleMetadataUpdateConnectionInput = {
  node?: InputMaybe<SampleMetadataUpdateInput>;
};

export type SampleHasMetadataSampleMetadataUpdateFieldInput = {
  connect?: InputMaybe<Array<SampleHasMetadataSampleMetadataConnectFieldInput>>;
  create?: InputMaybe<Array<SampleHasMetadataSampleMetadataCreateFieldInput>>;
  delete?: InputMaybe<Array<SampleHasMetadataSampleMetadataDeleteFieldInput>>;
  disconnect?: InputMaybe<
    Array<SampleHasMetadataSampleMetadataDisconnectFieldInput>
  >;
  update?: InputMaybe<SampleHasMetadataSampleMetadataUpdateConnectionInput>;
  where?: InputMaybe<SampleHasMetadataSampleMetadataConnectionWhere>;
};

export type SampleHasTempoTemposAggregateInput = {
  AND?: InputMaybe<Array<SampleHasTempoTemposAggregateInput>>;
  NOT?: InputMaybe<SampleHasTempoTemposAggregateInput>;
  OR?: InputMaybe<Array<SampleHasTempoTemposAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  node?: InputMaybe<SampleHasTempoTemposNodeAggregationWhereInput>;
};

export type SampleHasTempoTemposConnectFieldInput = {
  connect?: InputMaybe<Array<TempoConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  where?: InputMaybe<TempoConnectWhere>;
};

export type SampleHasTempoTemposConnection = {
  __typename?: "SampleHasTempoTemposConnection";
  edges: Array<SampleHasTempoTemposRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type SampleHasTempoTemposConnectionSort = {
  node?: InputMaybe<TempoSort>;
};

export type SampleHasTempoTemposConnectionWhere = {
  AND?: InputMaybe<Array<SampleHasTempoTemposConnectionWhere>>;
  NOT?: InputMaybe<SampleHasTempoTemposConnectionWhere>;
  OR?: InputMaybe<Array<SampleHasTempoTemposConnectionWhere>>;
  node?: InputMaybe<TempoWhere>;
};

export type SampleHasTempoTemposCreateFieldInput = {
  node: TempoCreateInput;
};

export type SampleHasTempoTemposDeleteFieldInput = {
  delete?: InputMaybe<TempoDeleteInput>;
  where?: InputMaybe<SampleHasTempoTemposConnectionWhere>;
};

export type SampleHasTempoTemposDisconnectFieldInput = {
  disconnect?: InputMaybe<TempoDisconnectInput>;
  where?: InputMaybe<SampleHasTempoTemposConnectionWhere>;
};

export type SampleHasTempoTemposFieldInput = {
  connect?: InputMaybe<Array<SampleHasTempoTemposConnectFieldInput>>;
  create?: InputMaybe<Array<SampleHasTempoTemposCreateFieldInput>>;
};

export type SampleHasTempoTemposNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<SampleHasTempoTemposNodeAggregationWhereInput>>;
  NOT?: InputMaybe<SampleHasTempoTemposNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<SampleHasTempoTemposNodeAggregationWhereInput>>;
  accessLevel_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  accessLevel_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  accessLevel_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  accessLevel_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  accessLevel_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  accessLevel_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  accessLevel_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  accessLevel_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  accessLevel_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  accessLevel_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  accessLevel_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  accessLevel_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  accessLevel_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  accessLevel_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  accessLevel_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  billedBy_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  billedBy_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  billedBy_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  billedBy_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  billedBy_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  billedBy_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  billedBy_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  billedBy_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  billedBy_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  billedBy_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  billedBy_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  billedBy_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  billedBy_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  billedBy_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  billedBy_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  costCenter_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  costCenter_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  costCenter_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  costCenter_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  costCenter_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  costCenter_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  costCenter_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  costCenter_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  costCenter_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  costCenter_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  costCenter_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  costCenter_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  costCenter_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  costCenter_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  costCenter_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  custodianInformation_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars["Float"]["input"]
  >;
  custodianInformation_AVERAGE_LENGTH_GT?: InputMaybe<
    Scalars["Float"]["input"]
  >;
  custodianInformation_AVERAGE_LENGTH_GTE?: InputMaybe<
    Scalars["Float"]["input"]
  >;
  custodianInformation_AVERAGE_LENGTH_LT?: InputMaybe<
    Scalars["Float"]["input"]
  >;
  custodianInformation_AVERAGE_LENGTH_LTE?: InputMaybe<
    Scalars["Float"]["input"]
  >;
  custodianInformation_LONGEST_LENGTH_EQUAL?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  custodianInformation_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  custodianInformation_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  custodianInformation_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  custodianInformation_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  custodianInformation_SHORTEST_LENGTH_EQUAL?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  custodianInformation_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  custodianInformation_SHORTEST_LENGTH_GTE?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  custodianInformation_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  custodianInformation_SHORTEST_LENGTH_LTE?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  embargoDate_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  embargoDate_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  embargoDate_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  embargoDate_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  embargoDate_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  embargoDate_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  embargoDate_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  embargoDate_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  embargoDate_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  embargoDate_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  embargoDate_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  embargoDate_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  embargoDate_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  embargoDate_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  embargoDate_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  initialPipelineRunDate_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars["Float"]["input"]
  >;
  initialPipelineRunDate_AVERAGE_LENGTH_GT?: InputMaybe<
    Scalars["Float"]["input"]
  >;
  initialPipelineRunDate_AVERAGE_LENGTH_GTE?: InputMaybe<
    Scalars["Float"]["input"]
  >;
  initialPipelineRunDate_AVERAGE_LENGTH_LT?: InputMaybe<
    Scalars["Float"]["input"]
  >;
  initialPipelineRunDate_AVERAGE_LENGTH_LTE?: InputMaybe<
    Scalars["Float"]["input"]
  >;
  initialPipelineRunDate_LONGEST_LENGTH_EQUAL?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  initialPipelineRunDate_LONGEST_LENGTH_GT?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  initialPipelineRunDate_LONGEST_LENGTH_GTE?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  initialPipelineRunDate_LONGEST_LENGTH_LT?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  initialPipelineRunDate_LONGEST_LENGTH_LTE?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  initialPipelineRunDate_SHORTEST_LENGTH_EQUAL?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  initialPipelineRunDate_SHORTEST_LENGTH_GT?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  initialPipelineRunDate_SHORTEST_LENGTH_GTE?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  initialPipelineRunDate_SHORTEST_LENGTH_LT?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  initialPipelineRunDate_SHORTEST_LENGTH_LTE?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  smileTempoId_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  smileTempoId_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  smileTempoId_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  smileTempoId_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  smileTempoId_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  smileTempoId_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  smileTempoId_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  smileTempoId_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  smileTempoId_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  smileTempoId_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  smileTempoId_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  smileTempoId_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  smileTempoId_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  smileTempoId_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  smileTempoId_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type SampleHasTempoTemposRelationship = {
  __typename?: "SampleHasTempoTemposRelationship";
  cursor: Scalars["String"]["output"];
  node: Tempo;
};

export type SampleHasTempoTemposUpdateConnectionInput = {
  node?: InputMaybe<TempoUpdateInput>;
};

export type SampleHasTempoTemposUpdateFieldInput = {
  connect?: InputMaybe<Array<SampleHasTempoTemposConnectFieldInput>>;
  create?: InputMaybe<Array<SampleHasTempoTemposCreateFieldInput>>;
  delete?: InputMaybe<Array<SampleHasTempoTemposDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<SampleHasTempoTemposDisconnectFieldInput>>;
  update?: InputMaybe<SampleHasTempoTemposUpdateConnectionInput>;
  where?: InputMaybe<SampleHasTempoTemposConnectionWhere>;
};

export type SampleMetadata = {
  __typename?: "SampleMetadata";
  additionalProperties: Scalars["String"]["output"];
  baitSet?: Maybe<Scalars["String"]["output"]>;
  cfDNA2dBarcode?: Maybe<Scalars["String"]["output"]>;
  cmoInfoIgoId?: Maybe<Scalars["String"]["output"]>;
  cmoPatientId?: Maybe<Scalars["String"]["output"]>;
  cmoSampleIdFields: Scalars["String"]["output"];
  cmoSampleName?: Maybe<Scalars["String"]["output"]>;
  collectionYear?: Maybe<Scalars["String"]["output"]>;
  genePanel: Scalars["String"]["output"];
  hasStatusStatuses: Array<Status>;
  hasStatusStatusesAggregate?: Maybe<SampleMetadataStatusHasStatusStatusesAggregationSelection>;
  hasStatusStatusesConnection: SampleMetadataHasStatusStatusesConnection;
  igoComplete?: Maybe<Scalars["Boolean"]["output"]>;
  igoRequestId?: Maybe<Scalars["String"]["output"]>;
  importDate: Scalars["BigInt"]["output"];
  investigatorSampleId?: Maybe<Scalars["String"]["output"]>;
  libraries: Scalars["String"]["output"];
  oncotreeCode?: Maybe<Scalars["String"]["output"]>;
  preservation?: Maybe<Scalars["String"]["output"]>;
  primaryId: Scalars["String"]["output"];
  qcReports: Scalars["String"]["output"];
  sampleClass?: Maybe<Scalars["String"]["output"]>;
  sampleName?: Maybe<Scalars["String"]["output"]>;
  sampleOrigin?: Maybe<Scalars["String"]["output"]>;
  sampleType?: Maybe<Scalars["String"]["output"]>;
  samplesHasMetadata: Array<Sample>;
  samplesHasMetadataAggregate?: Maybe<SampleMetadataSampleSamplesHasMetadataAggregationSelection>;
  samplesHasMetadataConnection: SampleMetadataSamplesHasMetadataConnection;
  sex?: Maybe<Scalars["String"]["output"]>;
  species?: Maybe<Scalars["String"]["output"]>;
  tissueLocation?: Maybe<Scalars["String"]["output"]>;
  tubeId?: Maybe<Scalars["String"]["output"]>;
  tumorOrNormal?: Maybe<Scalars["String"]["output"]>;
};

export type SampleMetadataHasStatusStatusesArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  options?: InputMaybe<StatusOptions>;
  where?: InputMaybe<StatusWhere>;
};

export type SampleMetadataHasStatusStatusesAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<StatusWhere>;
};

export type SampleMetadataHasStatusStatusesConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<SampleMetadataHasStatusStatusesConnectionSort>>;
  where?: InputMaybe<SampleMetadataHasStatusStatusesConnectionWhere>;
};

export type SampleMetadataSamplesHasMetadataArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  options?: InputMaybe<SampleOptions>;
  where?: InputMaybe<SampleWhere>;
};

export type SampleMetadataSamplesHasMetadataAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<SampleWhere>;
};

export type SampleMetadataSamplesHasMetadataConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<SampleMetadataSamplesHasMetadataConnectionSort>>;
  where?: InputMaybe<SampleMetadataSamplesHasMetadataConnectionWhere>;
};

export type SampleMetadataAggregateSelection = {
  __typename?: "SampleMetadataAggregateSelection";
  additionalProperties: StringAggregateSelection;
  baitSet: StringAggregateSelection;
  cfDNA2dBarcode: StringAggregateSelection;
  cmoInfoIgoId: StringAggregateSelection;
  cmoPatientId: StringAggregateSelection;
  cmoSampleIdFields: StringAggregateSelection;
  cmoSampleName: StringAggregateSelection;
  collectionYear: StringAggregateSelection;
  count: Scalars["Int"]["output"];
  genePanel: StringAggregateSelection;
  igoRequestId: StringAggregateSelection;
  importDate: BigIntAggregateSelection;
  investigatorSampleId: StringAggregateSelection;
  libraries: StringAggregateSelection;
  oncotreeCode: StringAggregateSelection;
  preservation: StringAggregateSelection;
  primaryId: StringAggregateSelection;
  qcReports: StringAggregateSelection;
  sampleClass: StringAggregateSelection;
  sampleName: StringAggregateSelection;
  sampleOrigin: StringAggregateSelection;
  sampleType: StringAggregateSelection;
  sex: StringAggregateSelection;
  species: StringAggregateSelection;
  tissueLocation: StringAggregateSelection;
  tubeId: StringAggregateSelection;
  tumorOrNormal: StringAggregateSelection;
};

export type SampleMetadataConnectInput = {
  hasStatusStatuses?: InputMaybe<
    Array<SampleMetadataHasStatusStatusesConnectFieldInput>
  >;
  samplesHasMetadata?: InputMaybe<
    Array<SampleMetadataSamplesHasMetadataConnectFieldInput>
  >;
};

export type SampleMetadataConnectWhere = {
  node: SampleMetadataWhere;
};

export type SampleMetadataConnection = {
  __typename?: "SampleMetadataConnection";
  edges: Array<SampleMetadataEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type SampleMetadataCreateInput = {
  additionalProperties: Scalars["String"]["input"];
  baitSet?: InputMaybe<Scalars["String"]["input"]>;
  cfDNA2dBarcode?: InputMaybe<Scalars["String"]["input"]>;
  cmoInfoIgoId?: InputMaybe<Scalars["String"]["input"]>;
  cmoPatientId?: InputMaybe<Scalars["String"]["input"]>;
  cmoSampleIdFields: Scalars["String"]["input"];
  cmoSampleName?: InputMaybe<Scalars["String"]["input"]>;
  collectionYear?: InputMaybe<Scalars["String"]["input"]>;
  genePanel: Scalars["String"]["input"];
  hasStatusStatuses?: InputMaybe<SampleMetadataHasStatusStatusesFieldInput>;
  igoComplete?: InputMaybe<Scalars["Boolean"]["input"]>;
  igoRequestId?: InputMaybe<Scalars["String"]["input"]>;
  importDate: Scalars["BigInt"]["input"];
  investigatorSampleId?: InputMaybe<Scalars["String"]["input"]>;
  libraries: Scalars["String"]["input"];
  oncotreeCode?: InputMaybe<Scalars["String"]["input"]>;
  preservation?: InputMaybe<Scalars["String"]["input"]>;
  primaryId: Scalars["String"]["input"];
  qcReports: Scalars["String"]["input"];
  sampleClass?: InputMaybe<Scalars["String"]["input"]>;
  sampleName?: InputMaybe<Scalars["String"]["input"]>;
  sampleOrigin?: InputMaybe<Scalars["String"]["input"]>;
  sampleType?: InputMaybe<Scalars["String"]["input"]>;
  samplesHasMetadata?: InputMaybe<SampleMetadataSamplesHasMetadataFieldInput>;
  sex?: InputMaybe<Scalars["String"]["input"]>;
  species?: InputMaybe<Scalars["String"]["input"]>;
  tissueLocation?: InputMaybe<Scalars["String"]["input"]>;
  tubeId?: InputMaybe<Scalars["String"]["input"]>;
  tumorOrNormal?: InputMaybe<Scalars["String"]["input"]>;
};

export type SampleMetadataDeleteInput = {
  hasStatusStatuses?: InputMaybe<
    Array<SampleMetadataHasStatusStatusesDeleteFieldInput>
  >;
  samplesHasMetadata?: InputMaybe<
    Array<SampleMetadataSamplesHasMetadataDeleteFieldInput>
  >;
};

export type SampleMetadataDisconnectInput = {
  hasStatusStatuses?: InputMaybe<
    Array<SampleMetadataHasStatusStatusesDisconnectFieldInput>
  >;
  samplesHasMetadata?: InputMaybe<
    Array<SampleMetadataSamplesHasMetadataDisconnectFieldInput>
  >;
};

export type SampleMetadataEdge = {
  __typename?: "SampleMetadataEdge";
  cursor: Scalars["String"]["output"];
  node: SampleMetadata;
};

export type SampleMetadataHasStatusStatusesAggregateInput = {
  AND?: InputMaybe<Array<SampleMetadataHasStatusStatusesAggregateInput>>;
  NOT?: InputMaybe<SampleMetadataHasStatusStatusesAggregateInput>;
  OR?: InputMaybe<Array<SampleMetadataHasStatusStatusesAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  node?: InputMaybe<SampleMetadataHasStatusStatusesNodeAggregationWhereInput>;
};

export type SampleMetadataHasStatusStatusesConnectFieldInput = {
  connect?: InputMaybe<Array<StatusConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  where?: InputMaybe<StatusConnectWhere>;
};

export type SampleMetadataHasStatusStatusesConnection = {
  __typename?: "SampleMetadataHasStatusStatusesConnection";
  edges: Array<SampleMetadataHasStatusStatusesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type SampleMetadataHasStatusStatusesConnectionSort = {
  node?: InputMaybe<StatusSort>;
};

export type SampleMetadataHasStatusStatusesConnectionWhere = {
  AND?: InputMaybe<Array<SampleMetadataHasStatusStatusesConnectionWhere>>;
  NOT?: InputMaybe<SampleMetadataHasStatusStatusesConnectionWhere>;
  OR?: InputMaybe<Array<SampleMetadataHasStatusStatusesConnectionWhere>>;
  node?: InputMaybe<StatusWhere>;
};

export type SampleMetadataHasStatusStatusesCreateFieldInput = {
  node: StatusCreateInput;
};

export type SampleMetadataHasStatusStatusesDeleteFieldInput = {
  delete?: InputMaybe<StatusDeleteInput>;
  where?: InputMaybe<SampleMetadataHasStatusStatusesConnectionWhere>;
};

export type SampleMetadataHasStatusStatusesDisconnectFieldInput = {
  disconnect?: InputMaybe<StatusDisconnectInput>;
  where?: InputMaybe<SampleMetadataHasStatusStatusesConnectionWhere>;
};

export type SampleMetadataHasStatusStatusesFieldInput = {
  connect?: InputMaybe<Array<SampleMetadataHasStatusStatusesConnectFieldInput>>;
  create?: InputMaybe<Array<SampleMetadataHasStatusStatusesCreateFieldInput>>;
};

export type SampleMetadataHasStatusStatusesNodeAggregationWhereInput = {
  AND?: InputMaybe<
    Array<SampleMetadataHasStatusStatusesNodeAggregationWhereInput>
  >;
  NOT?: InputMaybe<SampleMetadataHasStatusStatusesNodeAggregationWhereInput>;
  OR?: InputMaybe<
    Array<SampleMetadataHasStatusStatusesNodeAggregationWhereInput>
  >;
  validationReport_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  validationReport_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  validationReport_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  validationReport_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  validationReport_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  validationReport_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  validationReport_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  validationReport_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  validationReport_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  validationReport_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  validationReport_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  validationReport_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  validationReport_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  validationReport_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  validationReport_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type SampleMetadataHasStatusStatusesRelationship = {
  __typename?: "SampleMetadataHasStatusStatusesRelationship";
  cursor: Scalars["String"]["output"];
  node: Status;
};

export type SampleMetadataHasStatusStatusesUpdateConnectionInput = {
  node?: InputMaybe<StatusUpdateInput>;
};

export type SampleMetadataHasStatusStatusesUpdateFieldInput = {
  connect?: InputMaybe<Array<SampleMetadataHasStatusStatusesConnectFieldInput>>;
  create?: InputMaybe<Array<SampleMetadataHasStatusStatusesCreateFieldInput>>;
  delete?: InputMaybe<Array<SampleMetadataHasStatusStatusesDeleteFieldInput>>;
  disconnect?: InputMaybe<
    Array<SampleMetadataHasStatusStatusesDisconnectFieldInput>
  >;
  update?: InputMaybe<SampleMetadataHasStatusStatusesUpdateConnectionInput>;
  where?: InputMaybe<SampleMetadataHasStatusStatusesConnectionWhere>;
};

export type SampleMetadataOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more SampleMetadataSort objects to sort SampleMetadata by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<SampleMetadataSort>>;
};

export type SampleMetadataRelationInput = {
  hasStatusStatuses?: InputMaybe<
    Array<SampleMetadataHasStatusStatusesCreateFieldInput>
  >;
  samplesHasMetadata?: InputMaybe<
    Array<SampleMetadataSamplesHasMetadataCreateFieldInput>
  >;
};

export type SampleMetadataSampleSamplesHasMetadataAggregationSelection = {
  __typename?: "SampleMetadataSampleSamplesHasMetadataAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<SampleMetadataSampleSamplesHasMetadataNodeAggregateSelection>;
};

export type SampleMetadataSampleSamplesHasMetadataNodeAggregateSelection = {
  __typename?: "SampleMetadataSampleSamplesHasMetadataNodeAggregateSelection";
  datasource: StringAggregateSelection;
  sampleCategory: StringAggregateSelection;
  sampleClass: StringAggregateSelection;
  smileSampleId: StringAggregateSelection;
};

export type SampleMetadataSamplesHasMetadataAggregateInput = {
  AND?: InputMaybe<Array<SampleMetadataSamplesHasMetadataAggregateInput>>;
  NOT?: InputMaybe<SampleMetadataSamplesHasMetadataAggregateInput>;
  OR?: InputMaybe<Array<SampleMetadataSamplesHasMetadataAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  node?: InputMaybe<SampleMetadataSamplesHasMetadataNodeAggregationWhereInput>;
};

export type SampleMetadataSamplesHasMetadataConnectFieldInput = {
  connect?: InputMaybe<Array<SampleConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  where?: InputMaybe<SampleConnectWhere>;
};

export type SampleMetadataSamplesHasMetadataConnection = {
  __typename?: "SampleMetadataSamplesHasMetadataConnection";
  edges: Array<SampleMetadataSamplesHasMetadataRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type SampleMetadataSamplesHasMetadataConnectionSort = {
  node?: InputMaybe<SampleSort>;
};

export type SampleMetadataSamplesHasMetadataConnectionWhere = {
  AND?: InputMaybe<Array<SampleMetadataSamplesHasMetadataConnectionWhere>>;
  NOT?: InputMaybe<SampleMetadataSamplesHasMetadataConnectionWhere>;
  OR?: InputMaybe<Array<SampleMetadataSamplesHasMetadataConnectionWhere>>;
  node?: InputMaybe<SampleWhere>;
};

export type SampleMetadataSamplesHasMetadataCreateFieldInput = {
  node: SampleCreateInput;
};

export type SampleMetadataSamplesHasMetadataDeleteFieldInput = {
  delete?: InputMaybe<SampleDeleteInput>;
  where?: InputMaybe<SampleMetadataSamplesHasMetadataConnectionWhere>;
};

export type SampleMetadataSamplesHasMetadataDisconnectFieldInput = {
  disconnect?: InputMaybe<SampleDisconnectInput>;
  where?: InputMaybe<SampleMetadataSamplesHasMetadataConnectionWhere>;
};

export type SampleMetadataSamplesHasMetadataFieldInput = {
  connect?: InputMaybe<
    Array<SampleMetadataSamplesHasMetadataConnectFieldInput>
  >;
  create?: InputMaybe<Array<SampleMetadataSamplesHasMetadataCreateFieldInput>>;
};

export type SampleMetadataSamplesHasMetadataNodeAggregationWhereInput = {
  AND?: InputMaybe<
    Array<SampleMetadataSamplesHasMetadataNodeAggregationWhereInput>
  >;
  NOT?: InputMaybe<SampleMetadataSamplesHasMetadataNodeAggregationWhereInput>;
  OR?: InputMaybe<
    Array<SampleMetadataSamplesHasMetadataNodeAggregationWhereInput>
  >;
  datasource_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  datasource_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  datasource_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  datasource_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  datasource_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  datasource_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  datasource_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  datasource_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  datasource_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  datasource_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  datasource_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  datasource_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  datasource_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  datasource_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  datasource_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  sampleCategory_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  sampleCategory_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  sampleCategory_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  sampleCategory_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  sampleCategory_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  sampleCategory_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  sampleCategory_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  sampleCategory_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  sampleCategory_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  sampleCategory_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  sampleCategory_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  sampleCategory_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  sampleCategory_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  sampleCategory_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  sampleCategory_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  sampleClass_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  sampleClass_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  sampleClass_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  sampleClass_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  sampleClass_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  smileSampleId_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  smileSampleId_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  smileSampleId_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  smileSampleId_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  smileSampleId_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  smileSampleId_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  smileSampleId_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  smileSampleId_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  smileSampleId_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  smileSampleId_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  smileSampleId_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  smileSampleId_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  smileSampleId_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  smileSampleId_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  smileSampleId_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type SampleMetadataSamplesHasMetadataRelationship = {
  __typename?: "SampleMetadataSamplesHasMetadataRelationship";
  cursor: Scalars["String"]["output"];
  node: Sample;
};

export type SampleMetadataSamplesHasMetadataUpdateConnectionInput = {
  node?: InputMaybe<SampleUpdateInput>;
};

export type SampleMetadataSamplesHasMetadataUpdateFieldInput = {
  connect?: InputMaybe<
    Array<SampleMetadataSamplesHasMetadataConnectFieldInput>
  >;
  create?: InputMaybe<Array<SampleMetadataSamplesHasMetadataCreateFieldInput>>;
  delete?: InputMaybe<Array<SampleMetadataSamplesHasMetadataDeleteFieldInput>>;
  disconnect?: InputMaybe<
    Array<SampleMetadataSamplesHasMetadataDisconnectFieldInput>
  >;
  update?: InputMaybe<SampleMetadataSamplesHasMetadataUpdateConnectionInput>;
  where?: InputMaybe<SampleMetadataSamplesHasMetadataConnectionWhere>;
};

/** Fields to sort SampleMetadata by. The order in which sorts are applied is not guaranteed when specifying many fields in one SampleMetadataSort object. */
export type SampleMetadataSort = {
  additionalProperties?: InputMaybe<SortDirection>;
  baitSet?: InputMaybe<SortDirection>;
  cfDNA2dBarcode?: InputMaybe<SortDirection>;
  cmoInfoIgoId?: InputMaybe<SortDirection>;
  cmoPatientId?: InputMaybe<SortDirection>;
  cmoSampleIdFields?: InputMaybe<SortDirection>;
  cmoSampleName?: InputMaybe<SortDirection>;
  collectionYear?: InputMaybe<SortDirection>;
  genePanel?: InputMaybe<SortDirection>;
  igoComplete?: InputMaybe<SortDirection>;
  igoRequestId?: InputMaybe<SortDirection>;
  importDate?: InputMaybe<SortDirection>;
  investigatorSampleId?: InputMaybe<SortDirection>;
  libraries?: InputMaybe<SortDirection>;
  oncotreeCode?: InputMaybe<SortDirection>;
  preservation?: InputMaybe<SortDirection>;
  primaryId?: InputMaybe<SortDirection>;
  qcReports?: InputMaybe<SortDirection>;
  sampleClass?: InputMaybe<SortDirection>;
  sampleName?: InputMaybe<SortDirection>;
  sampleOrigin?: InputMaybe<SortDirection>;
  sampleType?: InputMaybe<SortDirection>;
  sex?: InputMaybe<SortDirection>;
  species?: InputMaybe<SortDirection>;
  tissueLocation?: InputMaybe<SortDirection>;
  tubeId?: InputMaybe<SortDirection>;
  tumorOrNormal?: InputMaybe<SortDirection>;
};

export type SampleMetadataStatusHasStatusStatusesAggregationSelection = {
  __typename?: "SampleMetadataStatusHasStatusStatusesAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<SampleMetadataStatusHasStatusStatusesNodeAggregateSelection>;
};

export type SampleMetadataStatusHasStatusStatusesNodeAggregateSelection = {
  __typename?: "SampleMetadataStatusHasStatusStatusesNodeAggregateSelection";
  validationReport: StringAggregateSelection;
};

export type SampleMetadataUpdateInput = {
  additionalProperties?: InputMaybe<Scalars["String"]["input"]>;
  baitSet?: InputMaybe<Scalars["String"]["input"]>;
  cfDNA2dBarcode?: InputMaybe<Scalars["String"]["input"]>;
  cmoInfoIgoId?: InputMaybe<Scalars["String"]["input"]>;
  cmoPatientId?: InputMaybe<Scalars["String"]["input"]>;
  cmoSampleIdFields?: InputMaybe<Scalars["String"]["input"]>;
  cmoSampleName?: InputMaybe<Scalars["String"]["input"]>;
  collectionYear?: InputMaybe<Scalars["String"]["input"]>;
  genePanel?: InputMaybe<Scalars["String"]["input"]>;
  hasStatusStatuses?: InputMaybe<
    Array<SampleMetadataHasStatusStatusesUpdateFieldInput>
  >;
  igoComplete?: InputMaybe<Scalars["Boolean"]["input"]>;
  igoRequestId?: InputMaybe<Scalars["String"]["input"]>;
  importDate?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_DECREMENT?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_INCREMENT?: InputMaybe<Scalars["BigInt"]["input"]>;
  investigatorSampleId?: InputMaybe<Scalars["String"]["input"]>;
  libraries?: InputMaybe<Scalars["String"]["input"]>;
  oncotreeCode?: InputMaybe<Scalars["String"]["input"]>;
  preservation?: InputMaybe<Scalars["String"]["input"]>;
  primaryId?: InputMaybe<Scalars["String"]["input"]>;
  qcReports?: InputMaybe<Scalars["String"]["input"]>;
  sampleClass?: InputMaybe<Scalars["String"]["input"]>;
  sampleName?: InputMaybe<Scalars["String"]["input"]>;
  sampleOrigin?: InputMaybe<Scalars["String"]["input"]>;
  sampleType?: InputMaybe<Scalars["String"]["input"]>;
  samplesHasMetadata?: InputMaybe<
    Array<SampleMetadataSamplesHasMetadataUpdateFieldInput>
  >;
  sex?: InputMaybe<Scalars["String"]["input"]>;
  species?: InputMaybe<Scalars["String"]["input"]>;
  tissueLocation?: InputMaybe<Scalars["String"]["input"]>;
  tubeId?: InputMaybe<Scalars["String"]["input"]>;
  tumorOrNormal?: InputMaybe<Scalars["String"]["input"]>;
};

export type SampleMetadataWhere = {
  AND?: InputMaybe<Array<SampleMetadataWhere>>;
  NOT?: InputMaybe<SampleMetadataWhere>;
  OR?: InputMaybe<Array<SampleMetadataWhere>>;
  additionalProperties?: InputMaybe<Scalars["String"]["input"]>;
  additionalProperties_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  additionalProperties_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  additionalProperties_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  additionalProperties_MATCHES?: InputMaybe<Scalars["String"]["input"]>;
  additionalProperties_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  baitSet?: InputMaybe<Scalars["String"]["input"]>;
  baitSet_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  baitSet_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  baitSet_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  baitSet_MATCHES?: InputMaybe<Scalars["String"]["input"]>;
  baitSet_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  cfDNA2dBarcode?: InputMaybe<Scalars["String"]["input"]>;
  cfDNA2dBarcode_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  cfDNA2dBarcode_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  cfDNA2dBarcode_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  cfDNA2dBarcode_MATCHES?: InputMaybe<Scalars["String"]["input"]>;
  cfDNA2dBarcode_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  cmoInfoIgoId?: InputMaybe<Scalars["String"]["input"]>;
  cmoInfoIgoId_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  cmoInfoIgoId_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  cmoInfoIgoId_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  cmoInfoIgoId_MATCHES?: InputMaybe<Scalars["String"]["input"]>;
  cmoInfoIgoId_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  cmoPatientId?: InputMaybe<Scalars["String"]["input"]>;
  cmoPatientId_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  cmoPatientId_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  cmoPatientId_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  cmoPatientId_MATCHES?: InputMaybe<Scalars["String"]["input"]>;
  cmoPatientId_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  cmoSampleIdFields?: InputMaybe<Scalars["String"]["input"]>;
  cmoSampleIdFields_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  cmoSampleIdFields_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  cmoSampleIdFields_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  cmoSampleIdFields_MATCHES?: InputMaybe<Scalars["String"]["input"]>;
  cmoSampleIdFields_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  cmoSampleName?: InputMaybe<Scalars["String"]["input"]>;
  cmoSampleName_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  cmoSampleName_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  cmoSampleName_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  cmoSampleName_MATCHES?: InputMaybe<Scalars["String"]["input"]>;
  cmoSampleName_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  collectionYear?: InputMaybe<Scalars["String"]["input"]>;
  collectionYear_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  collectionYear_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  collectionYear_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  collectionYear_MATCHES?: InputMaybe<Scalars["String"]["input"]>;
  collectionYear_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  genePanel?: InputMaybe<Scalars["String"]["input"]>;
  genePanel_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  genePanel_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  genePanel_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  genePanel_MATCHES?: InputMaybe<Scalars["String"]["input"]>;
  genePanel_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  hasStatusStatusesAggregate?: InputMaybe<SampleMetadataHasStatusStatusesAggregateInput>;
  /** Return SampleMetadata where all of the related SampleMetadataHasStatusStatusesConnections match this filter */
  hasStatusStatusesConnection_ALL?: InputMaybe<SampleMetadataHasStatusStatusesConnectionWhere>;
  /** Return SampleMetadata where none of the related SampleMetadataHasStatusStatusesConnections match this filter */
  hasStatusStatusesConnection_NONE?: InputMaybe<SampleMetadataHasStatusStatusesConnectionWhere>;
  /** Return SampleMetadata where one of the related SampleMetadataHasStatusStatusesConnections match this filter */
  hasStatusStatusesConnection_SINGLE?: InputMaybe<SampleMetadataHasStatusStatusesConnectionWhere>;
  /** Return SampleMetadata where some of the related SampleMetadataHasStatusStatusesConnections match this filter */
  hasStatusStatusesConnection_SOME?: InputMaybe<SampleMetadataHasStatusStatusesConnectionWhere>;
  /** Return SampleMetadata where all of the related Statuses match this filter */
  hasStatusStatuses_ALL?: InputMaybe<StatusWhere>;
  /** Return SampleMetadata where none of the related Statuses match this filter */
  hasStatusStatuses_NONE?: InputMaybe<StatusWhere>;
  /** Return SampleMetadata where one of the related Statuses match this filter */
  hasStatusStatuses_SINGLE?: InputMaybe<StatusWhere>;
  /** Return SampleMetadata where some of the related Statuses match this filter */
  hasStatusStatuses_SOME?: InputMaybe<StatusWhere>;
  igoComplete?: InputMaybe<Scalars["Boolean"]["input"]>;
  igoRequestId?: InputMaybe<Scalars["String"]["input"]>;
  igoRequestId_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  igoRequestId_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  igoRequestId_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  igoRequestId_MATCHES?: InputMaybe<Scalars["String"]["input"]>;
  igoRequestId_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  importDate?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_IN?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  importDate_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  investigatorSampleId?: InputMaybe<Scalars["String"]["input"]>;
  investigatorSampleId_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  investigatorSampleId_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  investigatorSampleId_IN?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  investigatorSampleId_MATCHES?: InputMaybe<Scalars["String"]["input"]>;
  investigatorSampleId_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  libraries?: InputMaybe<Scalars["String"]["input"]>;
  libraries_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  libraries_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  libraries_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  libraries_MATCHES?: InputMaybe<Scalars["String"]["input"]>;
  libraries_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  oncotreeCode?: InputMaybe<Scalars["String"]["input"]>;
  oncotreeCode_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  oncotreeCode_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  oncotreeCode_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  oncotreeCode_MATCHES?: InputMaybe<Scalars["String"]["input"]>;
  oncotreeCode_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  preservation?: InputMaybe<Scalars["String"]["input"]>;
  preservation_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  preservation_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  preservation_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  preservation_MATCHES?: InputMaybe<Scalars["String"]["input"]>;
  preservation_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  primaryId?: InputMaybe<Scalars["String"]["input"]>;
  primaryId_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  primaryId_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  primaryId_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  primaryId_MATCHES?: InputMaybe<Scalars["String"]["input"]>;
  primaryId_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  qcReports?: InputMaybe<Scalars["String"]["input"]>;
  qcReports_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  qcReports_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  qcReports_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  qcReports_MATCHES?: InputMaybe<Scalars["String"]["input"]>;
  qcReports_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  sampleClass?: InputMaybe<Scalars["String"]["input"]>;
  sampleClass_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  sampleClass_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  sampleClass_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sampleClass_MATCHES?: InputMaybe<Scalars["String"]["input"]>;
  sampleClass_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  sampleName?: InputMaybe<Scalars["String"]["input"]>;
  sampleName_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  sampleName_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  sampleName_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sampleName_MATCHES?: InputMaybe<Scalars["String"]["input"]>;
  sampleName_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  sampleOrigin?: InputMaybe<Scalars["String"]["input"]>;
  sampleOrigin_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  sampleOrigin_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  sampleOrigin_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sampleOrigin_MATCHES?: InputMaybe<Scalars["String"]["input"]>;
  sampleOrigin_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  sampleType?: InputMaybe<Scalars["String"]["input"]>;
  sampleType_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  sampleType_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  sampleType_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sampleType_MATCHES?: InputMaybe<Scalars["String"]["input"]>;
  sampleType_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  samplesHasMetadataAggregate?: InputMaybe<SampleMetadataSamplesHasMetadataAggregateInput>;
  /** Return SampleMetadata where all of the related SampleMetadataSamplesHasMetadataConnections match this filter */
  samplesHasMetadataConnection_ALL?: InputMaybe<SampleMetadataSamplesHasMetadataConnectionWhere>;
  /** Return SampleMetadata where none of the related SampleMetadataSamplesHasMetadataConnections match this filter */
  samplesHasMetadataConnection_NONE?: InputMaybe<SampleMetadataSamplesHasMetadataConnectionWhere>;
  /** Return SampleMetadata where one of the related SampleMetadataSamplesHasMetadataConnections match this filter */
  samplesHasMetadataConnection_SINGLE?: InputMaybe<SampleMetadataSamplesHasMetadataConnectionWhere>;
  /** Return SampleMetadata where some of the related SampleMetadataSamplesHasMetadataConnections match this filter */
  samplesHasMetadataConnection_SOME?: InputMaybe<SampleMetadataSamplesHasMetadataConnectionWhere>;
  /** Return SampleMetadata where all of the related Samples match this filter */
  samplesHasMetadata_ALL?: InputMaybe<SampleWhere>;
  /** Return SampleMetadata where none of the related Samples match this filter */
  samplesHasMetadata_NONE?: InputMaybe<SampleWhere>;
  /** Return SampleMetadata where one of the related Samples match this filter */
  samplesHasMetadata_SINGLE?: InputMaybe<SampleWhere>;
  /** Return SampleMetadata where some of the related Samples match this filter */
  samplesHasMetadata_SOME?: InputMaybe<SampleWhere>;
  sex?: InputMaybe<Scalars["String"]["input"]>;
  sex_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  sex_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  sex_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sex_MATCHES?: InputMaybe<Scalars["String"]["input"]>;
  sex_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  species?: InputMaybe<Scalars["String"]["input"]>;
  species_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  species_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  species_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  species_MATCHES?: InputMaybe<Scalars["String"]["input"]>;
  species_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  tissueLocation?: InputMaybe<Scalars["String"]["input"]>;
  tissueLocation_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  tissueLocation_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  tissueLocation_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  tissueLocation_MATCHES?: InputMaybe<Scalars["String"]["input"]>;
  tissueLocation_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  tubeId?: InputMaybe<Scalars["String"]["input"]>;
  tubeId_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  tubeId_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  tubeId_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  tubeId_MATCHES?: InputMaybe<Scalars["String"]["input"]>;
  tubeId_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  tumorOrNormal?: InputMaybe<Scalars["String"]["input"]>;
  tumorOrNormal_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  tumorOrNormal_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  tumorOrNormal_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  tumorOrNormal_MATCHES?: InputMaybe<Scalars["String"]["input"]>;
  tumorOrNormal_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
};

export type SampleOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more SampleSort objects to sort Samples by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<SampleSort>>;
};

export type SamplePatientPatientsHasSampleAggregationSelection = {
  __typename?: "SamplePatientPatientsHasSampleAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<SamplePatientPatientsHasSampleNodeAggregateSelection>;
};

export type SamplePatientPatientsHasSampleNodeAggregateSelection = {
  __typename?: "SamplePatientPatientsHasSampleNodeAggregateSelection";
  smilePatientId: StringAggregateSelection;
};

export type SamplePatientsHasSampleAggregateInput = {
  AND?: InputMaybe<Array<SamplePatientsHasSampleAggregateInput>>;
  NOT?: InputMaybe<SamplePatientsHasSampleAggregateInput>;
  OR?: InputMaybe<Array<SamplePatientsHasSampleAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  node?: InputMaybe<SamplePatientsHasSampleNodeAggregationWhereInput>;
};

export type SamplePatientsHasSampleConnectFieldInput = {
  connect?: InputMaybe<Array<PatientConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  where?: InputMaybe<PatientConnectWhere>;
};

export type SamplePatientsHasSampleConnection = {
  __typename?: "SamplePatientsHasSampleConnection";
  edges: Array<SamplePatientsHasSampleRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type SamplePatientsHasSampleConnectionSort = {
  node?: InputMaybe<PatientSort>;
};

export type SamplePatientsHasSampleConnectionWhere = {
  AND?: InputMaybe<Array<SamplePatientsHasSampleConnectionWhere>>;
  NOT?: InputMaybe<SamplePatientsHasSampleConnectionWhere>;
  OR?: InputMaybe<Array<SamplePatientsHasSampleConnectionWhere>>;
  node?: InputMaybe<PatientWhere>;
};

export type SamplePatientsHasSampleCreateFieldInput = {
  node: PatientCreateInput;
};

export type SamplePatientsHasSampleDeleteFieldInput = {
  delete?: InputMaybe<PatientDeleteInput>;
  where?: InputMaybe<SamplePatientsHasSampleConnectionWhere>;
};

export type SamplePatientsHasSampleDisconnectFieldInput = {
  disconnect?: InputMaybe<PatientDisconnectInput>;
  where?: InputMaybe<SamplePatientsHasSampleConnectionWhere>;
};

export type SamplePatientsHasSampleFieldInput = {
  connect?: InputMaybe<Array<SamplePatientsHasSampleConnectFieldInput>>;
  create?: InputMaybe<Array<SamplePatientsHasSampleCreateFieldInput>>;
};

export type SamplePatientsHasSampleNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<SamplePatientsHasSampleNodeAggregationWhereInput>>;
  NOT?: InputMaybe<SamplePatientsHasSampleNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<SamplePatientsHasSampleNodeAggregationWhereInput>>;
  smilePatientId_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  smilePatientId_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  smilePatientId_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  smilePatientId_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  smilePatientId_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  smilePatientId_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  smilePatientId_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  smilePatientId_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  smilePatientId_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  smilePatientId_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  smilePatientId_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  smilePatientId_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  smilePatientId_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  smilePatientId_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  smilePatientId_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type SamplePatientsHasSampleRelationship = {
  __typename?: "SamplePatientsHasSampleRelationship";
  cursor: Scalars["String"]["output"];
  node: Patient;
};

export type SamplePatientsHasSampleUpdateConnectionInput = {
  node?: InputMaybe<PatientUpdateInput>;
};

export type SamplePatientsHasSampleUpdateFieldInput = {
  connect?: InputMaybe<Array<SamplePatientsHasSampleConnectFieldInput>>;
  create?: InputMaybe<Array<SamplePatientsHasSampleCreateFieldInput>>;
  delete?: InputMaybe<Array<SamplePatientsHasSampleDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<SamplePatientsHasSampleDisconnectFieldInput>>;
  update?: InputMaybe<SamplePatientsHasSampleUpdateConnectionInput>;
  where?: InputMaybe<SamplePatientsHasSampleConnectionWhere>;
};

export type SampleRelationInput = {
  cohortsHasCohortSample?: InputMaybe<
    Array<SampleCohortsHasCohortSampleCreateFieldInput>
  >;
  hasDbgapDbGaps?: InputMaybe<Array<SampleHasDbgapDbGapsCreateFieldInput>>;
  hasMetadataSampleMetadata?: InputMaybe<
    Array<SampleHasMetadataSampleMetadataCreateFieldInput>
  >;
  hasTempoTempos?: InputMaybe<Array<SampleHasTempoTemposCreateFieldInput>>;
  patientsHasSample?: InputMaybe<
    Array<SamplePatientsHasSampleCreateFieldInput>
  >;
  requestsHasSample?: InputMaybe<
    Array<SampleRequestsHasSampleCreateFieldInput>
  >;
  sampleAliasesIsAlias?: InputMaybe<
    Array<SampleSampleAliasesIsAliasCreateFieldInput>
  >;
};

export type SampleRequestRequestsHasSampleAggregationSelection = {
  __typename?: "SampleRequestRequestsHasSampleAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<SampleRequestRequestsHasSampleNodeAggregateSelection>;
};

export type SampleRequestRequestsHasSampleNodeAggregateSelection = {
  __typename?: "SampleRequestRequestsHasSampleNodeAggregateSelection";
  dataAccessEmails: StringAggregateSelection;
  dataAnalystEmail: StringAggregateSelection;
  dataAnalystName: StringAggregateSelection;
  genePanel: StringAggregateSelection;
  igoDeliveryDate: BigIntAggregateSelection;
  igoProjectId: StringAggregateSelection;
  igoRequestId: StringAggregateSelection;
  ilabRequestId: StringAggregateSelection;
  investigatorEmail: StringAggregateSelection;
  investigatorName: StringAggregateSelection;
  labHeadEmail: StringAggregateSelection;
  labHeadName: StringAggregateSelection;
  libraryType: StringAggregateSelection;
  namespace: StringAggregateSelection;
  otherContactEmails: StringAggregateSelection;
  piEmail: StringAggregateSelection;
  projectManagerName: StringAggregateSelection;
  qcAccessEmails: StringAggregateSelection;
  requestJson: StringAggregateSelection;
  smileRequestId: StringAggregateSelection;
  strand: StringAggregateSelection;
};

export type SampleRequestsHasSampleAggregateInput = {
  AND?: InputMaybe<Array<SampleRequestsHasSampleAggregateInput>>;
  NOT?: InputMaybe<SampleRequestsHasSampleAggregateInput>;
  OR?: InputMaybe<Array<SampleRequestsHasSampleAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  node?: InputMaybe<SampleRequestsHasSampleNodeAggregationWhereInput>;
};

export type SampleRequestsHasSampleConnectFieldInput = {
  connect?: InputMaybe<Array<RequestConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  where?: InputMaybe<RequestConnectWhere>;
};

export type SampleRequestsHasSampleConnection = {
  __typename?: "SampleRequestsHasSampleConnection";
  edges: Array<SampleRequestsHasSampleRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type SampleRequestsHasSampleConnectionSort = {
  node?: InputMaybe<RequestSort>;
};

export type SampleRequestsHasSampleConnectionWhere = {
  AND?: InputMaybe<Array<SampleRequestsHasSampleConnectionWhere>>;
  NOT?: InputMaybe<SampleRequestsHasSampleConnectionWhere>;
  OR?: InputMaybe<Array<SampleRequestsHasSampleConnectionWhere>>;
  node?: InputMaybe<RequestWhere>;
};

export type SampleRequestsHasSampleCreateFieldInput = {
  node: RequestCreateInput;
};

export type SampleRequestsHasSampleDeleteFieldInput = {
  delete?: InputMaybe<RequestDeleteInput>;
  where?: InputMaybe<SampleRequestsHasSampleConnectionWhere>;
};

export type SampleRequestsHasSampleDisconnectFieldInput = {
  disconnect?: InputMaybe<RequestDisconnectInput>;
  where?: InputMaybe<SampleRequestsHasSampleConnectionWhere>;
};

export type SampleRequestsHasSampleFieldInput = {
  connect?: InputMaybe<Array<SampleRequestsHasSampleConnectFieldInput>>;
  create?: InputMaybe<Array<SampleRequestsHasSampleCreateFieldInput>>;
};

export type SampleRequestsHasSampleNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<SampleRequestsHasSampleNodeAggregationWhereInput>>;
  NOT?: InputMaybe<SampleRequestsHasSampleNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<SampleRequestsHasSampleNodeAggregationWhereInput>>;
  dataAccessEmails_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  dataAccessEmails_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  dataAccessEmails_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  dataAccessEmails_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  dataAccessEmails_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  dataAccessEmails_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  dataAccessEmails_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  dataAccessEmails_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  dataAccessEmails_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  dataAccessEmails_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  dataAccessEmails_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  dataAccessEmails_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  dataAccessEmails_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  dataAccessEmails_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  dataAccessEmails_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  dataAnalystEmail_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  dataAnalystEmail_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  dataAnalystEmail_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  dataAnalystEmail_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  dataAnalystEmail_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  dataAnalystEmail_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  dataAnalystEmail_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  dataAnalystEmail_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  dataAnalystEmail_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  dataAnalystEmail_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  dataAnalystEmail_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  dataAnalystEmail_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  dataAnalystEmail_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  dataAnalystEmail_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  dataAnalystEmail_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  dataAnalystName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  dataAnalystName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  dataAnalystName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  dataAnalystName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  dataAnalystName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  dataAnalystName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  dataAnalystName_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  dataAnalystName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  dataAnalystName_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  dataAnalystName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  dataAnalystName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  dataAnalystName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  dataAnalystName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  dataAnalystName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  dataAnalystName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  genePanel_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  genePanel_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  genePanel_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  genePanel_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  genePanel_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  genePanel_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  genePanel_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  genePanel_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  genePanel_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  genePanel_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  genePanel_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  genePanel_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  genePanel_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  genePanel_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  genePanel_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  igoDeliveryDate_AVERAGE_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  igoDeliveryDate_AVERAGE_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  igoDeliveryDate_AVERAGE_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  igoDeliveryDate_AVERAGE_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  igoDeliveryDate_AVERAGE_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  igoDeliveryDate_MAX_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  igoDeliveryDate_MAX_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  igoDeliveryDate_MAX_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  igoDeliveryDate_MAX_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  igoDeliveryDate_MAX_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  igoDeliveryDate_MIN_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  igoDeliveryDate_MIN_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  igoDeliveryDate_MIN_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  igoDeliveryDate_MIN_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  igoDeliveryDate_MIN_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  igoDeliveryDate_SUM_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  igoDeliveryDate_SUM_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  igoDeliveryDate_SUM_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  igoDeliveryDate_SUM_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  igoDeliveryDate_SUM_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  igoProjectId_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  igoProjectId_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  igoProjectId_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  igoProjectId_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  igoProjectId_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  igoProjectId_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  igoProjectId_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  igoProjectId_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  igoProjectId_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  igoProjectId_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  igoProjectId_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  igoProjectId_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  igoProjectId_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  igoProjectId_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  igoProjectId_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  igoRequestId_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  igoRequestId_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  igoRequestId_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  igoRequestId_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  igoRequestId_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  igoRequestId_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  igoRequestId_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  igoRequestId_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  igoRequestId_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  igoRequestId_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  igoRequestId_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  igoRequestId_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  igoRequestId_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  igoRequestId_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  igoRequestId_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  ilabRequestId_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  ilabRequestId_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  ilabRequestId_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  ilabRequestId_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  ilabRequestId_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  ilabRequestId_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  ilabRequestId_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  ilabRequestId_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  ilabRequestId_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  ilabRequestId_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  ilabRequestId_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  ilabRequestId_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  ilabRequestId_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  ilabRequestId_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  ilabRequestId_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  investigatorEmail_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars["Float"]["input"]
  >;
  investigatorEmail_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  investigatorEmail_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  investigatorEmail_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  investigatorEmail_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  investigatorEmail_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  investigatorEmail_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  investigatorEmail_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  investigatorEmail_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  investigatorEmail_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  investigatorEmail_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  investigatorEmail_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  investigatorEmail_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  investigatorEmail_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  investigatorEmail_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  investigatorName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  investigatorName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  investigatorName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  investigatorName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  investigatorName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  investigatorName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  investigatorName_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  investigatorName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  investigatorName_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  investigatorName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  investigatorName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  investigatorName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  investigatorName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  investigatorName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  investigatorName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  labHeadEmail_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  labHeadEmail_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  labHeadEmail_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  labHeadEmail_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  labHeadEmail_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  labHeadEmail_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  labHeadEmail_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  labHeadEmail_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  labHeadEmail_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  labHeadEmail_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  labHeadEmail_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  labHeadEmail_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  labHeadEmail_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  labHeadEmail_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  labHeadEmail_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  labHeadName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  labHeadName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  labHeadName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  labHeadName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  labHeadName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  labHeadName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  labHeadName_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  labHeadName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  labHeadName_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  labHeadName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  labHeadName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  labHeadName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  labHeadName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  labHeadName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  labHeadName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  libraryType_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  libraryType_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  libraryType_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  libraryType_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  libraryType_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  libraryType_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  libraryType_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  libraryType_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  libraryType_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  libraryType_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  libraryType_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  libraryType_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  libraryType_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  libraryType_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  libraryType_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  namespace_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  namespace_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  namespace_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  namespace_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  namespace_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  namespace_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  namespace_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  namespace_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  namespace_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  namespace_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  namespace_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  namespace_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  namespace_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  namespace_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  namespace_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  otherContactEmails_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars["Float"]["input"]
  >;
  otherContactEmails_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  otherContactEmails_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  otherContactEmails_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  otherContactEmails_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  otherContactEmails_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  otherContactEmails_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  otherContactEmails_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  otherContactEmails_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  otherContactEmails_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  otherContactEmails_SHORTEST_LENGTH_EQUAL?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  otherContactEmails_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  otherContactEmails_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  otherContactEmails_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  otherContactEmails_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  piEmail_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  piEmail_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  piEmail_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  piEmail_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  piEmail_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  piEmail_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  piEmail_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  piEmail_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  piEmail_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  piEmail_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  piEmail_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  piEmail_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  piEmail_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  piEmail_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  piEmail_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  projectManagerName_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars["Float"]["input"]
  >;
  projectManagerName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  projectManagerName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  projectManagerName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  projectManagerName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  projectManagerName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  projectManagerName_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  projectManagerName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  projectManagerName_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  projectManagerName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  projectManagerName_SHORTEST_LENGTH_EQUAL?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  projectManagerName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  projectManagerName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  projectManagerName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  projectManagerName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  qcAccessEmails_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  qcAccessEmails_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  qcAccessEmails_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  qcAccessEmails_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  qcAccessEmails_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  qcAccessEmails_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  qcAccessEmails_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  qcAccessEmails_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  qcAccessEmails_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  qcAccessEmails_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  qcAccessEmails_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  qcAccessEmails_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  qcAccessEmails_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  qcAccessEmails_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  qcAccessEmails_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  requestJson_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  requestJson_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  requestJson_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  requestJson_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  requestJson_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  requestJson_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  requestJson_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  requestJson_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  requestJson_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  requestJson_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  requestJson_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  requestJson_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  requestJson_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  requestJson_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  requestJson_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  smileRequestId_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  smileRequestId_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  smileRequestId_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  smileRequestId_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  smileRequestId_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  smileRequestId_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  smileRequestId_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  smileRequestId_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  smileRequestId_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  smileRequestId_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  smileRequestId_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  smileRequestId_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  smileRequestId_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  smileRequestId_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  smileRequestId_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  strand_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  strand_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  strand_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  strand_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  strand_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  strand_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  strand_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  strand_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  strand_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  strand_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  strand_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  strand_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  strand_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  strand_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  strand_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type SampleRequestsHasSampleRelationship = {
  __typename?: "SampleRequestsHasSampleRelationship";
  cursor: Scalars["String"]["output"];
  node: Request;
};

export type SampleRequestsHasSampleUpdateConnectionInput = {
  node?: InputMaybe<RequestUpdateInput>;
};

export type SampleRequestsHasSampleUpdateFieldInput = {
  connect?: InputMaybe<Array<SampleRequestsHasSampleConnectFieldInput>>;
  create?: InputMaybe<Array<SampleRequestsHasSampleCreateFieldInput>>;
  delete?: InputMaybe<Array<SampleRequestsHasSampleDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<SampleRequestsHasSampleDisconnectFieldInput>>;
  update?: InputMaybe<SampleRequestsHasSampleUpdateConnectionInput>;
  where?: InputMaybe<SampleRequestsHasSampleConnectionWhere>;
};

export type SampleSampleAliasSampleAliasesIsAliasAggregationSelection = {
  __typename?: "SampleSampleAliasSampleAliasesIsAliasAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<SampleSampleAliasSampleAliasesIsAliasNodeAggregateSelection>;
};

export type SampleSampleAliasSampleAliasesIsAliasNodeAggregateSelection = {
  __typename?: "SampleSampleAliasSampleAliasesIsAliasNodeAggregateSelection";
  namespace: StringAggregateSelection;
  value: StringAggregateSelection;
};

export type SampleSampleAliasesIsAliasAggregateInput = {
  AND?: InputMaybe<Array<SampleSampleAliasesIsAliasAggregateInput>>;
  NOT?: InputMaybe<SampleSampleAliasesIsAliasAggregateInput>;
  OR?: InputMaybe<Array<SampleSampleAliasesIsAliasAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  node?: InputMaybe<SampleSampleAliasesIsAliasNodeAggregationWhereInput>;
};

export type SampleSampleAliasesIsAliasConnectFieldInput = {
  connect?: InputMaybe<Array<SampleAliasConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  where?: InputMaybe<SampleAliasConnectWhere>;
};

export type SampleSampleAliasesIsAliasConnection = {
  __typename?: "SampleSampleAliasesIsAliasConnection";
  edges: Array<SampleSampleAliasesIsAliasRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type SampleSampleAliasesIsAliasConnectionSort = {
  node?: InputMaybe<SampleAliasSort>;
};

export type SampleSampleAliasesIsAliasConnectionWhere = {
  AND?: InputMaybe<Array<SampleSampleAliasesIsAliasConnectionWhere>>;
  NOT?: InputMaybe<SampleSampleAliasesIsAliasConnectionWhere>;
  OR?: InputMaybe<Array<SampleSampleAliasesIsAliasConnectionWhere>>;
  node?: InputMaybe<SampleAliasWhere>;
};

export type SampleSampleAliasesIsAliasCreateFieldInput = {
  node: SampleAliasCreateInput;
};

export type SampleSampleAliasesIsAliasDeleteFieldInput = {
  delete?: InputMaybe<SampleAliasDeleteInput>;
  where?: InputMaybe<SampleSampleAliasesIsAliasConnectionWhere>;
};

export type SampleSampleAliasesIsAliasDisconnectFieldInput = {
  disconnect?: InputMaybe<SampleAliasDisconnectInput>;
  where?: InputMaybe<SampleSampleAliasesIsAliasConnectionWhere>;
};

export type SampleSampleAliasesIsAliasFieldInput = {
  connect?: InputMaybe<Array<SampleSampleAliasesIsAliasConnectFieldInput>>;
  create?: InputMaybe<Array<SampleSampleAliasesIsAliasCreateFieldInput>>;
};

export type SampleSampleAliasesIsAliasNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<SampleSampleAliasesIsAliasNodeAggregationWhereInput>>;
  NOT?: InputMaybe<SampleSampleAliasesIsAliasNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<SampleSampleAliasesIsAliasNodeAggregationWhereInput>>;
  namespace_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  namespace_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  namespace_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  namespace_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  namespace_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  namespace_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  namespace_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  namespace_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  namespace_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  namespace_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  namespace_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  namespace_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  namespace_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  namespace_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  namespace_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  value_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  value_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  value_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  value_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  value_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  value_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  value_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  value_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  value_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  value_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  value_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  value_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  value_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  value_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  value_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type SampleSampleAliasesIsAliasRelationship = {
  __typename?: "SampleSampleAliasesIsAliasRelationship";
  cursor: Scalars["String"]["output"];
  node: SampleAlias;
};

export type SampleSampleAliasesIsAliasUpdateConnectionInput = {
  node?: InputMaybe<SampleAliasUpdateInput>;
};

export type SampleSampleAliasesIsAliasUpdateFieldInput = {
  connect?: InputMaybe<Array<SampleSampleAliasesIsAliasConnectFieldInput>>;
  create?: InputMaybe<Array<SampleSampleAliasesIsAliasCreateFieldInput>>;
  delete?: InputMaybe<Array<SampleSampleAliasesIsAliasDeleteFieldInput>>;
  disconnect?: InputMaybe<
    Array<SampleSampleAliasesIsAliasDisconnectFieldInput>
  >;
  update?: InputMaybe<SampleSampleAliasesIsAliasUpdateConnectionInput>;
  where?: InputMaybe<SampleSampleAliasesIsAliasConnectionWhere>;
};

export type SampleSampleMetadataHasMetadataSampleMetadataAggregationSelection =
  {
    __typename?: "SampleSampleMetadataHasMetadataSampleMetadataAggregationSelection";
    count: Scalars["Int"]["output"];
    node?: Maybe<SampleSampleMetadataHasMetadataSampleMetadataNodeAggregateSelection>;
  };

export type SampleSampleMetadataHasMetadataSampleMetadataNodeAggregateSelection =
  {
    __typename?: "SampleSampleMetadataHasMetadataSampleMetadataNodeAggregateSelection";
    additionalProperties: StringAggregateSelection;
    baitSet: StringAggregateSelection;
    cfDNA2dBarcode: StringAggregateSelection;
    cmoInfoIgoId: StringAggregateSelection;
    cmoPatientId: StringAggregateSelection;
    cmoSampleIdFields: StringAggregateSelection;
    cmoSampleName: StringAggregateSelection;
    collectionYear: StringAggregateSelection;
    genePanel: StringAggregateSelection;
    igoRequestId: StringAggregateSelection;
    importDate: BigIntAggregateSelection;
    investigatorSampleId: StringAggregateSelection;
    libraries: StringAggregateSelection;
    oncotreeCode: StringAggregateSelection;
    preservation: StringAggregateSelection;
    primaryId: StringAggregateSelection;
    qcReports: StringAggregateSelection;
    sampleClass: StringAggregateSelection;
    sampleName: StringAggregateSelection;
    sampleOrigin: StringAggregateSelection;
    sampleType: StringAggregateSelection;
    sex: StringAggregateSelection;
    species: StringAggregateSelection;
    tissueLocation: StringAggregateSelection;
    tubeId: StringAggregateSelection;
    tumorOrNormal: StringAggregateSelection;
  };

/** Fields to sort Samples by. The order in which sorts are applied is not guaranteed when specifying many fields in one SampleSort object. */
export type SampleSort = {
  datasource?: InputMaybe<SortDirection>;
  revisable?: InputMaybe<SortDirection>;
  sampleCategory?: InputMaybe<SortDirection>;
  sampleClass?: InputMaybe<SortDirection>;
  smileSampleId?: InputMaybe<SortDirection>;
};

export type SampleTempoHasTempoTemposAggregationSelection = {
  __typename?: "SampleTempoHasTempoTemposAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<SampleTempoHasTempoTemposNodeAggregateSelection>;
};

export type SampleTempoHasTempoTemposNodeAggregateSelection = {
  __typename?: "SampleTempoHasTempoTemposNodeAggregateSelection";
  accessLevel: StringAggregateSelection;
  billedBy: StringAggregateSelection;
  costCenter: StringAggregateSelection;
  custodianInformation: StringAggregateSelection;
  embargoDate: StringAggregateSelection;
  initialPipelineRunDate: StringAggregateSelection;
  smileTempoId: StringAggregateSelection;
};

export type SampleUpdateInput = {
  cohortsHasCohortSample?: InputMaybe<
    Array<SampleCohortsHasCohortSampleUpdateFieldInput>
  >;
  datasource?: InputMaybe<Scalars["String"]["input"]>;
  hasDbgapDbGaps?: InputMaybe<Array<SampleHasDbgapDbGapsUpdateFieldInput>>;
  hasMetadataSampleMetadata?: InputMaybe<
    Array<SampleHasMetadataSampleMetadataUpdateFieldInput>
  >;
  hasTempoTempos?: InputMaybe<Array<SampleHasTempoTemposUpdateFieldInput>>;
  patientsHasSample?: InputMaybe<
    Array<SamplePatientsHasSampleUpdateFieldInput>
  >;
  requestsHasSample?: InputMaybe<
    Array<SampleRequestsHasSampleUpdateFieldInput>
  >;
  revisable?: InputMaybe<Scalars["Boolean"]["input"]>;
  sampleAliasesIsAlias?: InputMaybe<
    Array<SampleSampleAliasesIsAliasUpdateFieldInput>
  >;
  sampleCategory?: InputMaybe<Scalars["String"]["input"]>;
  sampleClass?: InputMaybe<Scalars["String"]["input"]>;
  smileSampleId?: InputMaybe<Scalars["String"]["input"]>;
};

export type SampleWhere = {
  AND?: InputMaybe<Array<SampleWhere>>;
  NOT?: InputMaybe<SampleWhere>;
  OR?: InputMaybe<Array<SampleWhere>>;
  cohortsHasCohortSampleAggregate?: InputMaybe<SampleCohortsHasCohortSampleAggregateInput>;
  /** Return Samples where all of the related SampleCohortsHasCohortSampleConnections match this filter */
  cohortsHasCohortSampleConnection_ALL?: InputMaybe<SampleCohortsHasCohortSampleConnectionWhere>;
  /** Return Samples where none of the related SampleCohortsHasCohortSampleConnections match this filter */
  cohortsHasCohortSampleConnection_NONE?: InputMaybe<SampleCohortsHasCohortSampleConnectionWhere>;
  /** Return Samples where one of the related SampleCohortsHasCohortSampleConnections match this filter */
  cohortsHasCohortSampleConnection_SINGLE?: InputMaybe<SampleCohortsHasCohortSampleConnectionWhere>;
  /** Return Samples where some of the related SampleCohortsHasCohortSampleConnections match this filter */
  cohortsHasCohortSampleConnection_SOME?: InputMaybe<SampleCohortsHasCohortSampleConnectionWhere>;
  /** Return Samples where all of the related Cohorts match this filter */
  cohortsHasCohortSample_ALL?: InputMaybe<CohortWhere>;
  /** Return Samples where none of the related Cohorts match this filter */
  cohortsHasCohortSample_NONE?: InputMaybe<CohortWhere>;
  /** Return Samples where one of the related Cohorts match this filter */
  cohortsHasCohortSample_SINGLE?: InputMaybe<CohortWhere>;
  /** Return Samples where some of the related Cohorts match this filter */
  cohortsHasCohortSample_SOME?: InputMaybe<CohortWhere>;
  datasource?: InputMaybe<Scalars["String"]["input"]>;
  datasource_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  datasource_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  datasource_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  datasource_MATCHES?: InputMaybe<Scalars["String"]["input"]>;
  datasource_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  hasDbgapDbGapsAggregate?: InputMaybe<SampleHasDbgapDbGapsAggregateInput>;
  /** Return Samples where all of the related SampleHasDbgapDbGapsConnections match this filter */
  hasDbgapDbGapsConnection_ALL?: InputMaybe<SampleHasDbgapDbGapsConnectionWhere>;
  /** Return Samples where none of the related SampleHasDbgapDbGapsConnections match this filter */
  hasDbgapDbGapsConnection_NONE?: InputMaybe<SampleHasDbgapDbGapsConnectionWhere>;
  /** Return Samples where one of the related SampleHasDbgapDbGapsConnections match this filter */
  hasDbgapDbGapsConnection_SINGLE?: InputMaybe<SampleHasDbgapDbGapsConnectionWhere>;
  /** Return Samples where some of the related SampleHasDbgapDbGapsConnections match this filter */
  hasDbgapDbGapsConnection_SOME?: InputMaybe<SampleHasDbgapDbGapsConnectionWhere>;
  /** Return Samples where all of the related DbGaps match this filter */
  hasDbgapDbGaps_ALL?: InputMaybe<DbGapWhere>;
  /** Return Samples where none of the related DbGaps match this filter */
  hasDbgapDbGaps_NONE?: InputMaybe<DbGapWhere>;
  /** Return Samples where one of the related DbGaps match this filter */
  hasDbgapDbGaps_SINGLE?: InputMaybe<DbGapWhere>;
  /** Return Samples where some of the related DbGaps match this filter */
  hasDbgapDbGaps_SOME?: InputMaybe<DbGapWhere>;
  hasMetadataSampleMetadataAggregate?: InputMaybe<SampleHasMetadataSampleMetadataAggregateInput>;
  /** Return Samples where all of the related SampleHasMetadataSampleMetadataConnections match this filter */
  hasMetadataSampleMetadataConnection_ALL?: InputMaybe<SampleHasMetadataSampleMetadataConnectionWhere>;
  /** Return Samples where none of the related SampleHasMetadataSampleMetadataConnections match this filter */
  hasMetadataSampleMetadataConnection_NONE?: InputMaybe<SampleHasMetadataSampleMetadataConnectionWhere>;
  /** Return Samples where one of the related SampleHasMetadataSampleMetadataConnections match this filter */
  hasMetadataSampleMetadataConnection_SINGLE?: InputMaybe<SampleHasMetadataSampleMetadataConnectionWhere>;
  /** Return Samples where some of the related SampleHasMetadataSampleMetadataConnections match this filter */
  hasMetadataSampleMetadataConnection_SOME?: InputMaybe<SampleHasMetadataSampleMetadataConnectionWhere>;
  /** Return Samples where all of the related SampleMetadata match this filter */
  hasMetadataSampleMetadata_ALL?: InputMaybe<SampleMetadataWhere>;
  /** Return Samples where none of the related SampleMetadata match this filter */
  hasMetadataSampleMetadata_NONE?: InputMaybe<SampleMetadataWhere>;
  /** Return Samples where one of the related SampleMetadata match this filter */
  hasMetadataSampleMetadata_SINGLE?: InputMaybe<SampleMetadataWhere>;
  /** Return Samples where some of the related SampleMetadata match this filter */
  hasMetadataSampleMetadata_SOME?: InputMaybe<SampleMetadataWhere>;
  hasTempoTemposAggregate?: InputMaybe<SampleHasTempoTemposAggregateInput>;
  /** Return Samples where all of the related SampleHasTempoTemposConnections match this filter */
  hasTempoTemposConnection_ALL?: InputMaybe<SampleHasTempoTemposConnectionWhere>;
  /** Return Samples where none of the related SampleHasTempoTemposConnections match this filter */
  hasTempoTemposConnection_NONE?: InputMaybe<SampleHasTempoTemposConnectionWhere>;
  /** Return Samples where one of the related SampleHasTempoTemposConnections match this filter */
  hasTempoTemposConnection_SINGLE?: InputMaybe<SampleHasTempoTemposConnectionWhere>;
  /** Return Samples where some of the related SampleHasTempoTemposConnections match this filter */
  hasTempoTemposConnection_SOME?: InputMaybe<SampleHasTempoTemposConnectionWhere>;
  /** Return Samples where all of the related Tempos match this filter */
  hasTempoTempos_ALL?: InputMaybe<TempoWhere>;
  /** Return Samples where none of the related Tempos match this filter */
  hasTempoTempos_NONE?: InputMaybe<TempoWhere>;
  /** Return Samples where one of the related Tempos match this filter */
  hasTempoTempos_SINGLE?: InputMaybe<TempoWhere>;
  /** Return Samples where some of the related Tempos match this filter */
  hasTempoTempos_SOME?: InputMaybe<TempoWhere>;
  patientsHasSampleAggregate?: InputMaybe<SamplePatientsHasSampleAggregateInput>;
  /** Return Samples where all of the related SamplePatientsHasSampleConnections match this filter */
  patientsHasSampleConnection_ALL?: InputMaybe<SamplePatientsHasSampleConnectionWhere>;
  /** Return Samples where none of the related SamplePatientsHasSampleConnections match this filter */
  patientsHasSampleConnection_NONE?: InputMaybe<SamplePatientsHasSampleConnectionWhere>;
  /** Return Samples where one of the related SamplePatientsHasSampleConnections match this filter */
  patientsHasSampleConnection_SINGLE?: InputMaybe<SamplePatientsHasSampleConnectionWhere>;
  /** Return Samples where some of the related SamplePatientsHasSampleConnections match this filter */
  patientsHasSampleConnection_SOME?: InputMaybe<SamplePatientsHasSampleConnectionWhere>;
  /** Return Samples where all of the related Patients match this filter */
  patientsHasSample_ALL?: InputMaybe<PatientWhere>;
  /** Return Samples where none of the related Patients match this filter */
  patientsHasSample_NONE?: InputMaybe<PatientWhere>;
  /** Return Samples where one of the related Patients match this filter */
  patientsHasSample_SINGLE?: InputMaybe<PatientWhere>;
  /** Return Samples where some of the related Patients match this filter */
  patientsHasSample_SOME?: InputMaybe<PatientWhere>;
  requestsHasSampleAggregate?: InputMaybe<SampleRequestsHasSampleAggregateInput>;
  /** Return Samples where all of the related SampleRequestsHasSampleConnections match this filter */
  requestsHasSampleConnection_ALL?: InputMaybe<SampleRequestsHasSampleConnectionWhere>;
  /** Return Samples where none of the related SampleRequestsHasSampleConnections match this filter */
  requestsHasSampleConnection_NONE?: InputMaybe<SampleRequestsHasSampleConnectionWhere>;
  /** Return Samples where one of the related SampleRequestsHasSampleConnections match this filter */
  requestsHasSampleConnection_SINGLE?: InputMaybe<SampleRequestsHasSampleConnectionWhere>;
  /** Return Samples where some of the related SampleRequestsHasSampleConnections match this filter */
  requestsHasSampleConnection_SOME?: InputMaybe<SampleRequestsHasSampleConnectionWhere>;
  /** Return Samples where all of the related Requests match this filter */
  requestsHasSample_ALL?: InputMaybe<RequestWhere>;
  /** Return Samples where none of the related Requests match this filter */
  requestsHasSample_NONE?: InputMaybe<RequestWhere>;
  /** Return Samples where one of the related Requests match this filter */
  requestsHasSample_SINGLE?: InputMaybe<RequestWhere>;
  /** Return Samples where some of the related Requests match this filter */
  requestsHasSample_SOME?: InputMaybe<RequestWhere>;
  revisable?: InputMaybe<Scalars["Boolean"]["input"]>;
  sampleAliasesIsAliasAggregate?: InputMaybe<SampleSampleAliasesIsAliasAggregateInput>;
  /** Return Samples where all of the related SampleSampleAliasesIsAliasConnections match this filter */
  sampleAliasesIsAliasConnection_ALL?: InputMaybe<SampleSampleAliasesIsAliasConnectionWhere>;
  /** Return Samples where none of the related SampleSampleAliasesIsAliasConnections match this filter */
  sampleAliasesIsAliasConnection_NONE?: InputMaybe<SampleSampleAliasesIsAliasConnectionWhere>;
  /** Return Samples where one of the related SampleSampleAliasesIsAliasConnections match this filter */
  sampleAliasesIsAliasConnection_SINGLE?: InputMaybe<SampleSampleAliasesIsAliasConnectionWhere>;
  /** Return Samples where some of the related SampleSampleAliasesIsAliasConnections match this filter */
  sampleAliasesIsAliasConnection_SOME?: InputMaybe<SampleSampleAliasesIsAliasConnectionWhere>;
  /** Return Samples where all of the related SampleAliases match this filter */
  sampleAliasesIsAlias_ALL?: InputMaybe<SampleAliasWhere>;
  /** Return Samples where none of the related SampleAliases match this filter */
  sampleAliasesIsAlias_NONE?: InputMaybe<SampleAliasWhere>;
  /** Return Samples where one of the related SampleAliases match this filter */
  sampleAliasesIsAlias_SINGLE?: InputMaybe<SampleAliasWhere>;
  /** Return Samples where some of the related SampleAliases match this filter */
  sampleAliasesIsAlias_SOME?: InputMaybe<SampleAliasWhere>;
  sampleCategory?: InputMaybe<Scalars["String"]["input"]>;
  sampleCategory_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  sampleCategory_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  sampleCategory_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  sampleCategory_MATCHES?: InputMaybe<Scalars["String"]["input"]>;
  sampleCategory_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  sampleClass?: InputMaybe<Scalars["String"]["input"]>;
  sampleClass_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  sampleClass_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  sampleClass_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sampleClass_MATCHES?: InputMaybe<Scalars["String"]["input"]>;
  sampleClass_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  smileSampleId?: InputMaybe<Scalars["String"]["input"]>;
  smileSampleId_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  smileSampleId_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  smileSampleId_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  smileSampleId_MATCHES?: InputMaybe<Scalars["String"]["input"]>;
  smileSampleId_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
};

export type SamplesConnection = {
  __typename?: "SamplesConnection";
  edges: Array<SampleEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type SeqDateAccessionBySampleId = {
  __typename?: "SeqDateAccessionBySampleId";
  DMP_SAMPLE_ID: Scalars["String"]["output"];
  MOLECULAR_ACCESSION_NUMBER?: Maybe<Scalars["String"]["output"]>;
  SEQUENCING_DATE: Scalars["String"]["output"];
};

/** An enum for sorting in either ascending or descending order. */
export enum SortDirection {
  /** Sort by field values in ascending order. */
  Asc = "ASC",
  /** Sort by field values in descending order. */
  Desc = "DESC",
}

export type Status = {
  __typename?: "Status";
  requestMetadataHasStatus: Array<RequestMetadata>;
  requestMetadataHasStatusAggregate?: Maybe<StatusRequestMetadataRequestMetadataHasStatusAggregationSelection>;
  requestMetadataHasStatusConnection: StatusRequestMetadataHasStatusConnection;
  sampleMetadataHasStatus: Array<SampleMetadata>;
  sampleMetadataHasStatusAggregate?: Maybe<StatusSampleMetadataSampleMetadataHasStatusAggregationSelection>;
  sampleMetadataHasStatusConnection: StatusSampleMetadataHasStatusConnection;
  validationReport?: Maybe<Scalars["String"]["output"]>;
  validationStatus?: Maybe<Scalars["Boolean"]["output"]>;
};

export type StatusRequestMetadataHasStatusArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  options?: InputMaybe<RequestMetadataOptions>;
  where?: InputMaybe<RequestMetadataWhere>;
};

export type StatusRequestMetadataHasStatusAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<RequestMetadataWhere>;
};

export type StatusRequestMetadataHasStatusConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<StatusRequestMetadataHasStatusConnectionSort>>;
  where?: InputMaybe<StatusRequestMetadataHasStatusConnectionWhere>;
};

export type StatusSampleMetadataHasStatusArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  options?: InputMaybe<SampleMetadataOptions>;
  where?: InputMaybe<SampleMetadataWhere>;
};

export type StatusSampleMetadataHasStatusAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<SampleMetadataWhere>;
};

export type StatusSampleMetadataHasStatusConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<StatusSampleMetadataHasStatusConnectionSort>>;
  where?: InputMaybe<StatusSampleMetadataHasStatusConnectionWhere>;
};

export type StatusAggregateSelection = {
  __typename?: "StatusAggregateSelection";
  count: Scalars["Int"]["output"];
  validationReport: StringAggregateSelection;
};

export type StatusConnectInput = {
  requestMetadataHasStatus?: InputMaybe<
    Array<StatusRequestMetadataHasStatusConnectFieldInput>
  >;
  sampleMetadataHasStatus?: InputMaybe<
    Array<StatusSampleMetadataHasStatusConnectFieldInput>
  >;
};

export type StatusConnectWhere = {
  node: StatusWhere;
};

export type StatusCreateInput = {
  requestMetadataHasStatus?: InputMaybe<StatusRequestMetadataHasStatusFieldInput>;
  sampleMetadataHasStatus?: InputMaybe<StatusSampleMetadataHasStatusFieldInput>;
  validationReport?: InputMaybe<Scalars["String"]["input"]>;
  validationStatus?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type StatusDeleteInput = {
  requestMetadataHasStatus?: InputMaybe<
    Array<StatusRequestMetadataHasStatusDeleteFieldInput>
  >;
  sampleMetadataHasStatus?: InputMaybe<
    Array<StatusSampleMetadataHasStatusDeleteFieldInput>
  >;
};

export type StatusDisconnectInput = {
  requestMetadataHasStatus?: InputMaybe<
    Array<StatusRequestMetadataHasStatusDisconnectFieldInput>
  >;
  sampleMetadataHasStatus?: InputMaybe<
    Array<StatusSampleMetadataHasStatusDisconnectFieldInput>
  >;
};

export type StatusEdge = {
  __typename?: "StatusEdge";
  cursor: Scalars["String"]["output"];
  node: Status;
};

export type StatusOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more StatusSort objects to sort Statuses by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<StatusSort>>;
};

export type StatusRelationInput = {
  requestMetadataHasStatus?: InputMaybe<
    Array<StatusRequestMetadataHasStatusCreateFieldInput>
  >;
  sampleMetadataHasStatus?: InputMaybe<
    Array<StatusSampleMetadataHasStatusCreateFieldInput>
  >;
};

export type StatusRequestMetadataHasStatusAggregateInput = {
  AND?: InputMaybe<Array<StatusRequestMetadataHasStatusAggregateInput>>;
  NOT?: InputMaybe<StatusRequestMetadataHasStatusAggregateInput>;
  OR?: InputMaybe<Array<StatusRequestMetadataHasStatusAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  node?: InputMaybe<StatusRequestMetadataHasStatusNodeAggregationWhereInput>;
};

export type StatusRequestMetadataHasStatusConnectFieldInput = {
  connect?: InputMaybe<Array<RequestMetadataConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  where?: InputMaybe<RequestMetadataConnectWhere>;
};

export type StatusRequestMetadataHasStatusConnection = {
  __typename?: "StatusRequestMetadataHasStatusConnection";
  edges: Array<StatusRequestMetadataHasStatusRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type StatusRequestMetadataHasStatusConnectionSort = {
  node?: InputMaybe<RequestMetadataSort>;
};

export type StatusRequestMetadataHasStatusConnectionWhere = {
  AND?: InputMaybe<Array<StatusRequestMetadataHasStatusConnectionWhere>>;
  NOT?: InputMaybe<StatusRequestMetadataHasStatusConnectionWhere>;
  OR?: InputMaybe<Array<StatusRequestMetadataHasStatusConnectionWhere>>;
  node?: InputMaybe<RequestMetadataWhere>;
};

export type StatusRequestMetadataHasStatusCreateFieldInput = {
  node: RequestMetadataCreateInput;
};

export type StatusRequestMetadataHasStatusDeleteFieldInput = {
  delete?: InputMaybe<RequestMetadataDeleteInput>;
  where?: InputMaybe<StatusRequestMetadataHasStatusConnectionWhere>;
};

export type StatusRequestMetadataHasStatusDisconnectFieldInput = {
  disconnect?: InputMaybe<RequestMetadataDisconnectInput>;
  where?: InputMaybe<StatusRequestMetadataHasStatusConnectionWhere>;
};

export type StatusRequestMetadataHasStatusFieldInput = {
  connect?: InputMaybe<Array<StatusRequestMetadataHasStatusConnectFieldInput>>;
  create?: InputMaybe<Array<StatusRequestMetadataHasStatusCreateFieldInput>>;
};

export type StatusRequestMetadataHasStatusNodeAggregationWhereInput = {
  AND?: InputMaybe<
    Array<StatusRequestMetadataHasStatusNodeAggregationWhereInput>
  >;
  NOT?: InputMaybe<StatusRequestMetadataHasStatusNodeAggregationWhereInput>;
  OR?: InputMaybe<
    Array<StatusRequestMetadataHasStatusNodeAggregationWhereInput>
  >;
  igoRequestId_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  igoRequestId_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  igoRequestId_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  igoRequestId_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  igoRequestId_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  igoRequestId_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  igoRequestId_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  igoRequestId_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  igoRequestId_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  igoRequestId_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  igoRequestId_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  igoRequestId_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  igoRequestId_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  igoRequestId_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  igoRequestId_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  importDate_AVERAGE_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_AVERAGE_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_AVERAGE_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_AVERAGE_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_AVERAGE_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_MAX_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_MAX_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_MAX_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_MAX_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_MAX_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_MIN_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_MIN_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_MIN_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_MIN_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_MIN_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_SUM_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_SUM_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_SUM_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_SUM_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_SUM_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  requestMetadataJson_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars["Float"]["input"]
  >;
  requestMetadataJson_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  requestMetadataJson_AVERAGE_LENGTH_GTE?: InputMaybe<
    Scalars["Float"]["input"]
  >;
  requestMetadataJson_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  requestMetadataJson_AVERAGE_LENGTH_LTE?: InputMaybe<
    Scalars["Float"]["input"]
  >;
  requestMetadataJson_LONGEST_LENGTH_EQUAL?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  requestMetadataJson_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  requestMetadataJson_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  requestMetadataJson_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  requestMetadataJson_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  requestMetadataJson_SHORTEST_LENGTH_EQUAL?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  requestMetadataJson_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  requestMetadataJson_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  requestMetadataJson_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  requestMetadataJson_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type StatusRequestMetadataHasStatusRelationship = {
  __typename?: "StatusRequestMetadataHasStatusRelationship";
  cursor: Scalars["String"]["output"];
  node: RequestMetadata;
};

export type StatusRequestMetadataHasStatusUpdateConnectionInput = {
  node?: InputMaybe<RequestMetadataUpdateInput>;
};

export type StatusRequestMetadataHasStatusUpdateFieldInput = {
  connect?: InputMaybe<Array<StatusRequestMetadataHasStatusConnectFieldInput>>;
  create?: InputMaybe<Array<StatusRequestMetadataHasStatusCreateFieldInput>>;
  delete?: InputMaybe<Array<StatusRequestMetadataHasStatusDeleteFieldInput>>;
  disconnect?: InputMaybe<
    Array<StatusRequestMetadataHasStatusDisconnectFieldInput>
  >;
  update?: InputMaybe<StatusRequestMetadataHasStatusUpdateConnectionInput>;
  where?: InputMaybe<StatusRequestMetadataHasStatusConnectionWhere>;
};

export type StatusRequestMetadataRequestMetadataHasStatusAggregationSelection =
  {
    __typename?: "StatusRequestMetadataRequestMetadataHasStatusAggregationSelection";
    count: Scalars["Int"]["output"];
    node?: Maybe<StatusRequestMetadataRequestMetadataHasStatusNodeAggregateSelection>;
  };

export type StatusRequestMetadataRequestMetadataHasStatusNodeAggregateSelection =
  {
    __typename?: "StatusRequestMetadataRequestMetadataHasStatusNodeAggregateSelection";
    igoRequestId: StringAggregateSelection;
    importDate: BigIntAggregateSelection;
    requestMetadataJson: StringAggregateSelection;
  };

export type StatusSampleMetadataHasStatusAggregateInput = {
  AND?: InputMaybe<Array<StatusSampleMetadataHasStatusAggregateInput>>;
  NOT?: InputMaybe<StatusSampleMetadataHasStatusAggregateInput>;
  OR?: InputMaybe<Array<StatusSampleMetadataHasStatusAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  node?: InputMaybe<StatusSampleMetadataHasStatusNodeAggregationWhereInput>;
};

export type StatusSampleMetadataHasStatusConnectFieldInput = {
  connect?: InputMaybe<Array<SampleMetadataConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  where?: InputMaybe<SampleMetadataConnectWhere>;
};

export type StatusSampleMetadataHasStatusConnection = {
  __typename?: "StatusSampleMetadataHasStatusConnection";
  edges: Array<StatusSampleMetadataHasStatusRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type StatusSampleMetadataHasStatusConnectionSort = {
  node?: InputMaybe<SampleMetadataSort>;
};

export type StatusSampleMetadataHasStatusConnectionWhere = {
  AND?: InputMaybe<Array<StatusSampleMetadataHasStatusConnectionWhere>>;
  NOT?: InputMaybe<StatusSampleMetadataHasStatusConnectionWhere>;
  OR?: InputMaybe<Array<StatusSampleMetadataHasStatusConnectionWhere>>;
  node?: InputMaybe<SampleMetadataWhere>;
};

export type StatusSampleMetadataHasStatusCreateFieldInput = {
  node: SampleMetadataCreateInput;
};

export type StatusSampleMetadataHasStatusDeleteFieldInput = {
  delete?: InputMaybe<SampleMetadataDeleteInput>;
  where?: InputMaybe<StatusSampleMetadataHasStatusConnectionWhere>;
};

export type StatusSampleMetadataHasStatusDisconnectFieldInput = {
  disconnect?: InputMaybe<SampleMetadataDisconnectInput>;
  where?: InputMaybe<StatusSampleMetadataHasStatusConnectionWhere>;
};

export type StatusSampleMetadataHasStatusFieldInput = {
  connect?: InputMaybe<Array<StatusSampleMetadataHasStatusConnectFieldInput>>;
  create?: InputMaybe<Array<StatusSampleMetadataHasStatusCreateFieldInput>>;
};

export type StatusSampleMetadataHasStatusNodeAggregationWhereInput = {
  AND?: InputMaybe<
    Array<StatusSampleMetadataHasStatusNodeAggregationWhereInput>
  >;
  NOT?: InputMaybe<StatusSampleMetadataHasStatusNodeAggregationWhereInput>;
  OR?: InputMaybe<
    Array<StatusSampleMetadataHasStatusNodeAggregationWhereInput>
  >;
  additionalProperties_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars["Float"]["input"]
  >;
  additionalProperties_AVERAGE_LENGTH_GT?: InputMaybe<
    Scalars["Float"]["input"]
  >;
  additionalProperties_AVERAGE_LENGTH_GTE?: InputMaybe<
    Scalars["Float"]["input"]
  >;
  additionalProperties_AVERAGE_LENGTH_LT?: InputMaybe<
    Scalars["Float"]["input"]
  >;
  additionalProperties_AVERAGE_LENGTH_LTE?: InputMaybe<
    Scalars["Float"]["input"]
  >;
  additionalProperties_LONGEST_LENGTH_EQUAL?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  additionalProperties_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  additionalProperties_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  additionalProperties_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  additionalProperties_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  additionalProperties_SHORTEST_LENGTH_EQUAL?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  additionalProperties_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  additionalProperties_SHORTEST_LENGTH_GTE?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  additionalProperties_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  additionalProperties_SHORTEST_LENGTH_LTE?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  baitSet_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  baitSet_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  baitSet_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  baitSet_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  baitSet_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  baitSet_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  baitSet_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  baitSet_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  baitSet_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  baitSet_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  baitSet_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  baitSet_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  baitSet_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  baitSet_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  baitSet_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  cfDNA2dBarcode_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  cfDNA2dBarcode_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  cfDNA2dBarcode_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  cfDNA2dBarcode_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  cfDNA2dBarcode_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  cfDNA2dBarcode_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  cfDNA2dBarcode_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  cfDNA2dBarcode_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  cfDNA2dBarcode_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  cfDNA2dBarcode_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  cfDNA2dBarcode_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  cfDNA2dBarcode_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  cfDNA2dBarcode_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  cfDNA2dBarcode_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  cfDNA2dBarcode_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  cmoInfoIgoId_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  cmoInfoIgoId_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  cmoInfoIgoId_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  cmoInfoIgoId_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  cmoInfoIgoId_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  cmoInfoIgoId_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  cmoInfoIgoId_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  cmoInfoIgoId_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  cmoInfoIgoId_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  cmoInfoIgoId_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  cmoInfoIgoId_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  cmoInfoIgoId_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  cmoInfoIgoId_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  cmoInfoIgoId_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  cmoInfoIgoId_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  cmoPatientId_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  cmoPatientId_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  cmoPatientId_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  cmoPatientId_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  cmoPatientId_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  cmoPatientId_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  cmoPatientId_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  cmoPatientId_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  cmoPatientId_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  cmoPatientId_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  cmoPatientId_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  cmoPatientId_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  cmoPatientId_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  cmoPatientId_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  cmoPatientId_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  cmoSampleIdFields_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars["Float"]["input"]
  >;
  cmoSampleIdFields_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  cmoSampleIdFields_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  cmoSampleIdFields_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  cmoSampleIdFields_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  cmoSampleIdFields_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  cmoSampleIdFields_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  cmoSampleIdFields_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  cmoSampleIdFields_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  cmoSampleIdFields_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  cmoSampleIdFields_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  cmoSampleIdFields_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  cmoSampleIdFields_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  cmoSampleIdFields_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  cmoSampleIdFields_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  cmoSampleName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  cmoSampleName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  cmoSampleName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  cmoSampleName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  cmoSampleName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  cmoSampleName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  cmoSampleName_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  cmoSampleName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  cmoSampleName_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  cmoSampleName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  cmoSampleName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  cmoSampleName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  cmoSampleName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  cmoSampleName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  cmoSampleName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  collectionYear_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  collectionYear_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  collectionYear_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  collectionYear_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  collectionYear_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  collectionYear_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  collectionYear_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  collectionYear_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  collectionYear_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  collectionYear_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  collectionYear_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  collectionYear_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  collectionYear_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  collectionYear_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  collectionYear_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  genePanel_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  genePanel_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  genePanel_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  genePanel_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  genePanel_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  genePanel_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  genePanel_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  genePanel_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  genePanel_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  genePanel_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  genePanel_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  genePanel_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  genePanel_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  genePanel_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  genePanel_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  igoRequestId_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  igoRequestId_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  igoRequestId_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  igoRequestId_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  igoRequestId_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  igoRequestId_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  igoRequestId_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  igoRequestId_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  igoRequestId_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  igoRequestId_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  igoRequestId_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  igoRequestId_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  igoRequestId_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  igoRequestId_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  igoRequestId_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  importDate_AVERAGE_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_AVERAGE_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_AVERAGE_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_AVERAGE_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_AVERAGE_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_MAX_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_MAX_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_MAX_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_MAX_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_MAX_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_MIN_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_MIN_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_MIN_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_MIN_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_MIN_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_SUM_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_SUM_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_SUM_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_SUM_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  importDate_SUM_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  investigatorSampleId_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars["Float"]["input"]
  >;
  investigatorSampleId_AVERAGE_LENGTH_GT?: InputMaybe<
    Scalars["Float"]["input"]
  >;
  investigatorSampleId_AVERAGE_LENGTH_GTE?: InputMaybe<
    Scalars["Float"]["input"]
  >;
  investigatorSampleId_AVERAGE_LENGTH_LT?: InputMaybe<
    Scalars["Float"]["input"]
  >;
  investigatorSampleId_AVERAGE_LENGTH_LTE?: InputMaybe<
    Scalars["Float"]["input"]
  >;
  investigatorSampleId_LONGEST_LENGTH_EQUAL?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  investigatorSampleId_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  investigatorSampleId_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  investigatorSampleId_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  investigatorSampleId_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  investigatorSampleId_SHORTEST_LENGTH_EQUAL?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  investigatorSampleId_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  investigatorSampleId_SHORTEST_LENGTH_GTE?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  investigatorSampleId_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  investigatorSampleId_SHORTEST_LENGTH_LTE?: InputMaybe<
    Scalars["Int"]["input"]
  >;
  libraries_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  libraries_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  libraries_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  libraries_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  libraries_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  libraries_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  libraries_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  libraries_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  libraries_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  libraries_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  libraries_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  libraries_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  libraries_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  libraries_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  libraries_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  oncotreeCode_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  oncotreeCode_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  oncotreeCode_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  oncotreeCode_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  oncotreeCode_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  oncotreeCode_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  oncotreeCode_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  oncotreeCode_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  oncotreeCode_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  oncotreeCode_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  oncotreeCode_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  oncotreeCode_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  oncotreeCode_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  oncotreeCode_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  oncotreeCode_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  preservation_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  preservation_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  preservation_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  preservation_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  preservation_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  preservation_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  preservation_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  preservation_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  preservation_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  preservation_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  preservation_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  preservation_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  preservation_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  preservation_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  preservation_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  primaryId_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  primaryId_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  primaryId_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  primaryId_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  primaryId_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  primaryId_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  primaryId_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  primaryId_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  primaryId_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  primaryId_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  primaryId_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  primaryId_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  primaryId_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  primaryId_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  primaryId_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  qcReports_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  qcReports_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  qcReports_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  qcReports_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  qcReports_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  qcReports_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  qcReports_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  qcReports_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  qcReports_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  qcReports_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  qcReports_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  qcReports_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  qcReports_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  qcReports_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  qcReports_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  sampleClass_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  sampleClass_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  sampleClass_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  sampleClass_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  sampleClass_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  sampleName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  sampleName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  sampleName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  sampleName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  sampleName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  sampleName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  sampleName_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  sampleName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  sampleName_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  sampleName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  sampleName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  sampleName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  sampleName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  sampleName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  sampleName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  sampleOrigin_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  sampleOrigin_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  sampleOrigin_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  sampleOrigin_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  sampleOrigin_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  sampleOrigin_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  sampleOrigin_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  sampleOrigin_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  sampleOrigin_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  sampleOrigin_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  sampleOrigin_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  sampleOrigin_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  sampleOrigin_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  sampleOrigin_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  sampleOrigin_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  sampleType_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  sampleType_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  sampleType_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  sampleType_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  sampleType_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  sampleType_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  sampleType_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  sampleType_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  sampleType_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  sampleType_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  sampleType_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  sampleType_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  sampleType_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  sampleType_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  sampleType_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  sex_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  sex_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  sex_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  sex_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  sex_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  sex_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  sex_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  sex_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  sex_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  sex_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  sex_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  sex_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  sex_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  sex_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  sex_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  species_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  species_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  species_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  species_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  species_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  species_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  species_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  species_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  species_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  species_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  species_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  species_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  species_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  species_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  species_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  tissueLocation_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  tissueLocation_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  tissueLocation_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  tissueLocation_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  tissueLocation_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  tissueLocation_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  tissueLocation_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  tissueLocation_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  tissueLocation_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  tissueLocation_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  tissueLocation_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  tissueLocation_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  tissueLocation_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  tissueLocation_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  tissueLocation_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  tubeId_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  tubeId_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  tubeId_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  tubeId_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  tubeId_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  tubeId_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  tubeId_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  tubeId_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  tubeId_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  tubeId_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  tubeId_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  tubeId_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  tubeId_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  tubeId_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  tubeId_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  tumorOrNormal_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  tumorOrNormal_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  tumorOrNormal_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  tumorOrNormal_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  tumorOrNormal_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  tumorOrNormal_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  tumorOrNormal_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  tumorOrNormal_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  tumorOrNormal_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  tumorOrNormal_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  tumorOrNormal_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  tumorOrNormal_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  tumorOrNormal_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  tumorOrNormal_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  tumorOrNormal_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type StatusSampleMetadataHasStatusRelationship = {
  __typename?: "StatusSampleMetadataHasStatusRelationship";
  cursor: Scalars["String"]["output"];
  node: SampleMetadata;
};

export type StatusSampleMetadataHasStatusUpdateConnectionInput = {
  node?: InputMaybe<SampleMetadataUpdateInput>;
};

export type StatusSampleMetadataHasStatusUpdateFieldInput = {
  connect?: InputMaybe<Array<StatusSampleMetadataHasStatusConnectFieldInput>>;
  create?: InputMaybe<Array<StatusSampleMetadataHasStatusCreateFieldInput>>;
  delete?: InputMaybe<Array<StatusSampleMetadataHasStatusDeleteFieldInput>>;
  disconnect?: InputMaybe<
    Array<StatusSampleMetadataHasStatusDisconnectFieldInput>
  >;
  update?: InputMaybe<StatusSampleMetadataHasStatusUpdateConnectionInput>;
  where?: InputMaybe<StatusSampleMetadataHasStatusConnectionWhere>;
};

export type StatusSampleMetadataSampleMetadataHasStatusAggregationSelection = {
  __typename?: "StatusSampleMetadataSampleMetadataHasStatusAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<StatusSampleMetadataSampleMetadataHasStatusNodeAggregateSelection>;
};

export type StatusSampleMetadataSampleMetadataHasStatusNodeAggregateSelection =
  {
    __typename?: "StatusSampleMetadataSampleMetadataHasStatusNodeAggregateSelection";
    additionalProperties: StringAggregateSelection;
    baitSet: StringAggregateSelection;
    cfDNA2dBarcode: StringAggregateSelection;
    cmoInfoIgoId: StringAggregateSelection;
    cmoPatientId: StringAggregateSelection;
    cmoSampleIdFields: StringAggregateSelection;
    cmoSampleName: StringAggregateSelection;
    collectionYear: StringAggregateSelection;
    genePanel: StringAggregateSelection;
    igoRequestId: StringAggregateSelection;
    importDate: BigIntAggregateSelection;
    investigatorSampleId: StringAggregateSelection;
    libraries: StringAggregateSelection;
    oncotreeCode: StringAggregateSelection;
    preservation: StringAggregateSelection;
    primaryId: StringAggregateSelection;
    qcReports: StringAggregateSelection;
    sampleClass: StringAggregateSelection;
    sampleName: StringAggregateSelection;
    sampleOrigin: StringAggregateSelection;
    sampleType: StringAggregateSelection;
    sex: StringAggregateSelection;
    species: StringAggregateSelection;
    tissueLocation: StringAggregateSelection;
    tubeId: StringAggregateSelection;
    tumorOrNormal: StringAggregateSelection;
  };

/** Fields to sort Statuses by. The order in which sorts are applied is not guaranteed when specifying many fields in one StatusSort object. */
export type StatusSort = {
  validationReport?: InputMaybe<SortDirection>;
  validationStatus?: InputMaybe<SortDirection>;
};

export type StatusUpdateInput = {
  requestMetadataHasStatus?: InputMaybe<
    Array<StatusRequestMetadataHasStatusUpdateFieldInput>
  >;
  sampleMetadataHasStatus?: InputMaybe<
    Array<StatusSampleMetadataHasStatusUpdateFieldInput>
  >;
  validationReport?: InputMaybe<Scalars["String"]["input"]>;
  validationStatus?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type StatusWhere = {
  AND?: InputMaybe<Array<StatusWhere>>;
  NOT?: InputMaybe<StatusWhere>;
  OR?: InputMaybe<Array<StatusWhere>>;
  requestMetadataHasStatusAggregate?: InputMaybe<StatusRequestMetadataHasStatusAggregateInput>;
  /** Return Statuses where all of the related StatusRequestMetadataHasStatusConnections match this filter */
  requestMetadataHasStatusConnection_ALL?: InputMaybe<StatusRequestMetadataHasStatusConnectionWhere>;
  /** Return Statuses where none of the related StatusRequestMetadataHasStatusConnections match this filter */
  requestMetadataHasStatusConnection_NONE?: InputMaybe<StatusRequestMetadataHasStatusConnectionWhere>;
  /** Return Statuses where one of the related StatusRequestMetadataHasStatusConnections match this filter */
  requestMetadataHasStatusConnection_SINGLE?: InputMaybe<StatusRequestMetadataHasStatusConnectionWhere>;
  /** Return Statuses where some of the related StatusRequestMetadataHasStatusConnections match this filter */
  requestMetadataHasStatusConnection_SOME?: InputMaybe<StatusRequestMetadataHasStatusConnectionWhere>;
  /** Return Statuses where all of the related RequestMetadata match this filter */
  requestMetadataHasStatus_ALL?: InputMaybe<RequestMetadataWhere>;
  /** Return Statuses where none of the related RequestMetadata match this filter */
  requestMetadataHasStatus_NONE?: InputMaybe<RequestMetadataWhere>;
  /** Return Statuses where one of the related RequestMetadata match this filter */
  requestMetadataHasStatus_SINGLE?: InputMaybe<RequestMetadataWhere>;
  /** Return Statuses where some of the related RequestMetadata match this filter */
  requestMetadataHasStatus_SOME?: InputMaybe<RequestMetadataWhere>;
  sampleMetadataHasStatusAggregate?: InputMaybe<StatusSampleMetadataHasStatusAggregateInput>;
  /** Return Statuses where all of the related StatusSampleMetadataHasStatusConnections match this filter */
  sampleMetadataHasStatusConnection_ALL?: InputMaybe<StatusSampleMetadataHasStatusConnectionWhere>;
  /** Return Statuses where none of the related StatusSampleMetadataHasStatusConnections match this filter */
  sampleMetadataHasStatusConnection_NONE?: InputMaybe<StatusSampleMetadataHasStatusConnectionWhere>;
  /** Return Statuses where one of the related StatusSampleMetadataHasStatusConnections match this filter */
  sampleMetadataHasStatusConnection_SINGLE?: InputMaybe<StatusSampleMetadataHasStatusConnectionWhere>;
  /** Return Statuses where some of the related StatusSampleMetadataHasStatusConnections match this filter */
  sampleMetadataHasStatusConnection_SOME?: InputMaybe<StatusSampleMetadataHasStatusConnectionWhere>;
  /** Return Statuses where all of the related SampleMetadata match this filter */
  sampleMetadataHasStatus_ALL?: InputMaybe<SampleMetadataWhere>;
  /** Return Statuses where none of the related SampleMetadata match this filter */
  sampleMetadataHasStatus_NONE?: InputMaybe<SampleMetadataWhere>;
  /** Return Statuses where one of the related SampleMetadata match this filter */
  sampleMetadataHasStatus_SINGLE?: InputMaybe<SampleMetadataWhere>;
  /** Return Statuses where some of the related SampleMetadata match this filter */
  sampleMetadataHasStatus_SOME?: InputMaybe<SampleMetadataWhere>;
  validationReport?: InputMaybe<Scalars["String"]["input"]>;
  validationReport_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  validationReport_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  validationReport_IN?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  validationReport_MATCHES?: InputMaybe<Scalars["String"]["input"]>;
  validationReport_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  validationStatus?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type StatusesConnection = {
  __typename?: "StatusesConnection";
  edges: Array<StatusEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type StringAggregateSelection = {
  __typename?: "StringAggregateSelection";
  longest?: Maybe<Scalars["String"]["output"]>;
  shortest?: Maybe<Scalars["String"]["output"]>;
};

export type Tempo = {
  __typename?: "Tempo";
  accessLevel?: Maybe<Scalars["String"]["output"]>;
  billed?: Maybe<Scalars["Boolean"]["output"]>;
  billedBy?: Maybe<Scalars["String"]["output"]>;
  costCenter?: Maybe<Scalars["String"]["output"]>;
  custodianInformation?: Maybe<Scalars["String"]["output"]>;
  embargoDate?: Maybe<Scalars["String"]["output"]>;
  hasEventBamCompletes: Array<BamComplete>;
  hasEventBamCompletesAggregate?: Maybe<TempoBamCompleteHasEventBamCompletesAggregationSelection>;
  hasEventBamCompletesConnection: TempoHasEventBamCompletesConnection;
  hasEventMafCompletes: Array<MafComplete>;
  hasEventMafCompletesAggregate?: Maybe<TempoMafCompleteHasEventMafCompletesAggregationSelection>;
  hasEventMafCompletesConnection: TempoHasEventMafCompletesConnection;
  hasEventQcCompletes: Array<QcComplete>;
  hasEventQcCompletesAggregate?: Maybe<TempoQcCompleteHasEventQcCompletesAggregationSelection>;
  hasEventQcCompletesConnection: TempoHasEventQcCompletesConnection;
  initialPipelineRunDate?: Maybe<Scalars["String"]["output"]>;
  samplesHasTempo: Array<Sample>;
  samplesHasTempoAggregate?: Maybe<TempoSampleSamplesHasTempoAggregationSelection>;
  samplesHasTempoConnection: TempoSamplesHasTempoConnection;
  smileTempoId: Scalars["String"]["output"];
};

export type TempoHasEventBamCompletesArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  options?: InputMaybe<BamCompleteOptions>;
  where?: InputMaybe<BamCompleteWhere>;
};

export type TempoHasEventBamCompletesAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<BamCompleteWhere>;
};

export type TempoHasEventBamCompletesConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<TempoHasEventBamCompletesConnectionSort>>;
  where?: InputMaybe<TempoHasEventBamCompletesConnectionWhere>;
};

export type TempoHasEventMafCompletesArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  options?: InputMaybe<MafCompleteOptions>;
  where?: InputMaybe<MafCompleteWhere>;
};

export type TempoHasEventMafCompletesAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<MafCompleteWhere>;
};

export type TempoHasEventMafCompletesConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<TempoHasEventMafCompletesConnectionSort>>;
  where?: InputMaybe<TempoHasEventMafCompletesConnectionWhere>;
};

export type TempoHasEventQcCompletesArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  options?: InputMaybe<QcCompleteOptions>;
  where?: InputMaybe<QcCompleteWhere>;
};

export type TempoHasEventQcCompletesAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<QcCompleteWhere>;
};

export type TempoHasEventQcCompletesConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<TempoHasEventQcCompletesConnectionSort>>;
  where?: InputMaybe<TempoHasEventQcCompletesConnectionWhere>;
};

export type TempoSamplesHasTempoArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  options?: InputMaybe<SampleOptions>;
  where?: InputMaybe<SampleWhere>;
};

export type TempoSamplesHasTempoAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<SampleWhere>;
};

export type TempoSamplesHasTempoConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<TempoSamplesHasTempoConnectionSort>>;
  where?: InputMaybe<TempoSamplesHasTempoConnectionWhere>;
};

export type TempoAggregateSelection = {
  __typename?: "TempoAggregateSelection";
  accessLevel: StringAggregateSelection;
  billedBy: StringAggregateSelection;
  costCenter: StringAggregateSelection;
  count: Scalars["Int"]["output"];
  custodianInformation: StringAggregateSelection;
  embargoDate: StringAggregateSelection;
  initialPipelineRunDate: StringAggregateSelection;
  smileTempoId: StringAggregateSelection;
};

export type TempoBamCompleteHasEventBamCompletesAggregationSelection = {
  __typename?: "TempoBamCompleteHasEventBamCompletesAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<TempoBamCompleteHasEventBamCompletesNodeAggregateSelection>;
};

export type TempoBamCompleteHasEventBamCompletesNodeAggregateSelection = {
  __typename?: "TempoBamCompleteHasEventBamCompletesNodeAggregateSelection";
  date: StringAggregateSelection;
  status: StringAggregateSelection;
};

export type TempoCohortRequest = {
  __typename?: "TempoCohortRequest";
  cohortId: Scalars["String"]["output"];
  endUsers: Scalars["String"]["output"];
  pmUsers: Scalars["String"]["output"];
  projectSubtitle: Scalars["String"]["output"];
  projectTitle: Scalars["String"]["output"];
  samples: Array<TempoCohortSample>;
  type: Scalars["String"]["output"];
};

export type TempoCohortRequestInput = {
  cohortId: Scalars["String"]["input"];
  endUsers: Array<Scalars["String"]["input"]>;
  pmUsers: Array<Scalars["String"]["input"]>;
  projectSubtitle: Scalars["String"]["input"];
  projectTitle: Scalars["String"]["input"];
  samples: Array<TempoCohortSampleInput>;
  type: Scalars["String"]["input"];
};

export type TempoCohortSample = {
  __typename?: "TempoCohortSample";
  cmoId?: Maybe<Scalars["String"]["output"]>;
  embargoDate?: Maybe<Scalars["String"]["output"]>;
  primaryId: Scalars["String"]["output"];
};

export type TempoCohortSampleInput = {
  cmoId?: InputMaybe<Scalars["String"]["input"]>;
  embargoDate?: InputMaybe<Scalars["String"]["input"]>;
  primaryId: Scalars["String"]["input"];
};

export type TempoConnectInput = {
  hasEventBamCompletes?: InputMaybe<
    Array<TempoHasEventBamCompletesConnectFieldInput>
  >;
  hasEventMafCompletes?: InputMaybe<
    Array<TempoHasEventMafCompletesConnectFieldInput>
  >;
  hasEventQcCompletes?: InputMaybe<
    Array<TempoHasEventQcCompletesConnectFieldInput>
  >;
  samplesHasTempo?: InputMaybe<Array<TempoSamplesHasTempoConnectFieldInput>>;
};

export type TempoConnectWhere = {
  node: TempoWhere;
};

export type TempoCreateInput = {
  accessLevel?: InputMaybe<Scalars["String"]["input"]>;
  billed?: InputMaybe<Scalars["Boolean"]["input"]>;
  billedBy?: InputMaybe<Scalars["String"]["input"]>;
  costCenter?: InputMaybe<Scalars["String"]["input"]>;
  custodianInformation?: InputMaybe<Scalars["String"]["input"]>;
  embargoDate?: InputMaybe<Scalars["String"]["input"]>;
  hasEventBamCompletes?: InputMaybe<TempoHasEventBamCompletesFieldInput>;
  hasEventMafCompletes?: InputMaybe<TempoHasEventMafCompletesFieldInput>;
  hasEventQcCompletes?: InputMaybe<TempoHasEventQcCompletesFieldInput>;
  initialPipelineRunDate?: InputMaybe<Scalars["String"]["input"]>;
  samplesHasTempo?: InputMaybe<TempoSamplesHasTempoFieldInput>;
  smileTempoId: Scalars["String"]["input"];
};

export type TempoDeleteInput = {
  hasEventBamCompletes?: InputMaybe<
    Array<TempoHasEventBamCompletesDeleteFieldInput>
  >;
  hasEventMafCompletes?: InputMaybe<
    Array<TempoHasEventMafCompletesDeleteFieldInput>
  >;
  hasEventQcCompletes?: InputMaybe<
    Array<TempoHasEventQcCompletesDeleteFieldInput>
  >;
  samplesHasTempo?: InputMaybe<Array<TempoSamplesHasTempoDeleteFieldInput>>;
};

export type TempoDisconnectInput = {
  hasEventBamCompletes?: InputMaybe<
    Array<TempoHasEventBamCompletesDisconnectFieldInput>
  >;
  hasEventMafCompletes?: InputMaybe<
    Array<TempoHasEventMafCompletesDisconnectFieldInput>
  >;
  hasEventQcCompletes?: InputMaybe<
    Array<TempoHasEventQcCompletesDisconnectFieldInput>
  >;
  samplesHasTempo?: InputMaybe<Array<TempoSamplesHasTempoDisconnectFieldInput>>;
};

export type TempoEdge = {
  __typename?: "TempoEdge";
  cursor: Scalars["String"]["output"];
  node: Tempo;
};

export type TempoHasEventBamCompletesAggregateInput = {
  AND?: InputMaybe<Array<TempoHasEventBamCompletesAggregateInput>>;
  NOT?: InputMaybe<TempoHasEventBamCompletesAggregateInput>;
  OR?: InputMaybe<Array<TempoHasEventBamCompletesAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  node?: InputMaybe<TempoHasEventBamCompletesNodeAggregationWhereInput>;
};

export type TempoHasEventBamCompletesConnectFieldInput = {
  connect?: InputMaybe<Array<BamCompleteConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  where?: InputMaybe<BamCompleteConnectWhere>;
};

export type TempoHasEventBamCompletesConnection = {
  __typename?: "TempoHasEventBamCompletesConnection";
  edges: Array<TempoHasEventBamCompletesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type TempoHasEventBamCompletesConnectionSort = {
  node?: InputMaybe<BamCompleteSort>;
};

export type TempoHasEventBamCompletesConnectionWhere = {
  AND?: InputMaybe<Array<TempoHasEventBamCompletesConnectionWhere>>;
  NOT?: InputMaybe<TempoHasEventBamCompletesConnectionWhere>;
  OR?: InputMaybe<Array<TempoHasEventBamCompletesConnectionWhere>>;
  node?: InputMaybe<BamCompleteWhere>;
};

export type TempoHasEventBamCompletesCreateFieldInput = {
  node: BamCompleteCreateInput;
};

export type TempoHasEventBamCompletesDeleteFieldInput = {
  delete?: InputMaybe<BamCompleteDeleteInput>;
  where?: InputMaybe<TempoHasEventBamCompletesConnectionWhere>;
};

export type TempoHasEventBamCompletesDisconnectFieldInput = {
  disconnect?: InputMaybe<BamCompleteDisconnectInput>;
  where?: InputMaybe<TempoHasEventBamCompletesConnectionWhere>;
};

export type TempoHasEventBamCompletesFieldInput = {
  connect?: InputMaybe<Array<TempoHasEventBamCompletesConnectFieldInput>>;
  create?: InputMaybe<Array<TempoHasEventBamCompletesCreateFieldInput>>;
};

export type TempoHasEventBamCompletesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<TempoHasEventBamCompletesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<TempoHasEventBamCompletesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<TempoHasEventBamCompletesNodeAggregationWhereInput>>;
  date_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  date_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  date_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  date_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  date_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  date_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  date_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  date_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  date_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  date_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  date_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  date_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  status_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  status_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  status_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  status_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  status_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  status_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  status_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  status_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  status_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  status_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  status_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  status_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  status_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  status_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  status_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type TempoHasEventBamCompletesRelationship = {
  __typename?: "TempoHasEventBamCompletesRelationship";
  cursor: Scalars["String"]["output"];
  node: BamComplete;
};

export type TempoHasEventBamCompletesUpdateConnectionInput = {
  node?: InputMaybe<BamCompleteUpdateInput>;
};

export type TempoHasEventBamCompletesUpdateFieldInput = {
  connect?: InputMaybe<Array<TempoHasEventBamCompletesConnectFieldInput>>;
  create?: InputMaybe<Array<TempoHasEventBamCompletesCreateFieldInput>>;
  delete?: InputMaybe<Array<TempoHasEventBamCompletesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<TempoHasEventBamCompletesDisconnectFieldInput>>;
  update?: InputMaybe<TempoHasEventBamCompletesUpdateConnectionInput>;
  where?: InputMaybe<TempoHasEventBamCompletesConnectionWhere>;
};

export type TempoHasEventMafCompletesAggregateInput = {
  AND?: InputMaybe<Array<TempoHasEventMafCompletesAggregateInput>>;
  NOT?: InputMaybe<TempoHasEventMafCompletesAggregateInput>;
  OR?: InputMaybe<Array<TempoHasEventMafCompletesAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  node?: InputMaybe<TempoHasEventMafCompletesNodeAggregationWhereInput>;
};

export type TempoHasEventMafCompletesConnectFieldInput = {
  connect?: InputMaybe<Array<MafCompleteConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  where?: InputMaybe<MafCompleteConnectWhere>;
};

export type TempoHasEventMafCompletesConnection = {
  __typename?: "TempoHasEventMafCompletesConnection";
  edges: Array<TempoHasEventMafCompletesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type TempoHasEventMafCompletesConnectionSort = {
  node?: InputMaybe<MafCompleteSort>;
};

export type TempoHasEventMafCompletesConnectionWhere = {
  AND?: InputMaybe<Array<TempoHasEventMafCompletesConnectionWhere>>;
  NOT?: InputMaybe<TempoHasEventMafCompletesConnectionWhere>;
  OR?: InputMaybe<Array<TempoHasEventMafCompletesConnectionWhere>>;
  node?: InputMaybe<MafCompleteWhere>;
};

export type TempoHasEventMafCompletesCreateFieldInput = {
  node: MafCompleteCreateInput;
};

export type TempoHasEventMafCompletesDeleteFieldInput = {
  delete?: InputMaybe<MafCompleteDeleteInput>;
  where?: InputMaybe<TempoHasEventMafCompletesConnectionWhere>;
};

export type TempoHasEventMafCompletesDisconnectFieldInput = {
  disconnect?: InputMaybe<MafCompleteDisconnectInput>;
  where?: InputMaybe<TempoHasEventMafCompletesConnectionWhere>;
};

export type TempoHasEventMafCompletesFieldInput = {
  connect?: InputMaybe<Array<TempoHasEventMafCompletesConnectFieldInput>>;
  create?: InputMaybe<Array<TempoHasEventMafCompletesCreateFieldInput>>;
};

export type TempoHasEventMafCompletesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<TempoHasEventMafCompletesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<TempoHasEventMafCompletesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<TempoHasEventMafCompletesNodeAggregationWhereInput>>;
  date_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  date_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  date_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  date_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  date_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  date_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  date_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  date_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  date_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  date_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  date_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  date_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  normalPrimaryId_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  normalPrimaryId_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  normalPrimaryId_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  normalPrimaryId_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  normalPrimaryId_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  normalPrimaryId_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  normalPrimaryId_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  normalPrimaryId_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  normalPrimaryId_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  normalPrimaryId_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  normalPrimaryId_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  normalPrimaryId_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  normalPrimaryId_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  normalPrimaryId_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  normalPrimaryId_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  status_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  status_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  status_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  status_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  status_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  status_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  status_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  status_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  status_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  status_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  status_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  status_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  status_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  status_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  status_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type TempoHasEventMafCompletesRelationship = {
  __typename?: "TempoHasEventMafCompletesRelationship";
  cursor: Scalars["String"]["output"];
  node: MafComplete;
};

export type TempoHasEventMafCompletesUpdateConnectionInput = {
  node?: InputMaybe<MafCompleteUpdateInput>;
};

export type TempoHasEventMafCompletesUpdateFieldInput = {
  connect?: InputMaybe<Array<TempoHasEventMafCompletesConnectFieldInput>>;
  create?: InputMaybe<Array<TempoHasEventMafCompletesCreateFieldInput>>;
  delete?: InputMaybe<Array<TempoHasEventMafCompletesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<TempoHasEventMafCompletesDisconnectFieldInput>>;
  update?: InputMaybe<TempoHasEventMafCompletesUpdateConnectionInput>;
  where?: InputMaybe<TempoHasEventMafCompletesConnectionWhere>;
};

export type TempoHasEventQcCompletesAggregateInput = {
  AND?: InputMaybe<Array<TempoHasEventQcCompletesAggregateInput>>;
  NOT?: InputMaybe<TempoHasEventQcCompletesAggregateInput>;
  OR?: InputMaybe<Array<TempoHasEventQcCompletesAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  node?: InputMaybe<TempoHasEventQcCompletesNodeAggregationWhereInput>;
};

export type TempoHasEventQcCompletesConnectFieldInput = {
  connect?: InputMaybe<Array<QcCompleteConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  where?: InputMaybe<QcCompleteConnectWhere>;
};

export type TempoHasEventQcCompletesConnection = {
  __typename?: "TempoHasEventQcCompletesConnection";
  edges: Array<TempoHasEventQcCompletesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type TempoHasEventQcCompletesConnectionSort = {
  node?: InputMaybe<QcCompleteSort>;
};

export type TempoHasEventQcCompletesConnectionWhere = {
  AND?: InputMaybe<Array<TempoHasEventQcCompletesConnectionWhere>>;
  NOT?: InputMaybe<TempoHasEventQcCompletesConnectionWhere>;
  OR?: InputMaybe<Array<TempoHasEventQcCompletesConnectionWhere>>;
  node?: InputMaybe<QcCompleteWhere>;
};

export type TempoHasEventQcCompletesCreateFieldInput = {
  node: QcCompleteCreateInput;
};

export type TempoHasEventQcCompletesDeleteFieldInput = {
  delete?: InputMaybe<QcCompleteDeleteInput>;
  where?: InputMaybe<TempoHasEventQcCompletesConnectionWhere>;
};

export type TempoHasEventQcCompletesDisconnectFieldInput = {
  disconnect?: InputMaybe<QcCompleteDisconnectInput>;
  where?: InputMaybe<TempoHasEventQcCompletesConnectionWhere>;
};

export type TempoHasEventQcCompletesFieldInput = {
  connect?: InputMaybe<Array<TempoHasEventQcCompletesConnectFieldInput>>;
  create?: InputMaybe<Array<TempoHasEventQcCompletesCreateFieldInput>>;
};

export type TempoHasEventQcCompletesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<TempoHasEventQcCompletesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<TempoHasEventQcCompletesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<TempoHasEventQcCompletesNodeAggregationWhereInput>>;
  date_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  date_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  date_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  date_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  date_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  date_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  date_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  date_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  date_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  date_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  date_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  date_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  reason_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  reason_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  reason_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  reason_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  reason_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  reason_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  reason_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  reason_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  reason_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  reason_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  reason_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  reason_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  reason_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  reason_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  reason_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  result_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  result_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  result_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  result_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  result_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  result_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  result_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  result_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  result_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  result_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  result_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  result_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  result_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  result_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  result_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  status_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  status_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  status_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  status_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  status_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  status_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  status_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  status_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  status_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  status_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  status_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  status_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  status_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  status_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  status_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type TempoHasEventQcCompletesRelationship = {
  __typename?: "TempoHasEventQcCompletesRelationship";
  cursor: Scalars["String"]["output"];
  node: QcComplete;
};

export type TempoHasEventQcCompletesUpdateConnectionInput = {
  node?: InputMaybe<QcCompleteUpdateInput>;
};

export type TempoHasEventQcCompletesUpdateFieldInput = {
  connect?: InputMaybe<Array<TempoHasEventQcCompletesConnectFieldInput>>;
  create?: InputMaybe<Array<TempoHasEventQcCompletesCreateFieldInput>>;
  delete?: InputMaybe<Array<TempoHasEventQcCompletesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<TempoHasEventQcCompletesDisconnectFieldInput>>;
  update?: InputMaybe<TempoHasEventQcCompletesUpdateConnectionInput>;
  where?: InputMaybe<TempoHasEventQcCompletesConnectionWhere>;
};

export type TempoMafCompleteHasEventMafCompletesAggregationSelection = {
  __typename?: "TempoMafCompleteHasEventMafCompletesAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<TempoMafCompleteHasEventMafCompletesNodeAggregateSelection>;
};

export type TempoMafCompleteHasEventMafCompletesNodeAggregateSelection = {
  __typename?: "TempoMafCompleteHasEventMafCompletesNodeAggregateSelection";
  date: StringAggregateSelection;
  normalPrimaryId: StringAggregateSelection;
  status: StringAggregateSelection;
};

export type TempoOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more TempoSort objects to sort Tempos by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<TempoSort>>;
};

export type TempoQcCompleteHasEventQcCompletesAggregationSelection = {
  __typename?: "TempoQcCompleteHasEventQcCompletesAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<TempoQcCompleteHasEventQcCompletesNodeAggregateSelection>;
};

export type TempoQcCompleteHasEventQcCompletesNodeAggregateSelection = {
  __typename?: "TempoQcCompleteHasEventQcCompletesNodeAggregateSelection";
  date: StringAggregateSelection;
  reason: StringAggregateSelection;
  result: StringAggregateSelection;
  status: StringAggregateSelection;
};

export type TempoRelationInput = {
  hasEventBamCompletes?: InputMaybe<
    Array<TempoHasEventBamCompletesCreateFieldInput>
  >;
  hasEventMafCompletes?: InputMaybe<
    Array<TempoHasEventMafCompletesCreateFieldInput>
  >;
  hasEventQcCompletes?: InputMaybe<
    Array<TempoHasEventQcCompletesCreateFieldInput>
  >;
  samplesHasTempo?: InputMaybe<Array<TempoSamplesHasTempoCreateFieldInput>>;
};

export type TempoSampleSamplesHasTempoAggregationSelection = {
  __typename?: "TempoSampleSamplesHasTempoAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<TempoSampleSamplesHasTempoNodeAggregateSelection>;
};

export type TempoSampleSamplesHasTempoNodeAggregateSelection = {
  __typename?: "TempoSampleSamplesHasTempoNodeAggregateSelection";
  datasource: StringAggregateSelection;
  sampleCategory: StringAggregateSelection;
  sampleClass: StringAggregateSelection;
  smileSampleId: StringAggregateSelection;
};

export type TempoSamplesHasTempoAggregateInput = {
  AND?: InputMaybe<Array<TempoSamplesHasTempoAggregateInput>>;
  NOT?: InputMaybe<TempoSamplesHasTempoAggregateInput>;
  OR?: InputMaybe<Array<TempoSamplesHasTempoAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  node?: InputMaybe<TempoSamplesHasTempoNodeAggregationWhereInput>;
};

export type TempoSamplesHasTempoConnectFieldInput = {
  connect?: InputMaybe<Array<SampleConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  where?: InputMaybe<SampleConnectWhere>;
};

export type TempoSamplesHasTempoConnection = {
  __typename?: "TempoSamplesHasTempoConnection";
  edges: Array<TempoSamplesHasTempoRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type TempoSamplesHasTempoConnectionSort = {
  node?: InputMaybe<SampleSort>;
};

export type TempoSamplesHasTempoConnectionWhere = {
  AND?: InputMaybe<Array<TempoSamplesHasTempoConnectionWhere>>;
  NOT?: InputMaybe<TempoSamplesHasTempoConnectionWhere>;
  OR?: InputMaybe<Array<TempoSamplesHasTempoConnectionWhere>>;
  node?: InputMaybe<SampleWhere>;
};

export type TempoSamplesHasTempoCreateFieldInput = {
  node: SampleCreateInput;
};

export type TempoSamplesHasTempoDeleteFieldInput = {
  delete?: InputMaybe<SampleDeleteInput>;
  where?: InputMaybe<TempoSamplesHasTempoConnectionWhere>;
};

export type TempoSamplesHasTempoDisconnectFieldInput = {
  disconnect?: InputMaybe<SampleDisconnectInput>;
  where?: InputMaybe<TempoSamplesHasTempoConnectionWhere>;
};

export type TempoSamplesHasTempoFieldInput = {
  connect?: InputMaybe<Array<TempoSamplesHasTempoConnectFieldInput>>;
  create?: InputMaybe<Array<TempoSamplesHasTempoCreateFieldInput>>;
};

export type TempoSamplesHasTempoNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<TempoSamplesHasTempoNodeAggregationWhereInput>>;
  NOT?: InputMaybe<TempoSamplesHasTempoNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<TempoSamplesHasTempoNodeAggregationWhereInput>>;
  datasource_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  datasource_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  datasource_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  datasource_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  datasource_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  datasource_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  datasource_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  datasource_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  datasource_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  datasource_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  datasource_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  datasource_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  datasource_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  datasource_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  datasource_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  sampleCategory_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  sampleCategory_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  sampleCategory_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  sampleCategory_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  sampleCategory_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  sampleCategory_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  sampleCategory_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  sampleCategory_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  sampleCategory_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  sampleCategory_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  sampleCategory_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  sampleCategory_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  sampleCategory_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  sampleCategory_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  sampleCategory_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  sampleClass_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  sampleClass_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  sampleClass_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  sampleClass_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  sampleClass_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  sampleClass_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  smileSampleId_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  smileSampleId_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  smileSampleId_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  smileSampleId_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  smileSampleId_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  smileSampleId_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  smileSampleId_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  smileSampleId_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  smileSampleId_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  smileSampleId_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  smileSampleId_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  smileSampleId_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  smileSampleId_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  smileSampleId_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  smileSampleId_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type TempoSamplesHasTempoRelationship = {
  __typename?: "TempoSamplesHasTempoRelationship";
  cursor: Scalars["String"]["output"];
  node: Sample;
};

export type TempoSamplesHasTempoUpdateConnectionInput = {
  node?: InputMaybe<SampleUpdateInput>;
};

export type TempoSamplesHasTempoUpdateFieldInput = {
  connect?: InputMaybe<Array<TempoSamplesHasTempoConnectFieldInput>>;
  create?: InputMaybe<Array<TempoSamplesHasTempoCreateFieldInput>>;
  delete?: InputMaybe<Array<TempoSamplesHasTempoDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<TempoSamplesHasTempoDisconnectFieldInput>>;
  update?: InputMaybe<TempoSamplesHasTempoUpdateConnectionInput>;
  where?: InputMaybe<TempoSamplesHasTempoConnectionWhere>;
};

/** Fields to sort Tempos by. The order in which sorts are applied is not guaranteed when specifying many fields in one TempoSort object. */
export type TempoSort = {
  accessLevel?: InputMaybe<SortDirection>;
  billed?: InputMaybe<SortDirection>;
  billedBy?: InputMaybe<SortDirection>;
  costCenter?: InputMaybe<SortDirection>;
  custodianInformation?: InputMaybe<SortDirection>;
  embargoDate?: InputMaybe<SortDirection>;
  initialPipelineRunDate?: InputMaybe<SortDirection>;
  smileTempoId?: InputMaybe<SortDirection>;
};

export type TempoUpdateInput = {
  accessLevel?: InputMaybe<Scalars["String"]["input"]>;
  billed?: InputMaybe<Scalars["Boolean"]["input"]>;
  billedBy?: InputMaybe<Scalars["String"]["input"]>;
  costCenter?: InputMaybe<Scalars["String"]["input"]>;
  custodianInformation?: InputMaybe<Scalars["String"]["input"]>;
  embargoDate?: InputMaybe<Scalars["String"]["input"]>;
  hasEventBamCompletes?: InputMaybe<
    Array<TempoHasEventBamCompletesUpdateFieldInput>
  >;
  hasEventMafCompletes?: InputMaybe<
    Array<TempoHasEventMafCompletesUpdateFieldInput>
  >;
  hasEventQcCompletes?: InputMaybe<
    Array<TempoHasEventQcCompletesUpdateFieldInput>
  >;
  initialPipelineRunDate?: InputMaybe<Scalars["String"]["input"]>;
  samplesHasTempo?: InputMaybe<Array<TempoSamplesHasTempoUpdateFieldInput>>;
  smileTempoId?: InputMaybe<Scalars["String"]["input"]>;
};

export type TempoWhere = {
  AND?: InputMaybe<Array<TempoWhere>>;
  NOT?: InputMaybe<TempoWhere>;
  OR?: InputMaybe<Array<TempoWhere>>;
  accessLevel?: InputMaybe<Scalars["String"]["input"]>;
  accessLevel_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  accessLevel_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  accessLevel_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  accessLevel_MATCHES?: InputMaybe<Scalars["String"]["input"]>;
  accessLevel_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  billed?: InputMaybe<Scalars["Boolean"]["input"]>;
  billedBy?: InputMaybe<Scalars["String"]["input"]>;
  billedBy_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  billedBy_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  billedBy_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  billedBy_MATCHES?: InputMaybe<Scalars["String"]["input"]>;
  billedBy_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  costCenter?: InputMaybe<Scalars["String"]["input"]>;
  costCenter_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  costCenter_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  costCenter_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  costCenter_MATCHES?: InputMaybe<Scalars["String"]["input"]>;
  costCenter_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  custodianInformation?: InputMaybe<Scalars["String"]["input"]>;
  custodianInformation_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  custodianInformation_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  custodianInformation_IN?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  custodianInformation_MATCHES?: InputMaybe<Scalars["String"]["input"]>;
  custodianInformation_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  embargoDate?: InputMaybe<Scalars["String"]["input"]>;
  embargoDate_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  embargoDate_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  embargoDate_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  embargoDate_MATCHES?: InputMaybe<Scalars["String"]["input"]>;
  embargoDate_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  hasEventBamCompletesAggregate?: InputMaybe<TempoHasEventBamCompletesAggregateInput>;
  /** Return Tempos where all of the related TempoHasEventBamCompletesConnections match this filter */
  hasEventBamCompletesConnection_ALL?: InputMaybe<TempoHasEventBamCompletesConnectionWhere>;
  /** Return Tempos where none of the related TempoHasEventBamCompletesConnections match this filter */
  hasEventBamCompletesConnection_NONE?: InputMaybe<TempoHasEventBamCompletesConnectionWhere>;
  /** Return Tempos where one of the related TempoHasEventBamCompletesConnections match this filter */
  hasEventBamCompletesConnection_SINGLE?: InputMaybe<TempoHasEventBamCompletesConnectionWhere>;
  /** Return Tempos where some of the related TempoHasEventBamCompletesConnections match this filter */
  hasEventBamCompletesConnection_SOME?: InputMaybe<TempoHasEventBamCompletesConnectionWhere>;
  /** Return Tempos where all of the related BamCompletes match this filter */
  hasEventBamCompletes_ALL?: InputMaybe<BamCompleteWhere>;
  /** Return Tempos where none of the related BamCompletes match this filter */
  hasEventBamCompletes_NONE?: InputMaybe<BamCompleteWhere>;
  /** Return Tempos where one of the related BamCompletes match this filter */
  hasEventBamCompletes_SINGLE?: InputMaybe<BamCompleteWhere>;
  /** Return Tempos where some of the related BamCompletes match this filter */
  hasEventBamCompletes_SOME?: InputMaybe<BamCompleteWhere>;
  hasEventMafCompletesAggregate?: InputMaybe<TempoHasEventMafCompletesAggregateInput>;
  /** Return Tempos where all of the related TempoHasEventMafCompletesConnections match this filter */
  hasEventMafCompletesConnection_ALL?: InputMaybe<TempoHasEventMafCompletesConnectionWhere>;
  /** Return Tempos where none of the related TempoHasEventMafCompletesConnections match this filter */
  hasEventMafCompletesConnection_NONE?: InputMaybe<TempoHasEventMafCompletesConnectionWhere>;
  /** Return Tempos where one of the related TempoHasEventMafCompletesConnections match this filter */
  hasEventMafCompletesConnection_SINGLE?: InputMaybe<TempoHasEventMafCompletesConnectionWhere>;
  /** Return Tempos where some of the related TempoHasEventMafCompletesConnections match this filter */
  hasEventMafCompletesConnection_SOME?: InputMaybe<TempoHasEventMafCompletesConnectionWhere>;
  /** Return Tempos where all of the related MafCompletes match this filter */
  hasEventMafCompletes_ALL?: InputMaybe<MafCompleteWhere>;
  /** Return Tempos where none of the related MafCompletes match this filter */
  hasEventMafCompletes_NONE?: InputMaybe<MafCompleteWhere>;
  /** Return Tempos where one of the related MafCompletes match this filter */
  hasEventMafCompletes_SINGLE?: InputMaybe<MafCompleteWhere>;
  /** Return Tempos where some of the related MafCompletes match this filter */
  hasEventMafCompletes_SOME?: InputMaybe<MafCompleteWhere>;
  hasEventQcCompletesAggregate?: InputMaybe<TempoHasEventQcCompletesAggregateInput>;
  /** Return Tempos where all of the related TempoHasEventQcCompletesConnections match this filter */
  hasEventQcCompletesConnection_ALL?: InputMaybe<TempoHasEventQcCompletesConnectionWhere>;
  /** Return Tempos where none of the related TempoHasEventQcCompletesConnections match this filter */
  hasEventQcCompletesConnection_NONE?: InputMaybe<TempoHasEventQcCompletesConnectionWhere>;
  /** Return Tempos where one of the related TempoHasEventQcCompletesConnections match this filter */
  hasEventQcCompletesConnection_SINGLE?: InputMaybe<TempoHasEventQcCompletesConnectionWhere>;
  /** Return Tempos where some of the related TempoHasEventQcCompletesConnections match this filter */
  hasEventQcCompletesConnection_SOME?: InputMaybe<TempoHasEventQcCompletesConnectionWhere>;
  /** Return Tempos where all of the related QcCompletes match this filter */
  hasEventQcCompletes_ALL?: InputMaybe<QcCompleteWhere>;
  /** Return Tempos where none of the related QcCompletes match this filter */
  hasEventQcCompletes_NONE?: InputMaybe<QcCompleteWhere>;
  /** Return Tempos where one of the related QcCompletes match this filter */
  hasEventQcCompletes_SINGLE?: InputMaybe<QcCompleteWhere>;
  /** Return Tempos where some of the related QcCompletes match this filter */
  hasEventQcCompletes_SOME?: InputMaybe<QcCompleteWhere>;
  initialPipelineRunDate?: InputMaybe<Scalars["String"]["input"]>;
  initialPipelineRunDate_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  initialPipelineRunDate_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  initialPipelineRunDate_IN?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  initialPipelineRunDate_MATCHES?: InputMaybe<Scalars["String"]["input"]>;
  initialPipelineRunDate_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  samplesHasTempoAggregate?: InputMaybe<TempoSamplesHasTempoAggregateInput>;
  /** Return Tempos where all of the related TempoSamplesHasTempoConnections match this filter */
  samplesHasTempoConnection_ALL?: InputMaybe<TempoSamplesHasTempoConnectionWhere>;
  /** Return Tempos where none of the related TempoSamplesHasTempoConnections match this filter */
  samplesHasTempoConnection_NONE?: InputMaybe<TempoSamplesHasTempoConnectionWhere>;
  /** Return Tempos where one of the related TempoSamplesHasTempoConnections match this filter */
  samplesHasTempoConnection_SINGLE?: InputMaybe<TempoSamplesHasTempoConnectionWhere>;
  /** Return Tempos where some of the related TempoSamplesHasTempoConnections match this filter */
  samplesHasTempoConnection_SOME?: InputMaybe<TempoSamplesHasTempoConnectionWhere>;
  /** Return Tempos where all of the related Samples match this filter */
  samplesHasTempo_ALL?: InputMaybe<SampleWhere>;
  /** Return Tempos where none of the related Samples match this filter */
  samplesHasTempo_NONE?: InputMaybe<SampleWhere>;
  /** Return Tempos where one of the related Samples match this filter */
  samplesHasTempo_SINGLE?: InputMaybe<SampleWhere>;
  /** Return Tempos where some of the related Samples match this filter */
  samplesHasTempo_SOME?: InputMaybe<SampleWhere>;
  smileTempoId?: InputMaybe<Scalars["String"]["input"]>;
  smileTempoId_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  smileTempoId_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  smileTempoId_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  smileTempoId_MATCHES?: InputMaybe<Scalars["String"]["input"]>;
  smileTempoId_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
};

export type TemposConnection = {
  __typename?: "TemposConnection";
  edges: Array<TempoEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type ToleratedSampleValidationError = {
  __typename?: "ToleratedSampleValidationError";
  primaryId: Scalars["String"]["output"];
  validationReport?: Maybe<Scalars["String"]["output"]>;
  validationStatus?: Maybe<Scalars["Boolean"]["output"]>;
};

export type UpdateBamCompletesMutationResponse = {
  __typename?: "UpdateBamCompletesMutationResponse";
  bamCompletes: Array<BamComplete>;
  info: UpdateInfo;
};

export type UpdateCohortCompletesMutationResponse = {
  __typename?: "UpdateCohortCompletesMutationResponse";
  cohortCompletes: Array<CohortComplete>;
  info: UpdateInfo;
};

export type UpdateCohortsMutationResponse = {
  __typename?: "UpdateCohortsMutationResponse";
  cohorts: Array<Cohort>;
  info: UpdateInfo;
};

export type UpdateDbGapsMutationResponse = {
  __typename?: "UpdateDbGapsMutationResponse";
  dbGaps: Array<DbGap>;
  info: UpdateInfo;
};

/** Information about the number of nodes and relationships created and deleted during an update mutation */
export type UpdateInfo = {
  __typename?: "UpdateInfo";
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars["String"]["output"]>;
  nodesCreated: Scalars["Int"]["output"];
  nodesDeleted: Scalars["Int"]["output"];
  relationshipsCreated: Scalars["Int"]["output"];
  relationshipsDeleted: Scalars["Int"]["output"];
};

export type UpdateMafCompletesMutationResponse = {
  __typename?: "UpdateMafCompletesMutationResponse";
  info: UpdateInfo;
  mafCompletes: Array<MafComplete>;
};

export type UpdatePatientAliasesMutationResponse = {
  __typename?: "UpdatePatientAliasesMutationResponse";
  info: UpdateInfo;
  patientAliases: Array<PatientAlias>;
};

export type UpdatePatientsMutationResponse = {
  __typename?: "UpdatePatientsMutationResponse";
  info: UpdateInfo;
  patients: Array<Patient>;
};

export type UpdateProjectsMutationResponse = {
  __typename?: "UpdateProjectsMutationResponse";
  info: UpdateInfo;
  projects: Array<Project>;
};

export type UpdateQcCompletesMutationResponse = {
  __typename?: "UpdateQcCompletesMutationResponse";
  info: UpdateInfo;
  qcCompletes: Array<QcComplete>;
};

export type UpdateRequestMetadataMutationResponse = {
  __typename?: "UpdateRequestMetadataMutationResponse";
  info: UpdateInfo;
  requestMetadata: Array<RequestMetadata>;
};

export type UpdateRequestsMutationResponse = {
  __typename?: "UpdateRequestsMutationResponse";
  info: UpdateInfo;
  requests: Array<Request>;
};

export type UpdateSampleAliasesMutationResponse = {
  __typename?: "UpdateSampleAliasesMutationResponse";
  info: UpdateInfo;
  sampleAliases: Array<SampleAlias>;
};

export type UpdateSampleMetadataMutationResponse = {
  __typename?: "UpdateSampleMetadataMutationResponse";
  info: UpdateInfo;
  sampleMetadata: Array<SampleMetadata>;
};

export type UpdateSamplesMutationResponse = {
  __typename?: "UpdateSamplesMutationResponse";
  info: UpdateInfo;
  samples: Array<Sample>;
};

export type UpdateStatusesMutationResponse = {
  __typename?: "UpdateStatusesMutationResponse";
  info: UpdateInfo;
  statuses: Array<Status>;
};

export type UpdateTemposMutationResponse = {
  __typename?: "UpdateTemposMutationResponse";
  info: UpdateInfo;
  tempos: Array<Tempo>;
};

export type ValidationAdvice = {
  __typename?: "ValidationAdvice";
  advice: Scalars["String"]["output"];
  suggestedSteps: Array<Scalars["String"]["output"]>;
};

export type DashboardRequestsQueryVariables = Exact<{
  searchVals?: InputMaybe<
    Array<Scalars["String"]["input"]> | Scalars["String"]["input"]
  >;
  columnFilters?: InputMaybe<
    Array<DashboardRecordColumnFilter> | DashboardRecordColumnFilter
  >;
  sort: DashboardRecordSort;
  limit: Scalars["Int"]["input"];
  offset: Scalars["Int"]["input"];
}>;

export type DashboardRequestsQuery = {
  __typename?: "Query";
  dashboardRequests: Array<{
    __typename?: "DashboardRequest";
    igoRequestId: string;
    igoProjectId?: string | null;
    ilabRequestId?: string | null;
    igoDeliveryDate?: string | null;
    validationReport?: string | null;
    validationStatus?: boolean | null;
    importDate?: string | null;
    totalSampleCount?: number | null;
    projectManagerName?: string | null;
    investigatorName?: string | null;
    investigatorEmail?: string | null;
    piEmail?: string | null;
    dataAnalystName?: string | null;
    dataAnalystEmail?: string | null;
    genePanel?: string | null;
    labHeadName?: string | null;
    labHeadEmail?: string | null;
    qcAccessEmails?: string | null;
    dataAccessEmails?: string | null;
    bicAnalysis?: boolean | null;
    isCmoRequest?: boolean | null;
    otherContactEmails?: string | null;
    _total?: number | null;
    toleratedSampleErrors?: Array<{
      __typename?: "ToleratedSampleValidationError";
      primaryId: string;
      validationStatus?: boolean | null;
      validationReport?: string | null;
    } | null> | null;
  }>;
};

export type DashboardPatientsQueryVariables = Exact<{
  searchVals?: InputMaybe<
    Array<Scalars["String"]["input"]> | Scalars["String"]["input"]
  >;
  columnFilters?: InputMaybe<
    Array<DashboardRecordColumnFilter> | DashboardRecordColumnFilter
  >;
  sort: DashboardRecordSort;
  limit: Scalars["Int"]["input"];
  offset: Scalars["Int"]["input"];
  phiEnabled?: InputMaybe<Scalars["Boolean"]["input"]>;
}>;

export type DashboardPatientsQuery = {
  __typename?: "Query";
  dashboardPatients: Array<{
    __typename?: "DashboardPatient";
    smilePatientId: string;
    cmoPatientId?: string | null;
    dmpPatientId?: string | null;
    totalSampleCount?: number | null;
    cmoSampleIds?: string | null;
    consentPartA?: string | null;
    consentPartC?: string | null;
    inDbGap?: boolean | null;
    mrn?: string | null;
    anchorSequencingDate?: string | null;
    anchorOncotreeCode?: string | null;
    race?: string | null;
    _total?: number | null;
  }>;
};

export type DashboardCohortsQueryVariables = Exact<{
  searchVals?: InputMaybe<
    Array<Scalars["String"]["input"]> | Scalars["String"]["input"]
  >;
  columnFilters?: InputMaybe<
    Array<DashboardRecordColumnFilter> | DashboardRecordColumnFilter
  >;
  sort: DashboardRecordSort;
  limit: Scalars["Int"]["input"];
  offset: Scalars["Int"]["input"];
}>;

export type DashboardCohortsQuery = {
  __typename?: "Query";
  dashboardCohorts: Array<{
    __typename?: "DashboardCohort";
    cohortId: string;
    totalSampleCount?: number | null;
    billed?: string | null;
    initialCohortDeliveryDate?: string | null;
    importDate?: string | null;
    endUsers?: string | null;
    pmUsers?: string | null;
    projectTitle?: string | null;
    projectSubtitle?: string | null;
    status?: string | null;
    type?: string | null;
    pipelineVersion?: string | null;
    searchableSampleIds?: string | null;
    _total?: number | null;
    _uniqueSampleCount?: number | null;
  }>;
};

export type DashboardSamplesQueryVariables = Exact<{
  searchVals?: InputMaybe<
    Array<Scalars["String"]["input"]> | Scalars["String"]["input"]
  >;
  recordContexts?: InputMaybe<
    | Array<InputMaybe<DashboardRecordContext>>
    | InputMaybe<DashboardRecordContext>
  >;
  sort: DashboardRecordSort;
  columnFilters?: InputMaybe<
    Array<DashboardRecordColumnFilter> | DashboardRecordColumnFilter
  >;
  limit: Scalars["Int"]["input"];
  offset: Scalars["Int"]["input"];
  phiEnabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  includeDemographics?: InputMaybe<Scalars["Boolean"]["input"]>;
}>;

export type DashboardSamplesQuery = {
  __typename?: "Query";
  dashboardSamples: Array<{
    __typename?: "DashboardSample";
    sequencingDate?: string | null;
    molecularAccessionNumber?: string | null;
    race?: string | null;
    _total?: number | null;
    smileSampleId: string;
    revisable?: boolean | null;
    sampleCategory: string;
    recordId: string;
    primaryId?: string | null;
    cmoSampleName?: string | null;
    importDate?: string | null;
    cmoPatientId?: string | null;
    investigatorSampleId?: string | null;
    sampleType?: string | null;
    species?: string | null;
    genePanel?: string | null;
    baitSet?: string | null;
    preservation?: string | null;
    tumorOrNormal?: string | null;
    sampleClass?: string | null;
    oncotreeCode?: string | null;
    collectionYear?: string | null;
    sampleOrigin?: string | null;
    tissueLocation?: string | null;
    sex?: string | null;
    cfDNA2dBarcode?: string | null;
    igoComplete?: boolean | null;
    recipe?: string | null;
    altId?: string | null;
    analyteType?: string | null;
    historicalCmoSampleNames?: string | null;
    instrumentModel?: string | null;
    platform?: string | null;
    igoSampleStatus?: string | null;
    dmpRecommendedCoverage?: string | null;
    changelog?: string | null;
    validationReport?: string | null;
    validationStatus?: boolean | null;
    cancerType?: string | null;
    cancerTypeDetailed?: string | null;
    igoDeliveryDate?: string | null;
    billed?: boolean | null;
    costCenter?: string | null;
    billedBy?: string | null;
    custodianInformation?: string | null;
    accessLevel?: string | null;
    initialPipelineRunDate?: string | null;
    embargoDate?: string | null;
    bamCompleteDate?: string | null;
    bamCompleteStatus?: string | null;
    mafCompleteDate?: string | null;
    mafCompleteNormalPrimaryId?: string | null;
    mafCompleteStatus?: string | null;
    qcCompleteDate?: string | null;
    qcCompleteResult?: string | null;
    qcCompleteReason?: string | null;
    qcCompleteStatus?: string | null;
    sampleCohortIds?: string | null;
    dbGapStudy?: string | null;
    irbConsentProtocol?: string | null;
    dmpPatientAlias?: string | null;
    igoQcReports?: Array<{
      __typename?: "IgoQcReport";
      qcReportType?: string | null;
      IGORecommendation?: string | null;
      comments?: string | null;
      investigatorDecision?: string | null;
    } | null> | null;
  }>;
};

export type DashboardSampleHistoryQueryVariables = Exact<{
  searchVals: Array<Scalars["String"]["input"]> | Scalars["String"]["input"];
  sort: DashboardRecordSort;
  limit: Scalars["Int"]["input"];
  offset: Scalars["Int"]["input"];
}>;

export type DashboardSampleHistoryQuery = {
  __typename?: "Query";
  dashboardSampleHistory: Array<{
    __typename?: "DashboardSample";
    _total?: number | null;
    smileSampleId: string;
    revisable?: boolean | null;
    sampleCategory: string;
    recordId: string;
    primaryId?: string | null;
    cmoSampleName?: string | null;
    importDate?: string | null;
    cmoPatientId?: string | null;
    investigatorSampleId?: string | null;
    sampleType?: string | null;
    species?: string | null;
    genePanel?: string | null;
    baitSet?: string | null;
    preservation?: string | null;
    tumorOrNormal?: string | null;
    sampleClass?: string | null;
    oncotreeCode?: string | null;
    collectionYear?: string | null;
    sampleOrigin?: string | null;
    tissueLocation?: string | null;
    sex?: string | null;
    cfDNA2dBarcode?: string | null;
    igoComplete?: boolean | null;
    recipe?: string | null;
    altId?: string | null;
    analyteType?: string | null;
    historicalCmoSampleNames?: string | null;
    instrumentModel?: string | null;
    platform?: string | null;
    igoSampleStatus?: string | null;
    dmpRecommendedCoverage?: string | null;
    changelog?: string | null;
    validationReport?: string | null;
    validationStatus?: boolean | null;
    cancerType?: string | null;
    cancerTypeDetailed?: string | null;
    igoDeliveryDate?: string | null;
    billed?: boolean | null;
    costCenter?: string | null;
    billedBy?: string | null;
    custodianInformation?: string | null;
    accessLevel?: string | null;
    initialPipelineRunDate?: string | null;
    embargoDate?: string | null;
    bamCompleteDate?: string | null;
    bamCompleteStatus?: string | null;
    mafCompleteDate?: string | null;
    mafCompleteNormalPrimaryId?: string | null;
    mafCompleteStatus?: string | null;
    qcCompleteDate?: string | null;
    qcCompleteResult?: string | null;
    qcCompleteReason?: string | null;
    qcCompleteStatus?: string | null;
    sampleCohortIds?: string | null;
    dbGapStudy?: string | null;
    irbConsentProtocol?: string | null;
    dmpPatientAlias?: string | null;
  }>;
};

export type DashboardSamplePartsFragment = {
  __typename?: "DashboardSample";
  smileSampleId: string;
  revisable?: boolean | null;
  sampleCategory: string;
};

export type DashboardSampleMetadataPartsFragment = {
  __typename?: "DashboardSample";
  recordId: string;
  primaryId?: string | null;
  cmoSampleName?: string | null;
  importDate?: string | null;
  cmoPatientId?: string | null;
  investigatorSampleId?: string | null;
  sampleType?: string | null;
  species?: string | null;
  genePanel?: string | null;
  baitSet?: string | null;
  preservation?: string | null;
  tumorOrNormal?: string | null;
  sampleClass?: string | null;
  oncotreeCode?: string | null;
  collectionYear?: string | null;
  sampleOrigin?: string | null;
  tissueLocation?: string | null;
  sex?: string | null;
  cfDNA2dBarcode?: string | null;
  igoComplete?: boolean | null;
  recipe?: string | null;
  altId?: string | null;
  analyteType?: string | null;
  historicalCmoSampleNames?: string | null;
  instrumentModel?: string | null;
  platform?: string | null;
  igoSampleStatus?: string | null;
  dmpRecommendedCoverage?: string | null;
  changelog?: string | null;
  validationReport?: string | null;
  validationStatus?: boolean | null;
  cancerType?: string | null;
  cancerTypeDetailed?: string | null;
  igoDeliveryDate?: string | null;
};

export type IgoQcReportPartsFragment = {
  __typename?: "DashboardSample";
  igoQcReports?: Array<{
    __typename?: "IgoQcReport";
    qcReportType?: string | null;
    IGORecommendation?: string | null;
    comments?: string | null;
    investigatorDecision?: string | null;
  } | null> | null;
};

export type DashboardTempoPartsFragment = {
  __typename?: "DashboardSample";
  billed?: boolean | null;
  costCenter?: string | null;
  billedBy?: string | null;
  custodianInformation?: string | null;
  accessLevel?: string | null;
  initialPipelineRunDate?: string | null;
  embargoDate?: string | null;
  bamCompleteDate?: string | null;
  bamCompleteStatus?: string | null;
  mafCompleteDate?: string | null;
  mafCompleteNormalPrimaryId?: string | null;
  mafCompleteStatus?: string | null;
  qcCompleteDate?: string | null;
  qcCompleteResult?: string | null;
  qcCompleteReason?: string | null;
  qcCompleteStatus?: string | null;
  sampleCohortIds?: string | null;
};

export type DashboardDbGapPartsFragment = {
  __typename?: "DashboardSample";
  dbGapStudy?: string | null;
  irbConsentProtocol?: string | null;
};

export type DashboardPatientPartsFragment = {
  __typename?: "DashboardSample";
  dmpPatientAlias?: string | null;
};

export type RequestPartsFragment = {
  __typename?: "Request";
  igoRequestId: string;
  igoProjectId: string;
  ilabRequestId?: string | null;
  igoDeliveryDate?: any | null;
  genePanel: string;
  dataAnalystName: string;
  dataAnalystEmail: string;
  dataAccessEmails: string;
  bicAnalysis: boolean;
  investigatorEmail: string;
  investigatorName: string;
  isCmoRequest: boolean;
  labHeadEmail: string;
  labHeadName: string;
  libraryType?: string | null;
  otherContactEmails: string;
  piEmail: string;
  projectManagerName: string;
  qcAccessEmails: string;
  smileRequestId: string;
};

export type UpdateDashboardSamplesMutationVariables = Exact<{
  newDashboardSamples: Array<DashboardSampleInput> | DashboardSampleInput;
}>;

export type UpdateDashboardSamplesMutation = {
  __typename?: "Mutation";
  updateDashboardSamples?: Array<{
    __typename?: "DashboardSample";
    smileSampleId: string;
    revisable?: boolean | null;
    sampleCategory: string;
    recordId: string;
    primaryId?: string | null;
    cmoSampleName?: string | null;
    importDate?: string | null;
    cmoPatientId?: string | null;
    investigatorSampleId?: string | null;
    sampleType?: string | null;
    species?: string | null;
    genePanel?: string | null;
    baitSet?: string | null;
    preservation?: string | null;
    tumorOrNormal?: string | null;
    sampleClass?: string | null;
    oncotreeCode?: string | null;
    collectionYear?: string | null;
    sampleOrigin?: string | null;
    tissueLocation?: string | null;
    sex?: string | null;
    cfDNA2dBarcode?: string | null;
    igoComplete?: boolean | null;
    recipe?: string | null;
    altId?: string | null;
    analyteType?: string | null;
    historicalCmoSampleNames?: string | null;
    instrumentModel?: string | null;
    platform?: string | null;
    igoSampleStatus?: string | null;
    dmpRecommendedCoverage?: string | null;
    changelog?: string | null;
    validationReport?: string | null;
    validationStatus?: boolean | null;
    cancerType?: string | null;
    cancerTypeDetailed?: string | null;
    igoDeliveryDate?: string | null;
    billed?: boolean | null;
    costCenter?: string | null;
    billedBy?: string | null;
    custodianInformation?: string | null;
    accessLevel?: string | null;
    initialPipelineRunDate?: string | null;
    embargoDate?: string | null;
    bamCompleteDate?: string | null;
    bamCompleteStatus?: string | null;
    mafCompleteDate?: string | null;
    mafCompleteNormalPrimaryId?: string | null;
    mafCompleteStatus?: string | null;
    qcCompleteDate?: string | null;
    qcCompleteResult?: string | null;
    qcCompleteReason?: string | null;
    qcCompleteStatus?: string | null;
    sampleCohortIds?: string | null;
    dbGapStudy?: string | null;
    irbConsentProtocol?: string | null;
    igoQcReports?: Array<{
      __typename?: "IgoQcReport";
      qcReportType?: string | null;
      IGORecommendation?: string | null;
      comments?: string | null;
      investigatorDecision?: string | null;
    } | null> | null;
  } | null> | null;
};

export type AllBlockedCohortIdsQueryVariables = Exact<{ [key: string]: never }>;

export type AllBlockedCohortIdsQuery = {
  __typename?: "Query";
  allBlockedCohortIds: Array<string>;
};

export type GetValidationAdviceQueryVariables = Exact<{
  validationReport: Scalars["String"]["input"];
  recordType: Scalars["String"]["input"];
  recordId?: InputMaybe<Scalars["String"]["input"]>;
  igoQcReports?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type GetValidationAdviceQuery = {
  __typename?: "Query";
  getValidationAdvice?: {
    __typename?: "ValidationAdvice";
    advice: string;
    suggestedSteps: Array<string>;
  } | null;
};

export type AllAnchorSeqDateDataQueryVariables = Exact<{
  phiEnabled?: InputMaybe<Scalars["Boolean"]["input"]>;
}>;

export type AllAnchorSeqDateDataQuery = {
  __typename?: "Query";
  allAnchorSeqDateData: Array<{
    __typename?: "AnchorSeqDateData";
    MRN: string;
    DMP_PATIENT_ID: string;
    ANCHOR_SEQUENCING_DATE: string;
    ANCHOR_ONCOTREE_CODE: string;
  }>;
};

export type UpdateTempoCohortMutationVariables = Exact<{
  dashboardCohort: DashboardCohortInput;
}>;

export type UpdateTempoCohortMutation = {
  __typename?: "Mutation";
  updateTempoCohort?: {
    __typename?: "DashboardCohort";
    cohortId: string;
    totalSampleCount?: number | null;
    billed?: string | null;
    initialCohortDeliveryDate?: string | null;
    importDate?: string | null;
    endUsers?: string | null;
    pmUsers?: string | null;
    projectTitle?: string | null;
    projectSubtitle?: string | null;
    status?: string | null;
    type?: string | null;
    pipelineVersion?: string | null;
    searchableSampleIds?: string | null;
    _total?: number | null;
    _uniqueSampleCount?: number | null;
  } | null;
};

export type PublishNewTempoCohortRequestMutationVariables = Exact<{
  tempoCohortRequest: TempoCohortRequestInput;
}>;

export type PublishNewTempoCohortRequestMutation = {
  __typename?: "Mutation";
  publishNewTempoCohortRequest?: {
    __typename?: "TempoCohortRequest";
    cohortId: string;
    projectTitle: string;
    projectSubtitle: string;
    endUsers: string;
    pmUsers: string;
    type: string;
    samples: Array<{
      __typename?: "TempoCohortSample";
      primaryId: string;
      cmoId?: string | null;
      embargoDate?: string | null;
    }>;
  } | null;
};

export const DashboardSamplePartsFragmentDoc = gql`
  fragment DashboardSampleParts on DashboardSample {
    smileSampleId
    revisable
    sampleCategory
  }
`;
export const DashboardSampleMetadataPartsFragmentDoc = gql`
  fragment DashboardSampleMetadataParts on DashboardSample {
    recordId
    primaryId
    cmoSampleName
    importDate
    cmoPatientId
    investigatorSampleId
    sampleType
    species
    genePanel
    baitSet
    preservation
    tumorOrNormal
    sampleClass
    oncotreeCode
    collectionYear
    sampleOrigin
    tissueLocation
    sex
    cfDNA2dBarcode
    igoComplete
    recipe
    altId
    analyteType
    historicalCmoSampleNames
    instrumentModel
    platform
    igoSampleStatus
    dmpRecommendedCoverage
    changelog
    validationReport
    validationStatus
    cancerType
    cancerTypeDetailed
    igoDeliveryDate
  }
`;
export const IgoQcReportPartsFragmentDoc = gql`
  fragment IgoQcReportParts on DashboardSample {
    igoQcReports {
      qcReportType
      IGORecommendation
      comments
      investigatorDecision
    }
  }
`;
export const DashboardTempoPartsFragmentDoc = gql`
  fragment DashboardTempoParts on DashboardSample {
    billed
    costCenter
    billedBy
    custodianInformation
    accessLevel
    initialPipelineRunDate
    embargoDate
    bamCompleteDate
    bamCompleteStatus
    mafCompleteDate
    mafCompleteNormalPrimaryId
    mafCompleteStatus
    qcCompleteDate
    qcCompleteResult
    qcCompleteReason
    qcCompleteStatus
    sampleCohortIds
  }
`;
export const DashboardDbGapPartsFragmentDoc = gql`
  fragment DashboardDbGapParts on DashboardSample {
    dbGapStudy
    irbConsentProtocol
  }
`;
export const DashboardPatientPartsFragmentDoc = gql`
  fragment DashboardPatientParts on DashboardSample {
    dmpPatientAlias
  }
`;
export const RequestPartsFragmentDoc = gql`
  fragment RequestParts on Request {
    igoRequestId
    igoProjectId
    ilabRequestId
    igoDeliveryDate
    genePanel
    dataAnalystName
    dataAnalystEmail
    dataAccessEmails
    bicAnalysis
    investigatorEmail
    investigatorName
    isCmoRequest
    labHeadEmail
    labHeadName
    libraryType
    otherContactEmails
    piEmail
    projectManagerName
    qcAccessEmails
    smileRequestId
  }
`;
export const DashboardRequestsDocument = gql`
  query DashboardRequests(
    $searchVals: [String!]
    $columnFilters: [DashboardRecordColumnFilter!]
    $sort: DashboardRecordSort!
    $limit: Int!
    $offset: Int!
  ) {
    dashboardRequests(
      searchVals: $searchVals
      columnFilters: $columnFilters
      sort: $sort
      limit: $limit
      offset: $offset
    ) {
      igoRequestId
      igoProjectId
      ilabRequestId
      igoDeliveryDate
      validationReport
      validationStatus
      importDate
      totalSampleCount
      projectManagerName
      investigatorName
      investigatorEmail
      piEmail
      dataAnalystName
      dataAnalystEmail
      genePanel
      labHeadName
      labHeadEmail
      qcAccessEmails
      dataAccessEmails
      bicAnalysis
      isCmoRequest
      otherContactEmails
      _total
      toleratedSampleErrors {
        primaryId
        validationStatus
        validationReport
      }
    }
  }
`;

/**
 * __useDashboardRequestsQuery__
 *
 * To run a query within a React component, call `useDashboardRequestsQuery` and pass it any options that fit your needs.
 * When your component renders, `useDashboardRequestsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDashboardRequestsQuery({
 *   variables: {
 *      searchVals: // value for 'searchVals'
 *      columnFilters: // value for 'columnFilters'
 *      sort: // value for 'sort'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useDashboardRequestsQuery(
  baseOptions: Apollo.QueryHookOptions<
    DashboardRequestsQuery,
    DashboardRequestsQueryVariables
  > &
    (
      | { variables: DashboardRequestsQueryVariables; skip?: boolean }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    DashboardRequestsQuery,
    DashboardRequestsQueryVariables
  >(DashboardRequestsDocument, options);
}
export function useDashboardRequestsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    DashboardRequestsQuery,
    DashboardRequestsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    DashboardRequestsQuery,
    DashboardRequestsQueryVariables
  >(DashboardRequestsDocument, options);
}
// @ts-ignore
export function useDashboardRequestsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    DashboardRequestsQuery,
    DashboardRequestsQueryVariables
  >
): Apollo.UseSuspenseQueryResult<
  DashboardRequestsQuery,
  DashboardRequestsQueryVariables
>;
export function useDashboardRequestsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        DashboardRequestsQuery,
        DashboardRequestsQueryVariables
      >
): Apollo.UseSuspenseQueryResult<
  DashboardRequestsQuery | undefined,
  DashboardRequestsQueryVariables
>;
export function useDashboardRequestsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        DashboardRequestsQuery,
        DashboardRequestsQueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    DashboardRequestsQuery,
    DashboardRequestsQueryVariables
  >(DashboardRequestsDocument, options);
}
export type DashboardRequestsQueryHookResult = ReturnType<
  typeof useDashboardRequestsQuery
>;
export type DashboardRequestsLazyQueryHookResult = ReturnType<
  typeof useDashboardRequestsLazyQuery
>;
export type DashboardRequestsSuspenseQueryHookResult = ReturnType<
  typeof useDashboardRequestsSuspenseQuery
>;
export type DashboardRequestsQueryResult = Apollo.QueryResult<
  DashboardRequestsQuery,
  DashboardRequestsQueryVariables
>;
export const DashboardPatientsDocument = gql`
  query DashboardPatients(
    $searchVals: [String!]
    $columnFilters: [DashboardRecordColumnFilter!]
    $sort: DashboardRecordSort!
    $limit: Int!
    $offset: Int!
    $phiEnabled: Boolean = false
  ) {
    dashboardPatients(
      searchVals: $searchVals
      columnFilters: $columnFilters
      sort: $sort
      limit: $limit
      offset: $offset
      phiEnabled: $phiEnabled
    ) {
      smilePatientId
      cmoPatientId
      dmpPatientId
      totalSampleCount
      cmoSampleIds
      consentPartA
      consentPartC
      inDbGap
      mrn
      anchorSequencingDate
      anchorOncotreeCode
      race
      _total
    }
  }
`;

/**
 * __useDashboardPatientsQuery__
 *
 * To run a query within a React component, call `useDashboardPatientsQuery` and pass it any options that fit your needs.
 * When your component renders, `useDashboardPatientsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDashboardPatientsQuery({
 *   variables: {
 *      searchVals: // value for 'searchVals'
 *      columnFilters: // value for 'columnFilters'
 *      sort: // value for 'sort'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      phiEnabled: // value for 'phiEnabled'
 *   },
 * });
 */
export function useDashboardPatientsQuery(
  baseOptions: Apollo.QueryHookOptions<
    DashboardPatientsQuery,
    DashboardPatientsQueryVariables
  > &
    (
      | { variables: DashboardPatientsQueryVariables; skip?: boolean }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    DashboardPatientsQuery,
    DashboardPatientsQueryVariables
  >(DashboardPatientsDocument, options);
}
export function useDashboardPatientsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    DashboardPatientsQuery,
    DashboardPatientsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    DashboardPatientsQuery,
    DashboardPatientsQueryVariables
  >(DashboardPatientsDocument, options);
}
// @ts-ignore
export function useDashboardPatientsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    DashboardPatientsQuery,
    DashboardPatientsQueryVariables
  >
): Apollo.UseSuspenseQueryResult<
  DashboardPatientsQuery,
  DashboardPatientsQueryVariables
>;
export function useDashboardPatientsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        DashboardPatientsQuery,
        DashboardPatientsQueryVariables
      >
): Apollo.UseSuspenseQueryResult<
  DashboardPatientsQuery | undefined,
  DashboardPatientsQueryVariables
>;
export function useDashboardPatientsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        DashboardPatientsQuery,
        DashboardPatientsQueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    DashboardPatientsQuery,
    DashboardPatientsQueryVariables
  >(DashboardPatientsDocument, options);
}
export type DashboardPatientsQueryHookResult = ReturnType<
  typeof useDashboardPatientsQuery
>;
export type DashboardPatientsLazyQueryHookResult = ReturnType<
  typeof useDashboardPatientsLazyQuery
>;
export type DashboardPatientsSuspenseQueryHookResult = ReturnType<
  typeof useDashboardPatientsSuspenseQuery
>;
export type DashboardPatientsQueryResult = Apollo.QueryResult<
  DashboardPatientsQuery,
  DashboardPatientsQueryVariables
>;
export const DashboardCohortsDocument = gql`
  query DashboardCohorts(
    $searchVals: [String!]
    $columnFilters: [DashboardRecordColumnFilter!]
    $sort: DashboardRecordSort!
    $limit: Int!
    $offset: Int!
  ) {
    dashboardCohorts(
      searchVals: $searchVals
      columnFilters: $columnFilters
      sort: $sort
      limit: $limit
      offset: $offset
    ) {
      cohortId
      totalSampleCount
      billed
      initialCohortDeliveryDate
      importDate
      endUsers
      pmUsers
      projectTitle
      projectSubtitle
      status
      type
      pipelineVersion
      searchableSampleIds
      _total
      _uniqueSampleCount
    }
  }
`;

/**
 * __useDashboardCohortsQuery__
 *
 * To run a query within a React component, call `useDashboardCohortsQuery` and pass it any options that fit your needs.
 * When your component renders, `useDashboardCohortsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDashboardCohortsQuery({
 *   variables: {
 *      searchVals: // value for 'searchVals'
 *      columnFilters: // value for 'columnFilters'
 *      sort: // value for 'sort'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useDashboardCohortsQuery(
  baseOptions: Apollo.QueryHookOptions<
    DashboardCohortsQuery,
    DashboardCohortsQueryVariables
  > &
    (
      | { variables: DashboardCohortsQueryVariables; skip?: boolean }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<DashboardCohortsQuery, DashboardCohortsQueryVariables>(
    DashboardCohortsDocument,
    options
  );
}
export function useDashboardCohortsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    DashboardCohortsQuery,
    DashboardCohortsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    DashboardCohortsQuery,
    DashboardCohortsQueryVariables
  >(DashboardCohortsDocument, options);
}
// @ts-ignore
export function useDashboardCohortsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    DashboardCohortsQuery,
    DashboardCohortsQueryVariables
  >
): Apollo.UseSuspenseQueryResult<
  DashboardCohortsQuery,
  DashboardCohortsQueryVariables
>;
export function useDashboardCohortsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        DashboardCohortsQuery,
        DashboardCohortsQueryVariables
      >
): Apollo.UseSuspenseQueryResult<
  DashboardCohortsQuery | undefined,
  DashboardCohortsQueryVariables
>;
export function useDashboardCohortsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        DashboardCohortsQuery,
        DashboardCohortsQueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    DashboardCohortsQuery,
    DashboardCohortsQueryVariables
  >(DashboardCohortsDocument, options);
}
export type DashboardCohortsQueryHookResult = ReturnType<
  typeof useDashboardCohortsQuery
>;
export type DashboardCohortsLazyQueryHookResult = ReturnType<
  typeof useDashboardCohortsLazyQuery
>;
export type DashboardCohortsSuspenseQueryHookResult = ReturnType<
  typeof useDashboardCohortsSuspenseQuery
>;
export type DashboardCohortsQueryResult = Apollo.QueryResult<
  DashboardCohortsQuery,
  DashboardCohortsQueryVariables
>;
export const DashboardSamplesDocument = gql`
  query DashboardSamples(
    $searchVals: [String!]
    $recordContexts: [DashboardRecordContext]
    $sort: DashboardRecordSort!
    $columnFilters: [DashboardRecordColumnFilter!]
    $limit: Int!
    $offset: Int!
    $phiEnabled: Boolean = false
    $includeDemographics: Boolean = false
  ) {
    dashboardSamples(
      searchVals: $searchVals
      recordContexts: $recordContexts
      sort: $sort
      columnFilters: $columnFilters
      limit: $limit
      offset: $offset
      phiEnabled: $phiEnabled
      includeDemographics: $includeDemographics
    ) {
      ...DashboardSampleParts
      ...DashboardSampleMetadataParts
      ...DashboardTempoParts
      ...DashboardDbGapParts
      ...DashboardPatientParts
      ...IgoQcReportParts
      sequencingDate
      molecularAccessionNumber
      race
      _total
    }
  }
  ${DashboardSamplePartsFragmentDoc}
  ${DashboardSampleMetadataPartsFragmentDoc}
  ${DashboardTempoPartsFragmentDoc}
  ${DashboardDbGapPartsFragmentDoc}
  ${DashboardPatientPartsFragmentDoc}
  ${IgoQcReportPartsFragmentDoc}
`;

/**
 * __useDashboardSamplesQuery__
 *
 * To run a query within a React component, call `useDashboardSamplesQuery` and pass it any options that fit your needs.
 * When your component renders, `useDashboardSamplesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDashboardSamplesQuery({
 *   variables: {
 *      searchVals: // value for 'searchVals'
 *      recordContexts: // value for 'recordContexts'
 *      sort: // value for 'sort'
 *      columnFilters: // value for 'columnFilters'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      phiEnabled: // value for 'phiEnabled'
 *      includeDemographics: // value for 'includeDemographics'
 *   },
 * });
 */
export function useDashboardSamplesQuery(
  baseOptions: Apollo.QueryHookOptions<
    DashboardSamplesQuery,
    DashboardSamplesQueryVariables
  > &
    (
      | { variables: DashboardSamplesQueryVariables; skip?: boolean }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<DashboardSamplesQuery, DashboardSamplesQueryVariables>(
    DashboardSamplesDocument,
    options
  );
}
export function useDashboardSamplesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    DashboardSamplesQuery,
    DashboardSamplesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    DashboardSamplesQuery,
    DashboardSamplesQueryVariables
  >(DashboardSamplesDocument, options);
}
// @ts-ignore
export function useDashboardSamplesSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    DashboardSamplesQuery,
    DashboardSamplesQueryVariables
  >
): Apollo.UseSuspenseQueryResult<
  DashboardSamplesQuery,
  DashboardSamplesQueryVariables
>;
export function useDashboardSamplesSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        DashboardSamplesQuery,
        DashboardSamplesQueryVariables
      >
): Apollo.UseSuspenseQueryResult<
  DashboardSamplesQuery | undefined,
  DashboardSamplesQueryVariables
>;
export function useDashboardSamplesSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        DashboardSamplesQuery,
        DashboardSamplesQueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    DashboardSamplesQuery,
    DashboardSamplesQueryVariables
  >(DashboardSamplesDocument, options);
}
export type DashboardSamplesQueryHookResult = ReturnType<
  typeof useDashboardSamplesQuery
>;
export type DashboardSamplesLazyQueryHookResult = ReturnType<
  typeof useDashboardSamplesLazyQuery
>;
export type DashboardSamplesSuspenseQueryHookResult = ReturnType<
  typeof useDashboardSamplesSuspenseQuery
>;
export type DashboardSamplesQueryResult = Apollo.QueryResult<
  DashboardSamplesQuery,
  DashboardSamplesQueryVariables
>;
export const DashboardSampleHistoryDocument = gql`
  query DashboardSampleHistory(
    $searchVals: [String!]!
    $sort: DashboardRecordSort!
    $limit: Int!
    $offset: Int!
  ) {
    dashboardSampleHistory(
      searchVals: $searchVals
      sort: $sort
      limit: $limit
      offset: $offset
    ) {
      ...DashboardSampleParts
      ...DashboardSampleMetadataParts
      ...DashboardTempoParts
      ...DashboardDbGapParts
      ...DashboardPatientParts
      _total
    }
  }
  ${DashboardSamplePartsFragmentDoc}
  ${DashboardSampleMetadataPartsFragmentDoc}
  ${DashboardTempoPartsFragmentDoc}
  ${DashboardDbGapPartsFragmentDoc}
  ${DashboardPatientPartsFragmentDoc}
`;

/**
 * __useDashboardSampleHistoryQuery__
 *
 * To run a query within a React component, call `useDashboardSampleHistoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useDashboardSampleHistoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDashboardSampleHistoryQuery({
 *   variables: {
 *      searchVals: // value for 'searchVals'
 *      sort: // value for 'sort'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useDashboardSampleHistoryQuery(
  baseOptions: Apollo.QueryHookOptions<
    DashboardSampleHistoryQuery,
    DashboardSampleHistoryQueryVariables
  > &
    (
      | { variables: DashboardSampleHistoryQueryVariables; skip?: boolean }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    DashboardSampleHistoryQuery,
    DashboardSampleHistoryQueryVariables
  >(DashboardSampleHistoryDocument, options);
}
export function useDashboardSampleHistoryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    DashboardSampleHistoryQuery,
    DashboardSampleHistoryQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    DashboardSampleHistoryQuery,
    DashboardSampleHistoryQueryVariables
  >(DashboardSampleHistoryDocument, options);
}
// @ts-ignore
export function useDashboardSampleHistorySuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    DashboardSampleHistoryQuery,
    DashboardSampleHistoryQueryVariables
  >
): Apollo.UseSuspenseQueryResult<
  DashboardSampleHistoryQuery,
  DashboardSampleHistoryQueryVariables
>;
export function useDashboardSampleHistorySuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        DashboardSampleHistoryQuery,
        DashboardSampleHistoryQueryVariables
      >
): Apollo.UseSuspenseQueryResult<
  DashboardSampleHistoryQuery | undefined,
  DashboardSampleHistoryQueryVariables
>;
export function useDashboardSampleHistorySuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        DashboardSampleHistoryQuery,
        DashboardSampleHistoryQueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    DashboardSampleHistoryQuery,
    DashboardSampleHistoryQueryVariables
  >(DashboardSampleHistoryDocument, options);
}
export type DashboardSampleHistoryQueryHookResult = ReturnType<
  typeof useDashboardSampleHistoryQuery
>;
export type DashboardSampleHistoryLazyQueryHookResult = ReturnType<
  typeof useDashboardSampleHistoryLazyQuery
>;
export type DashboardSampleHistorySuspenseQueryHookResult = ReturnType<
  typeof useDashboardSampleHistorySuspenseQuery
>;
export type DashboardSampleHistoryQueryResult = Apollo.QueryResult<
  DashboardSampleHistoryQuery,
  DashboardSampleHistoryQueryVariables
>;
export const UpdateDashboardSamplesDocument = gql`
  mutation UpdateDashboardSamples(
    $newDashboardSamples: [DashboardSampleInput!]!
  ) {
    updateDashboardSamples(newDashboardSamples: $newDashboardSamples) {
      ...DashboardSampleParts
      ...DashboardSampleMetadataParts
      ...DashboardTempoParts
      ...DashboardDbGapParts
      ...IgoQcReportParts
    }
  }
  ${DashboardSamplePartsFragmentDoc}
  ${DashboardSampleMetadataPartsFragmentDoc}
  ${DashboardTempoPartsFragmentDoc}
  ${DashboardDbGapPartsFragmentDoc}
  ${IgoQcReportPartsFragmentDoc}
`;
export type UpdateDashboardSamplesMutationFn = Apollo.MutationFunction<
  UpdateDashboardSamplesMutation,
  UpdateDashboardSamplesMutationVariables
>;

/**
 * __useUpdateDashboardSamplesMutation__
 *
 * To run a mutation, you first call `useUpdateDashboardSamplesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDashboardSamplesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateDashboardSamplesMutation, { data, loading, error }] = useUpdateDashboardSamplesMutation({
 *   variables: {
 *      newDashboardSamples: // value for 'newDashboardSamples'
 *   },
 * });
 */
export function useUpdateDashboardSamplesMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateDashboardSamplesMutation,
    UpdateDashboardSamplesMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateDashboardSamplesMutation,
    UpdateDashboardSamplesMutationVariables
  >(UpdateDashboardSamplesDocument, options);
}
export type UpdateDashboardSamplesMutationHookResult = ReturnType<
  typeof useUpdateDashboardSamplesMutation
>;
export type UpdateDashboardSamplesMutationResult =
  Apollo.MutationResult<UpdateDashboardSamplesMutation>;
export type UpdateDashboardSamplesMutationOptions = Apollo.BaseMutationOptions<
  UpdateDashboardSamplesMutation,
  UpdateDashboardSamplesMutationVariables
>;
export const AllBlockedCohortIdsDocument = gql`
  query AllBlockedCohortIds {
    allBlockedCohortIds
  }
`;

/**
 * __useAllBlockedCohortIdsQuery__
 *
 * To run a query within a React component, call `useAllBlockedCohortIdsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllBlockedCohortIdsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllBlockedCohortIdsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllBlockedCohortIdsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    AllBlockedCohortIdsQuery,
    AllBlockedCohortIdsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    AllBlockedCohortIdsQuery,
    AllBlockedCohortIdsQueryVariables
  >(AllBlockedCohortIdsDocument, options);
}
export function useAllBlockedCohortIdsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AllBlockedCohortIdsQuery,
    AllBlockedCohortIdsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    AllBlockedCohortIdsQuery,
    AllBlockedCohortIdsQueryVariables
  >(AllBlockedCohortIdsDocument, options);
}
// @ts-ignore
export function useAllBlockedCohortIdsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    AllBlockedCohortIdsQuery,
    AllBlockedCohortIdsQueryVariables
  >
): Apollo.UseSuspenseQueryResult<
  AllBlockedCohortIdsQuery,
  AllBlockedCohortIdsQueryVariables
>;
export function useAllBlockedCohortIdsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        AllBlockedCohortIdsQuery,
        AllBlockedCohortIdsQueryVariables
      >
): Apollo.UseSuspenseQueryResult<
  AllBlockedCohortIdsQuery | undefined,
  AllBlockedCohortIdsQueryVariables
>;
export function useAllBlockedCohortIdsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        AllBlockedCohortIdsQuery,
        AllBlockedCohortIdsQueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    AllBlockedCohortIdsQuery,
    AllBlockedCohortIdsQueryVariables
  >(AllBlockedCohortIdsDocument, options);
}
export type AllBlockedCohortIdsQueryHookResult = ReturnType<
  typeof useAllBlockedCohortIdsQuery
>;
export type AllBlockedCohortIdsLazyQueryHookResult = ReturnType<
  typeof useAllBlockedCohortIdsLazyQuery
>;
export type AllBlockedCohortIdsSuspenseQueryHookResult = ReturnType<
  typeof useAllBlockedCohortIdsSuspenseQuery
>;
export type AllBlockedCohortIdsQueryResult = Apollo.QueryResult<
  AllBlockedCohortIdsQuery,
  AllBlockedCohortIdsQueryVariables
>;
export const GetValidationAdviceDocument = gql`
  query GetValidationAdvice(
    $validationReport: String!
    $recordType: String!
    $recordId: String
    $igoQcReports: String
  ) {
    getValidationAdvice(
      validationReport: $validationReport
      recordType: $recordType
      recordId: $recordId
      igoQcReports: $igoQcReports
    ) {
      advice
      suggestedSteps
    }
  }
`;

/**
 * __useGetValidationAdviceQuery__
 *
 * To run a query within a React component, call `useGetValidationAdviceQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetValidationAdviceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetValidationAdviceQuery({
 *   variables: {
 *      validationReport: // value for 'validationReport'
 *      recordType: // value for 'recordType'
 *      recordId: // value for 'recordId'
 *      igoQcReports: // value for 'igoQcReports'
 *   },
 * });
 */
export function useGetValidationAdviceQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetValidationAdviceQuery,
    GetValidationAdviceQueryVariables
  > &
    (
      | { variables: GetValidationAdviceQueryVariables; skip?: boolean }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetValidationAdviceQuery,
    GetValidationAdviceQueryVariables
  >(GetValidationAdviceDocument, options);
}
export function useGetValidationAdviceLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetValidationAdviceQuery,
    GetValidationAdviceQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetValidationAdviceQuery,
    GetValidationAdviceQueryVariables
  >(GetValidationAdviceDocument, options);
}
// @ts-ignore
export function useGetValidationAdviceSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetValidationAdviceQuery,
    GetValidationAdviceQueryVariables
  >
): Apollo.UseSuspenseQueryResult<
  GetValidationAdviceQuery,
  GetValidationAdviceQueryVariables
>;
export function useGetValidationAdviceSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetValidationAdviceQuery,
        GetValidationAdviceQueryVariables
      >
): Apollo.UseSuspenseQueryResult<
  GetValidationAdviceQuery | undefined,
  GetValidationAdviceQueryVariables
>;
export function useGetValidationAdviceSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetValidationAdviceQuery,
        GetValidationAdviceQueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetValidationAdviceQuery,
    GetValidationAdviceQueryVariables
  >(GetValidationAdviceDocument, options);
}
export type GetValidationAdviceQueryHookResult = ReturnType<
  typeof useGetValidationAdviceQuery
>;
export type GetValidationAdviceLazyQueryHookResult = ReturnType<
  typeof useGetValidationAdviceLazyQuery
>;
export type GetValidationAdviceSuspenseQueryHookResult = ReturnType<
  typeof useGetValidationAdviceSuspenseQuery
>;
export type GetValidationAdviceQueryResult = Apollo.QueryResult<
  GetValidationAdviceQuery,
  GetValidationAdviceQueryVariables
>;
export const AllAnchorSeqDateDataDocument = gql`
  query AllAnchorSeqDateData($phiEnabled: Boolean = false) {
    allAnchorSeqDateData(phiEnabled: $phiEnabled) {
      MRN
      DMP_PATIENT_ID
      ANCHOR_SEQUENCING_DATE
      ANCHOR_ONCOTREE_CODE
    }
  }
`;

/**
 * __useAllAnchorSeqDateDataQuery__
 *
 * To run a query within a React component, call `useAllAnchorSeqDateDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllAnchorSeqDateDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllAnchorSeqDateDataQuery({
 *   variables: {
 *      phiEnabled: // value for 'phiEnabled'
 *   },
 * });
 */
export function useAllAnchorSeqDateDataQuery(
  baseOptions?: Apollo.QueryHookOptions<
    AllAnchorSeqDateDataQuery,
    AllAnchorSeqDateDataQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    AllAnchorSeqDateDataQuery,
    AllAnchorSeqDateDataQueryVariables
  >(AllAnchorSeqDateDataDocument, options);
}
export function useAllAnchorSeqDateDataLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AllAnchorSeqDateDataQuery,
    AllAnchorSeqDateDataQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    AllAnchorSeqDateDataQuery,
    AllAnchorSeqDateDataQueryVariables
  >(AllAnchorSeqDateDataDocument, options);
}
// @ts-ignore
export function useAllAnchorSeqDateDataSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    AllAnchorSeqDateDataQuery,
    AllAnchorSeqDateDataQueryVariables
  >
): Apollo.UseSuspenseQueryResult<
  AllAnchorSeqDateDataQuery,
  AllAnchorSeqDateDataQueryVariables
>;
export function useAllAnchorSeqDateDataSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        AllAnchorSeqDateDataQuery,
        AllAnchorSeqDateDataQueryVariables
      >
): Apollo.UseSuspenseQueryResult<
  AllAnchorSeqDateDataQuery | undefined,
  AllAnchorSeqDateDataQueryVariables
>;
export function useAllAnchorSeqDateDataSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        AllAnchorSeqDateDataQuery,
        AllAnchorSeqDateDataQueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    AllAnchorSeqDateDataQuery,
    AllAnchorSeqDateDataQueryVariables
  >(AllAnchorSeqDateDataDocument, options);
}
export type AllAnchorSeqDateDataQueryHookResult = ReturnType<
  typeof useAllAnchorSeqDateDataQuery
>;
export type AllAnchorSeqDateDataLazyQueryHookResult = ReturnType<
  typeof useAllAnchorSeqDateDataLazyQuery
>;
export type AllAnchorSeqDateDataSuspenseQueryHookResult = ReturnType<
  typeof useAllAnchorSeqDateDataSuspenseQuery
>;
export type AllAnchorSeqDateDataQueryResult = Apollo.QueryResult<
  AllAnchorSeqDateDataQuery,
  AllAnchorSeqDateDataQueryVariables
>;
export const UpdateTempoCohortDocument = gql`
  mutation UpdateTempoCohort($dashboardCohort: DashboardCohortInput!) {
    updateTempoCohort(dashboardCohort: $dashboardCohort) {
      cohortId
      totalSampleCount
      billed
      initialCohortDeliveryDate
      importDate
      endUsers
      pmUsers
      projectTitle
      projectSubtitle
      status
      type
      pipelineVersion
      searchableSampleIds
      _total
      _uniqueSampleCount
    }
  }
`;
export type UpdateTempoCohortMutationFn = Apollo.MutationFunction<
  UpdateTempoCohortMutation,
  UpdateTempoCohortMutationVariables
>;

/**
 * __useUpdateTempoCohortMutation__
 *
 * To run a mutation, you first call `useUpdateTempoCohortMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTempoCohortMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTempoCohortMutation, { data, loading, error }] = useUpdateTempoCohortMutation({
 *   variables: {
 *      dashboardCohort: // value for 'dashboardCohort'
 *   },
 * });
 */
export function useUpdateTempoCohortMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateTempoCohortMutation,
    UpdateTempoCohortMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateTempoCohortMutation,
    UpdateTempoCohortMutationVariables
  >(UpdateTempoCohortDocument, options);
}
export type UpdateTempoCohortMutationHookResult = ReturnType<
  typeof useUpdateTempoCohortMutation
>;
export type UpdateTempoCohortMutationResult =
  Apollo.MutationResult<UpdateTempoCohortMutation>;
export type UpdateTempoCohortMutationOptions = Apollo.BaseMutationOptions<
  UpdateTempoCohortMutation,
  UpdateTempoCohortMutationVariables
>;
export const PublishNewTempoCohortRequestDocument = gql`
  mutation PublishNewTempoCohortRequest(
    $tempoCohortRequest: TempoCohortRequestInput!
  ) {
    publishNewTempoCohortRequest(tempoCohortRequest: $tempoCohortRequest) {
      cohortId
      projectTitle
      projectSubtitle
      endUsers
      pmUsers
      type
      samples {
        primaryId
        cmoId
        embargoDate
      }
    }
  }
`;
export type PublishNewTempoCohortRequestMutationFn = Apollo.MutationFunction<
  PublishNewTempoCohortRequestMutation,
  PublishNewTempoCohortRequestMutationVariables
>;

/**
 * __usePublishNewTempoCohortRequestMutation__
 *
 * To run a mutation, you first call `usePublishNewTempoCohortRequestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePublishNewTempoCohortRequestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [publishNewTempoCohortRequestMutation, { data, loading, error }] = usePublishNewTempoCohortRequestMutation({
 *   variables: {
 *      tempoCohortRequest: // value for 'tempoCohortRequest'
 *   },
 * });
 */
export function usePublishNewTempoCohortRequestMutation(
  baseOptions?: Apollo.MutationHookOptions<
    PublishNewTempoCohortRequestMutation,
    PublishNewTempoCohortRequestMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    PublishNewTempoCohortRequestMutation,
    PublishNewTempoCohortRequestMutationVariables
  >(PublishNewTempoCohortRequestDocument, options);
}
export type PublishNewTempoCohortRequestMutationHookResult = ReturnType<
  typeof usePublishNewTempoCohortRequestMutation
>;
export type PublishNewTempoCohortRequestMutationResult =
  Apollo.MutationResult<PublishNewTempoCohortRequestMutation>;
export type PublishNewTempoCohortRequestMutationOptions =
  Apollo.BaseMutationOptions<
    PublishNewTempoCohortRequestMutation,
    PublishNewTempoCohortRequestMutationVariables
  >;
