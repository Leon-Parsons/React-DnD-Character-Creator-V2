import {useContext} from 'react';
import { CharacterContext } from '../contexts/CharacterContext';
import {OptionsData} from '../utilities/OptionsData';

const CharacterOptions = () => {
  const {charRace, charClass, charAlignment, charBackground} = useContext(CharacterContext);
  return (
    <div>
      <p>Char ops</p>
      <p>{charRace}</p>
      <p>{charClass}</p>
      <p>{charAlignment}</p>
      <p>{charBackground}</p>
    </div>
  )
}

export default CharacterOptions
