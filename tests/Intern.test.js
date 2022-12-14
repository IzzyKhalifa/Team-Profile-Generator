const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "Monash";
  const e = new Intern("izzy", 1, "izzy@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("izzy", 1, "izzy@test.com", "UCLA");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "Monash";
  const e = new Intern("izzy", 1, "izzy@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});