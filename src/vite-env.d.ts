/// <reference types="vite/client" />
/// <reference types="vite-plugin-pages/client-react" />

declare module '~icons/fisand-icons/*' {
  const icon: React.FC<React.SVGProps<SVGSVGElement>>
  export default icon
}
