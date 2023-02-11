import { firestore } from "../firebase-config";
import { doc, collection, setDoc, getDoc } from "firebase/firestore";
import { descendingSortArray } from "../utils/sortFunctions";

const itemPrototypesCollectionName = "itemPrototypes";
const categoriesDocumentName = "categories";

const itemStructuresCollectionReferance = collection(
  firestore,
  itemPrototypesCollectionName
);

const categoriesDocumentReferance = doc(
  itemStructuresCollectionReferance,
  categoriesDocumentName
);

export const addCategory = async (name: string, categories: string[]) => {
  const newCategories = categories?.length
    ? (descendingSortArray([...categories, name]) as string[])
    : [name];
  return await setDoc(categoriesDocumentReferance, {
    data: newCategories,
    count: newCategories.length,
  }).then(() => ({
    data: newCategories,
    count: newCategories.length,
  }));
};

export const getCategories = async () => {
  return await getDoc(categoriesDocumentReferance);
};
