import { setDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import { UserAdditionalData } from "../types/UserAdditionalData";

export async function saveAdditionalUserData(uid: string, data: UserAdditionalData) {
  try {
    await setDoc(doc(db, "users", uid), data);
  } catch (error) {
    console.error("Error adding document: ", error);
  }
}