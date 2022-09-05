export interface PaginationProps {
  onPrev: () => void;
  onNext: () => void;
  onPage: (_page: number) => void;
  total: number;
  perPage: number;
  page: number;
};
