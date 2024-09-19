# NX Monorepo Project

This project is managed using NX, a powerful build system for monorepos. This README will guide you through getting started and running various parts of the project.

## Getting Started

To get started with this project, follow these steps:

1. Ensure you have [Node.js](https://nodejs.org/) and [pnpm](https://pnpm.io/) installed on your system.

2. Clone this repository to your local machine.

3. Navigate to the project root directory in your terminal.

4. Install the project dependencies by running:

   ```
   pnpm i
   ```

5. Once the installation is complete, you can run the entire application in development mode (see the commands section below).

## Available Commands

### Running the Full Application

To run all projects in the monorepo simultaneously in development mode, use the following command:

```
nx run-many -t serve dev -p remote1 remote2 rsbuild_project modernjs_project --parallel 4
```

This command will start the development servers for `remote1`, `remote2`, `rsbuild_project`, and `modernjs_project` in parallel.

### Running Individual Projects

#### Projects in the `apps` folder:

To run a specific project located in the `apps` folder, use:

```
nx run [project_name]:serve
```

Replace `[project_name]` with the name of the project you want to run (e.g., `remote1`, `remote2`).

#### Projects in the `packages` folder:

To run a specific project located in the `packages` folder, use:

```
nx run [project_name]:dev
```

Replace `[project_name]` with the name of the project you want to run (e.g., `rsbuild_project`, `modernjs_project`).

## Project Structure

- `apps/`: Contains main applications
  - `remote1/`
  - `remote2/`
- `packages/`: Contains shared packages and libraries
  - `rsbuild_project/`
  - `modernjs_project/`

## Additional Information

- For more detailed information about each project, refer to their individual README files in their respective directories.
- To learn more about NX and its capabilities, visit the [NX documentation](https://nx.dev/docs).

## Troubleshooting

If you encounter any issues while running the commands, try the following:

1. Ensure all dependencies are correctly installed (`pnpm i`).
2. Clear the NX cache: `nx reset`
3. Check for any error messages in the console and refer to the project-specific documentation.

If problems persist, please open an issue in the project repository.