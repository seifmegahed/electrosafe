import { initializeApp } from "firebase/app";
// eslint-disable-next-line import/no-extraneous-dependencies
import { getFirestore, connectFirestoreEmulator } from "@firebase/firestore";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
import { getStorage, connectStorageEmulator } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_FIREBASE_APPID,
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);

export const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider(import.meta.env.VITE_FIREBASE_APPCHECKKEY),
  isTokenAutoRefreshEnabled: true,
});

if (import.meta.env.MODE === "development") {
  connectAuthEmulator(auth, "http://localhost:9099");
  connectFirestoreEmulator(firestore, "localhost", 8080);
  connectStorageEmulator(storage, "localhost", 9199);
}
