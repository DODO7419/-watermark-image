!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("Watermark",[],e):"object"==typeof exports?exports.Watermark=e():t.Watermark=e()}(self,(function(){return(()=>{var t={162:function(t,e,n){var o;void 0===(o=function(){"use strict";function e(t,e,n){var o=new XMLHttpRequest;o.open("GET",t),o.responseType="blob",o.onload=function(){s(o.response,e,n)},o.onerror=function(){console.error("could not download file")},o.send()}function o(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&299>=e.status}function i(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(n){var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(e)}}var a="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n.g&&n.g.global===n.g?n.g:void 0,r=a.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),s=a.saveAs||("object"!=typeof window||window!==a?function(){}:"download"in HTMLAnchorElement.prototype&&!r?function(t,n,r){var s=a.URL||a.webkitURL,c=document.createElement("a");n=n||t.name||"download",c.download=n,c.rel="noopener","string"==typeof t?(c.href=t,c.origin===location.origin?i(c):o(c.href)?e(t,n,r):i(c,c.target="_blank")):(c.href=s.createObjectURL(t),setTimeout((function(){s.revokeObjectURL(c.href)}),4e4),setTimeout((function(){i(c)}),0))}:"msSaveOrOpenBlob"in navigator?function(t,n,a){if(n=n||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(function(t,e){return void 0===e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}(t,a),n);else if(o(t))e(t,n,a);else{var r=document.createElement("a");r.href=t,r.target="_blank",setTimeout((function(){i(r)}))}}:function(t,n,o,i){if((i=i||open("","_blank"))&&(i.document.title=i.document.body.innerText="downloading..."),"string"==typeof t)return e(t,n,o);var s="application/octet-stream"===t.type,c=/constructor/i.test(a.HTMLElement)||a.safari,l=/CriOS\/[\d]+/.test(navigator.userAgent);if((l||s&&c||r)&&"undefined"!=typeof FileReader){var u=new FileReader;u.onloadend=function(){var t=u.result;t=l?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),i?i.location.href=t:location=t,i=null},u.readAsDataURL(t)}else{var d=a.URL||a.webkitURL,f=d.createObjectURL(t);i?i.location=f:location.href=f,i=null,setTimeout((function(){d.revokeObjectURL(f)}),4e4)}});a.saveAs=s.saveAs=s,t.exports=s}.apply(e,[]))||(t.exports=o)},500:function(t,e,n){"use strict";var o=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))((function(i,a){function r(t){try{c(o.next(t))}catch(t){a(t)}}function s(t){try{c(o.throw(t))}catch(t){a(t)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(r,s)}c((o=o.apply(t,e||[])).next())}))},i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const a=n(511),r=i(n(162)),s=(t,e)=>{var n,o,i,a,r,s;let c=t.canvas.getContext("2d");c.font=(null===(n=e.style)||void 0===n?void 0:n.font)||"24px 宋体",c.fillStyle=(null===(o=e.style)||void 0===o?void 0:o.fillStyle)||"rgba(0,0,0,.05)",c.textAlign=(null===(i=e.style)||void 0===i?void 0:i.textAlign)||"right";const l=c.measureText(e.text).width,u=1.2*parseInt(c.font),d=parseInt(String(t.canvas.width/l)),f=parseInt(String(t.canvas.height/u)),v="number"==typeof e.margin?e.margin:(null===(a=e.margin)||void 0===a?void 0:a.x)||10,g="number"==typeof e.margin?e.margin:(null===(r=e.margin)||void 0===r?void 0:r.y)||10;for(let t=0;t<d+10;t++)for(let n=0;n<f+10;n++)c.save(),c.translate((l+v)*t,n*(u+g)),c.rotate(Math.PI/180*((null===(s=e.style)||void 0===s?void 0:s.rotate)||45)),c.fillText(e.text,l,u),c.restore()},c=(t,e)=>o(void 0,void 0,void 0,(function*(){const n=yield(0,a.getBlobByUrl)(e.img),o=yield(0,a.getImgSize)(window.URL.createObjectURL(n));t.canvas.width=o.width,t.canvas.height=o.height;const i=t.canvas.getContext("2d");null==i||i.drawImage(o,0,0),s(t,e)})),l=(t,e)=>{const n=t.canvas.getContext("2d");t.canvas.width=e.img.width,t.canvas.height=e.img.height,null==n||n.drawImage(e.img,0,0),s(t,e)},u=(t,e)=>o(void 0,void 0,void 0,(function*(){const n=yield(0,a.getImgSize)(e.img);t.canvas.width=n.width,t.canvas.height=n.height;const o=t.canvas.getContext("2d");null==o||o.drawImage(n,0,0),s(t,e)}));e.default=function(t){let e;if((0,a.isCanvas)(t))return e=this,this.canvas=t,this.getBase64=()=>this.canvas.toDataURL(),this.downFile=t=>((t,e=`${(new Date).getTime()}.png`)=>o(void 0,void 0,void 0,(function*(){const n=yield t.getBlob();r.default.saveAs(n,`${e}.png`)})))(this,t),this.getBlob=()=>new Promise(((t,e)=>{this.canvas.toBlob((n=>{n?t(n):e("获取异常，请检查代码")}))})),this.draw=t=>o(this,void 0,void 0,(function*(){return new Promise(((e,n)=>{const o=(0,a.getImgType)(t.img);console.log(o),{url:c.bind(this),HTMLImageElement:l.bind(this),base64:u.bind(this)}[o](this,t)}))})),this;throw"初始化的时候请传递canvas"}},511:function(t,e){"use strict";var n=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))((function(i,a){function r(t){try{c(o.next(t))}catch(t){a(t)}}function s(t){try{c(o.throw(t))}catch(t){a(t)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(r,s)}c((o=o.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.getImgSize=e.getBlobByUrl=e.isCanvas=e.getImgType=void 0,e.getImgType=t=>"string"==typeof t?(t=>{if(""===t||""===t.trim())return!1;try{return btoa(atob(t))==t}catch(t){return!1}})(t)?"base64":"url":{"[object HTMLImageElement]":"HTMLImageElement"}[Object.prototype.toString.call(t)],e.isCanvas=t=>"[object HTMLCanvasElement]"===Object.prototype.toString.call(t),e.getBlobByUrl=t=>n(void 0,void 0,void 0,(function*(){const e=yield fetch(t,{headers:{responseType:"blob"},method:"get"});return yield e.blob()})),e.getImgSize=t=>n(void 0,void 0,void 0,(function*(){let e=new Image;return e.src=t,new Promise(((t,n)=>{e.onload=()=>{t(e)}}))}))}},e={};function n(o){var i=e[o];if(void 0!==i)return i.exports;var a=e[o]={exports:{}};return t[o].call(a.exports,a,a.exports,n),a.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}();var o=n(500);return o.default})()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ekUsSUFBSXhCLEVBQU0sSUFBSTBDLE1BRWQsT0FEQTFDLEVBQUkyQyxJQUFNbkIsRUFDSCxJQUFJUCxTQUFRLENBQUNDLEVBQVNDLEtBQzNCbkIsRUFBSTNGLE9BQVMsS0FDWDZHLEVBQVFsQixZQy9EVjRDLEVBQTJCLEdBRy9CLFNBQVNDLEVBQW9CQyxHQUU1QixJQUFJQyxFQUFlSCxFQUF5QkUsR0FDNUMsUUFBcUJFLElBQWpCRCxFQUNILE9BQU9BLEVBQWF0SixRQUdyQixJQUFJQyxFQUFTa0osRUFBeUJFLEdBQVksQ0FHakRySixRQUFTLElBT1YsT0FIQXdKLEVBQW9CSCxHQUFVVixLQUFLMUksRUFBT0QsUUFBU0MsRUFBUUEsRUFBT0QsUUFBU29KLEdBR3BFbkosRUFBT0QsUUNyQmZvSixFQUFvQnZJLEVBQUksV0FDdkIsR0FBMEIsaUJBQWY0SSxXQUF5QixPQUFPQSxXQUMzQyxJQUNDLE9BQU8xQyxNQUFRLElBQUkyQyxTQUFTLGNBQWIsR0FDZCxNQUFPdEksR0FDUixHQUFzQixpQkFBWE0sT0FBcUIsT0FBT0EsUUFMakIsR0NHeEIsSUFBSWlJLEVBQXNCUCxFQUFvQixLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vV2F0ZXJtYXJrL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9XYXRlcm1hcmsvLi9ub2RlX21vZHVsZXMvZmlsZS1zYXZlci9kaXN0L0ZpbGVTYXZlci5taW4uanMiLCJ3ZWJwYWNrOi8vV2F0ZXJtYXJrLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL1dhdGVybWFyay8uL3NyYy9zaGFyZWQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vV2F0ZXJtYXJrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1dhdGVybWFyay93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL1dhdGVybWFyay93ZWJwYWNrL3N0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJXYXRlcm1hcmtcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiV2F0ZXJtYXJrXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIldhdGVybWFya1wiXSA9IGZhY3RvcnkoKTtcbn0pKHNlbGYsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIihmdW5jdGlvbihhLGIpe2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZClkZWZpbmUoW10sYik7ZWxzZSBpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgZXhwb3J0cyliKCk7ZWxzZXtiKCksYS5GaWxlU2F2ZXI9e2V4cG9ydHM6e319LmV4cG9ydHN9fSkodGhpcyxmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGIoYSxiKXtyZXR1cm5cInVuZGVmaW5lZFwiPT10eXBlb2YgYj9iPXthdXRvQm9tOiExfTpcIm9iamVjdFwiIT10eXBlb2YgYiYmKGNvbnNvbGUud2FybihcIkRlcHJlY2F0ZWQ6IEV4cGVjdGVkIHRoaXJkIGFyZ3VtZW50IHRvIGJlIGEgb2JqZWN0XCIpLGI9e2F1dG9Cb206IWJ9KSxiLmF1dG9Cb20mJi9eXFxzKig/OnRleHRcXC9cXFMqfGFwcGxpY2F0aW9uXFwveG1sfFxcUypcXC9cXFMqXFwreG1sKVxccyo7LipjaGFyc2V0XFxzKj1cXHMqdXRmLTgvaS50ZXN0KGEudHlwZSk/bmV3IEJsb2IoW1wiXFx1RkVGRlwiLGFdLHt0eXBlOmEudHlwZX0pOmF9ZnVuY3Rpb24gYyhhLGIsYyl7dmFyIGQ9bmV3IFhNTEh0dHBSZXF1ZXN0O2Qub3BlbihcIkdFVFwiLGEpLGQucmVzcG9uc2VUeXBlPVwiYmxvYlwiLGQub25sb2FkPWZ1bmN0aW9uKCl7ZyhkLnJlc3BvbnNlLGIsYyl9LGQub25lcnJvcj1mdW5jdGlvbigpe2NvbnNvbGUuZXJyb3IoXCJjb3VsZCBub3QgZG93bmxvYWQgZmlsZVwiKX0sZC5zZW5kKCl9ZnVuY3Rpb24gZChhKXt2YXIgYj1uZXcgWE1MSHR0cFJlcXVlc3Q7Yi5vcGVuKFwiSEVBRFwiLGEsITEpO3RyeXtiLnNlbmQoKX1jYXRjaChhKXt9cmV0dXJuIDIwMDw9Yi5zdGF0dXMmJjI5OT49Yi5zdGF0dXN9ZnVuY3Rpb24gZShhKXt0cnl7YS5kaXNwYXRjaEV2ZW50KG5ldyBNb3VzZUV2ZW50KFwiY2xpY2tcIikpfWNhdGNoKGMpe3ZhciBiPWRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiTW91c2VFdmVudHNcIik7Yi5pbml0TW91c2VFdmVudChcImNsaWNrXCIsITAsITAsd2luZG93LDAsMCwwLDgwLDIwLCExLCExLCExLCExLDAsbnVsbCksYS5kaXNwYXRjaEV2ZW50KGIpfX12YXIgZj1cIm9iamVjdFwiPT10eXBlb2Ygd2luZG93JiZ3aW5kb3cud2luZG93PT09d2luZG93P3dpbmRvdzpcIm9iamVjdFwiPT10eXBlb2Ygc2VsZiYmc2VsZi5zZWxmPT09c2VsZj9zZWxmOlwib2JqZWN0XCI9PXR5cGVvZiBnbG9iYWwmJmdsb2JhbC5nbG9iYWw9PT1nbG9iYWw/Z2xvYmFsOnZvaWQgMCxhPWYubmF2aWdhdG9yJiYvTWFjaW50b3NoLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpJiYvQXBwbGVXZWJLaXQvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkmJiEvU2FmYXJpLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpLGc9Zi5zYXZlQXN8fChcIm9iamVjdFwiIT10eXBlb2Ygd2luZG93fHx3aW5kb3chPT1mP2Z1bmN0aW9uKCl7fTpcImRvd25sb2FkXCJpbiBIVE1MQW5jaG9yRWxlbWVudC5wcm90b3R5cGUmJiFhP2Z1bmN0aW9uKGIsZyxoKXt2YXIgaT1mLlVSTHx8Zi53ZWJraXRVUkwsaj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtnPWd8fGIubmFtZXx8XCJkb3dubG9hZFwiLGouZG93bmxvYWQ9ZyxqLnJlbD1cIm5vb3BlbmVyXCIsXCJzdHJpbmdcIj09dHlwZW9mIGI/KGouaHJlZj1iLGoub3JpZ2luPT09bG9jYXRpb24ub3JpZ2luP2Uoaik6ZChqLmhyZWYpP2MoYixnLGgpOmUoaixqLnRhcmdldD1cIl9ibGFua1wiKSk6KGouaHJlZj1pLmNyZWF0ZU9iamVjdFVSTChiKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7aS5yZXZva2VPYmplY3RVUkwoai5ocmVmKX0sNEU0KSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZShqKX0sMCkpfTpcIm1zU2F2ZU9yT3BlbkJsb2JcImluIG5hdmlnYXRvcj9mdW5jdGlvbihmLGcsaCl7aWYoZz1nfHxmLm5hbWV8fFwiZG93bmxvYWRcIixcInN0cmluZ1wiIT10eXBlb2YgZiluYXZpZ2F0b3IubXNTYXZlT3JPcGVuQmxvYihiKGYsaCksZyk7ZWxzZSBpZihkKGYpKWMoZixnLGgpO2Vsc2V7dmFyIGk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7aS5ocmVmPWYsaS50YXJnZXQ9XCJfYmxhbmtcIixzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZShpKX0pfX06ZnVuY3Rpb24oYixkLGUsZyl7aWYoZz1nfHxvcGVuKFwiXCIsXCJfYmxhbmtcIiksZyYmKGcuZG9jdW1lbnQudGl0bGU9Zy5kb2N1bWVudC5ib2R5LmlubmVyVGV4dD1cImRvd25sb2FkaW5nLi4uXCIpLFwic3RyaW5nXCI9PXR5cGVvZiBiKXJldHVybiBjKGIsZCxlKTt2YXIgaD1cImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwiPT09Yi50eXBlLGk9L2NvbnN0cnVjdG9yL2kudGVzdChmLkhUTUxFbGVtZW50KXx8Zi5zYWZhcmksaj0vQ3JpT1NcXC9bXFxkXSsvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7aWYoKGp8fGgmJml8fGEpJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgRmlsZVJlYWRlcil7dmFyIGs9bmV3IEZpbGVSZWFkZXI7ay5vbmxvYWRlbmQ9ZnVuY3Rpb24oKXt2YXIgYT1rLnJlc3VsdDthPWo/YTphLnJlcGxhY2UoL15kYXRhOlteO10qOy8sXCJkYXRhOmF0dGFjaG1lbnQvZmlsZTtcIiksZz9nLmxvY2F0aW9uLmhyZWY9YTpsb2NhdGlvbj1hLGc9bnVsbH0say5yZWFkQXNEYXRhVVJMKGIpfWVsc2V7dmFyIGw9Zi5VUkx8fGYud2Via2l0VVJMLG09bC5jcmVhdGVPYmplY3RVUkwoYik7Zz9nLmxvY2F0aW9uPW06bG9jYXRpb24uaHJlZj1tLGc9bnVsbCxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bC5yZXZva2VPYmplY3RVUkwobSl9LDRFNCl9fSk7Zi5zYXZlQXM9Zy5zYXZlQXM9ZyxcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlJiYobW9kdWxlLmV4cG9ydHM9Zyl9KTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9RmlsZVNhdmVyLm1pbi5qcy5tYXAiLCJpbXBvcnQgeyBnZXRCbG9iQnlVcmwsIGdldEltZ1NpemUsIGdldEltZ1R5cGUsIGlzQ2FudmFzIH0gZnJvbSBcIi4vc2hhcmVkXCI7XG5pbXBvcnQgZmlsZVNhdmVyIGZyb20gXCJmaWxlLXNhdmVyXCI7XG5pbnRlcmZhY2UgTXlXYXRlcm1hcmtPcHRpb25zIHtcbiAgLyoqXG4gICAqIOWbvueJh1xuICAgKi9cbiAgaW1nOiBzdHJpbmcgfCBIVE1MSW1hZ2VFbGVtZW50O1xuICAvKipcbiAgICog5rC05Y2w5paH5qGILOebruWJjeS7heaUr+aMgeaWh+Wtlyzlm77niYfmsLTljbDlip/og73ov5jmnKrmianlsZVcbiAgICovXG4gIHRleHQ6IHN0cmluZyB8IEhUTUxJbWFnZUVsZW1lbnQ7XG4gIC8qKlxuICAgKiDpl7TpmpRcbiAgICovXG4gIG1hcmdpbjpcbiAgICB8IG51bWJlclxuICAgIHwge1xuICAgICAgICB4OiBudW1iZXI7XG4gICAgICAgIHk6IG51bWJlcjtcbiAgICAgIH07XG4gIHN0eWxlPzoge1xuICAgIGZvbnQ6IHN0cmluZztcbiAgICBmaWxsU3R5bGU6IHN0cmluZztcbiAgICB0ZXh0QWxpZ246IENhbnZhc1RleHRBbGlnbjtcbiAgICByb3RhdGU6IG51bWJlcjtcbiAgfTtcbn1cbmludGVyZmFjZSBNeVdhdGVybWFyayB7XG4gIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gIG5ldyAoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCk6IE15V2F0ZXJtYXJrO1xuICBkcmF3OiAob3B0aW9uczogTXlXYXRlcm1hcmtPcHRpb25zKSA9PiBQcm9taXNlPHN0cmluZz47XG4gIGdldEJhc2U2NDogKCkgPT4gc3RyaW5nO1xuICBnZXRCbG9iOiAoKSA9PiBQcm9taXNlPEJsb2I+O1xuICBkb3duRmlsZTogKGZpbGVOYW1lPzogc3RyaW5nKSA9PiBQcm9taXNlPHZvaWQ+O1xufVxudHlwZSBEcmF3ID0gKF90aGlzOiBNeVdhdGVybWFyaywgb3B0aW9uczogTXlXYXRlcm1hcmtPcHRpb25zKSA9PiB2b2lkO1xuY29uc3Qgd2F0ZXJtYXJrOiBEcmF3ID0gKF90aGlzLCBvcHRpb25zKSA9PiB7XG4gIGxldCBjdHggPSBfdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpITtcbiAgLy8g6K6+572u5aGr5YWF5a2X5Y+35ZKM5a2X5L2T77yM5qC35byPXG4gIGN0eC5mb250ID0gb3B0aW9ucy5zdHlsZT8uZm9udCB8fCBcIjI0cHgg5a6L5L2TXCI7XG4gIGN0eC5maWxsU3R5bGUgPSBvcHRpb25zLnN0eWxlPy5maWxsU3R5bGUgfHwgXCJyZ2JhKDAsMCwwLC4wNSlcIjtcbiAgLy8g6K6+572u5Y+z5a+56b2QXG4gIGN0eC50ZXh0QWxpZ24gPSBvcHRpb25zLnN0eWxlPy50ZXh0QWxpZ24gfHwgXCJyaWdodFwiO1xuICBjb25zdCB0ZXh0V2lkdGggPSBjdHgubWVhc3VyZVRleHQob3B0aW9ucy50ZXh0IGFzIHN0cmluZykud2lkdGg7XG4gIGNvbnN0IGhlaWdodCA9IHBhcnNlSW50KGN0eC5mb250KSAqIDEuMjtcbiAgY29uc3QgbGVuZ3RoID0gcGFyc2VJbnQoU3RyaW5nKF90aGlzLmNhbnZhcy53aWR0aCAvIHRleHRXaWR0aCkpO1xuICBjb25zdCBoZWlnaHRMZW5ndGggPSBwYXJzZUludChTdHJpbmcoX3RoaXMuY2FudmFzLmhlaWdodCAvIGhlaWdodCkpO1xuICBjb25zdCBtYXJnaW5YID1cbiAgICB0eXBlb2Ygb3B0aW9ucy5tYXJnaW4gPT0gXCJudW1iZXJcIlxuICAgICAgPyBvcHRpb25zLm1hcmdpblxuICAgICAgOiBvcHRpb25zLm1hcmdpbj8ueCB8fCAxMDtcbiAgY29uc3QgbWFyZ2luWSA9XG4gICAgdHlwZW9mIG9wdGlvbnMubWFyZ2luID09IFwibnVtYmVyXCJcbiAgICAgID8gb3B0aW9ucy5tYXJnaW5cbiAgICAgIDogb3B0aW9ucy5tYXJnaW4/LnkgfHwgMTA7XG4gIC8vIGNvbnNvbGUubG9nKG1hcmdpblgsbWFyZ2luWSlcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGggKyAxMDsgaSsrKSB7XG4gICAgLy8gY29uc29sZS5sb2codGV4dFdpZHRoICogaSArIDUwLCBcImN0eC5tZWFzdXJlVGV4dCh0ZXh0KS53aWR0aCAqIGkgKyA1MFwiKTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGhlaWdodExlbmd0aCArIDEwOyBqKyspIHtcbiAgICAgIGN0eC5zYXZlKCk7XG4gICAgICBjdHgudHJhbnNsYXRlKCh0ZXh0V2lkdGggKyBtYXJnaW5YKSAqIGksIGogKiAoaGVpZ2h0ICsgbWFyZ2luWSkpO1xuICAgICAgLy8gY29uc29sZS5sb2coKHRleHRXaWR0aCArIG1hcmdpblgpICogaSwgaiAqIChoZWlnaHQgKyBtYXJnaW5ZKSlcbiAgICAgIGN0eC5yb3RhdGUoKE1hdGguUEkgLyAxODApICogKG9wdGlvbnMuc3R5bGU/LnJvdGF0ZSB8fCA0NSkpO1xuICAgICAgY3R4LmZpbGxUZXh0KG9wdGlvbnMudGV4dCBhcyBzdHJpbmcsIHRleHRXaWR0aCwgaGVpZ2h0KTtcbiAgICAgIGN0eC5yZXN0b3JlKCk7XG4gICAgfVxuICB9XG59O1xuY29uc3QgZHJhd0J5SW1nVXJsOiBEcmF3ID0gYXN5bmMgKF90aGlzLCBvcHRpb25zKSA9PiB7XG4gIGNvbnN0IGZpbGVSZXMgPSBhd2FpdCBnZXRCbG9iQnlVcmwob3B0aW9ucy5pbWcgYXMgc3RyaW5nKTtcbiAgY29uc3QgaW1nID0gYXdhaXQgZ2V0SW1nU2l6ZSh3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlUmVzKSk7XG4gIF90aGlzLmNhbnZhcy53aWR0aCA9IGltZy53aWR0aDtcbiAgX3RoaXMuY2FudmFzLmhlaWdodCA9IGltZy5oZWlnaHQ7XG5cbiAgY29uc3QgY29udGV4dCA9IF90aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gIGNvbnRleHQ/LmRyYXdJbWFnZShpbWcsIDAsIDApO1xuICB3YXRlcm1hcmsoX3RoaXMsIG9wdGlvbnMpO1xufTtcbmNvbnN0IGRyYXdCeUltZ0h0bWw6IERyYXcgPSAoX3RoaXMsIG9wdGlvbnMpID0+IHtcbiAgY29uc3QgY29udGV4dCA9IF90aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gIF90aGlzLmNhbnZhcy53aWR0aCA9IChvcHRpb25zLmltZyBhcyBIVE1MSW1hZ2VFbGVtZW50KS53aWR0aDtcbiAgX3RoaXMuY2FudmFzLmhlaWdodCA9IChvcHRpb25zLmltZyBhcyBIVE1MSW1hZ2VFbGVtZW50KS5oZWlnaHQ7XG4gIGNvbnRleHQ/LmRyYXdJbWFnZShvcHRpb25zLmltZyBhcyBIVE1MSW1hZ2VFbGVtZW50LCAwLCAwKTtcbiAgd2F0ZXJtYXJrKF90aGlzLCBvcHRpb25zKTtcbn07XG5jb25zdCBkcmF3QnlCYXNlNjQ6IERyYXcgPSBhc3luYyAoX3RoaXMsIG9wdGlvbnMpID0+IHtcbiAgY29uc3QgaW1nID0gYXdhaXQgZ2V0SW1nU2l6ZShvcHRpb25zLmltZyBhcyBzdHJpbmcpO1xuICBfdGhpcy5jYW52YXMud2lkdGggPSBpbWcud2lkdGg7XG4gIF90aGlzLmNhbnZhcy5oZWlnaHQgPSBpbWcuaGVpZ2h0O1xuICBjb25zdCBjb250ZXh0ID0gX3RoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgY29udGV4dD8uZHJhd0ltYWdlKGltZywgMCwgMCk7XG4gIHdhdGVybWFyayhfdGhpcywgb3B0aW9ucyk7XG59O1xuLyoqXG4gKiDkuIvovb3kuK1cbiAqIEBwYXJhbSBfdGhpc1xuICogQHBhcmFtIGZpbGVOYW1lXG4gKi9cbmNvbnN0IGRvd25GaWxlID0gYXN5bmMgKFxuICBfdGhpczogTXlXYXRlcm1hcmssXG4gIGZpbGVOYW1lID0gYCR7bmV3IERhdGUoKS5nZXRUaW1lKCl9LnBuZ2BcbikgPT4ge1xuICBjb25zdCBibG9iID0gYXdhaXQgX3RoaXMuZ2V0QmxvYigpO1xuICBmaWxlU2F2ZXIuc2F2ZUFzKGJsb2IhLCBgJHtmaWxlTmFtZX0ucG5nYCk7XG59O1xuLyoqXG4gKiDmh5LmsYnmqKHlvI/lpb3lkKflpb3lg4/kuI3lj6/ku6Xkvb/nlKjljZXkvosg6YG/5YWN5om56YeP5LiL6L295LqM57u056CB55qE5pe25YCZ5Ye6546w5byC5bi4XG4gKiBAcmV0dXJuc1xuICovXG5jb25zdCBXYXRlcm1hcmsgPSAoZnVuY3Rpb24gKCkge1xuICAvLyBsZXQgaW5zdGFuY2U6IE15V2F0ZXJtYXJrO1xuICByZXR1cm4gZnVuY3Rpb24gKHRoaXM6IE15V2F0ZXJtYXJrLCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KSB7XG4gICAgbGV0IGluc3RhbmNlO1xuICAgIGlmIChpc0NhbnZhcyhjYW52YXMpKSB7XG4gICAgICAvLyBpZiAoIWluc3RhbmNlKSB7XG4gICAgICBpbnN0YW5jZSA9IHRoaXM7XG4gICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgIC8qKlxuICAgICAgICog6I635Y+WYmFzZTY0XG4gICAgICAgKi9cbiAgICAgIHRoaXMuZ2V0QmFzZTY0ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jYW52YXMudG9EYXRhVVJMKCk7XG4gICAgICB9O1xuICAgICAgLyoqXG4gICAgICAgKiDkuIvovb3lm77niYdcbiAgICAgICAqL1xuICAgICAgdGhpcy5kb3duRmlsZSA9IChmaWxlTmFtZSkgPT4ge1xuICAgICAgICByZXR1cm4gZG93bkZpbGUodGhpcywgZmlsZU5hbWUpO1xuICAgICAgfTtcbiAgICAgIHRoaXMuZ2V0QmxvYiA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICB0aGlzLmNhbnZhcy50b0Jsb2IoKGJsb2IpID0+IHtcbiAgICAgICAgICAgIGlmIChibG9iKSB7XG4gICAgICAgICAgICAgIHJlc29sdmUoYmxvYik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZWplY3QoXCLojrflj5blvILluLjvvIzor7fmo4Dmn6Xku6PnoIFcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICAgIHRoaXMuZHJhdyA9IGFzeW5jIChvcHRpb25zKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgY29uc3QgdHlwZSA9IGdldEltZ1R5cGUob3B0aW9ucy5pbWcpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHR5cGUpO1xuICAgICAgICAgIGNvbnN0IHByb3h5OiBSZWNvcmQ8dHlwZW9mIHR5cGUsIERyYXc+ID0ge1xuICAgICAgICAgICAgdXJsOiBkcmF3QnlJbWdVcmwuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIEhUTUxJbWFnZUVsZW1lbnQ6IGRyYXdCeUltZ0h0bWwuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIGJhc2U2NDogZHJhd0J5QmFzZTY0LmJpbmQodGhpcyksXG4gICAgICAgICAgfTtcbiAgICAgICAgICBwcm94eVt0eXBlXSh0aGlzLCBvcHRpb25zKTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgICAgLy8gfVxuICAgICAgLy8gcmV0dXJuIHRoaXM7XG4gICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IFwi5Yid5aeL5YyW55qE5pe25YCZ6K+35Lyg6YCSY2FudmFzXCI7XG4gICAgfVxuICB9O1xufSkoKSBhcyBhbnkgYXMgTXlXYXRlcm1hcmsgJiB7XG4gIC8qKlxuICAgKiDlrp7kvovljJblkI7npoHmraLkv67mlLlcbiAgICovXG4gIHJlYWRvbmx5IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXYXRlcm1hcms7XG4iLCJ0eXBlIEltZ1R5cGUgPSBcInVybFwiIHwgXCJIVE1MSW1hZ2VFbGVtZW50XCIgfCBcImJhc2U2NFwiO1xuLyoqXG4gKiDmmK/lkKbmmK9iYXNlNjRcbiAqIEBwYXJhbSBzdHJcbiAqIEByZXR1cm5zXG4gKi9cbmNvbnN0IGlzQmFzZTY0ID0gKHN0cjogc3RyaW5nKSA9PiB7XG4gIGlmIChzdHIgPT09IFwiXCIgfHwgc3RyLnRyaW0oKSA9PT0gXCJcIikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB0cnkge1xuICAgIHJldHVybiBidG9hKGF0b2Ioc3RyKSkgPT0gc3RyO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG4vKipcbiAqIOiOt+WPluS8oOmAkueahOaWh+S7tuexu+Wei1xuICogQHBhcmFtIGltZ1xuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IGNvbnN0IGdldEltZ1R5cGUgPSAoaW1nOiBhbnkpOiBcInVybFwiIHwgXCJIVE1MSW1hZ2VFbGVtZW50XCIgfCBcImJhc2U2NFwiID0+IHtcbiAgY29uc3QgcHJveHk6IFJlY29yZDxhbnksIEltZ1R5cGU+ID0ge1xuICAgIFwiW29iamVjdCBIVE1MSW1hZ2VFbGVtZW50XVwiOiBcIkhUTUxJbWFnZUVsZW1lbnRcIixcbiAgfTtcbiAgLy8gY29uc29sZS5sb2coaW1nKVxuICBpZiAodHlwZW9mIGltZyA9PT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiBpc0Jhc2U2NChpbWcpID8gXCJiYXNlNjRcIiA6IFwidXJsXCI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHByb3h5W09iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpbWcpXTtcbiAgfVxufTtcbi8qKlxuICog5piv5ZCm5pivY2FudmFzIOWFg+e0oFxuICogQHBhcmFtIGRpdiBcbiAqIEByZXR1cm5zIFxuICovXG5leHBvcnQgY29uc3QgaXNDYW52YXMgPSAoZGl2OiBhbnkpOiBkaXYgaXMgSFRNTENhbnZhc0VsZW1lbnQgPT4ge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGRpdikgPT09IFwiW29iamVjdCBIVE1MQ2FudmFzRWxlbWVudF1cIjtcbn07XG4vKipcbiAqIOiOt+WPlmJsb2JcbiAqIEBwYXJhbSB1cmxcbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRCbG9iQnlVcmwgPSBhc3luYyAodXJsOiBzdHJpbmcpOiBQcm9taXNlPEJsb2I+ID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgaGVhZGVyczoge1xuICAgICAgcmVzcG9uc2VUeXBlOiBcImJsb2JcIixcbiAgICB9LFxuICAgIG1ldGhvZDogXCJnZXRcIixcbiAgfSk7XG4gIHJldHVybiBhd2FpdCByZXMuYmxvYigpO1xufTtcbi8qKlxuICog6I635Y+W5Zu+54mH5aSn5bCPXG4gKiBAcGFyYW0gdXJsXG4gKiBAcmV0dXJuc1xuICovXG5leHBvcnQgY29uc3QgZ2V0SW1nU2l6ZSA9IGFzeW5jICh1cmw6IHN0cmluZyk6IFByb21pc2U8SFRNTEltYWdlRWxlbWVudD4gPT4ge1xuICBsZXQgaW1nID0gbmV3IEltYWdlKCk7XG4gIGltZy5zcmMgPSB1cmw7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgaW1nLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIHJlc29sdmUoaW1nKTtcbiAgICB9O1xuICB9KTtcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oNTAwKTtcbiJdLCJuYW1lcyI6WyJyb290IiwiZmFjdG9yeSIsImV4cG9ydHMiLCJtb2R1bGUiLCJkZWZpbmUiLCJhbWQiLCJzZWxmIiwiYyIsImEiLCJiIiwiZCIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsInJlc3BvbnNlVHlwZSIsIm9ubG9hZCIsImciLCJyZXNwb25zZSIsIm9uZXJyb3IiLCJjb25zb2xlIiwiZXJyb3IiLCJzZW5kIiwic3RhdHVzIiwiZSIsImRpc3BhdGNoRXZlbnQiLCJNb3VzZUV2ZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFdmVudCIsImluaXRNb3VzZUV2ZW50Iiwid2luZG93IiwiZiIsImdsb2JhbCIsIm5hdmlnYXRvciIsInRlc3QiLCJ1c2VyQWdlbnQiLCJzYXZlQXMiLCJIVE1MQW5jaG9yRWxlbWVudCIsInByb3RvdHlwZSIsImgiLCJpIiwiVVJMIiwid2Via2l0VVJMIiwiaiIsImNyZWF0ZUVsZW1lbnQiLCJuYW1lIiwiZG93bmxvYWQiLCJyZWwiLCJocmVmIiwib3JpZ2luIiwibG9jYXRpb24iLCJ0YXJnZXQiLCJjcmVhdGVPYmplY3RVUkwiLCJzZXRUaW1lb3V0IiwicmV2b2tlT2JqZWN0VVJMIiwibXNTYXZlT3JPcGVuQmxvYiIsImF1dG9Cb20iLCJ3YXJuIiwidHlwZSIsIkJsb2IiLCJ0aXRsZSIsImJvZHkiLCJpbm5lclRleHQiLCJIVE1MRWxlbWVudCIsInNhZmFyaSIsIkZpbGVSZWFkZXIiLCJrIiwib25sb2FkZW5kIiwicmVzdWx0IiwicmVwbGFjZSIsInJlYWRBc0RhdGFVUkwiLCJsIiwibSIsIndhdGVybWFyayIsIl90aGlzIiwib3B0aW9ucyIsImN0eCIsImNhbnZhcyIsImdldENvbnRleHQiLCJmb250Iiwic3R5bGUiLCJmaWxsU3R5bGUiLCJ0ZXh0QWxpZ24iLCJ0ZXh0V2lkdGgiLCJtZWFzdXJlVGV4dCIsInRleHQiLCJ3aWR0aCIsImhlaWdodCIsInBhcnNlSW50IiwibGVuZ3RoIiwiU3RyaW5nIiwiaGVpZ2h0TGVuZ3RoIiwibWFyZ2luWCIsIm1hcmdpbiIsIngiLCJtYXJnaW5ZIiwieSIsInNhdmUiLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJNYXRoIiwiUEkiLCJmaWxsVGV4dCIsInJlc3RvcmUiLCJkcmF3QnlJbWdVcmwiLCJmaWxlUmVzIiwiZ2V0QmxvYkJ5VXJsIiwiaW1nIiwiZ2V0SW1nU2l6ZSIsImNvbnRleHQiLCJkcmF3SW1hZ2UiLCJkcmF3QnlJbWdIdG1sIiwiZHJhd0J5QmFzZTY0IiwiaW5zdGFuY2UiLCJpc0NhbnZhcyIsInRoaXMiLCJnZXRCYXNlNjQiLCJ0b0RhdGFVUkwiLCJkb3duRmlsZSIsImZpbGVOYW1lIiwiRGF0ZSIsImdldFRpbWUiLCJibG9iIiwiZ2V0QmxvYiIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwidG9CbG9iIiwiZHJhdyIsImdldEltZ1R5cGUiLCJsb2ciLCJ1cmwiLCJiaW5kIiwiSFRNTEltYWdlRWxlbWVudCIsImJhc2U2NCIsInN0ciIsInRyaW0iLCJidG9hIiwiYXRvYiIsImVyciIsImlzQmFzZTY0IiwiT2JqZWN0IiwidG9TdHJpbmciLCJjYWxsIiwiZGl2IiwicmVzIiwiZmV0Y2giLCJoZWFkZXJzIiwibWV0aG9kIiwiSW1hZ2UiLCJzcmMiLCJfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJjYWNoZWRNb2R1bGUiLCJ1bmRlZmluZWQiLCJfX3dlYnBhY2tfbW9kdWxlc19fIiwiZ2xvYmFsVGhpcyIsIkZ1bmN0aW9uIiwiX193ZWJwYWNrX2V4cG9ydHNfXyJdLCJzb3VyY2VSb290IjoiIn0=