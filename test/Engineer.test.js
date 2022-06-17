const Engineer = require("../lib/Engineer");

describe("engineer",()=>{
  describe("Initialization",()=>{
    

it("Can set GitHUb account via constructor", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Foo", 1, "test@test.com", testValue);
  expect(e.github).toBe(testValue);
});

it("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer(testValue, 1, "test@test.com", "GitHubUser");
  expect(e.getRole()).toBe(testValue);
});

it("Can get GitHub username via getGithub()", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("emp", 1, "xyz", testValue);
  expect(e.getGithub()).toBe(testValue);
});

});
});