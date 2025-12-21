export default function Header() {
  return (
    <header>
      <h1>ReactTS Project Template</h1>
      <p>
        This project is configured for learning Test-Driven Development (TDD) with
        Vitest for unit tests and Playwright for end-to-end tests.
      </p>
      <p>
        Learn TDD:{' '} 
        <a href="https://martinfowler.com/bliki/TestDrivenDevelopment.html" target="_blank" rel="noopener noreferrer">Martin Fowler</a>
        {' '}·{' '}
        <a href="https://testing-library.com/docs/guiding-principles/" target="_blank" rel="noopener noreferrer">RTL Principles</a>
        {' '}·{' '}
        <a href="https://vitest.dev/guide/" target="_blank" rel="noopener noreferrer">Vitest Guide</a>
        {' '}·{' '}
        <a href="https://playwright.dev/docs/intro" target="_blank" rel="noopener noreferrer">Playwright Intro</a>
      </p>
    </header>
  )
}
