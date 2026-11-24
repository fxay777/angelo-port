(()=>{var Dl="137";var Yh=0,jl=1,Jh=2;var Iu=1,Zh=2,vr=3,ai=0,mt=1,Ft=2,Du=1;var On=0,wr=1,Nt=2,Kl=3,Ql=4,$h=5,Ni=100,jh=101,Kh=102,ec=103,tc=104,Qh=200,ed=201,td=202,nd=203,Fu=204,zu=205,id=206,rd=207,sd=208,od=209,ad=210,ld=0,cd=1,ud=2,xa=3,hd=4,dd=5,fd=6,pd=7,bo=0,md=1,gd=2,Un=0,xd=1,yd=2,vd=3,_d=4,wd=5,Bu=300,$r=301,jr=302,ya=303,va=304,Mo=306,Fl=307,Er=1e3,Xt=1001,_a=1002,bt=1003,nc=1004;var ic=1005;var Pt=1006,bd=1007;var So=1008;var Hn=1009,Md=1010,Sd=1011,Tr=1012,Ed=1013,Gs=1014,si=1015,Gi=1016,Td=1017,Ad=1018,ki=1020,Rd=1021,Cd=1022,Bt=1023,Ld=1024,Pd=1025,oi=1026,qi=1027,Id=1028,Dd=1029,Fd=1030,zd=1031,Bd=1033,Io=33776,Do=33777,Fo=33778,zo=33779,rc=35840,sc=35841,oc=35842,ac=35843,Nd=36196,lc=37492,cc=37496,uc=37808,hc=37809,dc=37810,fc=37811,pc=37812,mc=37813,gc=37814,xc=37815,yc=37816,vc=37817,_c=37818,wc=37819,bc=37820,Mc=37821,Sc=36492,Od=2200,Ud=2201,Hd=2202,Vs=2300,Ws=2301,Bo=2302,Oi=2400,Ui=2401,qs=2402,zl=2500,Nu=2501,Gd=0;var Wn=3e3,Ke=3001,kd=3200,Vd=3201,ir=0,Wd=1;var No=7680;var qd=519,Ar=35044,Xs=35048;var Ec="300 es",wa=1035,bn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}},At=[];for(let r=0;r<256;r++)At[r]=(r<16?"0":"")+r.toString(16);var ks=Math.PI/180,ba=180/Math.PI;function nn(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(At[r&255]+At[r>>8&255]+At[r>>16&255]+At[r>>24&255]+"-"+At[e&255]+At[e>>8&255]+"-"+At[e>>16&15|64]+At[e>>24&255]+"-"+At[t&63|128]+At[t>>8&255]+"-"+At[t>>16&255]+At[t>>24&255]+At[n&255]+At[n>>8&255]+At[n>>16&255]+At[n>>24&255]).toUpperCase()}function Ht(r,e,t){return Math.max(e,Math.min(t,r))}function Xd(r,e){return(r%e+e)%e}function Oo(r,e,t){return(1-t)*r+t*e}function Tc(r){return(r&r-1)===0&&r!==0}function Yd(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}var Q=class{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Q.prototype.isVector2=!0;var Mt=class{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,s,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],m=n[8],x=i[0],y=i[3],g=i[6],p=i[1],w=i[4],_=i[7],S=i[2],T=i[5],R=i[8];return s[0]=o*x+a*p+l*S,s[3]=o*y+a*w+l*T,s[6]=o*g+a*_+l*R,s[1]=c*x+u*p+d*S,s[4]=c*y+u*w+d*T,s[7]=c*g+u*_+d*R,s[2]=h*x+f*p+m*S,s[5]=h*y+f*w+m*T,s[8]=h*g+f*_+m*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*s,f=c*s-o*l,m=t*d+n*h+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return e[0]=d*x,e[1]=(i*c-u*n)*x,e[2]=(a*n-i*o)*x,e[3]=h*x,e[4]=(u*t-i*l)*x,e[5]=(i*s-a*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*s)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){let n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){let t=Math.cos(e),n=Math.sin(e),i=this.elements,s=i[0],o=i[3],a=i[6],l=i[1],c=i[4],u=i[7];return i[0]=t*s+n*l,i[3]=t*o+n*c,i[6]=t*a+n*u,i[1]=-n*s+t*l,i[4]=-n*o+t*c,i[7]=-n*a+t*u,this}translate(e,t){let n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Mt.prototype.isMatrix3=!0;function Ou(r){for(let e=r.length-1;e>=0;--e)if(r[e]>65535)return!0;return!1}function Rr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}var Uu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Kt={h:0,s:0,l:0},ss={h:0,s:0,l:0};function Uo(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function Vi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ho(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var re=class{constructor(e,t,n){return t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}setRGB(e,t,n){return this.r=e,this.g=t,this.b=n,this}setHSL(e,t,n){if(e=Xd(e,1),t=Ht(t,0,1),n=Ht(n,0,1),t===0)this.r=this.g=this.b=n;else{let i=n<=.5?n*(1+t):n+t-n*t,s=2*n-i;this.r=Uo(s,i,e+1/3),this.g=Uo(s,i,e),this.b=Uo(s,i,e-1/3)}return this}setStyle(e){function t(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let i,s=n[1],o=n[2];switch(s){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(i[1],10))/255,this.g=Math.min(255,parseInt(i[2],10))/255,this.b=Math.min(255,parseInt(i[3],10))/255,t(i[4]),this;if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(i[1],10))/100,this.g=Math.min(100,parseInt(i[2],10))/100,this.b=Math.min(100,parseInt(i[3],10))/100,t(i[4]),this;break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){let a=parseFloat(i[1])/360,l=parseInt(i[2],10)/100,c=parseInt(i[3],10)/100;return t(i[4]),this.setHSL(a,l,c)}break}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let i=n[1],s=i.length;if(s===3)return this.r=parseInt(i.charAt(0)+i.charAt(0),16)/255,this.g=parseInt(i.charAt(1)+i.charAt(1),16)/255,this.b=parseInt(i.charAt(2)+i.charAt(2),16)/255,this;if(s===6)return this.r=parseInt(i.charAt(0)+i.charAt(1),16)/255,this.g=parseInt(i.charAt(2)+i.charAt(3),16)/255,this.b=parseInt(i.charAt(4)+i.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){let t=Uu[e.toLowerCase()];return t!==void 0?this.setHex(t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vi(e.r),this.g=Vi(e.g),this.b=Vi(e.b),this}copyLinearToSRGB(e){return this.r=Ho(e.r),this.g=Ho(e.g),this.b=Ho(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){let t=this.r,n=this.g,i=this.b,s=Math.max(t,n,i),o=Math.min(t,n,i),a,l,c=(o+s)/2;if(o===s)a=0,l=0;else{let u=s-o;switch(l=c<=.5?u/(s+o):u/(2-s-o),s){case t:a=(n-i)/u+(n<i?6:0);break;case n:a=(i-t)/u+2;break;case i:a=(t-n)/u+4;break}a/=6}return e.h=a,e.s=l,e.l=c,e}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(e,t,n){return this.getHSL(Kt),Kt.h+=e,Kt.s+=t,Kt.l+=n,this.setHSL(Kt.h,Kt.s,Kt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Kt),e.getHSL(ss);let n=Oo(Kt.h,ss.h,t),i=Oo(Kt.s,ss.s,t),s=Oo(Kt.l,ss.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}};re.NAMES=Uu;re.prototype.isColor=!0;re.prototype.r=1;re.prototype.g=1;re.prototype.b=1;var yi,Mn=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{yi===void 0&&(yi=Rr("canvas")),yi.width=e.width,yi.height=e.height;let n=yi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=yi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=Rr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Vi(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Vi(t[n]/255)*255):t[n]=Vi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Jd=0,Rt=class r extends bn{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,n=Xt,i=Xt,s=Pt,o=So,a=Bt,l=Hn,c=1,u=Wn){super(),Object.defineProperty(this,"id",{value:Jd++}),this.uuid=nn(),this.name="",this.image=e,this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Q(0,0),this.repeat=new Q(1,1),this.center=new Q(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){let i=this.image;if(i.uuid===void 0&&(i.uuid=nn()),!t&&e.images[i.uuid]===void 0){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Go(i[o].image)):s.push(Go(i[o]))}else s=Go(i);e.images[i.uuid]={uuid:i.uuid,url:s}}n.image=i.uuid}return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Er:e.x=e.x-Math.floor(e.x);break;case Xt:e.x=e.x<0?0:1;break;case _a:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Er:e.y=e.y-Math.floor(e.y);break;case Xt:e.y=e.y<0?0:1;break;case _a:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&this.version++}};Rt.DEFAULT_IMAGE=void 0;Rt.DEFAULT_MAPPING=Bu;Rt.prototype.isTexture=!0;function Go(r){return typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&r instanceof ImageBitmap?Mn.getDataURL(r):r.data?{data:Array.prototype.slice.call(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Ze=class{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],m=l[9],x=l[2],y=l[6],g=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-x)<.01&&Math.abs(m-y)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+x)<.1&&Math.abs(m+y)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(c+1)/2,_=(f+1)/2,S=(g+1)/2,T=(u+h)/4,R=(d+x)/4,P=(m+y)/4;return w>_&&w>S?w<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(w),i=T/n,s=R/n):_>S?_<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(_),n=T/i,s=P/i):S<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(S),n=R/s,i=P/s),this.set(n,i,s,t),this}let p=Math.sqrt((y-m)*(y-m)+(d-x)*(d-x)+(h-u)*(h-u));return Math.abs(p)<.001&&(p=1),this.x=(y-m)/p,this.y=(d-x)/p,this.z=(h-u)/p,this.w=Math.acos((c+f+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ze.prototype.isVector4=!0;var Gt=class extends bn{constructor(e,t,n={}){super(),this.width=e,this.height=t,this.depth=1,this.scissor=new Ze(0,0,e,t),this.scissorTest=!1,this.viewport=new Ze(0,0,e,t),this.texture=new Rt(void 0,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.image={width:e,height:t,depth:1},this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Pt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null}setTexture(e){e.image={width:this.width,height:this.height,depth:this.depth},this.texture=e}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.image=Object.assign({},e.texture.image),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}};Gt.prototype.isWebGLRenderTarget=!0;var Ma=class extends Gt{constructor(e,t,n){super(e,t);let i=this.texture;this.texture=[];for(let s=0;s<n;s++)this.texture[s]=i.clone()}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.texture.length;i<s;i++)this.texture[i].image.width=e,this.texture[i].image.height=t,this.texture[i].image.depth=n;this.dispose()}return this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t),this}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this.texture.length=0;for(let t=0,n=e.texture.length;t<n;t++)this.texture[t]=e.texture[t].clone();return this}};Ma.prototype.isWebGLMultipleRenderTargets=!0;var Cr=class extends Gt{constructor(e,t,n={}){super(e,t,n),this.samples=4,this.ignoreDepthForMultisampleCopy=n.ignoreDepth!==void 0?n.ignoreDepth:!0,this.useRenderToTexture=n.useRenderToTexture!==void 0?n.useRenderToTexture:!1,this.useRenderbuffer=this.useRenderToTexture===!1}copy(e){return super.copy.call(this,e),this.samples=e.samples,this.useRenderToTexture=e.useRenderToTexture,this.useRenderbuffer=e.useRenderbuffer,this}};Cr.prototype.isWebGLMultisampleRenderTarget=!0;var vt=class{constructor(e=0,t=0,n=0,i=1){this._x=e,this._y=t,this._z=n,this._w=i}static slerp(e,t,n,i){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,i)}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],d=n[i+3],h=s[o+0],f=s[o+1],m=s[o+2],x=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=f,e[t+2]=m,e[t+3]=x;return}if(d!==x||l!==h||c!==f||u!==m){let y=1-a,g=l*h+c*f+u*m+d*x,p=g>=0?1:-1,w=1-g*g;if(w>Number.EPSILON){let S=Math.sqrt(w),T=Math.atan2(S,g*p);y=Math.sin(y*T)/S,a=Math.sin(a*T)/S}let _=a*p;if(l=l*y+h*_,c=c*y+f*_,u=u*y+m*_,d=d*y+x*_,y===1-a){let S=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=S,c*=S,u*=S,d*=S}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,o){let a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],d=s[o],h=s[o+1],f=s[o+2],m=s[o+3];return e[t]=a*m+u*d+l*f-c*h,e[t+1]=l*m+u*h+c*d-a*f,e[t+2]=c*m+u*f+a*h-l*d,e[t+3]=u*m-a*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");let n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),d=a(s/2),h=l(n/2),f=l(i/2),m=l(s/2);switch(o){case"XYZ":this._x=h*u*d+c*f*m,this._y=c*f*d-h*u*m,this._z=c*u*m+h*f*d,this._w=c*u*d-h*f*m;break;case"YXZ":this._x=h*u*d+c*f*m,this._y=c*f*d-h*u*m,this._z=c*u*m-h*f*d,this._w=c*u*d+h*f*m;break;case"ZXY":this._x=h*u*d-c*f*m,this._y=c*f*d+h*u*m,this._z=c*u*m+h*f*d,this._w=c*u*d-h*f*m;break;case"ZYX":this._x=h*u*d-c*f*m,this._y=c*f*d+h*u*m,this._z=c*u*m-h*f*d,this._w=c*u*d+h*f*m;break;case"YZX":this._x=h*u*d+c*f*m,this._y=c*f*d+h*u*m,this._z=c*u*m-h*f*d,this._w=c*u*d-h*f*m;break;case"XZY":this._x=h*u*d-c*f*m,this._y=c*f*d-h*u*m,this._z=c*u*m+h*f*d,this._w=c*u*d+h*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+a+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(u-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ht(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,s=this._z,o=this._w,a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this._onChangeCallback(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*d+this._w*h,this._x=n*d+this._x*h,this._y=i*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}};vt.prototype.isQuaternion=!0;var b=class{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(Ac.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ac.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*i-a*n,u=l*n+a*t-s*i,d=l*i+s*n-o*t,h=-s*t-o*n-a*i;return this.x=c*l+h*-s+u*-a-d*-o,this.y=u*l+h*-o+d*-s-c*-a,this.z=d*l+h*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ko.copy(this).projectOnVector(e),this.sub(ko)}reflect(e){return this.sub(ko.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};b.prototype.isVector3=!0;var ko=new b,Ac=new vt,Yt=class{constructor(e=new b(1/0,1/0,1/0),t=new b(-1/0,-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){let u=e[l],d=e[l+1],h=e[l+2];u<t&&(t=u),d<n&&(n=d),h<i&&(i=h),u>s&&(s=u),d>o&&(o=d),h>a&&(a=h)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){let u=e.getX(l),d=e.getY(l),h=e.getZ(l);u<t&&(t=u),d<n&&(n=d),h<i&&(i=h),u>s&&(s=u),d>o&&(o=d),h>a&&(a=h)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ti.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){let s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)ti.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(ti)}else n.boundingBox===null&&n.computeBoundingBox(),Vo.copy(n.boundingBox),Vo.applyMatrix4(e.matrixWorld),this.union(Vo);let i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ti),ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ur),os.subVectors(this.max,ur),vi.subVectors(e.a,ur),_i.subVectors(e.b,ur),wi.subVectors(e.c,ur),Ln.subVectors(_i,vi),Pn.subVectors(wi,_i),ni.subVectors(vi,wi);let t=[0,-Ln.z,Ln.y,0,-Pn.z,Pn.y,0,-ni.z,ni.y,Ln.z,0,-Ln.x,Pn.z,0,-Pn.x,ni.z,0,-ni.x,-Ln.y,Ln.x,0,-Pn.y,Pn.x,0,-ni.y,ni.x,0];return!Wo(t,vi,_i,wi,os)||(t=[1,0,0,0,1,0,0,0,1],!Wo(t,vi,_i,wi,os))?!1:(as.crossVectors(Ln,Pn),t=[as.x,as.y,as.z],Wo(t,vi,_i,wi,os))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return ti.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(ti).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};Yt.prototype.isBox3=!0;var gn=[new b,new b,new b,new b,new b,new b,new b,new b],ti=new b,Vo=new Yt,vi=new b,_i=new b,wi=new b,Ln=new b,Pn=new b,ni=new b,ur=new b,os=new b,as=new b,ii=new b;function Wo(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){ii.fromArray(r,s);let a=i.x*Math.abs(ii.x)+i.y*Math.abs(ii.y)+i.z*Math.abs(ii.z),l=e.dot(ii),c=t.dot(ii),u=n.dot(ii);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Zd=new Yt,Rc=new b,ls=new b,qo=new b,qn=class{constructor(e=new b,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Zd.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){qo.subVectors(e,this.center);let t=qo.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(qo.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return this.center.equals(e.center)===!0?ls.set(0,0,1).multiplyScalar(e.radius):ls.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Rc.copy(e.center).add(ls)),this.expandByPoint(Rc.copy(e.center).sub(ls)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},xn=new b,Xo=new b,cs=new b,In=new b,Yo=new b,us=new b,Jo=new b,Sn=class{constructor(e=new b,t=new b(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xn.copy(this.direction).multiplyScalar(t).add(this.origin),xn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Xo.copy(e).add(t).multiplyScalar(.5),cs.copy(t).sub(e).normalize(),In.copy(this.origin).sub(Xo);let s=e.distanceTo(t)*.5,o=-this.direction.dot(cs),a=In.dot(this.direction),l=-In.dot(cs),c=In.lengthSq(),u=Math.abs(1-o*o),d,h,f,m;if(u>0)if(d=o*l-a,h=o*a-l,m=s*u,d>=0)if(h>=-m)if(h<=m){let x=1/u;d*=x,h*=x,f=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h<=-m?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c):h<=m?(d=0,h=Math.min(Math.max(-s,-l),s),f=h*(h+2*l)+c):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(d).add(this.origin),i&&i.copy(cs).multiplyScalar(h).add(Xo),f}intersectSphere(e,t){xn.subVectors(e.center,this.origin);let n=xn.dot(this.direction),i=xn.dot(xn)-n*n,s=e.radius*e.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||s>i||((s>n||n!==n)&&(n=s),(o<i||i!==i)&&(i=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,xn)!==null}intersectTriangle(e,t,n,i,s){Yo.subVectors(t,e),us.subVectors(n,e),Jo.crossVectors(Yo,us);let o=this.direction.dot(Jo),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;In.subVectors(this.origin,e);let l=a*this.direction.dot(us.crossVectors(In,us));if(l<0)return null;let c=a*this.direction.dot(Yo.cross(In));if(c<0||l+c>o)return null;let u=-a*In.dot(Jo);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Me=class r{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,s,o,a,l,c,u,d,h,f,m,x,y){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=d,g[14]=h,g[3]=f,g[7]=m,g[11]=x,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/bi.setFromMatrixColumn(e,0).length(),s=1/bi.setFromMatrixColumn(e,1).length(),o=1/bi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");let t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let h=o*u,f=o*d,m=a*u,x=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+m*c,t[5]=h-x*c,t[9]=-a*l,t[2]=x-h*c,t[6]=m+f*c,t[10]=o*l}else if(e.order==="YXZ"){let h=l*u,f=l*d,m=c*u,x=c*d;t[0]=h+x*a,t[4]=m*a-f,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=f*a-m,t[6]=x+h*a,t[10]=o*l}else if(e.order==="ZXY"){let h=l*u,f=l*d,m=c*u,x=c*d;t[0]=h-x*a,t[4]=-o*d,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*u,t[9]=x-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let h=o*u,f=o*d,m=a*u,x=a*d;t[0]=l*u,t[4]=m*c-f,t[8]=h*c+x,t[1]=l*d,t[5]=x*c+h,t[9]=f*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let h=o*l,f=o*c,m=a*l,x=a*c;t[0]=l*u,t[4]=x-h*d,t[8]=m*d+f,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*d+m,t[10]=h-x*d}else if(e.order==="XZY"){let h=o*l,f=o*c,m=a*l,x=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+x,t[5]=o*u,t[9]=f*d-m,t[2]=m*d-f,t[6]=a*u,t[10]=x*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($d,e,jd)}lookAt(e,t,n){let i=this.elements;return Wt.subVectors(e,t),Wt.lengthSq()===0&&(Wt.z=1),Wt.normalize(),Dn.crossVectors(n,Wt),Dn.lengthSq()===0&&(Math.abs(n.z)===1?Wt.x+=1e-4:Wt.z+=1e-4,Wt.normalize(),Dn.crossVectors(n,Wt)),Dn.normalize(),hs.crossVectors(Wt,Dn),i[0]=Dn.x,i[4]=hs.x,i[8]=Wt.x,i[1]=Dn.y,i[5]=hs.y,i[9]=Wt.y,i[2]=Dn.z,i[6]=hs.z,i[10]=Wt.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],m=n[2],x=n[6],y=n[10],g=n[14],p=n[3],w=n[7],_=n[11],S=n[15],T=i[0],R=i[4],P=i[8],W=i[12],U=i[1],v=i[5],C=i[9],I=i[13],F=i[2],z=i[6],D=i[10],V=i[14],K=i[3],me=i[7],H=i[11],Y=i[15];return s[0]=o*T+a*U+l*F+c*K,s[4]=o*R+a*v+l*z+c*me,s[8]=o*P+a*C+l*D+c*H,s[12]=o*W+a*I+l*V+c*Y,s[1]=u*T+d*U+h*F+f*K,s[5]=u*R+d*v+h*z+f*me,s[9]=u*P+d*C+h*D+f*H,s[13]=u*W+d*I+h*V+f*Y,s[2]=m*T+x*U+y*F+g*K,s[6]=m*R+x*v+y*z+g*me,s[10]=m*P+x*C+y*D+g*H,s[14]=m*W+x*I+y*V+g*Y,s[3]=p*T+w*U+_*F+S*K,s[7]=p*R+w*v+_*z+S*me,s[11]=p*P+w*C+_*D+S*H,s[15]=p*W+w*I+_*V+S*Y,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],m=e[3],x=e[7],y=e[11],g=e[15];return m*(+s*l*d-i*c*d-s*a*h+n*c*h+i*a*f-n*l*f)+x*(+t*l*f-t*c*h+s*o*h-i*o*f+i*c*u-s*l*u)+y*(+t*c*d-t*a*f-s*o*d+n*o*f+s*a*u-n*c*u)+g*(-i*a*u-t*l*d+t*a*h+i*o*d-n*o*h+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],m=e[12],x=e[13],y=e[14],g=e[15],p=d*y*c-x*h*c+x*l*f-a*y*f-d*l*g+a*h*g,w=m*h*c-u*y*c-m*l*f+o*y*f+u*l*g-o*h*g,_=u*x*c-m*d*c+m*a*f-o*x*f-u*a*g+o*d*g,S=m*d*l-u*x*l-m*a*h+o*x*h+u*a*y-o*d*y,T=t*p+n*w+i*_+s*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/T;return e[0]=p*R,e[1]=(x*h*s-d*y*s-x*i*f+n*y*f+d*i*g-n*h*g)*R,e[2]=(a*y*s-x*l*s+x*i*c-n*y*c-a*i*g+n*l*g)*R,e[3]=(d*l*s-a*h*s-d*i*c+n*h*c+a*i*f-n*l*f)*R,e[4]=w*R,e[5]=(u*y*s-m*h*s+m*i*f-t*y*f-u*i*g+t*h*g)*R,e[6]=(m*l*s-o*y*s-m*i*c+t*y*c+o*i*g-t*l*g)*R,e[7]=(o*h*s-u*l*s+u*i*c-t*h*c-o*i*f+t*l*f)*R,e[8]=_*R,e[9]=(m*d*s-u*x*s-m*n*f+t*x*f+u*n*g-t*d*g)*R,e[10]=(o*x*s-m*a*s+m*n*c-t*x*c-o*n*g+t*a*g)*R,e[11]=(u*a*s-o*d*s-u*n*c+t*d*c+o*n*f-t*a*f)*R,e[12]=S*R,e[13]=(u*x*i-m*d*i+m*n*h-t*x*h-u*n*y+t*d*y)*R,e[14]=(m*a*i-o*x*i-m*n*l+t*x*l+o*n*y-t*a*y)*R,e[15]=(o*d*i-u*a*i+u*n*l-t*d*l-o*n*h+t*a*h)*R,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,d=a+a,h=s*c,f=s*u,m=s*d,x=o*u,y=o*d,g=a*d,p=l*c,w=l*u,_=l*d,S=n.x,T=n.y,R=n.z;return i[0]=(1-(x+g))*S,i[1]=(f+_)*S,i[2]=(m-w)*S,i[3]=0,i[4]=(f-_)*T,i[5]=(1-(h+g))*T,i[6]=(y+p)*T,i[7]=0,i[8]=(m+w)*R,i[9]=(y-p)*R,i[10]=(1-(h+x))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,s=bi.set(i[0],i[1],i[2]).length(),o=bi.set(i[4],i[5],i[6]).length(),a=bi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Qt.copy(this);let c=1/s,u=1/o,d=1/a;return Qt.elements[0]*=c,Qt.elements[1]*=c,Qt.elements[2]*=c,Qt.elements[4]*=u,Qt.elements[5]*=u,Qt.elements[6]*=u,Qt.elements[8]*=d,Qt.elements[9]*=d,Qt.elements[10]*=d,t.setFromRotationMatrix(Qt),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");let a=this.elements,l=2*s/(t-e),c=2*s/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i),h=-(o+s)/(o-s),f=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=d,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=f,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,s,o){let a=this.elements,l=1/(t-e),c=1/(n-i),u=1/(o-s),d=(t+e)*l,h=(n+i)*c,f=(o+s)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-d,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-f,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Me.prototype.isMatrix4=!0;var bi=new b,Qt=new Me,$d=new b(0,0,0),jd=new b(1,1,1),Dn=new b,hs=new b,Wt=new b,Cc=new Me,Lc=new vt,Xi=class r{constructor(e=0,t=0,n=0,i=r.DefaultOrder){this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],d=i[2],h=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ht(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ht(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ht(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Cc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Cc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Lc.setFromEuler(this),this.setFromQuaternion(Lc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}toVector3(e){return e?e.set(this._x,this._y,this._z):new b(this._x,this._y,this._z)}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}};Xi.prototype.isEuler=!0;Xi.DefaultOrder="XYZ";Xi.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];var Lr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Kd=0,Pc=new b,Mi=new vt,yn=new Me,ds=new b,hr=new b,Qd=new b,ef=new vt,Ic=new b(1,0,0),Dc=new b(0,1,0),Fc=new b(0,0,1),tf={type:"added"},zc={type:"removed"},et=class r extends bn{constructor(){super(),Object.defineProperty(this,"id",{value:Kd++}),this.uuid=nn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DefaultUp.clone();let e=new b,t=new Xi,n=new vt,i=new b(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Me},normalMatrix:{value:new Mt}}),this.matrix=new Me,this.matrixWorld=new Me,this.matrixAutoUpdate=r.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Lr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Mi.setFromAxisAngle(e,t),this.quaternion.multiply(Mi),this}rotateOnWorldAxis(e,t){return Mi.setFromAxisAngle(e,t),this.quaternion.premultiply(Mi),this}rotateX(e){return this.rotateOnAxis(Ic,e)}rotateY(e){return this.rotateOnAxis(Dc,e)}rotateZ(e){return this.rotateOnAxis(Fc,e)}translateOnAxis(e,t){return Pc.copy(e).applyQuaternion(this.quaternion),this.position.add(Pc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ic,e)}translateY(e){return this.translateOnAxis(Dc,e)}translateZ(e){return this.translateOnAxis(Fc,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(yn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ds.copy(e):ds.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yn.lookAt(hr,ds,this.up):yn.lookAt(ds,hr,this.up),this.quaternion.setFromRotationMatrix(yn),i&&(yn.extractRotation(i.matrixWorld),Mi.setFromRotationMatrix(yn),this.quaternion.premultiply(Mi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(tf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(zc)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){let t=this.children[e];t.parent=null,t.dispatchEvent(zc)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(yn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,e,Qd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,ef,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),f=o(e.animations);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f)}return n.object=i,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};et.DefaultUp=new b(0,1,0);et.DefaultMatrixAutoUpdate=!0;et.prototype.isObject3D=!0;var en=new b,vn=new b,Zo=new b,_n=new b,Si=new b,Ei=new b,Bc=new b,$o=new b,jo=new b,Ko=new b,Dt=class r{constructor(e=new b,t=new b,n=new b){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),en.subVectors(e,t),i.cross(en);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){en.subVectors(i,t),vn.subVectors(n,t),Zo.subVectors(e,t);let o=en.dot(en),a=en.dot(vn),l=en.dot(Zo),c=vn.dot(vn),u=vn.dot(Zo),d=o*c-a*a;if(d===0)return s.set(-2,-1,-1);let h=1/d,f=(c*l-a*u)*h,m=(o*u-a*l)*h;return s.set(1-f-m,m,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,_n),_n.x>=0&&_n.y>=0&&_n.x+_n.y<=1}static getUV(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,_n),l.set(0,0),l.addScaledVector(s,_n.x),l.addScaledVector(o,_n.y),l.addScaledVector(a,_n.z),l}static isFrontFacing(e,t,n,i){return en.subVectors(n,t),vn.subVectors(e,t),en.cross(vn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return en.subVectors(this.c,this.b),vn.subVectors(this.a,this.b),en.cross(vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return r.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,o,a;Si.subVectors(i,n),Ei.subVectors(s,n),$o.subVectors(e,n);let l=Si.dot($o),c=Ei.dot($o);if(l<=0&&c<=0)return t.copy(n);jo.subVectors(e,i);let u=Si.dot(jo),d=Ei.dot(jo);if(u>=0&&d<=u)return t.copy(i);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Si,o);Ko.subVectors(e,s);let f=Si.dot(Ko),m=Ei.dot(Ko);if(m>=0&&f<=m)return t.copy(s);let x=f*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector(Ei,a);let y=u*m-f*d;if(y<=0&&d-u>=0&&f-m>=0)return Bc.subVectors(s,i),a=(d-u)/(d-u+(f-m)),t.copy(i).addScaledVector(Bc,a);let g=1/(y+x+h);return o=x*g,a=h*g,t.copy(n).addScaledVector(Si,o).addScaledVector(Ei,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},nf=0,Tt=class extends bn{constructor(){super(),Object.defineProperty(this,"id",{value:nf++}),this.uuid=nn(),this.name="",this.type="Material",this.fog=!0,this.blending=wr,this.side=ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Fu,this.blendDst=zu,this.blendEquation=Ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=xa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=No,this.stencilZFail=No,this.stencilZPass=No,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===Du;continue}let i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==wr&&(n.blending=this.blending),this.side!==ai&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.fog=e.fog,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};Tt.prototype.isMaterial=!0;var Ue=class extends Tt{constructor(e){super(),this.type="MeshBasicMaterial",this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=bo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}};Ue.prototype.isMeshBasicMaterial=!0;var ot=new b,fs=new Q,gt=class{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=Ar,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){let t=this.array,n=0;for(let i=0,s=e.length;i<s;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),o=new re),t[n++]=o.r,t[n++]=o.g,t[n++]=o.b}return this}copyVector2sArray(e){let t=this.array,n=0;for(let i=0,s=e.length;i<s;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),o=new Q),t[n++]=o.x,t[n++]=o.y}return this}copyVector3sArray(e){let t=this.array,n=0;for(let i=0,s=e.length;i<s;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),o=new b),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z}return this}copyVector4sArray(e){let t=this.array,n=0;for(let i=0,s=e.length;i<s;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),o=new Ze),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z,t[n++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)fs.fromBufferAttribute(this,t),fs.applyMatrix3(e),this.setXY(t,fs.x,fs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ot.fromBufferAttribute(this,t),ot.applyMatrix3(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ot.x=this.getX(t),ot.y=this.getY(t),ot.z=this.getZ(t),ot.applyMatrix4(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ot.x=this.getX(t),ot.y=this.getY(t),ot.z=this.getZ(t),ot.applyNormalMatrix(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ot.x=this.getX(t),ot.y=this.getY(t),ot.z=this.getZ(t),ot.transformDirection(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ar&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}};gt.prototype.isBufferAttribute=!0;var Ys=class extends gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Js=class extends gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Sa=class extends gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};Sa.prototype.isFloat16BufferAttribute=!0;var ze=class extends gt{constructor(e,t,n){super(new Float32Array(e),t,n)}};var rf=0,Jt=new Me,Qo=new et,Ti=new b,qt=new Yt,dr=new Yt,Et=new b,qe=class r extends bn{constructor(){super(),Object.defineProperty(this,"id",{value:rf++}),this.uuid=nn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ou(e)?Js:Ys)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Mt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jt.makeRotationFromQuaternion(e),this.applyMatrix4(Jt),this}rotateX(e){return Jt.makeRotationX(e),this.applyMatrix4(Jt),this}rotateY(e){return Jt.makeRotationY(e),this.applyMatrix4(Jt),this}rotateZ(e){return Jt.makeRotationZ(e),this.applyMatrix4(Jt),this}translate(e,t,n){return Jt.makeTranslation(e,t,n),this.applyMatrix4(Jt),this}scale(e,t,n){return Jt.makeScale(e,t,n),this.applyMatrix4(Jt),this}lookAt(e){return Qo.lookAt(e),Qo.updateMatrix(),this.applyMatrix4(Qo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ti).negate(),this.translate(Ti.x,Ti.y,Ti.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ze(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];qt.setFromBufferAttribute(s),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,qt.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,qt.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(qt.min),this.boundingBox.expandByPoint(qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new b,1/0);return}if(e){let n=this.boundingSphere.center;if(qt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];dr.setFromBufferAttribute(a),this.morphTargetsRelative?(Et.addVectors(qt.min,dr.min),qt.expandByPoint(Et),Et.addVectors(qt.max,dr.max),qt.expandByPoint(Et)):(qt.expandByPoint(dr.min),qt.expandByPoint(dr.max))}qt.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Et.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Et));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Et.fromBufferAttribute(a,c),l&&(Ti.fromBufferAttribute(e,c),Et.add(Ti)),i=Math.max(i,n.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;t.tangent===void 0&&this.setAttribute("tangent",new gt(new Float32Array(4*a),4));let l=t.tangent.array,c=[],u=[];for(let U=0;U<a;U++)c[U]=new b,u[U]=new b;let d=new b,h=new b,f=new b,m=new Q,x=new Q,y=new Q,g=new b,p=new b;function w(U,v,C){d.fromArray(i,U*3),h.fromArray(i,v*3),f.fromArray(i,C*3),m.fromArray(o,U*2),x.fromArray(o,v*2),y.fromArray(o,C*2),h.sub(d),f.sub(d),x.sub(m),y.sub(m);let I=1/(x.x*y.y-y.x*x.y);isFinite(I)&&(g.copy(h).multiplyScalar(y.y).addScaledVector(f,-x.y).multiplyScalar(I),p.copy(f).multiplyScalar(x.x).addScaledVector(h,-y.x).multiplyScalar(I),c[U].add(g),c[v].add(g),c[C].add(g),u[U].add(p),u[v].add(p),u[C].add(p))}let _=this.groups;_.length===0&&(_=[{start:0,count:n.length}]);for(let U=0,v=_.length;U<v;++U){let C=_[U],I=C.start,F=C.count;for(let z=I,D=I+F;z<D;z+=3)w(n[z+0],n[z+1],n[z+2])}let S=new b,T=new b,R=new b,P=new b;function W(U){R.fromArray(s,U*3),P.copy(R);let v=c[U];S.copy(v),S.sub(R.multiplyScalar(R.dot(v))).normalize(),T.crossVectors(P,v);let I=T.dot(u[U])<0?-1:1;l[U*4]=S.x,l[U*4+1]=S.y,l[U*4+2]=S.z,l[U*4+3]=I}for(let U=0,v=_.length;U<v;++U){let C=_[U],I=C.start,F=C.count;for(let z=I,D=I+F;z<D;z+=3)W(n[z+0]),W(n[z+1]),W(n[z+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new gt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);let i=new b,s=new b,o=new b,a=new b,l=new b,c=new b,u=new b,d=new b;if(e)for(let h=0,f=e.count;h<f;h+=3){let m=e.getX(h+0),x=e.getX(h+1),y=e.getX(h+2);i.fromBufferAttribute(t,m),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,y),u.subVectors(o,s),d.subVectors(i,s),u.cross(d),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,y),a.add(u),l.add(u),c.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(y,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),d.subVectors(i,s),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));let n=this.attributes;for(let i in n){if(e.attributes[i]===void 0)continue;let o=n[i].array,a=e.attributes[i],l=a.array,c=a.itemSize*t,u=Math.min(l.length,o.length-c);for(let d=0,h=c;d<u;d++,h++)o[h]=l[d]}return this}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u),f=0,m=0;for(let x=0,y=l.length;x<y;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*u;for(let g=0;g<u;g++)h[m++]=c[f++]}return new gt(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){let h=c[u],f=e(h,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let c in i){let u=i[c];this.setAttribute(c,u.clone(t))}let s=e.morphAttributes;for(let c in s){let u=[],d=s[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}};qe.prototype.isBufferGeometry=!0;var Nc=new Me,Ai=new Sn,ea=new qn,Fn=new b,zn=new b,Bn=new b,ta=new b,na=new b,ia=new b,ps=new b,ms=new b,gs=new b,xs=new Q,ys=new Q,vs=new Q,ra=new b,_s=new b,ee=class extends et{constructor(e=new qe,t=new Ue){super(),this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry;if(e.isBufferGeometry){let t=e.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{let t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),ea.copy(n.boundingSphere),ea.applyMatrix4(s),e.ray.intersectsSphere(ea)===!1)||(Nc.copy(s).invert(),Ai.copy(e.ray).applyMatrix4(Nc),n.boundingBox!==null&&Ai.intersectsBox(n.boundingBox)===!1))return;let o;if(n.isBufferGeometry){let a=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,d=n.attributes.uv,h=n.attributes.uv2,f=n.groups,m=n.drawRange;if(a!==null)if(Array.isArray(i))for(let x=0,y=f.length;x<y;x++){let g=f[x],p=i[g.materialIndex],w=Math.max(g.start,m.start),_=Math.min(a.count,Math.min(g.start+g.count,m.start+m.count));for(let S=w,T=_;S<T;S+=3){let R=a.getX(S),P=a.getX(S+1),W=a.getX(S+2);o=ws(this,p,e,Ai,l,c,u,d,h,R,P,W),o&&(o.faceIndex=Math.floor(S/3),o.face.materialIndex=g.materialIndex,t.push(o))}}else{let x=Math.max(0,m.start),y=Math.min(a.count,m.start+m.count);for(let g=x,p=y;g<p;g+=3){let w=a.getX(g),_=a.getX(g+1),S=a.getX(g+2);o=ws(this,i,e,Ai,l,c,u,d,h,w,_,S),o&&(o.faceIndex=Math.floor(g/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(i))for(let x=0,y=f.length;x<y;x++){let g=f[x],p=i[g.materialIndex],w=Math.max(g.start,m.start),_=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let S=w,T=_;S<T;S+=3){let R=S,P=S+1,W=S+2;o=ws(this,p,e,Ai,l,c,u,d,h,R,P,W),o&&(o.faceIndex=Math.floor(S/3),o.face.materialIndex=g.materialIndex,t.push(o))}}else{let x=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let g=x,p=y;g<p;g+=3){let w=g,_=g+1,S=g+2;o=ws(this,i,e,Ai,l,c,u,d,h,w,_,S),o&&(o.faceIndex=Math.floor(g/3),t.push(o))}}}else n.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}};ee.prototype.isMesh=!0;function sf(r,e,t,n,i,s,o,a){let l;if(e.side===mt?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side!==Ft,a),l===null)return null;_s.copy(a),_s.applyMatrix4(r.matrixWorld);let c=t.ray.origin.distanceTo(_s);return c<t.near||c>t.far?null:{distance:c,point:_s.clone(),object:r}}function ws(r,e,t,n,i,s,o,a,l,c,u,d){Fn.fromBufferAttribute(i,c),zn.fromBufferAttribute(i,u),Bn.fromBufferAttribute(i,d);let h=r.morphTargetInfluences;if(s&&h){ps.set(0,0,0),ms.set(0,0,0),gs.set(0,0,0);for(let m=0,x=s.length;m<x;m++){let y=h[m],g=s[m];y!==0&&(ta.fromBufferAttribute(g,c),na.fromBufferAttribute(g,u),ia.fromBufferAttribute(g,d),o?(ps.addScaledVector(ta,y),ms.addScaledVector(na,y),gs.addScaledVector(ia,y)):(ps.addScaledVector(ta.sub(Fn),y),ms.addScaledVector(na.sub(zn),y),gs.addScaledVector(ia.sub(Bn),y)))}Fn.add(ps),zn.add(ms),Bn.add(gs)}r.isSkinnedMesh&&(r.boneTransform(c,Fn),r.boneTransform(u,zn),r.boneTransform(d,Bn));let f=sf(r,e,t,n,Fn,zn,Bn,ra);if(f){a&&(xs.fromBufferAttribute(a,c),ys.fromBufferAttribute(a,u),vs.fromBufferAttribute(a,d),f.uv=Dt.getUV(ra,Fn,zn,Bn,xs,ys,vs,new Q)),l&&(xs.fromBufferAttribute(l,c),ys.fromBufferAttribute(l,u),vs.fromBufferAttribute(l,d),f.uv2=Dt.getUV(ra,Fn,zn,Bn,xs,ys,vs,new Q));let m={a:c,b:u,c:d,normal:new b,materialIndex:0};Dt.getNormal(Fn,zn,Bn,m.normal),f.face=m}return f}var tt=class r extends qe{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],d=[],h=0,f=0;m("z","y","x",-1,-1,n,t,e,o,s,0),m("z","y","x",1,-1,n,t,-e,o,s,1),m("x","z","y",1,1,e,n,t,i,o,2),m("x","z","y",1,-1,e,n,-t,i,o,3),m("x","y","z",1,-1,e,t,n,i,s,4),m("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new ze(c,3)),this.setAttribute("normal",new ze(u,3)),this.setAttribute("uv",new ze(d,2));function m(x,y,g,p,w,_,S,T,R,P,W){let U=_/R,v=S/P,C=_/2,I=S/2,F=T/2,z=R+1,D=P+1,V=0,K=0,me=new b;for(let H=0;H<D;H++){let Y=H*v-I;for(let se=0;se<z;se++){let j=se*U-C;me[x]=j*p,me[y]=Y*w,me[g]=F,c.push(me.x,me.y,me.z),me[x]=0,me[y]=0,me[g]=T>0?1:-1,u.push(me.x,me.y,me.z),d.push(se/R),d.push(1-H/P),V+=1}}for(let H=0;H<P;H++)for(let Y=0;Y<R;Y++){let se=h+Y+z*H,j=h+Y+z*(H+1),xe=h+(Y+1)+z*(H+1),G=h+(Y+1)+z*H;l.push(se,j,G),l.push(j,xe,G),K+=6}a.addGroup(f,K,W),f+=K,h+=V}}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Yi(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Lt(r){let e={};for(let t=0;t<r.length;t++){let n=Yi(r[t]);for(let i in n)e[i]=n[i]}return e}var of={clone:Yi,merge:Lt},af=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,En=class extends Tt{constructor(e){super(),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=af,this.fragmentShader=lf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Yi(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}};En.prototype.isShaderMaterial=!0;var Pr=class extends et{constructor(){super(),this.type="Camera",this.matrixWorldInverse=new Me,this.projectionMatrix=new Me,this.projectionMatrixInverse=new Me}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};Pr.prototype.isCamera=!0;var It=class extends Pr{constructor(e=50,t=1,n=.1,i=2e3){super(),this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ba*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ks*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ba*2*Math.atan(Math.tan(ks*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ks*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};It.prototype.isPerspectiveCamera=!0;var Ri=90,Ci=1,Ir=class extends et{constructor(e,t,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;let i=new It(Ri,Ci,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new b(1,0,0)),this.add(i);let s=new It(Ri,Ci,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new b(-1,0,0)),this.add(s);let o=new It(Ri,Ci,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new b(0,1,0)),this.add(o);let a=new It(Ri,Ci,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new b(0,-1,0)),this.add(a);let l=new It(Ri,Ci,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new b(0,0,1)),this.add(l);let c=new It(Ri,Ci,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new b(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();let n=this.renderTarget,[i,s,o,a,l,c]=this.children,u=e.xr.enabled,d=e.getRenderTarget();e.xr.enabled=!1;let h=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=h,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(d),e.xr.enabled=u,n.texture.needsPMREMUpdate=!0}},Ji=class extends Rt{constructor(e,t,n,i,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:$r,super(e,t,n,i,s,o,a,l,c,u),this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};Ji.prototype.isCubeTexture=!0;var Zs=class extends Gt{constructor(e,t,n){Number.isInteger(t)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),t=n),super(e,e,t),t=t||{},this.texture=new Ji(void 0,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Pt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.format=Bt,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new tt(5,5,5),s=new En({name:"CubemapFromEquirect",uniforms:Yi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:mt,blending:On});s.uniforms.tEquirect.value=t;let o=new ee(i,s),a=t.minFilter;return t.minFilter===So&&(t.minFilter=Pt),new Ir(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}};Zs.prototype.isWebGLCubeRenderTarget=!0;var sa=new b,cf=new b,uf=new Mt,tn=class{constructor(e=new b(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=sa.subVectors(n,t).cross(cf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){let n=e.delta(sa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||uf.getNormalMatrix(e),i=this.coplanarPoint(sa).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};tn.prototype.isPlane=!0;var Li=new qn,bs=new b,Zi=class{constructor(e=new tn,t=new tn,n=new tn,i=new tn,s=new tn,o=new tn){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){let t=this.planes,n=e.elements,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],d=n[7],h=n[8],f=n[9],m=n[10],x=n[11],y=n[12],g=n[13],p=n[14],w=n[15];return t[0].setComponents(a-i,d-l,x-h,w-y).normalize(),t[1].setComponents(a+i,d+l,x+h,w+y).normalize(),t[2].setComponents(a+s,d+c,x+f,w+g).normalize(),t[3].setComponents(a-s,d-c,x-f,w-g).normalize(),t[4].setComponents(a-o,d-u,x-m,w-p).normalize(),t[5].setComponents(a+o,d+u,x+m,w+p).normalize(),this}intersectsObject(e){let t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Li.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Li)}intersectsSprite(e){return Li.center.set(0,0,0),Li.radius=.7071067811865476,Li.applyMatrix4(e.matrixWorld),this.intersectsSphere(Li)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(bs.x=i.normal.x>0?e.max.x:e.min.x,bs.y=i.normal.y>0?e.max.y:e.min.y,bs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(bs)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Hu(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function hf(r,e){let t=e.isWebGL2,n=new WeakMap;function i(c,u){let d=c.array,h=c.usage,f=r.createBuffer();r.bindBuffer(u,f),r.bufferData(u,d,h),c.onUploadCallback();let m=5126;return d instanceof Float32Array?m=5126:d instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):d instanceof Uint16Array?c.isFloat16BufferAttribute?t?m=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):m=5123:d instanceof Int16Array?m=5122:d instanceof Uint32Array?m=5125:d instanceof Int32Array?m=5124:d instanceof Int8Array?m=5120:(d instanceof Uint8Array||d instanceof Uint8ClampedArray)&&(m=5121),{buffer:f,type:m,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,d){let h=u.array,f=u.updateRange;r.bindBuffer(d,c),f.count===-1?r.bufferSubData(d,0,h):(t?r.bufferSubData(d,f.offset*h.BYTES_PER_ELEMENT,h,f.offset,f.count):r.bufferSubData(d,f.offset*h.BYTES_PER_ELEMENT,h.subarray(f.offset,f.offset+f.count)),f.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){let h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let d=n.get(c);d===void 0?n.set(c,i(c,u)):d.version<c.version&&(s(d.buffer,c,u),d.version=c.version)}return{get:o,remove:a,update:l}}var Xe=class r extends qe{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,d=e/a,h=t/l,f=[],m=[],x=[],y=[];for(let g=0;g<u;g++){let p=g*h-o;for(let w=0;w<c;w++){let _=w*d-s;m.push(_,-p,0),x.push(0,0,1),y.push(w/a),y.push(1-g/l)}}for(let g=0;g<l;g++)for(let p=0;p<a;p++){let w=p+c*g,_=p+c*(g+1),S=p+1+c*(g+1),T=p+1+c*g;f.push(w,_,T),f.push(_,S,T)}this.setIndex(f),this.setAttribute("position",new ze(m,3)),this.setAttribute("normal",new ze(x,3)),this.setAttribute("uv",new ze(y,2))}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}},df=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,ff=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,mf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,xf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yf="vec3 transformed = vec3( position );",vf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_f=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,wf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,bf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Mf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ef=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Af=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Rf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Cf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Lf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Pf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 ) + 0.5;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		return texture2D( envMap, uv ).rgb;
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,If=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Df=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ff=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,zf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Of=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Uf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Hf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Gf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,kf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Wf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,Zf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		lightMapIrradiance *= PI;
	#endif
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,$f=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jf=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,Kf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Qf=`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec;
			#ifdef ENVMAP_MODE_REFLECTION
				reflectVec = reflect( - viewDir, normal );
				reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			#else
				reflectVec = refract( - viewDir, normal, refractionRatio );
			#endif
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,ep=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,np=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ip=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,rp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,sp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	vec3 FssEss = specularColor * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,op=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ap=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,cp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,up=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,dp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,fp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,gp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1, 2 ) * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,_p=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform vec2 morphTargetsTextureSize;
		vec3 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset, const in int stride ) {
			float texelIndex = float( vertexIndex * stride + offset );
			float y = floor( texelIndex / morphTargetsTextureSize.x );
			float x = texelIndex - y * morphTargetsTextureSize.x;
			vec3 morphUV = vec3( ( x + 0.5 ) / morphTargetsTextureSize.x, y / morphTargetsTextureSize.y, morphTargetIndex );
			return texture( morphTargetsTexture, morphUV ).xyz;
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,wp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			#ifndef USE_MORPHNORMALS
				if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 1 ) * morphTargetInfluences[ i ];
			#else
				if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 2 ) * morphTargetInfluences[ i ];
			#endif
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,bp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Mp=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Sp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ep=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ap=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Rp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Cp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Lp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Pp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ip=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Dp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Np=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Op=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Up=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Hp=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Gp=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,kp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Vp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,qp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Yp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$p=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,jp=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,Kp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef TEXTURE_LOD_EXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Qp=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,em=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,tm=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,nm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,im=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,rm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,sm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,om=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,am=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cm=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,um=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,hm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,dm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,fm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,gm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ym=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,vm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_m=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wm=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Mm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Em=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Tm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Am=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Cm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Im=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Dm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fm=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Bm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Nm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ne={alphamap_fragment:df,alphamap_pars_fragment:ff,alphatest_fragment:pf,alphatest_pars_fragment:mf,aomap_fragment:gf,aomap_pars_fragment:xf,begin_vertex:yf,beginnormal_vertex:vf,bsdfs:_f,bumpmap_pars_fragment:wf,clipping_planes_fragment:bf,clipping_planes_pars_fragment:Mf,clipping_planes_pars_vertex:Sf,clipping_planes_vertex:Ef,color_fragment:Tf,color_pars_fragment:Af,color_pars_vertex:Rf,color_vertex:Cf,common:Lf,cube_uv_reflection_fragment:Pf,defaultnormal_vertex:If,displacementmap_pars_vertex:Df,displacementmap_vertex:Ff,emissivemap_fragment:zf,emissivemap_pars_fragment:Bf,encodings_fragment:Nf,encodings_pars_fragment:Of,envmap_fragment:Uf,envmap_common_pars_fragment:Hf,envmap_pars_fragment:Gf,envmap_pars_vertex:kf,envmap_physical_pars_fragment:Qf,envmap_vertex:Vf,fog_vertex:Wf,fog_pars_vertex:qf,fog_fragment:Xf,fog_pars_fragment:Yf,gradientmap_pars_fragment:Jf,lightmap_fragment:Zf,lightmap_pars_fragment:$f,lights_lambert_vertex:jf,lights_pars_begin:Kf,lights_toon_fragment:ep,lights_toon_pars_fragment:tp,lights_phong_fragment:np,lights_phong_pars_fragment:ip,lights_physical_fragment:rp,lights_physical_pars_fragment:sp,lights_fragment_begin:op,lights_fragment_maps:ap,lights_fragment_end:lp,logdepthbuf_fragment:cp,logdepthbuf_pars_fragment:up,logdepthbuf_pars_vertex:hp,logdepthbuf_vertex:dp,map_fragment:fp,map_pars_fragment:pp,map_particle_fragment:mp,map_particle_pars_fragment:gp,metalnessmap_fragment:xp,metalnessmap_pars_fragment:yp,morphnormal_vertex:vp,morphtarget_pars_vertex:_p,morphtarget_vertex:wp,normal_fragment_begin:bp,normal_fragment_maps:Mp,normal_pars_fragment:Sp,normal_pars_vertex:Ep,normal_vertex:Tp,normalmap_pars_fragment:Ap,clearcoat_normal_fragment_begin:Rp,clearcoat_normal_fragment_maps:Cp,clearcoat_pars_fragment:Lp,output_fragment:Pp,packing:Ip,premultiplied_alpha_fragment:Dp,project_vertex:Fp,dithering_fragment:zp,dithering_pars_fragment:Bp,roughnessmap_fragment:Np,roughnessmap_pars_fragment:Op,shadowmap_pars_fragment:Up,shadowmap_pars_vertex:Hp,shadowmap_vertex:Gp,shadowmask_pars_fragment:kp,skinbase_vertex:Vp,skinning_pars_vertex:Wp,skinning_vertex:qp,skinnormal_vertex:Xp,specularmap_fragment:Yp,specularmap_pars_fragment:Jp,tonemapping_fragment:Zp,tonemapping_pars_fragment:$p,transmission_fragment:jp,transmission_pars_fragment:Kp,uv_pars_fragment:Qp,uv_pars_vertex:em,uv_vertex:tm,uv2_pars_fragment:nm,uv2_pars_vertex:im,uv2_vertex:rm,worldpos_vertex:sm,background_vert:om,background_frag:am,cube_vert:lm,cube_frag:cm,depth_vert:um,depth_frag:hm,distanceRGBA_vert:dm,distanceRGBA_frag:fm,equirect_vert:pm,equirect_frag:mm,linedashed_vert:gm,linedashed_frag:xm,meshbasic_vert:ym,meshbasic_frag:vm,meshlambert_vert:_m,meshlambert_frag:wm,meshmatcap_vert:bm,meshmatcap_frag:Mm,meshnormal_vert:Sm,meshnormal_frag:Em,meshphong_vert:Tm,meshphong_frag:Am,meshphysical_vert:Rm,meshphysical_frag:Cm,meshtoon_vert:Lm,meshtoon_frag:Pm,points_vert:Im,points_frag:Dm,shadow_vert:Fm,shadow_frag:zm,sprite_vert:Bm,sprite_frag:Nm},ae={common:{diffuse:{value:new re(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Mt},uv2Transform:{value:new Mt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Q(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Mt}},sprite:{diffuse:{value:new re(16777215)},opacity:{value:1},center:{value:new Q(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Mt}}},cn={basic:{uniforms:Lt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:Lt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.fog,ae.lights,{emissive:{value:new re(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:Lt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new re(0)},specular:{value:new re(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:Lt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:Lt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new re(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:Lt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:Lt([ae.points,ae.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:Lt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:Lt([ae.common,ae.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:Lt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:Lt([ae.sprite,ae.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Mt},t2D:{value:null}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},cube:{uniforms:Lt([ae.envmap,{opacity:{value:1}}]),vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:Lt([ae.common,ae.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:Lt([ae.lights,ae.fog,{color:{value:new re(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};cn.physical={uniforms:Lt([cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Q(1,1)},clearcoatNormalMap:{value:null},sheen:{value:0},sheenColor:{value:new re(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Q},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new re(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new re(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};function Om(r,e,t,n,i,s){let o=new re(0),a=i===!0?0:1,l,c,u=null,d=0,h=null;function f(x,y){let g=!1,p=y.isScene===!0?y.background:null;p&&p.isTexture&&(p=e.get(p));let w=r.xr,_=w.getSession&&w.getSession();_&&_.environmentBlendMode==="additive"&&(p=null),p===null?m(o,a):p&&p.isColor&&(m(p,1),g=!0),(r.autoClear||g)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),p&&(p.isCubeTexture||p.mapping===Mo)?(c===void 0&&(c=new ee(new tt(1,1,1),new En({name:"BackgroundCubeMaterial",uniforms:Yi(cn.cube.uniforms),vertexShader:cn.cube.vertexShader,fragmentShader:cn.cube.fragmentShader,side:mt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=p,c.material.uniforms.flipEnvMap.value=p.isCubeTexture&&p.isRenderTargetTexture===!1?-1:1,(u!==p||d!==p.version||h!==r.toneMapping)&&(c.material.needsUpdate=!0,u=p,d=p.version,h=r.toneMapping),x.unshift(c,c.geometry,c.material,0,0,null)):p&&p.isTexture&&(l===void 0&&(l=new ee(new Xe(2,2),new En({name:"BackgroundMaterial",uniforms:Yi(cn.background.uniforms),vertexShader:cn.background.vertexShader,fragmentShader:cn.background.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=p,p.matrixAutoUpdate===!0&&p.updateMatrix(),l.material.uniforms.uvTransform.value.copy(p.matrix),(u!==p||d!==p.version||h!==r.toneMapping)&&(l.material.needsUpdate=!0,u=p,d=p.version,h=r.toneMapping),x.unshift(l,l.geometry,l.material,0,0,null))}function m(x,y){t.buffers.color.setClear(x.r,x.g,x.b,y,s)}return{getClearColor:function(){return o},setClearColor:function(x,y=1){o.set(x),a=y,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,m(o,a)},render:f}}function Um(r,e,t,n){let i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=x(null),c=l;function u(I,F,z,D,V){let K=!1;if(o){let me=m(D,z,F);c!==me&&(c=me,h(c.object)),K=y(D,V),K&&g(D,V)}else{let me=F.wireframe===!0;(c.geometry!==D.id||c.program!==z.id||c.wireframe!==me)&&(c.geometry=D.id,c.program=z.id,c.wireframe=me,K=!0)}I.isInstancedMesh===!0&&(K=!0),V!==null&&t.update(V,34963),K&&(R(I,F,z,D),V!==null&&r.bindBuffer(34963,t.get(V).buffer))}function d(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function h(I){return n.isWebGL2?r.bindVertexArray(I):s.bindVertexArrayOES(I)}function f(I){return n.isWebGL2?r.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function m(I,F,z){let D=z.wireframe===!0,V=a[I.id];V===void 0&&(V={},a[I.id]=V);let K=V[F.id];K===void 0&&(K={},V[F.id]=K);let me=K[D];return me===void 0&&(me=x(d()),K[D]=me),me}function x(I){let F=[],z=[],D=[];for(let V=0;V<i;V++)F[V]=0,z[V]=0,D[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:z,attributeDivisors:D,object:I,attributes:{},index:null}}function y(I,F){let z=c.attributes,D=I.attributes,V=0;for(let K in D){let me=z[K],H=D[K];if(me===void 0||me.attribute!==H||me.data!==H.data)return!0;V++}return c.attributesNum!==V||c.index!==F}function g(I,F){let z={},D=I.attributes,V=0;for(let K in D){let me=D[K],H={};H.attribute=me,me.data&&(H.data=me.data),z[K]=H,V++}c.attributes=z,c.attributesNum=V,c.index=F}function p(){let I=c.newAttributes;for(let F=0,z=I.length;F<z;F++)I[F]=0}function w(I){_(I,0)}function _(I,F){let z=c.newAttributes,D=c.enabledAttributes,V=c.attributeDivisors;z[I]=1,D[I]===0&&(r.enableVertexAttribArray(I),D[I]=1),V[I]!==F&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,F),V[I]=F)}function S(){let I=c.newAttributes,F=c.enabledAttributes;for(let z=0,D=F.length;z<D;z++)F[z]!==I[z]&&(r.disableVertexAttribArray(z),F[z]=0)}function T(I,F,z,D,V,K){n.isWebGL2===!0&&(z===5124||z===5125)?r.vertexAttribIPointer(I,F,z,V,K):r.vertexAttribPointer(I,F,z,D,V,K)}function R(I,F,z,D){if(n.isWebGL2===!1&&(I.isInstancedMesh||D.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;p();let V=D.attributes,K=z.getAttributes(),me=F.defaultAttributeValues;for(let H in K){let Y=K[H];if(Y.location>=0){let se=V[H];if(se===void 0&&(H==="instanceMatrix"&&I.instanceMatrix&&(se=I.instanceMatrix),H==="instanceColor"&&I.instanceColor&&(se=I.instanceColor)),se!==void 0){let j=se.normalized,xe=se.itemSize,G=t.get(se);if(G===void 0)continue;let Oe=G.buffer,ye=G.type,Te=G.bytesPerElement;if(se.isInterleavedBufferAttribute){let fe=se.data,ne=fe.stride,ie=se.offset;if(fe&&fe.isInstancedInterleavedBuffer){for(let N=0;N<Y.locationSize;N++)_(Y.location+N,fe.meshPerAttribute);I.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let N=0;N<Y.locationSize;N++)w(Y.location+N);r.bindBuffer(34962,Oe);for(let N=0;N<Y.locationSize;N++)T(Y.location+N,xe/Y.locationSize,ye,j,ne*Te,(ie+xe/Y.locationSize*N)*Te)}else{if(se.isInstancedBufferAttribute){for(let fe=0;fe<Y.locationSize;fe++)_(Y.location+fe,se.meshPerAttribute);I.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let fe=0;fe<Y.locationSize;fe++)w(Y.location+fe);r.bindBuffer(34962,Oe);for(let fe=0;fe<Y.locationSize;fe++)T(Y.location+fe,xe/Y.locationSize,ye,j,xe*Te,xe/Y.locationSize*fe*Te)}}else if(me!==void 0){let j=me[H];if(j!==void 0)switch(j.length){case 2:r.vertexAttrib2fv(Y.location,j);break;case 3:r.vertexAttrib3fv(Y.location,j);break;case 4:r.vertexAttrib4fv(Y.location,j);break;default:r.vertexAttrib1fv(Y.location,j)}}}}S()}function P(){v();for(let I in a){let F=a[I];for(let z in F){let D=F[z];for(let V in D)f(D[V].object),delete D[V];delete F[z]}delete a[I]}}function W(I){if(a[I.id]===void 0)return;let F=a[I.id];for(let z in F){let D=F[z];for(let V in D)f(D[V].object),delete D[V];delete F[z]}delete a[I.id]}function U(I){for(let F in a){let z=a[F];if(z[I.id]===void 0)continue;let D=z[I.id];for(let V in D)f(D[V].object),delete D[V];delete z[I.id]}}function v(){C(),c!==l&&(c=l,h(c.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:v,resetDefaultState:C,dispose:P,releaseStatesOfGeometry:W,releaseStatesOfProgram:U,initAttributes:p,enableAttribute:w,disableUnusedAttributes:S}}function Hm(r,e,t,n){let i=n.isWebGL2,s;function o(c){s=c}function a(c,u){r.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,d){if(d===0)return;let h,f;if(i)h=r,f="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[f](s,c,u,d),t.update(u,s,d)}this.setMode=o,this.render=a,this.renderInstances=l}function Gm(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(R){if(R==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";R="mediump"}return R==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext!="undefined"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&r instanceof WebGL2ComputeRenderingContext,a=t.precision!==void 0?t.precision:"highp",l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=r.getParameter(34930),h=r.getParameter(35660),f=r.getParameter(3379),m=r.getParameter(34076),x=r.getParameter(34921),y=r.getParameter(36347),g=r.getParameter(36348),p=r.getParameter(36349),w=h>0,_=o||e.has("OES_texture_float"),S=w&&_,T=o?r.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:h,maxTextureSize:f,maxCubemapSize:m,maxAttributes:x,maxVertexUniforms:y,maxVaryings:g,maxFragmentUniforms:p,vertexTextures:w,floatFragmentTextures:_,floatVertexTextures:S,maxSamples:T}}function km(r){let e=this,t=null,n=0,i=!1,s=!1,o=new tn,a=new Mt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h,f){let m=d.length!==0||h||n!==0||i;return i=h,t=u(d,f,0),n=d.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(d,h,f){let m=d.clippingPlanes,x=d.clipIntersection,y=d.clipShadows,g=r.get(d);if(!i||m===null||m.length===0||s&&!y)s?u(null):c();else{let p=s?0:n,w=p*4,_=g.clippingState||null;l.value=_,_=u(m,h,w,f);for(let S=0;S!==w;++S)_[S]=t[S];g.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=p}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,f,m){let x=d!==null?d.length:0,y=null;if(x!==0){if(y=l.value,m!==!0||y===null){let g=f+x*4,p=h.matrixWorldInverse;a.getNormalMatrix(p),(y===null||y.length<g)&&(y=new Float32Array(g));for(let w=0,_=f;w!==x;++w,_+=4)o.copy(d[w]).applyMatrix4(p,a),o.normal.toArray(y,_),y[_+3]=o.constant}l.value=y,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,y}}function Vm(r){let e=new WeakMap;function t(o,a){return a===ya?o.mapping=$r:a===va&&(o.mapping=jr),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){let a=o.mapping;if(a===ya||a===va)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Zs(l.height/2);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}var Dr=class extends Pr{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};Dr.prototype.isOrthographicCamera=!0;var $i=class extends En{constructor(e){super(e),this.type="RawShaderMaterial"}};$i.prototype.isRawShaderMaterial=!0;var Wi=4,Gn=8,ln=Math.pow(2,Gn),Gu=[.125,.215,.35,.446,.526,.582],ku=Gn-Wi+1+Gu.length,Pi=20,oa=new Dr,{_lodPlanes:fr,_sizeLods:Oc,_sigmas:Ms}=Wm(),Uc=new re,aa=null,ri=(1+Math.sqrt(5))/2,Ii=1/ri,Hc=[new b(1,1,1),new b(-1,1,1),new b(1,1,-1),new b(-1,1,-1),new b(0,ri,Ii),new b(0,ri,-Ii),new b(Ii,0,ri),new b(-Ii,0,ri),new b(ri,Ii,0),new b(-ri,Ii,0)],$s=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._blurMaterial=qm(Pi),this._equirectShader=null,this._cubemapShader=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){aa=this._renderer.getRenderTarget();let s=this._allocateTargets();return this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapShader===null&&(this._cubemapShader=Vc(),this._compileMaterial(this._cubemapShader))}compileEquirectangularShader(){this._equirectShader===null&&(this._equirectShader=kc(),this._compileMaterial(this._equirectShader))}dispose(){this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose(),this._cubemapShader!==null&&this._cubemapShader.dispose(),this._equirectShader!==null&&this._equirectShader.dispose();for(let e=0;e<fr.length;e++)fr[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(aa),e.scissorTest=!1,Ss(e,0,0,e.width,e.height)}_fromTexture(e,t){aa=this._renderer.getRenderTarget();let n=t||this._allocateTargets(e);return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(e){let t={magFilter:Pt,minFilter:Pt,generateMipmaps:!1,type:Gi,format:Bt,encoding:Wn,depthBuffer:!1},n=Gc(t);return n.depthBuffer=!e,this._pingPongRenderTarget===null&&(this._pingPongRenderTarget=Gc(t)),n}_compileMaterial(e){let t=new ee(fr[0],e);this._renderer.compile(t,oa)}_sceneToCubeUV(e,t,n,i){let a=new It(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(Uc),u.toneMapping=Un,u.autoClear=!1;let f=new Ue({name:"PMREM.Background",side:mt,depthWrite:!1,depthTest:!1}),m=new ee(new tt,f),x=!1,y=e.background;y?y.isColor&&(f.color.copy(y),e.background=null,x=!0):(f.color.copy(Uc),x=!0);for(let g=0;g<6;g++){let p=g%3;p===0?(a.up.set(0,l[g],0),a.lookAt(c[g],0,0)):p===1?(a.up.set(0,0,l[g]),a.lookAt(0,c[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,c[g])),Ss(i,p*ln,g>2?ln:0,ln,ln),u.setRenderTarget(i),x&&u.render(m,a),u.render(e,a)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=y}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===$r||e.mapping===jr;i?(this._cubemapShader===null&&(this._cubemapShader=Vc()),this._cubemapShader.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectShader===null&&(this._equirectShader=kc());let s=i?this._cubemapShader:this._equirectShader,o=new ee(fr[0],s),a=s.uniforms;a.envMap.value=e,i||a.texelSize.value.set(1/e.image.width,1/e.image.height),Ss(t,0,0,3*ln,2*ln),n.setRenderTarget(t),n.render(o,oa)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<ku;i++){let s=Math.sqrt(Ms[i]*Ms[i]-Ms[i-1]*Ms[i-1]),o=Hc[(i-1)%Hc.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new ee(fr[i],c),h=c.uniforms,f=Oc[n]-1,m=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Pi-1),x=s/m,y=isFinite(s)?1+Math.floor(u*x):Pi;y>Pi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Pi}`);let g=[],p=0;for(let T=0;T<Pi;++T){let R=T/x,P=Math.exp(-R*R/2);g.push(P),T===0?p+=P:T<y&&(p+=2*P)}for(let T=0;T<g.length;T++)g[T]=g[T]/p;h.envMap.value=e.texture,h.samples.value=y,h.weights.value=g,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a),h.dTheta.value=m,h.mipInt.value=Gn-n;let w=Oc[i],_=3*Math.max(0,ln-2*w),S=(i===0?0:2*ln)+2*w*(i>Gn-Wi?i-Gn+Wi:0);Ss(t,_,S,3*w,2*w),l.setRenderTarget(t),l.render(d,oa)}};function Wm(){let r=[],e=[],t=[],n=Gn;for(let i=0;i<ku;i++){let s=Math.pow(2,n);e.push(s);let o=1/s;i>Gn-Wi?o=Gu[i-Gn+Wi-1]:i===0&&(o=0),t.push(o);let a=1/(s-1),l=-a/2,c=1+a/2,u=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,h=6,f=3,m=2,x=1,y=new Float32Array(f*h*d),g=new Float32Array(m*h*d),p=new Float32Array(x*h*d);for(let _=0;_<d;_++){let S=_%3*2/3-1,T=_>2?0:-1,R=[S,T,0,S+2/3,T,0,S+2/3,T+1,0,S,T,0,S+2/3,T+1,0,S,T+1,0];y.set(R,f*h*_),g.set(u,m*h*_);let P=[_,_,_,_,_,_];p.set(P,x*h*_)}let w=new qe;w.setAttribute("position",new gt(y,f)),w.setAttribute("uv",new gt(g,m)),w.setAttribute("faceIndex",new gt(p,x)),r.push(w),n>Wi&&n--}return{_lodPlanes:r,_sizeLods:e,_sigmas:t}}function Gc(r){let e=new Gt(3*ln,3*ln,r);return e.texture.mapping=Mo,e.texture.name="PMREM.cubeUv",e.scissorTest=!0,e}function Ss(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function qm(r){let e=new Float32Array(r),t=new b(0,1,0);return new $i({name:"SphericalGaussianBlur",defines:{n:r},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:e},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:t}},vertexShader:Bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function kc(){let r=new Q(1,1);return new $i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null},texelSize:{value:r}},vertexShader:Bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform vec2 texelSize;

			#include <common>

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				vec2 f = fract( uv / texelSize - 0.5 );
				uv -= f * texelSize;
				vec3 tl = texture2D ( envMap, uv ).rgb;
				uv.x += texelSize.x;
				vec3 tr = texture2D ( envMap, uv ).rgb;
				uv.y += texelSize.y;
				vec3 br = texture2D ( envMap, uv ).rgb;
				uv.x -= texelSize.x;
				vec3 bl = texture2D ( envMap, uv ).rgb;

				vec3 tm = mix( tl, tr, f.x );
				vec3 bm = mix( bl, br, f.x );
				gl_FragColor.rgb = mix( tm, bm, f.y );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function Vc(){return new $i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function Bl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 position;
		attribute vec2 uv;
		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Xm(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===ya||l===va,u=l===$r||l===jr;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new $s(r)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{let d=a.image;if(c&&d&&d.height>0||u&&d&&i(d)){t===null&&(t=new $s(r));let h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function i(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Ym(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Jm(r,e,t,n){let i={},s=new WeakMap;function o(d){let h=d.target;h.index!==null&&e.remove(h.index);for(let m in h.attributes)e.remove(h.attributes[m]);h.removeEventListener("dispose",o),delete i[h.id];let f=s.get(h);f&&(e.remove(f),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,t.memory.geometries++),h}function l(d){let h=d.attributes;for(let m in h)e.update(h[m],34962);let f=d.morphAttributes;for(let m in f){let x=f[m];for(let y=0,g=x.length;y<g;y++)e.update(x[y],34962)}}function c(d){let h=[],f=d.index,m=d.attributes.position,x=0;if(f!==null){let p=f.array;x=f.version;for(let w=0,_=p.length;w<_;w+=3){let S=p[w+0],T=p[w+1],R=p[w+2];h.push(S,T,T,R,R,S)}}else{let p=m.array;x=m.version;for(let w=0,_=p.length/3-1;w<_;w+=3){let S=w+0,T=w+1,R=w+2;h.push(S,T,T,R,R,S)}}let y=new(Ou(h)?Js:Ys)(h,1);y.version=x;let g=s.get(d);g&&e.remove(g),s.set(d,y)}function u(d){let h=s.get(d);if(h){let f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function Zm(r,e,t,n){let i=n.isWebGL2,s;function o(h){s=h}let a,l;function c(h){a=h.type,l=h.bytesPerElement}function u(h,f){r.drawElements(s,f,a,h*l),t.update(f,s,1)}function d(h,f,m){if(m===0)return;let x,y;if(i)x=r,y="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),y="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[y](s,f,a,h*l,m),t.update(f,s,m)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=d}function $m(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}var Fr=class extends Rt{constructor(e=null,t=1,n=1,i=1){super(null),this.image={data:e,width:t,height:n,depth:i},this.magFilter=bt,this.minFilter=bt,this.wrapR=Xt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};Fr.prototype.isDataTexture2DArray=!0;function jm(r,e){return r[0]-e[0]}function Km(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Wc(r,e){let t=1,n=e.isInterleavedBufferAttribute?e.data.array:e.array;n instanceof Int8Array?t=127:n instanceof Int16Array?t=32767:n instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),r.divideScalar(t)}function Qm(r,e,t){let n={},i=new Float32Array(8),s=new WeakMap,o=new b,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,d,h){let f=c.morphTargetInfluences;if(e.isWebGL2===!0){let m=u.morphAttributes.position.length,x=s.get(u);if(x===void 0||x.count!==m){let C=function(){U.dispose(),s.delete(u),u.removeEventListener("dispose",C)};x!==void 0&&x.texture.dispose();let p=u.morphAttributes.normal!==void 0,w=u.morphAttributes.position,_=u.morphAttributes.normal||[],S=u.attributes.position.count,T=p===!0?2:1,R=S*T,P=1;R>e.maxTextureSize&&(P=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);let W=new Float32Array(R*P*4*m),U=new Fr(W,R,P,m);U.format=Bt,U.type=si,U.needsUpdate=!0;let v=T*4;for(let I=0;I<m;I++){let F=w[I],z=_[I],D=R*P*4*I;for(let V=0;V<F.count;V++){o.fromBufferAttribute(F,V),F.normalized===!0&&Wc(o,F);let K=V*v;W[D+K+0]=o.x,W[D+K+1]=o.y,W[D+K+2]=o.z,W[D+K+3]=0,p===!0&&(o.fromBufferAttribute(z,V),z.normalized===!0&&Wc(o,z),W[D+K+4]=o.x,W[D+K+5]=o.y,W[D+K+6]=o.z,W[D+K+7]=0)}}x={count:m,texture:U,size:new Q(R,P)},s.set(u,x),u.addEventListener("dispose",C)}let y=0;for(let p=0;p<f.length;p++)y+=f[p];let g=u.morphTargetsRelative?1:1-y;h.getUniforms().setValue(r,"morphTargetBaseInfluence",g),h.getUniforms().setValue(r,"morphTargetInfluences",f),h.getUniforms().setValue(r,"morphTargetsTexture",x.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}else{let m=f===void 0?0:f.length,x=n[u.id];if(x===void 0||x.length!==m){x=[];for(let _=0;_<m;_++)x[_]=[_,0];n[u.id]=x}for(let _=0;_<m;_++){let S=x[_];S[0]=_,S[1]=f[_]}x.sort(Km);for(let _=0;_<8;_++)_<m&&x[_][1]?(a[_][0]=x[_][0],a[_][1]=x[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(jm);let y=u.morphAttributes.position,g=u.morphAttributes.normal,p=0;for(let _=0;_<8;_++){let S=a[_],T=S[0],R=S[1];T!==Number.MAX_SAFE_INTEGER&&R?(y&&u.getAttribute("morphTarget"+_)!==y[T]&&u.setAttribute("morphTarget"+_,y[T]),g&&u.getAttribute("morphNormal"+_)!==g[T]&&u.setAttribute("morphNormal"+_,g[T]),i[_]=R,p+=R):(y&&u.hasAttribute("morphTarget"+_)===!0&&u.deleteAttribute("morphTarget"+_),g&&u.hasAttribute("morphNormal"+_)===!0&&u.deleteAttribute("morphNormal"+_),i[_]=0)}let w=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(r,"morphTargetBaseInfluence",w),h.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function eg(r,e,t,n){let i=new WeakMap;function s(l){let c=n.render.frame,u=l.geometry,d=e.get(l,u);return i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),d}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}var js=class extends Rt{constructor(e=null,t=1,n=1,i=1){super(null),this.image={data:e,width:t,height:n,depth:i},this.magFilter=bt,this.minFilter=bt,this.wrapR=Xt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};js.prototype.isDataTexture3D=!0;var Vu=new Rt,Wu=new Fr,qu=new js,Xu=new Ji,qc=[],Xc=[],Yc=new Float32Array(16),Jc=new Float32Array(9),Zc=new Float32Array(4);function rr(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=qc[i];if(s===void 0&&(s=new Float32Array(i),qc[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Ot(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function zt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Eo(r,e){let t=Xc[e];t===void 0&&(t=new Int32Array(e),Xc[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function tg(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function ng(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;r.uniform2fv(this.addr,e),zt(t,e)}}function ig(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ot(t,e))return;r.uniform3fv(this.addr,e),zt(t,e)}}function rg(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;r.uniform4fv(this.addr,e),zt(t,e)}}function sg(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),zt(t,e)}else{if(Ot(t,n))return;Zc.set(n),r.uniformMatrix2fv(this.addr,!1,Zc),zt(t,n)}}function og(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),zt(t,e)}else{if(Ot(t,n))return;Jc.set(n),r.uniformMatrix3fv(this.addr,!1,Jc),zt(t,n)}}function ag(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),zt(t,e)}else{if(Ot(t,n))return;Yc.set(n),r.uniformMatrix4fv(this.addr,!1,Yc),zt(t,n)}}function lg(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function cg(r,e){let t=this.cache;Ot(t,e)||(r.uniform2iv(this.addr,e),zt(t,e))}function ug(r,e){let t=this.cache;Ot(t,e)||(r.uniform3iv(this.addr,e),zt(t,e))}function hg(r,e){let t=this.cache;Ot(t,e)||(r.uniform4iv(this.addr,e),zt(t,e))}function dg(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function fg(r,e){let t=this.cache;Ot(t,e)||(r.uniform2uiv(this.addr,e),zt(t,e))}function pg(r,e){let t=this.cache;Ot(t,e)||(r.uniform3uiv(this.addr,e),zt(t,e))}function mg(r,e){let t=this.cache;Ot(t,e)||(r.uniform4uiv(this.addr,e),zt(t,e))}function gg(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.safeSetTexture2D(e||Vu,i)}function xg(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||qu,i)}function yg(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.safeSetTextureCube(e||Xu,i)}function vg(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Wu,i)}function _g(r){switch(r){case 5126:return tg;case 35664:return ng;case 35665:return ig;case 35666:return rg;case 35674:return sg;case 35675:return og;case 35676:return ag;case 5124:case 35670:return lg;case 35667:case 35671:return cg;case 35668:case 35672:return ug;case 35669:case 35673:return hg;case 5125:return dg;case 36294:return fg;case 36295:return pg;case 36296:return mg;case 35678:case 36198:case 36298:case 36306:case 35682:return gg;case 35679:case 36299:case 36307:return xg;case 35680:case 36300:case 36308:case 36293:return yg;case 36289:case 36303:case 36311:case 36292:return vg}}function wg(r,e){r.uniform1fv(this.addr,e)}function bg(r,e){let t=rr(e,this.size,2);r.uniform2fv(this.addr,t)}function Mg(r,e){let t=rr(e,this.size,3);r.uniform3fv(this.addr,t)}function Sg(r,e){let t=rr(e,this.size,4);r.uniform4fv(this.addr,t)}function Eg(r,e){let t=rr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Tg(r,e){let t=rr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Ag(r,e){let t=rr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Rg(r,e){r.uniform1iv(this.addr,e)}function Cg(r,e){r.uniform2iv(this.addr,e)}function Lg(r,e){r.uniform3iv(this.addr,e)}function Pg(r,e){r.uniform4iv(this.addr,e)}function Ig(r,e){r.uniform1uiv(this.addr,e)}function Dg(r,e){r.uniform2uiv(this.addr,e)}function Fg(r,e){r.uniform3uiv(this.addr,e)}function zg(r,e){r.uniform4uiv(this.addr,e)}function Bg(r,e,t){let n=e.length,i=Eo(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.safeSetTexture2D(e[s]||Vu,i[s])}function Ng(r,e,t){let n=e.length,i=Eo(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTexture3D(e[s]||qu,i[s])}function Og(r,e,t){let n=e.length,i=Eo(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.safeSetTextureCube(e[s]||Xu,i[s])}function Ug(r,e,t){let n=e.length,i=Eo(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTexture2DArray(e[s]||Wu,i[s])}function Hg(r){switch(r){case 5126:return wg;case 35664:return bg;case 35665:return Mg;case 35666:return Sg;case 35674:return Eg;case 35675:return Tg;case 35676:return Ag;case 5124:case 35670:return Rg;case 35667:case 35671:return Cg;case 35668:case 35672:return Lg;case 35669:case 35673:return Pg;case 5125:return Ig;case 36294:return Dg;case 36295:return Fg;case 36296:return zg;case 35678:case 36198:case 36298:case 36306:case 35682:return Bg;case 35679:case 36299:case 36307:return Ng;case 35680:case 36300:case 36308:case 36293:return Og;case 36289:case 36303:case 36311:case 36292:return Ug}}function Gg(r,e,t){this.id=r,this.addr=t,this.cache=[],this.setValue=_g(e.type)}function Yu(r,e,t){this.id=r,this.addr=t,this.cache=[],this.size=e.size,this.setValue=Hg(e.type)}Yu.prototype.updateCache=function(r){let e=this.cache;r instanceof Float32Array&&e.length!==r.length&&(this.cache=new Float32Array(r.length)),zt(e,r)};function Ju(r){this.id=r,this.seq=[],this.map={}}Ju.prototype.setValue=function(r,e,t){let n=this.seq;for(let i=0,s=n.length;i!==s;++i){let o=n[i];o.setValue(r,e[o.id],t)}};var la=/(\w+)(\])?(\[|\.)?/g;function $c(r,e){r.seq.push(e),r.map[e.id]=e}function kg(r,e,t){let n=r.name,i=n.length;for(la.lastIndex=0;;){let s=la.exec(n),o=la.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){$c(t,c===void 0?new Gg(a,r,e):new Yu(a,r,e));break}else{let d=t.map[a];d===void 0&&(d=new Ju(a),$c(t,d)),t=d}}}function kn(r,e){this.seq=[],this.map={};let t=r.getProgramParameter(e,35718);for(let n=0;n<t;++n){let i=r.getActiveUniform(e,n),s=r.getUniformLocation(e,i.name);kg(i,s,this)}}kn.prototype.setValue=function(r,e,t,n){let i=this.map[e];i!==void 0&&i.setValue(r,t,n)};kn.prototype.setOptional=function(r,e,t){let n=e[t];n!==void 0&&this.setValue(r,t,n)};kn.upload=function(r,e,t,n){for(let i=0,s=e.length;i!==s;++i){let o=e[i],a=t[o.id];a.needsUpdate!==!1&&o.setValue(r,a.value,n)}};kn.seqWithValue=function(r,e){let t=[];for(let n=0,i=r.length;n!==i;++n){let s=r[n];s.id in e&&t.push(s)}return t};function jc(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var Vg=0;function Wg(r){let e=r.split(`
`);for(let t=0;t<e.length;t++)e[t]=t+1+": "+e[t];return e.join(`
`)}function qg(r){switch(r){case Wn:return["Linear","( value )"];case Ke:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function Kc(r,e,t){let n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();return n&&i===""?"":t.toUpperCase()+`

`+i+`

`+Wg(r.getShaderSource(e))}function Xg(r,e){let t=qg(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Yg(r,e){let t;switch(e){case xd:t="Linear";break;case yd:t="Reinhard";break;case vd:t="OptimizedCineon";break;case _d:t="ACESFilmic";break;case wd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Jg(r){return[r.extensionDerivatives||r.envMapCubeUV||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(_r).join(`
`)}function Zg(r){let e=[];for(let t in r){let n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function $g(r,e){let t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){let s=r.getActiveAttrib(e,i),o=s.name,a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function _r(r){return r!==""}function Qc(r,e){return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function eu(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var jg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ea(r){return r.replace(jg,Kg)}function Kg(r,e){let t=Ne[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Ea(t)}var Qg=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,e0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tu(r){return r.replace(e0,Zu).replace(Qg,t0)}function t0(r,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Zu(r,e,t,n)}function Zu(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function nu(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function n0(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Iu?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Zh?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===vr&&(e="SHADOWMAP_TYPE_VSM"),e}function i0(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case $r:case jr:e="ENVMAP_TYPE_CUBE";break;case Mo:case Fl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function r0(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case jr:case Fl:e="ENVMAP_MODE_REFRACTION";break}return e}function s0(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case bo:e="ENVMAP_BLENDING_MULTIPLY";break;case md:e="ENVMAP_BLENDING_MIX";break;case gd:e="ENVMAP_BLENDING_ADD";break}return e}function o0(r,e,t,n){let i=r.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=n0(t),c=i0(t),u=r0(t),d=s0(t),h=t.isWebGL2?"":Jg(t),f=Zg(s),m=i.createProgram(),x,y,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=[f].filter(_r).join(`
`),x.length>0&&(x+=`
`),y=[h,f].filter(_r).join(`
`),y.length>0&&(y+=`
`)):(x=[nu(t),"#define SHADER_NAME "+t.shaderName,f,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define MAX_BONES "+t.maxBones,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.useVertexTexture?"#define BONE_TEXTURE":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphTargets&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargets&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_r).join(`
`),y=[h,nu(t),"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(t.extensionShaderTextureLOD||t.envMap)&&t.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Un?"#define TONE_MAPPING":"",t.toneMapping!==Un?Ne.tonemapping_pars_fragment:"",t.toneMapping!==Un?Yg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.transparent?"":"#define OPAQUE",Ne.encodings_pars_fragment,Xg("linearToOutputTexel",t.outputEncoding),t.depthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_r).join(`
`)),o=Ea(o),o=Qc(o,t),o=eu(o,t),a=Ea(a),a=Qc(a,t),a=eu(a,t),o=tu(o),a=tu(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,y=["#define varying in",t.glslVersion===Ec?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ec?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let p=g+x+o,w=g+y+a,_=jc(i,35633,p),S=jc(i,35632,w);if(i.attachShader(m,_),i.attachShader(m,S),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m),r.debug.checkShaderErrors){let P=i.getProgramInfoLog(m).trim(),W=i.getShaderInfoLog(_).trim(),U=i.getShaderInfoLog(S).trim(),v=!0,C=!0;if(i.getProgramParameter(m,35714)===!1){v=!1;let I=Kc(i,_,"vertex"),F=Kc(i,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,35715)+`

Program Info Log: `+P+`
`+I+`
`+F)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):(W===""||U==="")&&(C=!1);C&&(this.diagnostics={runnable:v,programLog:P,vertexShader:{log:W,prefix:x},fragmentShader:{log:U,prefix:y}})}i.deleteShader(_),i.deleteShader(S);let T;this.getUniforms=function(){return T===void 0&&(T=new kn(i,m)),T};let R;return this.getAttributes=function(){return R===void 0&&(R=$g(i,m)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=Vg++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=_,this.fragmentShader=S,this}var a0=0,Ta=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){let t=this.shaderCache;if(t.has(e)===!1){let n=new Aa;t.set(e,n)}return t.get(e)}},Aa=class{constructor(){this.id=a0++,this.usedTimes=0}};function l0(r,e,t,n,i,s,o){let a=new Lr,l=new Ta,c=[],u=i.isWebGL2,d=i.logarithmicDepthBuffer,h=i.floatVertexTextures,f=i.maxVertexUniforms,m=i.vertexTextures,x=i.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){let I=v.skeleton.bones;if(h)return 1024;{let z=Math.floor((f-20)/4),D=Math.min(z,I.length);return D<I.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+I.length+" bones. This GPU supports "+D+"."),0):D}}function p(v,C,I,F,z){let D=F.fog,V=v.isMeshStandardMaterial?F.environment:null,K=(v.isMeshStandardMaterial?t:e).get(v.envMap||V),me=y[v.type],H=z.isSkinnedMesh?g(z):0;v.precision!==null&&(x=i.getMaxPrecision(v.precision),x!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",x,"instead."));let Y,se,j,xe;if(me){let fe=cn[me];Y=fe.vertexShader,se=fe.fragmentShader}else Y=v.vertexShader,se=v.fragmentShader,l.update(v),j=l.getVertexShaderID(v),xe=l.getFragmentShaderID(v);let G=r.getRenderTarget(),Oe=v.alphaTest>0,ye=v.clearcoat>0;return{isWebGL2:u,shaderID:me,shaderName:v.type,vertexShader:Y,fragmentShader:se,defines:v.defines,customVertexShaderID:j,customFragmentShaderID:xe,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:x,instancing:z.isInstancedMesh===!0,instancingColor:z.isInstancedMesh===!0&&z.instanceColor!==null,supportsVertexTextures:m,outputEncoding:G===null?r.outputEncoding:G.isXRRenderTarget===!0?G.texture.encoding:Wn,map:!!v.map,matcap:!!v.matcap,envMap:!!K,envMapMode:K&&K.mapping,envMapCubeUV:!!K&&(K.mapping===Mo||K.mapping===Fl),lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===Wd,tangentSpaceNormalMap:v.normalMapType===ir,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===Ke,clearcoat:ye,clearcoatMap:ye&&!!v.clearcoatMap,clearcoatRoughnessMap:ye&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:ye&&!!v.clearcoatNormalMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,transparent:v.transparent,alphaMap:!!v.alphaMap,alphaTest:Oe,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!z.geometry&&!!z.geometry.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!z.geometry&&!!z.geometry.attributes.color&&z.geometry.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(v.map||v.bumpMap||v.normalMap||v.specularMap||v.alphaMap||v.emissiveMap||v.roughnessMap||v.metalnessMap||v.clearcoatNormalMap||v.transmission>0||v.transmissionMap||v.thicknessMap||v.specularIntensityMap||v.specularColorMap||v.sheen>0||v.sheenColorMap||v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!D,useFog:v.fog,fogExp2:D&&D.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:d,skinning:z.isSkinnedMesh===!0&&H>0,maxBones:H,useVertexTexture:h,morphTargets:!!z.geometry&&!!z.geometry.morphAttributes.position,morphNormals:!!z.geometry&&!!z.geometry.morphAttributes.normal,morphTargetsCount:z.geometry&&z.geometry.morphAttributes.position?z.geometry.morphAttributes.position.length:0,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:v.toneMapped?r.toneMapping:Un,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ft,flipSided:v.side===mt,depthPacking:v.depthPacking!==void 0?v.depthPacking:!1,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function w(v){let C=[];if(v.shaderID?C.push(v.shaderID):(C.push(v.customVertexShaderID),C.push(v.customFragmentShaderID)),v.defines!==void 0)for(let I in v.defines)C.push(I),C.push(v.defines[I]);return v.isRawShaderMaterial===!1&&(_(C,v),S(C,v),C.push(r.outputEncoding)),C.push(v.customProgramCacheKey),C.join()}function _(v,C){v.push(C.precision),v.push(C.outputEncoding),v.push(C.envMapMode),v.push(C.combine),v.push(C.vertexUvs),v.push(C.fogExp2),v.push(C.sizeAttenuation),v.push(C.maxBones),v.push(C.morphTargetsCount),v.push(C.numDirLights),v.push(C.numPointLights),v.push(C.numSpotLights),v.push(C.numHemiLights),v.push(C.numRectAreaLights),v.push(C.numDirLightShadows),v.push(C.numPointLightShadows),v.push(C.numSpotLightShadows),v.push(C.shadowMapType),v.push(C.toneMapping),v.push(C.numClippingPlanes),v.push(C.numClipIntersection)}function S(v,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.map&&a.enable(4),C.matcap&&a.enable(5),C.envMap&&a.enable(6),C.envMapCubeUV&&a.enable(7),C.lightMap&&a.enable(8),C.aoMap&&a.enable(9),C.emissiveMap&&a.enable(10),C.bumpMap&&a.enable(11),C.normalMap&&a.enable(12),C.objectSpaceNormalMap&&a.enable(13),C.tangentSpaceNormalMap&&a.enable(14),C.clearcoat&&a.enable(15),C.clearcoatMap&&a.enable(16),C.clearcoatRoughnessMap&&a.enable(17),C.clearcoatNormalMap&&a.enable(18),C.displacementMap&&a.enable(19),C.specularMap&&a.enable(20),C.roughnessMap&&a.enable(21),C.metalnessMap&&a.enable(22),C.gradientMap&&a.enable(23),C.alphaMap&&a.enable(24),C.alphaTest&&a.enable(25),C.vertexColors&&a.enable(26),C.vertexAlphas&&a.enable(27),C.vertexUvs&&a.enable(28),C.vertexTangents&&a.enable(29),C.uvsVertexOnly&&a.enable(30),C.fog&&a.enable(31),v.push(a.mask),a.disableAll(),C.useFog&&a.enable(0),C.flatShading&&a.enable(1),C.logarithmicDepthBuffer&&a.enable(2),C.skinning&&a.enable(3),C.useVertexTexture&&a.enable(4),C.morphTargets&&a.enable(5),C.morphNormals&&a.enable(6),C.premultipliedAlpha&&a.enable(7),C.shadowMapEnabled&&a.enable(8),C.physicallyCorrectLights&&a.enable(9),C.doubleSided&&a.enable(10),C.flipSided&&a.enable(11),C.depthPacking&&a.enable(12),C.dithering&&a.enable(13),C.specularIntensityMap&&a.enable(14),C.specularColorMap&&a.enable(15),C.transmission&&a.enable(16),C.transmissionMap&&a.enable(17),C.thicknessMap&&a.enable(18),C.sheen&&a.enable(19),C.sheenColorMap&&a.enable(20),C.sheenRoughnessMap&&a.enable(21),C.decodeVideoTexture&&a.enable(22),C.transparent&&a.enable(23),v.push(a.mask)}function T(v){let C=y[v.type],I;if(C){let F=cn[C];I=of.clone(F.uniforms)}else I=v.uniforms;return I}function R(v,C){let I;for(let F=0,z=c.length;F<z;F++){let D=c[F];if(D.cacheKey===C){I=D,++I.usedTimes;break}}return I===void 0&&(I=new o0(r,C,v,s),c.push(I)),I}function P(v){if(--v.usedTimes===0){let C=c.indexOf(v);c[C]=c[c.length-1],c.pop(),v.destroy()}}function W(v){l.remove(v)}function U(){l.dispose()}return{getParameters:p,getProgramCacheKey:w,getUniforms:T,acquireProgram:R,releaseProgram:P,releaseShaderCache:W,programs:c,dispose:U}}function c0(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function u0(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function iu(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function ru(){let r=[],e=0,t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(d,h,f,m,x,y){let g=r[e];return g===void 0?(g={id:d.id,object:d,geometry:h,material:f,groupOrder:m,renderOrder:d.renderOrder,z:x,group:y},r[e]=g):(g.id=d.id,g.object=d,g.geometry=h,g.material=f,g.groupOrder=m,g.renderOrder=d.renderOrder,g.z=x,g.group=y),e++,g}function a(d,h,f,m,x,y){let g=o(d,h,f,m,x,y);f.transmission>0?n.push(g):f.transparent===!0?i.push(g):t.push(g)}function l(d,h,f,m,x,y){let g=o(d,h,f,m,x,y);f.transmission>0?n.unshift(g):f.transparent===!0?i.unshift(g):t.unshift(g)}function c(d,h){t.length>1&&t.sort(d||u0),n.length>1&&n.sort(h||iu),i.length>1&&i.sort(h||iu)}function u(){for(let d=e,h=r.length;d<h;d++){let f=r[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function h0(){let r=new WeakMap;function e(n,i){let s;return r.has(n)===!1?(s=new ru,r.set(n,[s])):i>=r.get(n).length?(s=new ru,r.get(n).push(s)):s=r.get(n)[i],s}function t(){r=new WeakMap}return{get:e,dispose:t}}function d0(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new b,color:new re};break;case"SpotLight":t={position:new b,direction:new b,color:new re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new b,color:new re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new b,skyColor:new re,groundColor:new re};break;case"RectAreaLight":t={color:new re,position:new b,halfWidth:new b,halfHeight:new b};break}return r[e.id]=t,t}}}function f0(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}var p0=0;function m0(r,e){return(e.castShadow?1:0)-(r.castShadow?1:0)}function g0(r,e){let t=new d0,n=f0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)i.probe.push(new b);let s=new b,o=new Me,a=new Me;function l(u,d){let h=0,f=0,m=0;for(let W=0;W<9;W++)i.probe[W].set(0,0,0);let x=0,y=0,g=0,p=0,w=0,_=0,S=0,T=0;u.sort(m0);let R=d!==!0?Math.PI:1;for(let W=0,U=u.length;W<U;W++){let v=u[W],C=v.color,I=v.intensity,F=v.distance,z=v.shadow&&v.shadow.map?v.shadow.map.texture:null;if(v.isAmbientLight)h+=C.r*I*R,f+=C.g*I*R,m+=C.b*I*R;else if(v.isLightProbe)for(let D=0;D<9;D++)i.probe[D].addScaledVector(v.sh.coefficients[D],I);else if(v.isDirectionalLight){let D=t.get(v);if(D.color.copy(v.color).multiplyScalar(v.intensity*R),v.castShadow){let V=v.shadow,K=n.get(v);K.shadowBias=V.bias,K.shadowNormalBias=V.normalBias,K.shadowRadius=V.radius,K.shadowMapSize=V.mapSize,i.directionalShadow[x]=K,i.directionalShadowMap[x]=z,i.directionalShadowMatrix[x]=v.shadow.matrix,_++}i.directional[x]=D,x++}else if(v.isSpotLight){let D=t.get(v);if(D.position.setFromMatrixPosition(v.matrixWorld),D.color.copy(C).multiplyScalar(I*R),D.distance=F,D.coneCos=Math.cos(v.angle),D.penumbraCos=Math.cos(v.angle*(1-v.penumbra)),D.decay=v.decay,v.castShadow){let V=v.shadow,K=n.get(v);K.shadowBias=V.bias,K.shadowNormalBias=V.normalBias,K.shadowRadius=V.radius,K.shadowMapSize=V.mapSize,i.spotShadow[g]=K,i.spotShadowMap[g]=z,i.spotShadowMatrix[g]=v.shadow.matrix,T++}i.spot[g]=D,g++}else if(v.isRectAreaLight){let D=t.get(v);D.color.copy(C).multiplyScalar(I),D.halfWidth.set(v.width*.5,0,0),D.halfHeight.set(0,v.height*.5,0),i.rectArea[p]=D,p++}else if(v.isPointLight){let D=t.get(v);if(D.color.copy(v.color).multiplyScalar(v.intensity*R),D.distance=v.distance,D.decay=v.decay,v.castShadow){let V=v.shadow,K=n.get(v);K.shadowBias=V.bias,K.shadowNormalBias=V.normalBias,K.shadowRadius=V.radius,K.shadowMapSize=V.mapSize,K.shadowCameraNear=V.camera.near,K.shadowCameraFar=V.camera.far,i.pointShadow[y]=K,i.pointShadowMap[y]=z,i.pointShadowMatrix[y]=v.shadow.matrix,S++}i.point[y]=D,y++}else if(v.isHemisphereLight){let D=t.get(v);D.skyColor.copy(v.color).multiplyScalar(I*R),D.groundColor.copy(v.groundColor).multiplyScalar(I*R),i.hemi[w]=D,w++}}p>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=m;let P=i.hash;(P.directionalLength!==x||P.pointLength!==y||P.spotLength!==g||P.rectAreaLength!==p||P.hemiLength!==w||P.numDirectionalShadows!==_||P.numPointShadows!==S||P.numSpotShadows!==T)&&(i.directional.length=x,i.spot.length=g,i.rectArea.length=p,i.point.length=y,i.hemi.length=w,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=S,i.spotShadowMatrix.length=T,P.directionalLength=x,P.pointLength=y,P.spotLength=g,P.rectAreaLength=p,P.hemiLength=w,P.numDirectionalShadows=_,P.numPointShadows=S,P.numSpotShadows=T,i.version=p0++)}function c(u,d){let h=0,f=0,m=0,x=0,y=0,g=d.matrixWorldInverse;for(let p=0,w=u.length;p<w;p++){let _=u[p];if(_.isDirectionalLight){let S=i.directional[h];S.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),h++}else if(_.isSpotLight){let S=i.spot[m];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),m++}else if(_.isRectAreaLight){let S=i.rectArea[x];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(g),a.identity(),o.copy(_.matrixWorld),o.premultiply(g),a.extractRotation(o),S.halfWidth.set(_.width*.5,0,0),S.halfHeight.set(0,_.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),x++}else if(_.isPointLight){let S=i.point[f];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(g),f++}else if(_.isHemisphereLight){let S=i.hemi[y];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(g),S.direction.normalize(),y++}}}return{setup:l,setupView:c,state:i}}function su(r,e){let t=new g0(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(d){n.push(d)}function a(d){i.push(d)}function l(d){t.setup(n,d)}function c(d){t.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function x0(r,e){let t=new WeakMap;function n(s,o=0){let a;return t.has(s)===!1?(a=new su(r,e),t.set(s,[a])):o>=t.get(s).length?(a=new su(r,e),t.get(s).push(a)):a=t.get(s)[o],a}function i(){t=new WeakMap}return{get:n,dispose:i}}var Ks=class extends Tt{constructor(e){super(),this.type="MeshDepthMaterial",this.depthPacking=kd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}};Ks.prototype.isMeshDepthMaterial=!0;var Qs=class extends Tt{constructor(e){super(),this.type="MeshDistanceMaterial",this.referencePosition=new b,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};Qs.prototype.isMeshDistanceMaterial=!0;var y0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,v0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function $u(r,e,t){let n=new Zi,i=new Q,s=new Q,o=new Ze,a=new Ks({depthPacking:Vd}),l=new Qs,c={},u=t.maxTextureSize,d={0:mt,1:ai,2:Ft},h=new En({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Q},radius:{value:4}},vertexShader:y0,fragmentShader:v0}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let m=new qe;m.setAttribute("position",new gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ee(m,h),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Iu,this.render=function(_,S,T){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||_.length===0)return;let R=r.getRenderTarget(),P=r.getActiveCubeFace(),W=r.getActiveMipmapLevel(),U=r.state;U.setBlending(On),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);for(let v=0,C=_.length;v<C;v++){let I=_[v],F=I.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",I,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;i.copy(F.mapSize);let z=F.getFrameExtents();if(i.multiply(z),s.copy(F.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/z.x),i.x=s.x*z.x,F.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/z.y),i.y=s.y*z.y,F.mapSize.y=s.y)),F.map===null&&!F.isPointLightShadow&&this.type===vr){let V={minFilter:Pt,magFilter:Pt,format:Bt};F.map=new Gt(i.x,i.y,V),F.map.texture.name=I.name+".shadowMap",F.mapPass=new Gt(i.x,i.y,V),F.camera.updateProjectionMatrix()}if(F.map===null){let V={minFilter:bt,magFilter:bt,format:Bt};F.map=new Gt(i.x,i.y,V),F.map.texture.name=I.name+".shadowMap",F.camera.updateProjectionMatrix()}r.setRenderTarget(F.map),r.clear();let D=F.getViewportCount();for(let V=0;V<D;V++){let K=F.getViewport(V);o.set(s.x*K.x,s.y*K.y,s.x*K.z,s.y*K.w),U.viewport(o),F.updateMatrices(I,V),n=F.getFrustum(),w(S,T,F.camera,I,this.type)}!F.isPointLightShadow&&this.type===vr&&g(F,T),F.needsUpdate=!1}y.needsUpdate=!1,r.setRenderTarget(R,P,W)};function g(_,S){let T=e.update(x);h.defines.VSM_SAMPLES!==_.blurSamples&&(h.defines.VSM_SAMPLES=_.blurSamples,f.defines.VSM_SAMPLES=_.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),h.uniforms.shadow_pass.value=_.map.texture,h.uniforms.resolution.value=_.mapSize,h.uniforms.radius.value=_.radius,r.setRenderTarget(_.mapPass),r.clear(),r.renderBufferDirect(S,null,T,h,x,null),f.uniforms.shadow_pass.value=_.mapPass.texture,f.uniforms.resolution.value=_.mapSize,f.uniforms.radius.value=_.radius,r.setRenderTarget(_.map),r.clear(),r.renderBufferDirect(S,null,T,f,x,null)}function p(_,S,T,R,P,W,U){let v=null,C=R.isPointLight===!0?_.customDistanceMaterial:_.customDepthMaterial;if(C!==void 0?v=C:v=R.isPointLight===!0?l:a,r.localClippingEnabled&&T.clipShadows===!0&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0){let I=v.uuid,F=T.uuid,z=c[I];z===void 0&&(z={},c[I]=z);let D=z[F];D===void 0&&(D=v.clone(),z[F]=D),v=D}return v.visible=T.visible,v.wireframe=T.wireframe,U===vr?v.side=T.shadowSide!==null?T.shadowSide:T.side:v.side=T.shadowSide!==null?T.shadowSide:d[T.side],v.alphaMap=T.alphaMap,v.alphaTest=T.alphaTest,v.clipShadows=T.clipShadows,v.clippingPlanes=T.clippingPlanes,v.clipIntersection=T.clipIntersection,v.displacementMap=T.displacementMap,v.displacementScale=T.displacementScale,v.displacementBias=T.displacementBias,v.wireframeLinewidth=T.wireframeLinewidth,v.linewidth=T.linewidth,R.isPointLight===!0&&v.isMeshDistanceMaterial===!0&&(v.referencePosition.setFromMatrixPosition(R.matrixWorld),v.nearDistance=P,v.farDistance=W),v}function w(_,S,T,R,P){if(_.visible===!1)return;if(_.layers.test(S.layers)&&(_.isMesh||_.isLine||_.isPoints)&&(_.castShadow||_.receiveShadow&&P===vr)&&(!_.frustumCulled||n.intersectsObject(_))){_.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,_.matrixWorld);let v=e.update(_),C=_.material;if(Array.isArray(C)){let I=v.groups;for(let F=0,z=I.length;F<z;F++){let D=I[F],V=C[D.materialIndex];if(V&&V.visible){let K=p(_,v,V,R,T.near,T.far,P);r.renderBufferDirect(T,null,v,K,_,D)}}}else if(C.visible){let I=p(_,v,C,R,T.near,T.far,P);r.renderBufferDirect(T,null,v,I,_,null)}}let U=_.children;for(let v=0,C=U.length;v<C;v++)w(U[v],S,T,R,P)}}function _0(r,e,t){let n=t.isWebGL2;function i(){let L=!1,_e=new Ze,ge=null,Ce=new Ze(0,0,0,0);return{setMask:function(Z){ge!==Z&&!L&&(r.colorMask(Z,Z,Z,Z),ge=Z)},setLocked:function(Z){L=Z},setClear:function(Z,Re,He,ut,Vt){Vt===!0&&(Z*=ut,Re*=ut,He*=ut),_e.set(Z,Re,He,ut),Ce.equals(_e)===!1&&(r.clearColor(Z,Re,He,ut),Ce.copy(_e))},reset:function(){L=!1,ge=null,Ce.set(-1,0,0,0)}}}function s(){let L=!1,_e=null,ge=null,Ce=null;return{setTest:function(Z){Z?G(2929):Oe(2929)},setMask:function(Z){_e!==Z&&!L&&(r.depthMask(Z),_e=Z)},setFunc:function(Z){if(ge!==Z){if(Z)switch(Z){case ld:r.depthFunc(512);break;case cd:r.depthFunc(519);break;case ud:r.depthFunc(513);break;case xa:r.depthFunc(515);break;case hd:r.depthFunc(514);break;case dd:r.depthFunc(518);break;case fd:r.depthFunc(516);break;case pd:r.depthFunc(517);break;default:r.depthFunc(515)}else r.depthFunc(515);ge=Z}},setLocked:function(Z){L=Z},setClear:function(Z){Ce!==Z&&(r.clearDepth(Z),Ce=Z)},reset:function(){L=!1,_e=null,ge=null,Ce=null}}}function o(){let L=!1,_e=null,ge=null,Ce=null,Z=null,Re=null,He=null,ut=null,Vt=null;return{setTest:function(dt){L||(dt?G(2960):Oe(2960))},setMask:function(dt){_e!==dt&&!L&&(r.stencilMask(dt),_e=dt)},setFunc:function(dt,rn,pn){(ge!==dt||Ce!==rn||Z!==pn)&&(r.stencilFunc(dt,rn,pn),ge=dt,Ce=rn,Z=pn)},setOp:function(dt,rn,pn){(Re!==dt||He!==rn||ut!==pn)&&(r.stencilOp(dt,rn,pn),Re=dt,He=rn,ut=pn)},setLocked:function(dt){L=dt},setClear:function(dt){Vt!==dt&&(r.clearStencil(dt),Vt=dt)},reset:function(){L=!1,_e=null,ge=null,Ce=null,Z=null,Re=null,He=null,ut=null,Vt=null}}}let a=new i,l=new s,c=new o,u={},d={},h=new WeakMap,f=[],m=null,x=!1,y=null,g=null,p=null,w=null,_=null,S=null,T=null,R=!1,P=null,W=null,U=null,v=null,C=null,I=r.getParameter(35661),F=!1,z=0,D=r.getParameter(7938);D.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(D)[1]),F=z>=1):D.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),F=z>=2);let V=null,K={},me=r.getParameter(3088),H=r.getParameter(2978),Y=new Ze().fromArray(me),se=new Ze().fromArray(H);function j(L,_e,ge){let Ce=new Uint8Array(4),Z=r.createTexture();r.bindTexture(L,Z),r.texParameteri(L,10241,9728),r.texParameteri(L,10240,9728);for(let Re=0;Re<ge;Re++)r.texImage2D(_e+Re,0,6408,1,1,0,6408,5121,Ce);return Z}let xe={};xe[3553]=j(3553,3553,1),xe[34067]=j(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),G(2929),l.setFunc(xa),te(!1),ue(jl),G(2884),N(On);function G(L){u[L]!==!0&&(r.enable(L),u[L]=!0)}function Oe(L){u[L]!==!1&&(r.disable(L),u[L]=!1)}function ye(L,_e){return d[L]!==_e?(r.bindFramebuffer(L,_e),d[L]=_e,n&&(L===36009&&(d[36160]=_e),L===36160&&(d[36009]=_e)),!0):!1}function Te(L,_e){let ge=f,Ce=!1;if(L)if(ge=h.get(_e),ge===void 0&&(ge=[],h.set(_e,ge)),L.isWebGLMultipleRenderTargets){let Z=L.texture;if(ge.length!==Z.length||ge[0]!==36064){for(let Re=0,He=Z.length;Re<He;Re++)ge[Re]=36064+Re;ge.length=Z.length,Ce=!0}}else ge[0]!==36064&&(ge[0]=36064,Ce=!0);else ge[0]!==1029&&(ge[0]=1029,Ce=!0);Ce&&(t.isWebGL2?r.drawBuffers(ge):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ge))}function fe(L){return m!==L?(r.useProgram(L),m=L,!0):!1}let ne={[Ni]:32774,[jh]:32778,[Kh]:32779};if(n)ne[ec]=32775,ne[tc]=32776;else{let L=e.get("EXT_blend_minmax");L!==null&&(ne[ec]=L.MIN_EXT,ne[tc]=L.MAX_EXT)}let ie={[Qh]:0,[ed]:1,[td]:768,[Fu]:770,[ad]:776,[sd]:774,[id]:772,[nd]:769,[zu]:771,[od]:775,[rd]:773};function N(L,_e,ge,Ce,Z,Re,He,ut){if(L===On){x===!0&&(Oe(3042),x=!1);return}if(x===!1&&(G(3042),x=!0),L!==$h){if(L!==y||ut!==R){if((g!==Ni||_!==Ni)&&(r.blendEquation(32774),g=Ni,_=Ni),ut)switch(L){case wr:r.blendFuncSeparate(1,771,1,771);break;case Nt:r.blendFunc(1,1);break;case Kl:r.blendFuncSeparate(0,769,0,1);break;case Ql:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case wr:r.blendFuncSeparate(770,771,1,771);break;case Nt:r.blendFunc(770,1);break;case Kl:r.blendFuncSeparate(0,769,0,1);break;case Ql:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}p=null,w=null,S=null,T=null,y=L,R=ut}return}Z=Z||_e,Re=Re||ge,He=He||Ce,(_e!==g||Z!==_)&&(r.blendEquationSeparate(ne[_e],ne[Z]),g=_e,_=Z),(ge!==p||Ce!==w||Re!==S||He!==T)&&(r.blendFuncSeparate(ie[ge],ie[Ce],ie[Re],ie[He]),p=ge,w=Ce,S=Re,T=He),y=L,R=null}function J(L,_e){L.side===Ft?Oe(2884):G(2884);let ge=L.side===mt;_e&&(ge=!ge),te(ge),L.blending===wr&&L.transparent===!1?N(On):N(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);let Ce=L.stencilWrite;c.setTest(Ce),Ce&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Se(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?G(32926):Oe(32926)}function te(L){P!==L&&(L?r.frontFace(2304):r.frontFace(2305),P=L)}function ue(L){L!==Yh?(G(2884),L!==W&&(L===jl?r.cullFace(1029):L===Jh?r.cullFace(1028):r.cullFace(1032))):Oe(2884),W=L}function le(L){L!==U&&(F&&r.lineWidth(L),U=L)}function Se(L,_e,ge){L?(G(32823),(v!==_e||C!==ge)&&(r.polygonOffset(_e,ge),v=_e,C=ge)):Oe(32823)}function Ae(L){L?G(3089):Oe(3089)}function Ge(L){L===void 0&&(L=33984+I-1),V!==L&&(r.activeTexture(L),V=L)}function st(L,_e){V===null&&Ge();let ge=K[V];ge===void 0&&(ge={type:void 0,texture:void 0},K[V]=ge),(ge.type!==L||ge.texture!==_e)&&(r.bindTexture(L,_e||xe[L]),ge.type=L,ge.texture=_e)}function je(){let L=K[V];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function A(){try{r.compressedTexImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function M(){try{r.texSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function X(){try{r.texSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function oe(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function we(){try{r.texStorage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function q(){try{r.texStorage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ee(){try{r.texImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function be(){try{r.texImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function he(L){Y.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),Y.copy(L))}function ce(L){se.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),se.copy(L))}function Pe(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},V=null,K={},d={},h=new WeakMap,f=[],m=null,x=!1,y=null,g=null,p=null,w=null,_=null,S=null,T=null,R=!1,P=null,W=null,U=null,v=null,C=null,Y.set(0,0,r.canvas.width,r.canvas.height),se.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:G,disable:Oe,bindFramebuffer:ye,drawBuffers:Te,useProgram:fe,setBlending:N,setMaterial:J,setFlipSided:te,setCullFace:ue,setLineWidth:le,setPolygonOffset:Se,setScissorTest:Ae,activeTexture:Ge,bindTexture:st,unbindTexture:je,compressedTexImage2D:A,texImage2D:Ee,texImage3D:be,texStorage2D:we,texStorage3D:q,texSubImage2D:M,texSubImage3D:X,compressedTexSubImage2D:oe,scissor:he,viewport:ce,reset:Pe}}function w0(r,e,t,n,i,s,o){let a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,d=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):void 0,m=new WeakMap,x,y=!1;try{y=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(A){}function g(A,M){return y?new OffscreenCanvas(A,M):Rr("canvas")}function p(A,M,X,oe){let we=1;if((A.width>oe||A.height>oe)&&(we=oe/Math.max(A.width,A.height)),we<1||M===!0)if(typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&A instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&A instanceof ImageBitmap){let q=M?Yd:Math.floor,Ee=q(we*A.width),be=q(we*A.height);x===void 0&&(x=g(Ee,be));let he=X?g(Ee,be):x;return he.width=Ee,he.height=be,he.getContext("2d").drawImage(A,0,0,Ee,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+Ee+"x"+be+")."),he}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function w(A){return Tc(A.width)&&Tc(A.height)}function _(A){return a?!1:A.wrapS!==Xt||A.wrapT!==Xt||A.minFilter!==bt&&A.minFilter!==Pt}function S(A,M){return A.generateMipmaps&&M&&A.minFilter!==bt&&A.minFilter!==Pt}function T(A){r.generateMipmap(A)}function R(A,M,X,oe,we=!1){if(a===!1)return M;if(A!==null){if(r[A]!==void 0)return r[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let q=M;return M===6403&&(X===5126&&(q=33326),X===5131&&(q=33325),X===5121&&(q=33321)),M===33319&&(X===5126&&(q=33328),X===5131&&(q=33327),X===5121&&(q=33323)),M===6408&&(X===5126&&(q=34836),X===5131&&(q=34842),X===5121&&(q=oe===Ke&&we===!1?35907:32856),X===32819&&(q=32854),X===32820&&(q=32855)),(q===33325||q===33326||q===33327||q===33328||q===34842||q===34836)&&e.get("EXT_color_buffer_float"),q}function P(A,M,X){return S(A,X)===!0||A.isFramebufferTexture&&A.minFilter!==bt&&A.minFilter!==Pt?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function W(A){return A===bt||A===nc||A===ic?9728:9729}function U(A){let M=A.target;M.removeEventListener("dispose",U),C(M),M.isVideoTexture&&m.delete(M),o.memory.textures--}function v(A){let M=A.target;M.removeEventListener("dispose",v),I(M)}function C(A){let M=n.get(A);M.__webglInit!==void 0&&(r.deleteTexture(M.__webglTexture),n.remove(A))}function I(A){let M=A.texture,X=n.get(A),oe=n.get(M);if(A){if(oe.__webglTexture!==void 0&&(r.deleteTexture(oe.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let we=0;we<6;we++)r.deleteFramebuffer(X.__webglFramebuffer[we]),X.__webglDepthbuffer&&r.deleteRenderbuffer(X.__webglDepthbuffer[we]);else r.deleteFramebuffer(X.__webglFramebuffer),X.__webglDepthbuffer&&r.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&r.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer&&r.deleteRenderbuffer(X.__webglColorRenderbuffer),X.__webglDepthRenderbuffer&&r.deleteRenderbuffer(X.__webglDepthRenderbuffer);if(A.isWebGLMultipleRenderTargets)for(let we=0,q=M.length;we<q;we++){let Ee=n.get(M[we]);Ee.__webglTexture&&(r.deleteTexture(Ee.__webglTexture),o.memory.textures--),n.remove(M[we])}n.remove(M),n.remove(A)}}let F=0;function z(){F=0}function D(){let A=F;return A>=l&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l),F+=1,A}function V(A,M){let X=n.get(A);if(A.isVideoTexture&&le(A),A.version>0&&X.__version!==A.version){let oe=A.image;if(oe===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(oe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{G(X,A,M);return}}t.activeTexture(33984+M),t.bindTexture(3553,X.__webglTexture)}function K(A,M){let X=n.get(A);if(A.version>0&&X.__version!==A.version){G(X,A,M);return}t.activeTexture(33984+M),t.bindTexture(35866,X.__webglTexture)}function me(A,M){let X=n.get(A);if(A.version>0&&X.__version!==A.version){G(X,A,M);return}t.activeTexture(33984+M),t.bindTexture(32879,X.__webglTexture)}function H(A,M){let X=n.get(A);if(A.version>0&&X.__version!==A.version){Oe(X,A,M);return}t.activeTexture(33984+M),t.bindTexture(34067,X.__webglTexture)}let Y={[Er]:10497,[Xt]:33071,[_a]:33648},se={[bt]:9728,[nc]:9984,[ic]:9986,[Pt]:9729,[bd]:9985,[So]:9987};function j(A,M,X){if(X?(r.texParameteri(A,10242,Y[M.wrapS]),r.texParameteri(A,10243,Y[M.wrapT]),(A===32879||A===35866)&&r.texParameteri(A,32882,Y[M.wrapR]),r.texParameteri(A,10240,se[M.magFilter]),r.texParameteri(A,10241,se[M.minFilter])):(r.texParameteri(A,10242,33071),r.texParameteri(A,10243,33071),(A===32879||A===35866)&&r.texParameteri(A,32882,33071),(M.wrapS!==Xt||M.wrapT!==Xt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(A,10240,W(M.magFilter)),r.texParameteri(A,10241,W(M.minFilter)),M.minFilter!==bt&&M.minFilter!==Pt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){let oe=e.get("EXT_texture_filter_anisotropic");if(M.type===si&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===Gi&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(r.texParameterf(A,oe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function xe(A,M){A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",U),A.__webglTexture=r.createTexture(),o.memory.textures++)}function G(A,M,X){let oe=3553;M.isDataTexture2DArray&&(oe=35866),M.isDataTexture3D&&(oe=32879),xe(A,M),t.activeTexture(33984+X),t.bindTexture(oe,A.__webglTexture),r.pixelStorei(37440,M.flipY),r.pixelStorei(37441,M.premultiplyAlpha),r.pixelStorei(3317,M.unpackAlignment),r.pixelStorei(37443,0);let we=_(M)&&w(M.image)===!1,q=p(M.image,we,!1,u);q=Se(M,q);let Ee=w(q)||a,be=s.convert(M.format,M.encoding),he=s.convert(M.type),ce=R(M.internalFormat,be,he,M.encoding,M.isVideoTexture);j(oe,M,Ee);let Pe,L=M.mipmaps,_e=a&&M.isVideoTexture!==!0,ge=A.__version===void 0,Ce=P(M,q,Ee);if(M.isDepthTexture)ce=6402,a?M.type===si?ce=36012:M.type===Gs?ce=33190:M.type===ki?ce=35056:ce=33189:M.type===si&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===oi&&ce===6402&&M.type!==Tr&&M.type!==Gs&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Tr,he=s.convert(M.type)),M.format===qi&&ce===6402&&(ce=34041,M.type!==ki&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=ki,he=s.convert(M.type))),_e&&ge?t.texStorage2D(3553,1,ce,q.width,q.height):t.texImage2D(3553,0,ce,q.width,q.height,0,be,he,null);else if(M.isDataTexture)if(L.length>0&&Ee){_e&&ge&&t.texStorage2D(3553,Ce,ce,L[0].width,L[0].height);for(let Z=0,Re=L.length;Z<Re;Z++)Pe=L[Z],_e?t.texSubImage2D(3553,0,0,0,Pe.width,Pe.height,be,he,Pe.data):t.texImage2D(3553,Z,ce,Pe.width,Pe.height,0,be,he,Pe.data);M.generateMipmaps=!1}else _e?(ge&&t.texStorage2D(3553,Ce,ce,q.width,q.height),t.texSubImage2D(3553,0,0,0,q.width,q.height,be,he,q.data)):t.texImage2D(3553,0,ce,q.width,q.height,0,be,he,q.data);else if(M.isCompressedTexture){_e&&ge&&t.texStorage2D(3553,Ce,ce,L[0].width,L[0].height);for(let Z=0,Re=L.length;Z<Re;Z++)Pe=L[Z],M.format!==Bt?be!==null?_e?t.compressedTexSubImage2D(3553,Z,0,0,Pe.width,Pe.height,be,Pe.data):t.compressedTexImage2D(3553,Z,ce,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_e?t.texSubImage2D(3553,Z,0,0,Pe.width,Pe.height,be,he,Pe.data):t.texImage2D(3553,Z,ce,Pe.width,Pe.height,0,be,he,Pe.data)}else if(M.isDataTexture2DArray)_e?(ge&&t.texStorage3D(35866,Ce,ce,q.width,q.height,q.depth),t.texSubImage3D(35866,0,0,0,0,q.width,q.height,q.depth,be,he,q.data)):t.texImage3D(35866,0,ce,q.width,q.height,q.depth,0,be,he,q.data);else if(M.isDataTexture3D)_e?(ge&&t.texStorage3D(32879,Ce,ce,q.width,q.height,q.depth),t.texSubImage3D(32879,0,0,0,0,q.width,q.height,q.depth,be,he,q.data)):t.texImage3D(32879,0,ce,q.width,q.height,q.depth,0,be,he,q.data);else if(M.isFramebufferTexture)_e&&ge?t.texStorage2D(3553,Ce,ce,q.width,q.height):t.texImage2D(3553,0,ce,q.width,q.height,0,be,he,null);else if(L.length>0&&Ee){_e&&ge&&t.texStorage2D(3553,Ce,ce,L[0].width,L[0].height);for(let Z=0,Re=L.length;Z<Re;Z++)Pe=L[Z],_e?t.texSubImage2D(3553,Z,0,0,be,he,Pe):t.texImage2D(3553,Z,ce,be,he,Pe);M.generateMipmaps=!1}else _e?(ge&&t.texStorage2D(3553,Ce,ce,q.width,q.height),t.texSubImage2D(3553,0,0,0,be,he,q)):t.texImage2D(3553,0,ce,be,he,q);S(M,Ee)&&T(oe),A.__version=M.version,M.onUpdate&&M.onUpdate(M)}function Oe(A,M,X){if(M.image.length!==6)return;xe(A,M),t.activeTexture(33984+X),t.bindTexture(34067,A.__webglTexture),r.pixelStorei(37440,M.flipY),r.pixelStorei(37441,M.premultiplyAlpha),r.pixelStorei(3317,M.unpackAlignment),r.pixelStorei(37443,0);let oe=M&&(M.isCompressedTexture||M.image[0].isCompressedTexture),we=M.image[0]&&M.image[0].isDataTexture,q=[];for(let Z=0;Z<6;Z++)!oe&&!we?q[Z]=p(M.image[Z],!1,!0,c):q[Z]=we?M.image[Z].image:M.image[Z],q[Z]=Se(M,q[Z]);let Ee=q[0],be=w(Ee)||a,he=s.convert(M.format,M.encoding),ce=s.convert(M.type),Pe=R(M.internalFormat,he,ce,M.encoding),L=a&&M.isVideoTexture!==!0,_e=A.__version===void 0,ge=P(M,Ee,be);j(34067,M,be);let Ce;if(oe){L&&_e&&t.texStorage2D(34067,ge,Pe,Ee.width,Ee.height);for(let Z=0;Z<6;Z++){Ce=q[Z].mipmaps;for(let Re=0;Re<Ce.length;Re++){let He=Ce[Re];M.format!==Bt?he!==null?L?t.compressedTexSubImage2D(34069+Z,Re,0,0,He.width,He.height,he,He.data):t.compressedTexImage2D(34069+Z,Re,Pe,He.width,He.height,0,He.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?t.texSubImage2D(34069+Z,Re,0,0,He.width,He.height,he,ce,He.data):t.texImage2D(34069+Z,Re,Pe,He.width,He.height,0,he,ce,He.data)}}}else{Ce=M.mipmaps,L&&_e&&(Ce.length>0&&ge++,t.texStorage2D(34067,ge,Pe,q[0].width,q[0].height));for(let Z=0;Z<6;Z++)if(we){L?t.texSubImage2D(34069+Z,0,0,0,q[Z].width,q[Z].height,he,ce,q[Z].data):t.texImage2D(34069+Z,0,Pe,q[Z].width,q[Z].height,0,he,ce,q[Z].data);for(let Re=0;Re<Ce.length;Re++){let ut=Ce[Re].image[Z].image;L?t.texSubImage2D(34069+Z,Re+1,0,0,ut.width,ut.height,he,ce,ut.data):t.texImage2D(34069+Z,Re+1,Pe,ut.width,ut.height,0,he,ce,ut.data)}}else{L?t.texSubImage2D(34069+Z,0,0,0,he,ce,q[Z]):t.texImage2D(34069+Z,0,Pe,he,ce,q[Z]);for(let Re=0;Re<Ce.length;Re++){let He=Ce[Re];L?t.texSubImage2D(34069+Z,Re+1,0,0,he,ce,He.image[Z]):t.texImage2D(34069+Z,Re+1,Pe,he,ce,He.image[Z])}}}S(M,be)&&T(34067),A.__version=M.version,M.onUpdate&&M.onUpdate(M)}function ye(A,M,X,oe,we){let q=s.convert(X.format,X.encoding),Ee=s.convert(X.type),be=R(X.internalFormat,q,Ee,X.encoding);n.get(M).__hasExternalTextures||(we===32879||we===35866?t.texImage3D(we,0,be,M.width,M.height,M.depth,0,q,Ee,null):t.texImage2D(we,0,be,M.width,M.height,0,q,Ee,null)),t.bindFramebuffer(36160,A),M.useRenderToTexture?f.framebufferTexture2DMultisampleEXT(36160,oe,we,n.get(X).__webglTexture,0,ue(M)):r.framebufferTexture2D(36160,oe,we,n.get(X).__webglTexture,0),t.bindFramebuffer(36160,null)}function Te(A,M,X){if(r.bindRenderbuffer(36161,A),M.depthBuffer&&!M.stencilBuffer){let oe=33189;if(X||M.useRenderToTexture){let we=M.depthTexture;we&&we.isDepthTexture&&(we.type===si?oe=36012:we.type===Gs&&(oe=33190));let q=ue(M);M.useRenderToTexture?f.renderbufferStorageMultisampleEXT(36161,q,oe,M.width,M.height):r.renderbufferStorageMultisample(36161,q,oe,M.width,M.height)}else r.renderbufferStorage(36161,oe,M.width,M.height);r.framebufferRenderbuffer(36160,36096,36161,A)}else if(M.depthBuffer&&M.stencilBuffer){let oe=ue(M);X&&M.useRenderbuffer?r.renderbufferStorageMultisample(36161,oe,35056,M.width,M.height):M.useRenderToTexture?f.renderbufferStorageMultisampleEXT(36161,oe,35056,M.width,M.height):r.renderbufferStorage(36161,34041,M.width,M.height),r.framebufferRenderbuffer(36160,33306,36161,A)}else{let oe=M.isWebGLMultipleRenderTargets===!0?M.texture[0]:M.texture,we=s.convert(oe.format,oe.encoding),q=s.convert(oe.type),Ee=R(oe.internalFormat,we,q,oe.encoding),be=ue(M);X&&M.useRenderbuffer?r.renderbufferStorageMultisample(36161,be,Ee,M.width,M.height):M.useRenderToTexture?f.renderbufferStorageMultisampleEXT(36161,be,Ee,M.width,M.height):r.renderbufferStorage(36161,Ee,M.width,M.height)}r.bindRenderbuffer(36161,null)}function fe(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),V(M.depthTexture,0);let oe=n.get(M.depthTexture).__webglTexture,we=ue(M);if(M.depthTexture.format===oi)M.useRenderToTexture?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,oe,0,we):r.framebufferTexture2D(36160,36096,3553,oe,0);else if(M.depthTexture.format===qi)M.useRenderToTexture?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,oe,0,we):r.framebufferTexture2D(36160,33306,3553,oe,0);else throw new Error("Unknown depthTexture format")}function ne(A){let M=n.get(A),X=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");fe(M.__webglFramebuffer,A)}else if(X){M.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)t.bindFramebuffer(36160,M.__webglFramebuffer[oe]),M.__webglDepthbuffer[oe]=r.createRenderbuffer(),Te(M.__webglDepthbuffer[oe],A,!1)}else t.bindFramebuffer(36160,M.__webglFramebuffer),M.__webglDepthbuffer=r.createRenderbuffer(),Te(M.__webglDepthbuffer,A,!1);t.bindFramebuffer(36160,null)}function ie(A,M,X){let oe=n.get(A);M!==void 0&&ye(oe.__webglFramebuffer,A,A.texture,36064,3553),X!==void 0&&ne(A)}function N(A){let M=A.texture,X=n.get(A),oe=n.get(M);A.addEventListener("dispose",v),A.isWebGLMultipleRenderTargets!==!0&&(oe.__webglTexture===void 0&&(oe.__webglTexture=r.createTexture()),oe.__version=M.version,o.memory.textures++);let we=A.isWebGLCubeRenderTarget===!0,q=A.isWebGLMultipleRenderTargets===!0,Ee=M.isDataTexture3D||M.isDataTexture2DArray,be=w(A)||a;if(we){X.__webglFramebuffer=[];for(let he=0;he<6;he++)X.__webglFramebuffer[he]=r.createFramebuffer()}else if(X.__webglFramebuffer=r.createFramebuffer(),q)if(i.drawBuffers){let he=A.texture;for(let ce=0,Pe=he.length;ce<Pe;ce++){let L=n.get(he[ce]);L.__webglTexture===void 0&&(L.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");else if(A.useRenderbuffer)if(a){X.__webglMultisampledFramebuffer=r.createFramebuffer(),X.__webglColorRenderbuffer=r.createRenderbuffer(),r.bindRenderbuffer(36161,X.__webglColorRenderbuffer);let he=s.convert(M.format,M.encoding),ce=s.convert(M.type),Pe=R(M.internalFormat,he,ce,M.encoding),L=ue(A);r.renderbufferStorageMultisample(36161,L,Pe,A.width,A.height),t.bindFramebuffer(36160,X.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064,36161,X.__webglColorRenderbuffer),r.bindRenderbuffer(36161,null),A.depthBuffer&&(X.__webglDepthRenderbuffer=r.createRenderbuffer(),Te(X.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(we){t.bindTexture(34067,oe.__webglTexture),j(34067,M,be);for(let he=0;he<6;he++)ye(X.__webglFramebuffer[he],A,M,36064,34069+he);S(M,be)&&T(34067),t.unbindTexture()}else if(q){let he=A.texture;for(let ce=0,Pe=he.length;ce<Pe;ce++){let L=he[ce],_e=n.get(L);t.bindTexture(3553,_e.__webglTexture),j(3553,L,be),ye(X.__webglFramebuffer,A,L,36064+ce,3553),S(L,be)&&T(3553)}t.unbindTexture()}else{let he=3553;Ee&&(a?he=M.isDataTexture3D?32879:35866:console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")),t.bindTexture(he,oe.__webglTexture),j(he,M,be),ye(X.__webglFramebuffer,A,M,36064,he),S(M,be)&&T(he),t.unbindTexture()}A.depthBuffer&&ne(A)}function J(A){let M=w(A)||a,X=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let oe=0,we=X.length;oe<we;oe++){let q=X[oe];if(S(q,M)){let Ee=A.isWebGLCubeRenderTarget?34067:3553,be=n.get(q).__webglTexture;t.bindTexture(Ee,be),T(Ee),t.unbindTexture()}}}function te(A){if(A.useRenderbuffer)if(a){let M=A.width,X=A.height,oe=16384,we=[36064],q=A.stencilBuffer?33306:36096;A.depthBuffer&&we.push(q),A.ignoreDepthForMultisampleCopy||(A.depthBuffer&&(oe|=256),A.stencilBuffer&&(oe|=1024));let Ee=n.get(A);t.bindFramebuffer(36008,Ee.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,Ee.__webglFramebuffer),A.ignoreDepthForMultisampleCopy&&(r.invalidateFramebuffer(36008,[q]),r.invalidateFramebuffer(36009,[q])),r.blitFramebuffer(0,0,M,X,0,0,M,X,oe,9728),r.invalidateFramebuffer(36008,we),t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,Ee.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function ue(A){return a&&(A.useRenderbuffer||A.useRenderToTexture)?Math.min(d,A.samples):0}function le(A){let M=o.render.frame;m.get(A)!==M&&(m.set(A,M),A.update())}function Se(A,M){let X=A.encoding,oe=A.format,we=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===wa||X!==Wn&&(X===Ke?a===!1?e.has("EXT_sRGB")===!0&&oe===Bt?(A.format=wa,A.minFilter=Pt,A.generateMipmaps=!1):M=Mn.sRGBToLinear(M):(oe!==Bt||we!==Hn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",X)),M}let Ae=!1,Ge=!1;function st(A,M){A&&A.isWebGLRenderTarget&&(Ae===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),Ae=!0),A=A.texture),V(A,M)}function je(A,M){A&&A.isWebGLCubeRenderTarget&&(Ge===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),Ge=!0),A=A.texture),H(A,M)}this.allocateTextureUnit=D,this.resetTextureUnits=z,this.setTexture2D=V,this.setTexture2DArray=K,this.setTexture3D=me,this.setTextureCube=H,this.rebindTextures=ie,this.setupRenderTarget=N,this.updateRenderTargetMipmap=J,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=ye,this.safeSetTexture2D=st,this.safeSetTextureCube=je}function b0(r,e,t){let n=t.isWebGL2;function i(s,o=null){let a;if(s===Hn)return 5121;if(s===Td)return 32819;if(s===Ad)return 32820;if(s===Md)return 5120;if(s===Sd)return 5122;if(s===Tr)return 5123;if(s===Ed)return 5124;if(s===Gs)return 5125;if(s===si)return 5126;if(s===Gi)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Rd)return 6406;if(s===Bt)return 6408;if(s===Ld)return 6409;if(s===Pd)return 6410;if(s===oi)return 6402;if(s===qi)return 34041;if(s===Id)return 6403;if(s===Cd)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===wa)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Dd)return 36244;if(s===Fd)return 33319;if(s===zd)return 33320;if(s===Bd)return 36249;if(s===Io||s===Do||s===Fo||s===zo)if(o===Ke)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Io)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Do)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Fo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===zo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Io)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Do)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Fo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===zo)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===rc||s===sc||s===oc||s===ac)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===rc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===sc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===oc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ac)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Nd)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===lc||s===cc)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===lc)return o===Ke?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===cc)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===uc||s===hc||s===dc||s===fc||s===pc||s===mc||s===gc||s===xc||s===yc||s===vc||s===_c||s===wc||s===bc||s===Mc)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===uc)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===hc)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===dc)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===fc)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===pc)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===mc)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===gc)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===xc)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===yc)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===vc)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===_c)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===wc)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===bc)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Mc)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Sc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Sc)return o===Ke?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===ki)return n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:i}}var eo=class extends It{constructor(e=[]){super(),this.cameras=e}};eo.prototype.isArrayCamera=!0;var ve=class extends et{constructor(){super(),this.type="Group"}};ve.prototype.isGroup=!0;var M0={type:"move"},br=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ve,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ve,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ve,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(a!==null&&(i=t.getPose(e.targetRaySpace,n),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(M0))),c&&e.hand){o=!0;for(let x of e.hand.values()){let y=t.getJointPose(x,n);if(c.joints[x.jointName]===void 0){let p=new ve;p.matrixAutoUpdate=!1,p.visible=!1,c.joints[x.jointName]=p,c.add(p)}let g=c.joints[x.jointName];y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.jointRadius=y.radius),g.visible=y!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,m=.005;c.inputState.pinching&&h>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}},zr=class extends Rt{constructor(e,t,n,i,s,o,a,l,c,u){if(u=u!==void 0?u:oi,u!==oi&&u!==qi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===oi&&(n=Tr),n===void 0&&u===qi&&(n=ki),super(null,i,s,o,a,l,u,n,c),this.image={width:e,height:t},this.magFilter=a!==void 0?a:bt,this.minFilter=l!==void 0?l:bt,this.flipY=!1,this.generateMipmaps=!1}};zr.prototype.isDepthTexture=!0;var Ra=class extends bn{constructor(e,t){super();let n=this,i=null,s=1,o=null,a="local-floor",l=e.extensions.has("WEBGL_multisampled_render_to_texture"),c=null,u=null,d=null,h=null,f=!1,m=null,x=t.getContextAttributes(),y=null,g=null,p=[],w=new Map,_=new It;_.layers.enable(1),_.viewport=new Ze;let S=new It;S.layers.enable(2),S.viewport=new Ze;let T=[_,S],R=new eo;R.layers.enable(1),R.layers.enable(2);let P=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let Y=p[H];return Y===void 0&&(Y=new br,p[H]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(H){let Y=p[H];return Y===void 0&&(Y=new br,p[H]=Y),Y.getGripSpace()},this.getHand=function(H){let Y=p[H];return Y===void 0&&(Y=new br,p[H]=Y),Y.getHandSpace()};function U(H){let Y=w.get(H.inputSource);Y&&Y.dispatchEvent({type:H.type,data:H.inputSource})}function v(){w.forEach(function(H,Y){H.disconnect(Y)}),w.clear(),P=null,W=null,e.setRenderTarget(y),h=null,d=null,u=null,i=null,g=null,me.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(H){if(i=H,i!==null){if(y=e.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",v),i.addEventListener("inputsourceschange",C),x.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let Y={antialias:i.renderState.layers===void 0?x.antialias:!0,alpha:x.alpha,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(i,t,Y),i.updateRenderState({baseLayer:h}),g=new Gt(h.framebufferWidth,h.framebufferHeight,{format:Bt,type:Hn,encoding:e.outputEncoding})}else{f=x.antialias;let Y=null,se=null,j=null;x.depth&&(j=x.stencil?35056:33190,Y=x.stencil?qi:oi,se=x.stencil?ki:Tr);let xe={colorFormat:e.outputEncoding===Ke?35907:32856,depthFormat:j,scaleFactor:s};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(xe),i.updateRenderState({layers:[d]}),f?g=new Cr(d.textureWidth,d.textureHeight,{format:Bt,type:Hn,depthTexture:new zr(d.textureWidth,d.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:x.stencil,ignoreDepth:d.ignoreDepthValues,useRenderToTexture:l,encoding:e.outputEncoding}):g=new Gt(d.textureWidth,d.textureHeight,{format:Bt,type:Hn,depthTexture:new zr(d.textureWidth,d.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:x.stencil,ignoreDepth:d.ignoreDepthValues,encoding:e.outputEncoding})}g.isXRRenderTarget=!0,this.setFoveation(1),o=await i.requestReferenceSpace(a),me.setContext(i),me.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function C(H){let Y=i.inputSources;for(let se=0;se<p.length;se++)w.set(Y[se],p[se]);for(let se=0;se<H.removed.length;se++){let j=H.removed[se],xe=w.get(j);xe&&(xe.dispatchEvent({type:"disconnected",data:j}),w.delete(j))}for(let se=0;se<H.added.length;se++){let j=H.added[se],xe=w.get(j);xe&&xe.dispatchEvent({type:"connected",data:j})}}let I=new b,F=new b;function z(H,Y,se){I.setFromMatrixPosition(Y.matrixWorld),F.setFromMatrixPosition(se.matrixWorld);let j=I.distanceTo(F),xe=Y.projectionMatrix.elements,G=se.projectionMatrix.elements,Oe=xe[14]/(xe[10]-1),ye=xe[14]/(xe[10]+1),Te=(xe[9]+1)/xe[5],fe=(xe[9]-1)/xe[5],ne=(xe[8]-1)/xe[0],ie=(G[8]+1)/G[0],N=Oe*ne,J=Oe*ie,te=j/(-ne+ie),ue=te*-ne;Y.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(ue),H.translateZ(te),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();let le=Oe+te,Se=ye+te,Ae=N-ue,Ge=J+(j-ue),st=Te*ye/Se*le,je=fe*ye/Se*le;H.projectionMatrix.makePerspective(Ae,Ge,st,je,le,Se)}function D(H,Y){Y===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(Y.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(i===null)return;R.near=S.near=_.near=H.near,R.far=S.far=_.far=H.far,(P!==R.near||W!==R.far)&&(i.updateRenderState({depthNear:R.near,depthFar:R.far}),P=R.near,W=R.far);let Y=H.parent,se=R.cameras;D(R,Y);for(let xe=0;xe<se.length;xe++)D(se[xe],Y);R.matrixWorld.decompose(R.position,R.quaternion,R.scale),H.position.copy(R.position),H.quaternion.copy(R.quaternion),H.scale.copy(R.scale),H.matrix.copy(R.matrix),H.matrixWorld.copy(R.matrixWorld);let j=H.children;for(let xe=0,G=j.length;xe<G;xe++)j[xe].updateMatrixWorld(!0);se.length===2?z(R,_,S):R.projectionMatrix.copy(_.projectionMatrix)},this.getCamera=function(){return R},this.getFoveation=function(){if(d!==null)return d.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function(H){d!==null&&(d.fixedFoveation=H),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=H)};let V=null;function K(H,Y){if(c=Y.getViewerPose(o),m=Y,c!==null){let j=c.views;h!==null&&(e.setRenderTargetFramebuffer(g,h.framebuffer),e.setRenderTarget(g));let xe=!1;j.length!==R.cameras.length&&(R.cameras.length=0,xe=!0);for(let G=0;G<j.length;G++){let Oe=j[G],ye=null;if(h!==null)ye=h.getViewport(Oe);else{let fe=u.getViewSubImage(d,Oe);ye=fe.viewport,G===0&&(e.setRenderTargetTextures(g,fe.colorTexture,d.ignoreDepthValues?void 0:fe.depthStencilTexture),e.setRenderTarget(g))}let Te=T[G];Te.matrix.fromArray(Oe.transform.matrix),Te.projectionMatrix.fromArray(Oe.projectionMatrix),Te.viewport.set(ye.x,ye.y,ye.width,ye.height),G===0&&R.matrix.copy(Te.matrix),xe===!0&&R.cameras.push(Te)}}let se=i.inputSources;for(let j=0;j<p.length;j++){let xe=p[j],G=se[j];xe.update(G,Y,o)}V&&V(H,Y),m=null}let me=new Hu;me.setAnimationLoop(K),this.setAnimationLoop=function(H){V=H},this.dispose=function(){}}};function S0(r){function e(g,p){g.fogColor.value.copy(p.color),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function t(g,p,w,_,S){p.isMeshBasicMaterial?n(g,p):p.isMeshLambertMaterial?(n(g,p),l(g,p)):p.isMeshToonMaterial?(n(g,p),u(g,p)):p.isMeshPhongMaterial?(n(g,p),c(g,p)):p.isMeshStandardMaterial?(n(g,p),p.isMeshPhysicalMaterial?h(g,p,S):d(g,p)):p.isMeshMatcapMaterial?(n(g,p),f(g,p)):p.isMeshDepthMaterial?(n(g,p),m(g,p)):p.isMeshDistanceMaterial?(n(g,p),x(g,p)):p.isMeshNormalMaterial?(n(g,p),y(g,p)):p.isLineBasicMaterial?(i(g,p),p.isLineDashedMaterial&&s(g,p)):p.isPointsMaterial?o(g,p,w,_):p.isSpriteMaterial?a(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function n(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map),p.alphaMap&&(g.alphaMap.value=p.alphaMap),p.specularMap&&(g.specularMap.value=p.specularMap),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let w=r.get(p).envMap;w&&(g.envMap.value=w,g.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity);let _;p.map?_=p.map:p.specularMap?_=p.specularMap:p.displacementMap?_=p.displacementMap:p.normalMap?_=p.normalMap:p.bumpMap?_=p.bumpMap:p.roughnessMap?_=p.roughnessMap:p.metalnessMap?_=p.metalnessMap:p.alphaMap?_=p.alphaMap:p.emissiveMap?_=p.emissiveMap:p.clearcoatMap?_=p.clearcoatMap:p.clearcoatNormalMap?_=p.clearcoatNormalMap:p.clearcoatRoughnessMap?_=p.clearcoatRoughnessMap:p.specularIntensityMap?_=p.specularIntensityMap:p.specularColorMap?_=p.specularColorMap:p.transmissionMap?_=p.transmissionMap:p.thicknessMap?_=p.thicknessMap:p.sheenColorMap?_=p.sheenColorMap:p.sheenRoughnessMap&&(_=p.sheenRoughnessMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),g.uvTransform.value.copy(_.matrix));let S;p.aoMap?S=p.aoMap:p.lightMap&&(S=p.lightMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),g.uv2Transform.value.copy(S.matrix))}function i(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity}function s(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function o(g,p,w,_){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*w,g.scale.value=_*.5,p.map&&(g.map.value=p.map),p.alphaMap&&(g.alphaMap.value=p.alphaMap),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let S;p.map?S=p.map:p.alphaMap&&(S=p.alphaMap),S!==void 0&&(S.matrixAutoUpdate===!0&&S.updateMatrix(),g.uvTransform.value.copy(S.matrix))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map),p.alphaMap&&(g.alphaMap.value=p.alphaMap),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let w;p.map?w=p.map:p.alphaMap&&(w=p.alphaMap),w!==void 0&&(w.matrixAutoUpdate===!0&&w.updateMatrix(),g.uvTransform.value.copy(w.matrix))}function l(g,p){p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap)}function c(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap),p.bumpMap&&(g.bumpMap.value=p.bumpMap,g.bumpScale.value=p.bumpScale,p.side===mt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,g.normalScale.value.copy(p.normalScale),p.side===mt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap),p.bumpMap&&(g.bumpMap.value=p.bumpMap,g.bumpScale.value=p.bumpScale,p.side===mt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,g.normalScale.value.copy(p.normalScale),p.side===mt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias)}function d(g,p){g.roughness.value=p.roughness,g.metalness.value=p.metalness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap),p.bumpMap&&(g.bumpMap.value=p.bumpMap,g.bumpScale.value=p.bumpScale,p.side===mt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,g.normalScale.value.copy(p.normalScale),p.side===mt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),r.get(p).envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function h(g,p,w){d(g,p),g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),g.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===mt&&g.clearcoatNormalScale.value.negate())),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=w.texture,g.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap)}function f(g,p){p.matcap&&(g.matcap.value=p.matcap),p.bumpMap&&(g.bumpMap.value=p.bumpMap,g.bumpScale.value=p.bumpScale,p.side===mt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,g.normalScale.value.copy(p.normalScale),p.side===mt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias)}function m(g,p){p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias)}function x(g,p){p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),g.referencePosition.value.copy(p.referencePosition),g.nearDistance.value=p.nearDistance,g.farDistance.value=p.farDistance}function y(g,p){p.bumpMap&&(g.bumpMap.value=p.bumpMap,g.bumpScale.value=p.bumpScale,p.side===mt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,g.normalScale.value.copy(p.normalScale),p.side===mt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias)}return{refreshFogUniforms:e,refreshMaterialUniforms:t}}function E0(){let r=Rr("canvas");return r.style.display="block",r}function nt(r={}){let e=r.canvas!==void 0?r.canvas:E0(),t=r.context!==void 0?r.context:null,n=r.alpha!==void 0?r.alpha:!1,i=r.depth!==void 0?r.depth:!0,s=r.stencil!==void 0?r.stencil:!0,o=r.antialias!==void 0?r.antialias:!1,a=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,l=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,c=r.powerPreference!==void 0?r.powerPreference:"default",u=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1,d=null,h=null,f=[],m=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Wn,this.physicallyCorrectLights=!1,this.toneMapping=Un,this.toneMappingExposure=1;let x=this,y=!1,g=0,p=0,w=null,_=-1,S=null,T=new Ze,R=new Ze,P=null,W=e.width,U=e.height,v=1,C=null,I=null,F=new Ze(0,0,W,U),z=new Ze(0,0,W,U),D=!1,V=new Zi,K=!1,me=!1,H=null,Y=new Me,se=new b,j={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function xe(){return w===null?v:1}let G=t;function Oe(E,B){for(let k=0;k<E.length;k++){let O=E[k],$=e.getContext(O,B);if($!==null)return $}return null}try{let E={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:a,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Dl}`),e.addEventListener("webglcontextlost",Pe,!1),e.addEventListener("webglcontextrestored",L,!1),G===null){let B=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&B.shift(),G=Oe(B,E),G===null)throw Oe(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ye,Te,fe,ne,ie,N,J,te,ue,le,Se,Ae,Ge,st,je,A,M,X,oe,we,q,Ee,be;function he(){ye=new Ym(G),Te=new Gm(G,ye,r),ye.init(Te),Ee=new b0(G,ye,Te),fe=new _0(G,ye,Te),ne=new $m(G),ie=new c0,N=new w0(G,ye,fe,ie,Te,Ee,ne),J=new Vm(x),te=new Xm(x),ue=new hf(G,Te),be=new Um(G,ye,ue,Te),le=new Jm(G,ue,ne,be),Se=new eg(G,le,ue,ne),oe=new Qm(G,Te,N),A=new km(ie),Ae=new l0(x,J,te,ye,Te,be,A),Ge=new S0(ie),st=new h0,je=new x0(ye,Te),X=new Om(x,J,fe,Se,n,a),M=new $u(x,Se,Te),we=new Hm(G,ye,ne,Te),q=new Zm(G,ye,ne,Te),ne.programs=Ae.programs,x.capabilities=Te,x.extensions=ye,x.properties=ie,x.renderLists=st,x.shadowMap=M,x.state=fe,x.info=ne}he();let ce=new Ra(x,G);this.xr=ce,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let E=ye.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=ye.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return v},this.setPixelRatio=function(E){E!==void 0&&(v=E,this.setSize(W,U,!1))},this.getSize=function(E){return E.set(W,U)},this.setSize=function(E,B,k){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=E,U=B,e.width=Math.floor(E*v),e.height=Math.floor(B*v),k!==!1&&(e.style.width=E+"px",e.style.height=B+"px"),this.setViewport(0,0,E,B)},this.getDrawingBufferSize=function(E){return E.set(W*v,U*v).floor()},this.setDrawingBufferSize=function(E,B,k){W=E,U=B,v=k,e.width=Math.floor(E*k),e.height=Math.floor(B*k),this.setViewport(0,0,E,B)},this.getCurrentViewport=function(E){return E.copy(T)},this.getViewport=function(E){return E.copy(F)},this.setViewport=function(E,B,k,O){E.isVector4?F.set(E.x,E.y,E.z,E.w):F.set(E,B,k,O),fe.viewport(T.copy(F).multiplyScalar(v).floor())},this.getScissor=function(E){return E.copy(z)},this.setScissor=function(E,B,k,O){E.isVector4?z.set(E.x,E.y,E.z,E.w):z.set(E,B,k,O),fe.scissor(R.copy(z).multiplyScalar(v).floor())},this.getScissorTest=function(){return D},this.setScissorTest=function(E){fe.setScissorTest(D=E)},this.setOpaqueSort=function(E){C=E},this.setTransparentSort=function(E){I=E},this.getClearColor=function(E){return E.copy(X.getClearColor())},this.setClearColor=function(){X.setClearColor.apply(X,arguments)},this.getClearAlpha=function(){return X.getClearAlpha()},this.setClearAlpha=function(){X.setClearAlpha.apply(X,arguments)},this.clear=function(E,B,k){let O=0;(E===void 0||E)&&(O|=16384),(B===void 0||B)&&(O|=256),(k===void 0||k)&&(O|=1024),G.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Pe,!1),e.removeEventListener("webglcontextrestored",L,!1),st.dispose(),je.dispose(),ie.dispose(),J.dispose(),te.dispose(),Se.dispose(),be.dispose(),Ae.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",He),ce.removeEventListener("sessionend",ut),H&&(H.dispose(),H=null),Vt.stop()};function Pe(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;let E=ne.autoReset,B=M.enabled,k=M.autoUpdate,O=M.needsUpdate,$=M.type;he(),ne.autoReset=E,M.enabled=B,M.autoUpdate=k,M.needsUpdate=O,M.type=$}function _e(E){let B=E.target;B.removeEventListener("dispose",_e),ge(B)}function ge(E){Ce(E),ie.remove(E)}function Ce(E){let B=ie.get(E).programs;B!==void 0&&(B.forEach(function(k){Ae.releaseProgram(k)}),E.isShaderMaterial&&Ae.releaseShaderCache(E))}this.renderBufferDirect=function(E,B,k,O,$,Le){B===null&&(B=j);let Ie=$.isMesh&&$.matrixWorld.determinant()<0,Be=Wh(E,B,k,O,$);fe.setMaterial(O,Ie);let Fe=k.index,Je=k.attributes.position;if(Fe===null){if(Je===void 0||Je.count===0)return}else if(Fe.count===0)return;let ke=1;O.wireframe===!0&&(Fe=le.getWireframeAttribute(k),ke=2),be.setup($,O,Be,k,Fe);let Ve,ft=we;Fe!==null&&(Ve=ue.get(Fe),ft=q,ft.setIndex(Ve));let ei=Fe!==null?Fe.count:Je.count,xi=k.drawRange.start*ke,We=k.drawRange.count*ke,sn=Le!==null?Le.start*ke:0,wt=Le!==null?Le.count*ke:1/0,on=Math.max(xi,sn),rs=Math.min(ei,xi+We,sn+wt)-1,an=Math.max(0,rs-on+1);if(an!==0){if($.isMesh)O.wireframe===!0?(fe.setLineWidth(O.wireframeLinewidth*xe()),ft.setMode(1)):ft.setMode(4);else if($.isLine){let mn=O.linewidth;mn===void 0&&(mn=1),fe.setLineWidth(mn*xe()),$.isLineSegments?ft.setMode(1):$.isLineLoop?ft.setMode(2):ft.setMode(3)}else $.isPoints?ft.setMode(0):$.isSprite&&ft.setMode(4);if($.isInstancedMesh)ft.renderInstances(on,an,$.count);else if(k.isInstancedBufferGeometry){let mn=Math.min(k.instanceCount,k._maxInstanceCount);ft.renderInstances(on,an,mn)}else ft.render(on,an)}},this.compile=function(E,B){h=je.get(E),h.init(),m.push(h),E.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(h.pushLight(k),k.castShadow&&h.pushShadow(k))}),h.setupLights(x.physicallyCorrectLights),E.traverse(function(k){let O=k.material;if(O)if(Array.isArray(O))for(let $=0;$<O.length;$++){let Le=O[$];Po(Le,E,k)}else Po(O,E,k)}),m.pop(),h=null};let Z=null;function Re(E){Z&&Z(E)}function He(){Vt.stop()}function ut(){Vt.start()}let Vt=new Hu;Vt.setAnimationLoop(Re),typeof window!="undefined"&&Vt.setContext(window),this.setAnimationLoop=function(E){Z=E,ce.setAnimationLoop(E),E===null?Vt.stop():Vt.start()},ce.addEventListener("sessionstart",He),ce.addEventListener("sessionend",ut),this.render=function(E,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;E.autoUpdate===!0&&E.updateMatrixWorld(),B.parent===null&&B.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(B),B=ce.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,B,w),h=je.get(E,m.length),h.init(),m.push(h),Y.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),V.setFromProjectionMatrix(Y),me=this.localClippingEnabled,K=A.init(this.clippingPlanes,me,B),d=st.get(E,f.length),d.init(),f.push(d),dt(E,B,0,x.sortObjects),d.finish(),x.sortObjects===!0&&d.sort(C,I),K===!0&&A.beginShadows();let k=h.state.shadowsArray;if(M.render(k,E,B),K===!0&&A.endShadows(),this.info.autoReset===!0&&this.info.reset(),X.render(d,E),h.setupLights(x.physicallyCorrectLights),B.isArrayCamera){let O=B.cameras;for(let $=0,Le=O.length;$<Le;$++){let Ie=O[$];rn(d,E,Ie,Ie.viewport)}}else rn(d,E,B);w!==null&&(N.updateMultisampleRenderTarget(w),N.updateRenderTargetMipmap(w)),E.isScene===!0&&E.onAfterRender(x,E,B),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1),be.resetDefaultState(),_=-1,S=null,m.pop(),m.length>0?h=m[m.length-1]:h=null,f.pop(),f.length>0?d=f[f.length-1]:d=null};function dt(E,B,k,O){if(E.visible===!1)return;if(E.layers.test(B.layers)){if(E.isGroup)k=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(B);else if(E.isLight)h.pushLight(E),E.castShadow&&h.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||V.intersectsSprite(E)){O&&se.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Y);let Ie=Se.update(E),Be=E.material;Be.visible&&d.push(E,Ie,Be,k,se.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==ne.render.frame&&(E.skeleton.update(),E.skeleton.frame=ne.render.frame),!E.frustumCulled||V.intersectsObject(E))){O&&se.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Y);let Ie=Se.update(E),Be=E.material;if(Array.isArray(Be)){let Fe=Ie.groups;for(let Je=0,ke=Fe.length;Je<ke;Je++){let Ve=Fe[Je],ft=Be[Ve.materialIndex];ft&&ft.visible&&d.push(E,Ie,ft,k,se.z,Ve)}}else Be.visible&&d.push(E,Ie,Be,k,se.z,null)}}let Le=E.children;for(let Ie=0,Be=Le.length;Ie<Be;Ie++)dt(Le[Ie],B,k,O)}function rn(E,B,k,O){let $=E.opaque,Le=E.transmissive,Ie=E.transparent;h.setupLightsView(k),Le.length>0&&pn($,B,k),O&&fe.viewport(T.copy(O)),$.length>0&&is($,B,k),Le.length>0&&is(Le,B,k),Ie.length>0&&is(Ie,B,k)}function pn(E,B,k){if(H===null){let Ie=o===!0&&Te.isWebGL2===!0?Cr:Gt;H=new Ie(1024,1024,{generateMipmaps:!0,type:Ee.convert(Gi)!==null?Gi:Hn,minFilter:So,magFilter:bt,wrapS:Xt,wrapT:Xt,useRenderToTexture:ye.has("WEBGL_multisampled_render_to_texture")})}let O=x.getRenderTarget();x.setRenderTarget(H),x.clear();let $=x.toneMapping;x.toneMapping=Un,is(E,B,k),x.toneMapping=$,N.updateMultisampleRenderTarget(H),N.updateRenderTargetMipmap(H),x.setRenderTarget(O)}function is(E,B,k){let O=B.isScene===!0?B.overrideMaterial:null;for(let $=0,Le=E.length;$<Le;$++){let Ie=E[$],Be=Ie.object,Fe=Ie.geometry,Je=O===null?Ie.material:O,ke=Ie.group;Be.layers.test(k.layers)&&Vh(Be,B,k,Fe,Je,ke)}}function Vh(E,B,k,O,$,Le){E.onBeforeRender(x,B,k,O,$,Le),E.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),$.onBeforeRender(x,B,k,O,E,Le),$.transparent===!0&&$.side===Ft?($.side=mt,$.needsUpdate=!0,x.renderBufferDirect(k,B,O,$,E,Le),$.side=ai,$.needsUpdate=!0,x.renderBufferDirect(k,B,O,$,E,Le),$.side=Ft):x.renderBufferDirect(k,B,O,$,E,Le),E.onAfterRender(x,B,k,O,$,Le)}function Po(E,B,k){B.isScene!==!0&&(B=j);let O=ie.get(E),$=h.state.lights,Le=h.state.shadowsArray,Ie=$.state.version,Be=Ae.getParameters(E,$.state,Le,B,k),Fe=Ae.getProgramCacheKey(Be),Je=O.programs;O.environment=E.isMeshStandardMaterial?B.environment:null,O.fog=B.fog,O.envMap=(E.isMeshStandardMaterial?te:J).get(E.envMap||O.environment),Je===void 0&&(E.addEventListener("dispose",_e),Je=new Map,O.programs=Je);let ke=Je.get(Fe);if(ke!==void 0){if(O.currentProgram===ke&&O.lightsStateVersion===Ie)return $l(E,Be),ke}else Be.uniforms=Ae.getUniforms(E),E.onBuild(k,Be,x),E.onBeforeCompile(Be,x),ke=Ae.acquireProgram(Be,Fe),Je.set(Fe,ke),O.uniforms=Be.uniforms;let Ve=O.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ve.clippingPlanes=A.uniform),$l(E,Be),O.needsLights=Xh(E),O.lightsStateVersion=Ie,O.needsLights&&(Ve.ambientLightColor.value=$.state.ambient,Ve.lightProbe.value=$.state.probe,Ve.directionalLights.value=$.state.directional,Ve.directionalLightShadows.value=$.state.directionalShadow,Ve.spotLights.value=$.state.spot,Ve.spotLightShadows.value=$.state.spotShadow,Ve.rectAreaLights.value=$.state.rectArea,Ve.ltc_1.value=$.state.rectAreaLTC1,Ve.ltc_2.value=$.state.rectAreaLTC2,Ve.pointLights.value=$.state.point,Ve.pointLightShadows.value=$.state.pointShadow,Ve.hemisphereLights.value=$.state.hemi,Ve.directionalShadowMap.value=$.state.directionalShadowMap,Ve.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ve.spotShadowMap.value=$.state.spotShadowMap,Ve.spotShadowMatrix.value=$.state.spotShadowMatrix,Ve.pointShadowMap.value=$.state.pointShadowMap,Ve.pointShadowMatrix.value=$.state.pointShadowMatrix);let ft=ke.getUniforms(),ei=kn.seqWithValue(ft.seq,Ve);return O.currentProgram=ke,O.uniformsList=ei,ke}function $l(E,B){let k=ie.get(E);k.outputEncoding=B.outputEncoding,k.instancing=B.instancing,k.skinning=B.skinning,k.morphTargets=B.morphTargets,k.morphNormals=B.morphNormals,k.morphTargetsCount=B.morphTargetsCount,k.numClippingPlanes=B.numClippingPlanes,k.numIntersection=B.numClipIntersection,k.vertexAlphas=B.vertexAlphas,k.vertexTangents=B.vertexTangents,k.toneMapping=B.toneMapping}function Wh(E,B,k,O,$){B.isScene!==!0&&(B=j),N.resetTextureUnits();let Le=B.fog,Ie=O.isMeshStandardMaterial?B.environment:null,Be=w===null?x.outputEncoding:w.isXRRenderTarget===!0?w.texture.encoding:Wn,Fe=(O.isMeshStandardMaterial?te:J).get(O.envMap||Ie),Je=O.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,ke=!!O.normalMap&&!!k.attributes.tangent,Ve=!!k.morphAttributes.position,ft=!!k.morphAttributes.normal,ei=k.morphAttributes.position?k.morphAttributes.position.length:0,xi=O.toneMapped?x.toneMapping:Un,We=ie.get(O),sn=h.state.lights;if(K===!0&&(me===!0||E!==S)){let jt=E===S&&O.id===_;A.setState(O,E,jt)}let wt=!1;O.version===We.__version?(We.needsLights&&We.lightsStateVersion!==sn.state.version||We.outputEncoding!==Be||$.isInstancedMesh&&We.instancing===!1||!$.isInstancedMesh&&We.instancing===!0||$.isSkinnedMesh&&We.skinning===!1||!$.isSkinnedMesh&&We.skinning===!0||We.envMap!==Fe||O.fog&&We.fog!==Le||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==A.numPlanes||We.numIntersection!==A.numIntersection)||We.vertexAlphas!==Je||We.vertexTangents!==ke||We.morphTargets!==Ve||We.morphNormals!==ft||We.toneMapping!==xi||Te.isWebGL2===!0&&We.morphTargetsCount!==ei)&&(wt=!0):(wt=!0,We.__version=O.version);let on=We.currentProgram;wt===!0&&(on=Po(O,B,$));let rs=!1,an=!1,mn=!1,Ct=on.getUniforms(),cr=We.uniforms;if(fe.useProgram(on.program)&&(rs=!0,an=!0,mn=!0),O.id!==_&&(_=O.id,an=!0),rs||S!==E){if(Ct.setValue(G,"projectionMatrix",E.projectionMatrix),Te.logarithmicDepthBuffer&&Ct.setValue(G,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),S!==E&&(S=E,an=!0,mn=!0),O.isShaderMaterial||O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshStandardMaterial||O.envMap){let jt=Ct.map.cameraPosition;jt!==void 0&&jt.setValue(G,se.setFromMatrixPosition(E.matrixWorld))}(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&Ct.setValue(G,"isOrthographic",E.isOrthographicCamera===!0),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial||O.isShadowMaterial||$.isSkinnedMesh)&&Ct.setValue(G,"viewMatrix",E.matrixWorldInverse)}if($.isSkinnedMesh){Ct.setOptional(G,$,"bindMatrix"),Ct.setOptional(G,$,"bindMatrixInverse");let jt=$.skeleton;jt&&(Te.floatVertexTextures?(jt.boneTexture===null&&jt.computeBoneTexture(),Ct.setValue(G,"boneTexture",jt.boneTexture,N),Ct.setValue(G,"boneTextureSize",jt.boneTextureSize)):Ct.setOptional(G,jt,"boneMatrices"))}return k&&(k.morphAttributes.position!==void 0||k.morphAttributes.normal!==void 0)&&oe.update($,k,O,on),(an||We.receiveShadow!==$.receiveShadow)&&(We.receiveShadow=$.receiveShadow,Ct.setValue(G,"receiveShadow",$.receiveShadow)),an&&(Ct.setValue(G,"toneMappingExposure",x.toneMappingExposure),We.needsLights&&qh(cr,mn),Le&&O.fog&&Ge.refreshFogUniforms(cr,Le),Ge.refreshMaterialUniforms(cr,O,v,U,H),kn.upload(G,We.uniformsList,cr,N)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(kn.upload(G,We.uniformsList,cr,N),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&Ct.setValue(G,"center",$.center),Ct.setValue(G,"modelViewMatrix",$.modelViewMatrix),Ct.setValue(G,"normalMatrix",$.normalMatrix),Ct.setValue(G,"modelMatrix",$.matrixWorld),on}function qh(E,B){E.ambientLightColor.needsUpdate=B,E.lightProbe.needsUpdate=B,E.directionalLights.needsUpdate=B,E.directionalLightShadows.needsUpdate=B,E.pointLights.needsUpdate=B,E.pointLightShadows.needsUpdate=B,E.spotLights.needsUpdate=B,E.spotLightShadows.needsUpdate=B,E.rectAreaLights.needsUpdate=B,E.hemisphereLights.needsUpdate=B}function Xh(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return p},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(E,B,k){ie.get(E.texture).__webglTexture=B,ie.get(E.depthTexture).__webglTexture=k;let O=ie.get(E);O.__hasExternalTextures=!0,O.__hasExternalTextures&&(O.__autoAllocateDepthBuffer=k===void 0,O.__autoAllocateDepthBuffer||E.useRenderToTexture&&(console.warn("render-to-texture extension was disabled because an external texture was provided"),E.useRenderToTexture=!1,E.useRenderbuffer=!0))},this.setRenderTargetFramebuffer=function(E,B){let k=ie.get(E);k.__webglFramebuffer=B,k.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(E,B=0,k=0){w=E,g=B,p=k;let O=!0;if(E){let Fe=ie.get(E);Fe.__useDefaultFramebuffer!==void 0?(fe.bindFramebuffer(36160,null),O=!1):Fe.__webglFramebuffer===void 0?N.setupRenderTarget(E):Fe.__hasExternalTextures&&N.rebindTextures(E,ie.get(E.texture).__webglTexture,ie.get(E.depthTexture).__webglTexture)}let $=null,Le=!1,Ie=!1;if(E){let Fe=E.texture;(Fe.isDataTexture3D||Fe.isDataTexture2DArray)&&(Ie=!0);let Je=ie.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?($=Je[B],Le=!0):E.useRenderbuffer?$=ie.get(E).__webglMultisampledFramebuffer:$=Je,T.copy(E.viewport),R.copy(E.scissor),P=E.scissorTest}else T.copy(F).multiplyScalar(v).floor(),R.copy(z).multiplyScalar(v).floor(),P=D;if(fe.bindFramebuffer(36160,$)&&Te.drawBuffers&&O&&fe.drawBuffers(E,$),fe.viewport(T),fe.scissor(R),fe.setScissorTest(P),Le){let Fe=ie.get(E.texture);G.framebufferTexture2D(36160,36064,34069+B,Fe.__webglTexture,k)}else if(Ie){let Fe=ie.get(E.texture),Je=B||0;G.framebufferTextureLayer(36160,36064,Fe.__webglTexture,k||0,Je)}_=-1},this.readRenderTargetPixels=function(E,B,k,O,$,Le,Ie){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=ie.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ie!==void 0&&(Be=Be[Ie]),Be){fe.bindFramebuffer(36160,Be);try{let Fe=E.texture,Je=Fe.format,ke=Fe.type;if(Je!==Bt&&Ee.convert(Je)!==G.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ve=ke===Gi&&(ye.has("EXT_color_buffer_half_float")||Te.isWebGL2&&ye.has("EXT_color_buffer_float"));if(ke!==Hn&&Ee.convert(ke)!==G.getParameter(35738)&&!(ke===si&&(Te.isWebGL2||ye.has("OES_texture_float")||ye.has("WEBGL_color_buffer_float")))&&!Ve){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G.checkFramebufferStatus(36160)===36053?B>=0&&B<=E.width-O&&k>=0&&k<=E.height-$&&G.readPixels(B,k,O,$,Ee.convert(Je),Ee.convert(ke),Le):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{let Fe=w!==null?ie.get(w).__webglFramebuffer:null;fe.bindFramebuffer(36160,Fe)}}},this.copyFramebufferToTexture=function(E,B,k=0){if(B.isFramebufferTexture!==!0){console.error("THREE.WebGLRenderer: copyFramebufferToTexture() can only be used with FramebufferTexture.");return}let O=Math.pow(2,-k),$=Math.floor(B.image.width*O),Le=Math.floor(B.image.height*O);N.setTexture2D(B,0),G.copyTexSubImage2D(3553,k,0,0,E.x,E.y,$,Le),fe.unbindTexture()},this.copyTextureToTexture=function(E,B,k,O=0){let $=B.image.width,Le=B.image.height,Ie=Ee.convert(k.format),Be=Ee.convert(k.type);N.setTexture2D(k,0),G.pixelStorei(37440,k.flipY),G.pixelStorei(37441,k.premultiplyAlpha),G.pixelStorei(3317,k.unpackAlignment),B.isDataTexture?G.texSubImage2D(3553,O,E.x,E.y,$,Le,Ie,Be,B.image.data):B.isCompressedTexture?G.compressedTexSubImage2D(3553,O,E.x,E.y,B.mipmaps[0].width,B.mipmaps[0].height,Ie,B.mipmaps[0].data):G.texSubImage2D(3553,O,E.x,E.y,Ie,Be,B.image),O===0&&k.generateMipmaps&&G.generateMipmap(3553),fe.unbindTexture()},this.copyTextureToTexture3D=function(E,B,k,O,$=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Le=E.max.x-E.min.x+1,Ie=E.max.y-E.min.y+1,Be=E.max.z-E.min.z+1,Fe=Ee.convert(O.format),Je=Ee.convert(O.type),ke;if(O.isDataTexture3D)N.setTexture3D(O,0),ke=32879;else if(O.isDataTexture2DArray)N.setTexture2DArray(O,0),ke=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(37440,O.flipY),G.pixelStorei(37441,O.premultiplyAlpha),G.pixelStorei(3317,O.unpackAlignment);let Ve=G.getParameter(3314),ft=G.getParameter(32878),ei=G.getParameter(3316),xi=G.getParameter(3315),We=G.getParameter(32877),sn=k.isCompressedTexture?k.mipmaps[0]:k.image;G.pixelStorei(3314,sn.width),G.pixelStorei(32878,sn.height),G.pixelStorei(3316,E.min.x),G.pixelStorei(3315,E.min.y),G.pixelStorei(32877,E.min.z),k.isDataTexture||k.isDataTexture3D?G.texSubImage3D(ke,$,B.x,B.y,B.z,Le,Ie,Be,Fe,Je,sn.data):k.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(ke,$,B.x,B.y,B.z,Le,Ie,Be,Fe,sn.data)):G.texSubImage3D(ke,$,B.x,B.y,B.z,Le,Ie,Be,Fe,Je,sn),G.pixelStorei(3314,Ve),G.pixelStorei(32878,ft),G.pixelStorei(3316,ei),G.pixelStorei(3315,xi),G.pixelStorei(32877,We),$===0&&O.generateMipmaps&&G.generateMipmap(ke),fe.unbindTexture()},this.initTexture=function(E){N.setTexture2D(E,0),fe.unbindTexture()},this.resetState=function(){g=0,p=0,w=null,fe.reset(),be.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}nt.prototype.isWebGLRenderer=!0;var Ca=class extends nt{};Ca.prototype.isWebGL1Renderer=!0;var La=class r{constructor(e,t=25e-5){this.name="",this.color=new re(e),this.density=t}clone(){return new r(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}};La.prototype.isFogExp2=!0;var Pa=class r{constructor(e,t=1,n=1e3){this.name="",this.color=new re(e),this.near=t,this.far=n}clone(){return new r(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}};Pa.prototype.isFog=!0;var to=class extends et{constructor(){super(),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}};to.prototype.isScene=!0;var li=class{constructor(e,t){this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ar,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=nn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=nn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=nn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}};li.prototype.isInterleavedBuffer=!0;var pt=new b,Br=class r{constructor(e,t,n,i=!1){this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)pt.x=this.getX(t),pt.y=this.getY(t),pt.z=this.getZ(t),pt.applyMatrix4(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pt.x=this.getX(t),pt.y=this.getY(t),pt.z=this.getZ(t),pt.applyNormalMatrix(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pt.x=this.getX(t),pt.y=this.getY(t),pt.z=this.getZ(t),pt.transformDirection(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new gt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new r(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};Br.prototype.isInterleavedBufferAttribute=!0;var no=class extends Tt{constructor(e){super(),this.type="SpriteMaterial",this.color=new re(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this}};no.prototype.isSpriteMaterial=!0;var Di,pr=new b,Fi=new b,zi=new b,Bi=new Q,mr=new Q,ju=new Me,Es=new b,gr=new b,Ts=new b,ou=new Q,ca=new Q,au=new Q,Ia=class extends et{constructor(e){if(super(),this.type="Sprite",Di===void 0){Di=new qe;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new li(t,5);Di.setIndex([0,1,2,0,2,3]),Di.setAttribute("position",new Br(n,3,0,!1)),Di.setAttribute("uv",new Br(n,2,3,!1))}this.geometry=Di,this.material=e!==void 0?e:new no,this.center=new Q(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Fi.setFromMatrixScale(this.matrixWorld),ju.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),zi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Fi.multiplyScalar(-zi.z);let n=this.material.rotation,i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));let o=this.center;As(Es.set(-.5,-.5,0),zi,o,Fi,i,s),As(gr.set(.5,-.5,0),zi,o,Fi,i,s),As(Ts.set(.5,.5,0),zi,o,Fi,i,s),ou.set(0,0),ca.set(1,0),au.set(1,1);let a=e.ray.intersectTriangle(Es,gr,Ts,!1,pr);if(a===null&&(As(gr.set(-.5,.5,0),zi,o,Fi,i,s),ca.set(0,1),a=e.ray.intersectTriangle(Es,Ts,gr,!1,pr),a===null))return;let l=e.ray.origin.distanceTo(pr);l<e.near||l>e.far||t.push({distance:l,point:pr.clone(),uv:Dt.getUV(pr,Es,gr,Ts,ou,ca,au,new Q),face:null,object:this})}copy(e){return super.copy(e),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};Ia.prototype.isSprite=!0;function As(r,e,t,n,i,s){Bi.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(mr.x=s*Bi.x-i*Bi.y,mr.y=i*Bi.x+s*Bi.y):mr.copy(Bi),r.copy(e),r.x+=mr.x,r.y+=mr.y,r.applyMatrix4(ju)}var lu=new b,cu=new Ze,uu=new Ze,T0=new b,hu=new Me,io=class extends ee{constructor(e,t){super(e,t),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Me,this.bindMatrixInverse=new Me}copy(e){return super.copy(e),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Ze,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.x=t.getX(n),e.y=t.getY(n),e.z=t.getZ(n),e.w=t.getW(n);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){let n=this.skeleton,i=this.geometry;cu.fromBufferAttribute(i.attributes.skinIndex,e),uu.fromBufferAttribute(i.attributes.skinWeight,e),lu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){let o=uu.getComponent(s);if(o!==0){let a=cu.getComponent(s);hu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(T0.copy(lu).applyMatrix4(hu),o)}}return t.applyMatrix4(this.bindMatrixInverse)}};io.prototype.isSkinnedMesh=!0;var Da=class extends et{constructor(){super(),this.type="Bone"}};Da.prototype.isBone=!0;var Fa=class extends Rt{constructor(e=null,t=1,n=1,i,s,o,a,l,c=bt,u=bt,d,h){super(null,o,a,l,c,u,i,s,d,h),this.image={data:e,width:t,height:n},this.magFilter=c,this.minFilter=u,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};Fa.prototype.isDataTexture=!0;var Nr=class extends gt{constructor(e,t,n,i=1){typeof n=="number"&&(i=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),super(e,t,n),this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}};Nr.prototype.isInstancedBufferAttribute=!0;var du=new Me,fu=new Me,Rs=[],xr=new ee,za=class extends ee{constructor(e,t,n){super(e,t),this.instanceMatrix=new Nr(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}copy(e){return super.copy(e),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,i=this.count;if(xr.geometry=this.geometry,xr.material=this.material,xr.material!==void 0)for(let s=0;s<i;s++){this.getMatrixAt(s,du),fu.multiplyMatrices(n,du),xr.matrixWorld=fu,xr.raycast(e,Rs);for(let o=0,a=Rs.length;o<a;o++){let l=Rs[o];l.instanceId=s,l.object=this,t.push(l)}Rs.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Nr(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};za.prototype.isInstancedMesh=!0;var Tn=class extends Tt{constructor(e){super(),this.type="LineBasicMaterial",this.color=new re(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this}};Tn.prototype.isLineBasicMaterial=!0;var pu=new b,mu=new b,gu=new Me,ua=new Sn,Cs=new qn,Or=class extends et{constructor(e=new qe,t=new Tn){super(),this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.isBufferGeometry)if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)pu.fromBufferAttribute(t,i-1),mu.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=pu.distanceTo(mu);e.setAttribute("lineDistance",new ze(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Cs.copy(n.boundingSphere),Cs.applyMatrix4(i),Cs.radius+=s,e.ray.intersectsSphere(Cs)===!1)return;gu.copy(i).invert(),ua.copy(e.ray).applyMatrix4(gu);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new b,u=new b,d=new b,h=new b,f=this.isLineSegments?2:1;if(n.isBufferGeometry){let m=n.index,y=n.attributes.position;if(m!==null){let g=Math.max(0,o.start),p=Math.min(m.count,o.start+o.count);for(let w=g,_=p-1;w<_;w+=f){let S=m.getX(w),T=m.getX(w+1);if(c.fromBufferAttribute(y,S),u.fromBufferAttribute(y,T),ua.distanceSqToSegment(c,u,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);let P=e.ray.origin.distanceTo(h);P<e.near||P>e.far||t.push({distance:P,point:d.clone().applyMatrix4(this.matrixWorld),index:w,face:null,faceIndex:null,object:this})}}else{let g=Math.max(0,o.start),p=Math.min(y.count,o.start+o.count);for(let w=g,_=p-1;w<_;w+=f){if(c.fromBufferAttribute(y,w),u.fromBufferAttribute(y,w+1),ua.distanceSqToSegment(c,u,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);let T=e.ray.origin.distanceTo(h);T<e.near||T>e.far||t.push({distance:T,point:d.clone().applyMatrix4(this.matrixWorld),index:w,face:null,faceIndex:null,object:this})}}}else n.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){let e=this.geometry;if(e.isBufferGeometry){let t=e.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{let t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}};Or.prototype.isLine=!0;var xu=new b,yu=new b,ci=class extends Or{constructor(e,t){super(e,t),this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.isBufferGeometry)if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)xu.fromBufferAttribute(t,i),yu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+xu.distanceTo(yu);e.setAttribute("lineDistance",new ze(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}};ci.prototype.isLineSegments=!0;var Ba=class extends Or{constructor(e,t){super(e,t),this.type="LineLoop"}};Ba.prototype.isLineLoop=!0;var ro=class extends Tt{constructor(e){super(),this.type="PointsMaterial",this.color=new re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this}};ro.prototype.isPointsMaterial=!0;var vu=new Me,Na=new Sn,Ls=new qn,Ps=new b,Oa=class extends et{constructor(e=new qe,t=new ro){super(),this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ls.copy(n.boundingSphere),Ls.applyMatrix4(i),Ls.radius+=s,e.ray.intersectsSphere(Ls)===!1)return;vu.copy(i).invert(),Na.copy(e.ray).applyMatrix4(vu);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a;if(n.isBufferGeometry){let c=n.index,d=n.attributes.position;if(c!==null){let h=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let m=h,x=f;m<x;m++){let y=c.getX(m);Ps.fromBufferAttribute(d,y),_u(Ps,y,l,i,e,t,this)}}else{let h=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let m=h,x=f;m<x;m++)Ps.fromBufferAttribute(d,m),_u(Ps,m,l,i,e,t,this)}}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){let e=this.geometry;if(e.isBufferGeometry){let t=e.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{let t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}};Oa.prototype.isPoints=!0;function _u(r,e,t,n,i,s,o){let a=Na.distanceSqToPoint(r);if(a<t){let l=new b;Na.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}var Ua=class extends Rt{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c),this.minFilter=o!==void 0?o:Pt,this.magFilter=s!==void 0?s:Pt,this.generateMipmaps=!1;let u=this;function d(){u.needsUpdate=!0,e.requestVideoFrameCallback(d)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(d)}clone(){return new this.constructor(this.image).copy(this)}update(){let e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}};Ua.prototype.isVideoTexture=!0;var Ha=class extends Rt{constructor(e,t,n){super({width:e,height:t}),this.format=n,this.magFilter=bt,this.minFilter=bt,this.generateMipmaps=!1,this.needsUpdate=!0}};Ha.prototype.isFramebufferTexture=!0;var Ga=class extends Rt{constructor(e,t,n,i,s,o,a,l,c,u,d,h){super(null,o,a,l,c,u,i,s,d,h),this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}};Ga.prototype.isCompressedTexture=!0;var ui=class extends Rt{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c),this.needsUpdate=!0}};ui.prototype.isCanvasTexture=!0;var un=class r extends qe{constructor(e=1,t=8,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let s=[],o=[],a=[],l=[],c=new b,u=new Q;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,h=3;d<=t;d++,h+=3){let f=n+d/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[h]/e+1)/2,u.y=(o[h+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new ze(o,3)),this.setAttribute("normal",new ze(a,3)),this.setAttribute("uv",new ze(l,2))}static fromJSON(e){return new r(e.radius,e.segments,e.thetaStart,e.thetaLength)}},St=class r extends qe{constructor(e=1,t=1,n=1,i=8,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),s=Math.floor(s);let u=[],d=[],h=[],f=[],m=0,x=[],y=n/2,g=0;p(),o===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new ze(d,3)),this.setAttribute("normal",new ze(h,3)),this.setAttribute("uv",new ze(f,2));function p(){let _=new b,S=new b,T=0,R=(t-e)/n;for(let P=0;P<=s;P++){let W=[],U=P/s,v=U*(t-e)+e;for(let C=0;C<=i;C++){let I=C/i,F=I*l+a,z=Math.sin(F),D=Math.cos(F);S.x=v*z,S.y=-U*n+y,S.z=v*D,d.push(S.x,S.y,S.z),_.set(z,R,D).normalize(),h.push(_.x,_.y,_.z),f.push(I,1-U),W.push(m++)}x.push(W)}for(let P=0;P<i;P++)for(let W=0;W<s;W++){let U=x[W][P],v=x[W+1][P],C=x[W+1][P+1],I=x[W][P+1];u.push(U,v,I),u.push(v,C,I),T+=6}c.addGroup(g,T,0),g+=T}function w(_){let S=m,T=new Q,R=new b,P=0,W=_===!0?e:t,U=_===!0?1:-1;for(let C=1;C<=i;C++)d.push(0,y*U,0),h.push(0,U,0),f.push(.5,.5),m++;let v=m;for(let C=0;C<=i;C++){let F=C/i*l+a,z=Math.cos(F),D=Math.sin(F);R.x=W*D,R.y=y*U,R.z=W*z,d.push(R.x,R.y,R.z),h.push(0,U,0),T.x=z*.5+.5,T.y=D*.5*U+.5,f.push(T.x,T.y),m++}for(let C=0;C<i;C++){let I=S+C,F=v+C;_===!0?u.push(F,F+1,I):u.push(F+1,F,I),P+=3}c.addGroup(g,P,_===!0?1:2),g+=P}}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var ka=class r extends qe{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let s=[],o=[];a(i),c(n),u(),this.setAttribute("position",new ze(s,3)),this.setAttribute("normal",new ze(s.slice(),3)),this.setAttribute("uv",new ze(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(p){let w=new b,_=new b,S=new b;for(let T=0;T<t.length;T+=3)f(t[T+0],w),f(t[T+1],_),f(t[T+2],S),l(w,_,S,p)}function l(p,w,_,S){let T=S+1,R=[];for(let P=0;P<=T;P++){R[P]=[];let W=p.clone().lerp(_,P/T),U=w.clone().lerp(_,P/T),v=T-P;for(let C=0;C<=v;C++)C===0&&P===T?R[P][C]=W:R[P][C]=W.clone().lerp(U,C/v)}for(let P=0;P<T;P++)for(let W=0;W<2*(T-P)-1;W++){let U=Math.floor(W/2);W%2===0?(h(R[P][U+1]),h(R[P+1][U]),h(R[P][U])):(h(R[P][U+1]),h(R[P+1][U+1]),h(R[P+1][U]))}}function c(p){let w=new b;for(let _=0;_<s.length;_+=3)w.x=s[_+0],w.y=s[_+1],w.z=s[_+2],w.normalize().multiplyScalar(p),s[_+0]=w.x,s[_+1]=w.y,s[_+2]=w.z}function u(){let p=new b;for(let w=0;w<s.length;w+=3){p.x=s[w+0],p.y=s[w+1],p.z=s[w+2];let _=y(p)/2/Math.PI+.5,S=g(p)/Math.PI+.5;o.push(_,1-S)}m(),d()}function d(){for(let p=0;p<o.length;p+=6){let w=o[p+0],_=o[p+2],S=o[p+4],T=Math.max(w,_,S),R=Math.min(w,_,S);T>.9&&R<.1&&(w<.2&&(o[p+0]+=1),_<.2&&(o[p+2]+=1),S<.2&&(o[p+4]+=1))}}function h(p){s.push(p.x,p.y,p.z)}function f(p,w){let _=p*3;w.x=e[_+0],w.y=e[_+1],w.z=e[_+2]}function m(){let p=new b,w=new b,_=new b,S=new b,T=new Q,R=new Q,P=new Q;for(let W=0,U=0;W<s.length;W+=9,U+=6){p.set(s[W+0],s[W+1],s[W+2]),w.set(s[W+3],s[W+4],s[W+5]),_.set(s[W+6],s[W+7],s[W+8]),T.set(o[U+0],o[U+1]),R.set(o[U+2],o[U+3]),P.set(o[U+4],o[U+5]),S.copy(p).add(w).add(_).divideScalar(3);let v=y(S);x(T,U+0,p,v),x(R,U+2,w,v),x(P,U+4,_,v)}}function x(p,w,_,S){S<0&&p.x===1&&(o[w]=p.x-1),_.x===0&&_.z===0&&(o[w]=S/2/Math.PI+.5)}function y(p){return Math.atan2(p.z,-p.x)}function g(p){return Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))}}static fromJSON(e){return new r(e.vertices,e.indices,e.radius,e.details)}};var Is=new b,Ds=new b,ha=new b,Fs=new Dt,so=class extends qe{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let i=Math.pow(10,4),s=Math.cos(ks*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],d=new Array(3),h={},f=[];for(let m=0;m<l;m+=3){o?(c[0]=o.getX(m),c[1]=o.getX(m+1),c[2]=o.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);let{a:x,b:y,c:g}=Fs;if(x.fromBufferAttribute(a,c[0]),y.fromBufferAttribute(a,c[1]),g.fromBufferAttribute(a,c[2]),Fs.getNormal(ha),d[0]=`${Math.round(x.x*i)},${Math.round(x.y*i)},${Math.round(x.z*i)}`,d[1]=`${Math.round(y.x*i)},${Math.round(y.y*i)},${Math.round(y.z*i)}`,d[2]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let p=0;p<3;p++){let w=(p+1)%3,_=d[p],S=d[w],T=Fs[u[p]],R=Fs[u[w]],P=`${_}_${S}`,W=`${S}_${_}`;W in h&&h[W]?(ha.dot(h[W].normal)<=s&&(f.push(T.x,T.y,T.z),f.push(R.x,R.y,R.z)),h[W]=null):P in h||(h[P]={index0:c[p],index1:c[w],normal:ha.clone()})}}for(let m in h)if(h[m]){let{index0:x,index1:y}=h[m];Is.fromBufferAttribute(a,x),Ds.fromBufferAttribute(a,y),f.push(Is.x,Is.y,Is.z),f.push(Ds.x,Ds.y,Ds.z)}this.setAttribute("position",new ze(f,3))}}},kt=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,s=n.length,o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);let u=n[i],h=n[i+1]-u,f=(o-u)/h;return(i+f)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);let o=this.getPoint(i),a=this.getPoint(s),l=t||(o.isVector2?new Q:new b);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new b,i=[],s=[],o=[],a=new b,l=new Me;for(let f=0;f<=e;f++){let m=f/e;i[f]=this.getTangentAt(m,new b)}s[0]=new b,o[0]=new b;let c=Number.MAX_VALUE,u=Math.abs(i[0].x),d=Math.abs(i[0].y),h=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),h<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(Ht(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,m))}o[f].crossVectors(i[f],s[f])}if(t===!0){let f=Math.acos(Ht(s[0].dot(s[e]),-1,1));f/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let m=1;m<=e;m++)s[m].applyMatrix4(l.makeRotationAxis(i[m],f*m)),o[m].crossVectors(i[m],s[m])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ji=class extends kt{constructor(e=0,t=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){let n=t||new Q,i=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);let a=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*u-f*d+this.aX,c=h*d+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}};ji.prototype.isEllipseCurve=!0;var oo=class extends ji{constructor(e,t,n,i,s,o){super(e,t,n,n,i,s,o),this.type="ArcCurve"}};oo.prototype.isArcCurve=!0;function Nl(){let r=0,e=0,t=0,n=0;function i(s,o,a,l){r=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,d){let h=(o-s)/c-(a-s)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+d)+(l-a)/d;h*=u,f*=u,i(o,a,h,f)},calc:function(s){let o=s*s,a=o*s;return r+e*s+t*o+n*a}}}var zs=new b,da=new Nl,fa=new Nl,pa=new Nl,ao=class extends kt{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new b){let n=t,i=this.points,s=i.length,o=(s-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%s]:(zs.subVectors(i[0],i[1]).add(i[0]),c=zs);let d=i[a%s],h=i[(a+1)%s];if(this.closed||a+2<s?u=i[(a+2)%s]:(zs.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=zs),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(h),f),y=Math.pow(h.distanceToSquared(u),f);x<1e-4&&(x=1),m<1e-4&&(m=x),y<1e-4&&(y=x),da.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,m,x,y),fa.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,m,x,y),pa.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,m,x,y)}else this.curveType==="catmullrom"&&(da.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),fa.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),pa.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return n.set(da.calc(l),fa.calc(l),pa.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new b().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};ao.prototype.isCatmullRomCurve3=!0;function wu(r,e,t,n,i){let s=(n-e)*.5,o=(i-t)*.5,a=r*r,l=r*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*r+t}function A0(r,e){let t=1-r;return t*t*e}function R0(r,e){return 2*(1-r)*r*e}function C0(r,e){return r*r*e}function Mr(r,e,t,n){return A0(r,e)+R0(r,t)+C0(r,n)}function L0(r,e){let t=1-r;return t*t*t*e}function P0(r,e){let t=1-r;return 3*t*t*r*e}function I0(r,e){return 3*(1-r)*r*r*e}function D0(r,e){return r*r*r*e}function Sr(r,e,t,n,i){return L0(r,e)+P0(r,t)+I0(r,n)+D0(r,i)}var Ur=class extends kt{constructor(e=new Q,t=new Q,n=new Q,i=new Q){super(),this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Q){let n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Sr(e,i.x,s.x,o.x,a.x),Sr(e,i.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}};Ur.prototype.isCubicBezierCurve=!0;var lo=class extends kt{constructor(e=new b,t=new b,n=new b,i=new b){super(),this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new b){let n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Sr(e,i.x,s.x,o.x,a.x),Sr(e,i.y,s.y,o.y,a.y),Sr(e,i.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}};lo.prototype.isCubicBezierCurve3=!0;var Ki=class extends kt{constructor(e=new Q,t=new Q){super(),this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Q){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){let n=t||new Q;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}};Ki.prototype.isLineCurve=!0;var Va=class extends kt{constructor(e=new b,t=new b){super(),this.type="LineCurve3",this.isLineCurve3=!0,this.v1=e,this.v2=t}getPoint(e,t=new b){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Hr=class extends kt{constructor(e=new Q,t=new Q,n=new Q){super(),this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Q){let n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(Mr(e,i.x,s.x,o.x),Mr(e,i.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}};Hr.prototype.isQuadraticBezierCurve=!0;var co=class extends kt{constructor(e=new b,t=new b,n=new b){super(),this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new b){let n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(Mr(e,i.x,s.x,o.x),Mr(e,i.y,s.y,o.y),Mr(e,i.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}};co.prototype.isQuadraticBezierCurve3=!0;var Gr=class extends kt{constructor(e=[]){super(),this.type="SplineCurve",this.points=e}getPoint(e,t=new Q){let n=t,i=this.points,s=(i.length-1)*e,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],d=i[o>i.length-3?i.length-1:o+2];return n.set(wu(a,l.x,c.x,u.x,d.x),wu(a,l.y,c.y,u.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new Q().fromArray(i))}return this}};Gr.prototype.isSplineCurve=!0;var Ku=Object.freeze({__proto__:null,ArcCurve:oo,CatmullRomCurve3:ao,CubicBezierCurve:Ur,CubicBezierCurve3:lo,EllipseCurve:ji,LineCurve:Ki,LineCurve3:Va,QuadraticBezierCurve:Hr,QuadraticBezierCurve3:co,SplineCurve:Gr}),Wa=class extends kt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Ki(t,e))}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,s=this.curves;i<s.length;i++){let o=s[i],a=o&&o.isEllipseCurve?e*2:o&&(o.isLineCurve||o.isLineCurve3)?1:o&&o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new Ku[i.type]().fromJSON(i))}return this}},kr=class extends Wa{constructor(e){super(),this.type="Path",this.currentPoint=new Q,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ki(this.currentPoint.clone(),new Q(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let s=new Hr(this.currentPoint.clone(),new Q(e,t),new Q(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,o){let a=new Ur(this.currentPoint.clone(),new Q(e,t),new Q(n,i),new Q(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Gr(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,s,o),this}absarc(e,t,n,i,s,o){return this.absellipse(e,t,n,n,i,s,o),this}ellipse(e,t,n,i,s,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,s,o,a,l),this}absellipse(e,t,n,i,s,o,a,l){let c=new ji(e,t,n,i,s,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},hi=class extends kr{constructor(e){super(e),this.uuid=nn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new kr().fromJSON(i))}return this}},F0={triangulate:function(r,e,t=2){let n=e&&e.length,i=n?e[0]*t:r.length,s=Qu(r,0,i,t,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,d,h,f;if(n&&(s=U0(r,e,s,t)),r.length>80*t){a=c=r[0],l=u=r[1];for(let m=t;m<i;m+=t)d=r[m],h=r[m+1],d<a&&(a=d),h<l&&(l=h),d>c&&(c=d),h>u&&(u=h);f=Math.max(c-a,u-l),f=f!==0?1/f:0}return Vr(s,o,t,a,l,f),o}};function Qu(r,e,t,n,i){let s,o;if(i===$0(r,e,t,n)>0)for(s=e;s<t;s+=n)o=bu(s,r[s],r[s+1],o);else for(s=t-n;s>=e;s-=n)o=bu(s,r[s],r[s+1],o);return o&&To(o,o.next)&&(qr(o),o=o.next),o}function Xn(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(To(t,t.next)||ht(t.prev,t,t.next)===0)){if(qr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Vr(r,e,t,n,i,s,o){if(!r)return;!o&&s&&W0(r,n,i,s);let a=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?B0(r,n,i,s):z0(r)){e.push(l.i/t),e.push(r.i/t),e.push(c.i/t),qr(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=N0(Xn(r),e,t),Vr(r,e,t,n,i,s,2)):o===2&&O0(r,e,t,n,i,s):Vr(Xn(r),e,t,n,i,s,1);break}}}function z0(r){let e=r.prev,t=r,n=r.next;if(ht(e,t,n)>=0)return!1;let i=r.next.next;for(;i!==r.prev;){if(Hi(e.x,e.y,t.x,t.y,n.x,n.y,i.x,i.y)&&ht(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function B0(r,e,t,n){let i=r.prev,s=r,o=r.next;if(ht(i,s,o)>=0)return!1;let a=i.x<s.x?i.x<o.x?i.x:o.x:s.x<o.x?s.x:o.x,l=i.y<s.y?i.y<o.y?i.y:o.y:s.y<o.y?s.y:o.y,c=i.x>s.x?i.x>o.x?i.x:o.x:s.x>o.x?s.x:o.x,u=i.y>s.y?i.y>o.y?i.y:o.y:s.y>o.y?s.y:o.y,d=qa(a,l,e,t,n),h=qa(c,u,e,t,n),f=r.prevZ,m=r.nextZ;for(;f&&f.z>=d&&m&&m.z<=h;){if(f!==r.prev&&f!==r.next&&Hi(i.x,i.y,s.x,s.y,o.x,o.y,f.x,f.y)&&ht(f.prev,f,f.next)>=0||(f=f.prevZ,m!==r.prev&&m!==r.next&&Hi(i.x,i.y,s.x,s.y,o.x,o.y,m.x,m.y)&&ht(m.prev,m,m.next)>=0))return!1;m=m.nextZ}for(;f&&f.z>=d;){if(f!==r.prev&&f!==r.next&&Hi(i.x,i.y,s.x,s.y,o.x,o.y,f.x,f.y)&&ht(f.prev,f,f.next)>=0)return!1;f=f.prevZ}for(;m&&m.z<=h;){if(m!==r.prev&&m!==r.next&&Hi(i.x,i.y,s.x,s.y,o.x,o.y,m.x,m.y)&&ht(m.prev,m,m.next)>=0)return!1;m=m.nextZ}return!0}function N0(r,e,t){let n=r;do{let i=n.prev,s=n.next.next;!To(i,s)&&eh(i,n,n.next,s)&&Wr(i,s)&&Wr(s,i)&&(e.push(i.i/t),e.push(n.i/t),e.push(s.i/t),qr(n),qr(n.next),n=r=s),n=n.next}while(n!==r);return Xn(n)}function O0(r,e,t,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Y0(o,a)){let l=th(o,a);o=Xn(o,o.next),l=Xn(l,l.next),Vr(o,e,t,n,i,s),Vr(l,e,t,n,i,s);return}a=a.next}o=o.next}while(o!==r)}function U0(r,e,t,n){let i=[],s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*n,l=s<o-1?e[s+1]*n:r.length,c=Qu(r,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(X0(c));for(i.sort(H0),s=0;s<i.length;s++)G0(i[s],t),t=Xn(t,t.next);return t}function H0(r,e){return r.x-e.x}function G0(r,e){if(e=k0(r,e),e){let t=th(e,r);Xn(e,e.next),Xn(t,t.next)}}function k0(r,e){let t=e,n=r.x,i=r.y,s=-1/0,o;do{if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){let h=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>s){if(s=h,h===n){if(i===t.y)return t;if(i===t.next.y)return t.next}o=t.x<t.next.x?t:t.next}}t=t.next}while(t!==e);if(!o)return null;if(n===s)return o;let a=o,l=o.x,c=o.y,u=1/0,d;t=o;do n>=t.x&&t.x>=l&&n!==t.x&&Hi(i<c?n:s,i,l,c,i<c?s:n,i,t.x,t.y)&&(d=Math.abs(i-t.y)/(n-t.x),Wr(t,r)&&(d<u||d===u&&(t.x>o.x||t.x===o.x&&V0(o,t)))&&(o=t,u=d)),t=t.next;while(t!==a);return o}function V0(r,e){return ht(r.prev,r,e.prev)<0&&ht(e.next,r,r.next)<0}function W0(r,e,t,n){let i=r;do i.z===null&&(i.z=qa(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,q0(i)}function q0(r){let e,t,n,i,s,o,a,l,c=1;do{for(t=r,r=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,c*=2}while(o>1);return r}function qa(r,e,t,n,i){return r=32767*(r-t)*i,e=32767*(e-n)*i,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function X0(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Hi(r,e,t,n,i,s,o,a){return(i-o)*(e-a)-(r-o)*(s-a)>=0&&(r-o)*(n-a)-(t-o)*(e-a)>=0&&(t-o)*(s-a)-(i-o)*(n-a)>=0}function Y0(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!J0(r,e)&&(Wr(r,e)&&Wr(e,r)&&Z0(r,e)&&(ht(r.prev,r,e.prev)||ht(r,e.prev,e))||To(r,e)&&ht(r.prev,r,r.next)>0&&ht(e.prev,e,e.next)>0)}function ht(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function To(r,e){return r.x===e.x&&r.y===e.y}function eh(r,e,t,n){let i=Ns(ht(r,e,t)),s=Ns(ht(r,e,n)),o=Ns(ht(t,n,r)),a=Ns(ht(t,n,e));return!!(i!==s&&o!==a||i===0&&Bs(r,t,e)||s===0&&Bs(r,n,e)||o===0&&Bs(t,r,n)||a===0&&Bs(t,e,n))}function Bs(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Ns(r){return r>0?1:r<0?-1:0}function J0(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&eh(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function Wr(r,e){return ht(r.prev,r,r.next)<0?ht(r,e,r.next)>=0&&ht(r,r.prev,e)>=0:ht(r,e,r.prev)<0||ht(r,r.next,e)<0}function Z0(r,e){let t=r,n=!1,i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function th(r,e){let t=new Xa(r.i,r.x,r.y),n=new Xa(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function bu(r,e,t,n){let i=new Xa(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function qr(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Xa(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function $0(r,e,t,n){let i=0;for(let s=e,o=t-n;s<t;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}var Vn=class r{static area(e){let t=e.length,n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return r.area(e)<0}static triangulateShape(e,t){let n=[],i=[],s=[];Mu(e),Su(n,e);let o=e.length;t.forEach(Mu);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,Su(n,t[l]);let a=F0.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function Mu(r){let e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Su(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}var Qi=class r extends qe{constructor(e=new hi([new Q(.5,.5),new Q(-.5,.5),new Q(-.5,-.5),new Q(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],s=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new ze(i,3)),this.setAttribute("uv",new ze(s,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,y=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,p=t.UVGenerator!==void 0?t.UVGenerator:j0;t.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),d=t.amount);let w,_=!1,S,T,R,P;g&&(w=g.getSpacedPoints(u),_=!0,h=!1,S=g.computeFrenetFrames(u,!1),T=new b,R=new b,P=new b),h||(y=0,f=0,m=0,x=0);let W=a.extractPoints(c),U=W.shape,v=W.holes;if(!Vn.isClockWise(U)){U=U.reverse();for(let N=0,J=v.length;N<J;N++){let te=v[N];Vn.isClockWise(te)&&(v[N]=te.reverse())}}let I=Vn.triangulateShape(U,v),F=U;for(let N=0,J=v.length;N<J;N++){let te=v[N];U=U.concat(te)}function z(N,J,te){return J||console.error("THREE.ExtrudeGeometry: vec does not exist"),J.clone().multiplyScalar(te).add(N)}let D=U.length,V=I.length;function K(N,J,te){let ue,le,Se,Ae=N.x-J.x,Ge=N.y-J.y,st=te.x-N.x,je=te.y-N.y,A=Ae*Ae+Ge*Ge,M=Ae*je-Ge*st;if(Math.abs(M)>Number.EPSILON){let X=Math.sqrt(A),oe=Math.sqrt(st*st+je*je),we=J.x-Ge/X,q=J.y+Ae/X,Ee=te.x-je/oe,be=te.y+st/oe,he=((Ee-we)*je-(be-q)*st)/(Ae*je-Ge*st);ue=we+Ae*he-N.x,le=q+Ge*he-N.y;let ce=ue*ue+le*le;if(ce<=2)return new Q(ue,le);Se=Math.sqrt(ce/2)}else{let X=!1;Ae>Number.EPSILON?st>Number.EPSILON&&(X=!0):Ae<-Number.EPSILON?st<-Number.EPSILON&&(X=!0):Math.sign(Ge)===Math.sign(je)&&(X=!0),X?(ue=-Ge,le=Ae,Se=Math.sqrt(A)):(ue=Ae,le=Ge,Se=Math.sqrt(A/2))}return new Q(ue/Se,le/Se)}let me=[];for(let N=0,J=F.length,te=J-1,ue=N+1;N<J;N++,te++,ue++)te===J&&(te=0),ue===J&&(ue=0),me[N]=K(F[N],F[te],F[ue]);let H=[],Y,se=me.concat();for(let N=0,J=v.length;N<J;N++){let te=v[N];Y=[];for(let ue=0,le=te.length,Se=le-1,Ae=ue+1;ue<le;ue++,Se++,Ae++)Se===le&&(Se=0),Ae===le&&(Ae=0),Y[ue]=K(te[ue],te[Se],te[Ae]);H.push(Y),se=se.concat(Y)}for(let N=0;N<y;N++){let J=N/y,te=f*Math.cos(J*Math.PI/2),ue=m*Math.sin(J*Math.PI/2)+x;for(let le=0,Se=F.length;le<Se;le++){let Ae=z(F[le],me[le],ue);ye(Ae.x,Ae.y,-te)}for(let le=0,Se=v.length;le<Se;le++){let Ae=v[le];Y=H[le];for(let Ge=0,st=Ae.length;Ge<st;Ge++){let je=z(Ae[Ge],Y[Ge],ue);ye(je.x,je.y,-te)}}}let j=m+x;for(let N=0;N<D;N++){let J=h?z(U[N],se[N],j):U[N];_?(R.copy(S.normals[0]).multiplyScalar(J.x),T.copy(S.binormals[0]).multiplyScalar(J.y),P.copy(w[0]).add(R).add(T),ye(P.x,P.y,P.z)):ye(J.x,J.y,0)}for(let N=1;N<=u;N++)for(let J=0;J<D;J++){let te=h?z(U[J],se[J],j):U[J];_?(R.copy(S.normals[N]).multiplyScalar(te.x),T.copy(S.binormals[N]).multiplyScalar(te.y),P.copy(w[N]).add(R).add(T),ye(P.x,P.y,P.z)):ye(te.x,te.y,d/u*N)}for(let N=y-1;N>=0;N--){let J=N/y,te=f*Math.cos(J*Math.PI/2),ue=m*Math.sin(J*Math.PI/2)+x;for(let le=0,Se=F.length;le<Se;le++){let Ae=z(F[le],me[le],ue);ye(Ae.x,Ae.y,d+te)}for(let le=0,Se=v.length;le<Se;le++){let Ae=v[le];Y=H[le];for(let Ge=0,st=Ae.length;Ge<st;Ge++){let je=z(Ae[Ge],Y[Ge],ue);_?ye(je.x,je.y+w[u-1].y,w[u-1].x+te):ye(je.x,je.y,d+te)}}}xe(),G();function xe(){let N=i.length/3;if(h){let J=0,te=D*J;for(let ue=0;ue<V;ue++){let le=I[ue];Te(le[2]+te,le[1]+te,le[0]+te)}J=u+y*2,te=D*J;for(let ue=0;ue<V;ue++){let le=I[ue];Te(le[0]+te,le[1]+te,le[2]+te)}}else{for(let J=0;J<V;J++){let te=I[J];Te(te[2],te[1],te[0])}for(let J=0;J<V;J++){let te=I[J];Te(te[0]+D*u,te[1]+D*u,te[2]+D*u)}}n.addGroup(N,i.length/3-N,0)}function G(){let N=i.length/3,J=0;Oe(F,J),J+=F.length;for(let te=0,ue=v.length;te<ue;te++){let le=v[te];Oe(le,J),J+=le.length}n.addGroup(N,i.length/3-N,1)}function Oe(N,J){let te=N.length;for(;--te>=0;){let ue=te,le=te-1;le<0&&(le=N.length-1);for(let Se=0,Ae=u+y*2;Se<Ae;Se++){let Ge=D*Se,st=D*(Se+1),je=J+ue+Ge,A=J+le+Ge,M=J+le+st,X=J+ue+st;fe(je,A,M,X)}}}function ye(N,J,te){l.push(N),l.push(J),l.push(te)}function Te(N,J,te){ne(N),ne(J),ne(te);let ue=i.length/3,le=p.generateTopUV(n,i,ue-3,ue-2,ue-1);ie(le[0]),ie(le[1]),ie(le[2])}function fe(N,J,te,ue){ne(N),ne(J),ne(ue),ne(J),ne(te),ne(ue);let le=i.length/3,Se=p.generateSideWallUV(n,i,le-6,le-3,le-2,le-1);ie(Se[0]),ie(Se[1]),ie(Se[3]),ie(Se[1]),ie(Se[2]),ie(Se[3])}function ne(N){i.push(l[N*3+0]),i.push(l[N*3+1]),i.push(l[N*3+2])}function ie(N){s.push(N.x),s.push(N.y)}}}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return K0(t,n,e)}static fromJSON(e,t){let n=[];for(let s=0,o=e.shapes.length;s<o;s++){let a=t[e.shapes[s]];n.push(a)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Ku[i.type]().fromJSON(i)),new r(n,e.options)}},j0={generateTopUV:function(r,e,t,n,i){let s=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],u=e[i*3+1];return[new Q(s,o),new Q(a,l),new Q(c,u)]},generateSideWallUV:function(r,e,t,n,i,s){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],d=e[n*3+2],h=e[i*3],f=e[i*3+1],m=e[i*3+2],x=e[s*3],y=e[s*3+1],g=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new Q(o,1-l),new Q(c,1-d),new Q(h,1-m),new Q(x,1-g)]:[new Q(a,1-l),new Q(u,1-d),new Q(f,1-m),new Q(y,1-g)]}};function K0(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){let s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var uo=class r extends ka{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}};var Yn=class r extends qe{constructor(e=.5,t=1,n=8,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],l=[],c=[],u=[],d=e,h=(t-e)/i,f=new b,m=new Q;for(let x=0;x<=i;x++){for(let y=0;y<=n;y++){let g=s+y/n*o;f.x=d*Math.cos(g),f.y=d*Math.sin(g),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,u.push(m.x,m.y)}d+=h}for(let x=0;x<i;x++){let y=x*(n+1);for(let g=0;g<n;g++){let p=g+y,w=p,_=p+n+1,S=p+n+2,T=p+1;a.push(w,_,T),a.push(_,S,T)}}this.setIndex(a),this.setAttribute("position",new ze(l,3)),this.setAttribute("normal",new ze(c,3)),this.setAttribute("uv",new ze(u,2))}static fromJSON(e){return new r(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Ya=class r extends qe{constructor(e=new hi([new Q(0,.5),new Q(-.5,-.5),new Q(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],s=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new ze(i,3)),this.setAttribute("normal",new ze(s,3)),this.setAttribute("uv",new ze(o,2));function c(u){let d=i.length/3,h=u.extractPoints(t),f=h.shape,m=h.holes;Vn.isClockWise(f)===!1&&(f=f.reverse());for(let y=0,g=m.length;y<g;y++){let p=m[y];Vn.isClockWise(p)===!0&&(m[y]=p.reverse())}let x=Vn.triangulateShape(f,m);for(let y=0,g=m.length;y<g;y++){let p=m[y];f=f.concat(p)}for(let y=0,g=f.length;y<g;y++){let p=f[y];i.push(p.x,p.y,0),s.push(0,0,1),o.push(p.x,p.y)}for(let y=0,g=x.length;y<g;y++){let p=x[y],w=p[0]+d,_=p[1]+d,S=p[2]+d;n.push(w,_,S),l+=3}}}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Q0(t,e)}static fromJSON(e,t){let n=[];for(let i=0,s=e.shapes.length;i<s;i++){let o=t[e.shapes[i]];n.push(o)}return new r(n,e.curveSegments)}};function Q0(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,n=r.length;t<n;t++){let i=r[t];e.shapes.push(i.uuid)}else e.shapes.push(r.uuid);return e}var Xr=class r extends qe{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],d=new b,h=new b,f=[],m=[],x=[],y=[];for(let g=0;g<=n;g++){let p=[],w=g/n,_=0;g==0&&o==0?_=.5/t:g==n&&l==Math.PI&&(_=-.5/t);for(let S=0;S<=t;S++){let T=S/t;d.x=-e*Math.cos(i+T*s)*Math.sin(o+w*a),d.y=e*Math.cos(o+w*a),d.z=e*Math.sin(i+T*s)*Math.sin(o+w*a),m.push(d.x,d.y,d.z),h.copy(d).normalize(),x.push(h.x,h.y,h.z),y.push(T+_,1-w),p.push(c++)}u.push(p)}for(let g=0;g<n;g++)for(let p=0;p<t;p++){let w=u[g][p+1],_=u[g][p],S=u[g+1][p],T=u[g+1][p+1];(g!==0||o>0)&&f.push(w,_,T),(g!==n-1||l<Math.PI)&&f.push(_,S,T)}this.setIndex(f),this.setAttribute("position",new ze(m,3)),this.setAttribute("normal",new ze(x,3)),this.setAttribute("uv",new ze(y,2))}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var _t=class r extends qe{constructor(e=1,t=.4,n=8,i=6,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],l=[],c=[],u=new b,d=new b,h=new b;for(let f=0;f<=n;f++)for(let m=0;m<=i;m++){let x=m/i*s,y=f/n*Math.PI*2;d.x=(e+t*Math.cos(y))*Math.cos(x),d.y=(e+t*Math.cos(y))*Math.sin(x),d.z=t*Math.sin(y),a.push(d.x,d.y,d.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),h.subVectors(d,u).normalize(),l.push(h.x,h.y,h.z),c.push(m/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=i;m++){let x=(i+1)*f+m-1,y=(i+1)*(f-1)+m-1,g=(i+1)*(f-1)+m,p=(i+1)*f+m;o.push(x,y,p),o.push(y,g,p)}this.setIndex(o),this.setAttribute("position",new ze(a,3)),this.setAttribute("normal",new ze(l,3)),this.setAttribute("uv",new ze(c,2))}static fromJSON(e){return new r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Ja=class extends Tt{constructor(e){super(),this.type="ShadowMaterial",this.color=new re(0),this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this}};Ja.prototype.isShadowMaterial=!0;var ho=class extends Tt{constructor(e){super(),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ir,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}};ho.prototype.isMeshStandardMaterial=!0;var Za=class extends ho{constructor(e){super(),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Q(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ht(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.sheenColor=new re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new re(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};Za.prototype.isMeshPhysicalMaterial=!0;var $a=class extends Tt{constructor(e){super(),this.type="MeshPhongMaterial",this.color=new re(16777215),this.specular=new re(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ir,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=bo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}};$a.prototype.isMeshPhongMaterial=!0;var ja=class extends Tt{constructor(e){super(),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new re(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ir,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}};ja.prototype.isMeshToonMaterial=!0;var Ka=class extends Tt{constructor(e){super(),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ir,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};Ka.prototype.isMeshNormalMaterial=!0;var Qa=class extends Tt{constructor(e){super(),this.type="MeshLambertMaterial",this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=bo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}};Qa.prototype.isMeshLambertMaterial=!0;var di=class extends Tt{constructor(e){super(),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new re(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ir,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this}};di.prototype.isMeshMatcapMaterial=!0;var el=class extends Tn{constructor(e){super(),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};el.prototype.isLineDashedMaterial=!0;var ct={arraySlice:function(r,e,t){return ct.isTypedArray(r)?new r.constructor(r.subarray(e,t!==void 0?t:r.length)):r.slice(e,t)},convertArray:function(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)},isTypedArray:function(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)},getKeyframeOrder:function(r){function e(i,s){return r[i]-r[s]}let t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n},sortedArray:function(r,e,t){let n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){let a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i},flattenJSON:function(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)},subclip:function(r,e,t,n,i=30){let s=r.clone();s.name=e;let o=[];for(let l=0;l<s.tracks.length;++l){let c=s.tracks[l],u=c.getValueSize(),d=[],h=[];for(let f=0;f<c.times.length;++f){let m=c.times[f]*i;if(!(m<t||m>=n)){d.push(c.times[f]);for(let x=0;x<u;++x)h.push(c.values[f*u+x])}}d.length!==0&&(c.times=ct.convertArray(d,c.times.constructor),c.values=ct.convertArray(h,c.values.constructor),o.push(c))}s.tracks=o;let a=1/0;for(let l=0;l<s.tracks.length;++l)a>s.tracks[l].times[0]&&(a=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*a);return s.resetDuration(),s},makeClipAdditive:function(r,e=0,t=r,n=30){n<=0&&(n=30);let i=t.tracks.length,s=e/n;for(let o=0;o<i;++o){let a=t.tracks[o],l=a.ValueTypeName;if(l==="bool"||l==="string")continue;let c=r.tracks.find(function(g){return g.name===a.name&&g.ValueTypeName===l});if(c===void 0)continue;let u=0,d=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=d/3);let h=0,f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=f/3);let m=a.times.length-1,x;if(s<=a.times[0]){let g=u,p=d-u;x=ct.arraySlice(a.values,g,p)}else if(s>=a.times[m]){let g=m*d+u,p=g+d-u;x=ct.arraySlice(a.values,g,p)}else{let g=a.createInterpolant(),p=u,w=d-u;g.evaluate(s),x=ct.arraySlice(g.resultBuffer,p,w)}l==="quaternion"&&new vt().fromArray(x).normalize().conjugate().toArray(x);let y=c.times.length;for(let g=0;g<y;++g){let p=g*f+h;if(l==="quaternion")vt.multiplyQuaternionsFlat(c.values,p,x,0,c.values,p);else{let w=f-h*2;for(let _=0;_<w;++_)c.values[p+_]-=x[_]}}}return r.blendMode=Nu,r}},hn=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,e,s)}if(n===a)break;if(s=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(i===void 0)return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,s,e)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}};hn.prototype.beforeStart_=hn.prototype.copySampleValue_;hn.prototype.afterEnd_=hn.prototype.copySampleValue_;var tl=class extends hn{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Oi,endingEnd:Oi}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ui:s=e,a=2*t-n;break;case qs:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ui:o=e,l=2*n-t;break;case qs:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,m=(n-t)/(i-t),x=m*m,y=x*m,g=-h*y+2*h*x-h*m,p=(1+h)*y+(-1.5-2*h)*x+(-.5+h)*m+1,w=(-1-f)*y+(1.5+f)*x+.5*m,_=f*y-f*x;for(let S=0;S!==a;++S)s[S]=g*o[u+S]+p*o[c+S]+w*o[l+S]+_*o[d+S];return s}},fo=class extends hn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),d=1-u;for(let h=0;h!==a;++h)s[h]=o[c+h]*d+o[l+h]*u;return s}},nl=class extends hn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Zt=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ct.convertArray(t,this.TimeBufferType),this.values=ct.convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ct.convertArray(e.times,Array),values:ct.convertArray(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new nl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new fo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new tl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Vs:t=this.InterpolantFactoryMethodDiscrete;break;case Ws:t=this.InterpolantFactoryMethodLinear;break;case Bo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Vs;case this.InterpolantFactoryMethodLinear:return Ws;case this.InterpolantFactoryMethodSmooth:return Bo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=ct.arraySlice(n,s,o),this.values=ct.arraySlice(this.values,s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&ct.isTypedArray(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=ct.arraySlice(this.times),t=ct.arraySlice(this.values),n=this.getValueSize(),i=this.getInterpolation()===Bo,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{let d=a*n,h=d-n,f=d+n;for(let m=0;m!==n;++m){let x=t[d+m];if(x!==t[h+m]||x!==t[f+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*n,h=o*n;for(let f=0;f!==n;++f)t[h+f]=t[d+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=ct.arraySlice(e,0,o),this.values=ct.arraySlice(t,0,o*n)):(this.times=e,this.values=t),this}clone(){let e=ct.arraySlice(this.times,0),t=ct.arraySlice(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Zt.prototype.TimeBufferType=Float32Array;Zt.prototype.ValueBufferType=Float32Array;Zt.prototype.DefaultInterpolation=Ws;var Jn=class extends Zt{};Jn.prototype.ValueTypeName="bool";Jn.prototype.ValueBufferType=Array;Jn.prototype.DefaultInterpolation=Vs;Jn.prototype.InterpolantFactoryMethodLinear=void 0;Jn.prototype.InterpolantFactoryMethodSmooth=void 0;var po=class extends Zt{};po.prototype.ValueTypeName="color";var er=class extends Zt{};er.prototype.ValueTypeName="number";var il=class extends hn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let u=c+a;c!==u;c+=4)vt.slerpFlat(s,0,o,c-a,o,c,l);return s}},fi=class extends Zt{InterpolantFactoryMethodLinear(e){return new il(this.times,this.values,this.getValueSize(),e)}};fi.prototype.ValueTypeName="quaternion";fi.prototype.DefaultInterpolation=Ws;fi.prototype.InterpolantFactoryMethodSmooth=void 0;var Zn=class extends Zt{};Zn.prototype.ValueTypeName="string";Zn.prototype.ValueBufferType=Array;Zn.prototype.DefaultInterpolation=Vs;Zn.prototype.InterpolantFactoryMethodLinear=void 0;Zn.prototype.InterpolantFactoryMethodSmooth=void 0;var tr=class extends Zt{};tr.prototype.ValueTypeName="vector";var mo=class{constructor(e,t=-1,n,i=zl){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=nn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(tx(n[o]).scale(i));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(Zt.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);let u=ct.getKeyframeOrder(l);l=ct.sortedArray(l,1,u),c=ct.sortedArray(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new er(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(s);if(u&&u.length>1){let d=u[1],h=i[d];h||(i[d]=h=[]),h.push(c)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(d,h,f,m,x){if(f.length!==0){let y=[],g=[];ct.flattenJSON(f,y,g,m),y.length!==0&&x.push(new d(h,y,g))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let d=0;d<c.length;d++){let h=c[d].keys;if(!(!h||h.length===0))if(h[0].morphTargets){let f={},m;for(m=0;m<h.length;m++)if(h[m].morphTargets)for(let x=0;x<h[m].morphTargets.length;x++)f[h[m].morphTargets[x]]=-1;for(let x in f){let y=[],g=[];for(let p=0;p!==h[m].morphTargets.length;++p){let w=h[m];y.push(w.time),g.push(w.morphTarget===x?1:0)}i.push(new er(".morphTargetInfluence["+x+"]",y,g))}l=f.length*(o||1)}else{let f=".bones["+t[d].name+"]";n(tr,f+".position",h,"pos",i),n(fi,f+".quaternion",h,"rot",i),n(tr,f+".scale",h,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function ex(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return er;case"vector":case"vector2":case"vector3":case"vector4":return tr;case"color":return po;case"quaternion":return fi;case"bool":case"boolean":return Jn;case"string":return Zn}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function tx(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=ex(r.type);if(r.times===void 0){let t=[],n=[];ct.flattenJSON(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}var nr={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}},rl=class{constructor(e,t,n){let i=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let f=c[d],m=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return m}return null}}},nx=new rl,dn=class{constructor(e){this.manager=e!==void 0?e:nx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}},wn={},sl=class extends dn{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=nr.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(wn[e]!==void 0){wn[e].push({onLoad:t,onProgress:n,onError:i});return}wn[e]=[],wn[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||c.body.getReader===void 0)return c;let u=wn[e],d=c.body.getReader(),h=c.headers.get("Content-Length"),f=h?parseInt(h):0,m=f!==0,x=0,y=new ReadableStream({start(g){p();function p(){d.read().then(({done:w,value:_})=>{if(w)g.close();else{x+=_.byteLength;let S=new ProgressEvent("progress",{lengthComputable:m,loaded:x,total:f});for(let T=0,R=u.length;T<R;T++){let P=u[T];P.onProgress&&P.onProgress(S)}g.enqueue(_),p()}})}}});return new Response(y)}else throw Error(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{let d=/charset="?([^;"\s]*)"?/i.exec(a),h=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(h);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{nr.add(e,c);let u=wn[e];delete wn[e];for(let d=0,h=u.length;d<h;d++){let f=u[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{let u=wn[e];if(u===void 0)throw this.manager.itemError(e),c;delete wn[e];for(let d=0,h=u.length;d<h;d++){let f=u[d];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var go=class extends dn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=nr.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;let a=Rr("img");function l(){u(),nr.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(d){u(),i&&i(d),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}},ol=class extends dn{constructor(e){super(e)}load(e,t,n,i){let s=new Ji,o=new go(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(e[c],function(u){s.images[c]=u,a++,a===6&&(s.needsUpdate=!0,t&&t(s))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return s}};var Yr=class extends dn{constructor(e){super(e)}load(e,t,n,i){let s=new Rt,o=new go(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}},$t=class extends et{constructor(e,t=1){super(),this.type="Light",this.color=new re(e),this.intensity=t}dispose(){}copy(e){return super.copy(e),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}};$t.prototype.isLight=!0;var al=class extends $t{constructor(e,t,n){super(e,n),this.type="HemisphereLight",this.position.copy(et.DefaultUp),this.updateMatrix(),this.groundColor=new re(t)}copy(e){return $t.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this}};al.prototype.isHemisphereLight=!0;var Eu=new Me,Tu=new b,Au=new b,Jr=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Q(512,512),this.map=null,this.mapPass=null,this.matrix=new Me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zi,this._frameExtents=new Q(1,1),this._viewportCount=1,this._viewports=[new Ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Tu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Tu),Au.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Au),t.updateMatrixWorld(),Eu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Eu),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},xo=class extends Jr{constructor(){super(new It(50,1,.5,500)),this.focus=1}updateMatrices(e){let t=this.camera,n=ba*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}};xo.prototype.isSpotLightShadow=!0;var ll=class extends $t{constructor(e,t,n=0,i=Math.PI/3,s=0,o=1){super(e,t),this.type="SpotLight",this.position.copy(et.DefaultUp),this.updateMatrix(),this.target=new et,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.shadow=new xo}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};ll.prototype.isSpotLight=!0;var Ru=new Me,yr=new b,ma=new b,yo=class extends Jr{constructor(){super(new It(90,1,.5,500)),this._frameExtents=new Q(4,2),this._viewportCount=6,this._viewports=[new Ze(2,1,1,1),new Ze(0,1,1,1),new Ze(3,1,1,1),new Ze(1,1,1,1),new Ze(3,0,1,1),new Ze(1,0,1,1)],this._cubeDirections=[new b(1,0,0),new b(-1,0,0),new b(0,0,1),new b(0,0,-1),new b(0,1,0),new b(0,-1,0)],this._cubeUps=[new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,0,1),new b(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),yr.setFromMatrixPosition(e.matrixWorld),n.position.copy(yr),ma.copy(n.position),ma.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ma),n.updateMatrixWorld(),i.makeTranslation(-yr.x,-yr.y,-yr.z),Ru.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ru)}};yo.prototype.isPointLightShadow=!0;var cl=class extends $t{constructor(e,t,n=0,i=1){super(e,t),this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new yo}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}};cl.prototype.isPointLight=!0;var vo=class extends Jr{constructor(){super(new Dr(-5,5,5,-5,.5,500))}};vo.prototype.isDirectionalLightShadow=!0;var ul=class extends $t{constructor(e,t){super(e,t),this.type="DirectionalLight",this.position.copy(et.DefaultUp),this.updateMatrix(),this.target=new et,this.shadow=new vo}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};ul.prototype.isDirectionalLight=!0;var hl=class extends $t{constructor(e,t){super(e,t),this.type="AmbientLight"}};hl.prototype.isAmbientLight=!0;var dl=class extends $t{constructor(e,t,n=10,i=10){super(e,t),this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){let t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}};dl.prototype.isRectAreaLight=!0;var _o=class{constructor(){this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new b)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){let n=e.x,i=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.282095),t.addScaledVector(o[1],.488603*i),t.addScaledVector(o[2],.488603*s),t.addScaledVector(o[3],.488603*n),t.addScaledVector(o[4],1.092548*(n*i)),t.addScaledVector(o[5],1.092548*(i*s)),t.addScaledVector(o[6],.315392*(3*s*s-1)),t.addScaledVector(o[7],1.092548*(n*s)),t.addScaledVector(o[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){let n=e.x,i=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.886227),t.addScaledVector(o[1],2*.511664*i),t.addScaledVector(o[2],2*.511664*s),t.addScaledVector(o[3],2*.511664*n),t.addScaledVector(o[4],2*.429043*n*i),t.addScaledVector(o[5],2*.429043*i*s),t.addScaledVector(o[6],.743125*s*s-.247708),t.addScaledVector(o[7],2*.429043*n*s),t.addScaledVector(o[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){let n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){let n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){let n=e.x,i=e.y,s=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*s,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*n*s,t[8]=.546274*(n*n-i*i)}};_o.prototype.isSphericalHarmonics3=!0;var Zr=class extends $t{constructor(e=new _o,t=1){super(void 0,t),this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){let t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}};Zr.prototype.isLightProbe=!0;var fl=class{static decodeText(e){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch(n){return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.substr(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},pl=class extends qe{constructor(){super(),this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){let e=super.toJSON(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};pl.prototype.isInstancedBufferGeometry=!0;var ml=class extends dn{constructor(e){super(e),typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=nr.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){nr.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){i&&i(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}};ml.prototype.isImageBitmapLoader=!0;var Os,ix={getContext:function(){return Os===void 0&&(Os=new(window.AudioContext||window.webkitAudioContext)),Os},setContext:function(r){Os=r}},gl=class extends dn{constructor(e){super(e)}load(e,t,n,i){let s=this,o=new sl(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{let l=a.slice(0);ix.getContext().decodeAudioData(l,function(u){t(u)})}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}},xl=class extends Zr{constructor(e,t,n=1){super(void 0,n);let i=new re().set(e),s=new re().set(t),o=new b(i.r,i.g,i.b),a=new b(s.r,s.g,s.b),l=Math.sqrt(Math.PI),c=l*Math.sqrt(.75);this.sh.coefficients[0].copy(o).add(a).multiplyScalar(l),this.sh.coefficients[1].copy(o).sub(a).multiplyScalar(c)}};xl.prototype.isHemisphereLightProbe=!0;var yl=class extends Zr{constructor(e,t=1){super(void 0,t);let n=new re().set(e);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}};yl.prototype.isAmbientLightProbe=!0;var vl=class extends et{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;let t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}};var _l=class{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0,t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}},wl=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,o;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,s=e*i+i,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[s+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){let l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-s,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,o=i;s!==o;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let o=0;o!==s;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){vt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){let o=this._workIndex*s;vt.multiplyQuaternionsFlat(e,o,e,t,e,n),vt.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,s){let o=1-i;for(let a=0;a!==s;++a){let l=t+a;e[l]=e[l]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,s){for(let o=0;o!==s;++o){let a=t+o;e[a]=e[a]+e[n+o]*i}}},Ol="\\[\\]\\.:\\/",rx=new RegExp("["+Ol+"]","g"),Ul="[^"+Ol+"]",sx="[^"+Ol.replace("\\.","")+"]",ox=/((?:WC+[\/:])*)/.source.replace("WC",Ul),ax=/(WCOD+)?/.source.replace("WCOD",sx),lx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ul),cx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ul),ux=new RegExp("^"+ox+ax+lx+cx+"$"),hx=["material","materials","bones"],bl=class{constructor(e,t,n){let i=n||Qe.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Qe=class r{constructor(e,t,n){this.path=t,this.parsedPath=n||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,n):new r(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(rx,"")}static parseTrackName(e){let t=ux.exec(e);if(!t)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);hx.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(!t||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(e.geometry.isBufferGeometry){if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Qe.Composite=bl;Qe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Qe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Qe.prototype.GetterByBindingType=[Qe.prototype._getValue_direct,Qe.prototype._getValue_array,Qe.prototype._getValue_arrayElement,Qe.prototype._getValue_toArray];Qe.prototype.SetterByBindingTypeAndVersioning=[[Qe.prototype._setValue_direct,Qe.prototype._setValue_direct_setNeedsUpdate,Qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_array,Qe.prototype._setValue_array_setNeedsUpdate,Qe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_arrayElement,Qe.prototype._setValue_arrayElement_setNeedsUpdate,Qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_fromArray,Qe.prototype._setValue_fromArray_setNeedsUpdate,Qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ml=class{constructor(){this.uuid=nn(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;let e={};this._indicesByUUID=e;for(let n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};let t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){let e=this._objects,t=this._indicesByUUID,n=this._paths,i=this._parsedPaths,s=this._bindings,o=s.length,a,l=e.length,c=this.nCachedObjects_;for(let u=0,d=arguments.length;u!==d;++u){let h=arguments[u],f=h.uuid,m=t[f];if(m===void 0){m=l++,t[f]=m,e.push(h);for(let x=0,y=o;x!==y;++x)s[x].push(new Qe(h,n[x],i[x]))}else if(m<c){a=e[m];let x=--c,y=e[x];t[y.uuid]=m,e[m]=y,t[f]=x,e[x]=h;for(let g=0,p=o;g!==p;++g){let w=s[g],_=w[x],S=w[m];w[m]=_,S===void 0&&(S=new Qe(h,n[g],i[g])),w[x]=S}}else e[m]!==a&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){let e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length,s=this.nCachedObjects_;for(let o=0,a=arguments.length;o!==a;++o){let l=arguments[o],c=l.uuid,u=t[c];if(u!==void 0&&u>=s){let d=s++,h=e[d];t[h.uuid]=u,e[u]=h,t[c]=d,e[d]=l;for(let f=0,m=i;f!==m;++f){let x=n[f],y=x[d],g=x[u];x[u]=y,x[d]=g}}}this.nCachedObjects_=s}uncache(){let e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length,s=this.nCachedObjects_,o=e.length;for(let a=0,l=arguments.length;a!==l;++a){let c=arguments[a],u=c.uuid,d=t[u];if(d!==void 0)if(delete t[u],d<s){let h=--s,f=e[h],m=--o,x=e[m];t[f.uuid]=d,e[d]=f,t[x.uuid]=h,e[h]=x,e.pop();for(let y=0,g=i;y!==g;++y){let p=n[y],w=p[h],_=p[m];p[d]=w,p[h]=_,p.pop()}}else{let h=--o,f=e[h];h>0&&(t[f.uuid]=d),e[d]=f,e.pop();for(let m=0,x=i;m!==x;++m){let y=n[m];y[d]=y[h],y.pop()}}}this.nCachedObjects_=s}subscribe_(e,t){let n=this._bindingsIndicesByPath,i=n[e],s=this._bindings;if(i!==void 0)return s[i];let o=this._paths,a=this._parsedPaths,l=this._objects,c=l.length,u=this.nCachedObjects_,d=new Array(c);i=s.length,n[e]=i,o.push(e),a.push(t),s.push(d);for(let h=u,f=l.length;h!==f;++h){let m=l[h];d[h]=new Qe(m,e,t)}return d}unsubscribe_(e){let t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){let i=this._paths,s=this._parsedPaths,o=this._bindings,a=o.length-1,l=o[a],c=e[a];t[c]=n,o[n]=l,o.pop(),s[n]=s[a],s.pop(),i[n]=i[a],i.pop()}}};Ml.prototype.isAnimationObjectGroup=!0;var Sl=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let s=t.tracks,o=s.length,a=new Array(o),l={endingStart:Oi,endingEnd:Oi};for(let c=0;c!==o;++c){let u=s[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Ud,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){let i=this._clip.duration,s=e._clip.duration,o=s/i,a=i/s;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,s=i.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);let l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let s=this._startTime;if(s!==null){let l=(e-s)*n;if(l<0||n===0)return;this._startTime=null,t=n*l}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Nu:for(let u=0,d=l.length;u!==d;++u)l[u].evaluate(o),c[u].accumulateAdditive(a);break;case zl:default:for(let u=0,d=l.length;u!==d;++u)l[u].evaluate(o),c[u].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,s=this._loopCount,o=n===Hd;if(e===0)return s===-1?i:o&&(s&1)===1?t-i:i;if(n===Od){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){let a=Math.floor(i/t);i-=t*a,s+=Math.abs(a);let l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=Ui,i.endingEnd=Ui):(e?i.endingStart=this.zeroSlopeAtStart?Ui:Oi:i.endingStart=qs,t?i.endingEnd=this.zeroSlopeAtEnd?Ui:Oi:i.endingEnd=qs)}_scheduleFading(e,t,n){let i=this._mixer,s=i.time,o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,l=o.sampleValues;return a[0]=s,l[0]=t,a[1]=s+e,l[1]=n,this}},El=class extends bn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,u=c[l];u===void 0&&(u={},c[l]=u);for(let d=0;d!==s;++d){let h=i[d],f=h.name,m=u[f];if(m!==void 0)++m.referenceCount,o[d]=m;else{if(m=o[d],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,f));continue}let x=t&&t._propertyBindings[d].binding.parsedPath;m=new wl(Qe.create(n,f,x),h.ValueTypeName,h.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,f),o[d]=m}a[d].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,s=this._actionsByClip,o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let s=e._clip.uuid,o=this._actionsByClip,a=o[s],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;let d=a.actionByRoot,h=(e._localRoot||this._root).uuid;delete d[h],l.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,s=this._bindings,o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new fo(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){let i=t||this._root,s=i.uuid,o=typeof e=="string"?mo.findByName(i,e):e,a=o!==null?o.uuid:e,l=this._actionsByClip[a],c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=zl),l!==void 0){let d=l.actionByRoot[s];if(d!==void 0&&d.blendMode===n)return d;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;let u=new Sl(this,o,t,n);return this._bindAction(u,c),this._addInactiveAction(u,a,s),u}existingAction(e,t){let n=t||this._root,i=n.uuid,s=typeof e=="string"?mo.findByName(n,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,s,o);let a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){let o=s.knownActions;for(let a=0,l=o.length;a!==l;++a){let c=o[a];this._deactivateAction(c);let u=c._cacheIndex,d=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,d._cacheIndex=u,t[u]=d,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(let o in s){let a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};El.prototype._controlInterpolantsResultBuffer=new Float32Array(1);var Tl=class r{constructor(e){typeof e=="string"&&(console.warn("THREE.Uniform: Type parameter is no longer needed."),e=arguments[1]),this.value=e}clone(){return new r(this.value.clone===void 0?this.value:this.value.clone())}},Al=class extends li{constructor(e,t,n=1){super(e,t),this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}};Al.prototype.isInstancedInterleavedBuffer=!0;var Rl=class{constructor(e,t,n,i,s){this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=s,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}};Rl.prototype.isGLBufferAttribute=!0;var wo=class{constructor(e,t,n=0,i=1/0){this.ray=new Sn(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Lr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t&&t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t&&t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Cl(e,this,n,t),n.sort(Cu),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Cl(e[i],this,n,t);return n.sort(Cu),n}};function Cu(r,e){return r.distance-e.distance}function Cl(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){let i=r.children;for(let s=0,o=i.length;s<o;s++)Cl(i[s],e,t,!0)}}var Lu=new Q,pi=class{constructor(e=new Q(1/0,1/0),t=new Q(-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Lu.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Lu.copy(e).clamp(this.min,this.max).sub(e).length()}intersect(e){return this.min.max(e.min),this.max.min(e.max),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};pi.prototype.isBox2=!0;var Pu=new b,Us=new b,Ll=class{constructor(e=new b,t=new b){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Pu.subVectors(e,this.start),Us.subVectors(this.end,this.start);let n=Us.dot(Us),s=Us.dot(Pu)/n;return t&&(s=Ht(s,0,1)),s}closestPointToPoint(e,t,n){let i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};var Nn=new b,Hs=new Me,ga=new Me,Pl=class extends ci{constructor(e){let t=nh(e),n=new qe,i=[],s=[],o=new re(0,0,1),a=new re(0,1,0);for(let c=0;c<t.length;c++){let u=t[c];u.parent&&u.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),s.push(o.r,o.g,o.b),s.push(a.r,a.g,a.b))}n.setAttribute("position",new ze(i,3)),n.setAttribute("color",new ze(s,3));let l=new Tn({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,l),this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){let t=this.bones,n=this.geometry,i=n.getAttribute("position");ga.copy(this.root.matrixWorld).invert();for(let s=0,o=0;s<t.length;s++){let a=t[s];a.parent&&a.parent.isBone&&(Hs.multiplyMatrices(ga,a.matrixWorld),Nn.setFromMatrixPosition(Hs),i.setXYZ(o,Nn.x,Nn.y,Nn.z),Hs.multiplyMatrices(ga,a.parent.matrixWorld),Nn.setFromMatrixPosition(Hs),i.setXYZ(o+1,Nn.x,Nn.y,Nn.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}};function nh(r){let e=[];r&&r.isBone&&e.push(r);for(let t=0;t<r.children.length;t++)e.push.apply(e,nh(r.children[t]));return e}var Il=class extends ci{constructor(e=10,t=10,n=4473924,i=8947848){n=new re(n),i=new re(i);let s=t/2,o=e/t,a=e/2,l=[],c=[];for(let h=0,f=0,m=-a;h<=t;h++,m+=o){l.push(-a,0,m,a,0,m),l.push(m,0,-a,m,0,a);let x=h===s?n:i;x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3}let u=new qe;u.setAttribute("position",new ze(l,3)),u.setAttribute("color",new ze(c,3));let d=new Tn({vertexColors:!0,toneMapped:!1});super(u,d),this.type="GridHelper"}};var dx=new Float32Array(1),Ox=new Int32Array(dx.buffer);kt.create=function(r,e){return console.log("THREE.Curve.create() has been deprecated"),r.prototype=Object.create(kt.prototype),r.prototype.constructor=r,r.prototype.getPoint=e,r};kr.prototype.fromPoints=function(r){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(r)};Il.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};Pl.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};dn.prototype.extractUrlBase=function(r){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),fl.extractUrlBase(r)};dn.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};pi.prototype.center=function(r){return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."),this.getCenter(r)};pi.prototype.empty=function(){return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."),this.isEmpty()};pi.prototype.isIntersectionBox=function(r){return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(r)};pi.prototype.size=function(r){return console.warn("THREE.Box2: .size() has been renamed to .getSize()."),this.getSize(r)};Yt.prototype.center=function(r){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(r)};Yt.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()};Yt.prototype.isIntersectionBox=function(r){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(r)};Yt.prototype.isIntersectionSphere=function(r){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(r)};Yt.prototype.size=function(r){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(r)};qn.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()};Zi.prototype.setFromMatrix=function(r){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(r)};Ll.prototype.center=function(r){return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."),this.getCenter(r)};Mt.prototype.flattenToArrayOffset=function(r,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(r,e)};Mt.prototype.multiplyVector3=function(r){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),r.applyMatrix3(this)};Mt.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")};Mt.prototype.applyToBufferAttribute=function(r){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),r.applyMatrix3(this)};Mt.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")};Mt.prototype.getInverse=function(r){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(r).invert()};Me.prototype.extractPosition=function(r){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(r)};Me.prototype.flattenToArrayOffset=function(r,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(r,e)};Me.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new b().setFromMatrixColumn(this,3)};Me.prototype.setRotationFromQuaternion=function(r){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(r)};Me.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")};Me.prototype.multiplyVector3=function(r){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};Me.prototype.multiplyVector4=function(r){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};Me.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")};Me.prototype.rotateAxis=function(r){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),r.transformDirection(this)};Me.prototype.crossVector=function(r){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};Me.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")};Me.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")};Me.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")};Me.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")};Me.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")};Me.prototype.applyToBufferAttribute=function(r){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};Me.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")};Me.prototype.makeFrustum=function(r,e,t,n,i,s){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(r,e,n,t,i,s)};Me.prototype.getInverse=function(r){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(r).invert()};tn.prototype.isIntersectionLine=function(r){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(r)};vt.prototype.multiplyVector3=function(r){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),r.applyQuaternion(this)};vt.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()};Sn.prototype.isIntersectionBox=function(r){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(r)};Sn.prototype.isIntersectionPlane=function(r){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(r)};Sn.prototype.isIntersectionSphere=function(r){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(r)};Dt.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()};Dt.prototype.barycoordFromPoint=function(r,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(r,e)};Dt.prototype.midpoint=function(r){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(r)};Dt.prototypenormal=function(r){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(r)};Dt.prototype.plane=function(r){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(r)};Dt.barycoordFromPoint=function(r,e,t,n,i){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),Dt.getBarycoord(r,e,t,n,i)};Dt.normal=function(r,e,t,n){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),Dt.getNormal(r,e,t,n)};hi.prototype.extractAllPoints=function(r){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(r)};hi.prototype.extrude=function(r){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new Qi(this,r)};hi.prototype.makeGeometry=function(r){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new Ya(this,r)};Q.prototype.fromAttribute=function(r,e,t){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,e,t)};Q.prototype.distanceToManhattan=function(r){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(r)};Q.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};b.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")};b.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")};b.prototype.getPositionFromMatrix=function(r){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(r)};b.prototype.getScaleFromMatrix=function(r){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(r)};b.prototype.getColumnFromMatrix=function(r,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,r)};b.prototype.applyProjection=function(r){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(r)};b.prototype.fromAttribute=function(r,e,t){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,e,t)};b.prototype.distanceToManhattan=function(r){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(r)};b.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};Ze.prototype.fromAttribute=function(r,e,t){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,e,t)};Ze.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};et.prototype.getChildByName=function(r){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(r)};et.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")};et.prototype.translate=function(r,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,r)};et.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")};et.prototype.applyMatrix=function(r){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(r)};Object.defineProperties(et.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(r){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=r}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});ee.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")};Object.defineProperties(ee.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),Gd},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});io.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};It.prototype.setLens=function(r,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(r)};Object.defineProperties($t.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(r){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=r}},shadowCameraLeft:{set:function(r){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=r}},shadowCameraRight:{set:function(r){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=r}},shadowCameraTop:{set:function(r){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=r}},shadowCameraBottom:{set:function(r){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=r}},shadowCameraNear:{set:function(r){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=r}},shadowCameraFar:{set:function(r){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=r}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(r){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=r}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(r){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=r}},shadowMapHeight:{set:function(r){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=r}}});Object.defineProperties(gt.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===Xs},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(Xs)}}});gt.prototype.setDynamic=function(r){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(r===!0?Xs:Ar),this};gt.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},gt.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};qe.prototype.addIndex=function(r){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(r)};qe.prototype.addAttribute=function(r,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(e&&e.isBufferAttribute)&&!(e&&e.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(r,new gt(arguments[1],arguments[2]))):r==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(r,e)};qe.prototype.addDrawCall=function(r,e,t){t!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(r,e)};qe.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()};qe.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")};qe.prototype.removeAttribute=function(r){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(r)};qe.prototype.applyMatrix=function(r){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(r)};Object.defineProperties(qe.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});li.prototype.setDynamic=function(r){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(r===!0?Xs:Ar),this};li.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};Qi.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")};Qi.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")};Qi.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")};to.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")};Tl.prototype.onUpdate=function(){return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."),this};Object.defineProperties(Tt.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new re}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(r){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=r===Du}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(r){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=r}},vertexTangents:{get:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")},set:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}});Object.defineProperties(En.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(r){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=r}}});nt.prototype.clearTarget=function(r,e,t,n){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(r),this.clear(e,t,n)};nt.prototype.animate=function(r){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(r)};nt.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()};nt.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()};nt.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision};nt.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()};nt.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")};nt.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")};nt.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")};nt.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")};nt.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")};nt.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")};nt.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures};nt.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")};nt.prototype.enableScissorTest=function(r){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(r)};nt.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")};nt.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")};nt.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")};nt.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")};nt.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")};nt.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")};nt.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")};nt.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")};nt.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")};nt.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()};Object.defineProperties(nt.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(r){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=r}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(r){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=r}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(r){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=r===!0?Ke:Wn}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}},gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});Object.defineProperties($u.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(Gt.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(r){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=r}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(r){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=r}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(r){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=r}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(r){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=r}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(r){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=r}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(r){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=r}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(r){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=r}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(r){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=r}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(r){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=r}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(r){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=r}}});vl.prototype.load=function(r){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");let e=this;return new gl().load(r,function(n){e.setBuffer(n)}),this};_l.prototype.getData=function(){return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."),this.getFrequencyData()};Ir.prototype.updateCubeMap=function(r,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(r,e)};Ir.prototype.clear=function(r,e,t,n){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(r,e,t,n)};Mn.crossOrigin=void 0;Mn.loadTexture=function(r,e,t,n){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");let i=new Yr;i.setCrossOrigin(this.crossOrigin);let s=i.load(r,t,void 0,n);return e&&(s.mapping=e),s};Mn.loadTextureCube=function(r,e,t,n){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");let i=new ol;i.setCrossOrigin(this.crossOrigin);let s=i.load(r,t,void 0,n);return e&&(s.mapping=e),s};Mn.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};Mn.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dl}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Dl);var de=-2984,Ao=-452,De=Math.PI/180;function at(r,e,t){let n=document.createElement("canvas");n.width=r,n.height=e,t(n.getContext("2d"),r,e);let i=new ui(n);return i.encoding=Ke,i.anisotropy=4,i.userData.canvas=n,i}var kl=at(256,256,(r,e)=>{r.fillStyle="#000",r.fillRect(0,0,e,e);let t=e/2,n=r.createRadialGradient(t*.78,t*.62,t*.05,t,t,t);n.addColorStop(0,"#ffffff"),n.addColorStop(.45,"#d9d6d2"),n.addColorStop(.85,"#8d8a87"),n.addColorStop(1,"#5f5c5a"),r.fillStyle=n,r.beginPath(),r.arc(t,t,t,0,Math.PI*2),r.fill();let i=r.createLinearGradient(0,e*.6,0,e);i.addColorStop(0,"rgba(255,250,240,0)"),i.addColorStop(1,"rgba(255,250,240,0.22)"),r.fillStyle=i,r.beginPath(),r.arc(t,t,t,0,Math.PI*2),r.fill()}),Hl={};function pe(r,e,t){let n=r+(e?e.uuid:"")+(t?JSON.stringify(Object.keys(t)):"");if(!Hl[n]||t){let i=new di(Object.assign({matcap:kl,color:new re(r),map:e||null},t||{}));if(t)return i;Hl[n]=i}return Hl[n]}var fx=at(128,128,(r,e)=>{let t=r.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);t.addColorStop(0,"rgba(0,0,0,0.55)"),t.addColorStop(.55,"rgba(0,0,0,0.25)"),t.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=t,r.fillRect(0,0,e,e)});function Ut(r,e,t,n,i,s,o){let a=new ee(new Xe(r,e),new Ue({map:fx,transparent:!0,depthWrite:!1,opacity:o||.8}));return a.rotation.x=-Math.PI/2,a.rotation.z=s||0,a.position.set(t,n+2,i),a.renderOrder=1,a.userData.sombra=!0,a}function it(r,e,t,n){return new ee(new tt(r,e,t),n)}function $e(r,e,t,n,i){return new ee(new St(r,e,t,i||24),n)}function Ye(r,e,t,n){let i=e[0]-r[0],s=e[1]-r[1],o=e[2]-r[2],a=Math.sqrt(i*i+s*s+o*o),l=$e(t,t,a,n,10);return l.position.set((r[0]+e[0])/2,(r[1]+e[1])/2,(r[2]+e[2])/2),l.lookAt(e[0],e[1],e[2]),l.rotateX(Math.PI/2),l}function Vl(r,e,t,n,i,s){let o=at(t,n,i),a=new ee(new Xe(r,e),s&&s.basico?new Ue({map:o,transparent:!!(s&&s.transparente)}):pe("#ffffff",o,s&&s.transparente?{transparent:!0}:null));return a.userData.textura=o,a}var Kr=null;function ih(){if(!Kr){let r=window.AudioContext||window.webkitAudioContext;if(!r)return null;Kr=new r}return Kr.state==="suspended"&&Kr.resume(),Kr}var rh=!1;document.addEventListener("muteToggle",r=>{rh=!!r.detail});function sh(){return rh}function An(r,e,t){let n=ih();if(!n||sh())return;let i=n.currentTime;r.forEach(([s,o])=>{if(s){let a=n.createOscillator(),l=n.createGain();a.type=e||"square",a.frequency.setValueAtTime(s,i),l.gain.setValueAtTime(t||.05,i),l.gain.exponentialRampToValueAtTime(1e-4,i+o),a.connect(l).connect(n.destination),a.start(i),a.stop(i+o)}i+=o})}function jn(r,e,t){let n=ih();if(!n||sh())return;let i=Math.floor(n.sampleRate*r),s=n.createBuffer(1,i,n.sampleRate),o=s.getChannelData(0);for(let u=0;u<i;u++)o[u]=(Math.random()*2-1)*Math.pow(1-u/i,3);let a=n.createBufferSource();a.buffer=s;let l=n.createGain();l.gain.value=e||.4;let c=n.createBiquadFilter();c.type="bandpass",c.frequency.value=t||1800,a.connect(c).connect(l).connect(n.destination),a.start()}var $n=null,Gl=null;function lt(r,e){$n||($n=document.createElement("div"),$n.id="sala-toast",document.body.appendChild($n)),$n.textContent="",$n.classList.add("visivel"),clearTimeout(Gl);let t=0,n=()=>{t<=r.length?($n.textContent=r.slice(0,t++),Gl=setTimeout(n,18)):Gl=setTimeout(()=>$n.classList.remove("visivel"),e||3200)};n()}function mi(r,e){let t=document.getElementById("computer-screen");t&&t.contentWindow&&t.contentWindow.postMessage(Object.assign({fonte:"sala3d"},r),"*"),e&&(typeof window.focusMonitorCamera=="function"?window.focusMonitorCamera():window.Application&&window.Application.camera.trigger("enterMonitor"))}function oh(){let r=new ve,e=pe("#a77b4f"),t=pe("#7a5634"),n=2300,i=n*1.5,s=de+1250,o=new Yr().load("textures/sala/cartaz.jpg");o.encoding=Ke,o.anisotropy=8;let a=new ve;a.rotation.x=-9*De,a.position.set(0,s,0);let l=it(n+90,i+90,40,t);l.position.set(0,i/2,-26),a.add(l);let c=new ee(new Xe(n,i),new Ue({map:o,color:new re("#e8e4dc")}));c.position.set(0,i/2,0),a.add(c);let u=it(n+260,70,160,e);u.position.set(0,-20,40),a.add(u),r.add(a);let d=f=>-(f-s)*Math.tan(9*De)-90,h=s+i*1.02;return r.add(Ye([-n/2-140,de,330],[-n/2+120,h,d(h)],36,e)),r.add(Ye([n/2+140,de,330],[n/2-120,h,d(h)],36,e)),r.add(Ye([0,de,-1300],[0,h-60,d(h)-40],30,e)),r.add(Ye([-n/2-60,de+800,200],[n/2+60,de+800,200],22,e)),r.add(Ut(3400,2e3,0,de,-300)),r}function ah(){let r=new ve,e=pe("#9c9c9c"),t=pe("#2b2b2b"),n=pe("#3a3a3a"),i=de+3350;for(let T=0;T<3;T++){let R=T*120*De+30*De,P=[Math.cos(R)*820,de,Math.sin(R)*820];r.add(Ye(P,[Math.cos(R)*90,i-520,Math.sin(R)*90],22,e));let W=$e(36,44,40,t,12);W.position.set(P[0],de+20,P[2]),r.add(W)}let s=$e(32,32,560,e,16);s.position.y=i-300,r.add(s);let o=it(220,120,220,t);o.position.y=i-40,r.add(o);let a=Ye([0,i-40,0],[-720,i-120,160],16,t);r.add(a),r.add(Ut(2200,2200,0,de,0));let l=new ve;l.position.y=i+220;let c=it(820,400,360,n);l.add(c);let u=at(512,256,(T,R,P)=>{T.fillStyle="#3a3a3a",T.fillRect(0,0,R,P),T.fillStyle="#c8c8c8",T.font="bold 54px Arial, sans-serif",T.fillText("MA-26",40,150),T.font="28px Arial, sans-serif",T.fillStyle="#e3b341",T.fillText("4K \xB7 CINEMA",44,195),T.fillStyle="#555",T.fillRect(330,60,140,130),T.fillStyle="#2a2a2a";for(let W=0;W<5;W++)T.fillRect(342,76+W*22,116,10)}),d=new ee(new Xe(700,340),pe("#ffffff",u));d.position.set(0,0,182),l.add(d);let h=$e(150,170,420,t,28);h.rotation.z=Math.PI/2,h.position.set(610,-10,0),l.add(h);let f=$e(178,178,60,pe("#c9a227"),28);f.rotation.z=Math.PI/2,f.position.set(520,-10,0),l.add(f);let m=new ee(new un(140,32),new Ue({color:new re("#1d2b4a")}));m.rotation.y=Math.PI/2,m.position.set(822,-10,0),l.add(m);let x=new ee(new un(40,16),new Ue({color:new re("#8fb3ff"),transparent:!0,opacity:.6}));x.rotation.y=Math.PI/2,x.position.set(824,40,-50),l.add(x);let y=new ee(new St(205,165,130,24,1,!0),new di({matcap:kl,color:new re("#2b2b2b"),side:Ft}));y.rotation.z=-Math.PI/2,y.position.set(880,-10,0),l.add(y);let g=it(600,60,90,t);g.position.set(-40,300,0),l.add(g),[-280,200].forEach(T=>{let R=it(50,110,70,t);R.position.set(T,240,0),l.add(R)});let p=$e(70,70,260,t,16);p.rotation.z=Math.PI/2,p.position.set(-520,120,-120),l.add(p);let w=it(20,200,300,t);w.position.set(-150,40,-300),w.rotation.y=-25*De,l.add(w);let _=new ee(new Xe(260,170),new Ue({color:new re("#3a6ea5")}));_.position.set(-150+Math.sin(-25*De)*12,40,-312),_.rotation.y=Math.PI-25*De,l.add(_);let S=new ee(new un(26,16),new Ue({color:new re("#ff2a2a")}));return S.position.set(330,140,182),l.add(S),l.rotation.x=0,r.add(l),{grupo:r,corpo:l,luzRec:S}}function lh(){let r=new ve,e=pe("#8f8f8f"),t=pe("#262626"),n=de+4300;for(let u=0;u<3;u++){let d=u*120*De;r.add(Ye([Math.cos(d)*620,de,Math.sin(d)*620],[0,de+900,0],18,e))}r.add(Ye([0,de+860,0],[0,n-200,0],26,e)),r.add(Ut(1600,1600,0,de,0));let i=new ve;i.position.y=n;let s=$e(560,170,700,t,4);s.rotation.set(Math.PI/2,Math.PI/4,0),i.add(s);let o=new ee(new Xe(800,800),t);o.position.z=349,i.add(o);let a=new ee(new Xe(690,690),new Ue({color:new re("#fbefd6")}));a.position.z=352,i.add(a);let l=at(256,256,(u,d)=>{let h=u.createRadialGradient(d/2,d/2,d*.1,d/2,d/2,d/2);h.addColorStop(0,"rgba(255,236,200,0.55)"),h.addColorStop(1,"rgba(255,236,200,0)"),u.fillStyle=h,u.fillRect(0,0,d,d)}),c=new ee(new Xe(1500,1500),new Ue({map:l,transparent:!0,blending:Nt,depthWrite:!1,opacity:.45}));return c.position.z=380,i.add(c),i.rotation.x=-18*De,r.add(i),{grupo:r,cabeca:i,brilho:c,difusor:a}}function ch(){let r=new ve,e=780,t=560,n=at(780,560,(h,f,m)=>{h.fillStyle="#1b1b1b",h.fillRect(0,0,f,m),h.strokeStyle="#e9e9e9",h.lineWidth=4,[140,260,380,470].forEach(y=>{h.beginPath(),h.moveTo(20,y),h.lineTo(f-20,y),h.stroke()}),h.beginPath(),h.moveTo(f/2,260),h.lineTo(f/2,470),h.stroke(),h.fillStyle="#e9e9e9",h.font="bold 26px Arial, sans-serif",h.fillText("PROD.",28,40),h.fillText("CENA",28,168),h.fillText("TAKE",f/2+12,168),h.fillText("DIRE\xC7\xC3O",28,290),h.fillText("C\xC2MERA",f/2+12,290),h.fillText("DATA",28,410),h.font='bold 64px "Comic Sans MS", "Marker Felt", cursive',h.fillText("PORTF\xD3LIO 2026",40,115),h.font='bold 72px "Comic Sans MS", "Marker Felt", cursive',h.fillText("26",110,245),h.fillText("1",f/2+140,245),h.font='bold 40px "Comic Sans MS", "Marker Felt", cursive',h.fillText("M. ANGELO",28,355),h.fillText("A",f/2+140,355),h.fillText(new Date().toLocaleDateString("pt-BR"),120,450),h.font="bold 22px Arial, sans-serif",h.fillText("MIGUEL ANGELO AUDIOVISUAL",28,530)}),i=at(512,64,(h,f,m)=>{h.fillStyle="#f2f2f2",h.fillRect(0,0,f,m),h.fillStyle="#111";for(let x=-m;x<f+m;x+=64)h.beginPath(),h.moveTo(x,m),h.lineTo(x+32,m),h.lineTo(x+32+m,0),h.lineTo(x+m,0),h.fill()}),s=pe("#1e1e1e"),o=new ee(new tt(e,26,t),[s,s,pe("#ffffff",n),s,s,s]);o.position.y=13,r.add(o);let a=pe("#ffffff",i),l=()=>new ee(new tt(e,30,96),[s,s,a,s,a,s]),c=l();c.position.set(0,15,-t/2-48),r.add(c);let u=new ve;u.position.set(-e/2,46,-t/2-48);let d=l();return d.position.set(e/2,0,0),u.add(d),u.rotation.y=24*De,r.add(u),r.add(Ut(e*1.4,t*1.6,0,0,-60)),{grupo:r,dobra:u}}function uh(){let r=new ve,e=[["SHOWREEL 2026","#e94e3c","MASTER \u2014 N\xC3O GRAVAR POR CIMA","iF5JU_N1ldc"],["O PESO DA AMARELINHA","#f2c200","DOCUMENT\xC1RIO \xB7 BRUTO","m7TOXgqO92s"],["BATTLEBITS","#3c8ce9","COMUNIDADE \xB7 VERS\xC3O FINAL","tFOAZsP0evQ"],["MAIOR POR DENTRO","#2f4fa8","N\xC3O ABRIR \xB7 VIAGENS",null]],t=[],n=pe("#262626");return e.forEach(([i,s,o,a],l)=>{let c=at(640,86,(h,f,m)=>{h.fillStyle="#f4f1ea",h.fillRect(0,0,f,m),h.fillStyle=s,h.fillRect(0,0,26,m),h.fillStyle="#222",h.font='bold 34px "Comic Sans MS", "Marker Felt", cursive',h.fillText(i,42,44),h.font="18px Arial, sans-serif",h.fillStyle="#666",h.fillText(o,44,74)}),u=at(320,180,(h,f,m)=>{h.fillStyle="#2a2a2a",h.fillRect(0,0,f,m),h.fillStyle="#f4f1ea",h.fillRect(30,30,f-60,70),h.fillStyle="#222",h.font='bold 24px "Comic Sans MS", cursive',h.fillText(i.slice(0,18),42,74),h.fillStyle="#111",h.fillRect(70,118,180,46),h.fillStyle="#3a3a3a",h.beginPath(),h.arc(115,141,18,0,Math.PI*2),h.fill(),h.beginPath(),h.arc(205,141,18,0,Math.PI*2),h.fill()}),d=new ee(new tt(640,86,350),[n,n,pe("#ffffff",u),n,pe("#ffffff",c),n]);d.position.set((l-1)*24,43+l*88,l%2*18),d.rotation.y=(l%3-1)*6*De,d.userData.fita={titulo:i,yt:a},t.push(d),r.add(d)}),r.add(Ut(950,600,0,0,0)),{grupo:r,fitas:t}}function hh(){let r=new ve,e=pe("#232323"),t=pe("#4a4a4a"),n=240,i=new ee(new _t(n,24,10,40,Math.PI),e);i.position.y=150,r.add(i);let s=new ee(new _t(n-26,20,8,30,Math.PI*.6),t);s.position.y=150,s.rotation.z=Math.PI*.2,r.add(s),[-1,1].forEach(a=>{let l=$e(125,125,80,e,28);l.rotation.z=Math.PI/2,l.position.set(a*(n+10),130,0),r.add(l);let c=new ee(new _t(92,34,10,28),t);c.rotation.y=Math.PI/2,c.position.set(a*(n-40),130,0),r.add(c);let u=new ee(new un(48,24),pe("#c9a227"));u.rotation.y=a*Math.PI/2,u.position.set(a*(n+52),130,0),r.add(u)});let o=new ee(new _t(160,10,6,40,Math.PI*1.4),e);return o.rotation.x=Math.PI/2,o.position.set(n+160,10,140),r.add(o),r.add(Ut(900,560,0,0,0)),r}function dh(){let r=new ve,e=at(256,256,(o,a)=>{let l=a/2;o.fillStyle="#8a8a8a",o.beginPath(),o.arc(l,l,l-2,0,Math.PI*2),o.fill(),o.strokeStyle="#555",o.lineWidth=6,o.beginPath(),o.arc(l,l,l-8,0,Math.PI*2),o.stroke(),o.fillStyle="#2a2a2a";for(let c=0;c<5;c++){let u=c*(Math.PI*2/5)-Math.PI/2;o.beginPath(),o.arc(l+Math.cos(u)*78,l+Math.sin(u)*78,30,0,Math.PI*2),o.fill()}o.fillStyle="#fff",o.fillRect(l-34,l-14,24,24),o.fillRect(l+10,l-14,24,24),o.fillStyle="#000",o.fillRect(l-24,l-6,12,14),o.fillRect(l+20,l-6,12,14),o.fillStyle="#d02020",o.fillRect(l-10,l+22,20,8)});e.center.set(.5,.5),e.rotation=Math.PI/2;let t=330,n=new ee(new St(t,t,60,40),[pe("#7a7a7a"),pe("#ffffff",e),pe("#ffffff",e)]);n.rotation.x=Math.PI/2,n.position.y=t,r.add(n);let i=at(512,64,(o,a,l)=>{o.fillStyle="#2b2116",o.fillRect(0,0,a,l),o.fillStyle="#d8d2c0";for(let c=6;c<a;c+=22)o.fillRect(c,5,10,8),o.fillRect(c,l-13,10,8);o.fillStyle="rgba(230,190,120,0.55)";for(let c=10;c<a;c+=70)o.fillRect(c,18,60,28)});i.wrapS=Er,i.repeat.set(3,1);let s=new ee(new Xe(1300,120),new Ue({map:i,side:Ft,color:new re("#cfcac0")}));return s.rotation.x=-Math.PI/2,s.rotation.z=18*De,s.position.set(640,3,260),r.add(s),r.add(Ut(900,500,0,0,40)),{grupo:r,disco:n}}function fh(){let r=new ve,e=12500,t=6400,n=1700,i=3800,s=pe("#4fa865",null,{polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),o=at(128,128,(f,m)=>{f.clearRect(0,0,m,m),f.strokeStyle="rgba(255,255,255,0.9)",f.lineWidth=12,f.beginPath(),f.moveTo(24,24),f.lineTo(104,104),f.moveTo(104,24),f.lineTo(24,104),f.stroke()}),a=new ee(new Xe(e,t),s);a.position.set(0,de+n+t/2,0),r.add(a);let l=new ee(new St(n,n,e,24,1,!0,Math.PI,Math.PI/2),s);l.material.side=Ft,l.rotation.z=Math.PI/2,l.position.set(0,de+n,n),r.add(l);let c=new ee(new Xe(e,i),s);c.rotation.x=-Math.PI/2,c.position.set(0,de+8,n+i/2),r.add(c);let u=[];for(let f=0;f<8;f++){let m=new ee(new Xe(260,260),new Ue({map:o,transparent:!0,depthWrite:!1}));m.position.set(-e*.38+f%4*e*.25,de+n+t*(f<4?.72:.36),3),r.add(m),u.push(m)}let d=pe("#9a9a9a");[-1,1].forEach(f=>{let m=f*(e/2+160);r.add(Ye([m,de,0],[m,de+n+t+400,0],34,d));for(let x=0;x<3;x++){let y=x*120*De;r.add(Ye([m+Math.cos(y)*700,de,Math.sin(y)*700],[m,de+900,0],18,d))}r.add(Wl(m+300,de,300,.4))}),r.add(Ye([-e/2-200,de+n+t+250,0],[e/2+200,de+n+t+250,0],30,d));let h=$e(150,150,e+200,pe("#3f8f55"),20);return h.rotation.z=Math.PI/2,h.position.set(0,de+n+t+120,40),r.add(h),{grupo:r,material:s,marcas:u}}function Wl(r,e,t,n){let i=new ve,s=pe("#b0602a");[-1,1].forEach(a=>{let l=it(380,150,260,s);l.position.set(a*210,75,0),l.rotation.z=a*.12,i.add(l)});let o=it(120,40,280,pe("#222"));return o.position.y=150,i.add(o),i.position.set(r,e,t),i.rotation.y=n||0,i.add(Ut(1e3,600,0,0,0)),i}function ph(){let r=new ve,e=pe("#8c8c8c"),t=pe("#2b2b2b"),n=de+5200;[0,1,2].forEach(m=>{let x=m*120*De+20*De,y=900-m*120;r.add(Ye([0,de+300+m*90,0],[Math.cos(x)*y,de+30,Math.sin(x)*y],20,e))}),r.add(Ye([0,de,0],[0,n-300,0],32,e)),r.add(Wl(500,de,300,.7)),r.add(Ut(1900,1900,0,de,0));let i=new ve;i.position.y=n;let s=it(40,600,40,t);s.position.set(-340,0,0);let o=s.clone();o.position.x=340,i.add(s,o);let a=it(720,40,40,t);a.position.y=-300,i.add(a);let l=new ve,c=$e(300,300,620,t,28);c.rotation.x=Math.PI/2,l.add(c);let u=$e(320,320,120,pe("#3a3a3a"),28);u.rotation.x=Math.PI/2,u.position.z=-220,l.add(u);let d=new ee(new un(270,32),new Ue({color:new re("#ffe2a8")}));d.position.z=312,l.add(d);for(let m=70;m<270;m+=50){let x=new ee(new _t(m,5,4,40),new Ue({color:new re("#f3cf8a")}));x.position.z=314,l.add(x)}let h=[];[[0,1],[0,-1],[1,0],[-1,0]].forEach(([m,x])=>{let y=x?620:540,g=new ve,p=it(y,330,10,t);p.position.set(0,165,0),g.add(p),g.position.set(m*300,x*300,330),g.rotation.z=m?-m*Math.PI/2:x<0?Math.PI:0,g.rotateX(-35*De),l.add(g),h.push(g)});let f=new ee(new Xe(1700,1700),new Ue({map:at(256,256,(m,x)=>{let y=m.createRadialGradient(x/2,x/2,x*.08,x/2,x/2,x/2);y.addColorStop(0,"rgba(255,214,150,0.6)"),y.addColorStop(1,"rgba(255,214,150,0)"),m.fillStyle=y,m.fillRect(0,0,x,x)}),transparent:!0,blending:Nt,depthWrite:!1,opacity:.4}));return f.position.z=340,l.add(f),l.rotation.x=16*De,i.add(l),r.add(i),{grupo:r,cabeca:i,lente:d,brilho:f}}function mh(){let r=new ve,e=pe("#8f8f8f"),t=pe("#252525"),n=de+6400;for(let h=0;h<3;h++){let f=h*120*De;r.add(Ye([Math.cos(f)*650,de,Math.sin(f)*650],[0,de+1e3,0],18,e))}r.add(Ye([0,de+950,0],[0,n,0],28,e)),r.add(Wl(-420,de,-260,-.5)),r.add(Ut(1500,1500,0,de,0));let i=new ve;i.position.y=n;let s=[5600,-900,0];i.add(Ye([-900,260,0],s,22,t));let o=$e(110,110,260,t,16);o.rotation.z=Math.PI/2,o.position.set(-950,270,0),i.add(o);let a=new ve;a.position.set(s[0],s[1]-120,0);let l=at(256,64,(h,f,m)=>{h.fillStyle="#6b6b6b",h.fillRect(0,0,f,m);for(let x=0;x<1600;x++){let y=70+Math.random()*90;h.fillStyle=`rgb(${y},${y},${y})`,h.fillRect(Math.random()*f,Math.random()*m,2,5)}}),c=new ee(new St(120,120,760,20),pe("#ffffff",l));c.rotation.z=Math.PI/2,c.rotation.y=-20*De,a.add(c);let u=$e(120,10,120,pe("#5e5e5e"),20);u.rotation.z=-Math.PI/2,u.position.x=430,a.add(u);let d=it(30,160,30,t);return d.position.y=120,a.add(d),i.add(a),r.add(i),{grupo:r,vara:i,mic:a}}function gh(){let r=new ve,e=pe("#7b5a3c"),t=at(512,160,(d,h,f)=>{d.fillStyle="#1f1f1f",d.fillRect(0,0,h,f),d.fillStyle="#e9d9a6",d.font="bold 58px Arial Black, Arial, sans-serif",d.textAlign="center",d.fillText("DIRETOR",h/2,76),d.font="bold 34px Arial, sans-serif",d.fillStyle="#c9a227",d.fillText("M. ANGELO",h/2,128)}),n=2e3,i=3650;[-1,1].forEach(d=>{let h=d*560;r.add(Ye([-560,de,h],[560,de+n-60,h],34,e)),r.add(Ye([560,de,h],[-560,de+n-60,h],34,e)),r.add(Ye([-560,de+n-60,h],[-560,de+i,h],30,e));let f=it(1150,50,90,e);f.position.set(0,de+n+520,h),r.add(f),r.add(Ye([520,de+n-60,h],[520,de+n+500,h],26,e))});let s=it(1100,30,1100,pe("#1f1f1f"));s.position.y=de+n,r.add(s);let o=new ee(new Xe(1100,360),pe("#ffffff",t,{side:Ft}));o.rotation.y=-Math.PI/2,o.position.set(-575,de+i-220,0),r.add(o),r.add(Ut(1800,1800,0,de,0));let a=at(64,512,(d,h,f)=>{let m=["#7a2e2e","#c99a3b","#5b6b3a","#8a5a2b","#3d5c6b","#a34d2f","#d8c08a","#6b3d5c"],x=0,y=0;for(;x<f;){let g=18+y*37%40;d.fillStyle=m[y%m.length],d.fillRect(0,x,h,g),x+=g,y++}}),l=[[-600,i+60,-420],[-640,i+90,0],[-600,i+60,420],[-420,i-600,560],[-200,n+300,640],[80,n-400,700],[260,700,760],[380,120,820],[700,30,1e3],[1100,30,900]],c=new ve,u=pe("#ffffff",a);for(let d=0;d<l.length-1;d++){let h=l[d],f=l[d+1],m=Ye([h[0],de+h[1],h[2]],[f[0],de+f[1],f[2]],55,u);m.scale.set(1,1,.35),c.add(m)}return c.add(Ye([-640,de+i+80,-420],[-900,de+i-900,-380],55,u)),r.add(c),{grupo:r,cachecol:c}}function xh(){let r=l=>(c,u,d)=>{c.fillStyle=l?"#c3121e":"#3a1214",c.fillRect(0,0,u,d),c.fillStyle=l?"#ffffff":"#6a3a3a",c.font="bold 92px Arial Black, Arial, sans-serif",c.textAlign="center",c.textBaseline="middle",c.fillText("\u25CF GRAVANDO",u/2,d/2+4)},e=new ve,t=it(1500,420,200,pe("#1c1c1c"));e.add(t);let n=at(720,200,r(!1)),i=at(720,200,r(!0)),s=new ee(new Xe(1380,340),new Ue({map:n}));s.position.z=102,e.add(s);let o=new ee(new Xe(2600,1300),new Ue({map:at(256,128,(l,c,u)=>{let d=l.createRadialGradient(c/2,u/2,10,c/2,u/2,c/2);d.addColorStop(0,"rgba(255,40,40,0.55)"),d.addColorStop(1,"rgba(255,40,40,0)"),l.fillStyle=d,l.fillRect(0,0,c,u)}),transparent:!0,blending:Nt,depthWrite:!1}));return o.position.z=110,o.visible=!1,e.add(o),{grupo:e,ligar:l=>{s.material.map=l?i:n,s.material.needsUpdate=!0,o.visible=l}}}function yh(){let r=new ve,e=pe("#c8a06a"),t=s=>at(256,128,(o,a,l)=>{o.fillStyle="#c8a06a",o.fillRect(0,0,a,l),o.strokeStyle="#8a6a3f",o.lineWidth=8,o.strokeRect(6,6,a-12,l-12),o.fillStyle="#3a2a18",o.font="bold 40px Arial Black, Arial, sans-serif",o.textAlign="center",o.fillText(s,a/2,70),o.beginPath(),o.ellipse(a/2,100,40,12,0,0,Math.PI*2),o.fillStyle="#2a1d10",o.fill()}),n=new ee(new tt(1700,680,1e3),[e,e,e,e,pe("#ffffff",t("FULL")),e]);n.position.y=de+340,r.add(n);let i=new ee(new tt(1700,340,1e3),[e,e,e,e,pe("#ffffff",t("HALF")),e]);return i.position.set(80,de+680+170,-30),i.rotation.y=9*De,r.add(i),r.add(Ut(2400,1700,0,de,0)),{grupo:r}}function vh(){let r=new ve,e=(o,a,l)=>new ee(new Xe(o,a),new Ue({color:new re(l)})),t=(o,a,l,c)=>{let u=new ve,d=e(700,110,l),h=e(110,520,l);return h.position.y=-300,u.add(d,h),u.rotation.x=-Math.PI/2,u.rotation.z=c,u.position.set(o,de+3,a),u};r.add(t(1e3,4400,"#f2c200",.2)),r.add(t(-1800,4100,"#3c8ce9",-.3));let n=new ve;[45,-45].forEach(o=>{let a=e(700,100,"#e9e9e9");a.rotation.z=o*De,n.add(a)}),n.rotation.x=-Math.PI/2,n.position.set(-4600,de+3,2300),r.add(n);let i=[[-7200,-2400],[-6400,-1400],[-5900,-300],[-4700,300],[-3700,200]],s=pe("#1a1a1a");for(let o=0;o<i.length-1;o++)if(r.add(Ye([i[o][0],de+14,i[o][1]],[i[o+1][0],de+14,i[o+1][1]],14,s)),o%2===0){let a=e(320,140,"#2b2b2b");a.rotation.x=-Math.PI/2,a.rotation.z=Math.atan2(i[o+1][1]-i[o][1],i[o+1][0]-i[o][0])+Math.PI/2,a.position.set((i[o][0]+i[o+1][0])/2,de+30,(i[o][1]+i[o+1][1])/2),r.add(a)}return{grupo:r}}function _h(){let r=new ve,e=$e(118,150,200,pe("#a3171d"),28);e.position.y=100,r.add(e);let t=new ee(new un(118,28),pe("#8f1419"));t.rotation.x=-Math.PI/2,t.position.y=201,r.add(t);let n=pe("#151515");r.add(Ye([0,205,0],[70,170,40],7,n)),r.add(Ye([70,170,40],[120,40,70],7,n));let i=$e(10,26,70,n,10);return i.position.set(122,20,72),r.add(i),r.rotation.z=-8*De,{grupo:r}}function wh(){let r=new ve,e=pe("#7a1f3d");[-1,1].forEach(n=>{let i=$e(70,20,190,e,4);i.rotation.set(0,Math.PI/4,n*Math.PI/2),i.position.set(n*100,40,0),i.scale.set(1,1,.45),r.add(i)});let t=it(60,70,50,pe("#5e1730"));return t.position.y=40,r.add(t),r.add(Ut(520,260,0,0,0,0,.6)),{grupo:r}}function bh(){let r=s=>(o,a,l)=>{o.fillStyle="#ffe873",o.fillRect(0,0,a,l),o.fillStyle="rgba(0,0,0,0.06)",o.fillRect(0,0,a,34),o.fillStyle="#2a2a6a",o.font='bold 54px "Comic Sans MS", "Marker Felt", cursive',o.textAlign="center",s.split(`
`).forEach((c,u)=>o.fillText(c,a/2,110+u*70))},e=at(256,256,r(`N\xC3O
PISQUE.`)),t=at(256,256,r(`VOC\xCA
PISCOU.`)),n=new ee(new Xe(230,230),new Ue({map:e,color:new re("#eeeeee")}));return n.rotation.z=6*De,{grupo:n,trocar:s=>{n.material.map=s?t:e,n.material.needsUpdate=!0}}}var Qr=[];window.__salaItens=Qr;var Rh=[],Ch=!1,Mh=new wo,Sh=new Q,Rn=null,ql=null;document.addEventListener("loadingScreenDone",()=>{setTimeout(()=>{Ch=!0},600)});function xt(r,e,t){r.traverse(n=>{n.userData.idInterativo===void 0&&(n.userData.idInterativo=Qr.length)}),Qr.push({raiz:r,nome:e,acao:t})}function Eh(r){if(!Ch||!r||!r.camera)return!1;let e=r.camera.currentKeyframe,t=r.camera.targetKeyframe;return!(e==="monitor"||t==="monitor"||e==="loading"||e==="phone"||t==="phone"||document.body.classList.contains("p3d-in-phone"))}function Xl(r,e,t){Sh.set(e/window.innerWidth*2-1,-(t/window.innerHeight)*2+1),Mh.setFromCamera(Sh,r.camera.instance);let n=Qr.map(a=>a.raiz).concat(Rh),i=a=>{for(let l=a;l;l=l.parent)if(!l.visible)return!1;return!0},s=Mh.intersectObjects(n,!0).filter(a=>i(a.object)&&!a.object.userData.sombra&&!a.object.userData.semClique);if(!s.length)return null;let o=s[0].object.userData.idInterativo;return o===void 0?null:Qr[o]}function Th(r,e,t){if(Rn||(Rn=document.createElement("div"),Rn.id="sala-dica",document.body.appendChild(Rn)),!r){Rn.classList.remove("visivel"),document.body.classList.remove("sala-hover");return}Rn.textContent=r.nome,Rn.style.left=e+16+"px",Rn.style.top=t+14+"px",Rn.classList.add("visivel"),document.body.classList.add("sala-hover")}var sr=null;function Ah(){sr||(sr=document.createElement("div"),sr.id="prevent-click",sr.style.display="none",document.body.appendChild(sr)),["mousedown","mouseup"].forEach(r=>sr.dispatchEvent(new MouseEvent(r,{bubbles:!0})))}function Lh(r){r.scene.traverse(n=>{n.isMesh&&n.name&&n.name!=="Background"&&!n.name.startsWith("sala")&&Rh.push(n)}),window.__salaAcertar=(n,i)=>{let s=Xl(r,n,i);return s?s.nome:null};let e=null;window.addEventListener("mousemove",n=>{e||(e=requestAnimationFrame(()=>{if(e=null,!Eh(r)||n.target&&n.target.id==="computer-screen"){Th(null),ql=null;return}ql=Xl(r,n.clientX,n.clientY),Th(ql,n.clientX,n.clientY)}))},!0);let t=(n,i,s)=>{if(!Eh(r)||s.target&&s.target.id==="prevent-click"||s.target&&(s.target.id==="computer-screen"||s.target.closest&&s.target.closest("button, a, #ui-interactive")))return;let o=Xl(r,n,i);if(!o){window.__salaModoGaveta&&(s.stopImmediatePropagation(),Ah());return}s.stopImmediatePropagation(),s.cancelable&&s.preventDefault(),Ah();try{o.acao()}catch(a){console.warn("[sala] a\xE7\xE3o falhou",a)}};window.addEventListener("mousedown",n=>{n.button===0&&t(n.clientX,n.clientY,n)},!0),window.addEventListener("touchstart",n=>{let i=n.touches[0];i&&t(i.clientX,i.clientY,n)},{capture:!0,passive:!1})}var gi=1445,es=82,Ph=[{nome:"de cima",x0:-3112,x1:-1586,y0:-1074,y1:-619},{nome:"de baixo",x0:-3112,x1:-1586,y0:-1615,y1:-1161}],Kn=1250,px=1100;function Ih(){let r=new ve,e=pe("#1d1d1d"),t=pe("#e8731d"),n=pe("#b9bcc0"),i=pe("#6f7378"),s=$e(42,42,300,e,20);s.rotation.z=Math.PI/2,s.position.x=0,r.add(s),[-110,-10,90].forEach(p=>{let w=$e(46,46,22,t,20);w.rotation.z=Math.PI/2,w.position.x=p,r.add(w)});let o=$e(36,44,50,i,20);o.rotation.z=Math.PI/2,o.position.x=-175,r.add(o);let a=new ee(new _t(26,6,6,16),n);a.position.x=-212,r.add(a);let l=$e(52,52,40,i,20);l.rotation.z=Math.PI/2,l.position.x=170,r.add(l);let c=$e(32,32,170,n,6);c.rotation.z=Math.PI/2,c.position.x=275,r.add(c);let u=$e(46,32,50,i,6);u.rotation.z=Math.PI/2,u.position.x=385,r.add(u);let d=new Ue({color:new re("#58e08a")}),h=new ve,f=new ee(new St(0,34,70,8),d);f.rotation.z=-Math.PI/2,f.position.x=445;let m=new ee(new St(34,0,26,8),d);m.rotation.z=-Math.PI/2,m.position.x=397,h.add(f,m),r.add(h);let x=new ee(new Xe(320,320),new Ue({map:at(128,128,(p,w)=>{let _=p.createRadialGradient(w/2,w/2,2,w/2,w/2,w/2);_.addColorStop(0,"rgba(140,255,180,0.9)"),_.addColorStop(1,"rgba(140,255,180,0)"),p.fillStyle=_,p.fillRect(0,0,w,w)}),transparent:!0,blending:Nt,depthWrite:!1,opacity:.35}));x.position.x=440,x.userData.semClique=!0,x.userData.billboard=!0,r.add(x);let y=it(34,18,24,pe("#d0201f"));y.position.set(60,44,0),r.add(y);let g=Vl(120,34,256,72,(p,w,_)=>{p.fillStyle="#1d1d1d",p.fillRect(0,0,w,_),p.fillStyle="#e8731d",p.font="bold 44px Arial Black, Arial, sans-serif",p.fillText("MA-26",18,54)});return g.rotation.x=-Math.PI/2,g.position.set(-60,43,0),r.add(g),{grupo:r,cristal:d,brilho:x,pontaX:470}}function Dh(){let r=new ve,e=pe("#2a2a2e"),t=pe("#2f4a6b"),n=it(210,150,120,e);n.position.set(-40,-70,0),r.add(n);for(let a=0;a<4;a++){let l=new ee(new _t(64,26,8,14,Math.PI*1.25),e);l.rotation.set(0,Math.PI/2,Math.PI*.75),l.position.set(-100+a*58,0,0),r.add(l)}let i=Ye([-130,40,70],[60,70,40],26,e);r.add(i);let s=Ye([-80,-120,0],[-520,-700,160],95,t);r.add(s);let o=$e(100,100,60,pe("#1c2f45"),16);return o.position.set(-110,-160,15),o.rotation.z=.9,r.add(o),{grupo:r}}function mx(r){let e=new ve,t=Vl(380,260,256,176,(a,l,c)=>{a.fillStyle="#2b2b2b",a.fillRect(0,0,l,c),a.fillStyle="#f4f1ea",a.fillRect(20,40,l-40,90),a.fillStyle="#222",a.font='bold 26px "Comic Sans MS", cursive',a.fillText("HD EXTERNO",34,76),a.font='20px "Comic Sans MS", cursive',a.fillText("backup do backup",34,108)}),n=it(380,70,260,pe("#2b2b2b"));n.position.set(-420,35,120),e.add(n),t.rotation.x=-Math.PI/2,t.position.set(-420,72,120),e.add(t),t.userData.piada='HD externo: "backup do backup". O backup do backup do backup est\xE1 na nuvem. Provavelmente.',n.userData.piada=t.userData.piada;let i=new ee(new _t(90,38,10,24),pe("#8a8f96"));i.rotation.x=Math.PI/2,i.position.set(430,38,220),i.userData.piada="Fita gaffer. Conserta tudo no set. Menos prazo.",e.add(i);let s=new ve,o=pe("#151515");for(let a=0;a<6;a++){let l=new ee(new _t(70+a*9,9,6,20),o);l.rotation.set(Math.PI/2+a%3*.4,a*.6,0),l.position.set(420+a%2*40,30,-180+a*10),s.add(l)}s.userData.piada="Um emaranhado de cabos. Ningu\xE9m sabe de qual aparelho \xE9 cada um. Ningu\xE9m joga fora.",s.traverse(a=>{a.userData.piada=s.userData.piada}),e.add(s);for(let a=0;a<3;a++){let l=it(90,8,70,pe(["#1f5fbf","#d0201f","#e8b800"][a]));l.position.set(-120+a*40,4+a*8,-260+a*12),l.rotation.y=a*.3,l.userData.piada="Cart\xF5es de mem\xF3ria. Um deles tem aquela grava\xE7\xE3o que voc\xEA jura que apagou.",e.add(l)}return e}function gx(){let r=new ve,e=new ve,t=pe("#f2c200"),n=$e(90,110,120,t,16);n.position.y=60,n.scale.set(1.3,1,1),e.add(n);let i=$e(60,66,90,t,16);i.position.set(60,160,0),e.add(i);let s=it(60,22,50,pe("#e8731d"));s.position.set(120,160,0),e.add(s),e.position.set(-300,0,60),e.rotation.y=.6,e.traverse(o=>{o.userData.piada="Patinho de borracha. Explicar o roteiro pra ele resolve 90% dos problemas."}),r.add(e);for(let o=0;o<4;o++){let a=$e(150,150,10,pe(["#d8d8d8","#c0c8d8","#d8c8c0","#e0e0e0"][o]),28);a.position.set(250,6+o*12,-60+o*8),a.userData.piada='DVDs: "projetos 2019 \u2014 N\xC3O ABRIR". Algumas coisas devem ficar no passado.',r.add(a)}return r}function xx(r,e){let t=r.index,n=r.attributes.position.count,i=new Map,s=[];for(let o=0;o<t.count;o+=3){let a=[t.getX(o),t.getX(o+1),t.getX(o+2)],l=a.map(e);l.every(Boolean)||!l.some(Boolean)||a.forEach((c,u)=>{l[u]&&(i.has(c)||(i.set(c,n+s.length),s.push(c)),t.setX(o+u,i.get(c)))})}return s.length&&(Object.keys(r.attributes).forEach(o=>{let a=r.attributes[o],l=new a.array.constructor((n+s.length)*a.itemSize);l.set(a.array),s.forEach((c,u)=>{for(let d=0;d<a.itemSize;d++)l[(n+u)*a.itemSize+d]=a.array[c*a.itemSize+d]}),r.setAttribute(o,new a.constructor(l,a.itemSize,a.normalized))}),t.array.length&&n+s.length>65535&&t.array instanceof Uint16Array&&r.setIndex(Array.from(t.array)),t.needsUpdate=!0),n}function Fh(r,e){let t=null;if(r.scene.traverse(l=>{l.name==="desk"&&(t=l)}),!t)return[];t.updateMatrixWorld(!0);{let l=t.geometry.attributes.position,c=new b,u=d=>(c.set(l.getX(d),l.getY(d),l.getZ(d)).applyMatrix4(t.matrixWorld),c.z>=gi-es-8&&Ph.some(h=>c.x>=h.x0-6&&c.x<=h.x1+6&&c.y>=h.y0-6&&c.y<=h.y1+6));t.userData.copiasDescoladas=xx(t.geometry,u)}let n=t.geometry.attributes.position,i=new Me().copy(t.matrixWorld).invert(),s=new b,o=new b(0,0,0).applyMatrix4(i),a=new b(0,0,1).applyMatrix4(i).sub(o);return Ph.map((l,c)=>{let u=[],d=[],h=n.count;for(let v=0;v<h&&!(t.userData.copiasDescoladas&&v>=t.userData.copiasDescoladas);v++)s.set(n.getX(v),n.getY(v),n.getZ(v)).applyMatrix4(t.matrixWorld),s.z>=gi-es-8&&s.x>=l.x0-6&&s.x<=l.x1+6&&s.y>=l.y0-6&&s.y<=l.y1+6&&(u.push(v),d.push([n.getX(v),n.getY(v),n.getZ(v)]));let f=l.x1-l.x0,m=l.y1-l.y0,x=(l.x0+l.x1)/2,y=new ve,g=pe("#4a4540"),p=it(f-80,20,Kn,g);p.position.set(0,l.y0+40,-Kn/2),y.add(p),[-1,1].forEach(v=>{let C=it(24,m-90,Kn,g);C.position.set(v*(f/2-52),l.y0+40+(m-90)/2,-Kn/2),y.add(C)});let w=it(f-80,m-90,24,g);w.position.set(0,l.y0+40+(m-90)/2,-Kn+12),y.add(w);let _=c===0?mx():gx();_.position.set(0,l.y0+50,-Kn/2),y.add(_),y.position.set(x,0,gi-es-2),y.visible=!1,e.add(y);let S=new ee(new tt(f-10,m-10,Kn+60),new Ue({color:new re("#141210"),side:mt}));S.position.set(x,(l.y0+l.y1)/2,gi-es-Kn/2+20),S.visible=!1,S.userData.semClique=!0,e.add(S);let T=new ee(new tt(f,m,190),new Ue({transparent:!0,opacity:0,depthWrite:!1,colorWrite:!1}));T.position.set(x,(l.y0+l.y1)/2,gi-82+95),e.add(T);let R=0,P=0,W=()=>{let v=R*px;for(let C=0;C<u.length;C++){let I=d[C];n.setXYZ(u[C],I[0]+a.x*v,I[1]+a.y*v,I[2]+a.z*v)}n.needsUpdate=!0,y.position.z=gi-es-2+v,T.position.z=gi-82+95+v,y.visible=R>.001,S.visible=R>.001};return{def:l,alvo:T,bandeja:y,tralhas:_,atualizar:v=>{if(R===P)return;let C=v*2.2;R=P>R?Math.min(P,R+C):Math.max(P,R-C),W()},estaAberta:()=>P===1,alternar:()=>(P=P?0:1,P===1),fechar:()=>{P=0},encontrados:u.length}})}var yx=`
#gaveta-ui{position:fixed;left:50%;bottom:26px;transform:translateX(-50%) translateY(30px);z-index:9400;display:flex;gap:10px;
  align-items:center;opacity:0;pointer-events:none;transition:opacity .35s,transform .35s;font:600 14px system-ui,sans-serif}
body.gaveta-closeup #gaveta-ui{opacity:1;transform:translateX(-50%);pointer-events:auto}
#gaveta-ui .g-dica{background:rgba(10,10,14,.78);color:#f3ead2;padding:9px 14px;border-radius:10px;border:1px solid rgba(255,255,255,.15);
  backdrop-filter:blur(4px);max-width:62vw}
#gaveta-ui button{background:#f3ead2;color:#111;border:0;border-radius:10px;padding:10px 16px;font:700 14px system-ui,sans-serif;cursor:pointer;
  box-shadow:0 3px 0 #9c8f6c}
#gaveta-ui button:active{transform:translateY(2px);box-shadow:0 1px 0 #9c8f6c}
body.gaveta-closeup #btn-focus-monitor,body.gaveta-closeup #btn-leave-monitor{display:none!important}
#gaveta-vinheta{position:fixed;inset:0;pointer-events:none;z-index:9300;opacity:0;transition:opacity .6s;
  background:radial-gradient(ellipse at center,transparent 50%,rgba(0,0,0,.5) 100%)}
body.gaveta-closeup #gaveta-vinheta{opacity:1}
`,vx=r=>r<=0?0:r>=1?1:r*r*(3-2*r),ts=null;function _x(r){if(ts)return ts;let e=document.createElement("style");e.textContent=yx,document.head.appendChild(e);let t=document.createElement("div");t.id="gaveta-ui",t.innerHTML='<span class="g-dica"></span><button type="button">\u27F5 Voltar</button>';let n=document.createElement("div");return n.id="gaveta-vinheta",document.body.append(n,t),["mousedown","touchstart","pointerdown"].forEach(i=>t.addEventListener(i,s=>s.stopPropagation())),ts={box:t,dica:t.querySelector(".g-dica"),botao:t.querySelector("button")},ts.botao.addEventListener("click",i=>{i.stopPropagation(),r()}),ts}function zh(r){let e=r.camera,t=e.instance,n=null,i={x:0,y:0};window.addEventListener("mousemove",l=>{i.x=l.clientX/window.innerWidth*2-1,i.y=l.clientY/window.innerHeight*2-1});function s(l=!0){if(!n)return;let c=n;n=null,window.__salaModoGaveta=!1,document.body.classList.remove("gaveta-closeup"),e.update=c.updateOriginal,e.position.copy(t.position),e.focalPoint.copy(c.foc),e.currentKeyframe=void 0,l&&(e.transition("idle",1600),c.gaveta&&c.gaveta.fechar())}let o=_x(()=>s(!0));window.addEventListener("keydown",l=>{l.key==="Escape"&&n&&s(!0)});function a(l,c){if(n){n.gaveta=l,o.dica.textContent=c;return}let u=l.def,d=(u.x0+u.x1)/2,h=new b(d-40,u.y0+60,1840),f=new b(d+120,u.y0+1500,3150),m=t.position.clone(),x=e.focalPoint?e.focalPoint.clone():new b(0,0,0),y=new b,g=new b,p=performance.now();n={updateOriginal:e.update,gaveta:l,foc:y},window.__salaModoGaveta=!0,document.body.classList.add("gaveta-closeup"),o.dica.textContent=c,e.currentKeyframe="gaveta",e.targetKeyframe=void 0,e.update=function(){let w=(performance.now()-p)/1e3,_=vx(w/1.3);g.lerpVectors(m,f,_),y.lerpVectors(x,h,_);let S=i.x*220*_,T=-i.y*140*_;t.position.set(g.x+S+Math.sin(w*.9)*6,g.y+T+Math.sin(w*1.4)*5,g.z),t.lookAt(y.x+S*.35,y.y,y.z),t.updateMatrixWorld(!0)}}return{entrar:a,sair:s,ativo:()=>!!n}}var wx=`
#cine-bloqueio{position:fixed;inset:0;z-index:9500;cursor:none}
.cine-faixa{position:fixed;left:0;right:0;height:0;background:#000;z-index:9600;transition:height .7s cubic-bezier(.6,0,.2,1)}
.cine-faixa.cima{top:0}.cine-faixa.baixo{bottom:0}
body.cine-ativo .cine-faixa{height:11vh}
#cine-legenda{position:fixed;left:50%;bottom:calc(11vh + 18px);transform:translateX(-50%);z-index:9700;color:#fff6d8;
  font:italic 22px Georgia,'Times New Roman',serif;text-shadow:0 2px 4px #000,0 0 2px #000;opacity:0;transition:opacity .4s;
  white-space:nowrap;pointer-events:none}
#cine-legenda.visivel{opacity:1}
#cine-flash{position:fixed;inset:0;background:#eaffef;z-index:9550;opacity:0;pointer-events:none;transition:opacity .5s}
#cine-flash.on{opacity:.85;transition:none}
#cine-vinheta{position:fixed;inset:0;z-index:9540;pointer-events:none;opacity:0;transition:opacity .8s;
  background:radial-gradient(ellipse at center,transparent 55%,rgba(0,0,0,.55) 100%)}
body.cine-ativo #cine-vinheta{opacity:1}
`,or=r=>r<=0?0:r>=1?1:r*r*(3-2*r),bx=(r,e,t)=>r+(e-r)*t,Yl=!1,ar=null;function Bh(){if(ar)return ar;let r=document.createElement("style");r.textContent=wx,document.head.appendChild(r);let e=document.createElement("div");e.className="cine-faixa cima";let t=document.createElement("div");t.className="cine-faixa baixo";let n=document.createElement("div");n.id="cine-legenda";let i=document.createElement("div");i.id="cine-flash";let s=document.createElement("div");return s.id="cine-vinheta",document.body.append(s,i,e,t,n),ar={legenda:n,flash:i},ar}function Ro(r){let{legenda:e}=Bh();if(!r){e.classList.remove("visivel");return}e.textContent=r,e.classList.add("visivel")}function Mx(r){let e=window.AudioContext||window.webkitAudioContext;if(!e)return;let t=window.__salaAudio||(window.__salaAudio=new e);t.state==="suspended"&&t.resume();let n=t.currentTime,i=t.createOscillator(),s=t.createOscillator(),o=t.createGain(),a=t.createGain(),l=t.createBiquadFilter();i.type="sawtooth",i.frequency.setValueAtTime(520,n),i.frequency.exponentialRampToValueAtTime(1500,n+r),s.frequency.value=28,o.gain.value=60,s.connect(o).connect(i.frequency),l.type="bandpass",l.frequency.value=1400,l.Q.value=.8,a.gain.setValueAtTime(1e-4,n),a.gain.exponentialRampToValueAtTime(.09,n+.15),a.gain.setValueAtTime(.09,n+r-.2),a.gain.exponentialRampToValueAtTime(1e-4,n+r),i.connect(l).connect(a).connect(t.destination),i.start(n),s.start(n),i.stop(n+r+.05),s.stop(n+r+.05)}function Nh(r,e,t,n,i){if(Yl)return;Yl=!0,Bh();let s=r.camera,o=s.instance,a=document.createElement("div");a.id="cine-bloqueio",document.body.appendChild(a),document.body.classList.add("cine-ativo"),jn(.5,.35,700);let l=o.position.clone(),c=s.focalPoint.clone(),u=new b(0,950,300),d=new b(260,1020,3300),h=new b(140,990,2650),f=new b,m=new b,x=e.grupo;x.updateMatrixWorld(!0);let y=new b().setFromMatrixPosition(x.matrixWorld),g=new vt;x.getWorldQuaternion(g);let p=x.parent,w=x.position.clone(),_=x.rotation.clone();n.attach(x),n.add(t.grupo),t.grupo.visible=!1;let S=new Ue({color:new re("#7dffab"),transparent:!0,opacity:0,blending:Nt,depthWrite:!1}),T=new ee(new St(6,26,1,10,1,!0),S);T.userData.semClique=!0,n.add(T);let R=[];for(let j=0;j<4;j++){let xe=new ee(new Yn(40,58,40),new Ue({color:new re("#9dffc0"),transparent:!0,opacity:0,blending:Nt,depthWrite:!1,side:Ft}));xe.position.copy(u).setZ(390),xe.userData.semClique=!0,n.add(xe),R.push(xe)}let P=new b(300,-255,-760),W=new b(420,-900,-760),U=new b,v=new b,C=new vt,I=new Me,F=new b(0,1,0),z=.85,D=s.update.bind(s),V=performance.now(),K=!1,me=!1,H={legenda1:!1,legenda2:!1,flash:!1,fim:!1};function Y(j){return U.copy(j).applyMatrix4(o.matrixWorld)}s.currentKeyframe="cinema",s.update=function(){let j=(performance.now()-V)/1e3;if(j<1.8){let ie=or(j/1.8);f.lerpVectors(l,d,ie),m.lerpVectors(c,u,ie)}else if(j<3.2)f.copy(d),m.copy(u);else if(j<5.4){let ie=or((j-3.2)/2.2);f.lerpVectors(d,h,ie),m.copy(u)}else f.copy(h),m.copy(u);let xe=Math.sin(j*2.1)*6,G=j>3.2&&j<5.6?(j-3.2)*9:0;o.position.set(f.x+Math.sin(j*1.3)*8+(Math.random()-.5)*G,f.y+xe+(Math.random()-.5)*G,f.z),o.lookAt(m.x+(Math.random()-.5)*G*.5,m.y+(Math.random()-.5)*G*.5,m.z),o.updateMatrixWorld(!0);let Oe=P;j>5.9&&(v.lerpVectors(P,W,or((j-5.9)/.8)),Oe=v);let ye=Y(Oe),Te=j>2.6?or((j-2.6)/.6):0,fe=v.copy(u).lerp(new b().copy(m).add(new b(500,-400,0)),1-Te);if(I.lookAt(ye,fe,F),C.setFromRotationMatrix(I),C.multiply(new vt().setFromAxisAngle(F,Math.PI/2)),j<1.4){let ie=or(j/1.4);x.position.lerpVectors(y,ye,ie),x.quaternion.copy(g).slerp(C,ie)}else x.position.copy(ye),x.quaternion.copy(C);if(x.scale.setScalar(j<1.4?bx(1,z,or(j/1.4)):z),t.grupo.visible=j>.9&&j<6.8,t.grupo.position.copy(x.position),t.grupo.quaternion.copy(x.quaternion),t.grupo.scale.setScalar(z),e.brilho.quaternion.copy(o.quaternion),e.brilho.material.opacity=j>3.2&&j<5.4?.9+Math.random()*.1:.35,e.brilho.scale.setScalar(j>3.2&&j<5.4?1.8+Math.sin(j*40)*.2:1),j>3.2&&j<5.4){let ie=new b(e.pontaX*z,0,0).applyQuaternion(x.quaternion).add(x.position),N=new b(u.x,u.y,380),J=ie.clone().add(N).multiplyScalar(.5),te=ie.distanceTo(N);T.position.copy(J),T.scale.set(1,te,1),T.lookAt(N),T.rotateX(Math.PI/2),S.opacity=.25+Math.random()*.25,R.forEach((ue,le)=>{let Se=(j*1.6+le/R.length)%1;ue.scale.setScalar(1+Se*9),ue.material.opacity=(1-Se)*.6})}else S.opacity=0,R.forEach(ie=>{ie.material.opacity=0});!H.legenda1&&j>1.6&&(H.legenda1=!0,Ro("\u2014 Deixa que eu resolvo isso.")),!me&&j>3.2&&(me=!0,Ro(""),Mx(2.2)),!K&&j>3.9&&(K=!0,mi({acao:"sonico"})),!H.flash&&j>5.3&&(H.flash=!0,ar.flash.classList.add("on"),requestAnimationFrame(()=>requestAnimationFrame(()=>ar.flash.classList.remove("on"))),jn(.6,.8,300)),!H.legenda2&&j>5.9&&(H.legenda2=!0,Ro("\u2014 ...opa.")),!H.fim&&j>7&&(H.fim=!0,se())};function se(){Ro(""),document.body.classList.remove("cine-ativo"),a.remove(),t.grupo.visible=!1,n.remove(T),R.forEach(j=>n.remove(j)),x.scale.setScalar(1),p.add(x),x.position.copy(w),x.rotation.copy(_),e.brilho.scale.setScalar(1),e.brilho.quaternion.identity(),e.brilho.rotation.x=-Math.PI/2,e.brilho.material.opacity=.35,s.position.copy(o.position),s.focalPoint.copy(u),s.currentKeyframe=void 0,s.update=D,s.transition("idle",2600),An([[392,.1],[330,.1],[262,.3]],"triangle",.06),setTimeout(()=>lt("Multiferramenta S\xF4nica MA-26: funcionou perfeitamente. O computador \xE9 que n\xE3o aguentou. \u{1F605}",4500),600),Yl=!1,i&&i()}}var rt={ciano:"#4de1ff",amarelo:"#ffd23f",rosa:"#ff4fa3",verde:"#5dffb0",laranja:"#ff8a3d",roxo:"#a98bff"},fn=[rt.amarelo,rt.rosa,rt.ciano,rt.verde,rt.laranja,rt.roxo],Co=r=>r<=0?0:r>=1?1:r*r*(3-2*r);function yt(r,e=.55,t){return new Ue(Object.assign({color:new re(r),transparent:!0,opacity:e,blending:Nt,depthWrite:!1,side:ai},t))}function lr(r,e,t=.9){return new ci(new so(r),new Tn({color:new re(e),transparent:!0,opacity:t,blending:Nt,depthWrite:!1}))}function Lo(r,e,t){let n=document.createElement("canvas");n.width=r,n.height=e,t(n.getContext("2d"),r,e);let i=new ui(n);return i.userData.canvas=n,i}function Uh(r,e,t){r.fillStyle="rgba(0,0,0,0.28)";for(let n=0;n<t;n+=4)r.fillRect(0,n,e,2)}function Sx(r,e,t,n,i,s,o){let a=String(e).split(" "),l="",c=0;for(let u=0;u<a.length;u++){let d=l?l+" "+a[u]:a[u];if(r.measureText(d).width>i&&l){if(r.fillText(l,t,n+c*s),l=a[u],++c>=o-1){l=a.slice(u).join(" ");break}}else l=d}if(l){for(;r.measureText(l).width>i&&l.length>3;)l=l.slice(0,-4)+"\u2026";r.fillText(l,t,n+c*s)}}var ns='"Press Start 2P", "Courier New", monospace';function Ex(){let r=new ve,e=new ee(new Yn(120,132,48),yt(rt.ciano,.7));e.position.z=6,r.add(e);let t=new ee(new Yn(60,66,6),yt(rt.amarelo,.7));t.position.z=7,r.add(t);let n=Lo(8,128,(s,o,a)=>{let l=s.createLinearGradient(0,0,0,a);l.addColorStop(0,"rgba(255,255,255,0)"),l.addColorStop(1,"rgba(255,255,255,0.9)"),s.fillStyle=l,s.fillRect(0,0,o,a)}),i=new ee(new St(260,110,300,40,1,!0),yt(rt.ciano,.16,{map:n}));return i.rotation.x=Math.PI/2,i.position.z=150,r.add(i),{grupo:r,anel:e,anel2:t,cone:i}}function Tx(r){let e=r&&r.itens||[],t=new ve,n=Math.max(e.length,1),i=Math.max(300,n*62),s=Math.PI*2/n,o=e.map((d,h)=>{let f=Lo(512,320,(g,p,w)=>Oh(g,p,w,d,null)),m=new ee(new Xe(250,156),yt("#ffffff",.9,{map:f})),x=lr(new Xe(250,156),fn[h%fn.length],1);m.add(x);let y=h*s;if(m.position.set(Math.sin(y)*i,0,Math.cos(y)*i),m.rotation.y=y,t.add(m),d.yt){let g=new Image;g.crossOrigin="anonymous",g.onload=()=>{Oh(f.userData.canvas.getContext("2d"),512,320,d,g),f.needsUpdate=!0},g.src="https://i.ytimg.com/vi/"+d.yt+"/mqdefault.jpg"}return{p:m,borda:x}}),a=new ee(new Yn(i-6,i+6,64),yt(rt.amarelo,.5,{side:Ft}));a.rotation.x=-Math.PI/2,a.position.y=-100,t.add(a);let l=new ve;l.add(t),l.position.set(0,20,60-i+520);let c=-(r&&r.i||0)*s,u=c;return{grupo:l,animar(d){c+=(u-c)*.12,t.rotation.y=c,o.forEach((h,f)=>{let m=f*s+c,x=(Math.cos(m)+1)/2;h.p.material.opacity=.25+x*.75,h.p.scale.setScalar(.8+x*.35),h.borda.material.opacity=.3+x*.7+Math.sin(d*6+f)*.1,h.p.position.y=Math.sin(d*1.5+f)*10})},girar(d){u+=d*.006},ir(d){let h=-d*s,f=Math.round((u-h)/(Math.PI*2));u=h+f*Math.PI*2}}}function Oh(r,e,t,n,i){r.clearRect(0,0,e,t),r.fillStyle="rgba(10,30,60,0.55)",r.fillRect(0,0,e,t),i?(r.globalAlpha=.85,r.drawImage(i,0,0,e,t*.72),r.globalAlpha=1):(r.fillStyle="rgba(77,225,255,0.18)",r.fillRect(0,0,e,t*.72),r.fillStyle=rt.ciano,r.beginPath(),r.moveTo(e/2-26,t*.36-32),r.lineTo(e/2+34,t*.36),r.lineTo(e/2-26,t*.36+32),r.closePath(),r.fill()),r.fillStyle="rgba(0,0,0,0.6)",r.fillRect(0,t*.72,e,t*.28),r.fillStyle=rt.amarelo,r.font="14px "+ns,r.fillText(String(n.categoria||"V\xCDDEO").toUpperCase(),16,t*.72+28),r.fillStyle="#ffffff",r.font="bold 30px Arial, sans-serif",Sx(r,n.titulo||"",16,t*.72+66,e-32,32,1),Uh(r,e,t)}function Ax(r){let e=r&&r.itens||[],t=new ve,n=46,i=380,s=e.map((a,l)=>{let c=fn[l%fn.length],u=((e.length-1)/2-l)*(n+22),d=lr(new tt(i,n,30),c,.35);d.position.set(0,u,0),t.add(d);let h=new ee(new tt(i,n-10,24),yt(c,.55));h.position.set(-i/2,u,0),h.geometry.translate(i/2,0,0),h.scale.x=.001,t.add(h);let f=Lo(512,64,(x,y,g)=>{x.fillStyle="#ffffff",x.font="26px "+ns,x.fillText(String(a.nome).toUpperCase().slice(0,20),8,42),x.textAlign="right",x.fillStyle=c,x.fillText(Math.round(a.nivel)+"%",y-8,42)}),m=new ee(new Xe(i,48),yt("#ffffff",.95,{map:f}));return m.position.set(0,u+n/2+14,16),t.add(m),{barra:h,nivel:Math.max(.05,Math.min(1,a.nivel/100)),atraso:l*.15}});t.position.set(0,0,260);let o=null;return{grupo:t,animar(a){o===null&&(o=a),s.forEach(l=>{l.barra.scale.x=Math.max(.001,l.nivel*Co((a-o-.5-l.atraso)/1.1))}),t.rotation.y=Math.sin(a*.6)*.22,t.rotation.x=Math.sin(a*.45)*.06}}}function Rx(r){let e=r||{},t=new ve,n=Lo(640,360,(l,c,u)=>{l.fillStyle="rgba(8,24,48,0.5)",l.fillRect(0,0,c,u),l.strokeStyle=rt.ciano,l.lineWidth=6,l.strokeRect(10,10,c-20,u-20),l.fillStyle=rt.amarelo,[[18,18],[c-48,18],[18,u-48],[c-48,u-48]].forEach(([d,h])=>l.fillRect(d,h,30,30)),l.fillStyle="#ffffff",l.font="34px "+ns,l.fillText(String(e.nome||"").toUpperCase().slice(0,16),50,120),l.fillStyle=rt.amarelo,l.font="18px "+ns,l.fillText(String(e.cargo||"").toUpperCase(),50,168),l.fillStyle=rt.ciano,l.font='bold 28px "Courier New", monospace',l.fillText(e.email||"",50,250),l.fillStyle=rt.rosa,l.font="16px "+ns,l.fillText("PRESS START \u25B6 CONTRATAR",50,310),Uh(l,c,u)}),i=new ee(new Xe(330,186),yt("#ffffff",.95,{map:n}));t.add(i);let s=lr(new tt(330,186,10),rt.ciano,.8);t.add(s),t.position.set(0,30,280);let o=0,a=.6;return{grupo:t,animar(l,c){o+=a*c,a+=(.6-a)*.02,t.rotation.y=Math.sin(o)*.55,t.rotation.x=Math.sin(l*.8)*.08,t.position.y=30+Math.sin(l*1.3)*14,t.position.z=280,i.material.opacity=.85+(Math.random()<.04?-.5:0)},girar(l){a+=l*.02}}}function Cx(){let r=new ve,e=lr(new uo(130,1),rt.ciano,.85);r.add(e);let t=new ee(new Xr(62,24,16),yt(rt.ciano,.35));r.add(t);let n=new ee(new Xr(22,16,12),yt("#ffffff",.9));n.position.z=70,r.add(n);let i=[0,1,2].map(l=>{let c=new ee(new _t(170+l*26,2.5,6,80),yt([rt.amarelo,rt.rosa,rt.ciano][l],.7));return c.rotation.set(Math.PI/2+l*.5,l*.7,0),r.add(c),c}),s=[];for(let l=0;l<26;l++){let c=new ee(new tt(9,9,9),yt(fn[l%fn.length],.8));c.userData.a=Math.random()*Math.PI*2,c.userData.r=200+Math.random()*160,c.userData.v=.3+Math.random()*.9,c.userData.y=(Math.random()-.5)*300,r.add(c),s.push(c)}r.position.set(0,40,320);let o=0,a=0;return{grupo:r,animar(l,c){o+=(a-o)*.25;let u=1+o*(.25+Math.sin(l*28)*.12);e.rotation.y=l*.5,e.rotation.x=l*.3,e.scale.setScalar(u),t.scale.setScalar(.9+Math.sin(l*2)*.08+o*.4),n.position.x=Math.sin(l*.7)*18,i.forEach((d,h)=>{d.rotation.z+=c*(.4+h*.3)*(1+o*3)}),s.forEach(d=>{d.userData.a+=c*d.userData.v*(1+o*2),d.position.set(Math.cos(d.userData.a)*d.userData.r,d.userData.y+Math.sin(l+d.userData.a)*20,Math.sin(d.userData.a)*d.userData.r*.6),d.rotation.x+=c*2})},falar(l){a=Math.max(0,Math.min(1,l))}}}function Lx(){let r=new ve,e=new ve,t=120,n=new ee(new St(t,t,30,32),yt(rt.ciano,.18));n.rotation.x=Math.PI/2,e.add(n);let i=lr(new St(t,t,30,16),rt.ciano,.9);i.rotation.x=Math.PI/2,e.add(i);for(let a=0;a<5;a++){let l=a*(Math.PI*2/5)-Math.PI/2,c=new ee(new _t(22,3,6,18),yt(rt.amarelo,.9));c.position.set(Math.cos(l)*66,Math.sin(l)*66,17),e.add(c)}[-26,26].forEach(a=>{let l=new ee(new tt(18,22,6),yt("#ffffff",.8));l.position.set(a,8,20),e.add(l)});let s=new ee(new tt(30,8,6),yt(rt.rosa,.95));s.position.set(0,-26,20),e.add(s),r.add(e);let o=[-1,1].map(a=>{let l=new ve,c=new ee(new tt(10,80,10),yt(rt.ciano,.7));c.position.y=-40,l.add(c);let u=new ee(new tt(56,24,34),yt("#ff3b3b",.6));return u.position.set(14,-88,0),l.add(u),l.add(lr(new tt(56,24,34),"#ffffff",.6).translateX(14).translateY(-88)),l.position.set(a*44,-t+10,0),r.add(l),l});return r.position.set(0,0,300),{grupo:r,animar(a){let l=Math.abs(Math.sin(a*5))*40;e.position.y=40+l,e.rotation.z=Math.sin(a*5)*.25,o[0].rotation.x=Math.sin(a*10)*.6,o[1].rotation.x=-Math.sin(a*10)*.6,o.forEach(c=>{c.position.y=-t+10+40+l*.6}),r.rotation.y=Math.sin(a*1.2)*.8,r.position.x=Math.sin(a*.9)*90}}}function Px(){let r=new ve,e=[];for(let t=0;t<140;t++){let n=8+Math.random()*12,i=new ee(new tt(n,n,n),yt(fn[t%fn.length],.75));i.position.set((Math.random()-.5)*200,(Math.random()-.5)*300,10),i.userData.v=new b((Math.random()-.5)*900,(Math.random()-.2)*900,300+Math.random()*900),r.add(i),e.push(i)}return{grupo:r,duracao:3.2,animar(t,n){e.forEach(i=>{i.userData.v.y-=900*n,i.position.addScaledVector(i.userData.v,n),i.rotation.x+=n*5,i.rotation.y+=n*3})}}}function Ix(r){let e=r&&r.itens||[],t=new ve,n=e.slice(0,5).map((s,o)=>{let a=fn[o%fn.length],l=90+o*48,c=new ee(new _t(l,4,6,90),yt(a,.15)),u=new ee(new _t(l,12,6,90,.001),yt(a,.45));return t.add(c,u),{arco:u,raio:l,nivel:Math.min(1,(s.nivel||0)/100),atraso:o*.12}});t.position.set(0,30,320);let i=null;return{grupo:t,animar(s){i===null&&(i=s),n.forEach((o,a)=>{let l=o.nivel*Co((s-i-.4-o.atraso)/1.2);o.arco.geometry.dispose(),o.arco.geometry=new _t(o.raio,12,6,90,Math.max(.001,l*Math.PI*2)),o.arco.rotation.z=Math.PI/2+Math.sin(s*.5+a)*.1}),t.rotation.x=Math.sin(s*.5)*.35,t.rotation.y=Math.sin(s*.4)*.35}}}var Jl={carrossel:Tx,barras:Ax,cartao:Rx,orbe:Cx,rolinho:Lx,confete:Px,aneis:Ix};function Hh(r){let e=null,t=1,n=1,i={t:0,ultimo:performance.now()};function s(){return window.__p3dCelular}function o(){return document.querySelector('iframe[src*="android"]')}function a(h){if(!e)return;let f=e;if(h){r.scene.remove(f.raiz),c(f.raiz),e=null;return}f.saindo=i.t,e=null,l.push(f)}let l=[];function c(h){h.traverse(f=>{f.geometry&&f.geometry.dispose(),f.material&&[].concat(f.material).forEach(m=>{m.map&&m.map.dispose(),m.dispose()})})}function u(h,f){let m=s();if(!m||!Jl[h])return!1;a(!1);let x=Jl[h](f),y=new ve;y.position.copy(m.css.position),y.quaternion.copy(m.css.quaternion);let g=Ex();y.add(g.grupo);let p=new ve;return p.add(x.grupo),y.add(p),y.traverse(w=>{w.userData.semClique=!0,w.renderOrder=10,w.frustumCulled=!1}),r.scene.add(y),e={holo:x,raiz:y,corpo:p,em:g,t0:i.t,tipo:h},n=h==="confete"?1.15:1.45,!0}function d(){requestAnimationFrame(d);let h=performance.now(),f=Math.min(.05,(h-i.ultimo)/1e3);i.ultimo=h,i.t+=f;let m=i.t;if(e||(n=1),t+=(n-t)*Math.min(1,f*3),window.__p3dZoom=t,e){let x=e,y=Co((m-x.t0)/.8);x.corpo.scale.set(.2+.8*y,.2+.8*y,.05+.95*y),x.corpo.position.z=-40*(1-y),x.em.cone.material.opacity=.16*y+Math.random()*.03,x.em.anel.rotation.z=m*1.5,x.em.anel2.rotation.z=-m*2.5,x.holo.animar(m-x.t0,f),x.holo.duracao&&m-x.t0>x.holo.duracao&&a(!1)}for(let x=l.length-1;x>=0;x--){let y=l[x],g=1-Co((m-y.saindo)/.45);y.corpo.scale.set(g,g,g*.6+.01),y.raiz.traverse(p=>{p.material&&p.material.opacity!==void 0&&p.userData.op0===void 0&&(p.userData.op0=p.material.opacity)}),y.raiz.traverse(p=>{p.material&&p.userData.op0!==void 0&&(p.material.opacity=p.userData.op0*g)}),y.holo.animar(m-y.t0,f),g<=0&&(r.scene.remove(y.raiz),c(y.raiz),l.splice(x,1))}}requestAnimationFrame(d),window.addEventListener("message",h=>{let f=h.data;if(!f||f.fonte!=="holofone")return;let m=o();if(!m||h.source!==m.contentWindow)return;let x=y=>{try{m.contentWindow.postMessage(Object.assign({fonte:"sala3d"},y),"*")}catch(g){}};f.acao==="holo-ping"?x({acao:"holo-pong",tipos:Object.keys(Jl)}):f.acao==="holo"?x({acao:"holo-estado",ativo:u(String(f.tipo),f.dados),tipo:f.tipo}):f.acao==="holo-off"?(a(!1),x({acao:"holo-estado",ativo:!1})):e&&f.acao==="holo-girar"&&e.holo.girar?e.holo.girar(+f.dx||0):e&&f.acao==="holo-ir"&&e.holo.ir?e.holo.ir(+f.i||0):e&&f.acao==="holo-fala"&&e.holo.falar&&e.holo.falar(+f.nivel||0)}),window.__holofone={ligar:u,desligar:a,ativo:()=>e?e.tipo:null}}var Dx=`
#sala-toast{position:fixed;left:50%;bottom:110px;transform:translateX(-50%) translateY(10px);background:#000;color:#fff;
  font:15px/1.4 monospace;padding:6px 16px;opacity:0;transition:opacity .2s,transform .2s;pointer-events:none;z-index:9999;
  max-width:min(92vw,640px);text-align:center;white-space:pre-wrap}
#sala-toast.visivel{opacity:1;transform:translateX(-50%) translateY(0)}
#sala-dica{position:fixed;background:#000;color:#fff;font:12px monospace;padding:3px 8px;pointer-events:none;z-index:9999;
  opacity:0;transition:opacity .12s;white-space:nowrap}
#sala-dica.visivel{opacity:1}
body.sala-hover #css,body.sala-hover{cursor:pointer!important}
#sala-visor{position:fixed;inset:0;pointer-events:none;z-index:9000;font:bold 15px monospace;color:#fff;
  text-shadow:0 0 3px #000;display:none}
#sala-visor.ligado{display:block}
#sala-visor .canto{position:absolute;width:46px;height:46px;border:3px solid rgba(255,255,255,.85)}
#sala-visor .c1{top:28px;left:28px;border-right:0;border-bottom:0}
#sala-visor .c2{top:28px;right:28px;border-left:0;border-bottom:0}
#sala-visor .c3{bottom:28px;left:28px;border-right:0;border-top:0}
#sala-visor .c4{bottom:28px;right:28px;border-left:0;border-top:0}
#sala-visor .rec{position:absolute;top:44px;left:90px;color:#ff3030}
#sala-visor .rec i{animation:salaPisca 1s steps(1) infinite;font-style:normal}
#sala-visor .tc{position:absolute;top:44px;right:90px}
#sala-visor .info{position:absolute;bottom:44px;left:90px}
#sala-visor .bat{position:absolute;bottom:44px;right:90px}
#sala-visor .mira{position:absolute;left:50%;top:50%;width:40px;height:40px;margin:-20px 0 0 -20px}
#sala-visor .mira:before,#sala-visor .mira:after{content:'';position:absolute;background:rgba(255,255,255,.8)}
#sala-visor .mira:before{left:19px;top:0;width:2px;height:40px}
#sala-visor .mira:after{top:19px;left:0;height:2px;width:40px}
#sala-visor .tercos{position:absolute;inset:0;background:
  linear-gradient(90deg,transparent calc(33.3% - 1px),rgba(255,255,255,.18) 33.3%,transparent calc(33.3% + 1px),transparent calc(66.6% - 1px),rgba(255,255,255,.18) 66.6%,transparent calc(66.6% + 1px)),
  linear-gradient(transparent calc(33.3% - 1px),rgba(255,255,255,.18) 33.3%,transparent calc(33.3% + 1px),transparent calc(66.6% - 1px),rgba(255,255,255,.18) 66.6%,transparent calc(66.6% + 1px))}
#sala-piscada{position:fixed;inset:0;background:#000;z-index:99999;pointer-events:none;opacity:0}
#sala-piscada.on{opacity:1}
@keyframes salaPisca{50%{opacity:0}}
`,Qn=null,Cn=!1,Gh=0,Zl=26;function Fx(r){Qn||(Qn=document.createElement("div"),Qn.id="sala-visor",Qn.innerHTML=`<div class="tercos"></div><div class="canto c1"></div><div class="canto c2"></div>
            <div class="canto c3"></div><div class="canto c4"></div><div class="rec"><i>\u25CF</i> REC</div>
            <div class="tc">00:00:00:00</div><div class="info">4K \xB7 23.976p \xB7 ISO 800 \xB7 f/2.8</div>
            <div class="bat">\u25AE\u25AE\u25AE\u25AF 74%</div><div class="mira"></div>`,document.body.appendChild(Qn)),Qn.classList.toggle("ligado",r)}function zx(){if(!Cn||!Qn)return;let r=(performance.now()-Gh)/1e3,e=t=>String(Math.floor(t)).padStart(2,"0");Qn.querySelector(".tc").textContent=`${e(r/3600)}:${e(r/60%60)}:${e(r%60)}:${e(r%1*24)}`}function Bx(r){let e=document.createElement("style");e.textContent=Dx,document.head.appendChild(e);let t=new ve;t.name="sala-extra";let n=[],i=fh();i.grupo.position.set(-600,0,-9200),i.grupo.rotation.y=18*De,t.add(i.grupo);let s=xh();s.grupo.position.set(-4300,de+1700+6400*.78,140),i.grupo.add(s.grupo);let o=oh();o.position.set(-2900,0,-3300),o.rotation.y=28*De,t.add(o);let a=ah();a.grupo.position.set(-5600,0,800),a.corpo.rotation.y=-Math.atan2(1600,6300),t.add(a.grupo);let l=lh();l.grupo.position.set(4400,0,-3300),l.cabeca.rotation.y=-50*De,t.add(l.grupo);let c=ch();c.grupo.position.set(-1640,-126,-150),c.grupo.rotation.y=16*De,t.add(c.grupo);let u=uh();u.grupo.position.set(-3020,Ao,1180),u.grupo.rotation.y=22*De,t.add(u.grupo);let d=hh();d.position.set(1760,Ao,1330),d.rotation.y=-24*De,t.add(d);let h=dh();h.grupo.position.set(-3900,de,2e3),h.grupo.rotation.y=-35*De,t.add(h.grupo);let f=ph();f.grupo.position.set(-7600,0,-2600),f.cabeca.rotation.y=70*De,t.add(f.grupo);let m=mh();m.grupo.position.set(2400,0,-4200),m.vara.rotation.y=-112*De,t.add(m.grupo);let x=gh();x.grupo.position.set(4700,0,2900),x.grupo.rotation.y=53*De,t.add(x.grupo);let y=yh();y.grupo.position.set(-6500,0,2900),y.grupo.rotation.y=30*De,y.grupo.scale.setScalar(.75),y.grupo.position.y=de*.25,t.add(y.grupo),t.add(vh().grupo);let g=_h();g.grupo.position.set(430,1606,-160),g.grupo.rotation.y=30*De,t.add(g.grupo);let p=wh();p.grupo.position.set(-1270,Ao,1430),p.grupo.rotation.y=-20*De,t.add(p.grupo);let w=bh();w.grupo.position.set(470,-230,752),t.add(w.grupo),r.scene.add(t);let _=(ne,ie,N,J)=>{let te=ne.position.y,ue=ne.rotation.y,le=performance.now(),Se=()=>{let Ae=Math.min(1,(performance.now()-le)/N);ne.position.y=te+Math.sin(Ae*Math.PI)*ie,J&&(ne.rotation.y=ue+J*Ae),Ae<1?requestAnimationFrame(Se):(ne.position.y=te,J&&(ne.rotation.y=ue+J))};requestAnimationFrame(Se)},S=!1;xt(c.grupo,"\u{1F3AC} Claquete",()=>{if(S)return;S=!0,Zl++;let ne=performance.now(),ie=24*De,N=()=>{let J=performance.now()-ne;if(J<90)c.dobra.rotation.y=ie*(1-J/90);else if(J<600)c.dobra.rotation.y=0;else if(J<900)c.dobra.rotation.y=ie*((J-600)/300);else{c.dobra.rotation.y=ie,S=!1;return}requestAnimationFrame(N)};requestAnimationFrame(N),setTimeout(()=>jn(.14,.9,2400),85),lt(`CENA 26 \xB7 TAKE ${Zl} \u2014 A\xC7\xC3O! \u{1F3AC}`)});let T=ne=>{Cn=ne?!1:!Cn,Fx(Cn),s.ligar(Cn),Cn?(Gh=performance.now(),An([[880,.08],[0,.05],[880,.08]],"sine",.06),lt("\u25CF Gravando! Clique de novo na c\xE2mera para cortar.")):(An([[660,.12]],"sine",.06),lt(`Corta! Take salvo: take_${String(Zl).padStart(3,"0")}.mov`))};xt(a.grupo,"\u{1F3A5} C\xE2mera \u2014 gravar",()=>T(!1)),xt(s.grupo,"\u{1F534} Placa GRAVANDO",()=>T(!1));let R=!0,P=new Map,W=ne=>{ne&&ne.color&&!P.has(ne)&&P.set(ne,ne.color.clone())},U=[l.brilho,f.brilho],v=()=>{R=!R,r.scene.traverse(ne=>{if(!ne.isMesh||ne.userData.semEscurecer||!(ne.parent&&(ne.parent===t||Nx(ne,t)))&&!ne.name)return;(Array.isArray(ne.material)?ne.material:[ne.material]).forEach(J=>{if(W(J),!P.has(J))return;let te=P.get(J);R?J.color.copy(te):J.color.copy(te).multiplyScalar(.28)})}),U.forEach(ne=>{ne.visible=R}),jn(.05,.5,900),lt(R?"\u{1F4A1} Luzes do set acesas!":"\u{1F319} Luzes apagadas. Clima de sala de cinema. \u{1F37F}")};[l.brilho,f.brilho,l.difusor,f.lente,h.disco].forEach(ne=>{ne.userData.semEscurecer=!0}),l.brilho.userData.semClique=!0,f.brilho.userData.semClique=!0,xt(l.grupo,"\u{1F4A1} Softbox \u2014 liga/desliga",v),xt(f.grupo,"\u{1F4A1} Refletor Fresnel \u2014 liga/desliga",v),xt(o,"\u{1F39E}\uFE0F Cartaz \u2014 assistir ao Showreel",()=>{lt("Abrindo o Showreel no computador... \u{1F37F}"),mi({acao:"videos"},!0)}),u.fitas.forEach(ne=>{let{titulo:ie,yt:N}=ne.userData.fita;xt(ne,"\u{1F4FC} "+ie,()=>{N?(lt(`\u{1F4FC} Colocando "${ie}" no videocassete...`),jn(.4,.25,600),mi({acao:"video",yt:N},!0)):(lt("\u{1F4FC} Essa fita parece... maior por dentro. \u{1F914}"),mi({acao:"maiorpordentro"},!0))})}),xt(d,"\u{1F3A7} Fone de edi\xE7\xE3o",()=>{An([[523,.12],[659,.12],[784,.12],[1047,.25],[784,.12],[1047,.35]],"triangle",.07),_(d,40,500,0),lt("\u{1F3A7} Mixagem aprovada: -14 LUFS, sem estourar.")});let C=0;xt(h.grupo,"\u{1F39E}\uFE0F Rolinho",()=>{_(h.grupo,260,600,Math.PI*2),An([[988,.07],[1319,.22]]),performance.now()-C>8e3?(C=performance.now(),mi({acao:"ficha"}),lt("+1 FICHA pro fliperama do computador! \u{1FA99}")):lt("Ei, calma! Uma ficha de cada vez. \u{1F635}\u200D\u{1F4AB}")});let I=0;xt(m.grupo,"\u{1F399}\uFE0F Boom \u2014 teste de som",()=>{I=1,An([[1e3,.35]],"sine",.04),lt("Testando... 1, 2, 3. Som OK! \u{1F399}\uFE0F")}),n.push((ne,ie)=>{I>0&&(I=Math.max(0,I-ie*.6),m.mic.rotation.z=Math.sin(ne*9)*.25*I)}),xt(x.grupo,"\u{1F3AC} Cadeira do diretor",()=>{Cn?T(!0):lt("CORTA! \u{1F3AC} ...brincadeira, pode continuar explorando.")}),xt(x.cachecol,"\u{1F9E3} Cachecol",()=>lt("Um cachecol de uns 4 metros, todo listrado. Totalmente normal para um editor.",4200)),xt(y.grupo,"\u{1F4E6} Apple box",()=>lt("Apple box. Procurei bem e nenhuma ma\xE7\xE3 foi encontrada. \u{1F34E}\u274C"));let F=[["#4fa865","verde"],["#3d6fd1","azul"],["#8a8f96","cinza (sem chroma)"]],z=0;xt(i.grupo,"\u{1F7E9} Fundo chroma key",()=>{z=(z+1)%F.length,i.material.color.set(F[z][0]),P.has(i.material)&&P.set(i.material,i.material.color.clone()),R||i.material.color.multiplyScalar(.28),lt(`Fundo: ${F[z][1]}. (Verde ou azul? Depende da roupa do ator.)`)}),xt(g.grupo,"\u{1F3A9} Fez",()=>{_(g.grupo,420,700,Math.PI*2),lt("Uso um fez agora. Fez \xE9 estiloso.")}),xt(p.grupo,"\u{1F380} Gravata-borboleta",()=>lt("Gravatas-borboleta s\xE3o legais."));let D=null;xt(w.grupo,"\u{1F4DD} Bilhete",()=>{D||(D=document.createElement("div"),D.id="sala-piscada",document.body.appendChild(D)),D.classList.add("on"),setTimeout(()=>{D.classList.remove("on"),w.trocar(!0),lt("...voc\xEA piscou? \u{1F440}"),setTimeout(()=>w.trocar(!1),5e3)},140)});let V=Fh(r,t),K=Ih(),me=Dh(),H=zh(r);if(window.__salaCloseup=H,V.length){let ne=V[0];K.grupo.position.set(-60,ne.def.y0+112,-640),K.grupo.rotation.set(0,.35,0),K.brilho.rotation.x=-Math.PI/2,ne.bandeja.add(K.grupo),V.forEach(N=>{xt(N.alvo,"\u{1F5C4}\uFE0F Gaveta "+N.def.nome,()=>{let J=N.alternar();if(jn(.25,.25,500),!J){H.sair(!0);return}V.forEach(te=>{te!==N&&te.fechar()}),H.entrar(N,N===ne?"Tem algo brilhando ali no fundo... clique para pegar. Os outros objetos tamb\xE9m respondem.":'O cemit\xE9rio de coisas "que um dia vou usar". Clique nos objetos.'),N===ne?lt("Hm... tem algo brilhando l\xE1 dentro. \u{1F440}"):lt('Gaveta de baixo: o cemit\xE9rio de coisas "que um dia vou usar".')}),N.tralhas.traverse(J=>{J.isMesh&&J.userData.piada&&J.userData.idInterativo===void 0&&xt(J,"\u{1F50E} "+J.userData.piada.split(/[:.]/)[0],()=>lt(J.userData.piada,4200))})}),n.push((N,J)=>V.forEach(te=>te.atualizar(J)));let ie=!1;xt(K.grupo,"\u2728 Multiferramenta S\xF4nica MA-26 \u2014 pegar",()=>{ie||!ne.estaAberta()||(ie=!0,Cn&&T(!0),H.sair(!1),Nh(r,K,me,t,()=>{ie=!1,setTimeout(()=>ne.fechar(),2500)}))}),n.push(N=>{ie||(K.brilho.material.opacity=.25+Math.sin(N*3)*.12)})}Lh(r),Hh(r);let Y=["arrowup","arrowup","arrowdown","arrowdown","arrowleft","arrowright","arrowleft","arrowright","b","a"],se=0,j=0;window.addEventListener("keydown",ne=>{let ie=(ne.key||"").toLowerCase();se=ie===Y[se]?se+1:ie===Y[0]?1:0,se===Y.length&&(se=0,j=performance.now()+1e4,lt("\u{1F389} MODO FESTA NO SET! \u{1F389}"),An([[523,.1],[659,.1],[784,.1],[1047,.1],[784,.1],[1047,.3]]))});let xe=new re,G=l.difusor.material.color.clone(),Oe=f.lente.material.color.clone(),ye=performance.now(),Te=ye;function fe(){let ne=performance.now(),ie=(ne-ye)/1e3,N=Math.min(.05,(ne-Te)/1e3);Te=ne,a.luzRec.visible=Cn?Math.floor(ie*3)%2===0:Math.floor(ie*1.2)%2===0,h.disco.rotation.z=Math.sin(ie*1.6)*.05,R&&(l.brilho.material.opacity=.42+Math.sin(ie*2.3)*.04,ne<j?(xe.setHSL(ie*.7%1,1,.6),l.difusor.material.color.copy(xe),f.lente.material.color.setHSL((ie*.7+.5)%1,1,.6),i.material.color.setHSL(ie*.25%1,.6,.45)):j&&(j=0,l.difusor.material.color.copy(G),f.lente.material.color.copy(Oe),i.material.color.set(F[z][0]))),n.forEach(J=>J(ie,N)),zx(),requestAnimationFrame(fe)}requestAnimationFrame(fe),window.salaExtra=t}function Nx(r,e){let t=r.parent;for(;t;){if(t===e)return!0;t=t.parent}return!1}function kh(){let r=window.Application,e=!1;r&&r.scene&&r.scene.traverse(t=>{t.name==="desk"&&(e=!0)}),e?Bx(r):setTimeout(kh,300)}kh();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2022 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
