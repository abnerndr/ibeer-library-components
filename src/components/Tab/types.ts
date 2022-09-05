export type TabItem = {
  title: string;
  index: number;
}

export interface TabProps {
  tabs: TabItem[];
  onSelect?: (tab: TabItem) => void;
};
