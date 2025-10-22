import { createContext, useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const HeaderContext = createContext()

export function HeaderProvider({ children }) {
  const [alternado, setAlternado] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (location.pathname !== "/") {
      const save = localStorage.getItem("alternado")
      if (save) setAlternado(save)
    }
    setLoaded(true)
  }, [location.pathname])

  useEffect(() => {
    if (alternado) localStorage.setItem("alternado", alternado)
  }, [alternado])

  return (
    <HeaderContext.Provider value={{ alternado, setAlternado }}>
      {children}
    </HeaderContext.Provider>
  )
}

export function useHeader() {
  return useContext(HeaderContext)
}
