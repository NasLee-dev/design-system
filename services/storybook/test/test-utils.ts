import { cleanup, render } from "@testing-library/react"
import { afterEach } from "vitest"
import * as globalStorybookConfig from "../.storybook/preview"
import { setProjectAnnotations } from "@storybook/react"
import "@testing-library/jest-dom"

setProjectAnnotations(globalStorybookConfig)

afterEach(() => {
  cleanup()
});

function customRenderer(ui: React.ReactElement, options = {}) {
  return render(ui, {
    wrapper: ({ children }) => children as React.ReactElement,
    ...options,
  });
}

export * from "@testing-library/react"
export { default as userEvent } from "@testing-library/user-event"

export { customRenderer as render }