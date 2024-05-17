import Image from 'next/image'
import { ProductionCardProps } from '@/@types'
import Link from 'next/link'

const ProductionCard = ({ production }: ProductionCardProps) => {
  return (
    <Link
      className="rounded-2xl text-center flex flex-col gap-y-4 mx-auto max-w-[95%] items-center justify-between p-4 w-[350px]"
      href={`/production/${production.id}`}>
      <Image
        src={`https://image.tmdb.org/t/p/w300${production.poster_path}`}
        alt={production.name}
        width={300}
        height={300}
        className="rounded-3xl cursor-pointer"
        priority={false}
      />
      <p className="cursor-pointer">{production.name}</p>
    </Link>
  )
}

export default ProductionCard
