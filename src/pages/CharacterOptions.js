import {useContext} from 'react';
import { CharacterContext } from '../contexts/CharacterContext';
import {OptionsData} from '../utilities/OptionsData';
import OptionsDropdown from '../components/OptionsDropdown';

const CharacterOptions = () => {
  const {charRace, charClass, charAlignment, charBackground} = useContext(CharacterContext);

  return (
    <div>
      <p>Char ops</p>
      <p>{charRace}</p>
    </div>
  )
}

export default CharacterOptions
