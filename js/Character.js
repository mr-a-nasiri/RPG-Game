import characterData from '/js/data.js';

class Character {
  constructor(data) {
    Object.assign(this, data);
    this.maxHealth = this.health;
  }

  getHeroPickHTML() {
    return `
      <div class="character-card" id="${this.name}">
        <img class="avatar" src="${this.avatar}" />
        <h4 class="name"> ${this.name} </h4>
        <div class="health">Health: ${this.health}</br>Attack Power: ${this.diceCount}<div>
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

  getHealthBarHTML() {
    const percent = this.health;
    return `
      <div class="health-bar-outer">
        <div class="health-bar-inner ${percent < 26 ? 'danger' : ''}" 
                style="width:${percent}%;">
        </div>
      </div>
    `;
  }

  getCharacterHTML() {
    return `
      <div class="character-card" id="${this.name}">
        <img class="avatar" src="${this.avatar}" />
        <h4 class="name"> ${this.name} </h4>
        <div class="health">Health: <b> ${this.health} <b><div>
        ${this.getHealthBarHTML()}
        <div class="dice-container ${this.name.toLowerCase()}">${this.getDicePlaceHolderHTML()}</div>
      </div>
      `;
  }
}

const heros = [];
Object.keys(characterData.hero).forEach(function (character) {
  heros.push(new Character(characterData.hero[character]));
});

const monsters = [];
Object.keys(characterData.monster).forEach(function (character) {
  monsters.push(new Character(characterData.monster[character]));
});

export { heros, monsters };
