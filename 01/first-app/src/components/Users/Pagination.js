import x from "./Users.module.css";
export default function Pagination({
  totalUsersCount,
  pageSize,
  currentPage,
  onPageChanged,
}) {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    if (pages.length < 10) {
      pages.push(i);
    }
  }

  return (
    <div>
      {pages.map((p) => {
        return (
          <span
            className={currentPage === p && x.selectedPage}
            onClick={(e) => {
              onPageChanged(p);
            }}
          >
            {p}
          </span>
        );
      })}
    </div>
  );
}
