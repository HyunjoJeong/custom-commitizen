module.exports = {
  types: [
    { value: "✨ feat", name: "✨ feat:\tNew feature" },
    { value: "🐛 fix", name: "🐛 fix:\tBug fix or QA" },
    { value: "💄 style", name: "💄 style:\tCSS modify" },
    { value: "🤖 refactor", name: "🤖 refactor:\tCode refactoring" },
    { value: "📝 docs", name: "📝 docs:\tUpdate documentation" },
    { value: "✅ test", name: "✅ test:\tCode change for tests cases" },
    { value: "🚚 chore", name: "🚚 chore:\tSetup auxiliary tools" },
  ],
  messages: {
    type: "commit type:",
    subject: "commit message:",
    body: "extra commit message (optional):",
    confirmCommit: "press Enter to proceed commit (n key to abort)",
  },
  allowCustomScopes: false,
  allowBreakingChanges: ["feat", "fix"],
  skipQuestions: ["footer"],
  subjectLimit: 100,
};
