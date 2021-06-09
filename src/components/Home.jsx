import { Link } from 'react-router-dom'

export function Home() {
  return (
    <>
      <h2> Home </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <div>
        <ul>
          <li>
            <Link to="/details/1">Rocky</Link>
          </li>
          <li>
            <Link to="/details/1">Charzard</Link>
          </li>
          <li>
            <Link to="/details/1">Longneck</Link>
          </li>
          <li>
            <Link to="/details/1">String</Link>
          </li>
          <li>
            <Link to="/details/1">Raptor</Link>
          </li>
          <li>
            <Link to="/details/1">Billy</Link>
          </li>
        </ul>
      </div>
    </>
  )
}
