export function save(user) {
    const jsonUser = JSON.stringify(user);
    localStorage.setItem('user', jsonUser);
}

export function getSave() {
    const getJsonUser = localStorage.getItem('user');
    if (!getJsonUser) return null;
    const user = JSON.parse(getJsonUser);
    return user;
}