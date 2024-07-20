import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// eslint-disable-next-line import/no-extraneous-dependencies
import {
  connectFirestoreEmulator,
  enableMultiTabIndexedDbPersistence,
  initializeFirestore,
} from "@firebase/firestore";
import {
  connectAuthEmulator,
  indexedDBLocalPersistence,
  initializeAuth,
  browserSessionPersistence,
} from "firebase/auth";

import {
  getToken,
  initializeAppCheck,
  ReCaptchaV3Provider,
} from "firebase/app-check";
import { getStorage, connectStorageEmulator } from "firebase/storage";

export const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_FIREBASE_APPID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const isDev = import.meta.env.MODE !== "production";

export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: isDev ? browserSessionPersistence : indexedDBLocalPersistence,
});
export const firestore = initializeFirestore(app, {
  experimentalAutoDetectLongPolling: true,
});
export const storage = getStorage(app);

export const analytics = getAnalytics(app);

if (isDev) {
  // @ts-expect-error - https://github.com/firebase/firebase-js-sdk/issues/3520
  window.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
  connectAuthEmulator(auth, "http://127.0.0.1:9099");
  connectFirestoreEmulator(firestore, "127.0.0.1", 8080);
  enableMultiTabIndexedDbPersistence(firestore);
  connectStorageEmulator(storage, "localhost", 9199);
}

const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider("6LdNN1EkAAAAAJ5QSOTk7Axpw-6eGTD1ApBN9Sms"),
  isTokenAutoRefreshEnabled: true,
});

getToken(appCheck);
