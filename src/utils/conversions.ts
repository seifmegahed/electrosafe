import { GenericObject, OptionType } from "../globalTypes";

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
      const object = (data[key] as OptionType) || undefined;
      const array = (data[key] as OptionType[]) || undefined;
      if (object) newData[key] = object.name;
      else newData[key] = array;
    } else newData[key] = data[key];
  });
  return newData;
};
