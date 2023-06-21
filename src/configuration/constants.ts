/** Rutas de navegacion de la App */
enum Pages {
  HOMEPAGE = "/",
  CONTACTPAGE = "/Contacto",
  RECIPESLISTPAGE = "/Recetas",
  ORDERSLISTPAGE = "/Pedidos",
}

const contactData = {
  whatsapp: (text: string) => `https://wa.me/+5491161542448?text=${text}`,
  instagram: "https://ig.me/m/gabbreser",
};

const designerData = {
  image: "https://lighuendevelopments.netlify.app/mstile.svg",
  link: "https://lighuendevelopments.netlify.app/",
};

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
export { Pages, contactData, calendarSettings, designerData };
