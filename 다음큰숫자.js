//https://school.programmers.co.kr/learn/courses/30/lessons/12911

const n = 78;

const solution = (n) => {
  const start = n.toString(2);
  const count = check(start);

  while (true) {
    n++;
    const nextN = n.toString(2);
    const nextCount = check(nextN);

    if (count === nextCount) {
      return n;
    }
  }

  function check(a) {
    let count = 0;
    for (i of a) {
      if (i === "1") {
        count++;
      }
    }
    return count;
  }
};

solution(n);
