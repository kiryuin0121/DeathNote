import app from "./src/app";
import chalk from "chalk";

const PORT = process.env.PORT || 3000;
// Expressサーバーを起動
app.listen(PORT, () => {
  console.log();
  console.log(`${chalk.green.bold("  Express")}${chalk.green(" v5.1.0")}`);
  console.log();
  console.log(
    `  ${chalk.green("➜")}  ${chalk.bold("Local")}:   ${chalk.magenta(
      `http://localhost:${PORT}/`
    )}`
  );
});
