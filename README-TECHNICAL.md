# TDD React Template - Technical Documentation

> Audience: Template maintainers and developers. For beginner-friendly learning and TDD tutorials, see [README.md](README.md).

A complete React TypeScript template with comprehensive testing setup and automated deployment to GitHub Pages.

Deployed to: [https://haryati75.github.io/tdd-react-template/](https://haryati75.github.io/tdd-react-template/)

> 📚 **New to TDD or React?** Check out our [Beginner-Friendly Guide](README.md) first!

## Features

- ⚛️ **React 19** with TypeScript
- 🧪 **Vitest** for unit testing with coverage reports
- 🎭 **Playwright** for end-to-end testing
- 🚀 **GitHub Actions** CI/CD pipeline
- 📦 **Automated deployment** to GitHub Pages
- 🎯 **Test-driven development** ready
- 🛠️ **VS Code integration** with debugging and task automation
- 📊 **Interactive reports** for coverage and E2E tests

## Quick Start (Maintainers)

For learner onboarding and TDD tutorial, use [README.md](README.md). Maintainers can set up quickly:

1. Clone or use GitHub “Use this template”.
2. Install dependencies:

```bash
npm install
```

3. Install Playwright browsers (first time only):

```bash
npx playwright install --with-deps
```

4. Update configuration:

- Update `package.json` metadata
- Set `base` in `vite.config.ts` to your repo name

### Running the Project

#### Command Line

- **Development server**:

  ```bash
  npm run dev
  ```

- **Unit tests**:

  ```bash
  npm test
  ```

- **Unit tests with coverage**:

  ```bash
  npm run test:coverage
  ```

- **End-to-end tests**:

  ```bash
  npm run test:e2e
  ```

- **View Playwright test report**:

  ```bash
  npm run test:e2e:report
  ```

- **Build for production**:

  ```bash
  npm run build
  ```

- **Lint code**:

  ```bash
  npm run lint
  ```

- **Preview production build**:
  ```bash
  npm run preview
  ```

#### VS Code Integration

Full task catalogue and debugging configurations are available via VS Code tasks. Beginners should use the curated tasks in [README.md](README.md); maintainers can use the complete list configured in `.vscode`.

## Testing Stack

### Unit Testing (Vitest + React Testing Library)

- **Vitest**: Fast unit test runner with hot reload
- **React Testing Library**: Testing utilities for React components
- **Istanbul**: Code coverage reporting
- **jsdom**: Browser environment simulation
- **Testing Location**: Test files are co-located with source files using `.test.tsx` extension

### E2E Testing (Playwright)

- **Playwright**: Cross-browser end-to-end testing
- **Multi-browser support**: Chrome, Firefox, Safari (WebKit)
- **Automatic screenshots and traces on failure**
- **Test Location**: All E2E tests are in the `e2e/` directory

### Example Tests

- Unit test example: see [src/App.test.tsx](src/App.test.tsx)
- E2E test example: see [e2e/my-app.spec.ts](e2e/my-app.spec.ts)

## CI/CD Pipeline

This template includes a complete GitHub Actions workflow with optimized triggers:

### 1. Automated Testing (`all-tests.yml`)

Runs on every push and pull request to `main` branch, but **skips** when only these files change:

- Documentation files (`*.md`)
- VS Code configuration (`.vscode/`)
- Generated reports (`coverage/`, `playwright-report/`, `test-results/`)
- Configuration files (`.gitignore`, `LICENSE`)

**Features:**

- Unit tests with coverage
- End-to-end tests across multiple browsers (Chrome, Firefox, WebKit)
- Test artifact uploads
- Smart caching for dependencies and Playwright browsers

### 2. Automated Deployment (`deploy.yml`)

Deploys to GitHub Pages when:

- Tests pass successfully
- Changes are pushed to `main` branch
- Manual deployment trigger (workflow_dispatch) for emergency deployments

**Features:**

- Automatic deployment after successful tests
- Manual deployment option with reason tracking
- Dependency caching for faster builds

## Setting Up GitHub Pages Deployment

### 1. Repository Settings

1. Go to your repository **Settings** → **Pages**
2. Set source to **GitHub Actions** (recommended)
   - OR set source to **Deploy from a branch** and select **gh-pages** (after first deployment)
3. Click **Save**

### 2. Actions Permissions

1. Go to **Settings** → **Actions** → **General**
2. Under **Workflow permissions**, select **Read and write permissions**
3. Check **Allow GitHub Actions to create and approve pull requests**
4. Click **Save**

### 3. Update Base Path

Update `vite.config.ts` with your repository name:

```typescript
export default defineConfig({
  base: "/your-repo-name/", // Important: Use your actual repository name
  // ... rest of config
});
```

### 4. Deploy

Push to the `main` branch and the workflow will:

1. Run all tests
2. Build the project
3. Deploy to GitHub Pages
4. Your app will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

### 5. Manual Deployment (Optional)

You can also trigger deployments manually for emergencies or testing:

1. Go to your repository on GitHub
2. Click the **"Actions"** tab
3. In the left sidebar, click **"Deploy to GitHub Pages"**
4. Click the **"Run workflow"** button (top right)
5. Select the branch (usually `main`)
6. Optionally, add a reason for the deployment (e.g., "Emergency hotfix", "Manual testing")
7. Click **"Run workflow"** to start the deployment

This manual trigger is useful for:

- Emergency deployments that bypass normal CI/CD
- Testing the deployment process
- Deploying hotfixes quickly
- Recovering from failed automatic deployments

## Project Structure

```
your-project/
├── .github/workflows/
│   ├── all-tests.yml          # Test workflow
│   └── deploy.yml             # Deployment workflow
├── .vscode/                   # VS Code configuration
│   ├── launch.json            # Debug configurations
│   ├── tasks.json             # Task automation
│   ├── settings.json          # Workspace settings
│   └── extensions.json        # Recommended extensions
├── src/
│   ├── components/            # React components
│   ├── App.test.tsx           # Unit tests
│   ├── setupTests.ts          # Test configuration
│   └── main.tsx
├── e2e/                       # End-to-end tests
├── coverage/                  # Coverage reports (generated)
├── playwright-report/         # E2E test reports (generated)
├── vite.config.ts             # Vite configuration
├── playwright.config.ts       # Playwright configuration
└── package.json
```

## Configuration Files

### Vite Configuration (`vite.config.ts`)

**Current configuration** (update the base path for your repo):

```typescript
/// <reference types="vitest" />
import { defineConfig } from "vitest/config"; // ensures `test` config is typed
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/your-repo-name/", // Update this!
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
    include: ["src/**/*.test.{ts,tsx}"],
    coverage: {
      provider: "istanbul",
      include: ["src/**/*.{ts,tsx}"],
      exclude: ["src/main.tsx"],
    },
  },
});
```

### TypeScript Configuration

The project includes proper TypeScript configuration with Vitest globals. The `tsconfig.app.json` already includes:

```json
{
  "include": ["src", "node_modules/vitest/globals.d.ts"]
}
```

**Note**: No additional configuration needed - Vitest globals are already configured!

## Development Workflow

### Recommended Workflow in VS Code

Use VS Code tasks for development, unit tests, coverage, and E2E runs. For a beginner-friendly TDD walkthrough, refer to [README.md](README.md). Maintain CI/CD and deployment steps in this document.

### VS Code Features

#### Integrated Testing

- **Watch Mode**: Tests run automatically as you code
- **Debugging**: Set breakpoints in both source and test files
- **Coverage Visualization**: See exactly which lines need testing
- **E2E Traces**: Visual replay of test failures

#### Smart Development

- **Auto-imports**: Automatic import suggestions
- **TypeScript Integration**: Real-time type checking
- **ESLint**: Code quality and formatting
- **Hot Reload**: Instant preview of changes

## Viewing Reports

### VS Code Integration

- **Coverage Reports**:
  - Use task **📊 View: Coverage Report** to generate and open
  - Or **📊 View: Coverage Report (Quick)** for existing reports
  - Interactive HTML coverage report opens in browser
- **Playwright Reports**:
  - Use task **🎭 View: Playwright Report**
  - View detailed test results, screenshots, and failure traces
  - Interactive timeline and step-by-step debugging

### Manual Access

- **Coverage Report**: Open `coverage/index.html` after running `npm run test:coverage`
- **Playwright Report**: Open `playwright-report/index.html` after running E2E tests
- **GitHub Actions**: Check the Actions tab in your repository for CI results

### Report Features

- **Coverage**: Line-by-line coverage highlighting, branch coverage, function coverage
- **E2E Reports**: Screenshots on failure, video recordings, network logs, step traces

## Troubleshooting

### Common Issues

1. **Deployment fails**: Check the base path in `vite.config.ts` matches your repo name
2. **Tests fail in CI**: Ensure all dependencies are in `package.json`
3. **GitHub Pages not working**: Verify repository settings and workflow permissions
4. **VS Code tasks not working**: Ensure you have the recommended extensions installed
5. **Coverage report not opening**: Run tests with coverage first, then view report
6. **Debugging not working**: Make sure dev server is running before debugging React app

### VS Code Setup Issues

- **Missing extensions**: VS Code will prompt to install recommended extensions
- **Tasks not visible**: Reload window (`Ctrl+Shift+P` → "Reload Window")
- **Debug configurations not working**: Check that file paths in `launch.json` are correct
- **Port conflicts**: Default ports are 5173 (dev), 8080 (coverage), 8081 (alt coverage)

### CI/CD Issues

- **Workflow not triggering**: Check path filters in `.github/workflows/all-tests.yml`
- **Deployment fails**: Verify GitHub Pages settings and repository permissions
- **Manual deployment**: Use workflow_dispatch trigger in Actions tab

### Getting Help

- Check the **Actions** tab for detailed error logs
- Review the **Issues** section of this template repository
- Ensure your repository has the correct permissions set up
- Use VS Code's integrated terminal to see detailed error messages

---

## Dependencies

This template includes all necessary dependencies:

- **React 19** with TypeScript
- **Vite** for fast development and building
- **Vitest** + **React Testing Library** for unit testing
- **Playwright** for E2E testing
- **Istanbul** for coverage reporting
- **http-server** for serving reports locally

## Maintainer Guide

### Branching Strategy

- **main**: Protected release branch; always green; deploys come from here.
- **dev**: Integration branch for ongoing work; merges from feature/fix/docs branches.
- **Feature branches**: `feat/<scope>-<short-desc>` (e.g., `feat/button-variants`).
- **Fix branches**: `fix/<scope>-<short-desc>` (e.g., `fix/coverage-threshold`).
- **Docs branches**: `docs/<short-desc>` (e.g., `docs/developer-readme`).
- **Chore branches**: `chore/<area>-<short-desc>` for tooling, deps, CI.
- **Releases/tags**: `vX.Y.Z` using semantic versioning.
- **Merge policy**: Prefer squash merges for features/fixes to keep history tidy; ensure `dev` is up to date before merging to `main`.

### Pull Request Guidelines

- **Title format**: `type(scope): summary`
  - Examples: `feat(header): add sticky behavior`, `fix(ci): cache playwright browsers`.
- **Description**: Explain the change (what/why), link issues, include screenshots or report links when relevant (coverage, Playwright report).
- **Checklist**:
  - Tests pass locally and in CI (unit + E2E where applicable).
  - Coverage does not regress meaningfully; update/add tests when needed.
  - Update docs when tasks/commands/config change.
  - Verify `vite.config.ts` `base` path when repo name changes.
  - No generated artifacts committed (coverage/, playwright-report/, test-results/).
- **Scope & size**: Keep PRs focused and reasonably small; split large changes.
- **CI & reviews**: Require passing checks and at least one review approval before merging.
- **Labels**: Apply `feat`, `fix`, `docs`, `chore`, `ci`, or `deps` as appropriate.

### Auto-sync: main → dev (Workflow)

- The GitHub Actions workflow [./.github/workflows/auto-merge-main-to-dev.yml](.github/workflows/auto-merge-main-to-dev.yml) automatically syncs `dev` with `main` on every push to `main`.
- Behavior:
  - Creates a `sync/main-to-dev-<timestamp>` branch from `dev` (or from `main` if `dev` doesn’t exist yet).
  - Merges `origin/main` into that sync branch and opens a PR targeting `dev`.
  - Auto-merges the PR if there are no conflicts.
  - On conflicts, it pushes the sync branch, opens a PR to `dev`, and creates an issue with step-by-step resolution instructions.
- Guidance:
  - Do not manually merge `main` into `dev` during normal operation; let the workflow handle it.
  - If a conflict PR/issue is created, resolve conflicts in the PR, push updates to the sync branch, and complete the merge.
  - Avoid direct pushes to `dev`/`main`; use PRs for traceability.

### Git CLI Quick Reference

Start a feature/fix/docs branch from `dev`:

```bash
git checkout dev
git pull origin dev
git checkout -b feat/<scope>-<short-desc>
# or: fix/<scope>-<short-desc>, docs/<short-desc>, chore/<area>-<short-desc>
```

Stage and commit changes:

```bash
git add -A
git commit -m "feat(scope): concise summary"
```

Push your branch and set upstream:

```bash
git push -u origin feat/<scope>-<short-desc>
```

Keep branch up to date with latest `dev` (rebase preferred):

```bash
git fetch origin
git rebase origin/dev
# resolve conflicts, then:
git add <files>
git rebase --continue
```

Open a PR (GitHub UI preferred). Optional via GitHub CLI if installed:

```bash
# from your feature branch
gh pr create --fill --base dev --head feat/<scope>-<short-desc>
```

After approval, squash merge via GitHub UI. Optionally squash locally:

```bash
git checkout dev
git pull origin dev
git merge --squash feat/<scope>-<short-desc>
git commit -m "feat(scope): summary (squash)"
git push origin dev
```

Release tagging (semantic version):

```bash
git checkout main
git pull origin main
git tag vX.Y.Z
git push origin vX.Y.Z
```

Sync `dev` with `main` after release:

Note: This is handled automatically by the auto-sync workflow. Use the manual commands below only for exceptional cases (e.g., CI outage).

```bash
git checkout dev
git pull origin dev
git merge --ff-only origin/main
git push origin dev
```

Cleanup merged branches:

```bash
git branch -d feat/<scope>-<short-desc>
git push origin --delete feat/<scope>-<short-desc>
```

### VS Code Extensions (Auto-recommended)

- **TypeScript** - Enhanced TypeScript support
- **ESLint** - Code linting and formatting
- **Prettier** - Code formatting
- **Playwright** - E2E testing support
- **Vitest Explorer** - Visual test running and debugging
- **Test Explorer** - Additional test management
- **Vite** - Enhanced Vite development experience
- **React Snippets** - Helpful React code snippets
- **Tailwind CSS** - CSS framework support (if using Tailwind)

## Performance Optimizations

### Workflow Optimizations

- **Path filters**: Tests only run when relevant files change
- **Browser caching**: Playwright browsers are cached across runs
- **Dependency caching**: Node modules cached for faster installs
- **Parallel execution**: Tests run in parallel for faster feedback

### Development Optimizations

- **Hot reload**: Instant feedback during development
- **Test watch mode**: Automatic test re-runs on file changes
- **Source maps**: Precise debugging information
- **TypeScript incremental builds**: Faster compilation

You're ready to start building with test-driven development! 🚀

---

> 📚 **Learning TDD?** Don't forget to check out our [Beginner-Friendly Guide](README.md) for step-by-step tutorials and examples!
