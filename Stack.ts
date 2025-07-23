let numbers: number[] = [];
let FirstNumber: number = -1;

const createStack = () => {
  const push = (element: number): void => {
    FirstNumber++;
    numbers[FirstNumber] = element;
    console.log(`Pushed: ${element}`);
  };

  const pop = (): number | null => {
    if (FirstNumber === -1) {
      console.log("Stack is empty");
      return null;
    }
    const removed = numbers[FirstNumber];
    FirstNumber--;
    console.log(`Popped: ${removed}`);
    return removed;
  };

  const getTop = (): number | null => {
    if (FirstNumber === -1) {
      console.log("Stack is empty");
      return null;
    }
    console.log(`Top element: ${numbers[FirstNumber]}`);
    return numbers[FirstNumber];
  };

  const isEmpty = (): boolean => {
    const empty = FirstNumber === -1;
    console.log(`Is Stack empty? ${empty}`);
    return empty;
  };

  const printStack = (): void => {
    if (FirstNumber === -1) {
      console.log("Stack is empty");
      return;
    }
    console.log("Stack contents:");
    for (let i = 0; i <= FirstNumber; i++) {
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
