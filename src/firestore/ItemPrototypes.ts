import { firestore } from "../firebase-config";
import { doc, collection, setDoc, getDoc } from "firebase/firestore";
import { descendingSortArray, descendingSortObjectArray } from "../utils/sortFunctions";

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

export const addCategory = async (category: {value: string; label: string}, categories: {value: string; label: string}[]) => {
  const newCategories = categories?.length
    ? (descendingSortObjectArray([...categories, category], "label") as {value: string; label: string}[])
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
