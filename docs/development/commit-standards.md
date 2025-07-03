# Commit Standards Specification

Create well-formatted commits with conventional commit messages and emojis.

## Commit Types with Emojis
- ✨ `feat`: New features
- 🐛 `fix`: Bug fixes
- 📝 `docs`: Documentation changes
- ♻️ `refactor`: Code restructuring without changing functionality
- 🎨 `style`: Code formatting, missing semicolons, etc.
- ⚡️ `perf`: Performance improvements
- ✅ `test`: Adding or correcting tests
- 🧑‍💻 `chore`: Tooling, configuration, maintenance
- 🚧 `wip`: Work in progress
- 🔥 `remove`: Removing code or files
- 🚑 `hotfix`: Critical fixes
- 🔒 `security`: Security improvements

## Commit Process
1. Check for staged changes (`git status`)
2. If no staged changes, review and stage appropriate files
3. **Run pre-commit checks** (testing, lint, build)
4. Analyze changes to determine commit type
5. Generate descriptive commit message
6. Include scope if applicable: `type(scope): description`
7. Add body for complex changes explaining why
8. Execute commit

## Best Practices
- Keep commits atomic and focused
- Write in imperative mood ("Add feature" not "Added feature")
- Explain why, not just what
- Reference issues/PRs when relevant
- Split unrelated changes into separate commits

## Commit Examples
```bash
✨ feat(projects): add horizontal scroll with smooth navigation

🐛 fix(mobile): resolve layout overflow on small screens

📝 docs: update testing workflow in CLAUDE.md

♻️ refactor(layout): extract responsive grid logic to CSS variables

✅ test: add visual regression tests for mobile viewports

🎨 style: improve project card hover animations
```

## Pre-commit Checks (MANDATORY)
- Visual regression tests pass
- Layout tests complete
- Performance metrics acceptable
- Cross-browser compatibility verified
- Code quality standards met