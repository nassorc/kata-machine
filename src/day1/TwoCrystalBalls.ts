// [false, false, true, true]
export default function two_crystal_balls(breaks: boolean[]): number {
    const JMP_AMOUNT = Math.sqrt(breaks.length);

    let end = -1;
    let prev = -1;
    let found = -1;

    for (let i = 0; i < breaks.length; i += JMP_AMOUNT) {
        if (breaks[i]) { 
            found = end = i;
            break;
        }
        prev = i;
    }

    for (let i = prev; i < end; i += 1) {
        if (breaks[i]) {
            found = i;
            break;
        }
    }
    return found;
}
