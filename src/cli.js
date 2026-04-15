#!/usr/bin/env node

import chalk from "chalk";
import prompts from "prompts";
import { execSync } from "child_process";
import * as fs from "fs";
import * as path from "path";
import degit from "degit";
import ora from "ora";

const TEMPLATE_REPO = "mehedihsiam/express-mongo-starter.git";

async function getProjectConfig() {
  const questions = [
    {
      type: "text",
      name: "projectName",
      message: "What is your project name?",
      initial: "my-express-app",
      validate: (value) => {
        if (!value.match(/^[a-zA-Z0-9-_]+$/)) {
          return "Project name can only contain letters, numbers, dashes, and underscores";
        }
        if (fs.existsSync(value)) {
          return `Directory "${value}" already exists`;
        }
        return true;
      },
    },
    {
      type: "select",
      name: "packageManager",
      message: "Which package manager do you want to use?",
      choices: [
        { title: "npm", value: "npm" },
        { title: "yarn", value: "yarn" },
        { title: "pnpm", value: "pnpm" },
      ],
      initial: 0,
    },
  ];

  const response = await prompts(questions);

  if (!response.projectName || !response.packageManager) {
    console.log(chalk.red("\n✗ Project creation cancelled"));
    process.exit(1);
  }

  return {
    projectName: response.projectName,
    packageManager: response.packageManager,
  };
}

async function cloneTemplate(projectName) {
  const spinner = ora("Cloning template repository...").start();

  try {
    const d = degit(TEMPLATE_REPO);
    await d.clone(projectName);
    spinner.succeed(chalk.green("Template cloned successfully"));
  } catch (error) {
    spinner.fail(chalk.red("Failed to clone template"));
    console.error(chalk.red(`Error: ${error.message}`));
    process.exit(1);
  }
}

async function installDependencies(projectName, packageManager) {
  const spinner = ora(
    `Installing dependencies with ${packageManager}...`,
  ).start();

  try {
    const projectPath = path.join(process.cwd(), projectName);
    process.chdir(projectPath);

    const commands = {
      npm: "npm install",
      yarn: "yarn install",
      pnpm: "pnpm install",
    };

    const command = commands[packageManager];
    execSync(command, { stdio: "inherit" });

    spinner.succeed(chalk.green("Dependencies installed successfully"));
  } catch (error) {
    spinner.fail(chalk.red("Failed to install dependencies"));
    console.error(chalk.red(`Error: ${error.message}`));
    process.exit(1);
  }
}

async function main() {
  console.log(chalk.cyan("\n🚀 Create Express MongoDB App\n"));

  try {
    const config = await getProjectConfig();

    console.log(
      chalk.blue(`\n📁 Creating project: ${chalk.bold(config.projectName)}`),
    );

    await cloneTemplate(config.projectName);
    await installDependencies(config.projectName, config.packageManager);

    console.log(chalk.green("\n✓ Project created successfully!\n"));
    console.log(chalk.cyan("Next steps:"));
    console.log(chalk.gray(`  1. cd ${config.projectName}`));
    console.log(chalk.gray(`  2. cp .env.example .env`));
    console.log(chalk.gray(`  3. ${config.packageManager} run dev`));
    console.log(
      chalk.gray(
        `\nFor more information, visit: https://github.com/${TEMPLATE_REPO}`,
      ),
    );
    console.log("");
  } catch (error) {
    console.error(chalk.red(`\n✗ Error: ${error.message}\n`));
    process.exit(1);
  }
}

main();
