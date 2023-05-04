function wrapInArray(obj: string | string[]) {
  if (typeof obj === "string") {
    return console.log([obj])
  }
  return console.log('no')
}

function greet(person?: string, date?: Date) {
  let today = date ? date : new Date()
  console.log(`Hello ${person}, today is ${today}!`)
}

greet("Brendan")

interface Options {
  width: number
}

function configure(x: Options | "auto") {
  // 
}

configure({ width: 100 })
configure("auto")

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <div className="w-full font-mono text-sm">
        {wrapInArray('hey')}
        <p>hi this is a typescript test</p>
      </div>
    </main>
  )
}
