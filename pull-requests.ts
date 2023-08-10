import { PullRequest } from "./types";
import * as pullRequestResponse from './sample.json';

const url =
  "";
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