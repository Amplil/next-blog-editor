import Link from 'next/link'
//import Image from 'next/image'

const Header = () => {
  return (
    <header className="top-0 w-full bg-[#55c500]">
      <div className="flex p-6 text-white justify-center">
        <ul>
          <li className="text-2xl bold font-bold"><Link href="/">アイデア！テック</Link></li>
        </ul>
      </div>
    </header>
  )
}

export default Header