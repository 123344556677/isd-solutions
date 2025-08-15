import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

// Firebase configuration - You'll need to replace these with your actual Firebase config
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "your-app-id"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Contact form submission function
export const submitContactForm = async (formData: {
  name: string;
  email: string;
  subject?: string;
  message: string;
}) => {
  try {
    const docRef = await addDoc(collection(db, 'contact-messages'), {
      ...formData,
      createdAt: new Date().toISOString(),
      timestamp: new Date()
    });
    
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw new Error('Failed to submit contact form');
  }
};