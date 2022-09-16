import { doc, getDocs, collection } from "firebase/firestore";
import { db, storage } from "../firebase/config"

import React from 'react'
import { useState } from "react";
import { useEffect } from "react";

const useFirestore = (collection1) => {
    const [tempDoc, setTempDoc] = useState([])
    let documents = [];
    useEffect(() => {
        async function fetchData(){
        const querySnapshot =  await getDocs(collection(db, collection1));
        querySnapshot.forEach((doc) => {
            documents.push({ id: doc.id, ...doc.data() })
        })}
        fetchData()
        setTempDoc(documents)
    }, [collection1])
   // console.log(tempDoc)
    return { tempDoc }
}

export default useFirestore;