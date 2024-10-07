import { Selector, t  } from "testcafe";
import dashboardPage from './DashboardPage'

class EmployeeModal{
    constructor(){
        
        //Add Modal
        this.addEmployeeHeader = Selector('div[id="employeeModal"] h5[class="modal-title"]')
        this.firstNameField = Selector('#firstName')
        this.lastNameField = Selector('#lastName')
        this.dependentsField = Selector ('#dependants')
        this.addButton = Selector ('#addEmployee')
        this.cancelButton = Selector('button:nth-child(3)')

        //Update Modal
        this.updateButton = Selector ('#updateEmployee')

        //Delete Modal
        this.deleteHeader = Selector('div[id="deleteModal"] h5[class="modal-title"]')
        this.deleteQuestion = Selector('.col-sm-12')
        this.deleteButton = Selector('#deleteEmployee')
        this.cancelButtonOnDelete = Selector('body > div:nth-child(2) > main:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > button:nth-child(2)')

    }

    // Add Employeee
    addEmployee = async (firstName, lastName, dependents) => {
        await t
          .click(dashboardPage.addEmployeeButton)
          .expect(this.addEmployeeHeader.innerText).eql('Add Employee', 'The header should be "Add Employee".') 
          .typeText(this.firstNameField, firstName, { paste : true })
          .typeText(this.lastNameField, lastName, { paste : true })
          .typeText(this.dependentsField, dependents.toString(), { paste : true })
          .click(this.addButton)
      }
    cancelEmployee = async (firstName, lastName, dependents) => {
        await t
          .click(dashboardPage.addEmployeeButton)
          .expect(this.addEmployeeHeader.innerText).eql('Add Employee', 'The header should be "Add Employee".') 
          .typeText(this.firstNameField, firstName, { paste : true })
          .typeText(this.lastNameField, lastName, { paste : true })
          .typeText(this.dependentsField, dependents.toString(), { paste : true })
          .click(this.cancelButton)
      }

    addEmployeeMissingField = async (firstName, lastName, dependents) => {
        await t
        // Try without dependents
          .click(dashboardPage.addEmployeeButton)
          .expect(this.addEmployeeHeader.innerText).eql('Add Employee', 'The header should be "Add Employee".') 
          .typeText(this.firstNameField, firstName, { paste : true })
          .typeText(this.lastNameField, lastName, { paste : true })
          .click(this.addButton)
        // Try without LastName
          .typeText(this.dependentsField, dependents.toString(), { paste : true })
          .selectText(this.lastNameField)
          .pressKey('delete')
          .click(this.addButton)
        // Try without First Name
          .typeText(this.lastNameField, lastName, { paste : true })
          .selectText(this.firstNameField)
          .pressKey('delete')
      }

    // Update Employeee
    updateEmployeeName = async (firstName) => {
      await t
        .click(dashboardPage.updateEmployeeAction)
        .selectText(this.firstNameField)
        .pressKey('delete')
        .typeText(this.firstNameField, firstName, { paste : true })
        .click(this.updateButton)
    }

    updateEmployeeLastName = async (lastName) => {
      await t
        .click(dashboardPage.updateEmployeeAction)
        .selectText(this.lastNameField)
        .pressKey('delete')
        .typeText(this.lastNameField, lastName, { paste : true })
        .click(this.updateButton)
    }

    updateEmployeeDependents = async (dependents) => {
      await t
        .click(dashboardPage.updateEmployeeAction)
        .selectText(this.dependentsField)
        .pressKey('delete')
        .typeText(this.dependentsField, dependents.toString(), { paste : true })
        .click(this.updateButton)
    }

    // Delete Employeee
    deleteEmployee = async () => {
      await t
        .click(dashboardPage.deleteEmployeeAction)
        .expect(this.deleteHeader.innerText).eql('Delete Employee', 'The header should be "Delete Employee".')

      // Retrieve actual first and last name from the table
      const actualFirstName = await dashboardPage.firstNameTable.innerText;
      const actualLastName = await dashboardPage.lastNameTable.innerText;

      // Construct the expected question text
      const expectedQuestion = `Delete employee record for ${actualFirstName} ${actualLastName}?`;

      // Match and Delete
      await t
        .expect(this.deleteQuestion.innerText).eql(expectedQuestion, 'The question has the correct employee to be DELETE')
        .click(this.deleteButton)

      return { actualFirstName, actualLastName };
    }

    cancelDeleteEmployee = async () => {
      await t
        .click(dashboardPage.deleteEmployeeAction)
        .expect(this.deleteHeader.innerText).eql('Delete Employee', 'The header should be "Delete Employee".')

      // Retrieve actual first and last name from the table
      const actualFirstName = await dashboardPage.firstNameTable.innerText;
      const actualLastName = await dashboardPage.lastNameTable.innerText;

      // Construct the expected question text
      const expectedQuestion = `Delete employee record for ${actualFirstName} ${actualLastName}?`;

      // Match and Delete
      await t
        .expect(this.deleteQuestion.innerText).eql(expectedQuestion, 'The question has the correct employee to be DELETE')
        .click(this.cancelButtonOnDelete)

      return { actualFirstName, actualLastName };
    }    
    
    

}

export default new EmployeeModal