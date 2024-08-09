const { ApolloServer, gql } = require('apollo-server');
const mongoose = require('mongoose');
const Student = require('./src/student/studentModel');

// MongoDB connection
const mongodatabaseURL = "mongodb+srv://venky-assignment:venky-assignment@cluster0.d47qttq.mongodb.net/";
mongoose.connect(mongodatabaseURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection.once("open", () => {
  console.log("MongoDB Connected!!!......");
});

// Define your GraphQL schema
const typeDefs = gql`
  type Student {
    id: ID!
    name: String!
    address: String!
    phone: Int!
  }

  type Query {
    students: [Student]
    student(id: ID!): Student
  }

  type Mutation {
    createStudent(name: String!, address: String!, phone: Int!): Student
    updateStudent(id: ID!, name: String, address: String, phone: Int): Student
    deleteStudent(id: ID!): Student
  }
`;

// Define your resolvers
const resolvers = {
  Query: {
    students: async () => {
      return await Student.find({});
    },
    student: async (_, { id }) => {
      return await Student.findById(id);
    }
  },
  Mutation: {
    createStudent: async (_, { name, address, phone }) => {
      const student = new Student({ name, address, phone });
      await student.save();
      return student;
    },
    updateStudent: async (_, { id, name, address, phone }) => {
      const updates = { name, address, phone };
      const student = await Student.findByIdAndUpdate(id, updates, { new: true });
      return student;
    },
    deleteStudent: async (_, { id }) => {
      const student = await Student.findByIdAndDelete(id);
      return student;
    }
  }
};

// Create an Apollo Server instance
const server = new ApolloServer({ typeDefs, resolvers });

// Start the server
server.listen({ port: 5000 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
