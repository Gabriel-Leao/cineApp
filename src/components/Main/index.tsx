import { API_BASE, API_KEY } from '@/services/api'
import { Production } from '@/@types'
import ProductionCard from '@/components/ProductionCard'

const getProductions = async () => {
  const req = await fetch(
    `${API_BASE}movie/top_rated&language=pt-BR&api_key=${API_KEY}`
  )
  const data = await req.json()

  return data.results
}

const Home = async () => {
  const productions = await getProductions()
  return (
    <div className="container mx-auto py-8">
      {productions.length > 0 ? (
        <>
          <h2 className="text-2xl lg:text-4xl font-bold mb-8 text-center">
            Produções
          </h2>
          <div className="sm:grid lg:grid-cols-3 sm:grid-cols-2">
            {productions.map((production: Production) => (
              <ProductionCard
                production={production}
                key={production.id}
              />
            ))}
          </div>
        </>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  )
}

export default Home
