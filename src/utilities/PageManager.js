import {useState} from 'react'
import Homepage from '../pages/Homepage';
import CharacterName from '../pages/CharacterName';
import CharacterOptions from '../pages/CharacterOptions';
import CharacterStats from '../pages/CharacterStats';
import ConfirmCharacter from '../pages/ConfirmCharacter';

import CharacterContextProvider from '../contexts/CharacterContext';

const PageManager = () => {

  const [page, setPage] = useState(0);

  const nextPage = () => {
    setPage(page + 1)
  }

  const previousPage = () => {
    setPage(page - 1);
  }

  const displayPage = () => {
    if(page ==0) {
      return <Homepage/>
    } else if(page==1) {
      return <CharacterName/>
    } else if (page==2) {
      return <CharacterOptions/>
    } else if (page==3) {
      return <CharacterStats/>
    } else {
      return <ConfirmCharacter/>
    }
  }

  return (
    <div>
      <div className='pageDiv'>
        <CharacterContextProvider>
          {displayPage()}
        </CharacterContextProvider>
      </div>
      <button onClick={previousPage} disabled={page <= 1}>Previous</button>
      <button onClick={nextPage} disabled={page >= 4}>Next</button>
    </div>
  )
}

export default PageManager
