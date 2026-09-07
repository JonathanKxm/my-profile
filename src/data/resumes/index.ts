import type { StackEntry } from "../../types/resume"

import fullstack from "./fullstack"
import java from "./java"
import node from "./node"
import python from "./python"
import react from "./react"
import vue from "./vue"
import javascript from "./javascript"

export const STACKS: StackEntry[] = [
  fullstack,
  java,
  node,
  python,
  react,
  vue,
  javascript,
]

export const STACK_MAP = new Map(STACKS.map((s) => [s.stack, s]))

export const findStack = (stackSlug: string) =>
  STACK_MAP.get(stackSlug) ?? null

export type { StackEntry } from "../../types/resume"
