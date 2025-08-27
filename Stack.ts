let numbers: number[] = [];
let StackTop: number = -1;

const createStack = () => {
  const push = (element: number): void => {
    StackTop++;
    numbers[StackTop] = element;
    console.log(`Pushed: ${element}`);
  };

  const pop = (): number | null => {
    if (StackTop === -1) {
      console.log("Stack is empty");
      return null;
    }
    const removed = numbers[StackTop];
    StackTop--;
    console.log(`Popped: ${removed}`);
    return removed;
  };

  const getTop = (): number | null => {
    if (StackTop === -1) {
      console.log("Stack is empty");
      return null;
    }
    console.log(`Top element: ${numbers[StackTop]}`);
    return numbers[StackTop];
  };

  const isEmpty = (): boolean => {
    const empty = StackTop === -1;
    console.log(`Is Stack empty? ${empty}`);
    return empty;
  };

  const printStack = (): void => {
    if (StackTop === -1) {
      console.log("Stack is empty");
      return;
    }
    console.log("Stack contents:");
    for (let i = 0; i <= StackTop; i++) {
      console.log(`  ${i}: ${numbers[i]}`);
    }
  };

  return { push, pop, getTop, isEmpty, printStack };
};

const stack = createStack();

stack.push(10);
stack.push(20);
stack.push(30);
stack.pop();
stack.getTop();
stack.printStack();
