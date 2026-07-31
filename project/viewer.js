import { renderMarkdown } from "./markdown.js";

export function loadProject(project) {
  const desc = document.getElementById("projectDescription");
  desc.innerHTML = renderMarkdown(project.description);
}
