import moment from "moment";
import random from "random";

export const createDatePicker = ({ includeWeekends, hours, intensity }) => {
  const datesByDay = new Map();

  return () => {
    const weeks = random.int(0, 54);
    const days = random.int(0, 6);

    const date = moment()
      .subtract(1, "y")
      .add(1, "d")
      .add(weeks, "w")
      .add(days, "d");

    if (!includeWeekends && (date.day() === 0 || date.day() === 6)) return null;
    if (datesByDay.get(date.format("YYYY-MM-DD")) >= intensity) return null;

    const formatted = date
      .hour(random.int(hours[0], hours[1]))
      .minute(random.int(0, 59))
      .second(random.int(0, 59));
    datesByDay.set(formatted.format("YYYY-MM-DD"), (datesByDay.get(formatted.format("YYYY-MM-DD")) ?? 0) + 1);
    return formatted;
  };
};
