#! /usr/bin/env node

const program = require("commander");
const download = require("download-git-repo");
const { version } = require("./package.json");
const child_process = require("child_process");
const path = require("path");
//version 版本号
//name 新项目名称
program
  .version(version, "-v, --version")
  .command("init <projectName>")
  .action((projectName) => {
    console.log("clone template ...");
    download("github:chfpsheng/wl-admin", projectName, function (err) {
      console.log(err ? "Error" : "Success");
    });
  });
// program.command("mock <dataPath> <port>").action((dataPath, port) => {
//   console.log("mock server start ...");
//   console.log(`dataPath: ${dataPath}`);
//   console.log(`port: ${port}`);
//   const cwd = process.cwd();
//   const childProcessPath = path.join(
//     cwd,
//     "node_modules",
//     ".bin",
//     "mileage-mock"
//   );
//   child_process.exec(
//     `${childProcessPath} mock ${dataPath} ${port}`,
//     function (err, stdout, stderr) {
//       console.log(stdout);
//       console.log(stderr);
//     }
//   );
// });
program.parse(process.argv);
