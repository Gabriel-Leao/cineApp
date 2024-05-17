import { API_BASE, API_KEY } from '@/services/api'

const getProduction = async (id: string) => {
  const req = await fetch(
    `${API_BASE}/movie/${id}&language=pt-BR&api_key=${API_KEY}`
  )
  const data = await req.json()

  return data.results
}

const Page = async ({ params }: { params: { id: string } }) => {
  const production = await getProduction(params.id)
  return (
    <div>
      {production ? <h1>{production}</h1> : <h1>Produção não encontrada</h1>}
    </div>
  )
}

export default Page
