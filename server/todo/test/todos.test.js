const chai = require("chai");
const { addTodo, getTodoWithId } = require("../../config/index");
const expect = chai.expect;

describe("Return a TODO with ID", () => {
   it("should return the expected item from array", () => {
     const expected = [
       { "id":"LQM7L_npn6E0bS1lLw5MZ"},
     ];
     const result = getTodoWithId(expected[0].id);
 
     expect(result[0].id).to.equal(expected[0].id);
   });
 });

describe("Add Todos", () => {
  it("should add todo to the list", () => {
    const newTodo = "learn new";
    const expected = { text: "learn new", completed: false };
    const result = addTodo(newTodo);

    expect(result.text).to.equal(expected.text);
  });
});