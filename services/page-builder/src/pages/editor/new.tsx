import { DesktopFirstLayout } from "@/src/components/layout/DesktopFirstLayout"
import { DesktopFirstBody } from "@/src/components/layout/DesktopFirstLayout/Body"
import { DesktopFirstNav } from "@/src/components/layout/DesktopFirstLayout/Nav"
import { Button } from "@ds/react-components-button"

const EditorNewPage = () => {
  return (
    <DesktopFirstLayout>
      <DesktopFirstNav gap={8}>
        <Button variant="outline" size="md" color="red">
          초기화
        </Button>
        <Button variant="outline" size="md" color="gray">
          미리보기
        </Button>
        <Button size="md" color="gray">
          배포하기
        </Button>
      </DesktopFirstNav>
      <DesktopFirstBody>
        <div>Editor Body/new</div>
      </DesktopFirstBody>
    </DesktopFirstLayout>
  )
}

export default EditorNewPage
