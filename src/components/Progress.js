import React from 'react'
import useStorage from './hooks/useStorage';
import useFirestore from './hooks/useFirestore';


const Progress = (file,setFile) => {
    const {progress} = useStorage(file)
    
  return (
    <div></div>
  )
}

export default Progress;