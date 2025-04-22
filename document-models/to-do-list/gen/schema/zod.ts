import { z } from "zod";
import type {
  AddTodoItemInput,
  DeleteTodoItemInput,
  ToDoItem,
  ToDoListState,
  UpdateTodoItemInput,
} from "./types.js";

type Properties<T> = Required<{
  [K in keyof T]: z.ZodType<T[K], any, T[K]>;
}>;

type definedNonNullAny = {};

export const isDefinedNonNullAny = (v: any): v is definedNonNullAny =>
  v !== undefined && v !== null;

export const definedNonNullAnySchema = z
  .any()
  .refine((v) => isDefinedNonNullAny(v));

export function AddTodoItemInputSchema(): z.ZodObject<
  Properties<AddTodoItemInput>
> {
  return z.object({
    id: z.string(),
    text: z.string(),
  });
}

export function DeleteTodoItemInputSchema(): z.ZodObject<
  Properties<DeleteTodoItemInput>
> {
  return z.object({
    id: z.string(),
  });
}

export function ToDoItemSchema(): z.ZodObject<Properties<ToDoItem>> {
  return z.object({
    __typename: z.literal("ToDoItem").optional(),
    checked: z.boolean(),
    id: z.string(),
    text: z.string(),
  });
}

export function ToDoListStateSchema(): z.ZodObject<Properties<ToDoListState>> {
  return z.object({
    __typename: z.literal("ToDoListState").optional(),
    items: z.array(ToDoItemSchema()),
  });
}

export function UpdateTodoItemInputSchema(): z.ZodObject<
  Properties<UpdateTodoItemInput>
> {
  return z.object({
    checked: z.boolean().nullish(),
    id: z.string(),
    text: z.string().nullish(),
  });
}
