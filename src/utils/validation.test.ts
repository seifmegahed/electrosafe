import { describe, it } from "vitest";
import {
  ListerFieldPropsType,
  TextFieldPropsType,
  ToggleFieldPropsType,
} from "../globalTypes";
import {
  checkEmailValidity,
  checkFormValidity,
  checkPasswordValidity,
} from "./validation";

const label = "Test Label";
const required = true;

const testField1: TextFieldPropsType = {
  name: "test1",
  label,
  input: "text",
  type: "text",
  span: 2,
};
const testField2: TextFieldPropsType = {
  name: "test2",
  label,
  input: "text",
  type: "text",
  span: 2,
  required,
};

const testField3: ToggleFieldPropsType = {
  name: "test3",
  input: "toggle",
  options: [],
  span: 2,
  required,
};

const testField4: ListerFieldPropsType = {
  name: "test4",
  label,
  input: "lister",
  span: 2,
  required,
};

const testEmails = [
  "test@email.com",
  "test@gmail",
  "test@me.c",
  "TEST TEST TEST",
];

const testPasswords = [
  "123456", // false
  "123456test", // true
  "Test12345", // true
  "test,Test!", // false
  "testTest", // false
  "Test1234!", // true
];

describe("Conversions", () => {
  it("Tests email validity", () => {
    expect(checkEmailValidity(testEmails[0])).toBeTruthy();
    expect(checkEmailValidity(testEmails[1])).toBeFalsy();
    expect(checkEmailValidity(testEmails[2])).toBeFalsy();
    expect(checkEmailValidity(testEmails[3])).toBeFalsy();
  });
  it("Tests password validity", () => {
    expect(checkPasswordValidity(testPasswords[0])).toBeFalsy();
    expect(checkPasswordValidity(testPasswords[1])).toBeTruthy();
    expect(checkPasswordValidity(testPasswords[2])).toBeTruthy();
    expect(checkPasswordValidity(testPasswords[3])).toBeFalsy();
    expect(checkPasswordValidity(testPasswords[4])).toBeFalsy();
    expect(checkPasswordValidity(testPasswords[5])).toBeTruthy();
  });
  it("Test form validity", () => {
    expect(
      checkFormValidity([testField1, testField2, testField3, testField4], {
        test1: "Test",
        test2: "",
        test3: null,
        test4: [],
      })
    ).toMatchObject({
      errors: { test2: true, test3: true, test4: true },
      state: true,
    });
  });
});
