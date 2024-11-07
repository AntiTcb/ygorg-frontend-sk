import type { AvailableLanguageTag } from "../../lib/paraglide/runtime"
import type { ParaglideLocals } from "@inlang/paraglide-sveltekit"
import 'unplugin-icons/types/svelte';

declare global {
  namespace App {
    // interface Error {}
     interface Locals {
    paraglide: ParaglideLocals<AvailableLanguageTag>,
}
    // interface PageData {}
    // interface PageState {}
    // interface Platform {}
  }
}

declare module '*';

export {};
