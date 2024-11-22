const assignment = {
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10", completed: false, score: 50,
  };
  const module = {
    id: "1", name: "Introduction to NodeJS",
    description: "Students will learn how to implement a nodeJS server",
    course: "CS4550"
  };
 
  export default function WorkingWithObjects(app) {
    // assignments
    app.get("/lab5/assignment", (req, res) => {
      res.json(assignment); // use .json() instead of .send() if you know the response is formatted as JSON
    });
    app.get("/lab5/assignment/title", (req, res) => {
        res.json(assignment.title);
    });
    app.get("/lab5/assignment/title/:newTitle", (req, res) => {
        const { newTitle } = req.params;
        assignment.title = newTitle;
        res.json(assignment);
    });
    app.get("/lab5/assignment/score/:newScore", (req, res) => {
      const { newScore } = req.params;
      assignment.score = newScore;
      res.json(assignment);
    });
    app.get("/lab5/assignment/completed/:newComplete", (req, res) => {
      const { newComplete } = req.params;
      assignment.completed = newComplete;
      res.json(assignment);
    });



      // modules 
    app.get("/lab5/module", (req, res) => {
      res.json(module); // use .json() instead of .send() if you know the response is formatted as JSON
    });
    app.get("/lab5/module/name", (req, res) => {
      res.json(module.name);
    });
    app.get("/lab5/module/name/:newName", (req, res) => {
      const { newName } = req.params;
      module.name = newName;
      res.json(module);
    });
    app.get("/lab5/module/description/:newDescript", (req, res) => {
      const { newDescript } = req.params;
      module.description = newDescript;
      res.json(module);
    });
  };

  
  