/**
 * @param {number[][]} questions
 * @return {number}
 */
var mostPoints = function(questions) {
    class Solution {
        constructor() {
            this.dp = {}
        }

        mostPoints(questions) {
            return this.dfs(0, questions);
        }

        dfs(i, questions) {
            if (i >= questions.length) {
                return 0;
            }
            if (this.dp[i] !== undefined) {
                return this.dp[i];
            }
            this.dp[i] = Math.max(
                this.dfs(i + 1, questions), // skip question
                questions[i][0] + this.dfs(i + 1 + questions[i][1], questions)
            );
            return this.dp[i];
        }
    }
    let solver = new Solution();
    return solver.mostPoints(questions);
};
