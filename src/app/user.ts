export class UserService {
  get userName() {
    return localStorage.getItem("username");
  }
}
