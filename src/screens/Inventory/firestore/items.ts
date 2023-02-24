import {
  doc,
  collection,
  runTransaction,
  serverTimestamp,
  getDoc,
} from "firebase/firestore";
import { firestore } from "../../../firebase-config";
import { GenericObject } from "../../../globalTypes";

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
    await runTransaction(firestore, async (transaction) => {
      const helperItemsDocument = (
        await transaction.get(helperItemsDocumentReference)
      ).data();
      const newHelperItem = {
        id: newItemDocumentReference.id,
        name: itemData?.name,
        mpn: itemData?.mpn,
        make: itemData?.make,
        category: itemData?.category,
      };
      transaction.set(
        helperItemsDocumentReference,
        helperItemsDocument?.data
          ? {
              data: [...helperItemsDocument.data, newHelperItem],
              count: helperItemsDocument.data.length + 1,
            }
          : {
              data: [newHelperItem],
              count: 1,
            }
      );
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
  return helperItemsDocument.data();
};
