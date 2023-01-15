import { Injectable } from '@angular/core';


import { Firestore, collectionData } from '@angular/fire/firestore';
import { collection, query, updateDoc, where } from '@firebase/firestore';
import { addDoc, doc, deleteDoc } from 'firebase/firestore';




import { ref, getStorage, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { Storage } from '@angular/fire/storage';
import { Observable } from 'rxjs';


import { Address } from './address';





@Injectable({
  providedIn: 'root'
})
export class FirebseService {
  images: string[];
 
  constructor(private _fireStore: Firestore, private cloudDataBase: Storage) { 
    
  }



  saveMessage(file: File, address: Address) {
    // Add a new message entry to the Firebase database.
    //this.uplodeFile(file);
    address.id = doc(collection(this._fireStore, 'address')).id
    const publication = collection(this._fireStore, 'address');
    return addDoc(publication, {
      id: address.id,
      last_name: address.last_name,
      telephon: address.telephon,
      email: address.email,

    })

  }



  uplodeFile(file: File) {
    const storageRef = ref(this.cloudDataBase, 'images/' + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on('state_changed',
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      },
      (error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case 'storage/unauthorized':
            // User doesn't have permission to access the object
            break;
          case 'storage/canceled':
            // User canceled the upload
            break;

          // ...

          case 'storage/unknown':
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
        });
      }
    );
  }

  async updateArticle(address: Address) {
    const washingtonRef = doc(this._fireStore, "address", address.id);


await updateDoc(washingtonRef, {
  last_name:address.last_name,
  email:address.email,
  telephon:address.telephon
});

  }


  getArticles(): Observable<Address[]> {
    const refpublication = collection(this._fireStore, 'address');
    let q = query(refpublication);
    return collectionData(q,{idField: "id"}) as Observable<Address[]>;


  }








  async getArticlesByFilter(name: string | undefined) {
    const refpublication = collection(this._fireStore, 'address');
    let q = query(refpublication);
    if (name) {
      q = query(refpublication, where("last_name", "==", name));
    }
    return collectionData(q);

  }


  getImageArticle(nameFile: string) {


    // Create a reference to the file we want to download
    const storage = getStorage();
    const starsRef = ref(storage, 'images/' + nameFile);
    // Get the download URL

    return getDownloadURL(starsRef);

  }












deleteAddress(id:string) {


return deleteDoc(doc(this._fireStore, "address",id))

  }



}

