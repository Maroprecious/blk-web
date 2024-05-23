// firebase-service.js
import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";

const app = !getApps().length
  ? initializeApp({
      apiKey: import.meta.env.VITE_FIREBASE_API_KEY ?? "",
      authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN ?? "",
      projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID ?? "",
      storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET ?? "",
      messagingSenderId:
        import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID ?? "",
      appId: import.meta.env.VITE_FIREBASE_APP_ID ?? "",
      measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID ?? "",
    })
  : getApp();

class FirebaseService {
  public static instance?: FirebaseService;

  private constructor() {}

  public static getInstance = () => {
    if (this.instance) return this.instance;
    else {
      this.instance = new FirebaseService();
      return this.instance;
    }
  };

  public async uploadFile(path: string, file: File): Promise<string> {
    const storage = getStorage(app);
    const storageRef = ref(storage, path);
    const uploadTask = await uploadBytesResumable(storageRef, file);
    const url = await getDownloadURL(uploadTask.ref);
    return url;
  }
}

export default FirebaseService.getInstance();
