/// <reference types="draft-js" />

declare module 'draft-js-export-markdown' {
    import { ContentState, EntityInstance } from 'draft-js'

    export interface Options {
      gfm?: boolean;
      customEntity?(entity: EntityInstance, content: string ): string;
    }

    export function stateToMarkdown(content: ContentState, options?: Options): string;
}
