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
      <OptionsDropdown dropOptions={OptionsData.races}/>
      <OptionsDropdown dropOptions={OptionsData.classes}/>
      <OptionsDropdown dropOptions={OptionsData.alignment}/>
      <OptionsDropdown dropOptions={OptionsData.background}/>
    </div>
  )
}

export default CharacterOptions
