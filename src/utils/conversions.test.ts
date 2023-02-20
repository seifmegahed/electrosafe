import { describe, it } from "vitest";
import { TextFieldPropsType, ToggleFieldPropsType } from "../globalTypes";
import {
  extractPureDataFromForm,
  labelToName,
  labelToOption,
  mirrorNameToLabel,
} from "./conversions";

const testLabel = "Test Label To Name";
const testName = "test-label-to-name";
const testOption = {
  label: testLabel,
  name: testName,
};
const testFormData = {
  name: testName,
  label: testLabel,
  type: testOption,
  options: [testOption, testOption],
};
const testFormDataPure = {
  name: testName,
  label: testLabel,
  type: testName,
  options: [testOption, testOption],
};
const textFieldValueProps: TextFieldPropsType = {
  name: "test",
  label: "Test",
  input: "text",
  type: "text",
  span: 2,
};
const expectedFieldProps = {
  name: testName,
  label: testLabel,
  input: "text",
  type: "text",
  span: 2,
};
const textFieldValuePropsNoMatch: TextFieldPropsType = {
  name: "test",
  label: "",
  input: "text",
  type: "text",
  span: 2,
};
const expectedFieldPropsNoMatch = {
  name: "test",
  label: testLabel,
  input: "text",
  type: "text",
  span: 2,
};
const toggleFieldValueProps: ToggleFieldPropsType = {
  name: "test",
  input: "toggle",
  options: [],
  span: 2,
};
describe("Conversions", () => {
  it("Returns name from label", () => {
    expect(labelToName(testLabel)).toBe(testName);
  });
  it("Returns option object from label", () => {
    expect(labelToOption(testLabel)).toMatchObject(testOption);
  });
  it("Returns form values as {[key: string]: string}", () => {
    expect(extractPureDataFromForm(testFormData)).toMatchObject(
      testFormDataPure
    );
  });
  it("Mirror label value to name value", () => {
    expect(mirrorNameToLabel(textFieldValueProps, testLabel)).toMatchObject(
      expectedFieldProps
    );
  });
  it("Returns updated label value only", () => {
    expect(
      mirrorNameToLabel(textFieldValuePropsNoMatch, testLabel)
    ).toMatchObject(expectedFieldPropsNoMatch);
  });
  it("Returns same value on toggle input", () => {
    expect(mirrorNameToLabel(toggleFieldValueProps, testLabel)).toMatchObject(
      toggleFieldValueProps
    );
  });
});
