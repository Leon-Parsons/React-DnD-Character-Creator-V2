import {useState} from 'react';
import CharacterOptions from '../pages/CharacterOptions';

export const OptionsDropdown = ({vals}) => {

  return (
    <div>
      <select>
      {vals.map((op) => {
        return <option key={op}>{op}</option>
      })}
      </select>
    </div>
  )
}

export default OptionsDropdown
