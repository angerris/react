import { useEffect, useState } from "react";
import x from "./Users.module.css";
export default function Pagination({
  totalUsersCount,
  pageSize,
  currentPage,
  onPageChanged,
  portionSize = 8,
}) {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(
    Math.ceil(currentPage / portionSize)
  );
  let leftSlicePageNum = (portionNumber - 1) * portionSize + 1;
  let rightSlicePageNum = portionNumber * portionSize;
  useEffect(
    () => setPortionNumber(Math.ceil(currentPage / portionSize)),
    [currentPage, portionSize]
  );
  return (
    <div>
      {portionNumber > 1 ? (
        <button
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}
        >
          prev
        </button>
      ) : null}
      {pages
        .filter((x) => x >= leftSlicePageNum && x <= rightSlicePageNum)
        .map((p) => {
          return (
            <span
              className={currentPage === p ? x.number : x.prosto}
              onClick={(e) => {
                onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      {portionCount > portionNumber ? (
        <button
          onClick={() => {
            setPortionNumber(portionNumber + 1);
          }}
        >
          next
        </button>
      ) : null}
    </div>
  );
}
