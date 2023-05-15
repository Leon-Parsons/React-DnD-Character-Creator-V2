import {useState, createContext} from 'react';

export const CharacterContext = createContext();

function CharacterContextProvider(props) {
  const[charData, setCharData] = useState({
    charName:'Jim',
    charRace:'Orc',
    charClass:'Barbarian',
    charAlignment:'Neutral Good',
    charBackground:'Entertainer',
    strength: 0,
    dexterity: 0,
    constitution: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 0,
  });

  return(
    <CharacterContext.Provider value={charData}>
      {props.children}
    </CharacterContext.Provider>
  )
}

export default CharacterContextProvider;