import { getBlobByUrl, getImgSize, getImgType, isCanvas } from "./shared";
import fileSaver from "file-saver";
interface MyWatermarkOptions {
  /**
   * 图片
   */
  img: string | HTMLImageElement;
  /**
   * 水印文案,目前仅支持文字,图片水印功能还未扩展
   */
  text: string | HTMLImageElement;
  /**
   * 间隔
   */
  margin:
    | number
    | {
        x: number;
        y: number;
      };
  style?: {
    font: string;
    fillStyle: string;
    textAlign: CanvasTextAlign;
    rotate: number;
  };
}
interface MyWatermark {
  canvas: HTMLCanvasElement;
  new (canvas: HTMLCanvasElement): MyWatermark;
  draw: (options: MyWatermarkOptions) => Promise<string>;
  getBase64: () => string;
  getBlob: () => Promise<Blob>;
  downFile: (fileName?: string) => Promise<void>;
}
type Draw = (_this: MyWatermark, options: MyWatermarkOptions) => void;
const watermark: Draw = (_this, options) => {
  let ctx = _this.canvas.getContext("2d")!;
  // 设置填充字号和字体，样式
  ctx.font = options.style?.font || "24px 宋体";
  ctx.fillStyle = options.style?.fillStyle || "rgba(0,0,0,.05)";
  // 设置右对齐
  ctx.textAlign = options.style?.textAlign || "right";
  const textWidth = ctx.measureText(options.text as string).width;
  const height = parseInt(ctx.font) * 1.2;
  const length = parseInt(String(_this.canvas.width / textWidth));
  const heightLength = parseInt(String(_this.canvas.height / height));
  const marginX =
    typeof options.margin == "number"
      ? options.margin
      : options.margin?.x || 10;
  const marginY =
    typeof options.margin == "number"
      ? options.margin
      : options.margin?.y || 10;
  // console.log(marginX,marginY)
  for (let i = 0; i < length + 10; i++) {
    // console.log(textWidth * i + 50, "ctx.measureText(text).width * i + 50");
    for (let j = 0; j < heightLength + 10; j++) {
      ctx.save();
      ctx.translate((textWidth + marginX) * i, j * (height + marginY));
      // console.log((textWidth + marginX) * i, j * (height + marginY))
      ctx.rotate((Math.PI / 180) * (options.style?.rotate || 45));
      ctx.fillText(options.text as string, textWidth, height);
      ctx.restore();
    }
  }
};
const drawByImgUrl: Draw = async (_this, options) => {
  const fileRes = await getBlobByUrl(options.img as string);
  const img = await getImgSize(window.URL.createObjectURL(fileRes));
  _this.canvas.width = img.width;
  _this.canvas.height = img.height;

  const context = _this.canvas.getContext("2d");
  context?.drawImage(img, 0, 0);
  watermark(_this, options);
};
const drawByImgHtml: Draw = (_this, options) => {
  const context = _this.canvas.getContext("2d");
  _this.canvas.width = (options.img as HTMLImageElement).width;
  _this.canvas.height = (options.img as HTMLImageElement).height;
  context?.drawImage(options.img as HTMLImageElement, 0, 0);
  watermark(_this, options);
};
const drawByBase64: Draw = async (_this, options) => {
  const img = await getImgSize(options.img as string);
  _this.canvas.width = img.width;
  _this.canvas.height = img.height;
  const context = _this.canvas.getContext("2d");
  context?.drawImage(img, 0, 0);
  watermark(_this, options);
};
/**
 * 下载中
 * @param _this
 * @param fileName
 */
const downFile = async (
  _this: MyWatermark,
  fileName = `${new Date().getTime()}.png`
) => {
  const blob = await _this.getBlob();
  fileSaver.saveAs(blob!, `${fileName}.png`);
};
/**
 * 懒汉模式好吧好像不可以使用单例 避免批量下载二维码的时候出现异常
 * @returns
 */
const Watermark = (function () {
  // let instance: MyWatermark;
  return function (this: MyWatermark, canvas: HTMLCanvasElement) {
    let instance;
    if (isCanvas(canvas)) {
      // if (!instance) {
      instance = this;
      this.canvas = canvas;
      /**
       * 获取base64
       */
      this.getBase64 = () => {
        return this.canvas.toDataURL();
      };
      /**
       * 下载图片
       */
      this.downFile = (fileName) => {
        return downFile(this, fileName);
      };
      this.getBlob = () => {
        return new Promise((resolve, reject) => {
          this.canvas.toBlob((blob) => {
            if (blob) {
              resolve(blob);
            } else {
              reject("获取异常，请检查代码");
            }
          });
        });
      };
      this.draw = async (options) => {
        return new Promise((resolve, reject) => {
          const type = getImgType(options.img);
          // console.log(type);
          const proxy: Record<typeof type, Draw> = {
            url: drawByImgUrl.bind(this),
            HTMLImageElement: drawByImgHtml.bind(this),
            base64: drawByBase64.bind(this),
          };
          proxy[type](this, options);
        });
      };
      // }
      // return this;
      return instance;
    } else {
      throw "初始化的时候请传递canvas";
    }
  };
})() as any as MyWatermark & {
  /**
   * 实例化后禁止修改
   */
  readonly canvas: HTMLCanvasElement;
};

export default Watermark;
