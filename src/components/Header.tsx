import ExternalLink from './ExternalLink'

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
        <ExternalLink href="https://martinfowler.com/bliki/TestDrivenDevelopment.html">Martin Fowler</ExternalLink>
        {' '}·{' '}
        <ExternalLink href="https://testing-library.com/docs/guiding-principles/">RTL Principles</ExternalLink>
        {' '}·{' '}
        <ExternalLink href="https://vitest.dev/guide/">Vitest Guide</ExternalLink>
        {' '}·{' '}
        <ExternalLink href="https://playwright.dev/docs/intro">Playwright Intro</ExternalLink>
      </p>
    </header>
  )
}
