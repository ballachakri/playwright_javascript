import { test, expect } from '@playwright/test';

test('Get all users from page 1', async ({ request }) => {

    const response = await request.get('https://reqres.in/api/users?page=1',
        {
            headers: {
                'x-api-key': 'free_user_3E2AjwzxXxcN7w0cCMoFsWQvzQM',
            },
        }
    );

    expect(response.status()).toBe(200);
    const requestBody = await response.json();
    console.log(requestBody);
    console.log(requestBody.data[0].first_name);
    expect(requestBody.data[0].first_name).toEqual("George");
});


test.only('Create User using POST Request', async ({ request }) => {

    const newUser = {
        name: "John",
        job: "Test Engineer"
    }

    const response = await request.post('https://reqres.in/api/users',
        {
            headers: {
                'x-api-key': 'free_user_3E2AjwzxXxcN7w0cCMoFsWQvzQM',
            },
            data: newUser
        }
    );

    expect(response.status()).toBe(201);
    const responseBody = await response.json();
    console.log(responseBody.name);
    expect(responseBody.name).toEqual('John');


});