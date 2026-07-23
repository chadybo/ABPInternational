import { Router } from "express";
const router = Router();

router.route("/").get(async (req, res) => {
  res.render("homepage");
});

router.route("/catalog").get(async (req, res) => {
  res.render("catalog");
});

router.route("/about").get(async (req, res) => {
  res.render("about");
});

router.route("/contact").get(async (req, res) => {
  res.render("contact");
});

export default router;
