import { useState, useEffect } from 'react';
import { db, storage } from "../firebase/config"
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytesResumable, uploadString, uploadBytes, getDownloadURL } from "firebase/storage";
import { setDoc, doc } from "firebase/firestore";

const useStorage = (file1) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);
  useEffect(() => {
    // references
    const item = file1.file
    console.log(item.picture)
    const metadata = {
      contentType: 'image/jpeg'
    };
    const fireName = item.name + new Date().getTime();
    if (item != null) {
      const fireName = item.name + new Date().getTime();
      const placesRef = collection(db, "travApp");
      const storageRef = ref(storage, 'travApp/' + fireName);
      const uploadTask = uploadBytesResumable(storageRef, item.picture, metadata);
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
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setDoc(doc(placesRef, fireName), { postImage: downloadURL }, { merge: true })
          });
          delete item.picture;
          setDoc(doc(placesRef, fireName), item, { merge: true });
        })
    }
  }, [file1]
  );
  return { progress, url, error };
}
export default useStorage;