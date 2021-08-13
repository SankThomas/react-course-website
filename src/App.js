import { useState } from "react"
import { data } from "./data"

const App = () => {
  // eslint-disable-next-line
  const [cards, setCards] = useState(data)
  return (
    <>
      <section className="p-5">
        <h1 className="text-4xl uppercase tracking-widest text-center text-white font-bold mb-10 lg:text-6xl">
          What we'll build
        </h1>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:max-w-6xl lg:mx-auto">
          {cards.map((card) => {
            return (
              <a href={card.link}>
                <article key={card.id}>
                  <img
                    src={card.image}
                    alt={card.title}
                    title={card.title}
                    className="w-full rounded-t md:w-auto md:h-80 md:w-full lg:h-72"
                  />
                  <h4 className="text-white font-bold uppercase tracking-widest text-sm mt-1">
                    {card.title}
                  </h4>
                </article>
              </a>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default App
