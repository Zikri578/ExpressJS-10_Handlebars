import express, { request, response } from "express";

// membuat variabel home_controller 
export const contact_controller = async (req = request, res = response) => {
    return (
        res.render("contact", {
            title: "Contact Handlebars",
            description: "Halaman Contact handlebars"
        })
    )
}
