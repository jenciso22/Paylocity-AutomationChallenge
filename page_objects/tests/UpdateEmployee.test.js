import { URLS } from "../data/Constants";
import { STANDARD_USER } from '../data/Roles'
import employeeModal from "../pages/EmployeeModal";
import { generateRandomEmployeeData } from '../data/RandomData';
import dashboardPage from "../pages/DashboardPage";


fixture('Update feature test')
    .page `${URLS.LOGIN_URL}`

.beforeEach (async t => {
    await t.useRole(STANDARD_USER)
    await t.maximizeWindow()
    await t.setTestSpeed(1)
})


test('As a user, I should be able to update the First Name', async t => {
    const { firstName } = generateRandomEmployeeData();
    await employeeModal.updateEmployeeName(firstName)
    await t.expect(dashboardPage.firstNameTable.innerText).eql(firstName, 'The last name should be updated successfully');

  }).meta(
    'type','smoke'
  )

test('As a user, I should be able to update the Last Name', async t => {
    const { lastName } = generateRandomEmployeeData();
    await employeeModal.updateEmployeeLastName(lastName)
    await t.expect(dashboardPage.lastNameTable.innerText).eql(lastName, 'The last name should be updated successfully');
})

test('As a user, I should be able to update the Dependents', async t => {
    const { dependents } = generateRandomEmployeeData();
    await employeeModal.updateEmployeeDependents(dependents)
    await t.expect(dashboardPage.dependentsTable.innerText).eql(dependents.toString(), 'Dependents should be updated successfully');

  })