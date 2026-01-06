
import { Link } from "react-router-dom"
import "./header.css"

export default function Header() {
  return(
    <header>    
      <Link className="logo" to="/">Prime fix</Link>
      <Link className="favoritos" to="/favoritos">Meus filmes</Link>
    </header>
  )
}