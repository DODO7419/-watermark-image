type ImgType = "url" | "HTMLImageElement" | "base64";
/**
 * 是否是base64
 * @param str
 * @returns
 */
const isBase64 = (str: string) => {
  if (str === "" || str.trim() === "") {
    return false;
  }
  try {
    return btoa(atob(str)) == str;
  } catch (err) {
    return false;
  }
};
/**
 * 获取传递的文件类型
 * @param img
 * @returns
 */
export const getImgType = (img: any): "url" | "HTMLImageElement" | "base64" => {
  const proxy: Record<any, ImgType> = {
    "[object HTMLImageElement]": "HTMLImageElement",
  };
  // console.log(img)
  if (typeof img === "string") {
    return isBase64(img) ? "base64" : "url";
  } else {
    return proxy[Object.prototype.toString.call(img)];
  }
};
/**
 * 是否是canvas 元素
 * @param div 
 * @returns 
 */
export const isCanvas = (div: any): div is HTMLCanvasElement => {
  return Object.prototype.toString.call(div) === "[object HTMLCanvasElement]";
};
/**
 * 获取blob
 * @param url
 * @returns
 */
export const getBlobByUrl = async (url: string): Promise<Blob> => {
  const res = await fetch(url, {
    headers: {
      responseType: "blob",
    },
    method: "get",
  });
  return await res.blob();
};
/**
 * 获取图片大小
 * @param url
 * @returns
 */
export const getImgSize = async (url: string): Promise<HTMLImageElement> => {
  let img = new Image();
  img.src = url;
  return new Promise((resolve, reject) => {
    img.onload = () => {
      resolve(img);
    };
  });
};
