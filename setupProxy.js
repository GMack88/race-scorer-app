module.exports = function(app) {
  app.use(proxy("/api", { target: "http://localhost:4000/" }));
};
