import Paper from "@/components/atoms/Paper";
import JobsListPage from "@/components/pages/jobs";
import SearchInput from "@/components/atoms/SearchInput";
import SwipeableTemporaryDrawer from "@/components/organism/Drawer";

const Content = () => {
  return (
    <div>
      <SwipeableTemporaryDrawer />
      <Paper />
      <SearchInput />
      <JobsListPage />
    </div>
  );
};

export default Content;
