import React from "react"
import { describe, expect, it } from 'vitest'
import { render, screen } from "../../../test/test-utils"
import { composeStories } from "@storybook/react"
import * as stories from "./Accordion.stories"

const { AccordionTestStory } = composeStories(stories);

describe("컴포넌트 기능 테스트", () => {
  it("Acoordion 버튼 클릭 시 AccordionPanel 펼쳐지는지 확인", async () => {
    // GIVEN
    const args = {
      items: [
        {
          name: "목록1",
          content: "내용입니다.",
        }
      ],
      defaultActiveItems: [],
    };
    // WHEN
    render(<AccordionTestStory {...args} />);
    // THEN
    expect(screen.getByTestId("panle-0")).toHaveAttribute("data-action-item", "false");
    await screen.getByTestId("button-0").click();
    expect(screen.getByTestId("panle-0")).toHaveAttribute("data-action-item", "true");
  });
  it("두 번째 버튼 클릭 시 두 번째 AccordionPanel 펼쳐지는지 확인", async () => {
    // GIVEN
    const args = {
      items: [
        {
          name: "목록1",
          content: "내용입니다.",
        },
        {
          name: "목록2",
          content: "내용입니다.",
        }
      ],
      defaultActiveItems: [],
    };
    // WHEN
    render(<AccordionTestStory {...args} />);
    // THEN
    expect(screen.getByTestId("panle-0")).toHaveAttribute("data-action-item", "false");
    expect(screen.getByTestId("panle-1")).toHaveAttribute("data-action-item", "false");
    await screen.getByTestId("button-1").click();
    expect(screen.getByTestId("panle-0")).toHaveAttribute("data-action-item", "false");
    expect(screen.getByTestId("panle-1")).toHaveAttribute("data-action-item", "true");
  });
});



