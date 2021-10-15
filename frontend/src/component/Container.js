import {useEffect} from 'react'

import { connectSocket } from '../socketApi'
import Options from './Options';
import Question from './Question';

function Container() {
  useEffect(()=> {
      connectSocket();
  },[]);
  
    return (
        <div>
            <Question/>
            <Options/>
        </div>
    )
}

export default Container
