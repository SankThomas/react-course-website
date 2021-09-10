import Button from "./Button"

export default function Header() {
  return (
    <>
      <header className="flex flex-col items-center justify-center p-5 sm:flex-row sm:justify-between lg:px-10 fixed w-full shadow bg-white top-0 left-0">
        <div>
          <h2 className="font-bold text-4xl">
            <a href="https://react-course-website.netlify.app">Sankara</a>
          </h2>
        </div>

        <nav>
          <ul className="flex items-center">
            <li className="mr-3">
              <a href="https://udemy.com/thomas-sankara-babu">Discussions</a>
            </li>
            <li>
              <Button />
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}
