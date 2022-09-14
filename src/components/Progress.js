import React from 'react'
import useStorage from './hooks/useStorage';

const Progress = (file,setFile) => {
    const {progress} = useStorage(file)
    //console.log(file.file)
  return (
    <div>{progress}</div>
  )
}

export default Progress;