import Image from 'next/image'
import Link from 'next/link'

import logoImg from '/public/logo.png'

const Header = () => {
  return (
    <header className="flex justify-around bg-black items-center py-4">
      <div>
        <Image
          src={logoImg}
          alt="logo"
          width={30}
        />
      </div>
      <nav>
        <ul className="flex gap-4">
          <li>
            <Link
              href=""
              className="text-white text-lg">
              home
            </Link>
          </li>
          <li>
            <Link
              href=""
              className="text-white text-lg">
              filmes
            </Link>
          </li>
          <li>
            <Link
              href=""
              className="text-white text-lg">
              contato
            </Link>
          </li>
          <li>
            <Link
              href=""
              className="text-white text-lg">
              sobre
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
