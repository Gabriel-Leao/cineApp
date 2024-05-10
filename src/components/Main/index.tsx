import Image from 'next/image'
import data from '../../articles.json'

const Main = () => {
  return (
    <div>
      <input
        type="text"
        id="search"
        placeholder="Procurar aqui"
      />
      {data.map((article, key) => (
        <div
          className=""
          key={key}>
          <h1>{article.title}</h1>
          {article.image && (
            <Image
              src={article.image}
              alt={article.title}
              width={300}
              height={300}
            />
          )}
        </div>
      ))}
    </div>
  )
}

export default Main
