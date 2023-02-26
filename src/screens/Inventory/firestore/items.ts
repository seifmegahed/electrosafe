import {
  doc,
  collection,
  runTransaction,
  serverTimestamp,
  getDoc,
} from "firebase/firestore";
import { firestore } from "../../../firebase-config";
import { GenericObject, OptionType } from "../../../globalTypes";
import { isDuplicateObject } from "../../../utils/validation";

export type HelperItemType = {
  name: string;
  make: string;
  id: string;
  mpn: string;
  category: OptionType;
  quantity: number;
};

type HelperDocument = {
  data: HelperItemType[];
  count: number;
};

const itemsCollectionName = "items";
const helperDataCollectionName = "helperData";
const helperItemsDocumentName = "items";

const itemsCollectionReference = collection(firestore, itemsCollectionName);
const helperDataCollectionReference = collection(
  firestore,
  helperDataCollectionName
);

const helperItemsDocumentReference = doc(
  helperDataCollectionReference,
  helperItemsDocumentName
);

// eslint-disable-next-line import/prefer-default-export
export const createItem = async (itemData: GenericObject) => {
  const newItemDocumentReference = doc(itemsCollectionReference);
  try {
    // Get helper items
    await runTransaction(firestore, async (transaction) => {
      const helperItemsDocument = (
        await transaction.get(helperItemsDocumentReference)
      ).data();

      // Create helper item
      const newHelperItem: HelperItemType = {
        id: newItemDocumentReference.id,
        name: itemData.name as string,
        mpn: itemData.mpn as string,
        make: itemData.make as string,
        category: itemData.category as OptionType,
        quantity: (itemData.quantity as number) || 0,
      };

      // Check if item name already exists
      if (
        helperItemsDocument &&
        isDuplicateObject(itemData, helperItemsDocument.data)
      )
        throw new Error("Item name exists!");

      // Check if helper items exists
      if (helperItemsDocument)
        transaction.update(helperItemsDocumentReference, {
          data: [newHelperItem, ...helperItemsDocument.data],
          count: helperItemsDocument.data.length + 1,
        });
      else
        transaction.set(helperItemsDocumentReference, {
          data: [newHelperItem],
          count: 1,
        });
      transaction.set(newItemDocumentReference, {
        ...itemData,
        dataOfCreation: serverTimestamp(),
      });
    });
  } catch (error) {
    console.warn(error);
  }
};

export const getHelperItems = async () => {
  const helperItemsDocument = await getDoc(helperItemsDocumentReference);
  return helperItemsDocument.data() as HelperDocument;
};

export const getItem = async (id: string) => {
  const itemDocumentReference = doc(itemsCollectionReference, id);
  const itemDocument = await getDoc(itemDocumentReference);
  return itemDocument.data() as GenericObject;
};
