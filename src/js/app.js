// TODO: write your code here
// import sum from './basic';

// console.log('worked');
//
// console.log(sum([1, 2]));

export class Team {
  constructor() {
    this.members = new Set();
  }
  addChar(char) {
    if (this.members.has(char) === true) {
        throw new Error("you take this character")
    }
    this.members.add(char)
  }
  addAllChar(...chars) {
    for (let char of chars){
      this.members.add(char)
    }
  }
  toArrayChar() {
    return Array.from(this.members.values());
  }
}

//////////////////
export class ErrorRepository {
  constuctor(code){
    this.code = code;
  }
  translate(code){
    const myErrors = new Map ([
      [97,"not a string"],
      [98,"not a number"],
      [99,"number less than a hundred"]
    ])
    if (myErrors.get(code) === undefined) {
      return "unknow error"
    } else {
      return myErrors.get(code)
    }
  }
}

