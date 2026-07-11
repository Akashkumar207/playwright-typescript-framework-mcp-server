import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { DashboardPage } from '../pages/dashboard.page';
import { PIMPage } from '../pages/pim.page';
import { AddEmployeePage } from '../pages/add-employee.page';
import { EmployeePage } from '../pages/employee.page';
import { ProfilePage } from '../pages/profile.page';
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

  const dashboardPage = new DashboardPage(page);
  await dashboardPage.verifyDashboardLoaded();

  logger.step('Open employee list page');
  const pimPage = new PIMPage(page);
  await pimPage.openEmployeeList();
  await waitForPageReady(page);

  logger.step('Create a new employee with random data');
  const addEmployeePage = new AddEmployeePage(page);
  await addEmployeePage.openAddEmployeeForm();
  await addEmployeePage.fillEmployeeDetails(firstName, lastName);
  await addEmployeePage.saveEmployee();
  await waitForPageReady(page);

  logger.step('Verify the employee record is visible');
  const employeePage = new EmployeePage(page);
  await employeePage.verifyEmployeeCreated(firstName, lastName);

  logger.step('Logout from the application');
  const profilePage = new ProfilePage(page);
  await profilePage.openProfileMenu();
  await profilePage.logout();
  await profilePage.verifyLoggedOut();
});
