import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export function Home() {
  const [pets, setPets] = useState([])

  useEffect(function () {
    async function loadPets() {
      const response = await fetch('localhost:5000/api/Pets')

      if (response.status === 200) {
        const json = await response.json()

        setPets(json)
      }
    }

    loadPets()
  }, [])

  return (
    <>
      <p>
        Take me back to the old days when times were simple, take me back to my
        tamagotchi and gameboy!
      </p>
      <div>
        <h3>Featured Pets</h3>
        <ul>
          {pets.map(pets => (
            <li>
              <Link to="/details/1">{pets.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
