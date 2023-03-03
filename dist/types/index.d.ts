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
    margin: number | {
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
/**
 * 懒汉模式好吧好像不可以使用单例 避免批量下载二维码的时候出现异常
 * @returns
 */
declare const Watermark: MyWatermark & {
    /**
     * 实例化后禁止修改
     */
    readonly canvas: HTMLCanvasElement;
};
export default Watermark;
