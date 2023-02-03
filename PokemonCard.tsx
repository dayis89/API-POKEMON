import React from 'react'
import { Pokemon } from './types';
import {Link} from 'react-router-dom'
interface Props {
    pokemon:Pokemon
    i:number
}

export const PokemonCard = ({pokemon,i}:Props) => {
  return (
    <div className='card'>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i+1}.svg`} className='card-img-top' alt='...' />
      <div className='card-body'>
        <h5 className='card-title'>{pokemon.name}</h5>
        <Link  className='btn btn-primary' to={ `/pokemon/${pokemon.name}` }>
          Mas Informacion
        </Link>
      </div>
    </div>
  )
}
