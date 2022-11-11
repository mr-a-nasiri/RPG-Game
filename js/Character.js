import characterData from '/js/data.js';
import { getHealthBarHTML } from '/js/utils.js';

class Character {
  constructor(data) {
    Object.assign(this, data);
    this.maxHealth = this.health;
  }

  getCharacterSelectHTML() {
    return `
      <div class="character-card" id="${this.name}">
        <img class="avatar" src="${this.avatar}" />
        <h4 class="name"> ${this.name} </h4>
        <div class="health">Health: <b> ${this.health} <b><div>
        <div class="attack">Attacks: <b> ${this.diceCount} <b><div>
   
      </div>
      `;
  }

  getDicePlaceHolderHTML() {
    let dicePlaceHolderHTML = '';
    for (let i = 0; i < this.diceCount; i++) {
      dicePlaceHolderHTML += `
        <div class="placeholder-dice"></div>
        `;
    }
    return dicePlaceHolderHTML;
  }

  getCharacterHTML() {
    return `
      <div class="character-card" id="${this.name}">
        <img class="avatar" src="${this.avatar}" />
        <h4 class="name"> ${this.name} </h4>
        <div class="health">Health: <b> ${this.health} <b><div>
        ${getHealthBarHTML()}
        <div class="dice-container">${this.getDicePlaceHolderHTML()}</div>
        
   
      </div>
      `;
  }
}
{
  // /* <div class="dice-container">${this.diceHtml}</div>; */
}
// ${getHealthBarHTML(this.maxHealth)}

const knight = new Character(characterData.hero.knight);
const archer = new Character(characterData.hero.archer);
const monk = new Character(characterData.hero.monk);

const ghoul = new Character(characterData.monster.ghoul);
const goblin = new Character(characterData.monster.goblin);
const orc = new Character(characterData.monster.orc);
const troll = new Character(characterData.monster.troll);
const undead = new Character(characterData.monster.undead);
const seeker = new Character(characterData.monster.seeker);

export { knight, archer, monk, ghoul, goblin, orc, troll, undead, seeker };
