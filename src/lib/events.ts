import { writable } from 'svelte/store';

export const events = writable('');
export const overlayActive = writable(false);
export const viewImages = writable<{srcs: string[], idx: number}>(undefined);