const getIndexPage = (req, res) => {
  res.render("index", { link: "index" });
};

const getAboutPage = (req, res) => {
  res.render("about", { link: "about" });
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

 const getDashboardPage = (req, res) => {
  res.render("dashboard", { link: "dashboard" });
};

const getLogout = (req, res) => {
  res.cookie("jwt","",{
    maxAge:1
  })
  res.redirect('/')
};

export {
  getAboutPage,
  getIndexPage,
  // getBlogPage,
  // getUsersPage,
  getContactPage,
  getServicesPage,
  getRegisterPage,
  getLoginPage,
  getLogout,
  getDashboardPage
};
