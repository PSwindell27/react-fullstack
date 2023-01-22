import express from "express";
import postgres from "postgres";
import cors from "cors"

const sql = postgres({database: "contacts"});
const app = express();
app.use(cors());
app.use(express.json()); 
app.use(express.static("./client"));

const port = 3000;

app.get("/api/phone_contacts",(req, res, next) =>{
    sql`SELECT * FROM phone_contacts`.then((contacts) =>{
         console.log(contacts);
        res.json(contacts);
    }).catch(next);
});

app.get("/api/phone_contacts/:id",(req, res, next) => {
    const id = req.params.id;
    sql`SELECT * FROM phone_contacts WHERE contact_id = ${id}`.then((result) =>{
        if(result.length === 0){
            res.statusCode = 404;
            res.set("Content-Type", "text/plain");
            res.end("Not Found");
        }else{
        res.json(result);
        }
    }).catch(next);
});

app.patch("/api/phone_contacts/:id", (req, res, next) =>{
    const id = req.params.id;
    const {first_name, last_name, company, phone_number, email, favorited} = req.body;

    sql`
    UPDATE phone_contacts 
    SET ${sql(req.body)} 
    WHERE contact_id = ${id} RETURNING *`
    .then(result => {
        console.log(result.statement.string);
        res.send(result[0]);
    }).catch(next);
})

// app.post("/api/phone_contacts", (req, res, next) => {
//     const contact = req.body;
//     const requiredFields = [first_name, last_name, company, phone_number, email, favorited];
//     // const requiredFields = ["name", "age", "kind"];
//     const errors = [];
//     for(let field of requiredFields){
//         if(contact[field] === undefined){
//             errors.push(`Missing Contact '${field}' .`);
//         }
//     }
//     const {first_name, last_name, company, phone_number, email, favorited} = contact;
//     if(errors.length > 0){
//         res.status(422);
//         res.send(errors.join(" "));
//     }else {
//     sql`INSERT INTO phone_contacts (first_name, last_name, company, phone_number, email, favorited) 
//     VALUES(${first_name}, ${last_name}, ${company}, ${phone_number}, ${email}, ${favorited})
//      RETURNING *`.then(result => {
//         res.status(201);
//         res.json(result[0]);
//     }).catch(next);
//     }
// });

app.delete("/api/phone_contacts/:id", (req, res, next) => {
    const { id } = req.params;
  sql`DELETE FROM phone_contacts WHERE contact_id = ${id}`.then((result) => {
    res.send("DELETED");
  }).catch(next);
});


app.use((err, req, res, next) =>{
    console.error(err);
    res.status(500).send("Internal Server Error");
})

app.listen(port, () =>{
    console.log(`Server Running On Port: ${port}`);
});