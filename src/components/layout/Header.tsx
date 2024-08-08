import type { ReactNode } from 'react'

export function Header({ action }: { action?: ReactNode }) {
  return (
    <div className="sticky top-0 z-10 box-border h-16 border-b-1 border-border border-solid bg-white">
      <div className="m-auto h-full max-w-6xl flex items-center justify-between lt-sm:px-4 sm:px-8">
        <div className="flex cursor-pointer items-center font-bold">
          <span className="text-xl">Unoi</span>
          <span className="ml-3 flex-col-center rounded-full bg-white px-1.5 py-.25 text-xs text-#666 font-light">
            <span
              style={
                {
                  backgroundImage: 'linear-gradient(270deg, #B4EAA1 0%, #F8D07A 100%)',
                  display: 'inline-block',
                  lineHeight: 1,
                  WebkitTextFillColor: 'transparent',
                } as any
              }
              className="bg-clip-text"
            >
              fisand
            </span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          {action}
          <a
            href="https://github.com/fisand/vite-antd-seed"
            target="_blank"
            rel="noreferrer noopener"
            className="flex-col-center text-primary transition-all hover:scale-95"
          >
            <span className="i-carbon:logo-github h-8 w-8 inline-flex" />
          </a>
        </div>
      </div>
    </div>
  )
}
