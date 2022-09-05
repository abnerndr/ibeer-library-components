import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import React, { useEffect, useMemo, useState } from 'react'
import { PaginationProps } from './types';

const Pagination = ({
  onPrev,
  onNext,
  onPage,
  total,
  perPage,
  page
}: PaginationProps) => {
  const [current, setCurrent] = useState<number>(page)

  const pages = useMemo(() => Math.ceil(total / perPage), [total, perPage])

  useEffect(() => {
    setCurrent(page)
  }, [page])

  return (
    <div className="bg-white px-4 py-3 flex items-center justify-between sm:px-6">
      <div className="sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <nav className="relative z-0 inline-flex rounded-md space-x-1.5" aria-label="Pagination">
            <button
              type="button"
              onClick={onPrev}
              className="relative inline-flex items-center px-2 py-2 rounded-l-md bg-white text-sm font-medium text-gray hover:bg-crema-500 hover:text-neon-900 hover:font-bold rounded"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            {Array.from({length: pages}, (_, i) => i + 1).map((p, idx) => (
              <button
                key={`page_${idx}`}
                onClick={() => onPage(p)}
                className={
                  p === current ?
                    'z-10 bg-crema-500 border-neon text-neon-900 relative inline-flex items-center px-4 py-2 text-sm font-bold rounded'
                    : 'bg-white text-gray hover:bg-crema-500 hover:text-neon-900 hover:font-bold rounded relative inline-flex items-center px-4 py-2 text-sm font-medium'}
              >
                {p}
              </button>
            ))}
            <button
              type="button"
              onClick={onNext}
              className="relative inline-flex items-center px-2 py-2 rounded-r-md bg-white text-sm font-medium text-gray hover:bg-crema-500 hover:text-neon-900 hover:font-bold rounded"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  )
}

export type { PaginationProps };

export default Pagination;
