const weariness = {
    id: 'weariness',
    title: 'Your eyes start to droop',
    map: {
        top:'40%',
        left: '24%'
    },
    image: 'placeholder',
    audio: 'placeholder',
    action: 'placeholder',
    description: 'placeholder',

    choices: [{
        id: 'coffee',
        description: 'Run for Coffee!',
        result: 'You find the coffee pot empty, and have to spend the next few miniutes making more. While  making coffee you run into one of your co-workers and have a rubber ducky moment as you tell them the problem. You return to your code with coffee and a new idea.',
        time: -4,
        progress: 20,
    }, {
        id: 'power-nap',
        description: 'Take a short Nap',
        result: 'You fall asleep quickly, and wake up several hours later having slept through your alarm, you feel great for a moment, before relising that you have made no progress and your deadline is now several hours sooner!',
        time: -6,
        progress: 0,
    }, {
        id: 'power-through',
        description: 'Try to power through it',
        result: 'You decide to power through, and you spend the next several hours banging your mind into the metaphorical wall before making progress. You finish your day tired, frustrated, but with some progress.',
        time: -6,
        progress: 5,
    }]
};
const unexpectedError = {
    id: 'unexpectedError',
    title: 'Unexpected error crashes your app',
    map: {
        top:'40%',
        left: '24%'
    },
    image: 'placeholder',
    audio: 'placeholder',
    action: 'placeholder',
    description: 'placeholder',
    choices: [{}]
};
const notSureWhatToDo = {
    id: 'notSureWhatToDo',
    title: 'You run into a problem your not equiped to handle',
    map: {
        top:'40%',
        left: '24%'
    },
    image: 'placeholder',
    audio: 'placeholder',
    action: 'placeholder',
    description: 'placeholder',
    choices: [{}]
};


