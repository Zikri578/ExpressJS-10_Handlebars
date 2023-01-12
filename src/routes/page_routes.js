import express from "express";
import { home_controller } from "../controllers/pages/home_controllers";
import { about_controller } from "../controllers/pages/about_controllers";
import { contact_controller } from "../controllers/pages/contact_controllers";

// membuat variabel home_routes
const page_routes = express.Router();

// melakukan perutean halaman home_controllers
page_routes.get("/", home_controller);
page_routes.get("/about", about_controller)
page_routes.get("/contact", contact_controller);

// bisa digunakan di file manapun
export default page_routes;