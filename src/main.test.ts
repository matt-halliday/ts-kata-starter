import * as Main from './main';

describe('some file to test', () => {
    test('it has a nonsense function', () => {
        expect(Main.foo).toBeDefined();
    });
    test('nonsense function gives what it gets', () => {
        expect(Main.foo('compliments')).toEqual('compliments');
    });
});
