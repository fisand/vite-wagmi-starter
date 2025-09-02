import CardBgVideo from '@/assets/videos/card_bg.mp4'
import LordTagIcon from '~icons/fisand-icons/lord_tag'
import PlayTagIcon from '~icons/fisand-icons/play_tag'

export default function AnimationPage() {
  return (
    <div className="w-screen h-screen bg-black p-20 flex gap-12 flex-wrap">
      <div className="relative h-182px w-114 flex items-start gap-4 bg-gradient-[90deg,rgba(255,223,32,0.08)_0%,rgba(13,13,13,0.00)_100%] bg-gradient-linear p-3 shadow-[0_0_0_1px_rgba(255,255,255,0.09)] transition-all duration-260 hover:bg-gradient-[90deg,rgba(255,223,32,0.48)_0%,rgba(13,13,13,0.30)_100%]">
        <div className="absolute left-0.25 top-0.25 z-7 flex items-center gap-1 bg-[#FFDF20] px-1 py-0.75 backdrop-blur-1.25">
          <span className="i-lucide:user aspect-[1/1] h-3.5 w-3.5" />
          <span className="text-3 text-[#000] font-600">3</span>
        </div>

        <div className="relative z-4 animate-[conic_2s_infinite_linear] bg-gradient-[from_var(--conic-deg),rgba(255,223,32,1),rgba(13,13,13,0),rgba(13,13,13,0)] bg-gradient-conic p-.5">
          <div className="relative z-5 h-39.5 w-140px flex-col-center shadow-[0_0_4.625rem_0_rgba(255,223,32,0.25)]">
            <div className="group h-full w-full flex-col-center gap-4 bg-black mix-blend-plus-lighter">
              {/* left content */}
              <PlayTagIcon className="pointer-events-none hidden group-hover:flex group-hover:animate-fade-in !animate-duration-240" />
            </div>
          </div>

          <div className="pointer-events-none absolute left-0 top-0 h-full w-full animate-[conic_2s_infinite_linear] border-solid bg-gradient-[from_var(--conic-deg),rgba(255,223,32,1),rgba(13,13,13,0)] bg-gradient-conic mix-blend-plus-lighter blur-3.5" />
          <LordTagIcon className="pointer-events-none absolute bottom-0 left-0 left-0 z-6 animate-[lord-bounce_1.8s_infinite_linear]" />
        </div>

        <div className="relative z-4">
          {/* right content */}
        </div>

        <div className="pointer-events-none absolute absolute left-0 left-0 top-0 top-0 h-full w-full w-full overflow-hidden op-20 mix-blend-plus-lighter blur-0">
          <video src={CardBgVideo} autoPlay loop muted className="" />
        </div>
      </div>
    </div>
  )
}