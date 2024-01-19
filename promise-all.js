function upperCase(letter) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(letter.toUpperCase());
    }, Math.floor(Math.random() * 1000));
  });
}

async function alphabet() {
  const letters = ["a", "b", "c", "d", "e"];

  const promise = letters.map(async (letter) => {
    const arrange = await upperCase(letter);
    return arrange;
  });

  const result = await Promise.all(promise);
  console.log(result);
}

alphabet();
