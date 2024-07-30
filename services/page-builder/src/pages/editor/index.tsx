import { DesktopFirstLayout } from "@/src/components/layout/DesktopFirstLayout"
import { DesktopFirstBody } from "@/src/components/layout/DesktopFirstLayout/Body"
import { DesktopFirstNav } from "@/src/components/layout/DesktopFirstLayout/Nav"
import { Button } from "@ds/react-components-button"
import Link from "next/link"

const EditorPage = () => {
  return (
    <DesktopFirstLayout>
      <DesktopFirstNav>
        <Link href="/editor/new">
          <Button size="md" color="green">
            Page 만들기
          </Button>
        </Link>
      </DesktopFirstNav>
      <DesktopFirstBody>
        <div>Editor Body</div>
      </DesktopFirstBody>
    </DesktopFirstLayout>
  )
}

export default EditorPage
