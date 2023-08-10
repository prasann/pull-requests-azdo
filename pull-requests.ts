import { PullRequest } from "./types";
import * as pullRequestResponse from './sample.json';

const url =
  "https://dev.azure.com/BuiltEnvironmentEngineering/_apis/git/repositories/bfd2209b-a8d2-4ec9-a930-96a23519cf28/pullrequests?api-version=6.1-preview.1?searchCriteria.status=completed";
const reviewerId = "fa119f69-8959-4e83-9a48-abba9d6958a1";

function getRaisedPRs(pullRequests: PullRequest[]) {
  return pullRequests.filter((pr) => pr.createdBy.id === reviewerId);
}

function getReviewedPRs(pullRequests: PullRequest[]) {
  return pullRequests.filter((pr) =>
    pr.reviewers?.some(
      (reviewer) => reviewer.id === reviewerId && reviewer.vote !== 0
    )
  );
}

function fetchPullRequests(): PullRequest[] {
  return pullRequestResponse.value as PullRequest[];
}

function main() {
  const pullRequests = fetchPullRequests();
  const raisedPRs = getRaisedPRs(pullRequests);
  const reviewedPRs = getReviewedPRs(pullRequests);
  console.log(raisedPRs.length);
  console.log(reviewedPRs.length);
}

main()