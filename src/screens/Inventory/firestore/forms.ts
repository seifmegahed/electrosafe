import {
  doc,
  collection,
  setDoc,
  getDoc,
  runTransaction,
} from "firebase/firestore";
import { firestore } from "../../../firebase-config";
import { FieldsPropsTypes, OptionType } from "../../../globalTypes";
import { descendingSortObjectArray } from "../../../utils/sortFunctions";
import { isDuplicateOption } from "../../../utils/validation";

const itemPrototypesCollectionName = "itemPrototypes";
const categoriesDocumentName = "categories";
const formsDocumentName = "forms";

const itemStructuresCollectionReference = collection(
  firestore,
  itemPrototypesCollectionName
);

const categoriesDocumentReference = doc(
  itemStructuresCollectionReference,
  categoriesDocumentName
);

const formsDocumentReference = doc(
  itemStructuresCollectionReference,
  formsDocumentName
);

export const updateCategories = async (categories: OptionType[]) => {
  await setDoc(categoriesDocumentReference, {
    data: categories,
    count: categories.length,
  }).catch((error) => console.warn(error));
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

export const addForm = async (
  fields: FieldsPropsTypes[],
  category: OptionType
) => {
  try {
    await runTransaction(firestore, async (transaction) => {
      const categoriesDocument = (
        await transaction.get(categoriesDocumentReference)
      ).data();
      const formsDocument = (
        await transaction.get(formsDocumentReference)
      ).data();
      // if (categoriesDocument === undefined || !categoriesDocument?.data)
      //   throw new Error("Unknown data format");
      const categories = categoriesDocument?.data as OptionType[];
      let newCategories: OptionType[] = [];
      if (categoriesDocument)
        newCategories = isDuplicateOption(category, categories)
          ? categories
          : (descendingSortObjectArray(
              [...categories, category],
              "name"
            ) as OptionType[]);
      else newCategories = [category];
      transaction.set(categoriesDocumentReference, {
        data: newCategories,
        count: newCategories.length,
      });
      if (formsDocument)
        transaction.update(formsDocumentReference, { [category.name]: fields });
      else transaction.set(formsDocumentReference, { [category.name]: fields });
    });
  } catch (error) {
    console.warn(error);
  }
};

export const getCategories = () => getDoc(categoriesDocumentReference);

export const getForms = () => getDoc(formsDocumentReference);
