export const levenshteinDistance = (a: string, b: string) => {
  const dp = Array.from(Array(a.length + 1), () => Array(b.length + 1).fill(0));

  for (let i = 0; i <= a.length; i++) {
    for (let j = 0; j <= b.length; j++) {
      if (i === 0) {
        dp[i][j] = j;
      } else if (j === 0) {
        dp[i][j] = i;
      } else {
        dp[i][j] = Math.min(
          dp[i - 1][j - 1] + (a[i - 1] !== b[j - 1] ? 1 : 0),
          dp[i - 1][j] + 1,
          dp[i][j - 1] + 1,
        );
      }
    }
  }

  return dp[a.length][b.length];
};
