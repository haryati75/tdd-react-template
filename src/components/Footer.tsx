import ExternalLink from './ExternalLink'

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        <ExternalLink href="https://github.com/haryati75/tdd-react-template">GitHub Repo</ExternalLink>
        {' '}|{' '}
        © 2025 <ExternalLink href="https://github.com/haryati75">Haryati H</ExternalLink>
        {' '}|{' '}
        <ExternalLink href="https://opensource.org/licenses/MIT">MIT License</ExternalLink>
      </p>
      <p>
        Built with <ExternalLink href="https://vitejs.dev">Vite</ExternalLink> and <ExternalLink href="https://react.dev">React</ExternalLink>
        {' '}|{' '}
        Tests: <ExternalLink href="https://vitest.dev/">Vitest</ExternalLink> (unit) & <ExternalLink href="https://playwright.dev/">Playwright</ExternalLink> (E2E)
      </p>
    </footer>
  )
}
