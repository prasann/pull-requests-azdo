export interface PullRequest {
  repository: Repository;
  pullRequestId: number;
  codeReviewId: number;
  status: string;
  createdBy: CreatedBy;
  creationDate: string;
  title: string;
  description: string;
  sourceRefName: string;
  targetRefName: string;
  mergeStatus: string;
  isDraft: boolean;
  mergeId: string;
  lastMergeSourceCommit: LastCommit;
  lastMergeTargetCommit: LastCommit;
  lastMergeCommit: LastCommit;
  reviewers?: ReviewersEntity[] | null;
  url: string;
  completionOptions?: CompletionOptions | null;
  supportsIterations: boolean;
}
export interface Repository {
  id: string;
  name: string;
  url: string;
  project: Project;
}
export interface Project {
  id: string;
  name: string;
  state: string;
  visibility: string;
  lastUpdateTime: string;
}
export interface CreatedBy {
  displayName: string;
  url: string;
  _links: Links;
  id: string;
  uniqueName: string;
  imageUrl: string;
  descriptor: string;
}
export interface Links {
  avatar: Avatar;
}
export interface Avatar {
  href: string;
}
export interface LastCommit {
  commitId: string;
  url: string;
}
export interface ReviewersEntity {
  reviewerUrl: string;
  vote: number;
  hasDeclined: boolean;
  isFlagged: boolean;
  displayName: string;
  url: string;
  _links: Links;
  id: string;
  uniqueName: string;
  imageUrl: string;
}
export interface CompletionOptions {
  mergeCommitMessage: string;
  deleteSourceBranch: boolean;
  squashMerge: boolean;
  mergeStrategy: string;
  transitionWorkItems: boolean;
  triggeredByAutoComplete: boolean;
  autoCompleteIgnoreConfigIds?: null[] | null;
}
