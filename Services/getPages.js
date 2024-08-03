const getIndexPage = (req, res) => {
  res.render("index", { link: "index" });
};

const getAboutPage = (req, res) => {
  res.render("about", { link: "about" });
};

const getBlogPage = (req, res) => {
  res.render("blog", { link: "blog" });
};
const getProjectsPage = (req, res) => {
  res.render("projects", { link: "projects" });
};

const getContactPage = (req, res) => {
  res.render("contact", { link: "contact" });
};

const getServicesPage = (req, res) => {
  res.render("services", { link: "services" });
};

const getRegisterPage = (req, res) => {
  res.render("register", { link: "register" });
};

const getLoginPage = (req, res) => {
  res.render("login", { link: "login" });
};

export {
  getAboutPage,
  getIndexPage,
  getBlogPage,
  getProjectsPage,
  getContactPage,
  getServicesPage,
  getRegisterPage,
  getLoginPage
};
