# TDD React/TS Trivia App Template

A complete React TypeScript template with comprehensive testing setup and automated deployment to GitHub Pages.

## Features

- ⚛️ **React 19** with TypeScript
- 🧪 **Vitest** for unit testing with coverage reports
- 🎭 **Playwright** for end-to-end testing
- 🚀 **GitHub Actions** CI/CD pipeline
- 📦 **Automated deployment** to GitHub Pages
- 🎯 **Test-driven development** ready

## Getting Started

### Using This Template

1. **Create a new repository from this template**:
   - Click "Use this template" button on GitHub
   - Or clone this repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/trivia-app.git my-new-project
   cd my-new-project
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Install Playwright browsers** (first time only):
   ```bash
   npx playwright install --with-deps
   ```

4. **Update project configuration**:
   - Update `package.json` with your project name and details
   - Update the `base` path in `vite.config.ts` to match your repository name:
   ```typescript
   export default defineConfig({
     base: '/your-repo-name/', // Replace with your actual repo name
     // ... rest of config
   });
   ```

### Running the Project

- **Development server**:
  ```bash
  npm run dev
  ```

- **Unit tests**:
  ```bash
  npm run test
  ```

- **Unit tests with coverage**:
  ```bash
  npm run test:coverage
  ```

- **End-to-end tests**:
  ```bash
  npm run e2e
  ```

- **Build for production**:
  ```bash
  npm run build
  ```

## Testing Stack

### Unit Testing (Vitest + React Testing Library)
- **Vitest**: Fast unit test runner
- **React Testing Library**: Testing utilities for React components
- **Istanbul**: Code coverage reporting
- **jsdom**: Browser environment simulation

### E2E Testing (Playwright)
- **Playwright**: Cross-browser end-to-end testing
- **Multi-browser support**: Chrome, Firefox, Safari
- **Automatic screenshots and traces on failure

### Example Unit Test
```typescript
// src/tests/App.test.tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

test('should display trivia question', () => {
  render(<App />);
  expect(screen.getByText(/trivia/i)).toBeInTheDocument();
});
```

### Example E2E Test
```typescript
// e2e/trivia.spec.ts
import { test, expect } from '@playwright/test';

test('trivia app loads correctly', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByText('Trivia App')).toBeVisible();
});
```

## CI/CD Pipeline

This template includes a complete GitHub Actions workflow with:

### 1. Automated Testing (`all-tests.yml`)
Runs on every push and pull request:
- Unit tests with coverage
- End-to-end tests across multiple browsers
- Test artifact uploads

### 2. Automated Deployment (`deploy.yml`)
Deploys to GitHub Pages when:
- Tests pass successfully
- Changes are pushed to `main` branch

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
  base: '/your-repo-name/', // Important: Use your actual repository name
  // ... rest of config
});
```

### 4. Deploy
Push to the `main` branch and the workflow will:
1. Run all tests
2. Build the project
3. Deploy to GitHub Pages
4. Your app will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

## Project Structure

```
your-project/
├── .github/workflows/
│   ├── all-tests.yml          # Test workflow
│   └── deploy.yml             # Deployment workflow
├── src/
│   ├── components/            # React components
│   ├── tests/                 # Unit tests
│   ├── setupTests.ts          # Test configuration
│   └── main.tsx
├── e2e/                       # End-to-end tests
├── coverage/                  # Coverage reports
├── playwright-report/         # E2E test reports
├── vite.config.ts            # Vite configuration
├── playwright.config.ts      # Playwright configuration
└── package.json
```

## Configuration Files

### Vite Configuration (`vite.config.ts`)
```typescript
/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/', // Update this!
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    coverage: {
      provider: 'istanbul',
      exclude: ['node_modules', 'dist', 'src/tests', 'src/main.tsx'],
    },
  },
});
```

### TypeScript Configuration
Add to `tsconfig.app.json`:
```json
{
  "include": ["src", "node_modules/vitest/globals.d.ts"]
}
```

## Development Workflow

1. **Write a failing test** (TDD approach)
2. **Implement the feature** to make the test pass
3. **Refactor** if needed
4. **Commit and push** to trigger CI/CD
5. **Review** test results and deployment

## Viewing Reports

- **Coverage Report**: Open `coverage/index.html` after running `npm run test:coverage`
- **Playwright Report**: Open `playwright-report/index.html` after running E2E tests
- **GitHub Actions**: Check the Actions tab in your repository

## Troubleshooting

### Common Issues

1. **Deployment fails**: Check the base path in `vite.config.ts` matches your repo name
2. **Tests fail in CI**: Ensure all dependencies are in `package.json`
3. **GitHub Pages not working**: Verify repository settings and workflow permissions

### Getting Help

- Check the **Actions** tab for detailed error logs
- Review the **Issues** section of this template repository
- Ensure your repository has the correct permissions set up

---

## Dependencies

This template includes all necessary dependencies:

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Vitest** + **React Testing Library** for unit testing
- **Playwright** for E2E testing
- **Istanbul** for coverage reporting

You're ready to start building with test-driven development! 🚀
