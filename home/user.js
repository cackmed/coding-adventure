function createUserAvatar(formData) {
    const user = {
        name: formData.get('name'),
        job: formData.get('job'),
        time: 30,
        progress: 0,
        completed: {}
    };
    return user;
}
export const makeNewUserAvatar = (formData) => ({
    name: formData.get('name'),
    job: formData.get('job'),
    time: 30,
    progress: 0,
    completed: {}
});
export default createUserAvatar;
