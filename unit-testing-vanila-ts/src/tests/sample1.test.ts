class Stack {
  constructor() {
    this.top = undefined;
    this.items = {};
  }

  push(item) {
    this.top = item;
    this.items = { ...this.items, item };
  }
}
// Output: true

describe('custom stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  test('is created', () => {
    expect(stack).toBeDefined();
  });

  it('is created correctly', () => {
    // expect(stack);=
    expect(stack.top).toBe(undefined);
    expect(stack.items).toEqual({});
  });

  it('can push in item', () => {
    stack.push(1);
    expect(stack.top).toBe(1);
  });

  it.todo('can pop off item');
});

/**
 * cd unit-testing-vanila-ts
 * npm i
 * npm test
 */
