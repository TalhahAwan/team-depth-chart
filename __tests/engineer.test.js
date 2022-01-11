const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    const engineer = new Engineer('Talhah Awan', 1, 'Talhahawan@gmail.com');
    describe("Initialization of engineer object", () => {
      it("should create an object with name, id, and email", () => {
        expect(engineer.name).toEqual('Talhah Awan');
        expect(engineer.id).toEqual(1);
        expect(engineer.email).toEqual('Talhahawan@gmail.com')
      });
    });
  
    describe("getName", () => {
      it("should return the engineer name", () => {
        expect(engineer.getName()).toEqual('Talhah Awan');
      });
    });
  
    describe("getId", () => {
      it("should return the engineer id", () => {
        expect(engineer.getId()).toEqual(1);
      });
    });
  
    describe("getEmail", () => {
      it("should return the engineer email", () => {
        expect(engineer.getEmail()).toEqual('Talhahawan@gmail.com')
      });
    });
  
  
    describe("getRole", () => {
      it("should return the engineer role", () => {
        expect(engineer.getRole()).toEqual('Engineer')
      });
    });
  
  });
  