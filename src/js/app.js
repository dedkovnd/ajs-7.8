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
export class ErrorRepository extends Error{
  constuctor(code){
    this.code = code;
  }
  translate(code){
    const myErrors = new Map ([
      [97,"not a string"],
      [98,"not a number from to ten"],
      [99,"number less than a hundred"]
    ])
    console.log(myErrors.get(code))
    if (myErrors.get(code) === undefined) {
      throw new Error ("Unknown error")
    }
  }
}
