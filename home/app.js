import { save } from '../data/data.js';
import createUserAvatar from './user.js';

const userCreation = document.getElementById('user-creation');

userCreation.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(userCreation);
    const user = createUserAvatar(formData);
    save(user);
    window.location = 'computer';
});