import { dueTodayReminder, fullItemReportReminder } from "../reminders";

export const dailyTaskReminder = async () => {
  enum Day {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
  }

  const today = new Date().getDay();
  const dayOfWeek = Day[today];

  if (dayOfWeek === "Tuesday" || dayOfWeek === "Saturday") {
    console.log("Sending full item report reminder");
    fullItemReportReminder();
  } else {
    console.log("Sending due today reminder");
    dueTodayReminder();
  }
};
