import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function SamplePage() {
  const components = [
    'badge',
    'button',
    'checkbox',
    'input',
    'label',
    'pagination',
    'skeleton',
    'textarea',
    'toast',
  ]

  return (
    <>
      <h1 className="text-30 mb-4 text-center font-bold">컴포넌트 예시 페이지 링크</h1>

      <hr className="hr" />
      <span className="flex-center flex-col gap-8">
        <p>사용 예시 페이지 있는 컴포넌트: button, font</p>
        <sub>(23-12-27 01:10 기준)</sub>
      </span>
      <hr className="hr mt-30" />

      <div className="flex-center mx-auto w-full flex-col space-y-4">
        {components.map((name, idx) => (
          <div key={idx} className="flex gap-8 font-medium">
            <span className="flex-center">{name} :</span>
            <Button
              key={idx}
              href={`https://ui.shadcn.com/docs/components/${name}`}
              className="text-14 border p-4 hover:bg-indigo-100"
            >
              공식문서
            </Button>
            <Button
              key={idx}
              href={`sample/${name}`}
              className="text-14 border p-4 hover:bg-orange-100"
            >
              사용예시
            </Button>
          </div>
        ))}
        <Button href={`sample/etc`} className="border p-4 hover:bg-orange-100">
          기타 (폰트 등) 공통 사용 예시
        </Button>
      </div>
    </>
  )
}
