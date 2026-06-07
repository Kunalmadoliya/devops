import "dotenv/config"
import express from "express"

const app = express();
const PORT = process.env.PORT ?? 8000;

app.use(express.json())

app.get("/", (req, res) => {
  return res.json({message: "Server is healthy but i am not 100kgs btw"});
});


app.listen(PORT , ()=> {
    console.log(`APP IS LISTEN ON  PORT http://localhost:${PORT}`)
})