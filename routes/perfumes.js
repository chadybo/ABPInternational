import { Router } from "express";
import { getAllPerfumes } from "../data/perfumes.js";
const router = Router();

router.route("/").get(async (req, res) => {
  res.render("homepage");
});

router.route("/catalog").get(async (req, res) => {
  let perfumes = await getAllPerfumes();
  res.render("catalog", { list: perfumes });
});

router.route("/about").get(async (req, res) => {
  res.render("about");
});

router.route("/contact").get(async (req, res) => {
  res.render("contact");
});

export default router;
