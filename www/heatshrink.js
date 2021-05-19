/* 
  Compiled to JS with Emscripten by Gordon Williams <gw@espruino.com>
  heatshrink_config.h matches that of Espruino.
  Source for conversion at http://github.com/gfwilliams/heatshrink-js 
*/
/*
Copyright (c) 2013-2015, Scott Vokes <vokes.s@gmail.com>
All rights reserved.
 
Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.
 
THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
*/
var Module=typeof Module!=="undefined"?Module:{};var moduleOverrides={};var key;for(key in Module){if(Module.hasOwnProperty(key)){moduleOverrides[key]=Module[key]}}var arguments_=[];var thisProgram="./this.program";var quit_=function(status,toThrow){throw toThrow};var ENVIRONMENT_IS_WEB=false;var ENVIRONMENT_IS_WORKER=false;var ENVIRONMENT_IS_NODE=false;var ENVIRONMENT_IS_SHELL=false;ENVIRONMENT_IS_WEB=typeof window==="object";ENVIRONMENT_IS_WORKER=typeof importScripts==="function";ENVIRONMENT_IS_NODE=typeof process==="object"&&typeof process.versions==="object"&&typeof process.versions.node==="string";ENVIRONMENT_IS_SHELL=!ENVIRONMENT_IS_WEB&&!ENVIRONMENT_IS_NODE&&!ENVIRONMENT_IS_WORKER;var scriptDirectory="";function locateFile(path){if(Module["locateFile"]){return Module["locateFile"](path,scriptDirectory)}return scriptDirectory+path}var read_,readAsync,readBinary,setWindowTitle;var nodeFS;var nodePath;if(ENVIRONMENT_IS_NODE){if(ENVIRONMENT_IS_WORKER){scriptDirectory=require("path").dirname(scriptDirectory)+"/"}else{scriptDirectory=__dirname+"/"}read_=function shell_read(filename,binary){var ret=tryParseAsDataURI(filename);if(ret){return binary?ret:ret.toString()}if(!nodeFS)nodeFS=require("fs");if(!nodePath)nodePath=require("path");filename=nodePath["normalize"](filename);return nodeFS["readFileSync"](filename,binary?null:"utf8")};readBinary=function readBinary(filename){var ret=read_(filename,true);if(!ret.buffer){ret=new Uint8Array(ret)}assert(ret.buffer);return ret};if(process["argv"].length>1){thisProgram=process["argv"][1].replace(/\\/g,"/")}arguments_=process["argv"].slice(2);if(typeof module!=="undefined"){module["exports"]=Module}process["on"]("uncaughtException",function(ex){if(!(ex instanceof ExitStatus)){throw ex}});process["on"]("unhandledRejection",abort);quit_=function(status){process["exit"](status)};Module["inspect"]=function(){return"[Emscripten Module object]"}}else if(ENVIRONMENT_IS_SHELL){if(typeof read!="undefined"){read_=function shell_read(f){var data=tryParseAsDataURI(f);if(data){return intArrayToString(data)}return read(f)}}readBinary=function readBinary(f){var data;data=tryParseAsDataURI(f);if(data){return data}if(typeof readbuffer==="function"){return new Uint8Array(readbuffer(f))}data=read(f,"binary");assert(typeof data==="object");return data};if(typeof scriptArgs!="undefined"){arguments_=scriptArgs}else if(typeof arguments!="undefined"){arguments_=arguments}if(typeof quit==="function"){quit_=function(status){quit(status)}}if(typeof print!=="undefined"){if(typeof console==="undefined")console={};console.log=print;console.warn=console.error=typeof printErr!=="undefined"?printErr:print}}else if(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER){if(ENVIRONMENT_IS_WORKER){scriptDirectory=self.location.href}else if(typeof document!=="undefined"&&document.currentScript){scriptDirectory=document.currentScript.src}if(scriptDirectory.indexOf("blob:")!==0){scriptDirectory=scriptDirectory.substr(0,scriptDirectory.lastIndexOf("/")+1)}else{scriptDirectory=""}{read_=function(url){try{var xhr=new XMLHttpRequest;xhr.open("GET",url,false);xhr.send(null);return xhr.responseText}catch(err){var data=tryParseAsDataURI(url);if(data){return intArrayToString(data)}throw err}};if(ENVIRONMENT_IS_WORKER){readBinary=function(url){try{var xhr=new XMLHttpRequest;xhr.open("GET",url,false);xhr.responseType="arraybuffer";xhr.send(null);return new Uint8Array(xhr.response)}catch(err){var data=tryParseAsDataURI(url);if(data){return data}throw err}}}readAsync=function(url,onload,onerror){var xhr=new XMLHttpRequest;xhr.open("GET",url,true);xhr.responseType="arraybuffer";xhr.onload=function(){if(xhr.status==200||xhr.status==0&&xhr.response){onload(xhr.response);return}var data=tryParseAsDataURI(url);if(data){onload(data.buffer);return}onerror()};xhr.onerror=onerror;xhr.send(null)}}setWindowTitle=function(title){document.title=title}}else{}var out=Module["print"]||console.log.bind(console);var err=Module["printErr"]||console.warn.bind(console);for(key in moduleOverrides){if(moduleOverrides.hasOwnProperty(key)){Module[key]=moduleOverrides[key]}}moduleOverrides=null;if(Module["arguments"])arguments_=Module["arguments"];if(Module["thisProgram"])thisProgram=Module["thisProgram"];if(Module["quit"])quit_=Module["quit"];var wasmBinary;if(Module["wasmBinary"])wasmBinary=Module["wasmBinary"];var noExitRuntime=Module["noExitRuntime"]||true;var WebAssembly={Memory:function(opts){this.buffer=new ArrayBuffer(opts["initial"]*65536)},Module:function(binary){},Instance:function(module,info){this.exports=(
// EMSCRIPTEN_START_ASM
function instantiate(V){function c(d){d.set=function(a,b){this[a]=b};d.get=function(a){return this[a]};return d}var e;var f=new Uint8Array(123);for(var a=25;a>=0;--a){f[48+a]=52+a;f[65+a]=a;f[97+a]=26+a}f[43]=62;f[47]=63;function l(m,n,o){var g,h,a=0,i=n,j=o.length,k=n+(j*3>>2)-(o[j-2]=="=")-(o[j-1]=="=");for(;a<j;a+=4){g=f[o.charCodeAt(a+1)];h=f[o.charCodeAt(a+2)];m[i++]=f[o.charCodeAt(a)]<<2|g>>4;if(i<k)m[i++]=g<<4|h>>2;if(i<k)m[i++]=h<<6|f[o.charCodeAt(a+3)]}}function p(q){l(e,1024,"Cl5eIENPTVBSRVNTSU5HICVkIGJ5dGVzCgBBc3NlcnQgYXQgaGVhdHNocmlua193cmFwcGVyLmM6JWQKAF5eIHN1bmsgJXpkCgBeXiBwb2xsZWQgJXpkCgBpbjogJXUgY29tcHJlc3NlZDogJXUKAApeXiBERUNPTVBSRVNTSU5HICVkIGJ5dGVzCgCQBgAALSsgICAwWDB4AChudWxsKQ==");l(e,1200,"EQAKABEREQAAAAAFAAAAAAAACQAAAAALAAAAAAAAAAARAA8KERERAwoHAAEACQsLAAAJBgsAAAsABhEAAAARERE=");l(e,1281,"CwAAAAAAAAAAEQAKChEREQAKAAACAAkLAAAACQALAAAL");l(e,1339,"DA==");l(e,1351,"DAAAAAAMAAAAAAkMAAAAAAAMAAAM");l(e,1397,"Dg==");l(e,1409,"DQAAAAQNAAAAAAkOAAAAAAAOAAAO");l(e,1455,"EA==");l(e,1467,"DwAAAAAPAAAAAAkQAAAAAAAQAAAQAAASAAAAEhIS");l(e,1522,"EgAAABISEgAAAAAAAAk=");l(e,1571,"Cw==");l(e,1583,"CgAAAAAKAAAAAAkLAAAAAAALAAAL");l(e,1629,"DA==");l(e,1641,"DAAAAAAMAAAAAAkMAAAAAAAMAAAMAAAwMTIzNDU2Nzg5QUJDREVG");l(e,1680,"BQ==");l(e,1692,"AQ==");l(e,1716,"AgAAAAMAAAA4BwAAAAQ=");l(e,1740,"AQ==");l(e,1755,"Cv////8=")}function T(U){var r=U.a;var s=r.buffer;var t=new Int8Array(s);var u=new Int16Array(s);var v=new Int32Array(s);var w=new Uint8Array(s);var x=new Uint16Array(s);var y=new Uint32Array(s);var z=new Float32Array(s);var A=new Float64Array(s);var B=Math.imul;var C=Math.fround;var D=Math.abs;var E=Math.clz32;var F=Math.min;var G=Math.max;var H=Math.floor;var I=Math.ceil;var J=Math.trunc;var K=Math.sqrt;var L=U.abort;var M=NaN;var N=Infinity;var O=U.b;var P=5245824;var Q=0;
// EMSCRIPTEN_START_FUNCS
function ca(a,b,c,d,e){var f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,x=0,y=0,z=0,C=0,D=0,F=0,G=0,H=0;g=P-80|0;P=g;v[g+76>>2]=b;H=g+55|0;C=g+56|0;b=0;a:{b:while(1){c:{if((q|0)<0){break c}if((2147483647-q|0)<(b|0)){v[456]=61;q=-1;break c}q=b+q|0}d:{e:{f:{h=v[g+76>>2];b=h;f=w[b|0];if(f){while(1){g:{f=f&255;h:{if(!f){f=b;break h}if((f|0)!=37){break g}f=b;while(1){if(w[b+1|0]!=37){break h}i=b+2|0;v[g+76>>2]=i;f=f+1|0;j=w[b+2|0];b=i;if((j|0)==37){continue}break}}b=f-h|0;if(a){Y(a,h,b)}if(b){continue b}b=v[g+76>>2];f=b+1|0;s=-1;i=t[b+1|0];if(!(!$(i)|w[b+2|0]!=36)){s=i-48|0;F=1;f=b+3|0}v[g+76>>2]=f;o=0;m=t[f|0];b=m-32|0;i:{if(b>>>0>31){break i}b=1<<b;if(!(b&75913)){break i}while(1){j:{i=f+1|0;v[g+76>>2]=i;m=t[f+1|0];f=m-32|0;if(f>>>0>=32){break j}f=1<<f;if(!(f&75913)){break j}b=b|f;f=i;continue}break}f=i;o=b}k:{if((m|0)==42){b=t[f+1|0];l:{if(!(!$(b)|w[f+2|0]!=36)){v[((b<<2)+e|0)-192>>2]=10;b=f+3|0;p=v[((t[f+1|0]<<3)+d|0)-384>>2];F=1;break l}if(F){break f}b=f+1|0;if(!a){v[g+76>>2]=b;F=0;p=0;break k}f=v[c>>2];v[c>>2]=f+4;p=v[f>>2];F=0}v[g+76>>2]=b;if((p|0)>-1){break k}p=0-p|0;o=o|8192;break k}p=ha(g+76|0);if((p|0)<0){break f}b=v[g+76>>2]}l=-1;m:{if(w[b|0]!=46){break m}if(w[b+1|0]==42){f=t[b+2|0];n:{if(!(!$(f)|w[b+3|0]!=36)){v[((f<<2)+e|0)-192>>2]=10;l=v[((t[b+2|0]<<3)+d|0)-384>>2];b=b+4|0;break n}if(F){break f}b=b+2|0;if(!a){l=0;break n}f=v[c>>2];v[c>>2]=f+4;l=v[f>>2]}v[g+76>>2]=b;break m}v[g+76>>2]=b+1;l=ha(g+76|0);b=v[g+76>>2]}i=0;while(1){j=i;m=-1;n=b;if(t[b|0]-65>>>0>57){break a}b=n+1|0;v[g+76>>2]=b;i=w[(t[n|0]+B(j,58)|0)+1135|0];if(i-1>>>0<8){continue}break}o:{p:{if((i|0)!=19){if(!i){break a}if((s|0)>=0){v[(s<<2)+e>>2]=i;b=(s<<3)+d|0;f=v[b+4>>2];v[g+64>>2]=v[b>>2];v[g+68>>2]=f;break p}if(!a){break d}ga(g- -64|0,i,c);break o}if((s|0)>-1){break a}}b=0;if(!a){continue b}}f=o&-65537;i=o&8192?f:o;m=0;s=1168;o=C;q:{r:{s:{t:{u:{v:{w:{x:{y:{z:{A:{B:{C:{D:{E:{F:{b=t[n|0];b=j?(b&15)==3?b&-33:b:b;switch(b-88|0){case 11:break q;case 9:case 13:case 14:case 15:break r;case 27:break w;case 12:case 17:break z;case 23:break A;case 0:case 32:break B;case 24:break C;case 22:break D;case 29:break E;case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 10:case 16:case 18:case 19:case 20:case 21:case 25:case 26:case 28:case 30:case 31:break e;default:break F}}G:{switch(b-65|0){case 0:case 4:case 5:case 6:break r;case 2:break u;case 1:case 3:break e;default:break G}}if((b|0)==83){break v}break e}j=v[g+64>>2];h=v[g+68>>2];s=1168;break y}b=0;H:{switch(j&255){case 0:v[v[g+64>>2]>>2]=q;continue b;case 1:v[v[g+64>>2]>>2]=q;continue b;case 2:f=v[g+64>>2];v[f>>2]=q;v[f+4>>2]=q>>31;continue b;case 3:u[v[g+64>>2]>>1]=q;continue b;case 4:t[v[g+64>>2]]=q;continue b;case 6:v[v[g+64>>2]>>2]=q;continue b;case 7:break H;default:continue b}}f=v[g+64>>2];v[f>>2]=q;v[f+4>>2]=q>>31;continue b}l=l>>>0>8?l:8;i=i|8;b=120}f=C;k=b&32;n=v[g+68>>2];h=n;j=v[g+64>>2];if(h|j){while(1){f=f-1|0;t[f|0]=k|w[(j&15)+1664|0];n=h;h=h>>>4|0;j=(n&15)<<28|j>>>4;if(h|j){continue}break}}h=f;if(!(i&8)|!(v[g+64>>2]|v[g+68>>2])){break x}s=(b>>>4|0)+1168|0;m=2;break x}b=C;f=v[g+68>>2];h=f;j=v[g+64>>2];if(f|j){while(1){b=b-1|0;t[b|0]=j&7|48;f=h;h=f>>>3|0;j=(f&7)<<29|j>>>3;if(h|j){continue}break}}h=b;if(!(i&8)){break x}b=C-h|0;l=(b|0)<(l|0)?l:b+1|0;break x}b=v[g+68>>2];h=b;j=v[g+64>>2];if((b|0)<-1?1:(b|0)<=-1){h=0-(h+((j|0)!=0)|0)|0;j=0-j|0;v[g+64>>2]=j;v[g+68>>2]=h;m=1;s=1168;break y}if(i&2048){m=1;s=1169;break y}m=i&1;s=m?1170:1168}b=C;I:{if(h>>>0<1){f=j;break I}while(1){f=j;y=0;G=0;n=h;r=h;J:{if(!h){Q=0;f=(f>>>0)/10|0;break J}z=61-E(r)|0;D=0-z|0;x=z&63;k=x&31;if(x>>>0>=32){x=0;r=r>>>k|0}else{x=r>>>k|0;r=((1<<k)-1&r)<<32-k|f>>>k}D=D&63;k=D&31;if(D>>>0>=32){n=f<<k;f=0}else{n=(1<<k)-1&f>>>32-k|n<<k;f=f<<k}if(z){while(1){k=r<<1|n>>>31;y=k;x=x<<1|r>>>31;k=0-(x+(k>>>0>9)|0)>>31;D=k&10;r=y-D|0;x=x-(y>>>0<D>>>0)|0;n=n<<1|f>>>31;f=G|f<<1;y=k&1;G=y;z=z-1|0;if(z){continue}break}}Q=n<<1|f>>>31;f=y|f<<1}r=Q;n=r;k=f>>>16|0;z=B(k,65535);r=B(k,65526);k=f&65535;x=B(k,65526);y=r+(x>>>16|0)|0;k=(y&65535)+B(k,65535)|0;Q=(B(n,-10)+z|0)-f+(y>>>16)+(k>>>16)|0;b=b-1|0;t[b|0]=j+(x&65535|k<<16)|48;k=h>>>0>9;j=f;h=n;if(k){continue}break}}if(f){while(1){b=b-1|0;h=(f>>>0)/10|0;t[b|0]=B(h,-10)+f|48;j=f>>>0>9;f=h;if(j){continue}break}}h=b}i=(l|0)>-1?i&-65537:i;b=v[g+68>>2];f=b;j=v[g+64>>2];if(!((j|0)!=0|(b|0)!=0|l)){l=0;h=C;break e}b=!(f|j)+(C-h|0)|0;l=(b|0)<(l|0)?l:b;break e}b=l;o=(b|0)!=0;h=v[g+64>>2];h=h?h:1178;i=h;K:{L:{M:{N:{if(!(i&3)|!b){break N}while(1){if(!w[i|0]){break M}b=b-1|0;o=(b|0)!=0;i=i+1|0;if(!(i&3)){break N}if(b){continue}break}}if(!o){break L}if(!w[i|0]|b>>>0<4){break M}while(1){j=v[i>>2];if((j^-1)&j-16843009&-2139062144){break M}i=i+4|0;b=b-4|0;if(b>>>0>3){continue}break}}if(!b){break L}while(1){n=i;if(!w[i|0]){break K}i=i+1|0;b=b-1|0;if(b){continue}break}}n=0}b=n;o=b?b:h+l|0;i=f;l=b?b-h|0:l;break e}f=v[g+64>>2];if(l){break t}b=0;X(a,32,p,0,i);break s}v[g+12>>2]=0;v[g+8>>2]=v[g+64>>2];v[g+64>>2]=g+8;l=-1;f=g+8|0}b=0;O:{while(1){h=v[f>>2];if(!h){break O}h=ia(g+4|0,h);j=(h|0)<0;if(!(j|h>>>0>l-b>>>0)){f=f+4|0;b=b+h|0;if(l>>>0>b>>>0){continue}break O}break}m=-1;if(j){break a}}X(a,32,p,b,i);if(!b){b=0;break s}f=0;m=v[g+64>>2];while(1){h=v[m>>2];if(!h){break s}h=ia(g+4|0,h);f=h+f|0;if((f|0)>(b|0)){break s}Y(a,g+4|0,h);m=m+4|0;if(b>>>0>f>>>0){continue}break}}X(a,32,p,b,i^8192);b=(b|0)<(p|0)?p:b;continue b}b=R[0](a,A[g+64>>3],p,l,i,b)|0;continue b}t[g+55|0]=v[g+64>>2];l=1;h=H;i=f;break e}i=b+1|0;v[g+76>>2]=i;f=w[b+1|0];b=i;continue}}m=q;if(a){break a}if(!F){break d}b=1;while(1){a=v[(b<<2)+e>>2];if(a){ga((b<<3)+d|0,a,c);m=1;b=b+1|0;if((b|0)!=10){continue}break a}break}m=1;if(b>>>0>=10){break a}f=0;while(1){if(f){break f}b=b+1|0;if((b|0)==10){break a}f=v[(b<<2)+e>>2];continue}}m=-1;break a}j=o-h|0;o=(j|0)>(l|0)?j:l;f=o+m|0;b=(f|0)>(p|0)?f:p;X(a,32,b,f,i);Y(a,s,m);X(a,48,b,f,i^65536);X(a,48,o,j,0);Y(a,h,j);X(a,32,b,f,i^8192);continue}break}m=0}P=g+80|0;return m}function ea(a,b,c,d){var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,y=0,z=0;f=P-16|0;P=f;l=-1;a:{if(!d|(!a|!b)){break a}b:{if(!c){break b}l=0;v[d>>2]=0;v[f+8>>2]=d;v[f+4>>2]=c;v[f>>2]=b;b=w[a+12|0];while(1){p=b&255;b=2;c:{d:{switch(p|0){case 3:b=3;e:{if(!_(f)){break e}if(!x[a+4>>1]){la(a,f,1);b=4;break e}la(a,f,0);t[a+10|0]=9;u[a+8>>1]=x[a+6>>1]-1;b=5}break c;case 4:if(_(f)){da(a,8,w[((x[a+2>>1]+511&65535)+a|0)+15|0],f);b=2}else{b=4}break c;case 5:b=5;f:{if(!_(f)){break f}if(ka(a,f)){break f}b=6;t[a+10|0]=6;u[a+8>>1]=x[a+4>>1]-1}break c;case 6:b=6;g:{if(!_(f)){break g}if(ka(a,f)){break g}b=x[a+4>>1];u[a+4>>1]=0;u[a+2>>1]=b+x[a+2>>1];b=2}break c;case 7:e=a+15|0;h=e;b=x[a+2>>1];i=512-(512-b&65535)|0;g=i+e|0;b=1024-b&65535;h:{if(e>>>0<g>>>0){ba(h,g,b);break h}if(b){e=b+h|0;g=b+g|0;while(1){e=e-1|0;g=g-1|0;t[e|0]=w[g|0];b=b-1|0;if(b){continue}break}}}u[a+2>>1]=0;u[a>>1]=x[a>>1]-i;b=0;break c;case 8:b=a;i:{if(w[a+14|0]!=128){c=8;if(!_(f)){break i}c=w[a+13|0];d=v[f>>2];e=v[f+8>>2];a=v[e>>2];v[e>>2]=a+1;t[a+d|0]=c}c=9}t[b+12|0]=c;break a;case 0:case 9:break a;case 1:break c;case 2:break d;default:break b}}k=P-16|0;P=k;e=ma(a);h=x[a>>1];b=x[a+2>>1];j:{if(((e?-1:-64)+h|0)<(b|0)){b=e?8:7;break j}q=0;u[k+14>>1]=0;g=0;e=h-b|0;h=((e|0)<64?e:64)&65535;s=h>>>0>1?h:1;i=b+512&65535;m=(i+a|0)+15|0;y=b<<16>>16;r=65535;b=i;k:{while(1){n=g&65535;z=n+m|0;while(1){b=(b<<16)-65536>>16;if((y|0)>(b|0)){break k}j=(a+b|0)+15|0;if(w[j+n|0]!=w[z|0]){continue}e=1;if(w[j|0]!=w[m|0]){continue}while(1){l:{o=e&65535;if(o>>>0>=h>>>0){e=s;break l}if(w[j+o|0]!=w[m+o|0]){break l}e=e+1|0;continue}break}j=e&65535;if(j>>>0<=n>>>0){continue}break}r=b;g=e;if((h|0)!=(j|0)){continue}break}g=h}if((g&65535)>>>0>=3){u[k+14>>1]=g;b=i-r|0}else{b=65535}b=b&65535;m:{if((b|0)==65535){u[a+2>>1]=x[a+2>>1]+1;break m}u[a+6>>1]=b;q=x[k+14>>1]}u[a+4>>1]=q;b=3}P=k+16|0}t[a+12|0]=b;if((b&255)!=(p|0)|v[d>>2]!=(c|0)){continue}break}l=1;break a}l=-2}P=f+16|0;return l}function qa(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0;f=P-1264|0;P=f;g=f+224|0;aa(g+15|0,0,1024);t[g+12|0]=0;u[g>>1]=0;u[g+2>>1]=0;t[g+13|0]=0;t[g+14|0]=128;u[g+8>>1]=0;u[g+10>>1]=0;u[g+4>>1]=0;v[f+220>>2]=0;l=(e|0)<2;if(!l){v[f+128>>2]=b;W(1024,f+128|0)}a:{b:{while(1){if(b>>>0<=j>>>0){break b}k=b-j|0;i=-1;o=f+220|0;g=f+224|0;p=a+j|0;c:{if(!o|(!g|!p)){break c}i=-2;if(ma(g)|w[g+12|0]){break c}m=x[g>>1];n=512-m&65535;i=k>>>0>n>>>0?n:k;ba((g+(m+512&65535)|0)+15|0,p,i);v[o>>2]=i;u[g>>1]=i+m;i=0;if(k>>>0<n>>>0){break c}t[g+12|0]=1}if((i|0)<=-1){v[f+96>>2]=21;W(1050,f+96|0);h=0;break a}g=v[f+220>>2];j=g+j|0;if(!l){v[f+80>>2]=g;W(1085,f+80|0)}d:{if((b|0)!=(j|0)){break d}if((fa(f+224|0)|0)==1){break d}v[f+64>>2]=25;W(1050,f- -64|0);h=0;break a}e:{while(1){f:{if(c){g=ea(f+224|0,c+h|0,d-h|0,f+220|0);break f}g=ea(f+224|0,f+144|0,64,f+220|0)}if((g|0)<=-1){v[f+48>>2]=36;W(1050,f+48|0);h=0;break a}k=v[f+220>>2];if(!l){v[f+32>>2]=k;W(1098,f+32|0)}h=h+k|0;g:{switch(g|0){case 0:break e;case 1:continue;default:break g}}break}v[f>>2]=40;W(1050,f);h=0;break a}if((b|0)!=(j|0)){continue}if(!fa(f+224|0)){continue}break}v[f+16>>2]=42;W(1050,f+16|0);h=0;break a}if((e|0)<1){break a}v[f+116>>2]=h;v[f+112>>2]=b;W(1113,f+112|0)}P=f+1264|0;return h|0}function na(a,b,c,d){var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0;f=P-16|0;P=f;e=-1;a:{if(!d|(!a|!b)){break a}v[d>>2]=0;v[f+8>>2]=d;v[f+4>>2]=c;v[f>>2]=b;b=w[a+10|0];while(1){e=-2;k=a;b:{c:{d:{e:{f:{g:{h:{i:{g=b&255;switch(g|0){case 0:break i;case 6:break c;case 5:break d;case 4:break e;case 3:break f;case 2:break g;case 1:break h;default:break a}}b=Z(a,1);b=(b|0)==65535?0:b?1:2;break b}b=1;j:{if(y[v[f+8>>2]>>2]>=y[f+4>>2]){break j}e=Z(a,8);if((e|0)==65535){break j}b=x[a+8>>1];u[a+8>>1]=b+1;t[((b&511)+a|0)+613|0]=e;ja(f,e&255);b=0}break b}b=Z(a,1);if((b|0)==65535){b=2}else{u[a+6>>1]=b<<8;b=3}break b}b=Z(a,8);if((b|0)==65535){b=3}else{u[a+4>>1]=0;u[a+6>>1]=(b|x[a+6>>1])+1;b=5}break b}b=Z(a,254);if((b|0)==65535){b=4}else{u[a+4>>1]=b<<8;b=5}break b}b=Z(a,6);if((b|0)==65535){b=5}else{u[a+4>>1]=(b|x[a+4>>1])+1;b=6}break b}k:{l:{b=v[f+4>>2]-v[v[f+8>>2]>>2]|0;if(!b){break l}e=x[a+4>>1];e=b>>>0>e>>>0?e:b;h=a+613|0;l=x[a+6>>1];b=0;while(1){if((b|0)!=(e|0)){i=w[(x[a+8>>1]-l&511)+h|0];ja(f,i);j=x[a+8>>1];t[(j&511)+h|0]=i;u[a+8>>1]=j+1;b=b+1|0;continue}break}b=x[a+4>>1]-e|0;u[a+4>>1]=b;if(b&65535){break l}b=0;break k}b=6}}t[k+10|0]=b;if((b&255)!=(g|0)){continue}break}e=v[d>>2]==(c|0)}P=f+16|0;return e}function xa(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0;f=P-1344|0;P=f;aa(f+216|0,0,1125);v[f+212>>2]=0;m=(e|0)<2;if(!m){v[f+128>>2]=b;W(1136,f+128|0)}a:{b:{while(1){if(b>>>0<=k>>>0){break b}h=b-k|0;g=-1;n=f+212|0;j=f+216|0;o=a+k|0;if(!(!n|(!j|!o))){g=x[j>>1];l=600-g|0;c:{if(!l){h=0;g=1;break c}h=h>>>0>l>>>0?l:h;ba((g+j|0)+13|0,o,h);u[j>>1]=g+h;g=0}v[n>>2]=h}if((g|0)<=-1){v[f+96>>2]=63;W(1050,f+96|0);i=0;break a}g=v[f+212>>2];k=g+k|0;if(!m){v[f+80>>2]=g;W(1085,f+80|0)}d:{if((b|0)!=(k|0)){break d}if((oa(f+216|0)|0)==1){break d}v[f+64>>2]=67;W(1050,f- -64|0);i=0;break a}while(1){e:{if(c){g=na(f+216|0,c+i|0,d-i|0,f+212|0);break e}g=na(f+216|0,f+144|0,64,f+212|0)}if((g|0)<=-1){v[f+48>>2]=78;W(1050,f+48|0);i=0;break a}h=v[f+212>>2];j=h;i=i+h|0;l=(g|0)==1;if(!m){v[f+32>>2]=h;W(1098,f+32|0);j=v[f+212>>2]}if(j?l:0){continue}break}if(g){v[f+16>>2]=82;W(1050,f+16|0);i=0;break a}if((b|0)!=(k|0)){continue}if(!oa(f+216|0)){continue}break}v[f>>2]=84;W(1050,f);i=0;break a}if((e|0)<1){break a}v[f+116>>2]=i;v[f+112>>2]=b;W(1113,f+112|0)}P=f+1344|0;return i|0}
function wa(a,b,c){a=a|0;b=b|0;c=c|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0;e=P-32|0;P=e;f=v[a+28>>2];v[e+16>>2]=f;g=v[a+20>>2];v[e+28>>2]=c;v[e+24>>2]=b;b=g-f|0;v[e+20>>2]=b;f=b+c|0;g=2;b=e+16|0;a:{while(1){b:{c:{d=O(v[a+60>>2],b|0,g|0,e+12|0)|0;if(d){v[456]=d;d=-1}else{d=0}d:{if(!d){d=v[e+12>>2];if((d|0)==(f|0)){break d}if((d|0)>-1){break c}break b}if((f|0)!=-1){break b}}b=v[a+44>>2];v[a+28>>2]=b;v[a+20>>2]=b;v[a+16>>2]=b+v[a+48>>2];a=c;break a}h=v[b+4>>2];i=h>>>0<d>>>0;j=(i<<3)+b|0;h=d-(i?h:0)|0;v[j>>2]=h+v[j>>2];j=(i?12:4)+b|0;v[j>>2]=v[j>>2]-h;b=i?b+8|0:b;f=f-d|0;g=g-i|0;continue}break}v[a+28>>2]=0;v[a+16>>2]=0;v[a+20>>2]=0;v[a>>2]=v[a>>2]|32;a=0;if((g|0)==2){break a}a=c-v[b+4>>2]|0}P=e+32|0;return a|0}function ga(a,b,c){a:{if(b>>>0>20){break a}b:{switch(b-9|0){case 0:b=v[c>>2];v[c>>2]=b+4;v[a>>2]=v[b>>2];return;case 1:b=v[c>>2];v[c>>2]=b+4;b=v[b>>2];v[a>>2]=b;v[a+4>>2]=b>>31;return;case 2:b=v[c>>2];v[c>>2]=b+4;v[a>>2]=v[b>>2];v[a+4>>2]=0;return;case 3:b=v[c>>2]+7&-8;v[c>>2]=b+8;c=v[b+4>>2];v[a>>2]=v[b>>2];v[a+4>>2]=c;return;case 4:b=v[c>>2];v[c>>2]=b+4;b=u[b>>1];v[a>>2]=b;v[a+4>>2]=b>>31;return;case 5:b=v[c>>2];v[c>>2]=b+4;v[a>>2]=x[b>>1];v[a+4>>2]=0;return;case 6:b=v[c>>2];v[c>>2]=b+4;b=t[b|0];v[a>>2]=b;v[a+4>>2]=b>>31;return;case 7:b=v[c>>2];v[c>>2]=b+4;v[a>>2]=w[b|0];v[a+4>>2]=0;return;case 8:b=v[c>>2]+7&-8;v[c>>2]=b+8;A[a>>3]=A[b>>3];return;case 9:break b;default:break a}}R[0](a,c)}}function W(a,b){var c=0,d=0,e=0,f=0,g=0;e=P-16|0;P=e;v[e+12>>2]=b;c=v[291];d=P-208|0;P=d;v[d+204>>2]=b;aa(d+160|0,0,40);v[d+200>>2]=v[d+204>>2];a:{if((ca(0,a,d+200|0,d+80|0,d+160|0)|0)<0){break a}f=v[c+76>>2]>=0;b=v[c>>2];if(t[c+74|0]<=0){v[c>>2]=b&-33}g=b&32;b:{if(v[c+48>>2]){ca(c,a,d+200|0,d+80|0,d+160|0);break b}v[c+48>>2]=80;v[c+16>>2]=d+80;v[c+28>>2]=d;v[c+20>>2]=d;b=v[c+44>>2];v[c+44>>2]=d;ca(c,a,d+200|0,d+80|0,d+160|0);if(!b){break b}R[v[c+36>>2]](c,0,0)|0;v[c+48>>2]=0;v[c+44>>2]=b;v[c+28>>2]=0;v[c+16>>2]=0;v[c+20>>2]=0}v[c>>2]=v[c>>2]|g;if(!f){break a}}P=d+208|0;P=e+16|0}function Y(a,b,c){var d=0,e=0,f=0,g=0;if(!(w[a|0]&32)){a:{e=b;b=c;d=a;a=v[d+16>>2];b:{if(!a){a=w[d+74|0];t[d+74|0]=a-1|a;a=v[d>>2];c:{if(a&8){v[d>>2]=a|32;a=-1;break c}v[d+4>>2]=0;v[d+8>>2]=0;a=v[d+44>>2];v[d+28>>2]=a;v[d+20>>2]=a;v[d+16>>2]=a+v[d+48>>2];a=0}if(a){break b}a=v[d+16>>2]}g=v[d+20>>2];if(a-g>>>0<b>>>0){R[v[d+36>>2]](d,e,c)|0;break a}d:{if(t[d+75|0]>-1){a=c;while(1){b=a;f=c;if(!a){break d}a=b-1|0;if(w[e+a|0]!=10){continue}break}if(R[v[d+36>>2]](d,e,b)>>>0<b>>>0){break b}e=b+e|0;g=v[d+20>>2];f=c-b|0;break d}f=c}b=f;ba(g,e,b);v[d+20>>2]=b+v[d+20>>2]}}}}function ia(a,b){if(!a){return 0}a:{b:{if(a){if(b>>>0<=127){break b}c:{if(!v[728]){if((b&-128)==57216){break b}break c}if(b>>>0<=2047){t[a+1|0]=b&63|128;t[a|0]=b>>>6|192;a=2;break a}if(!((b&-8192)!=57344?b>>>0>=55296:0)){t[a+2|0]=b&63|128;t[a|0]=b>>>12|224;t[a+1|0]=b>>>6&63|128;a=3;break a}if(b-65536>>>0<=1048575){t[a+3|0]=b&63|128;t[a|0]=b>>>18|240;t[a+2|0]=b>>>6&63|128;t[a+1|0]=b>>>12&63|128;a=4;break a}}v[456]=25;a=-1}else{a=1}break a}t[a|0]=b;a=1}return a}function Z(a,b){var c=0,d=0,e=0,f=0,g=0,h=0;c=65535;a:{if(b>>>0>15){break a}d=x[a>>1];if(!(w[a+12|0]<1<<b-1?d:1)){break a}while(1){if((b|0)==(f|0)){c=g;break a}c=w[a+12|0];b:{if(c){e=w[a+11|0];break b}c=65535;if(!d){break a}c=x[a+2>>1];h=c+1|0;u[a+2>>1]=h;e=w[(a+c|0)+13|0];t[a+11|0]=e;c=128;if((h&65535)!=(d|0)){break b}d=0;u[a>>1]=0;u[a+2>>1]=0}t[a+12|0]=c>>>1;g=g<<1|(c&e)!=0;f=f+1|0;continue}}return c&65535}function da(a,b,c,d){var e=0,f=0,g=0,h=0;a:{if(!((b|0)!=8|w[a+14|0]!=128)){b=v[d>>2];d=v[d+8>>2];a=v[d>>2];v[d>>2]=a+1;t[a+b|0]=c;break a}while(1){if((b|0)<1){break a}e=w[a+14|0];b=b-1|0;if(c>>>b&1){t[a+13|0]=e|w[a+13|0]}e=e>>>1|0;t[a+14|0]=e;if(e){continue}t[a+14|0]=128;g=w[a+13|0];h=v[d>>2];f=v[d+8>>2];e=v[f>>2];v[f>>2]=e+1;t[e+h|0]=g;t[a+13|0]=0;continue}}}function X(a,b,c,d,e){var f=0;f=P-256|0;P=f;if(!(e&73728|(c|0)<=(d|0))){c=c-d|0;d=c>>>0<256;aa(f,b&255,d?c:256);if(!d){while(1){Y(a,f,256);c=c-256|0;if(c>>>0>255){continue}break}}Y(a,f,c)}P=f+256|0}function ka(a,b){var c=0,d=0;a:{c=w[a+10|0];b:{if(c>>>0>=9){d=x[a+8>>1]>>>c-8|0;c=8;break b}if(!c){break a}d=w[a+8|0]}da(a,c,d&255,b);t[a+10|0]=w[a+10|0]-c;return c}return 0}function ha(a){var b=0,c=0,d=0;b=v[a>>2];while(1){c=t[b|0];if($(c)){b=b+1|0;v[a>>2]=b;d=(B(d,10)+c|0)-48|0;continue}break}return d}function fa(a){var b=0;if(!a){return-1}t[a+11|0]=w[a+11|0]|1;b=w[a+12|0];if(b){return(b|0)!=9}t[a+12|0]=1;return 1}function ba(a,b,c){if(c){while(1){t[a|0]=w[b|0];a=a+1|0;b=b+1|0;c=c-1|0;if(c){continue}break}}}function ja(a,b){var c=0,d=0;d=v[a>>2];c=v[a+8>>2];a=v[c>>2];v[c>>2]=a+1;t[a+d|0]=b}function aa(a,b,c){if(c){while(1){t[a|0]=b;a=a+1|0;c=c-1|0;if(c){continue}break}}}function oa(a){if(!a){return-1}return w[a+10|0]<=5?x[a>>1]!=0:1}function ua(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;Q=0;return 0}function _(a){return y[v[a+8>>2]>>2]<y[a+4>>2]}function ra(a){a=a|0;a=P-a&-16;P=a;return a|0}function ma(a){return t[a+11|0]&1}function $(a){return a-48>>>0<10}function la(a,b,c){da(a,1,c,b)}function va(a){a=a|0;return 0}function ta(){return P|0}function sa(a){a=a|0;P=a}function pa(){}
// EMSCRIPTEN_END_FUNCS
e=w;p(U);var R=c([null,va,wa,ua]);function S(){return s.byteLength/65536|0}return{"c":pa,"d":qa,"e":xa,"f":ta,"g":sa,"h":ra,"i":R}}return T(V)}
// EMSCRIPTEN_END_ASM




)(asmLibraryArg)},instantiate:function(binary,info){return{then:function(ok){var module=new WebAssembly.Module(binary);ok({"instance":new WebAssembly.Instance(module)})}}},RuntimeError:Error};wasmBinary=[];if(typeof WebAssembly!=="object"){abort("no native wasm support detected")}var wasmMemory;var ABORT=false;var EXITSTATUS;function assert(condition,text){if(!condition){abort("Assertion failed: "+text)}}function getCFunc(ident){var func=Module["_"+ident];assert(func,"Cannot call unknown function "+ident+", make sure it is exported");return func}function ccall(ident,returnType,argTypes,args,opts){var toC={"string":function(str){var ret=0;if(str!==null&&str!==undefined&&str!==0){var len=(str.length<<2)+1;ret=stackAlloc(len);stringToUTF8(str,ret,len)}return ret},"array":function(arr){var ret=stackAlloc(arr.length);writeArrayToMemory(arr,ret);return ret}};function convertReturnValue(ret){if(returnType==="string")return UTF8ToString(ret);if(returnType==="boolean")return Boolean(ret);return ret}var func=getCFunc(ident);var cArgs=[];var stack=0;if(args){for(var i=0;i<args.length;i++){var converter=toC[argTypes[i]];if(converter){if(stack===0)stack=stackSave();cArgs[i]=converter(args[i])}else{cArgs[i]=args[i]}}}var ret=func.apply(null,cArgs);ret=convertReturnValue(ret);if(stack!==0)stackRestore(stack);return ret}var UTF8Decoder=typeof TextDecoder!=="undefined"?new TextDecoder("utf8"):undefined;function UTF8ArrayToString(heap,idx,maxBytesToRead){var endIdx=idx+maxBytesToRead;var endPtr=idx;while(heap[endPtr]&&!(endPtr>=endIdx))++endPtr;if(endPtr-idx>16&&heap.subarray&&UTF8Decoder){return UTF8Decoder.decode(heap.subarray(idx,endPtr))}else{var str="";while(idx<endPtr){var u0=heap[idx++];if(!(u0&128)){str+=String.fromCharCode(u0);continue}var u1=heap[idx++]&63;if((u0&224)==192){str+=String.fromCharCode((u0&31)<<6|u1);continue}var u2=heap[idx++]&63;if((u0&240)==224){u0=(u0&15)<<12|u1<<6|u2}else{u0=(u0&7)<<18|u1<<12|u2<<6|heap[idx++]&63}if(u0<65536){str+=String.fromCharCode(u0)}else{var ch=u0-65536;str+=String.fromCharCode(55296|ch>>10,56320|ch&1023)}}}return str}function UTF8ToString(ptr,maxBytesToRead){return ptr?UTF8ArrayToString(HEAPU8,ptr,maxBytesToRead):""}function stringToUTF8Array(str,heap,outIdx,maxBytesToWrite){if(!(maxBytesToWrite>0))return 0;var startIdx=outIdx;var endIdx=outIdx+maxBytesToWrite-1;for(var i=0;i<str.length;++i){var u=str.charCodeAt(i);if(u>=55296&&u<=57343){var u1=str.charCodeAt(++i);u=65536+((u&1023)<<10)|u1&1023}if(u<=127){if(outIdx>=endIdx)break;heap[outIdx++]=u}else if(u<=2047){if(outIdx+1>=endIdx)break;heap[outIdx++]=192|u>>6;heap[outIdx++]=128|u&63}else if(u<=65535){if(outIdx+2>=endIdx)break;heap[outIdx++]=224|u>>12;heap[outIdx++]=128|u>>6&63;heap[outIdx++]=128|u&63}else{if(outIdx+3>=endIdx)break;heap[outIdx++]=240|u>>18;heap[outIdx++]=128|u>>12&63;heap[outIdx++]=128|u>>6&63;heap[outIdx++]=128|u&63}}heap[outIdx]=0;return outIdx-startIdx}function stringToUTF8(str,outPtr,maxBytesToWrite){return stringToUTF8Array(str,HEAPU8,outPtr,maxBytesToWrite)}function writeArrayToMemory(array,buffer){HEAP8.set(array,buffer)}var buffer,HEAP8,HEAPU8,HEAP16,HEAPU16,HEAP32,HEAPU32,HEAPF32,HEAPF64;function updateGlobalBufferAndViews(buf){buffer=buf;Module["HEAP8"]=HEAP8=new Int8Array(buf);Module["HEAP16"]=HEAP16=new Int16Array(buf);Module["HEAP32"]=HEAP32=new Int32Array(buf);Module["HEAPU8"]=HEAPU8=new Uint8Array(buf);Module["HEAPU16"]=HEAPU16=new Uint16Array(buf);Module["HEAPU32"]=HEAPU32=new Uint32Array(buf);Module["HEAPF32"]=HEAPF32=new Float32Array(buf);Module["HEAPF64"]=HEAPF64=new Float64Array(buf)}var INITIAL_MEMORY=Module["INITIAL_MEMORY"]||16777216;if(Module["wasmMemory"]){wasmMemory=Module["wasmMemory"]}else{wasmMemory=new WebAssembly.Memory({"initial":INITIAL_MEMORY/65536,"maximum":INITIAL_MEMORY/65536})}if(wasmMemory){buffer=wasmMemory.buffer}INITIAL_MEMORY=buffer.byteLength;updateGlobalBufferAndViews(buffer);var wasmTable;var __ATPRERUN__=[];var __ATINIT__=[];var __ATPOSTRUN__=[];var runtimeInitialized=false;function preRun(){if(Module["preRun"]){if(typeof Module["preRun"]=="function")Module["preRun"]=[Module["preRun"]];while(Module["preRun"].length){addOnPreRun(Module["preRun"].shift())}}callRuntimeCallbacks(__ATPRERUN__)}function initRuntime(){runtimeInitialized=true;callRuntimeCallbacks(__ATINIT__)}function postRun(){if(Module["postRun"]){if(typeof Module["postRun"]=="function")Module["postRun"]=[Module["postRun"]];while(Module["postRun"].length){addOnPostRun(Module["postRun"].shift())}}callRuntimeCallbacks(__ATPOSTRUN__)}function addOnPreRun(cb){__ATPRERUN__.unshift(cb)}function addOnInit(cb){__ATINIT__.unshift(cb)}function addOnPostRun(cb){__ATPOSTRUN__.unshift(cb)}var runDependencies=0;var runDependencyWatcher=null;var dependenciesFulfilled=null;function addRunDependency(id){runDependencies++;if(Module["monitorRunDependencies"]){Module["monitorRunDependencies"](runDependencies)}}function removeRunDependency(id){runDependencies--;if(Module["monitorRunDependencies"]){Module["monitorRunDependencies"](runDependencies)}if(runDependencies==0){if(runDependencyWatcher!==null){clearInterval(runDependencyWatcher);runDependencyWatcher=null}if(dependenciesFulfilled){var callback=dependenciesFulfilled;dependenciesFulfilled=null;callback()}}}Module["preloadedImages"]={};Module["preloadedAudios"]={};function abort(what){if(Module["onAbort"]){Module["onAbort"](what)}what+="";err(what);ABORT=true;EXITSTATUS=1;what="abort("+what+"). Build with -s ASSERTIONS=1 for more info.";var e=new WebAssembly.RuntimeError(what);throw e}var dataURIPrefix="data:application/octet-stream;base64,";function isDataURI(filename){return filename.startsWith(dataURIPrefix)}function isFileURI(filename){return filename.startsWith("file://")}var wasmBinaryFile="heatshrink_wrapper.out.wasm";if(!isDataURI(wasmBinaryFile)){wasmBinaryFile=locateFile(wasmBinaryFile)}function getBinary(file){try{if(file==wasmBinaryFile&&wasmBinary){return new Uint8Array(wasmBinary)}var binary=tryParseAsDataURI(file);if(binary){return binary}if(readBinary){return readBinary(file)}else{throw"both async and sync fetching of the wasm failed"}}catch(err){abort(err)}}function getBinaryPromise(){if(!wasmBinary&&(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER)){if(typeof fetch==="function"&&!isFileURI(wasmBinaryFile)){return fetch(wasmBinaryFile,{credentials:"same-origin"}).then(function(response){if(!response["ok"]){throw"failed to load wasm binary file at '"+wasmBinaryFile+"'"}return response["arrayBuffer"]()}).catch(function(){return getBinary(wasmBinaryFile)})}else{if(readAsync){return new Promise(function(resolve,reject){readAsync(wasmBinaryFile,function(response){resolve(new Uint8Array(response))},reject)})}}}return Promise.resolve().then(function(){return getBinary(wasmBinaryFile)})}function createWasm(){var info={"a":asmLibraryArg};function receiveInstance(instance,module){var exports=instance.exports;Module["asm"]=exports;wasmTable=Module["asm"]["i"];addOnInit(Module["asm"]["c"]);removeRunDependency("wasm-instantiate")}addRunDependency("wasm-instantiate");function receiveInstantiationResult(result){receiveInstance(result["instance"])}function instantiateArrayBuffer(receiver){return getBinaryPromise().then(function(binary){var result=WebAssembly.instantiate(binary,info);return result}).then(receiver,function(reason){err("failed to asynchronously prepare wasm: "+reason);abort(reason)})}function instantiateAsync(){if(!wasmBinary&&typeof WebAssembly.instantiateStreaming==="function"&&!isDataURI(wasmBinaryFile)&&!isFileURI(wasmBinaryFile)&&typeof fetch==="function"){return fetch(wasmBinaryFile,{credentials:"same-origin"}).then(function(response){var result=WebAssembly.instantiateStreaming(response,info);return result.then(receiveInstantiationResult,function(reason){err("wasm streaming compile failed: "+reason);err("falling back to ArrayBuffer instantiation");return instantiateArrayBuffer(receiveInstantiationResult)})})}else{return instantiateArrayBuffer(receiveInstantiationResult)}}if(Module["instantiateWasm"]){try{var exports=Module["instantiateWasm"](info,receiveInstance);return exports}catch(e){err("Module.instantiateWasm callback failed with error: "+e);return false}}instantiateAsync();return{}}function callRuntimeCallbacks(callbacks){while(callbacks.length>0){var callback=callbacks.shift();if(typeof callback=="function"){callback(Module);continue}var func=callback.func;if(typeof func==="number"){if(callback.arg===undefined){wasmTable.get(func)()}else{wasmTable.get(func)(callback.arg)}}else{func(callback.arg===undefined?null:callback.arg)}}}var SYSCALLS={mappings:{},buffers:[null,[],[]],printChar:function(stream,curr){var buffer=SYSCALLS.buffers[stream];if(curr===0||curr===10){(stream===1?out:err)(UTF8ArrayToString(buffer,0));buffer.length=0}else{buffer.push(curr)}},varargs:undefined,get:function(){SYSCALLS.varargs+=4;var ret=HEAP32[SYSCALLS.varargs-4>>2];return ret},getStr:function(ptr){var ret=UTF8ToString(ptr);return ret},get64:function(low,high){return low}};function _fd_write(fd,iov,iovcnt,pnum){var num=0;for(var i=0;i<iovcnt;i++){var ptr=HEAP32[iov+i*8>>2];var len=HEAP32[iov+(i*8+4)>>2];for(var j=0;j<len;j++){SYSCALLS.printChar(fd,HEAPU8[ptr+j])}num+=len}HEAP32[pnum>>2]=num;return 0}var ASSERTIONS=false;function intArrayToString(array){var ret=[];for(var i=0;i<array.length;i++){var chr=array[i];if(chr>255){if(ASSERTIONS){assert(false,"Character code "+chr+" ("+String.fromCharCode(chr)+")  at offset "+i+" not in 0x00-0xFF.")}chr&=255}ret.push(String.fromCharCode(chr))}return ret.join("")}var decodeBase64=typeof atob==="function"?atob:function(input){var keyStr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";var output="";var chr1,chr2,chr3;var enc1,enc2,enc3,enc4;var i=0;input=input.replace(/[^A-Za-z0-9\+\/\=]/g,"");do{enc1=keyStr.indexOf(input.charAt(i++));enc2=keyStr.indexOf(input.charAt(i++));enc3=keyStr.indexOf(input.charAt(i++));enc4=keyStr.indexOf(input.charAt(i++));chr1=enc1<<2|enc2>>4;chr2=(enc2&15)<<4|enc3>>2;chr3=(enc3&3)<<6|enc4;output=output+String.fromCharCode(chr1);if(enc3!==64){output=output+String.fromCharCode(chr2)}if(enc4!==64){output=output+String.fromCharCode(chr3)}}while(i<input.length);return output};function intArrayFromBase64(s){if(typeof ENVIRONMENT_IS_NODE==="boolean"&&ENVIRONMENT_IS_NODE){var buf;try{buf=Buffer.from(s,"base64")}catch(_){buf=new Buffer(s,"base64")}return new Uint8Array(buf["buffer"],buf["byteOffset"],buf["byteLength"])}try{var decoded=decodeBase64(s);var bytes=new Uint8Array(decoded.length);for(var i=0;i<decoded.length;++i){bytes[i]=decoded.charCodeAt(i)}return bytes}catch(_){throw new Error("Converting base64 string to bytes failed.")}}function tryParseAsDataURI(filename){if(!isDataURI(filename)){return}return intArrayFromBase64(filename.slice(dataURIPrefix.length))}var asmLibraryArg={"b":_fd_write,"a":wasmMemory};var asm=createWasm();var ___wasm_call_ctors=Module["___wasm_call_ctors"]=function(){return(___wasm_call_ctors=Module["___wasm_call_ctors"]=Module["asm"]["c"]).apply(null,arguments)};var _compress=Module["_compress"]=function(){return(_compress=Module["_compress"]=Module["asm"]["d"]).apply(null,arguments)};var _decompress=Module["_decompress"]=function(){return(_decompress=Module["_decompress"]=Module["asm"]["e"]).apply(null,arguments)};var stackSave=Module["stackSave"]=function(){return(stackSave=Module["stackSave"]=Module["asm"]["f"]).apply(null,arguments)};var stackRestore=Module["stackRestore"]=function(){return(stackRestore=Module["stackRestore"]=Module["asm"]["g"]).apply(null,arguments)};var stackAlloc=Module["stackAlloc"]=function(){return(stackAlloc=Module["stackAlloc"]=Module["asm"]["h"]).apply(null,arguments)};Module["ccall"]=ccall;var calledRun;function ExitStatus(status){this.name="ExitStatus";this.message="Program terminated with exit("+status+")";this.status=status}dependenciesFulfilled=function runCaller(){if(!calledRun)run();if(!calledRun)dependenciesFulfilled=runCaller};function run(args){args=args||arguments_;if(runDependencies>0){return}preRun();if(runDependencies>0){return}function doRun(){if(calledRun)return;calledRun=true;Module["calledRun"]=true;if(ABORT)return;initRuntime();if(Module["onRuntimeInitialized"])Module["onRuntimeInitialized"]();postRun()}if(Module["setStatus"]){Module["setStatus"]("Running...");setTimeout(function(){setTimeout(function(){Module["setStatus"]("")},1);doRun()},1)}else{doRun()}}Module["run"]=run;if(Module["preInit"]){if(typeof Module["preInit"]=="function")Module["preInit"]=[Module["preInit"]];while(Module["preInit"].length>0){Module["preInit"].pop()()}}run();
var HS_LOG_LEVEL = 2;

function heatshrink_compress(inputBuffer) {
        if (inputBuffer.BYTES_PER_ELEMENT!=1) throw new Error("Expecting Byte Array");
        var input_size = inputBuffer.length;
        var output_size = input_size + (input_size/2) + 4;;
        
        var bufIn = Module._malloc(input_size);
        Module.HEAPU8.set(inputBuffer, bufIn);
        // int compress(uint8_t *input, uint32_t input_size, uint8_t *output, uint32_t output_size, int log_lvl)
        output_size = Module.ccall('compress', 'number', ['number','number','number','number','number'], [bufIn,input_size,0,0,HS_LOG_LEVEL/*log level*/])+1;
        var bufOut = Module._malloc(output_size);
        output_size = Module.ccall('compress', 'number', ['number','number','number','number','number'], [bufIn,input_size,bufOut,output_size,HS_LOG_LEVEL/*log level*/]);
        // console.log("Compressed to "+output_size);

        var outputBuffer = new Uint8Array(output_size);
        for (var i=0;i<output_size;i++) outputBuffer[i]=Module.HEAPU8[bufOut+i];

        Module._free(bufIn);
        Module._free(bufOut);

        return outputBuffer;
}

function heatshrink_decompress(inputBuffer) {
        if (inputBuffer.BYTES_PER_ELEMENT!=1) throw new Error("Expecting Byte Array");
        var input_size = inputBuffer.length;
        var output_size = input_size + (input_size/2) + 4;;
        
        var bufIn = Module._malloc(input_size);
        Module.HEAPU8.set(inputBuffer, bufIn);
        // int compress(uint8_t *input, uint32_t input_size, uint8_t *output, uint32_t output_size, int log_lvl)
        output_size = Module.ccall('decompress', 'number', ['number','number','number','number','number'], [bufIn,input_size,0,0,HS_LOG_LEVEL/*log level*/])+1;
        var bufOut = Module._malloc(output_size);
        output_size = Module.ccall('decompress', 'number', ['number','number','number','number','number'], [bufIn,input_size,bufOut,output_size,HS_LOG_LEVEL/*log level*/]);
        // console.log("Compressed to "+output_size);

        var outputBuffer = new Uint8Array(output_size);
        for (var i=0;i<output_size;i++) outputBuffer[i]=Module.HEAPU8[bufOut+i];

        Module._free(bufIn);
        Module._free(bufOut);

        return outputBuffer;
}
