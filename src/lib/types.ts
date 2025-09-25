export type Tagged<T, Tag extends string> = T & { readonly __tag: Tag };
