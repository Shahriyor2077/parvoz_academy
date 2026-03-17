import { createContext, useContext, useState } from 'react'

const LangContext = createContext(null)

export function LangProvider({ children }) {
  const [lang, setLang] = useState('uz')
  const toggle = () => setLang(l => l === 'uz' ? 'ru' : 'uz')
  return (
    <LangContext.Provider value={{ lang, setLang, toggle }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)
