import { API_BASE, API_KEY } from '@/services/api'
import Image from 'next/image'
import { Production } from '@/@types'

const getProductions = async () => {
  const req = await fetch(
    `${API_BASE}/discover/tv?with_networkid=213&language=pt-BR&api_key=${API_KEY}`
  )
  return await req.json()
}

const Home = async () => {
  const productions = await getProductions()
  return (
    <div className="container mx-auto py-8">
      {productions.results.length > 0 ? (
        <>
          <h2 className="text-2xl lg:text-4xl font-bold mb-8 text-center">
            Produções
          </h2>
          <ul className="flex gap-4 flex-wrap flex-col md:flex-row justify-center">
            {productions.results.map((production: Production) => (
              <li
                key={production.id}
                className="rounded-2xl text-center bg-blue-300 flex flex-col gap-y-4 max-w-[90%] items-center justify-between p-4 w-[350px]">
                <Image
                  src={`https://image.tmdb.org/t/p/w300${production.poster_path}`}
                  alt={production.name}
                  width={300}
                  height={300}
                  className="rounded-3xl"
                  priority={false}
                />
                <p>{production.name}</p>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  )
}

export default Home
