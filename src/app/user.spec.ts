import { UserService } from "./user";
fdescribe("User tests", () => {

  let userModel: UserService;

  beforeEach(() => {
    userModel = new UserService();
  });

  afterEach(() => {
    localStorage.removeItem("username");
  });

  it("Verifies that user name exists in localstorage", () => {
    localStorage.setItem("username", "profanis");
    expect(userModel.userName).toBeTruthy();
  });

  it("Verifies that user name does not exists in localstorage", () => {
    expect(userModel.userName).toBeFalsy();
  });

});
