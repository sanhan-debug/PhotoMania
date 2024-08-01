const getIndexPage = (req, res) => {
  res.render("index");
};

const getAboutPage = (req, res) => {
  res.render("about");
};

// const getPhotosPage = (req, res) => {
//   res.render("photos");
// };

const getBlogPage = (req, res) => {
  res.render("blog");
};
const getProjectsPage = (req, res) => {
  res.render("projects");
};

const getContactPage = (req, res) => {
  res.render("contact");
};
const getServicesPage = (req,res)=>{
  res.render("services")
}
export {
  getAboutPage,
  getIndexPage,
  // getPhotosPage,
  getBlogPage,
  getProjectsPage,
  getContactPage,
  getServicesPage
};
