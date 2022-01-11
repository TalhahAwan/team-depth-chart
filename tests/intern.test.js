const Intern = require("../lib/intern");

describe("Intern", () => {
    const intern = new Intern('Talhah Awan', 1, 'Talhahawan@gmail.com');
    describe("Initialization of intern object", () => {
      it("should create an object with name, id, and email", () => {
        expect(intern.name).toEqual('Talhah Awan');
        expect(intern.id).toEqual(1);
        expect(intern.email).toEqual('Talhahawan@gmail.com')
      });
    });
  
    describe("getName", () => {
      it("should return the intern name", () => {
        expect(intern.getName()).toEqual('Talhah Awan');
      });
    });
  
    describe("getId", () => {
      it("should return the intern id", () => {
        expect(intern.getId()).toEqual(1);
      });
    });
  
    describe("getEmail", () => {
      it("should return the intern email", () => {
        expect(intern.getEmail()).toEqual('Talhahawan@gmail.com')
      });
    });
  
  
    describe("getRole", () => {
      it("should return the intern role", () => {
        expect(intern.getRole()).toEqual('Intern')
      });
    });
  
  });
  