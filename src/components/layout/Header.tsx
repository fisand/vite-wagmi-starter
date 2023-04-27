import { ReactNode } from 'react'

export const Header = ({ action }: { action?: ReactNode }) => {
  return (
    <div className="h-16 border-b-1 border-white box-border">
      <div className="max-w-6xl m-auto h-full flex justify-between items-center sm:px-8 lt-sm:px-4">
        <div className="flex items-center font-bold cursor-pointer">
          <span className="text-xl">Unoi</span>
          <span className="flex-col-center ml-3 py-.25 px-1.5 text-xs text-#666 bg-white rounded-full font-light">
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
            className="flex-col-center text-primary transition-all hover:scale-95"
          >
            <span className="inline-flex w-8 h-8 i-carbon:logo-github"></span>
          </a>
        </div>
      </div>
    </div>
  )
}
