export default class Validator {
  constructor(nickname) {
    this.nickname = nickname;
    this.restriction1 = /(\d{4})+/gi;
    this.restriction2 = /^[a-z]/i;
    this.restriction3 = /^[a-z0-9_-]*[a-z]$/gi;
  }

  validateUsername() {
    let result;
    if (this.restriction1.test(this.nickname)) {
      result = false;
    } else if (this.restriction2.test(this.nickname)) {
      result = this.restriction3.test(this.nickname);
    } else {
      result = false;
    }
    return result;
  }
}
