import {useContext} from 'react';
import { CharacterContext } from '../contexts/CharacterContext';

const CharacterStats = () => {
  const {strength, dexterity, constitution, intelligence, wisdom, charisma} = useContext(CharacterContext)
  return (
    <div>
      <p>char stats</p>
      <p>{strength}</p>
      <p>{dexterity}</p>
      <p>{constitution}</p>
      <p>{intelligence}</p>
      <p>{wisdom}</p>
      <p>{charisma}</p>
    </div>
  )
}

export default CharacterStats
