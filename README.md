# **TransportAuth Angular**

A modern **Angular frontend application** for a transport management platform, focused on **user authentication**, **protected routes**, **admin access**, and a clean responsive interface.

The application is built with **Angular 17**, **Firebase Authentication**, **AngularFire**, **Bootstrap**, **ngx-toastr**, and **SweetAlert2**.

It can be used as the frontend foundation for:

- **Transport management platforms**
- **Mobility service dashboards**
- **Admin portals**
- **User authentication systems**
- **Transport booking interfaces**
- **Passenger portals**
- **Angular Firebase authentication projects**

---

# **Project Purpose**

The main purpose of this project is to provide a secure frontend structure for a transport-related application.

The application includes:

- **User login**
- **User registration**
- **Google authentication**
- **Protected pages**
- **Admin page access**
- **Password reset page**
- **Session-based route protection**
- **User notifications**
- **Responsive Bootstrap UI**

The project is especially useful as a starting point for building a complete transport platform where users can authenticate before accessing transport services, dashboards, reservations, or administration features.

---

# **Technologies Used**

## **Frontend**

- **Angular 17**
- **TypeScript**
- **HTML**
- **CSS**
- **Bootstrap 5**
- **Bootstrap Icons**
- **RxJS**

## **Authentication**

- **Firebase Authentication**
- **AngularFire**
- **Google Authentication**
- **Email / Password Authentication**

## **UI & Notifications**

- **ngx-toastr**
- **SweetAlert2**

## **Server-Side Rendering**

- **Angular SSR**
- **Express**

---

# **Project Structure**

```bash
TransportApp_Angular/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── login/
│   │   │   ├── signup/
│   │   │   ├── home/
│   │   │   ├── admin/
│   │   │   └── reset-password/
│   │   │
│   │   ├── shared/
│   │   │   ├── guards/
│   │   │   │   └── auth.guard.ts
│   │   │   │
│   │   │   └── services/
│   │   │       └── auth.service.ts
│   │   │
│   │   ├── app-routing.module.ts
│   │   ├── app.module.ts
│   │   └── app.component.ts
│   │
│   ├── assets/
│   ├── environments/
│   ├── index.html
│   ├── main.ts
│   └── styles.css
│
├── angular.json
├── package.json
├── server.ts
├── tsconfig.json
└── README.md
```

---

# **Main Features**

## **Authentication**

- **Login with email and password**
- **Login with Google**
- **User registration**
- **Logout**
- **Email verification check**
- **Password reset page**

---

## **Protected Routes**

The application protects private pages using an Angular route guard.

Protected pages include:

- **Home**
- **Admin**

If the user is not authenticated, the application redirects the user to the login page.

---

## **User Session Management**

The application stores authenticated user data in:

```text
sessionStorage
```

This allows the app to verify whether a user is logged in before accessing protected pages.

---

## **Notifications**

The application uses:

- **ngx-toastr** for success messages
- **SweetAlert2** for alerts and error messages

Examples:

- Login success notification
- Email verification warning
- Unauthorized access alert
- Session error alert

---

## **Responsive UI**

The application uses:

- **Bootstrap**
- **Bootstrap Icons**
- **Custom CSS**

This makes the interface easier to style and adapt to different screens.

---

# **Application Routes**

| Route | Component | Protection | Description |
|---|---|---|---|
| **/** | Redirect | Public | Redirects to login |
| **/login** | LoginComponent | Public | User login page |
| **/signup** | SignupComponent | Public | User registration page |
| **/home** | HomeComponent | Protected | Main user page |
| **/admin** | AdminComponent | Protected | Admin dashboard page |
| **/reset-password** | ResetPasswordComponent | Public | Password reset page |
| **/*** | Redirect | Public | Redirects unknown routes to login |

---

# **Authentication Flow**

## **1. User Login**

The user enters email and password.

Firebase verifies the credentials.

If the email is verified:

- User data is saved in `sessionStorage`
- User is redirected to `/home`
- A success notification is displayed

If the email is not verified:

- An alert is displayed asking the user to verify the account

---

## **2. Google Login**

The user can log in with Google using Firebase popup authentication.

After successful login:

- User data is saved in `sessionStorage`
- User is redirected to `/home`

---

## **3. Protected Route Access**

When the user tries to access `/home` or `/admin`, the `authGuard` checks if user data exists in `sessionStorage`.

If the session exists:

```text
Access granted
```

If the session does not exist:

```text
Redirect to /login
```

---

# **Installation**

## **1. Clone the Repository**

```bash
git clone https://github.com/Noris69/TransportApp_Angular.git
cd TransportApp_Angular
```

---

## **2. Install Dependencies**

```bash
npm install
```

---

## **3. Configure Firebase**

Create or update the Angular environment file:

```bash
src/environments/environment.ts
```

Add your Firebase configuration:

```ts
export const environment = {
  production: false,
  firebase: {
    apiKey: "your_api_key",
    authDomain: "your_project.firebaseapp.com",
    projectId: "your_project_id",
    storageBucket: "your_project.appspot.com",
    messagingSenderId: "your_sender_id",
    appId: "your_app_id"
  }
};
```

---

## **4. Run the Application**

```bash
npm start
```

or:

```bash
ng serve
```

The application will run on:

```bash
http://localhost:4200
```

---

# **Useful Commands**

## **Run Development Server**

```bash
npm start
```

or:

```bash
ng serve
```

---

## **Build Project**

```bash
npm run build
```

or:

```bash
ng build
```

---

## **Run Tests**

```bash
npm test
```

or:

```bash
ng test
```

---

## **Run SSR Server**

```bash
npm run serve:ssr:authentication-angular
```

---

# **Firebase Authentication Setup**

To use this project correctly, you need to enable Firebase Authentication methods:

## **Email / Password**

Go to Firebase Console:

```text
Authentication > Sign-in method > Email/Password > Enable
```

## **Google Provider**

Go to Firebase Console:

```text
Authentication > Sign-in method > Google > Enable
```

---

# **Git Ignore Recommendations**

Make sure the following files and folders are ignored:

```gitignore
node_modules/
dist/
.angular/
.env
.env.local
*.log
.DS_Store
.vscode/
.idea/
```

---

# **Security Recommendations**

- **Do not expose Firebase private credentials**
- **Do not push environment files containing sensitive information**
- **Use route guards for protected pages**
- **Add role-based authorization for admin pages**
- **Avoid relying only on sessionStorage for critical permissions**
- **Use backend validation for sensitive operations**
- **Enable email verification in Firebase**
- **Configure Firebase authorized domains**

---

# **Author**

Developed by **Noris69**.
