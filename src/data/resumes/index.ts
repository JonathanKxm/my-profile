import type { StackEntry } from "../../types/resume"

import fullstack from "./fullstack"

export const STACKS: StackEntry[] = [fullstack]

export const STACK_MAP = new Map(STACKS.map((s) => [s.stack, s]))

export const findStack = (stackSlug: string) =>
  STACK_MAP.get(stackSlug) ?? null

export type { StackEntry } from "../../types/resume"
