import { db,getDocs, collection} from "../firebase/config"
import { useState } from "react";
import { useEffect } from "react";

const useFirestore = (collection1) => {
    const [tempDoc, setTempDoc] = useState([])
    let documents = [];
    useEffect(() => {
        async function fetchData() {
            try{
                const querySnapshot = await getDocs(collection(db, collection1));
                querySnapshot.forEach((doc) => {
                    documents.push({ id: doc.id, ...doc.data() })
                })
            
            setTempDoc(documents)
        } 
            catch (error) {
                console.log("error", error);
            }
            };
        fetchData()
    }, [collection1])
      return { tempDoc }
}

export default useFirestore;