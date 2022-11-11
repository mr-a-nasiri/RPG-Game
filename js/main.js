'use strict';

import { knight, archer, monk, ghoul, goblin, orc, troll, undead, seeker } from '/js/Character.js';
const playBtn = document.querySelector('.btn-play');
const selectHeroSection = document.getElementById('select-hero');
const selectHeroContainer = document.querySelector('#heros-container');
const characterCards = document.getElementsByClassName('character-card');
const battleField = document.getElementById('battle-field');
const attackButton = document.getElementById('attack-button');
const actionEl = document.getElementById('actions');

document.getElementById('hero').innerHTML = monk.getCharacterHTML();
document.getElementById('monster').innerHTML = ghoul.getCharacterHTML();

const renderHeroSelection = function () {
  playBtn.classList.add('hidden');
  selectHeroSection.classList.remove('hidden');
  selectHeroContainer.innerHTML += knight.getCharacterSelectHTML();
  selectHeroContainer.innerHTML += archer.getCharacterSelectHTML();
  selectHeroContainer.innerHTML += monk.getCharacterSelectHTML();
};

playBtn.addEventListener('click', renderHeroSelection);

document.addEventListener('click', function (e) {
  if (e.target.parentElement.className === 'character-card') {
    for (const card of characterCards) {
      card.classList.remove('selected-hero');
    }
    e.target.parentElement.classList.add('selected-hero');
  }
});

document.getElementById('btn-start').addEventListener('click', function () {
  let selectedHero;
  for (const card of characterCards) {
    if (card.classList.contains('selected-hero')) {
      selectedHero = card;
    }
  }
  if (selectedHero) {
    selectHeroSection.classList.add('hidden');
    battleField.classList.remove('hidden');
    actionEl.classList.remove('hidden');
    document.getElementById('hero').innerHTML = monk.getCharacterHTML();
    document.getElementById('monster').innerHTML = ghoul.getCharacterHTML();
  }
});

/*
`<div class="dice">${num}</div>`).join("")
        return `<div class="health-bar-outer">
                    <div class="health-bar-inner ${percent < 26 ? "danger" : ""}" 
                            style="width:${percent}%;">
                    </div>
                </div>`
            <div class="character-card">
                <h4 class="name"> ${name} </h4>
                <img class="avatar" src="${avatar}" />
                <div class="health">health: <b> ${health} </b></div>
                ${healthBar}
                <div class="dice-container">
                    ${diceHtml}
                </div>
            </div>`
                            <div class="end-game">
                    <h2>Game Over</h2> 
                    <h3>${endMessage}</h3>
                    <p class="end-emoji">${endEmoji}</p>
                </div>
                  `<div class="placeholder-dice"></div>`
*/
