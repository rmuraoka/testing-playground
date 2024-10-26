import { test, expect } from '@playwright/test';

test.describe('Todo List E2E Tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:3000'); // アプリのURL
    });

    test('should add a new task', async ({ page }) => {
        // タスクを追加する
        const timestamp = Date.now();
        await page.locator('[data-testid="title"] input').fill(`New-Task-${timestamp}`);
        await page.locator('[data-testid="description"] input').fill( 'Description for new task');
        await page.getByTestId('add-task-button').click();

        // タスクが表示されていることを確認
        const taskTitle = await page.locator(`text=New-Task-${timestamp}`);
        await expect(taskTitle).toBeVisible();

        // タスクを削除する
        await page.getByTestId(`delete-task-button-New-Task-${timestamp}`).click();

        // タスクが表示されていないことを確認
        await expect(taskTitle).not.toBeVisible();
    });
});
