import {
  Auth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  User,
  UserCredential,
} from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase-config";

type AuthContextModel = {
  auth: Auth;
  user: User | null;
  login: (email: string, password: string) => Promise<UserCredential>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
};

type UserContextState = {
  isAuthenticated: boolean;
  isLoading: boolean;
  id?: string;
};

type AuthProviderProps = {
  children: React.ReactNode;
};

export const UserStateContext = createContext<UserContextState>(
  {} as UserContextState
);

export const useAuthContext = (): UserContextState =>
  useContext(UserStateContext);

export const AuthContext = createContext<AuthContextModel>({} as AuthContextModel);

export const useAuth = (): AuthContextModel => useContext(AuthContext);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (
    email: string,
    password: string
  ): Promise<UserCredential> =>
    signInWithEmailAndPassword(auth, email, password);

  const logout = async (): Promise<void> => signOut(auth);

  const resetPassword = async (email: string): Promise<void> =>
    sendPasswordResetEmail(auth, email);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const value: AuthContextModel = {
    auth,
    user,
    login,
    logout,
    resetPassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
