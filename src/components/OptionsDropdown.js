import {useState} from 'react';
import CharacterOptions from '../pages/CharacterOptions';

export const OptionsDropdown = ({dropOptions}) => {

  return (
    <div>
      <select>
      {dropOptions.map((op) => {
        return <option key={op}>{op}</option>
      })}
      </select>
    </div>
  )
}

export default OptionsDropdown
