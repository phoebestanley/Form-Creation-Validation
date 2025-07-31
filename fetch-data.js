// Define the async function to fetch and display user data
async function fetchUserData() {
    // 1. Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // 2. Select the Data Container Element
    const dataContainer = document.getElementById('api-data');

    try {
        // 3. Fetch Data Using try-catch
        const response = await fetch(apiUrl);
        const users = await response.json();

        // 4. Clear the Loading Message
        dataContainer.innerHTML = '';

        // 5. Create and Append User List
        const userList = document.createElement('ul');

        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = user.name;
            userList.appendChild(li);
        });

        dataContainer.appendChild(userList);
    } catch (error) {
        // 6. Error Handling
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
        dataContainer.style.color = 'red';
    }
}

// 7. Invoke fetchUserData on DOMContentLoaded
document.addEventListener('DOMContentLoaded', fetchUserData);
