import { useState } from "react"
import { data } from "../data/data"

export default function Cards() {
  // eslint-disable-next-line
  const [cards, setCards] = useState(data)
  return (
    <>
      <section className="p-5 pt-32">
        <h2 className="text-4xl tracking-widest font-bold">What we'll build</h2>
        <p className="md:text-lg text-gray-500 mb-10">
          Click on the cards to see the app demo.
        </p>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => {
            return (
              <a href={card.link}>
                <article
                  key={card.id}
                  className="bg-white p-3 rounded shadow-lg transition-all duration-500 hover:shadow-none"
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    title={card.title}
                    className="w-full rounded h-44"
                  />
                  <h4 className="text-gray-900 font-bold tracking-wider text-base mt-1">
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
