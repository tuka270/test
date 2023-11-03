// import express from "express"
// const app = express();
// app.use (express.json())

// const ello = [
//     { name: "tuka", age:16},
//     {name: "anka", age:17 },
//     {name: "nono", age:17 },
// ];
// // app.post("/ello", ( req,res)=> {
// //     const {name, age} = req.body;
// //     ello.push({name,age})
// //     res.json({ello});
// // });
// // app.get("/ello/:name", ( req,res)=> {
// //     const {name} = req.params;
// //     const user = ello.filter((user) => user.name == name)[0];
// //     res.json({user});
// // });
// app.delete("/ello/:name", function(req, res) {

//     if(req.query.name) {
//       console.log("Deleting portfolio: " + req.query.name);
//       stockService.deletePortfolio(req.query.name);
//       res.status(200).send({});
//     } else {
//       res.status(400).send("Please specify a portfolioId");
//     }
//   });

// app.listen(8000, () => {
//     console.log("assan");
// })