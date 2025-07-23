import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile as firebaseUpdateProfile,
} from "firebase/auth";

const UserContext = createContext(undefined);

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

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
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

  const login = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const signup = async (email, password, name) => {
    await createUserWithEmailAndPassword(auth, email, password);
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

  const updateProfile = async (updates) => {
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