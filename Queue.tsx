let frontIndex = 0;
let rearIndex = 0;
const queueArray: string[] = [];

const enqueue = (value: string): void => {
  queueArray[rearIndex] = value;
  rearIndex++;
};

const isEmpty = (): boolean => {
  return frontIndex === rearIndex;
};

const dequeue = (): void => {
  if (isEmpty()) {
    console.log("Queue is empty");
    return;
  }
  console.log("Dequeued:", queueArray[frontIndex]);
  queueArray[frontIndex] = "";
  frontIndex++;
};

const peek = (): void => {
  if (isEmpty()) {
    console.log("Queue is empty");
  } else {
    console.log("Front element:", queueArray[frontIndex]);
  }
};

const size = (): void => {
  console.log("Queue size:", rearIndex - frontIndex);
};

enqueue("A");
enqueue("B");
enqueue("C");
enqueue("D");
dequeue();
peek();
size();
console.log(isEmpty());
