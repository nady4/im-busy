import jsonfile from "jsonfile";
import simpleGit from "simple-git";

const FILE_PATH = "./data.json";

export const generateCommits = (count, pickDate) => {
  const makeCommit = (n) => {
    if (n === 0) return simpleGit().push();

    let DATE;
    for (let i = 0; i < 100; i++) {
      DATE = pickDate();
      if (DATE) break;
    }
    if (!DATE) return makeCommit(n);

    const formatted = DATE.format();
    const data = { date: formatted };

    console.log(formatted);

    jsonfile.writeFile(FILE_PATH, data, () => {
      simpleGit()
        .add([FILE_PATH])
        .commit(formatted, { "--date": formatted }, makeCommit.bind(this, --n));
    });
  };

  makeCommit(count);
};
