import express, { request, response } from "express";

// membuat variabel home_controller 
export const home_controller = async (req = request, res = response) => {
    return (
        res.render("index", {
            title: "Home Handlebars",
            description: "Belajar express handlebars"
        })
    )
}
