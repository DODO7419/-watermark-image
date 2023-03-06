# 图片生成水印

add a watermark in your image and set watermark text style also you can save image with watermark native



# Installation

```
  npm install  watermark-image-ts --save
```



## usage

- We Can use it in html

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>example</title>
    <script src="../dist/main.js"></script>
</head>

<body>
    <div>
        添加水印
    </div>
    <div onclick="down()">
        下载
    </div>
    <canvas id="canvas"></canvas>
</body>
<script>
    const obj = new Watermark(document.querySelector('#canvas'))
    function down(){
        console.log(obj)
        obj.downFile();   
    }
    obj.draw({
        img: './demo.png',
        text: "123",
        margin: 40,
        style: {
            rotate: -30,
            fillStyle:"rgba(0,0,0,.05)"
        }
    })
</script>

</html>
```

- We Can use it in React

  ```
  import { useEffect, useRef } from "react";
  import "./App.css";
  import demo from "./assets/demo.jpeg";
  import Watermark from "watermark-image-ts";
  function App() {
    const ref = useRef<any>({
      watermark: "",
    });
    const canvasRef = useRef<HTMLCanvasElement>(null);
    useEffect(() => {
      console.log(Watermark);
      ref.current.watermark = new Watermark(canvasRef.current!);
      ref.current.watermark.draw({
        img: demo,
        text: "demo--demo",
        margin: 40,
        style: {
          rotate: -30,
          fillStyle: "rgba(0,0,0,.05)",
        },
      });
    }, []);
    const down = () => {
      console.log("下载");
      ref.current.watermark.downFile();
    };
    return (
      <div className="App">
        <div
          onClick={() => {
            down();
          }}
        >
          下载
        </div>
        <canvas ref={canvasRef}></canvas>
        <img src={demo} />
      </div>
    );
  }
  
  export default App;
  
  ```

  

# Demo online

https://codesandbox.io/p/sandbox/elastic-galileo-hvlqcd?file=%2Fpackage.json&selection=%5B%7B%22endColumn%22%3A30%2C%22endLineNumber%22%3A9%2C%22startColumn%22%3A30%2C%22startLineNumber%22%3A9%7D%5D
