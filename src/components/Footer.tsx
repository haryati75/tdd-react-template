export default function Footer() {
  return (
    <footer className="footer">
      <p>
        <a href="https://github.com/haryati75/tdd-react-template" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
        {' '}|{' '}
        © 2025 <a href="https://github.com/haryati75" target="_blank" rel="noopener noreferrer">Haryati H</a>
        {' '}|{' '}
        <a href="https://opensource.org/licenses/MIT" target="_blank" rel="noopener noreferrer">MIT License</a>
      </p>
      <p>
        Built with <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">Vite</a> and <a href="https://react.dev" target="_blank" rel="noopener noreferrer">React</a>
        {' '}|{' '}
        Tests: <a href="https://vitest.dev/" target="_blank" rel="noopener noreferrer">Vitest</a> (unit) & <a href="https://playwright.dev/" target="_blank" rel="noopener noreferrer">Playwright</a> (E2E)
      </p>
    </footer>
  )
}
