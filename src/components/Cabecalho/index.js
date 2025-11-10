import { useHeader } from 'context/HeaderContext'
import { Link } from 'react-router-dom'
import db from "db.json"
import "./Cabecalho.css"

const Cabecalho = () => {
  const {alternado, setAlternado} = useHeader()

  const handleClick = () =>{
    setAlternado(true)
  }

  return (
    <header className={alternado ? "alternado" : ''}>
      <span></span>
      {db.header.map((item) => (
        <Link 
          to={item.link} 
          onClick={handleClick}
          style={{backgroundImage: `url(${item.bg})`}}>
            <h1>{item.h1}</h1>
        </Link>
      ))}
      <span></span>
    </header>
  )
}

export default Cabecalho