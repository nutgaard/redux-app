import { HandlerArgument } from 'yet-another-fetch-mock';

const list = [
    'Create a personal website',
    'Surprise your significant other with something considerate',
    'Bake something you\'ve never tried before',
    'Learn how to write in shorthand',
    'Learn how to french braid hair'
];

export function boredomActivity(args: HandlerArgument) {
    const rnd = Math.floor(list.length * Math.random());
    return { activity: list[rnd] };
}
