import express, { request, response } from "express";

// membuat variabel home_controller 
export const about_controller = async (req = request, res = response) => {

    // membuat sebuah variabel data yang menyimpan sebuah array objek
    const data = [
        {
            id: 1,
            title: "Judul Pertama",
            content: "Content Pertama",
        },
        {
            id: 2,
            title: "Judul Kedua",
            content: "Content Kedua",
        },
        {
            id: 3,
            title: "Judul Ketiga",
            content: "Content Ketiga",
        },
        {
            id: 4,
            title: "Judul Keempat",
            content: "Content Keempat",
        },
    ]

    return (
        res.render("about", {
            title: "About Handlebars",
            description: "Halaman About handlebars",
            data: data
        })
    )
}