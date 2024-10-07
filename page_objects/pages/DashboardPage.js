import { Selector, t  } from "testcafe";

class DashboardPage{
    constructor(){

        this.titleDashboard = Selector('.navbar-brand')
        this.addEmployeeButton = Selector('#add')
        this.updateEmployeeAction = Selector('tbody tr:nth-child(1) td:nth-child(9) i:nth-child(1)')
        this.deleteEmployeeAction = Selector('tbody tr:nth-child(1) td:nth-child(9) i:nth-child(2)')
        this.employeeTable = Selector('.pb-3')

        //First employee in the TABLE
        this.firstNameTable = Selector('tbody tr:nth-child(1) td:nth-child(2)')
        this.lastNameTable = Selector('tbody tr:nth-child(1) td:nth-child(3)')
        this.dependentsTable = Selector('tbody tr:nth-child(1) td:nth-child(4)')
        
    }
}

export default new DashboardPage