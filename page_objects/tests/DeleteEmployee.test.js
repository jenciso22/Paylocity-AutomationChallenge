import { URLS } from "../data/Constants";
import { STANDARD_USER } from '../data/Roles'
import employeeModal from "../pages/EmployeeModal";
import { generateRandomEmployeeData } from '../data/RandomData';
import dashboardPage from "../pages/DashboardPage";


fixture('Delete feature test')
    .page `${URLS.LOGIN_URL}`

.beforeEach (async t => {
    await t.useRole(STANDARD_USER)
    await t.maximizeWindow()
    await t.setTestSpeed(1)
})


test('As a user, I should be able to delete an employee', async t => {

    const { actualFirstName, actualLastName } = await employeeModal.deleteEmployee();
    await t.wait(1000);

    // Check if the employee is still present in the table
    const isEmployeePresent = await dashboardPage.employeeTable.find('tr')
        .withText(actualFirstName)
        .withText(actualLastName)
        .count;

    // To review that the employee is no longer present in the table
    await t.expect(isEmployeePresent).eql(0, 'The employee should not be present in the table after deletion.');

  }).meta(
    'type','smoke'
  )

  test('As a user, I should be able to cancel the delete of an employee', async t => {
    
    const { actualFirstName, actualLastName } = await employeeModal.cancelDeleteEmployee();
    await t.wait(1000);

    // Check if the employee is still present in the table
    const isEmployeePresent = await dashboardPage.employeeTable.find('tr')
        .withText(actualFirstName)
        .withText(actualLastName)
        .count;

    // To review that the employee is still present in the table
    await t.expect(isEmployeePresent).eql(1, 'The employee should not be present in the table after deletion.');

  })