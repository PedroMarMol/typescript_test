import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

function wrapInArray(obj: string | string[]) {
  if (typeof obj === "string") {
    return console.log([obj])
  }
  return console.log('no')
}

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="w-full font-mono text-sm">
        {wrapInArray('hey')}
        <p>hi this is a typescript test</p>
      </div>
    </main>
  )
}
