/**
 * This is a scaffold file meant for customization:
 * - modify it by implementing the reducer functions
 * - delete the file and run the code generator again to have it reset
 */

import type { ToDoListOperationsOperations } from "../../gen/operations/operations.js";
import type { ToDoListState, ToDoItem } from "../../gen/schema/types.js";
import type { AddTodoItemAction, UpdateTodoItemAction, DeleteTodoItemAction } from "../../gen/operations/actions.js";

export const reducer: ToDoListOperationsOperations = {
  addTodoItemOperation(state: ToDoListState, action: AddTodoItemAction) {
    state.items.push({
      id: action.input.id,
      text: action.input.text,
      checked: false,
    });
  },
  updateTodoItemOperation(state: ToDoListState, action: UpdateTodoItemAction) {
    const item = state.items.find((item: ToDoItem) => item.id === action.input.id);
    if (!item) throw new Error(`Item with id ${action.input.id} not found`);
    if (action.input.text !== undefined && action.input.text !== null) {
      item.text = action.input.text;
    }
    if (action.input.checked !== undefined && action.input.checked !== null) {
      item.checked = action.input.checked;
    }
  },
  deleteTodoItemOperation(state: ToDoListState, action: DeleteTodoItemAction) {
    state.items = state.items.filter((item: ToDoItem) => item.id !== action.input.id);
  },
};