import loadSave from '../common/load-save.js';
import { getSave } from '../data/data.js';
import outOfTime from '../common/outOfTime.js';
loadSave();
const user = getSave();

if (outOfTime(user || AllWorkFinished))
    window.location = '../results';

const nav = document.getElementById('quests');

for (let i = 0; i < quest.length; i++) {
    const quest = quest[i];
    let questDisplay = null;
    if (user.completed[quest.id]) {
        questDisplay = finishedWork(quest);
    }
    else {
        questDisplay = createWorkLink(quest);
    }
    nav.appendChild(questDisplay);
}
