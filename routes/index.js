import perfumeRoutes from "./perfumes.js";
import { static as staticDir } from "express";

const constructorMethod = (app) => {
  app.use("/", perfumeRoutes);
  app.use("/public", staticDir("public"));
  app.use(/(.*)/, (req, res) => {
    return res.status(404).send("Route not Found");
  });
};

export default constructorMethod;
