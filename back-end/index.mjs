import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();
const PORT = 8080;

//
// user /get, post/
// storie /get, post/
// gruop /get, post/

app.use(express.json());
app.use(cors());
// localhost:8080/user <= POST
app.post("/user", (request, response) => {
  const body = request.body;
  console.log(body);

  fs.readFile("./data/user.json", (readError, data) => {
    if (readError) {
      response.json({
        status: "read file error",
      });
    }

    let savedData = JSON.parse(data); // string => object
    const newUser = {
      id: Date.now().toString(),
      username: body.username,
      age: body.age,
    };

    savedData.push(newUser);

    fs.writeFile(
      "./data/user.json",
      JSON.stringify(savedData),
      (writeError) => {
        if (writeError) {
          response.json({
            status: "error",
          });
        } else {
          response.json({
            status: "success",
            data: savedData,
          });
        }
      }
    );
  });
});

app.delete("/user/:id", (req, res) => {
  var { id } = req.params;

  fs.readFile("./data/user.json", "utf-8", (readError, data) => {
    let savedData = JSON.parse(data);

    if (readError) {
      res.json({
        status: "errors",
      });
    }

    const filteredData = savedData.filter((element) => element.id !== id);
    console.log(id);
    fs.writeFile(
      "./data/user.json",
      JSON.stringify(filteredData),
      (writeError) => {
        if (writeError) {
          res.json({ statusOfUser: writeError });
        } else {
          res.json({
            status: "success",

            data: filteredData,
          });
        }
      }
    );
  });
});

app.get("/user", (request, response) => {
  fs.readFile("./data/user.json", "utf-8", (readError, data) => {
    let savedData = JSON.parse(data);
    if (readError) {
      response.json({
        status: "read file error",
      });
    }
    response.json({
      status: "success",
      data: savedData,
    });
  });
});

app.get("/user/:id", (request, response) => {
  var { id } = request.params;

  // id tai taarahiin butsaana
  fs.readFile("./data/user.json", "utf-8", (readError, data) => {
    let savedData = JSON.parse(data);
    
    if (readError) {
      response.json({
        status: "read file error",
      });
    }
    response.json({
      status: "success",
      data: savedData,
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
