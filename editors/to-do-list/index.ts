import type { EditorModule } from "document-model";
import Editor from "./editor.js";
import type { ToDoListDocument } from "../../document-models/to-do-list/index.js";

export const module: EditorModule<ToDoListDocument> = {
  Component: Editor,
  documentTypes: ["powerhouse/todolist"],
  config: {
    id: "editor-id",
    disableExternalControls: true,
    documentToolbarEnabled: true,
    showSwitchboardLink: true,
  },
};

export default module;
