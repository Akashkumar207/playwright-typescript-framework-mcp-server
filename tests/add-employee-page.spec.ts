import { test } from '@playwright/test';
import { AddEmployeePage } from '../pages/add-employee.page';
import { PIMPage } from '../pages/pim.page';
import { loginAsAdmin } from '../utils/helpers';

const randomSuffix = `${Date.now()}`;
const firstName = `Playwright${randomSuffix}`;
const lastName = `User${randomSuffix}`;

test('Add employee page can open and save a record', async ({ page }) => {
  await loginAsAdmin(page);

  const pimPage = new PIMPage(page);
  await pimPage.openEmployeeList();
  await pimPage.verifyEmployeeListVisible();

  const addEmployeePage = new AddEmployeePage(page);
  await addEmployeePage.openAddEmployeeForm();
  await addEmployeePage.fillEmployeeDetails(firstName, lastName);
  await addEmployeePage.saveEmployee();
});
