import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";
import random from "random";

const FILE_PATH = "./data.json";

const makeCommit = (n) => {
  if (n === 0) return simpleGit().push(); // If n is 0, push the commits and exit the function

  const weeks = random.int(0, 54);
  const days = random.int(0, 6);

  const DATE = moment()
    .subtract(1, "y")
    .add(1, "d") // Get the current date, subtract one year, add one day
    .add(weeks, "w")
    .add(days, "d")
    .format(); // then add the random weeks and days, and format the date

  const data = {
    date: DATE,
  };

  console.log(DATE);

  jsonfile.writeFile(FILE_PATH, data, () => {
    // Write the date data to the JSON file
    simpleGit()
      .add([FILE_PATH]) // Stage the JSON file for commit
      .commit(
        DATE,
        { "--date": DATE }, // Commit the change with the formatted date and set the commit date
        makeCommit.bind(this, --n)
      ); // Recursively call makeCommit with n-1
  });
};

makeCommit(100);
