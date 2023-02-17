import { firestore } from "../firebase-config";
import { doc, collection, setDoc, getDoc } from "firebase/firestore";
import { descendingSortObjectArray } from "../utils/sortFunctions";

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

export const addCategory = async (category: {name: string; label: string}, categories: {name: string; label: string}[]) => {
  const newCategories = categories?.length
    ? (descendingSortObjectArray([...categories, category], "label") as {name: string; label: string}[])
    : [category];
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
