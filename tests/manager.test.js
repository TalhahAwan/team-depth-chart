const Manager = require("../lib/manager");

describe("Manager", () => {
    const manager = new Manager('Talhah Awan', 1, 'Talhahawan@gmail.com');
    describe("Initialization of manager object", () => {
      it("should create an object with name, id, and email", () => {
        expect(manager.name).toEqual('Talhah Awan');
        expect(manager.id).toEqual(1);
        expect(manager.email).toEqual('Talhahawan@gmail.com')
      });
    });
  
    describe("getName", () => {
      it("should return the manager name", () => {
        expect(manager.getName()).toEqual('Talhah Awan');
      });
    });
  
    describe("getId", () => {
      it("should return the manager id", () => {
        expect(manager.getId()).toEqual(1);
      });
    });
  
    describe("getEmail", () => {
      it("should return the manager email", () => {
        expect(manager.getEmail()).toEqual('Talhahawan@gmail.com')
      });
    });
  
  
    describe("getRole", () => {
      it("should return the manager role", () => {
        expect(manager.getRole()).toEqual('Manager')
      });
    });
  
  });
  