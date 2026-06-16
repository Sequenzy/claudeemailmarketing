import fs from "node:fs";
const required = [
  "public/index.html",
  "public/articles/index.html",
  "public/skill/index.html",
  "skills/claudeemailmarketing/SKILL.md",
  "skills/claudeemailmarketing/agents/openai.yaml",
  "skills/claudeemailmarketing/references/operating-checklist.md"
];
for (const file of required) {
  if (!fs.existsSync(file)) throw new Error(`Missing ${file}`);
}
const skill = fs.readFileSync("skills/claudeemailmarketing/SKILL.md", "utf8");
if (!skill.startsWith("---\nname: claudeemailmarketing\n")) throw new Error("Invalid skill frontmatter");
const html = fs.readFileSync("public/index.html", "utf8");
if (!html.includes("npx skills add claudeemailmarketing")) throw new Error("Missing install shortcut");
console.log("claudeemailmarketing.com ok");
