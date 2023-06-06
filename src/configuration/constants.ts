/** Rutas de navegacion de la App */
enum Pages {
  LOGINPAGE = "/Login",
  LOGINCALLBACK = "/oauth/google",
  HOMEPAGE = "/",
}

const calendarSettings = {
  // Calendar
  current: "Fecha",
  start: "Desde",
  end: "Hasta",
  mode: {
    single: "single",
    range: "range",
  },
  formats: {
    standard: "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
    formInput: "yyyy-MM-dd",
    showDetail: "dd/MM/yyyy HH:mm",
    showDate: "dd/MM/yyyy",
    sortItems: "yyyyMMdd",
  },
  units: {
    years: "y",
    quarters: "Q",
    months: "M",
    weeks: "w",
    days: "day",
    hours: "h",
    minutes: "m",
    seconds: "s",
    milliseconds: "ms",
  },
};
export { Pages, calendarSettings };
