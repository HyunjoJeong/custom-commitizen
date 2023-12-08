module.exports = {
  types: [
    { value: "✨ feat", name: "✨ feat:\tNew feature developed" },
    { value: "🐛 fix", name: "🐛 fix:\tBug fix or QA" },
    { value: "📝 docs", name: "📝 docs:\tUpdate documentation" },
    { value: "💄 style", name: "💄 style:\tCss change" },
    { value: "🤖 refactor", name: "🤖 refactor:\tCode refactoring" },
    { value: "✅ test", name: "✅ test:\tCode change for tests cases" },
    { value: "🚚 chore", name: "🚚 chore:\tSetup auxiliary tools" },
  ],
  messages: {
    type: "Select type of commit:",
    subject: "commit message:",
    body: "extra commit message:",
    confirmCommit: "Press Enter to proceed Commit (n key to abort)",
  },
  allowCustomScopes: false,
  allowBreakingChanges: ["feat", "fix"],
  skipQuestions: ["footer"],
  subjectLimit: 100,
};
