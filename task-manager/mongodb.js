// CRUD create read update and delete

const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

mongoClient.connect(
  connectionURL,
  {
    useNewUrlParser: true
  },
  (err, client) => {
    if (err) {
      return console.log(`unable to connect to the databse`);
    }
    const db = client.db(databaseName);

    // db.collection("users").insertOne(
    //   {
    //     name: "Jack",
    //     age: 24
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log(`Unable to insert user`);
    //     }
    //     console.log(result.ops);
    //   }
    // );

  //   db.collection("users").insertMany(
  //     [
  //       {
  //         name: "test",
  //         age: 21
  //       },
  //       {
  //         name: "test2",
  //         age: "22"
  //       }
  //     ],
  //     (error, result) => {
  //       if (error) {
  //         return console.log(`unable to insert users`);
  //       }
  //       console.log(result.ops);
  //     }
  //   );
  // }

  
);
