import { firestore } from "../firebase-config";
import { doc, collection, setDoc, getDoc } from "firebase/firestore";
import { descendingSortArray } from "../utils/sortFunctions";

const itemPrototypesCollectionName = "itemPrototypes";
const categoriesDocumentName = "categories";

const itemStructuresCollectionReference = collection(
  firestore,
  itemPrototypesCollectionName
);

const categoriesDocumentReference = doc(
  itemStructuresCollectionReference,
  categoriesDocumentName
);

export const addCategory = async (name: string, categories: string[]) => {
  const newCategories = categories?.length
    ? (descendingSortArray([...categories, name]) as string[])
    : [name];
  return await setDoc(categoriesDocumentReference, {
    data: newCategories,
    count: newCategories.length,
  }).then(() => ({
    data: newCategories,
    count: newCategories.length,
  }));
};

export const getCategories = async () => {
  return await getDoc(categoriesDocumentReference);
};
