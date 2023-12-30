import Title from "./components/Title"
import Card from "./components/Card"
import ConverterForm from "./components/ConverterForm"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex flex-col custom-flex-gap">
          <Title />
          <Card>
              <ConverterForm />
          </Card>
      </div>
    </main>
  )
}
