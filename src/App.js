import { useState } from "react"
import { data } from "./data"

const App = () => {
  // eslint-disable-next-line
  const [cards, setCards] = useState(data)
  return (
    <>
      <section>
        <h1>ReactJS Course Website</h1>
        {cards.map((card) => {
          return (
            <a href={card.link}>
              <article key={card.id}>
                <img src={card.image} alt={card.title} />
                <h4>{card.title}</h4>
              </article>
            </a>
          )
        })}
      </section>
    </>
  )
}

export default App
