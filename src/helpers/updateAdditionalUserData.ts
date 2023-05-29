import { doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { UserAdditionalData } from "../types/UserAdditionalData";

export async function updateAdditionalUserData(uid: string, data: UserAdditionalData) {
  const ref = doc(db, "users", uid);

  await updateDoc(ref, { ...data });
}