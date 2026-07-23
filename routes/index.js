import perfumeRoutes from "./perfumes.js";
import { static as staticDir } from "express";

const constructorMethod = (app) => {
  app.use("/", perfumeRoutes);
  app.use("/public", staticDir("public"));
  app.use(/(.*)/, (req, res) => {
    return res.status(404).render("error", {
      error: "Route not found",
      isReg: true,
      title: "Error",
    });
  });
};

export default constructorMethod;
