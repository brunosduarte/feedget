<p align="center">
  <img alt="nlw-return" src=".github/logo.svg" width="15%">
</p>
   <h1 align="center"> FeedGet </h1>
 </p>
<br />
<p align="center"> 
   <img src="https://img.shields.io/github/languages/count/brunosduarte/nlw-return" alt="Languages">
	<img src="https://img.shields.io/github/repo-size/brunosduarte/nlw-rerturn " alt="Repo Size"> 
  	<a href="https://github.com/brunosduarte/nlw-return/commits/master"> 
   		<img src="https://img.shields.io/github/last-commit/brunosduarte/nlw-return" alt="Last Commit"> 
 	</a> 
  	<a href="https://opensource.org/licenses/MIT"> 
   		<img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License MIT"> 
  	</a> 
</p>


## 🗂 Contents


- 📋 [Project](#-project)
  - 🚀 [Technologies](#-technologies)
  - 📷 [Preview](#-preview)
- 📦 [Instalation](#-instalation)
- ⚖️ [License](#%EF%B8%8F-license)
- 📫 [Contact](#-contact)


## 📋 Project

This is a full stack project, having desktop and mobile version of the app. The Feedback Widget (FeedGet) is an modular widget where is possible to send an email with a feedback message.


### 🚀 Technologies

- [Jest][jest]
- [NodeMailer][nodemailer]
- [NodeJS][nodejs]
- [ExpressJS][expressjs]
- [Prisma][prisma]
- [TypeScript][typescript]
- [Axios][axios]
- [Html2Canvas][html2canvas]
- [TailwindCss][tailwindcss]
- [HeadlessUI][headlessui]


## 📷 Preview

##### 💻 frontend:

<p align="center"> 
  <img alt="nlw-return" src=".github/web.png" width="100%">
</p>

## 📦 Instalation

To clone and run this application, you will need [Git][git], [NodeJS v18.17.1][nodejs] or higher + [npm v9.17.1][npm] or higher, and [PNPm 8.7.5][pnpm] installed on your computer. In your terminal, run:


```bash
# Cloning repo
$ git clone https://github.com/brunosduarte/nlw-ia.git nlw-ia
```

```bash
# Installing pnpm
$ npm install -g pnpm
```

```bash
# Backend

# Go to the repository
$ cd server

# Install the dependencies
$ pnpm i

# Create migrations
$ pnpm prisma migrate dev


# Note: After running the command above, you will be prompted to enter the migration name. You can use the following name: "create videos and prompts"

----------------------------------------------------------------------------------------------------------------------------------------
# Before running the API, change the .env.example to .env and add your OpenAI API key to the .env file
----------------------------------------------------------------------------------------------------------------------------------------

# Run the API
$ pnpm run dev

# Note: After running the command above, the API will be available at http://localhost:3333

```

```bash
# Frontend

# Got to the repository
$ cd web

# Install dependencies
$ pnpm i

# Execute
$ pnpm run dev
```


## ⚖️ License

This project is under license. [MIT](LICENSE).


## 📫 Contact

by [**Bruno Duarte**](https://www.linkedin.com/in/brunosduarte/) 🚀


[nodejs]: https://nodejs.org/
[pnpm]: https://pnpm.io/pt/
[npm]: https://www.npmjs.com/
[typescript]: https://www.typescriptlang.org/
[tailwindcss]: https://www.tailwindcss.com/
[prisma]: https://www.prisma.io/
[axios]: https://www.axios-http.com
[jest]: https://jestjs.io
[nodemailer]: https://nodemailer.com
[expressjs]: https://expressjs.com
[html2canvas]: https://html2canvas.hertzen
[headlessui]: https://headlessui.com
