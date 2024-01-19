# Skelton for Backend
-   CRUD
-   Authentication
-   Authorization

-   **Feature Breakdown**
    -   **Sign up:** Users can register by creating a new account using an email
        address
    -   **User list:** Any visitor can see the list of all registered users.
    -   **Authentication:** Registered users can sign in and sign out
        Protected user profile: - Only registered users can view individual user
        details after signing in.
    -   **Authorized user edit and delete:** Only a registered and authenticated
        user can edit or remove their own user account details

→ **API END POINT**

1. **List all users**
    ```
    GET /api/users
    ```

2. **Create a user**
    ```
    POST /api/users
    ```

3. **Fetch a user**
    ```
    GET /api/users/:userId
    ```

4. **Update a user**
    ```
    PUT /api/users/:userId
    ```
5. **Delete a user**
    ```
    DELETE /api/users/:userId
    ```
6. **User sign-in**
    ```
    POST /auth/signin
    ```

7. **User sign-out (Not completed)**
    ```
    GET /auth/signout
    ```

> **JWT Authorization**
-  Header Format :
        ```
         Authorization: Bearer <JSON Web Token>
        ```
-   decode : {email}