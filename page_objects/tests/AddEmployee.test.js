import { URLS } from "../data/Constants";
import { STANDARD_USER } from '../data/Roles'
import employeeModal from "../pages/EmployeeModal";
import { generateRandomEmployeeData } from '../data/RandomData';


fixture('Employee feature test')
    .page `${URLS.LOGIN_URL}`

.beforeEach (async t => {
    await t.useRole(STANDARD_USER)
    await t.maximizeWindow()
    await t.setTestSpeed(1)
})


test('As a user, I should be able to add a new employee', async t => {
    const { firstName, lastName, dependents } = generateRandomEmployeeData();
    await employeeModal.addEmployee(firstName, lastName, dependents)

  }).meta(
    'type','smoke'
  )

test('As a user, I should be able to cancel the creation of new employee', async t => {
    const { firstName, lastName, dependents } = generateRandomEmployeeData();
    await employeeModal.cancelEmployee(firstName, lastName, dependents)

  })

test('As a user, employee should not be added if 1 field is missing', async t => {
    const { firstName, lastName, dependents } = generateRandomEmployeeData();
    await employeeModal.addEmployeeMissingField(firstName, lastName, dependents)
    await t.expect(employeeModal.addEmployeeHeader.innerText).contains('Add Employee')

  })