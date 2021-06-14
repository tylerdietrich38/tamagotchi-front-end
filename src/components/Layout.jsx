import { Link } from 'react-router-dom'

export function Layout(props) {
  return (
    <>
      <header>
        <h1>
          <Link to="/">Tylergotchi</Link>
        </h1>
      </header>
      <main>{props.children}</main>
      <footer>
        <p>Made with 🤘 in Bradenton, FL</p>
      </footer>
    </>
  )
}
