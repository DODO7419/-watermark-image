/**
 * 获取传递的文件类型
 * @param img
 * @returns
 */
export declare const getImgType: (img: any) => "url" | "HTMLImageElement" | "base64";
/**
 * 是否是canvas 元素
 * @param div
 * @returns
 */
export declare const isCanvas: (div: any) => div is HTMLCanvasElement;
/**
 * 获取blob
 * @param url
 * @returns
 */
export declare const getBlobByUrl: (url: string) => Promise<Blob>;
/**
 * 获取图片大小
 * @param url
 * @returns
 */
export declare const getImgSize: (url: string) => Promise<HTMLImageElement>;
