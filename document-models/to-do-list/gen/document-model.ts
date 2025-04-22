import type { DocumentModelState } from "document-model";

export const documentModel: DocumentModelState = {
  id: "powerhouse/todolist",
  name: "ToDoList",
  extension: "",
  description: "",
  author: {
    name: "",
    website: "",
  },
  specifications: [
    {
      version: 1,
      changeLog: [],
      state: {
        global: {
          schema:
            "type ToDoListState {\n  items: [ToDoItem!]!\n}\ntype ToDoItem {\n  id: ID!\n  text: String!\n  checked: Boolean!\n}",
          initialValue: '"{\\n  \\"items\\": []\\n}"',
          examples: [],
        },
        local: {
          schema: "",
          initialValue: '""',
          examples: [],
        },
      },
      modules: [
        {
          id: "NJDoAVGCSTME/0mBrYKF/dkND60=",
          name: "operations",
          description: "",
          operations: [
            {
              id: "2T6tK1/rpfe7wo/FAGVaUuRh+Oc=",
              name: "ADD_TODO_ITEM",
              description: "",
              schema: "input AddTodoItemInput {\n  id: ID!\n  text: String!\n}",
              template: "",
              reducer: "",
              errors: [],
              examples: [],
              scope: "global",
            },
            {
              id: "x0X1qafZ8g635Gmj1zPblksv67k=",
              name: "UPDATE_TODO_ITEM",
              description: "",
              schema:
                "input UpdateTodoItemInput {\n  id: ID!\n  text: String\n  checked: Boolean\n}",
              template: "",
              reducer: "",
              errors: [],
              examples: [],
              scope: "global",
            },
            {
              id: "mWPMbGk8DTGdJJ5xz5qDXFqoEWA=",
              name: "DELETE_TODO_ITEM",
              description: "",
              schema: "input DeleteTodoItemInput {\n  id: ID!\n}",
              template: "",
              reducer: "",
              errors: [],
              examples: [],
              scope: "global",
            },
          ],
        },
      ],
    },
  ],
};
