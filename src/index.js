import express, { request, response } from "express";

import env from "dotenv";
env.config();

import { engine } from "express-handlebars";
import page_routes from "./routes/page_routes";

// membuat variabel app untuk memanggil import express
const app = express();

// membuat middleware
// membuat express json
app.use(express.json());
// membuat express urlencoded
app.use(express.urlencoded(
    {
        extended: false,
    }
));
// membuat express static yang akan diletakkan di folder public
app.use(express.static("./public"));
// akhir membuat middleware

// melihat view engine
// membuat view yang akan diletakkan di folder views
app.set("views", "./src/views");
// membuat set engine yang akan diisi handlebars
app.set("view engine", "handlebars");
// memanggil engine dengan parameter handlebars serta memanggil method engine
app.engine("handlebars", engine(
    {
        // membuat layout Dir yang akan diletakkan di folder layouts
        layoutsDir: "./src/views/layouts",

        // untuk default layout yang nama filenya yaitu : main.handlebars
        defaultLayout: "main.handlebars",

        // melakukan set partial dir yang akan diletakkan di folder components
        partialsDir: "./src/views/components",
    }
));
// melihat view engine

// memanggil route page_routes
app.use(page_routes);

// membuat variabel port 
const port = 3000;
// membuat port 3000
app.listen(port, () => {
    console.info(`Server Berjalan di port ${port}`);
});