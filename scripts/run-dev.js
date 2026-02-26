const path = require("path");
const { spawn } = require("child_process");
const { execSync } = require("child_process");

// Locked dev port — change only here if you need a different port
const PORT = 8000;

const projectRoot = path.resolve(__dirname, "..");
process.chdir(projectRoot);

// Free the port if something is already using it
try {
  execSync(`lsof -ti :${PORT} | xargs kill -9 2>/dev/null`, {
    stdio: "ignore",
    shell: true,
  });
} catch (_) {
  // Nothing was using the port
}
// Brief pause so the port is released
setTimeout(() => {
  const child = spawn("npx", ["next", "dev", "-p", String(PORT), "-H", "127.0.0.1"], {
    stdio: "inherit",
    cwd: projectRoot,
    shell: false,
  });
  child.on("exit", (code) => process.exit(code ?? 0));
}, 1000);
