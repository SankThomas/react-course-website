import { useState } from "react"
import { data } from "../data/data"
// import Filter from "./Filter"

export default function Cards() {
  // eslint-disable-next-line
  const [cards, setCards] = useState(data)

  return (
    <>
      <section className="p-5 pt-32">
        <h2 className="text-4xl tracking-widest font-bold">What we'll build</h2>
        <p className="md:text-lg text-gray-500 mb-5">
          Click on the cards to see the app demo.
        </p>

        {/* <Filter /> */}

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cards.map(({ id, title, image, link, category }) => {
            return (
              <a href={link} key={id}>
                <article className="bg-white rounded shadow-lg transition-all duration-500 hover:shadow-none">
                  <img
                    src={image}
                    alt={title}
                    title={title}
                    className="w-full rounded h-44"
                  />
                  <h4 className="text-gray-900 font-bold tracking-wider text-base mt-2 p-2">
                    {title}
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
