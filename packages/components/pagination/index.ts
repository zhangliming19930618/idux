import type { App } from 'vue'

import IxPagination from './src/Pagination'

IxPagination.install = (app: App): void => {
  app.component(IxPagination.name, IxPagination)
}

export { IxPagination }

export type { PaginationInstance, PaginationProps } from './src/types'
