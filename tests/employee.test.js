const Employee = require("../lib/Employee");

describe("Employee", () => {
  const employee = new Employee('Talhah Awan', 1, 'Talhahawan@gmail.com');
  describe("Initialization of employee object", () => {
    it("should create an object with name, id, and email", () => {
      expect(employee.name).toEqual('Talhah Awan');
      expect(employee.id).toEqual(1);
      expect(employee.email).toEqual('Talhahawan@gmail.com')
    });
  });

  describe("getName", () => {
    it("should return the employee name", () => {
      expect(employee.getName()).toEqual('Talhah Awan');
    });
  });

  describe("getId", () => {
    it("should return the employee id", () => {
      expect(employee.getId()).toEqual(1);
    });
  });

  describe("getEmail", () => {
    it("should return the employee email", () => {
      expect(employee.getEmail()).toEqual('Talhahawan@gmail.com')
    });
  });


  describe("getRole", () => {
    it("should return the employee role", () => {
      expect(employee.getRole()).toEqual('Employee')
    });
  });

});
