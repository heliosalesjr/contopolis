// src/lib/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { getFirestore, collection, addDoc, getDocs, doc, setDoc, getDoc, query, where, orderBy } from 'firebase/firestore';

// Configuração do Firebase (usando variáveis de ambiente)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

// Funções de Autenticação
export const signInWithGoogle = () => signInWithPopup(auth, googleProvider);

export const logout = () => signOut(auth);

// Funções do Firestore
export const saveStory = async (userId, storyData) => {
  try {
    const docRef = await addDoc(collection(db, 'stories'), {
      ...storyData,
      userId,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    return docRef.id;
  } catch (error) {
    console.error('Erro ao salvar história:', error);
    throw error;
  }
};

export const getUserStories = async (userId) => {
  try {
    const q = query(
      collection(db, 'stories'), 
      where('userId', '==', userId),
      orderBy('createdAt', 'desc')
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Erro ao buscar histórias:', error);
    throw error;
  }
};

export const saveUserProfile = async (userId, profileData) => {
  try {
    await setDoc(doc(db, 'users', userId), {
      ...profileData,
      updatedAt: new Date()
    }, { merge: true });
  } catch (error) {
    console.error('Erro ao salvar perfil:', error);
    throw error;
  }
};

export const getUserProfile = async (userId) => {
  try {
    const docRef = doc(db, 'users', userId);
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? docSnap.data() : null;
  } catch (error) {
    console.error('Erro ao buscar perfil:', error);
    throw error;
  }
};

// Salvar personagens, cenários e temas
export const saveGameContent = async (type, data) => {
  try {
    const docRef = await addDoc(collection(db, 'gameContent'), {
      type, // 'characters', 'scenarios', 'themes'
      ...data,
      createdAt: new Date()
    });
    return docRef.id;
  } catch (error) {
    console.error('Erro ao salvar conteúdo:', error);
    throw error;
  }
};

export const getGameContent = async (type) => {
  try {
    const q = query(
      collection(db, 'gameContent'), 
      where('type', '==', type)
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Erro ao buscar conteúdo:', error);
    throw error;
  }
};