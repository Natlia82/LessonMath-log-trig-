import Daemon from '../daemon';
//import MathChaar from '../mathChar';
test('test1', () => {
    const merlin = new Daemon(100, 2);
    const result = merlin.attack;
    expect(result).toBe(85);
});

test('test2', () => {
    const vasia = new Daemon(200, 2);
    const result = vasia.attack;

    expect(result).toBe(185);
});