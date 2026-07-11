import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { EmployeePage } from '../pages/employee.page';
import { TestLogger } from '../utils/test-logger';
import { waitForPageReady } from '../utils/helpers';

const randomSuffix = `${Date.now()}`;
const firstName = `Playwright${randomSuffix}`;
const lastName = `User${randomSuffix}`;


test('OrangeHRM employee creation flow', async ({ page }) => {
  const logger = new TestLogger('OrangeHRM employee creation flow');

  logger.step('Open OrangeHRM application');
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await waitForPageReady(page);

  logger.step('Login with admin credentials');
  await loginPage.login('Admin', 'admin123');
  await loginPage.verifyLoggedIn();
  await waitForPageReady(page);

  logger.step('Open employee list page');
  const employeePage = new EmployeePage(page);
  await employeePage.openEmployeeList();
  await waitForPageReady(page);

  logger.step('Create a new employee with random data');
  await employeePage.addEmployee(firstName, lastName);
  await waitForPageReady(page);

  logger.step('Verify the employee record is visible');
  await employeePage.verifyEmployeeCreated(firstName, lastName);

  logger.step('Logout from the application');
  await employeePage.logout();
  await expect(page.getByRole('button', { name: /login/i })).toBeVisible();
});
