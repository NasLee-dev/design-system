import { describe, it, expect, } from "vitest";
import { render } from "@testing-library/react";
import { beforeEach } from "node:test";
import { mockRouter } from "@/src/shared/utils/test/mockNextNavigation";
import { Layout } from "@/src/app/(youtube)/layout";
import { Page } from "./page";
import { screen } from "@testing-library/react";
import { fireEvent } from "@testing-library/dom";

describe("검색 페이지 통합 테스트", () => {
  beforeEach(() => {
    const defaultQuery = "?q=test&order=relevance";
    mockRouter.memoryRouter.setCurrentUrl(`/search${defaultQuery}`);
    window.location = {
      ...window.location,
      search: defaultQuery,
    };
  });
  it("검색창에 '뉴욕'을 입력하고 Submit 시 URL에 q 쿼리가 업데이트 되는가", async () => {
    render(
      <Layout>
        <Page />
      </Layout>
    );
    expect(mockRouter.memoryRouter).toMatchObject({
      query: {
        q: "test",
        order: "relevance",
      },
    });

    const searchKeyword = "뉴욕";
    const input = screen.getByPlaceholderText("검색");
    fireEvent.change(input, { target: { value: searchKeyword } });

    const formButton = screen.getByText("검색");
    fireEvent.click(formButton);

    expect(mockRouter.memoryRouter).toMatchObject({
      query: {
        q: "뉴욕",
        order: "relevance",
      }
    })
  });
});