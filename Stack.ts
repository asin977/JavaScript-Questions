const createStack = <X>() => {
  let numbers: X[] = [];

  const push = (element: X): void => {
    numbers.push(element);
    console.log(`Pushed:${element}`);
  };

  const pop = (): X | null => {
    if (numbers.length === 0) {
      console.log("stack is empty");
      return null;
    }
    const removed = numbers.pop();
    console.log(`popped:${removed}`);
    return removed as X;
  };

  const AddItemEnd = (): X | null => {
    if (numbers.length === 0) {
      console.log("Stack is empty");
      return null;
    }
    console.log(`Top element:${numbers[numbers.length - 1]}`);
    return numbers[numbers.length - 1];
  };

  const isEmpty = (): boolean => {
    const empty = numbers.length == 0;
    console.log(`Is Stack empty? ${empty}`);
    return empty;
  };

  return { push, pop, AddItemEnd, isEmpty };
};

const stack = createStack<number>();
stack.push(10);
stack.push(20);
stack.push(30);
stack.pop();
stack.isEmpty();
stack.AddItemEnd();
