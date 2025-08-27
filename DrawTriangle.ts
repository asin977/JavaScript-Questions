//Write a function to draw a triangle

const drawRightAngledTriangle = (height: number): void => {
  for (let i = 1; i <= height; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
      row += "*";
    }

    console.log(row);
  }
};

drawRightAngledTriangle(5);
