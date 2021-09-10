import Cards from "./components/Cards"
import Footer from "./components/Footer"
import FootNote from "./components/FootNote"
import Header from "./components/Header"
import Hero from "./components/Hero"

const App = () => {
  return (
    <main className="xl:max-w-7xl xl:mx-auto">
      <Header />
      <Hero />
      <Cards />
      <section className="px-5">
        <FootNote />
        <Footer />
      </section>
    </main>
  )
}

export default App
