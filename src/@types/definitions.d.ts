const StaticImageImport = require("next/dist/shared/lib/image-external");

declare module "*.svg?url" {
  export default StaticImageImport;
}
interface ChildrenProps{
    children: React.ReactNode
}