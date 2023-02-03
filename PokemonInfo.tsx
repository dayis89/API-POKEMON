import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { Pokemon } from './types'

export const PokemonInfo = () => {
  const params = useParams()
  console.log(params)
  const [pokemon, setPokemon] = useState<Pokemon | null>(null)

  useEffect(() => {
    getPokemon()
  }, [])

  const getPokemon = async () => {
    const data = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${params.name}`
    ).then(res => res.json())
    console.log(data)
    setPokemon(data)
  }

  return (
    <>
      {pokemon ? (
        <div className='card'>
          <img
            src={pokemon.sprites.other?.dream_world.front_default}
            className='card-img-top'
            alt='...'
          />
          <div className='card-body'>
            <h5 className='card-title'>{pokemon.name}</h5>
            <p>Habilidades</p>
            <ul>
              {pokemon.abilities.map(hability => (
                <li>{hability.ability.name}</li>
              ))}
            </ul>
            <Link className='btn btn-primary' to={`/`}>
              Regresar
            </Link>
          </div>
        </div>
      ) : (
        <div>PokemonInfo</div>
      )}
    </>
  )
}
