// React
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

// Firebase
import {
  Auth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  User,
  UserCredential,
} from "firebase/auth";
import { auth } from "../firebase-config";

// Components
import Loading from "../components/Modals/Loading";
// Types
type AuthContextModel = {
  auth: Auth;
  user: User | null;
  login: (email: string, password: string) => Promise<UserCredential>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
};

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthContext = createContext<AuthContextModel>(
  {} as AuthContextModel
);

export const useAuth = (): AuthContextModel => useContext(AuthContext);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const login = async (
    email: string,
    password: string
  ): Promise<UserCredential> =>
    signInWithEmailAndPassword(auth, email, password);

  const logout = async (): Promise<void> => signOut(auth);

  const resetPassword = async (email: string): Promise<void> =>
    sendPasswordResetEmail(auth, email);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuthData) => {
      setUser(userAuthData);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const value: AuthContextModel = useMemo(
    () => ({
      auth,
      user,
      login,
      logout,
      resetPassword,
    }),
    [user]
  );

  return (
    <AuthContext.Provider value={value}>
      {loading ? <Loading /> : children}
    </AuthContext.Provider>
  );
};
