import { db,getDocs, collection, query,orderBy} from "../firebase/config"
import { useState } from "react";
import { useEffect } from "react";

const useFirestore = (collection1) => {
    const [tempDoc, setTempDoc] = useState([])
    let documents = [];
    useEffect(() => {
        async function fetchData() {
            try{
                const querySnapshot = await getDocs(query(collection(db, collection1),orderBy("time","desc")));
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