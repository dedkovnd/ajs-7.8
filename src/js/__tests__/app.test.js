import {Team, ErrorRepository} from "../app.js";
import sum from "../basic";

// import sum from "../basic";

test('don t double character ', () => {
  class Character {
  constructor(props) {
    this.name = props.name
    this.attack = props.attack
    this.defence = props.defence
    this.level = 1
    this.health = props.health
  }
}
class Bowman extends Character {
  constructor(){
    super({name:"Bowman", attack: 25, defence: 25})
  }
}
class Swordsman extends Character {
  constructor(){
    super({name:"Swordsman", attack: 40, defence: 10})
  }
}
class Magician extends Character {
  constructor(){
    super({name:"Magician", attack: 10, defence: 40})
  }
}
class Undead extends Character {
  constructor(){
    super({name:"Undead", attack: 10, defence: 40})
  }
}
class Zombie extends Character {
  constructor(){
    super({name:"Zombie", attack: 40, defence: 10})
  }
}
class Daemon extends Character {
  constructor(){
    super({name:"Daemon", attack: 10, defence: 40})
  }
}
let team = new Team();
let bowman = new Bowman();
let swordsman = new Swordsman();
let daemon = new Daemon();
let zombie = new Zombie();

team.addChar(bowman)
  team.addAllChar(bowman,swordsman,bowman,bowman,daemon)
  team.addChar(zombie)
  team.addChar(zombie)

});

/////////

test('error "not to string"', () => {
  let numTestOne = 22;
  try {
    numTestOne;
    if (typeof numTestOne !== "string") {
      throw new ErrorRepository (this.code = 97)
    }
  } catch (err) {
    err.translate(code);
  }
});

