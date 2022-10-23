import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="p-3 bottom-0 bg-gray-200 flex text-gray-500 place-content-evenly">
      <p>©{new Date().getFullYear()} HARASHO</p>
      <p><Link href="/">IdeaTech by Next.js + microCMS</Link></p>
      <a
      href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      target="_blank" rel="noreferrer">
      Powered by{' '}
        <span className="h-[1] ml-0.5">
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </a>
    </footer>
  )
}

export default Footer