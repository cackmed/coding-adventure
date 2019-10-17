import { getSave } from '../data/data.js';
import outOfTime from './outOfTime.js';

function loadSave() {
    const name = document.getElementById('name');
    const avatar = document.getElementById('avatar');
    const time = document.getElementById('time');
    const stress = document.getElementById('stress');
    const progress = document.getElementById('progress');
    const user = getSave();
    if (!user) {
        window.location = './';
    }

    name.textContent = user.name;
    avatar.src = '../assets/avatars/' + user.job + '.png';
    progress.textContent = user.progress;
    stress.textContent = user.stress;

    if (outOfTime(user)) {
        time.textContent = 'OFT';
    }
    else {
        time.textContent = user.time;
    }
}
export default loadSave;
