import { HomeCarousel } from "./components/HomeCarousel"
import { ItemListContainer } from "./components/ItemListContainer"
import { NavBar } from "./components/NavBar"

export const App = () => {
  return (
    <>
    <NavBar />
    <HomeCarousel />
    <ItemListContainer />
    </>
  )
}
