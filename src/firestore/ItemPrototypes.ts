import { doc, collection, setDoc, getDoc } from "firebase/firestore";
import { firestore } from "../firebase-config";
import { OptionType } from "../globalTypes";
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

export const updateCategories = async (categories: OptionType[]) => {
  await setDoc(categoriesDocumentReference, {
    data: categories,
    count: categories.length,
  });
  return {
    data: categories,
    count: categories.length,
  };
};

export const addCategory = async (
  category: OptionType,
  categories: OptionType[]
) => {
  const newCategories = categories?.length
    ? (descendingSortObjectArray(
        [...categories, category],
        "label"
      ) as OptionType[])
    : [category];
  await setDoc(categoriesDocumentReference, {
    data: newCategories,
    count: newCategories.length,
  });
  return {
    data: newCategories,
    count: newCategories.length,
  };
};

export const getCategories = async () => {
  const promise = await getDoc(categoriesDocumentReference);
  return promise;
};
