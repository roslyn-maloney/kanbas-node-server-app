// e.g., lab5/calculator?a=5&b=2&operation=add
// retrieve a, b, and operation parameters in query

export default function QueryParameters(app) {
    app.get("/lab5/calculator", (req, res) => {
      const { a, b, operation } = req.query;
      let result = 0;
      switch (operation) {
        case "add":
            // parse as integers since parameters are strings
            result = parseInt(a) + parseInt(b);
            break;
        case "subtract":
            result = parseInt(a) - parseInt(b);
            break;
        case "divide":
            result = parseInt(a) / parseInt(b);
            break;
        case "multiply":
            result = parseInt(a) * parseInt(b);
            break;
        default:
          result = "Invalid operation";
      }
      // convert to string otherwise browser interprets
      // as a status code
      res.send(result.toString());
    });
  }
  