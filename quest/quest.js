import choiceCreation from './choices.js';
import statisticalChanges from './statistical-changes.js';
import { getSave, save } from '../data/data.js';
import quests from '../data/quest-data.js';
import loadSave from '../common/load-save.js';
import findByID from '../common/find-by-id.js';

loadSave();

const searchParams = new URLSearchParams(window.location.search);
const questID = searchParams('id');
const quest = findByID(quests, questID);

if (!quest) {
    window.location = '../map';
}

const title = document.getElementById('title');
const image = document.getElementById('image');
const audio = document.getElementById('audio');
const description = document.getElementById('description');
const choiceForm = document.getElementById('choice-form');
const choices = document.getElementById('choices');
const result = document.getElementById('result');
const resultDescription = document.getElementById('result-description');

title.textContent = quest.title;
image.src = '../assets/quests/' + quest.image;
audio.src = '../assets/quests/' + quest.audio;
description.textContent = quest.description;

for (let i = 0; i < quest.choices.length; i++) {
    const choice = quest.choices[i];
    const choiceDom = choiceCreation(choice);
    choices.appendChild(choiceDom);
}

choiceForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(choiceForm);
    const choiceId = formData.get('choice');
    const choice = findByID(quest.choices, choiceId);
    const user = getSave();
    statisticalChanges(choice, quest.id, user);
    save();

    audio.src = '../assets/quests/ + quest.action';
    choiceForm.classList.add('hidden');
    result.classList.remove('hidden');
    resultDescription.textContent = choice.result;
    loadSave();
});

