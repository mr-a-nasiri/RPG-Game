'use strict';
import { heros, monsters } from '/js/Character.js';

///////////////////////////////////////////////////////////
/////----------- Element Selectors -----------/////
///////////////////////////////////////////////////////////
const selectHeroEl = document.getElementById('select-hero');
const herosContainerEl = document.querySelector('#heros-container');
const characterEl = document.getElementsByClassName('character-card');
const battleFieldEl = document.getElementById('battle-field');
const actionEl = document.getElementById('actions');
const heroEl = document.getElementById('hero');
const monsterEl = document.getElementById('monster');

///////////////////////////////////////////////////////////
/////----------- Button Selectors -----------/////
///////////////////////////////////////////////////////////
const playBtn = document.querySelector('.btn-play');
const attackBtn = document.getElementById('attack-button');

///////////////////////////////////////////////////////////
/////----------- Missions -----------/////
///////////////////////////////////////////////////////////
const missionOne = function () {
  return new Array(3).fill(monsters[0]);
};
const missionMonsters = missionOne();
///////////////////////////////////////////////////////////
/////----------- Select Heros Section -----------/////
///////////////////////////////////////////////////////////
// Render heros
const renderHeroSelection = function () {
  for (const hero of heros) {
    herosContainerEl.innerHTML += hero.getHeroPickHTML();
  }
};
renderHeroSelection();

// Select a hero
const selectHero = function (e) {
  if (e.target.parentElement.className === 'character-card') {
    for (const hero of characterEl) {
      hero.classList.remove('selected-hero');
    }
    e.target.parentElement.classList.add('selected-hero');
  }
};
document.addEventListener('click', selectHero);

// Start with selected hero
let selectedHero;
const startGame = function () {
  for (const character of characterEl) {
    if (character.classList.contains('selected-hero')) {
      for (const hero of heros) {
        if (character.id === hero.name) {
          selectedHero = hero;
        }
      }
    }
  }
  if (selectedHero) {
    selectHeroEl.classList.add('hidden');
    battleFieldEl.classList.remove('hidden');
    actionEl.classList.remove('hidden');
    heroEl.innerHTML = selectedHero.getCharacterHTML();
    monsterEl.innerHTML = missionOne()[0].getCharacterHTML();
  }
};
document.getElementById('btn-start').addEventListener('click', startGame);

///////////////////////////////////////////////////////////
/////----------- Battlefield Section -----------/////
///////////////////////////////////////////////////////////
// Render dice rolls
const renderDiceRolls = function (character, diceCount) {
  const getDiceRolls = function () {
    const dicRolls = [];
    for (let i = 0; i < diceCount; i++) {
      dicRolls.push(Math.trunc(Math.random() * 6) + 1);
    }
    return dicRolls;
  };

  let diceHTML = '';
  let totalDiceScore = 0;

  for (const dice of getDiceRolls(diceCount)) {
    diceHTML += `
          <div class="placeholder-dice">${dice}</div>
        `;
    character.currentDiceScore.push(dice);
  }
  document.querySelector(`.${character.name.toLowerCase()}`).innerHTML = diceHTML;
};

// Decrease total dice rolls from health
const renderHealthBar = function (hero, monster) {
  const heroTotalScore = hero.currentDiceScore.reduce((total, current) => total + current);

  const monsterTotalScore = monster.currentDiceScore.reduce((total, current) => total + current);

  hero.health -= monsterTotalScore;
  monster.health -= heroTotalScore;
  console.log(hero.health);
  heroEl.innerHTML = hero.getCharacterHTML();
  monsterEl.innerHTML = monster.getCharacterHTML();

  hero.currentDiceScore = [];
  monster.currentDiceScore = [];
};

const attack = function () {
  renderDiceRolls(selectedHero, selectedHero.diceCount);
  if (missionMonsters.length > 0) renderDiceRolls(missionMonsters[0], missionMonsters[0].diceCount);

  renderHealthBar(selectedHero, missionMonsters[0]);
};
attackBtn.addEventListener('click', attack);
