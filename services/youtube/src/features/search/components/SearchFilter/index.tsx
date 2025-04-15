"use client";

import { getSearchPageLink } from "@/src/shared/utils/link/page";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { SearchOrder } from "../../api/getSearchVideosList";
import * as s from "./style.css";

const SEARCH_ORDER_TYPO: Record<SearchOrder, string> = {
  relevance: "관련순",
  date: "최신순",
  viewCount: "조회수 높은 순",
};

export const SearchFilter = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [order, setOrder] = useState<SearchOrder>(
    (searchParams.get("order") ?? "relevance") as SearchOrder,
  );
  const filterItems = Object.entries(SEARCH_ORDER_TYPO);
  const handleClickChip = (order: SearchOrder) => {
    setOrder(order);
    router.push(`${getSearchPageLink({ order })}`);
  };
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        {filterItems.map(([key, value]) => (
          <div
            key={key}
            className={s.chip({ active: key === order })}
            onClick={() => {
              if (key !== order) {
                handleClickChip(key as SearchOrder);
              }
            }}
          >
            {value}
          </div>
        ))}
      </div>
    </div>
  );
};
