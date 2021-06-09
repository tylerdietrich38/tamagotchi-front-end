export function Layout(props) {
  return (
    <>
      <header>
        <h1>Tylergotchi</h1>
      </header>
      <main>{props.children}</main>
      <footer>
        <p>Made with 🤘 in Bradenton, FL</p>
      </footer>
    </>
  )
}
