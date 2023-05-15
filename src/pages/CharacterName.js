import {useContext }from 'react';
import { CharacterContext } from '../contexts/CharacterContext';


const CharacterName = () => {

  const {charName} = useContext(CharacterContext);
  return (
    <div>
      <p>name selector</p>
      <p>{charName}</p>
    </div>
  )
}

export default CharacterName
