const SIZE = 5;
let queue: number[] = new Array(SIZE);
let frontIndex = -1;
let rearIndex = -1;

const createCircularQueue = () => {
  const enqueue = (element: number): void => {
    if ((rearIndex + 1) % SIZE === frontIndex) {
      console.log("Queue is full");
      return;
    }

    if (frontIndex === -1) {
      frontIndex = rearIndex = 0;
    } else {
      rearIndex = (rearIndex + 1) % SIZE;
    }

    queue[rearIndex] = element;
    console.log(`Enqueued: ${element}`);
  };

  const dequeue = (): number | null => {
    if (frontIndex === -1) {
      console.log("Queue is empty");
      return null;
    }

    const removed = queue[frontIndex];
    if (frontIndex === rearIndex) {
      frontIndex = rearIndex = -1;
    } else {
      frontIndex = (frontIndex + 1) % SIZE;
    }

    console.log(`Dequeued: ${removed}`);
    return removed;
  };

  const getFront = (): number | null => {
    if (frontIndex === -1) {
      console.log("Queue is empty");
      return null;
    }

    console.log(`Front element: ${queue[frontIndex]}`);
    return queue[frontIndex];
  };

  const isEmpty = (): boolean => {
    const empty = frontIndex === -1;
    console.log(`Is Queue empty? ${empty}`);
    return empty;
  };

  return { enqueue, dequeue, getFront, isEmpty };
};

const circularQueue = createCircularQueue();
circularQueue.enqueue(10);
circularQueue.enqueue(20);
circularQueue.enqueue(30);
circularQueue.enqueue(40);
circularQueue.enqueue(50);
circularQueue.dequeue();
circularQueue.enqueue(60);
circularQueue.getFront();
