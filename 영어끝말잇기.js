//https://school.programmers.co.kr/learn/courses/30/lessons/12981

const n = 2;
const words = ["hello", "one", "even", "never", "now", "world", "draw"];
const solution = (n, words) => {
  for (let i = 1; i < words.length; i++) {
    //i의 값이 words[i]의 위치보다 크다는것은
    //앞에 동일한 값이 있다는 것으로 중복을 의미
    if (
      i > words.indexOf(words[i]) ||
      words[i][0] !== words[i - 1][words[i - 1].length - 1]
    ) {
      return [(i % n) + 1, Math.ceil((i + 1) / n)];
    }
  }

  return [0, 0];
};

console.log(solution(n, words));
