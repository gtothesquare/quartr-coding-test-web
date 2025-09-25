## Readme

This project is based on NextJS 15, uses the app router, and requires node 20 or higher.

**Installation**

```
npm install
```

**Running the application**

```
npm run dev
```

## Implementation Notes

This web app displays a list of trending companies on the start page. Clicking a company opens its details page.

### Upgrade

The original code used a combination of the app router and pages. It has been upgraded to the latest Next.js version, migrating the codebase to the new app router. Tailwind CSS v4 is used for styling.

Additionally, ESLint, Prettier, and the latest TypeScript have been added, and all code has been moved to the `src` folder.

### Structure

All code resides in the `src` folder, organized as follows:

- **`app`**: Defines routes, layouts, API routes, and server components. Mostly Next.js-specific code.
- **`components`**: General-purpose React components. Includes a `ui` folder for UI primitives.
- **`db`**: Currently a JSON file, but can be extended to SQLite or other database logic.
- **`features`**: Business logic and app-specific components, e.g., rendering the company list and details pages.
- **`hooks`**: General-purpose React hooks. Currently includes `useApiClient`, which wraps API calls and simplifies handling loading states and errors.
- **`lib`**: Reusable utilities and helper functions not tied to components, pages, or features.
- **`styles`**: Contains styling code for the app.  



