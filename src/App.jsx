import { ItemListContainer } from "./components/ItemListContainer"
import { NavBar } from "./components/NavBar"

export const App = () => {
  return (
    <>
    <NavBar />
    <ItemListContainer greeting = {'El sitio se encuentra en mantenimiento'} greeting2 = {'Disculpe las molestias'}/>
    </>
  )
}
