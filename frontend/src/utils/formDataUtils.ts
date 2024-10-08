import { Dispatch, SetStateAction } from "react";

/**
 *
 * @param setCheckedItems - SetstateAction to update
 * @param formData - FormData to handle
 * @param key : the key to handle
 * @param valueToDelete : the value to delete in the form data
 * @returns the new formData
 */
export const deleteFormDataValue = (
  setCheckedItems: Dispatch<SetStateAction<FormData>>,
  formData: FormData,
  key: string,
  valueToDelete: string
) => {
  const newFormData = new FormData();

  formData.forEach((value, currentKey) => {
    // Append only the values that do not match the valueToDelete for the given key
    if (currentKey === key && value === valueToDelete) {
      return;
    }
    newFormData.append(currentKey, value);
  });

  setCheckedItems(newFormData);
  return newFormData;
};
