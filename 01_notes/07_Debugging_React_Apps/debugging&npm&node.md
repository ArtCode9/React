# Debugging React Apps

finding and fixing errors
   - making sense of react error messages
   - finding logical errors via the browser devtools and debugger
   - enabling react's strict mode
   - using the react devtools for application analysis and manipulation

------------------------------------------------


#  ⚙️Basic : npm and node essentials command
| command | Description | 
|---------|-------------|
|```node -v  ``` | Check node.js version |
|```npm -v ``` |Check npm version |
|```npm init ``` |Create ```package.json``` interactively |
|```npm init -y ``` |Create```package.json``` with default values(quick setup) |
|```npm install ``` |Install all dependencies listed in package.json |
|```npm install <package>``` | Install package (e.g ```npm install express```)|
|```npm install <package>@<version>``` |install specific version (e.g ``` npm install react@18.2.0```) |
|```npm uninstall <package>``` | Remove a package|
|```npm update ``` |Update all dependencies to latest compatible versions |
|```npm audit ``` |Check for Security Vulnerabilities |
|```npm audit fix ``` |Automatically fix security issues |
|```npm ls or npm list ``` |Show installed packages and version |
|```npm list -g --depth=0 ``` |Show globally installed packages(top-level only) |
------------------------

# 🧱 Project Scripts : run and manage custom commands

| Command | Description |
|---------|---------|
|```npm run ``` |Show all available script in your package.json |
|```npm run <script>``` |Run specific script (e.g npm run dev)|
|```npm start ``` | Run The script named "start" -- shorthand for 'npm run start'|
|```npm test ``` |Run the script named 'test' |
|```npm run build ``` |Run a build script if defined(commonly used in front-end frameworks.) |
--------------------------

Example inside package.json:
```
"scripts": {
   "dev": "serve .",
   "start": "node app.js",
   "test": "jest",
}
```
Now You Can Run:

``` npm run dev ``` -> Start local server

```npm start``` -> Runs node app

```npm test ``` -> Runs jest

-----------------------------------

# 📦 Package management: 
| Command | Description |
|---------|-------------|
|```npm install <package> ``` |Install and save package under dependencies |
|```npm install <package> --save-dev ``` | Install for development only|
|```npm uninstall <package> ``` | Remove package from project|
|``` npm outdated``` | Show which packages have newer version available|
|```npm prune ``` | Remove extraneous packages not listed in package.json|

------------------

# 🌐 Global Packages:
| Command | Description |
|--------|--------|
|```npm install -g <package>``` | Install package globally (available system-wide)|
|```npm uninstall -g <package>``` | Uninstall global package|
|```npm list -g --depth=0 ``` | List globally installed packages|
|```npx <package> ``` |Run a package without installing(temporary execution) |
-------------------
Example:
```
npx serve .
npx create-react-app myapp
```

-----------------
# 🧠 Package.json & dependency control

|Command|Description|
|---|---|
|``` npm ci ``` | Clean install from ```package-lock.json```(for consistent builds)|
|``` npm shrinkwrap```| Lock dependency versions(less common now replaced by package.json)|
|``` npm dedupe``` |Remove duplicate package in node_modules|
----------------------------------------------

# 🧰Node-specific Commands
|command | Description |
|---|---|
|```node file.js ```| Run a JS file directly with node.js|
|``` node --watch file.js``` | Run with file watching(auto restart when file changes --node 18)|
|```node -r dotenv/config app.js ``` | Load environment variable form ```.env```|
|```node --inspect file.js``` | Run debug mode for vscode dev tools|

-----------------
# 🍾 NPM environment / Info commands

|Command | Description |
|--------|-------|
|```npm root ```|Show path to local node_modules |
|```npm root -g```| Show path to global node_modules|
|```npm config list ```| Show current npm configuration|
|```npm config get prefix ```|Show global install path |
|```npm info <package>```|Show info about a package from npm registry |

-----------------

#  🧩TroubleShooting commands

|Command | Description |
|---|---|
|``` npm cache clean --force ``` | clear npm cache |
|``` npm rebuild ``` | Rebuild native add-ons |
|``` npm doctor```| Check npm environment for issues.|
|``` npm audit fix --force``` | Force fix vulnerabilities(can upgrade breaking versions)|
-------------------------------

# Typical workflow example:
```bash
# step 1: start a new project
npm init -y

# step 2: install something
npm install serve

# step 3: add script
# "scripts": { "dev": "serve ." }

# step 4: run server
npm run dev

# step 5: Check packages
npm ls

# step 6: update and audit
npm update
npm audit fix

```

💡 Pro Tips :
1. Use ``` npx``` for one-time tools (```npx serve .```,```npx create-react-app myapp```)

2. Never Delete ```package-lock.json``` it locks dependency version.

3. Use ```.gitignore``` to exclude ```node_modules/```.

4. Global vs local installs:
   - Local: per project(default)
   - Global: CLI tools only (```serve```, ```nodemon```, ```eslint```) 



