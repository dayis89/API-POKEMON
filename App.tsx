import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { PokemonCard } from './PokemonCard'

function App () {
  const [pokemonList, setPokemonList] = useState([])
  const [isAuth, setIsAuth] = useState(false)
  const [correo, setCorreo] = useState('')
  const [password , setPassword] = useState('')
  useEffect(() => {
    getPokemons()
  }, [])

  const getPokemons = async () => {
    const data = await fetch('https://pokeapi.co/api/v2/pokemon').then(res =>
      res.json()
    )

    setPokemonList(data.results)
  }

  const onSubmit=(e:any)=>{
    e.preventDefault();

    if(password==="admin"&& correo==="admin@correo.com"){
      setIsAuth(true)
    }
  }
  return (
    <>
      {isAuth ? (
        <div className='App'>
          {pokemonList.map((poke, i) => (
            <PokemonCard pokemon={poke} i={i} />
          ))}
        </div>
      ) : (
        <form onSubmit={onSubmit} >
          <div className='mb-3'>
            <label htmlFor='exampleInputEmail1' className='form-label'>
              Correo
            </label>
            <input
              type='email'
              className='form-control'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
              value={correo}
              onChange={(e)=>setCorreo(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='exampleInputPassword1' className='m-label'>
              Contraseña
            </label>
            <input
              type='password'
              className='form-control'
              id='exampleInputPassword1'
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          <button type='submit' className='btn btn-primary'>
            Entrar
          </button>
        </form>
      )}
    </>
  )
}

export default App
