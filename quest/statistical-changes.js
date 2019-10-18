function statisticalChanges(choice, questId, user) {
    user.time += choice.time;
    user.stress += choice.stress;
    user.progress += choice.progress;
    user.completed[questId] = true;
}
export default statisticalChanges;