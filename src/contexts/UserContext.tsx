import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile as firebaseUpdateProfile,
  User as FirebaseUser,
} from "firebase/auth";

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  profilePhoto: string;
  bio?: string;
  socialMedia?: Record<string, string>;
  contactInfo?: Record<string, string>;
  interests?: string[];
  eventsAttended?: string[];
  wishlist?: string[];
}

type UserContextType = {
  user: UserProfile | null;
  isLoggedIn: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
  logout: () => Promise<void>;
  updateProfile: (updates: Partial<UserProfile>) => Promise<void>;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

const defaultProfilePhotos = [
  "😎", "🤩", "😊", "🥳", "🌟", "🎵", "🎸", "🎤", "🎧", "🔥"
];

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        const profilePhoto = firebaseUser.photoURL || defaultProfilePhotos[Math.floor(Math.random() * defaultProfilePhotos.length)];
        setUser({
          id: firebaseUser.uid,
          name: firebaseUser.displayName || "Music Lover",
          email: firebaseUser.email || "",
          profilePhoto,
          bio: "",
          socialMedia: {},
          contactInfo: {},
          interests: [],
          eventsAttended: [],
          wishlist: [],
        });
        setIsLoggedIn(true);
      } else {
        setUser(null);
        setIsLoggedIn(false);
      }
    });
    return () => unsubscribe();
  }, []);

  const login = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const signup = async (email: string, password: string, name: string) => {
    const cred = await createUserWithEmailAndPassword(auth, email, password);
    if (auth.currentUser) {
      await firebaseUpdateProfile(auth.currentUser, {
        displayName: name,
        photoURL: defaultProfilePhotos[Math.floor(Math.random() * defaultProfilePhotos.length)],
      });
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  const updateProfile = async (updates: Partial<UserProfile>) => {
    if (!auth.currentUser) return;
    await firebaseUpdateProfile(auth.currentUser, {
      displayName: updates.name,
      photoURL: updates.profilePhoto,
    });
    // Optionally, update other fields in Firestore if needed
  };

  return (
    <UserContext.Provider value={{ user, isLoggedIn, login, signup, logout, updateProfile }}>
      {children}
    </UserContext.Provider>
  );
};