import {Team, ErrorRepository} from "../app.js";
import sum from "../basic";


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
let newTeam = new Set([bowman,swordsman,daemon,zombie])
  team.addAllChar(bowman,swordsman,bowman,bowman,daemon)

expect(()=>{
  team.addChar(zombie), team.addChar(zombie)
  }
).toThrowError("you take this character")
expect(team.members).toEqual(newTeam)
});

/////////

test('error "not to string or number or less hundred"', () => {
  try {
    let numTestOne = 22;
    if (typeof numTestOne !== "string") {
        throw new ErrorRepository ()
      }
    } catch (err) {
      expect(err.translate(97)).toBe("not a string")
    }
  try {
    let stringTestOne = "some string";
    if (typeof stringTestOne !== "number") {
      throw new ErrorRepository ()
    }
  } catch (err) {
    expect(err.translate(98)).toBe("not a number")
  }
  try {
    let numTestTwo = 51;
    if (numTestTwo < 100) {
      throw new ErrorRepository ()
    }
  } catch (err) {
    expect(err.translate(99)).toBe("number less than a hundred")
  }
});

