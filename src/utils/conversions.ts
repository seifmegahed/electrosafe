import {
  FieldsPropsTypes,
  GenericObject,
  OptionType,
} from "../globalTypes";

export const labelToName = (value: string) =>
  value.toLowerCase().replace(/ /g, "-");

export const labelToOption = (label: string) => ({
  label,
  name: labelToName(label),
});

export const extractPureDataFromForm = (data: GenericObject) => {
  const keys = Object.keys(data);
  let newData: GenericObject = {};
  keys.forEach((key) => {
    if (typeof data[key] === "object") {
      const object = data[key];
      if ((object as OptionType[]).length) newData[key] = object;
      else newData[key] = (object as OptionType).name;
    } else newData[key] = data[key];
  });
  return newData;
};

export const mirrorNameToLabel = (state: FieldsPropsTypes, value: string) => {
  if (state.input !== "toggle") {
    if (state.name === labelToName(state.label))
      return {
        ...state,
        label: value,
        name: labelToName(value),
      };
    return { ...state, label: value };
  }
  return state;
};
