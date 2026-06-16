import fs from "node:fs";
const required = [
  "public/index.html",
  "public/articles/index.html",
  "public/skill/index.html",
  "skills/claude-email-marketing/SKILL.md",
  "skills/claude-email-marketing/agents/openai.yaml",
  "skills/claude-email-marketing/references/operating-checklist.md"
];
for (const file of required) {
  if (!fs.existsSync(file)) throw new Error(`Missing ${file}`);
}
const skill = fs.readFileSync("skills/claude-email-marketing/SKILL.md", "utf8");
if (!skill.startsWith("---\nname: claude-email-marketing\n")) throw new Error("Invalid skill frontmatter");
const html = fs.readFileSync("public/index.html", "utf8");
if (!html.includes("npx skills add claude-email-marketing")) throw new Error("Missing install shortcut");
console.log("claudeemailmarketing.com ok");
