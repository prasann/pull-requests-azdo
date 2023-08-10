import { PullRequest } from "./types";

const url = "";
const reviewerId = "";

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

function main() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const pullRequests = data.value;
      const raisedPRs = getRaisedPRs(pullRequests);
      const reviewedPRs = getReviewedPRs(pullRequests);
      console.log(raisedPRs);
      console.log(reviewedPRs);
    });
}

main()