import {writable} from 'svelte/store';
import type {ScrollReferences} from '$lib/ScrollReferences';

export const scrollReferences = writable<ScrollReferences>({});