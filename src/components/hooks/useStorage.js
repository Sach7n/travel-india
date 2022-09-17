import { useState, useEffect } from 'react';
import { setDoc, doc, collection,ref, uploadBytesResumable,  getDownloadURL,db, storage } 
from "../firebase/config"

const useStorage = (file1) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  useEffect(() => {
    // references
    const item = file1.file
    const metadata = {
      contentType: 'image/jpeg'
    };
    const fireName = item.title + new Date().getTime();
    if (item != null) {
      const fireName = item.title + new Date().getTime();
      const placesRef = collection(db, "travApp");
      const storageRef = ref(storage, 'travApp/' + fireName);
      const uploadTask = uploadBytesResumable(storageRef, item.img, metadata);
      uploadTask.on('state_changed',
        (snapshot) => {
          const prog = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(prog)
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error)
          setError(error)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setDoc(doc(placesRef, fireName), { img: downloadURL }, { merge: true })
          });
          delete item.img;
          setDoc(doc(placesRef, fireName), item, { merge: true });
        })
    }
  }, [file1]
  );
  return { progress,  error };
}
export default useStorage;