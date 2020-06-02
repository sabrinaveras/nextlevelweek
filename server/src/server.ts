import express from "express";

const app = express();

app.get("/users", (request, response) =>{
    console.log("listing users");

    response.json(["Sabrina", "Veras", "Higor"])
});

app.listen(3333);