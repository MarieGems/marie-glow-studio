(()=>{var Do="187";var Uo=0,yr=1,Fo=2;var Ri=1,gs=2,pi=3,mi=0,Ne=1,tn=2,Wn=0,Ci=1,Sr=2,Mr=3,br=4,Oo=5;var gi=100,Bo=101,zo=102,Go=103,ko=104,Ho=200,Wo=201,Vo=202,Xo=203,qo=204,Yo=205,Zo=206,Jo=207,$o=208,Ko=209,Qo=210,jo=211,tl=212,el=213,nl=214,il=0,sl=1,rl=2,Er=3,al=4,ol=5,ll=6,cl=7,hl=0,ul=1,dl=2,en=0,Tr=1,Ar=2,wr=3,Rr=4,Cr=5,Ir=6,Pr=7;var Ii=301,_i=302,_s=303,xs=304,fl=1000,vs=1001,pl=1002,In=1003,ml=1004;var Pi=1005;var Ge=1006,ys=1007;var Pn=1008;var $e=1009,gl=1010,_l=1011,Li=1012,Lr=1013,Ln=1014,gn=1015,nn=1016,Nr=1017,Dr=1018,Vn=1020,xl=35902,vl=35899,yl=1021,Sl=1022,_n=1023,xi=1026,Nn=1027,Ml=1028,Ur=1029,Xn=1030,Fr=1031;var Or=1033,Ss=33776,Ms=33777,bs=33778,Es=33779,Br=35840,zr=35841,Gr=35842,kr=35843,Hr=36196,Wr=37492,Vr=37496,Xr=37488,qr=37489,Ts=37490,Yr=37491,Zr=37808,Jr=37809,$r=37810,Kr=37811,Qr=37812,jr=37813,ta=37814,ea=37815,na=37816,ia=37817,sa=37818,ra=37819,aa=37820,oa=37821,la=36492,ca=36494,ha=36495,ua=36283,da=36284,As=36285,fa=36286;var pa=0,bl=1,qn="",ws="srgb",ma="srgb-linear",ga="linear",jt="srgb";var El=512,Tl=513,Al=514,_a=515,wl=516,Rl=517,xa=518,va=519;var ya="300 es",Sa=2000;function Pc(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Lc(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function wi(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Cl(){let t=wi("canvas");return t.style.display="block",t}var ho={},fi=null;function Ma(...t){let e="THREE."+t.shift();if(fi)fi("log",e,...t);else console.log(e,...t)}function Il(t){let e=t[0];if(typeof e==="string"&&e.startsWith("TSL:")){let n=t[1];if(n&&n.isStackTrace)t[0]+=" "+n.getLocation();else t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function It(...t){t=Il(t);let e="THREE."+t.shift();if(fi)fi("warn",e,...t);else{let n=t[0];if(n&&n.isStackTrace)console.warn(n.getError(e));else console.warn(e,...t)}}function Pt(...t){t=Il(t);let e="THREE."+t.shift();if(fi)fi("error",e,...t);else{let n=t[0];if(n&&n.isStackTrace)console.error(n.getError(e));else console.error(e,...t)}}function Ai(...t){let e=t.join(" ");if(e in ho)return;ho[e]=!0,It(...t)}function Pl(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}var Ll={[0]:0,[2]:6,[4]:4,[3]:5,[1]:1,[6]:2,[7]:7,[5]:3};class xn{addEventListener(t,e){if(this._listeners===void 0)this._listeners={};let n=this._listeners;if(n[t]===void 0)n[t]=[];if(n[t].indexOf(e)===-1)n[t].push(e)}hasEventListener(t,e){let n=this._listeners;if(n===void 0)return!1;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let s=i.indexOf(e);if(s!==-1)i.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,t);t.target=null}}}var Ee=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Qs=Math.PI/180,ms=180/Math.PI;function Ni(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ee[t&255]+Ee[t>>8&255]+Ee[t>>16&255]+Ee[t>>24&255]+"-"+Ee[e&255]+Ee[e>>8&255]+"-"+Ee[e>>16&15|64]+Ee[e>>24&255]+"-"+Ee[n&63|128]+Ee[n>>8&255]+"-"+Ee[n>>16&255]+Ee[n>>24&255]+Ee[i&255]+Ee[i>>8&255]+Ee[i>>16&255]+Ee[i>>24&255]).toLowerCase()}function Vt(t,e,n){return Math.max(e,Math.min(n,t))}function Nc(t,e){return(t%e+e)%e}function js(t,e,n){return(1-n)*t+n*e}function Nl(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function ba(t){switch(t.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Dc(t,e){if(e.constructor===Float32Array)return t;let n=ba(e);if(n===void 0)throw Error("THREE.MathUtils: Invalid component type.");return Math.max(t/n,-1)}function Uc(t,e){if(e.constructor===Float32Array)return t;let n=ba(e);if(n===void 0)throw Error("THREE.MathUtils: Invalid component type.");return Math.round(t*n)}class Wt{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Vt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,r=this.y-t.y;return this.x=s*n-r*i+t.x,this.y=s*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class vn{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,r,a){let o=n[i+0],l=n[i+1],c=n[i+2],f=n[i+3],d=s[r+0],u=s[r+1],g=s[r+2],y=s[r+3];if(f!==y||o!==d||l!==u||c!==g){let M=o*d+l*u+c*g+f*y;if(M<0)d=-d,u=-u,g=-g,y=-y,M=-M;let h=1-a;if(M<0.9995){let p=Math.acos(M),E=Math.sin(p);h=Math.sin(h*p)/E,a=Math.sin(a*p)/E,o=o*h+d*a,l=l*h+u*a,c=c*h+g*a,f=f*h+y*a}else{o=o*h+d*a,l=l*h+u*a,c=c*h+g*a,f=f*h+y*a;let p=1/Math.sqrt(o*o+l*l+c*c+f*f);o*=p,l*=p,c*=p,f*=p}}t[e]=o,t[e+1]=l,t[e+2]=c,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,s,r){let a=n[i],o=n[i+1],l=n[i+2],c=n[i+3],f=s[r],d=s[r+1],u=s[r+2],g=s[r+3];return t[e]=a*g+c*f+o*u-l*d,t[e+1]=o*g+c*d+l*f-a*u,t[e+2]=l*g+c*u+a*d-o*f,t[e+3]=c*g-a*f-o*d-l*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let{_x:n,_y:i,_z:s,_order:r}=t,{cos:a,sin:o}=Math,l=a(n/2),c=a(i/2),f=a(s/2),d=o(n/2),u=o(i/2),g=o(s/2);switch(r){case"XYZ":this._x=d*c*f+l*u*g,this._y=l*u*f-d*c*g,this._z=l*c*g+d*u*f,this._w=l*c*f-d*u*g;break;case"YXZ":this._x=d*c*f+l*u*g,this._y=l*u*f-d*c*g,this._z=l*c*g-d*u*f,this._w=l*c*f+d*u*g;break;case"ZXY":this._x=d*c*f-l*u*g,this._y=l*u*f+d*c*g,this._z=l*c*g+d*u*f,this._w=l*c*f-d*u*g;break;case"ZYX":this._x=d*c*f-l*u*g,this._y=l*u*f+d*c*g,this._z=l*c*g-d*u*f,this._w=l*c*f+d*u*g;break;case"YZX":this._x=d*c*f+l*u*g,this._y=l*u*f+d*c*g,this._z=l*c*g-d*u*f,this._w=l*c*f-d*u*g;break;case"XZY":this._x=d*c*f-l*u*g,this._y=l*u*f-d*c*g,this._z=l*c*g+d*u*f,this._w=l*c*f+d*u*g;break;default:It("Quaternion: .setFromEuler() encountered an unknown order: "+r)}if(e===!0)this._onChangeCallback();return this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],f=e[10],d=n+a+f;if(d>0){let u=0.5/Math.sqrt(d+1);this._w=0.25/u,this._x=(c-o)*u,this._y=(s-l)*u,this._z=(r-i)*u}else if(n>a&&n>f){let u=2*Math.sqrt(1+n-a-f);this._w=(c-o)/u,this._x=0.25*u,this._y=(i+r)/u,this._z=(s+l)/u}else if(a>f){let u=2*Math.sqrt(1+a-n-f);this._w=(s-l)/u,this._x=(i+r)/u,this._y=0.25*u,this._z=(o+c)/u}else{let u=2*Math.sqrt(1+f-n-a);this._w=(r-i)/u,this._x=(s+l)/u,this._y=(o+c)/u,this._z=0.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;if(n<0.00000001)if(n=0,Math.abs(t.x)>Math.abs(t.z))this._x=-t.y,this._y=t.x,this._z=0,this._w=n;else this._x=0,this._y=-t.z,this._z=t.y,this._w=n;else this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n;return this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Vt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();if(t===0)this._x=0,this._y=0,this._z=0,this._w=1;else t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t;return this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let{_x:n,_y:i,_z:s,_w:r}=t,{_x:a,_y:o,_z:l,_w:c}=e;return this._x=n*c+r*a+i*l-s*o,this._y=i*c+r*o+s*a-n*l,this._z=s*c+r*l+n*o-i*a,this._w=r*c-n*a-i*o-s*l,this._onChangeCallback(),this}slerp(t,e){let{_x:n,_y:i,_z:s,_w:r}=t,a=this.dot(t);if(a<0)n=-n,i=-i,s=-s,r=-r,a=-a;let o=1-e;if(a<0.9995){let l=Math.acos(a),c=Math.sin(l);o=Math.sin(o*l)/c,e=Math.sin(e*l)/c,this._x=this._x*o+n*e,this._y=this._y*o+i*e,this._z=this._z*o+s*e,this._w=this._w*o+r*e,this._onChangeCallback()}else this._x=this._x*o+n*e,this._y=this._y*o+i*e,this._z=this._z*o+s*e,this._w=this._w*o+r*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{static{this.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){if(n===void 0)n=this.z;return this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(uo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(uo.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,r=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,{x:s,y:r,z:a,w:o}=t,l=2*(r*i-a*n),c=2*(a*e-s*i),f=2*(s*n-r*e);return this.x=e+o*l+r*f-a*c,this.y=n+o*c+a*l-s*f,this.z=i+o*f+s*c-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this.z=Vt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this.z=Vt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let{x:n,y:i,z:s}=t,{x:r,y:a,z:o}=e;return this.x=i*o-s*a,this.y=s*r-n*o,this.z=n*a-i*r,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return tr.copy(this).projectOnVector(t),this.sub(tr)}reflect(t){return this.sub(tr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Vt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var tr=new G,uo=new vn;class Lt{static{this.prototype.isMatrix3=!0}constructor(t,e,n,i,s,r,a,o,l){if(this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0)this.set(t,e,n,i,s,r,a,o,l)}set(t,e,n,i,s,r,a,o,l){let c=this.elements;return c[0]=t,c[1]=i,c[2]=a,c[3]=e,c[4]=s,c[5]=o,c[6]=n,c[7]=r,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,r=n[0],a=n[3],o=n[6],l=n[1],c=n[4],f=n[7],d=n[2],u=n[5],g=n[8],y=i[0],M=i[3],h=i[6],p=i[1],E=i[4],T=i[7],S=i[2],A=i[5],R=i[8];return s[0]=r*y+a*p+o*S,s[3]=r*M+a*E+o*A,s[6]=r*h+a*T+o*R,s[1]=l*y+c*p+f*S,s[4]=l*M+c*E+f*A,s[7]=l*h+c*T+f*R,s[2]=d*y+u*p+g*S,s[5]=d*M+u*E+g*A,s[8]=d*h+u*T+g*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],o=t[6],l=t[7],c=t[8];return e*r*c-e*a*l-n*s*c+n*a*o+i*s*l-i*r*o}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],o=t[6],l=t[7],c=t[8],f=c*r-a*l,d=a*o-c*s,u=l*s-r*o,g=e*f+n*d+i*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=f*y,t[1]=(i*l-c*n)*y,t[2]=(a*n-i*r)*y,t[3]=d*y,t[4]=(c*e-i*o)*y,t[5]=(i*s-a*e)*y,t[6]=u*y,t[7]=(n*o-l*e)*y,t[8]=(r*e-n*s)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,r,a){let o=Math.cos(s),l=Math.sin(s);return this.set(n*o,n*l,-n*(o*r+l*a)+r+t,-i*l,i*o,-i*(-l*r+o*a)+a+e,0,0,1),this}scale(t,e){return Ai("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(er.makeScale(t,e)),this}rotate(t){return Ai("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(er.makeRotation(-t)),this}translate(t,e){return Ai("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(er.makeTranslation(t,e)),this}makeTranslation(t,e){if(t.isVector2)this.set(1,0,t.x,0,1,t.y,0,0,1);else this.set(1,0,t,0,1,e,0,0,1);return this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}var er=new Lt,fo=new Lt().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),po=new Lt().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function Fc(){let t={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(s,r,a){if(this.enabled===!1||r===a||!r||!a)return s;if(this.spaces[r].transfer==="srgb")s.r=fn(s.r),s.g=fn(s.g),s.b=fn(s.b);if(this.spaces[r].primaries!==this.spaces[a].primaries)s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ);if(this.spaces[a].transfer==="srgb")s.r=di(s.r),s.g=di(s.g),s.b=di(s.b);return s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){if(s==="")return"linear";return this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[0.64,0.33,0.3,0.6,0.15,0.06],n=[0.2126,0.7152,0.0722],i=[0.3127,0.329];return t.define({["srgb-linear"]:{primaries:e,whitePoint:i,transfer:"linear",toXYZ:fo,fromXYZ:po,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:e,whitePoint:i,transfer:"srgb",toXYZ:fo,fromXYZ:po,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),t}var Ht=Fc();function fn(t){return t<0.04045?t*0.0773993808:Math.pow(t*0.9478672986+0.0521327014,2.4)}function di(t){return t<0.0031308?t*12.92:1.055*Math.pow(t,0.41666)-0.055}var jn;class Ea{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src))return t.src;if(typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{if(jn===void 0)jn=wi("canvas");jn.width=t.width,jn.height=t.height;let i=jn.getContext("2d");if(t instanceof ImageData)i.putImageData(t,0,0);else i.drawImage(t,0,0,t.width,t.height);n=jn}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=wi("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=fn(s[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)if(e instanceof Uint8Array||e instanceof Uint8ClampedArray)e[n]=Math.floor(fn(e[n]/255)*255);else e[n]=fn(e[n]);return{data:e,width:t.width,height:t.height}}else return It("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}var Oc=0;class Di{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Oc++}),this.uuid=Ni(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;if(typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement)t.set(e.videoWidth,e.videoHeight,0);else if(typeof VideoFrame<"u"&&e instanceof VideoFrame)t.set(e.displayWidth,e.displayHeight,0);else if(e!==null)t.set(e.width||0,e.height||0,e.depth||0);else t.set(0,0,0);return t}set needsUpdate(t){if(t===!0)this.version++}toJSON(t){let e=t===void 0||typeof t==="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,a=i.length;r<a;r++)if(i[r].isDataTexture)s.push(nr(i[r].image));else s.push(nr(i[r]))}else s=nr(i);n.url=s}if(!e)t.images[this.uuid]=n;return n}}function nr(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap)return Ea.getDataURL(t);else if(t.data)return{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name};else return It("Texture: Unable to serialize Texture."),{}}var Bc=0,ir=new G;class Ae extends xn{constructor(t=Ae.DEFAULT_IMAGE,e=Ae.DEFAULT_MAPPING,n=1001,i=1001,s=1006,r=1008,a=1023,o=1009,l=Ae.DEFAULT_ANISOTROPY,c=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:Bc++}),this.uuid=Ni(),this.name="",this.source=new Di(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=o,this.offset=new Wt(0,0),this.repeat=new Wt(1,1),this.center=new Wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Lt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=t&&t.depth&&t.depth>1?!0:!1,this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ir).x}get height(){return this.source.getSize(ir).y}get depth(){return this.source.getSize(ir).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){It(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){It(`Texture.setValues(): property '${e}' does not exist.`);continue}if(i&&n&&(i.isVector2&&n.isVector2))i.copy(n);else if(i&&n&&(i.isVector3&&n.isVector3))i.copy(n);else if(i&&n&&(i.isMatrix3&&n.isMatrix3))i.copy(n);else this[e]=n}}toJSON(t){let e=t===void 0||typeof t==="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)n.userData=this.userData;if(!e)t.textures[this.uuid]=n;return n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==300)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case 1000:t.x=t.x-Math.floor(t.x);break;case 1001:t.x=t.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(t.x)%2)===1)t.x=Math.ceil(t.x)-t.x;else t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case 1000:t.y=t.y-Math.floor(t.y);break;case 1001:t.y=t.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(t.y)%2)===1)t.y=Math.ceil(t.y)-t.y;else t.y=t.y-Math.floor(t.y);break}if(this.flipY)t.y=1-t.y;return t}set needsUpdate(t){if(t===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(t){if(t===!0)this.pmremVersion++}}Ae.DEFAULT_IMAGE=null;Ae.DEFAULT_MAPPING=300;Ae.DEFAULT_ANISOTROPY=1;class ae{static{this.prototype.isVector4=!0}constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);if(e<0.0001)this.x=1,this.y=0,this.z=0;else this.x=t.x/e,this.y=t.y/e,this.z=t.z/e;return this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,r=0.01,a=0.1,o=t.elements,l=o[0],c=o[4],f=o[8],d=o[1],u=o[5],g=o[9],y=o[2],M=o[6],h=o[10];if(Math.abs(c-d)<0.01&&Math.abs(f-y)<0.01&&Math.abs(g-M)<0.01){if(Math.abs(c+d)<0.1&&Math.abs(f+y)<0.1&&Math.abs(g+M)<0.1&&Math.abs(l+u+h-3)<0.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(l+1)/2,T=(u+1)/2,S=(h+1)/2,A=(c+d)/4,R=(f+y)/4,m=(g+M)/4;if(E>T&&E>S)if(E<0.01)n=0,i=0.707106781,s=0.707106781;else n=Math.sqrt(E),i=A/n,s=R/n;else if(T>S)if(T<0.01)n=0.707106781,i=0,s=0.707106781;else i=Math.sqrt(T),n=A/i,s=m/i;else if(S<0.01)n=0.707106781,i=0.707106781,s=0;else s=Math.sqrt(S),n=R/s,i=m/s;return this.set(n,i,s,e),this}let p=Math.sqrt((M-g)*(M-g)+(f-y)*(f-y)+(d-c)*(d-c));if(Math.abs(p)<0.001)p=1;return this.x=(M-g)/p,this.y=(f-y)/p,this.z=(d-c)/p,this.w=Math.acos((l+u+h-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this.z=Vt(this.z,t.z,e.z),this.w=Vt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this.z=Vt(this.z,t,e),this.w=Vt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ta extends xn{constructor(t=1,e=1,n={}){super();n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ae(0,0,t,e),this.scissorTest=!1,this.viewport=new ae(0,0,t,e),this.textures=[];let i=n.count;for(let s=0;s<i;s++)this.textures[s]=new Ae({width:t,height:e,depth:n.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(t.mapping!==void 0)e.mapping=t.mapping;if(t.wrapS!==void 0)e.wrapS=t.wrapS;if(t.wrapT!==void 0)e.wrapT=t.wrapT;if(t.wrapR!==void 0)e.wrapR=t.wrapR;if(t.magFilter!==void 0)e.magFilter=t.magFilter;if(t.minFilter!==void 0)e.minFilter=t.minFilter;if(t.format!==void 0)e.format=t.format;if(t.type!==void 0)e.type=t.type;if(t.anisotropy!==void 0)e.anisotropy=t.anisotropy;if(t.colorSpace!==void 0)e.colorSpace=t.colorSpace;if(t.flipY!==void 0)e.flipY=t.flipY;if(t.generateMipmaps!==void 0)e.generateMipmaps=t.generateMipmaps;if(t.mipmapsAutoUpdate!==void 0)e.mipmapsAutoUpdate=t.mipmapsAutoUpdate;if(t.internalFormat!==void 0)e.internalFormat=t.internalFormat;for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){if(this._depthTexture!==null&&this._depthTexture.renderTarget===this)this._depthTexture.renderTarget=null;if(t!==null&&t.renderTarget===null)t.renderTarget=this;this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)if(this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0)this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new Di(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ke extends Ta{constructor(t=1,e=1,n={}){super(t,e,n);this.isWebGLRenderTarget=!0}}class Rs extends Ae{constructor(t=null,e=1,n=1,i=1){super(null);this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Aa extends Ae{constructor(t=null,e=1,n=1,i=1){super(null);this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}class se{static{this.prototype.isMatrix4=!0}constructor(t,e,n,i,s,r,a,o,l,c,f,d,u,g,y,M){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0)this.set(t,e,n,i,s,r,a,o,l,c,f,d,u,g,y,M)}set(t,e,n,i,s,r,a,o,l,c,f,d,u,g,y,M){let h=this.elements;return h[0]=t,h[4]=e,h[8]=n,h[12]=i,h[1]=s,h[5]=r,h[9]=a,h[13]=o,h[2]=l,h[6]=c,h[10]=f,h[14]=d,h[3]=u,h[7]=g,h[11]=y,h[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new se().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){if(this.determinantAffine()===0)return t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this;return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/ti.setFromMatrixColumn(t,0).length(),s=1/ti.setFromMatrixColumn(t,1).length(),r=1/ti.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,{x:n,y:i,z:s}=t,r=Math.cos(n),a=Math.sin(n),o=Math.cos(i),l=Math.sin(i),c=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){let d=r*c,u=r*f,g=a*c,y=a*f;e[0]=o*c,e[4]=-o*f,e[8]=l,e[1]=u+g*l,e[5]=d-y*l,e[9]=-a*o,e[2]=y-d*l,e[6]=g+u*l,e[10]=r*o}else if(t.order==="YXZ"){let d=o*c,u=o*f,g=l*c,y=l*f;e[0]=d+y*a,e[4]=g*a-u,e[8]=r*l,e[1]=r*f,e[5]=r*c,e[9]=-a,e[2]=u*a-g,e[6]=y+d*a,e[10]=r*o}else if(t.order==="ZXY"){let d=o*c,u=o*f,g=l*c,y=l*f;e[0]=d-y*a,e[4]=-r*f,e[8]=g+u*a,e[1]=u+g*a,e[5]=r*c,e[9]=y-d*a,e[2]=-r*l,e[6]=a,e[10]=r*o}else if(t.order==="ZYX"){let d=r*c,u=r*f,g=a*c,y=a*f;e[0]=o*c,e[4]=g*l-u,e[8]=d*l+y,e[1]=o*f,e[5]=y*l+d,e[9]=u*l-g,e[2]=-l,e[6]=a*o,e[10]=r*o}else if(t.order==="YZX"){let d=r*o,u=r*l,g=a*o,y=a*l;e[0]=o*c,e[4]=y-d*f,e[8]=g*f+u,e[1]=f,e[5]=r*c,e[9]=-a*c,e[2]=-l*c,e[6]=u*f+g,e[10]=d-y*f}else if(t.order==="XZY"){let d=r*o,u=r*l,g=a*o,y=a*l;e[0]=o*c,e[4]=-f,e[8]=l*c,e[1]=d*f+y,e[5]=r*c,e[9]=u*f-g,e[2]=g*f-u,e[6]=a*c,e[10]=y*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(zc,t,Gc)}lookAt(t,e,n){let i=this.elements;if(Ue.subVectors(t,e),Ue.lengthSq()===0)Ue.z=1;if(Ue.normalize(),Tn.crossVectors(n,Ue),Tn.lengthSq()===0){if(Math.abs(n.z)===1)Ue.x+=0.0001;else Ue.z+=0.0001;Ue.normalize(),Tn.crossVectors(n,Ue)}return Tn.normalize(),Ji.crossVectors(Ue,Tn),i[0]=Tn.x,i[4]=Ji.x,i[8]=Ue.x,i[1]=Tn.y,i[5]=Ji.y,i[9]=Ue.y,i[2]=Tn.z,i[6]=Ji.z,i[10]=Ue.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,r=n[0],a=n[4],o=n[8],l=n[12],c=n[1],f=n[5],d=n[9],u=n[13],g=n[2],y=n[6],M=n[10],h=n[14],p=n[3],E=n[7],T=n[11],S=n[15],A=i[0],R=i[4],m=i[8],v=i[12],C=i[1],k=i[5],P=i[9],B=i[13],Q=i[2],w=i[6],Y=i[10],tt=i[14],F=i[3],W=i[7],O=i[11],q=i[15];return s[0]=r*A+a*C+o*Q+l*F,s[4]=r*R+a*k+o*w+l*W,s[8]=r*m+a*P+o*Y+l*O,s[12]=r*v+a*B+o*tt+l*q,s[1]=c*A+f*C+d*Q+u*F,s[5]=c*R+f*k+d*w+u*W,s[9]=c*m+f*P+d*Y+u*O,s[13]=c*v+f*B+d*tt+u*q,s[2]=g*A+y*C+M*Q+h*F,s[6]=g*R+y*k+M*w+h*W,s[10]=g*m+y*P+M*Y+h*O,s[14]=g*v+y*B+M*tt+h*q,s[3]=p*A+E*C+T*Q+S*F,s[7]=p*R+E*k+T*w+S*W,s[11]=p*m+E*P+T*Y+S*O,s[15]=p*v+E*B+T*tt+S*q,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],r=t[1],a=t[5],o=t[9],l=t[13],c=t[2],f=t[6],d=t[10],u=t[14],g=t[3],y=t[7],M=t[11],h=t[15],p=o*u-l*d,E=a*u-l*f,T=a*d-o*f,S=r*u-l*c,A=r*d-o*c,R=r*f-a*c;return e*(y*p-M*E+h*T)-n*(g*p-M*S+h*A)+i*(g*E-y*S+h*R)-s*(g*T-y*A+M*R)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[1],r=t[5],a=t[9],o=t[2],l=t[6],c=t[10];return e*(r*c-a*l)-n*(s*c-a*o)+i*(s*l-r*o)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;if(t.isVector3)i[12]=t.x,i[13]=t.y,i[14]=t.z;else i[12]=t,i[13]=e,i[14]=n;return this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],o=t[6],l=t[7],c=t[8],f=t[9],d=t[10],u=t[11],g=t[12],y=t[13],M=t[14],h=t[15],p=e*a-n*r,E=e*o-i*r,T=e*l-s*r,S=n*o-i*a,A=n*l-s*a,R=i*l-s*o,m=c*y-f*g,v=c*M-d*g,C=c*h-u*g,k=f*M-d*y,P=f*h-u*y,B=d*h-u*M,Q=p*B-E*P+T*k+S*C-A*v+R*m;if(Q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/Q;return t[0]=(a*B-o*P+l*k)*w,t[1]=(i*P-n*B-s*k)*w,t[2]=(y*R-M*A+h*S)*w,t[3]=(d*A-f*R-u*S)*w,t[4]=(o*C-r*B-l*v)*w,t[5]=(e*B-i*C+s*v)*w,t[6]=(M*T-g*R-h*E)*w,t[7]=(c*R-d*T+u*E)*w,t[8]=(r*P-a*C+l*m)*w,t[9]=(n*C-e*P-s*m)*w,t[10]=(g*A-y*T+h*p)*w,t[11]=(f*T-c*A-u*p)*w,t[12]=(a*v-r*k-o*m)*w,t[13]=(e*k-n*v+i*m)*w,t[14]=(y*E-g*S-M*p)*w,t[15]=(c*S-f*E+d*p)*w,this}scale(t){let e=this.elements,{x:n,y:i,z:s}=t;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){if(t.isVector3)this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1);else this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1);return this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,{x:r,y:a,z:o}=t,l=s*r,c=s*a;return this.set(l*r+n,l*a-i*o,l*o+i*a,0,l*a+i*o,c*a+n,c*o-i*r,0,l*o-i*a,c*o+i*r,s*o*o+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,r){return this.set(1,n,s,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,{_x:s,_y:r,_z:a,_w:o}=e,l=s+s,c=r+r,f=a+a,d=s*l,u=s*c,g=s*f,y=r*c,M=r*f,h=a*f,p=o*l,E=o*c,T=o*f,{x:S,y:A,z:R}=n;return i[0]=(1-(y+h))*S,i[1]=(u+T)*S,i[2]=(g-E)*S,i[3]=0,i[4]=(u-T)*A,i[5]=(1-(d+h))*A,i[6]=(M+p)*A,i[7]=0,i[8]=(g+E)*R,i[9]=(M-p)*R,i[10]=(1-(d+y))*R,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let r=ti.set(i[0],i[1],i[2]).length(),a=ti.set(i[4],i[5],i[6]).length(),o=ti.set(i[8],i[9],i[10]).length();if(s<0)r=-r;Ye.copy(this);let l=1/r,c=1/a,f=1/o;return Ye.elements[0]*=l,Ye.elements[1]*=l,Ye.elements[2]*=l,Ye.elements[4]*=c,Ye.elements[5]*=c,Ye.elements[6]*=c,Ye.elements[8]*=f,Ye.elements[9]*=f,Ye.elements[10]*=f,e.setFromRotationMatrix(Ye),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,r,a=2000,o=!1){let l=this.elements,c=2*s/(e-t),f=2*s/(n-i),d=(e+t)/(e-t),u=(n+i)/(n-i),g,y;if(o)g=s/(r-s),y=r*s/(r-s);else if(a===2000)g=-(r+s)/(r-s),y=-2*r*s/(r-s);else if(a===2001)g=-r/(r-s),y=-r*s/(r-s);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,r,a=2000,o=!1){let l=this.elements,c=2/(e-t),f=2/(n-i),d=-(e+t)/(e-t),u=-(n+i)/(n-i),g,y;if(o)g=1/(r-s),y=r/(r-s);else if(a===2000)g=-2/(r-s),y=-(r+s)/(r-s);else if(a===2001)g=-1/(r-s),y=-s/(r-s);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=f,l[9]=0,l[13]=u,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}var ti=new G,Ye=new se,zc=new G(0,0,0),Gc=new G(1,1,1),Tn=new G,Ji=new G,Ue=new G,mo=new se,go=new vn;class mn{constructor(t=0,e=0,n=0,i=mn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],r=i[4],a=i[8],o=i[1],l=i[5],c=i[9],f=i[2],d=i[6],u=i[10];switch(e){case"XYZ":if(this._y=Math.asin(Vt(a,-1,1)),Math.abs(a)<0.9999999)this._x=Math.atan2(-c,u),this._z=Math.atan2(-r,s);else this._x=Math.atan2(d,l),this._z=0;break;case"YXZ":if(this._x=Math.asin(-Vt(c,-1,1)),Math.abs(c)<0.9999999)this._y=Math.atan2(a,u),this._z=Math.atan2(o,l);else this._y=Math.atan2(-f,s),this._z=0;break;case"ZXY":if(this._x=Math.asin(Vt(d,-1,1)),Math.abs(d)<0.9999999)this._y=Math.atan2(-f,u),this._z=Math.atan2(-r,l);else this._y=0,this._z=Math.atan2(o,s);break;case"ZYX":if(this._y=Math.asin(-Vt(f,-1,1)),Math.abs(f)<0.9999999)this._x=Math.atan2(d,u),this._z=Math.atan2(o,s);else this._x=0,this._z=Math.atan2(-r,l);break;case"YZX":if(this._z=Math.asin(Vt(o,-1,1)),Math.abs(o)<0.9999999)this._x=Math.atan2(-c,l),this._y=Math.atan2(-f,s);else this._x=0,this._y=Math.atan2(a,u);break;case"XZY":if(this._z=Math.asin(-Vt(r,-1,1)),Math.abs(r)<0.9999999)this._x=Math.atan2(d,l),this._y=Math.atan2(a,s);else this._x=Math.atan2(-c,u),this._y=0;break;default:It("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}if(this._order=e,n===!0)this._onChangeCallback();return this}setFromQuaternion(t,e,n){return mo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(mo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return go.setFromEuler(this),this.setFromQuaternion(go,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){if(this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0)this._order=t[3];return this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mn.DEFAULT_ORDER="XYZ";class Cs{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}var kc=0,_o=new G,ei=new vn,ln=new se,$i=new G,Mi=new G,Hc=new G,Wc=new vn,xo=new G(1,0,0),vo=new G(0,1,0),yo=new G(0,0,1),So={type:"added"},Vc={type:"removed"},ni={type:"childadded",child:null},sr={type:"childremoved",child:null};class xe extends xn{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:kc++}),this.uuid=Ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xe.DEFAULT_UP.clone();let t=new G,e=new mn,n=new vn,i=new G(1,1,1);function s(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new se},normalMatrix:{value:new Lt}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=xe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null)this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ei.setFromAxisAngle(t,e),this.quaternion.multiply(ei),this}rotateOnWorldAxis(t,e){return ei.setFromAxisAngle(t,e),this.quaternion.premultiply(ei),this}rotateX(t){return this.rotateOnAxis(xo,t)}rotateY(t){return this.rotateOnAxis(vo,t)}rotateZ(t){return this.rotateOnAxis(yo,t)}translateOnAxis(t,e){return _o.copy(t).applyQuaternion(this.quaternion),this.position.add(_o.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(xo,t)}translateY(t){return this.translateOnAxis(vo,t)}translateZ(t){return this.translateOnAxis(yo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ln.copy(this.matrixWorld).invert())}lookAt(t,e,n){if(t.isVector3)$i.copy(t);else $i.set(t,e,n);let i=this.parent;if(this.updateWorldMatrix(!0,!1),Mi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)ln.lookAt(Mi,$i,this.up);else ln.lookAt($i,Mi,this.up);if(this.quaternion.setFromRotationMatrix(ln),i)ln.extractRotation(i.matrixWorld),ei.setFromRotationMatrix(ln),this.quaternion.premultiply(ei.invert())}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}if(t===this)return Pt("Object3D.add: object can't be added as a child of itself.",t),this;if(t&&t.isObject3D)t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(So),ni.child=t,this.dispatchEvent(ni),ni.child=null;else Pt("Object3D.add: object not an instance of THREE.Object3D.",t);return this}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);if(e!==-1)t.parent=null,this.children.splice(e,1),t.dispatchEvent(Vc),sr.child=t,this.dispatchEvent(sr),sr.child=null;return this}removeFromParent(){let t=this.parent;if(t!==null)t.remove(this);return this}clear(){return this.remove(...this.children)}attach(t){if(this.updateWorldMatrix(!0,!1),ln.copy(this.matrixWorld).invert(),t.parent!==null)t.parent.updateWorldMatrix(!0,!1),ln.multiply(t.parent.matrixWorld);return t.applyMatrix4(ln),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(So),ni.child=t,this.dispatchEvent(ni),ni.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}return}getObjectsByProperty(t,e,n=[]){if(this[t]===e)n.push(this);let i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mi,t,Hc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mi,Wc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;if(e!==null)t(e),e.traverseAncestors(t)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let{x:e,y:n,z:i}=t,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*i,s[13]+=n-s[1]*e-s[5]*n-s[9]*i,s[14]+=i-s[2]*e-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||t){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,t=!0}let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null)i.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||n){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,n=!0}if(e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t==="string",n={};if(e)t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let i={};if(i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0)i.userData=this.userData;if(i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null)i.pivot=this.pivot.toArray();if(this.morphTargetDictionary!==void 0)i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)i.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)i.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map((a)=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map((a)=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null)i.colorsTexture=this._colorsTexture.toJSON(t);if(this.boundingSphere!==null)i.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)i.boundingBox=this.boundingBox.toJSON()}function s(a,o){if(a[o.uuid]===void 0)a[o.uuid]=o.toJSON(t);return o.uuid}if(this.isScene){if(this.background){if(this.background.isColor)i.background=this.background.toJSON();else if(this.background.isTexture)i.background=this.background.toJSON(t).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)i.environment=this.environment.toJSON(t).uuid}else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let o=a.shapes;if(Array.isArray(o))for(let l=0,c=o.length;l<c;l++){let f=o[l];s(t.shapes,f)}else s(t.shapes,o)}}if(this.isSkinnedMesh){if(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let o=0,l=this.material.length;o<l;o++)a.push(s(t.materials,this.material[o]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let o=this.animations[a];i.animations.push(s(t.animations,o))}}if(e){let a=r(t.geometries),o=r(t.materials),l=r(t.textures),c=r(t.images),f=r(t.shapes),d=r(t.skeletons),u=r(t.animations),g=r(t.nodes);if(a.length>0)n.geometries=a;if(o.length>0)n.materials=o;if(l.length>0)n.textures=l;if(c.length>0)n.images=c;if(f.length>0)n.shapes=f;if(d.length>0)n.skeletons=d;if(u.length>0)n.animations=u;if(g.length>0)n.nodes=g}return n.object=i,n;function r(a){let o=[];for(let l in a){let c=a[l];delete c.metadata,o.push(c)}return o}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}xe.DEFAULT_UP=new G(0,1,0);xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class je extends xe{constructor(){super();this.isGroup=!0,this.type="Group"}}var Xc={type:"move"};class Ui{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new je,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new je,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new je,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(t){if(this._targetRay!==null)this._targetRay.dispatchEvent(t);if(this._grip!==null)this._grip.dispatchEvent(t);if(this._hand!==null)this._hand.dispatchEvent(t);return this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){if(this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(t,e,n){let i=null,s=null,r=null,a=this._targetRay,o=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(let y of t.hand.values()){let M=e.getJointPose(y,n),h=this._getHandJoint(l,y);if(M!==null)h.matrix.fromArray(M.transform.matrix),h.matrix.decompose(h.position,h.quaternion,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=M.radius;h.visible=M!==null}let c=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=c.position.distanceTo(f.position),u=0.02,g=0.005;if(l.inputState.pinching&&d>u+g)l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this});else if(!l.inputState.pinching&&d<=u-g)l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this})}else if(o!==null&&t.gripSpace){if(s=e.getPose(t.gripSpace,n),s!==null){if(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity)o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity);else o.hasLinearVelocity=!1;if(s.angularVelocity)o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity);else o.hasAngularVelocity=!1;if(o.eventsEnabled)o.dispatchEvent({type:"gripUpdated",data:t,target:this})}}if(a!==null){if(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null)i=s;if(i!==null){if(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity)a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity);else a.hasLinearVelocity=!1;if(i.angularVelocity)a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity);else a.hasAngularVelocity=!1;this.dispatchEvent(Xc)}}}if(a!==null)a.visible=i!==null;if(o!==null)o.visible=s!==null;if(l!==null)l.visible=r!==null;return this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new je;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}var Dl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},An={h:0,s:0,l:0},Ki={h:0,s:0,l:0};function rr(t,e,n){if(n<0)n+=1;if(n>1)n-=1;if(n<0.16666666666666666)return t+(e-t)*6*n;if(n<0.5)return e;if(n<0.6666666666666666)return t+(e-t)*6*(0.6666666666666666-n);return t}class zt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;if(i&&i.isColor)this.copy(i);else if(typeof i==="number")this.setHex(i);else if(typeof i==="string")this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e="srgb"){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ht.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=Ht.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ht.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=Ht.workingColorSpace){if(t=Nc(t,1),e=Vt(e,0,1),n=Vt(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=0.5?n*(1+e):n+e-n*e,r=2*n-s;this.r=rr(r,s,t+0.3333333333333333),this.g=rr(r,s,t),this.b=rr(r,s,t-0.3333333333333333)}return Ht.colorSpaceToWorking(this,i),this}setStyle(t,e="srgb"){function n(s){if(s===void 0)return;if(parseFloat(s)<1)It("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,e);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:It("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);else if(r===6)return this.setHex(parseInt(s,16),e);else It("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e="srgb"){let n=Dl[t.toLowerCase()];if(n!==void 0)this.setHex(n,e);else It("Color: Unknown color "+t);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=fn(t.r),this.g=fn(t.g),this.b=fn(t.b),this}copyLinearToSRGB(t){return this.r=di(t.r),this.g=di(t.g),this.b=di(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t="srgb"){return Ht.workingToColorSpace(Te.copy(this),t),Math.round(Vt(Te.r*255,0,255))*65536+Math.round(Vt(Te.g*255,0,255))*256+Math.round(Vt(Te.b*255,0,255))}getHexString(t="srgb"){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ht.workingColorSpace){Ht.workingToColorSpace(Te.copy(this),e);let{r:n,g:i,b:s}=Te,r=Math.max(n,i,s),a=Math.min(n,i,s),o,l,c=(a+r)/2;if(a===r)o=0,l=0;else{let f=r-a;switch(l=c<=0.5?f/(r+a):f/(2-r-a),r){case n:o=(i-s)/f+(i<s?6:0);break;case i:o=(s-n)/f+2;break;case s:o=(n-i)/f+4;break}o/=6}return t.h=o,t.s=l,t.l=c,t}getRGB(t,e=Ht.workingColorSpace){return Ht.workingToColorSpace(Te.copy(this),e),t.r=Te.r,t.g=Te.g,t.b=Te.b,t}getStyle(t="srgb"){Ht.workingToColorSpace(Te.copy(this),t);let{r:e,g:n,b:i}=Te;if(t!=="srgb")return`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`;return`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(An),this.setHSL(An.h+t,An.s+e,An.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(An),t.getHSL(Ki);let n=js(An.h,Ki.h,e),i=js(An.s,Ki.s,e),s=js(An.l,Ki.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var Te=new zt;zt.NAMES=Dl;class Is extends xe{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mn,this.environmentIntensity=1,this.environmentRotation=new mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);if(this.fog!==null)e.object.fog=this.fog.toJSON();return e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}var Ze=new G,cn=new G,ar=new G,hn=new G,ii=new G,si=new G,Mo=new G,or=new G,lr=new G,cr=new G,hr=new ae,ur=new ae,dr=new ae;class ze{constructor(t=new G,e=new G,n=new G){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ze.subVectors(t,e),i.cross(Ze);let s=i.lengthSq();if(s>0)return i.multiplyScalar(1/Math.sqrt(s));return i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Ze.subVectors(i,e),cn.subVectors(n,e),ar.subVectors(t,e);let r=Ze.dot(Ze),a=Ze.dot(cn),o=Ze.dot(ar),l=cn.dot(cn),c=cn.dot(ar),f=r*l-a*a;if(f===0)return s.set(0,0,0),null;let d=1/f,u=(l*o-a*c)*d,g=(r*c-a*o)*d;return s.set(1-u-g,g,u)}static containsPoint(t,e,n,i){if(this.getBarycoord(t,e,n,i,hn)===null)return!1;return hn.x>=0&&hn.y>=0&&hn.x+hn.y<=1}static getInterpolation(t,e,n,i,s,r,a,o){if(this.getBarycoord(t,e,n,i,hn)===null){if(o.x=0,o.y=0,"z"in o)o.z=0;if("w"in o)o.w=0;return null}return o.setScalar(0),o.addScaledVector(s,hn.x),o.addScaledVector(r,hn.y),o.addScaledVector(a,hn.z),o}static getInterpolatedAttribute(t,e,n,i,s,r){return hr.setScalar(0),ur.setScalar(0),dr.setScalar(0),hr.fromBufferAttribute(t,e),ur.fromBufferAttribute(t,n),dr.fromBufferAttribute(t,i),r.setScalar(0),r.addScaledVector(hr,s.x),r.addScaledVector(ur,s.y),r.addScaledVector(dr,s.z),r}static isFrontFacing(t,e,n,i){return Ze.subVectors(n,e),cn.subVectors(t,e),Ze.cross(cn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ze.subVectors(this.c,this.b),cn.subVectors(this.a,this.b),Ze.cross(cn).length()*0.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(t){return ze.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ze.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return ze.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return ze.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ze.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,r,a;ii.subVectors(i,n),si.subVectors(s,n),or.subVectors(t,n);let o=ii.dot(or),l=si.dot(or);if(o<=0&&l<=0)return e.copy(n);lr.subVectors(t,i);let c=ii.dot(lr),f=si.dot(lr);if(c>=0&&f<=c)return e.copy(i);let d=o*f-c*l;if(d<=0&&o>=0&&c<=0&&o-c>0)return r=o/(o-c),e.copy(n).addScaledVector(ii,r);cr.subVectors(t,s);let u=ii.dot(cr),g=si.dot(cr);if(g>=0&&u<=g)return e.copy(s);let y=u*l-o*g;if(y<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(si,a);let M=c*g-u*f;if(M<=0&&f-c>=0&&u-g>=0)return Mo.subVectors(s,i),a=(f-c)/(f-c+(u-g)),e.copy(i).addScaledVector(Mo,a);let h=1/(M+y+d);return r=y*h,a=d*h,e.copy(n).addScaledVector(ii,r).addScaledVector(si,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Yn{constructor(t=new G(1/0,1/0,1/0),e=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Je.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Je.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Je.copy(e).multiplyScalar(0.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let r=0,a=s.count;r<a;r++){if(t.isMesh===!0)t.getVertexPosition(r,Je);else Je.fromBufferAttribute(s,r);Je.applyMatrix4(t.matrixWorld),this.expandByPoint(Je)}else{if(t.boundingBox!==void 0){if(t.boundingBox===null)t.computeBoundingBox();Qi.copy(t.boundingBox)}else{if(n.boundingBox===null)n.computeBoundingBox();Qi.copy(n.boundingBox)}Qi.applyMatrix4(t.matrixWorld),this.union(Qi)}}let i=t.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Je),Je.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;if(t.normal.x>0)e=t.normal.x*this.min.x,n=t.normal.x*this.max.x;else e=t.normal.x*this.max.x,n=t.normal.x*this.min.x;if(t.normal.y>0)e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y;else e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y;if(t.normal.z>0)e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z;else e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z;return e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(bi),ji.subVectors(this.max,bi),ri.subVectors(t.a,bi),ai.subVectors(t.b,bi),oi.subVectors(t.c,bi),wn.subVectors(ai,ri),Rn.subVectors(oi,ai),Bn.subVectors(ri,oi);let e=[0,-wn.z,wn.y,0,-Rn.z,Rn.y,0,-Bn.z,Bn.y,wn.z,0,-wn.x,Rn.z,0,-Rn.x,Bn.z,0,-Bn.x,-wn.y,wn.x,0,-Rn.y,Rn.x,0,-Bn.y,Bn.x,0];if(!fr(e,ri,ai,oi,ji))return!1;if(e=[1,0,0,0,1,0,0,0,1],!fr(e,ri,ai,oi,ji))return!1;return ts.crossVectors(wn,Rn),e=[ts.x,ts.y,ts.z],fr(e,ri,ai,oi,ji)}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Je).distanceTo(t)}getBoundingSphere(t){if(this.isEmpty())t.makeEmpty();else this.getCenter(t.center),t.radius=this.getSize(Je).length()*0.5;return t}intersect(t){if(this.min.max(t.min),this.max.min(t.max),this.isEmpty())this.makeEmpty();return this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){if(this.isEmpty())return this;return un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(un),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}var un=[new G,new G,new G,new G,new G,new G,new G,new G],Je=new G,Qi=new Yn,ri=new G,ai=new G,oi=new G,wn=new G,Rn=new G,Bn=new G,bi=new G,ji=new G,ts=new G,zn=new G;function fr(t,e,n,i,s){for(let r=0,a=t.length-3;r<=a;r+=3){zn.fromArray(t,r);let o=s.x*Math.abs(zn.x)+s.y*Math.abs(zn.y)+s.z*Math.abs(zn.z),l=e.dot(zn),c=n.dot(zn),f=i.dot(zn);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}var ue=new G,es=new Wt,qc=0;class pn extends xn{constructor(t,e,n=!1){super();if(Array.isArray(t))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qc++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0,this._normalizationScale=t!==void 0?ba(t):void 0}onUploadCallback(){}set needsUpdate(t){if(t===!0)this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)es.fromBufferAttribute(this,e),es.applyMatrix3(t),this.setXY(e,es.x,es.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyMatrix3(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyMatrix4(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyNormalMatrix(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.transformDirection(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];if(this.normalized)n=this._denormalize(n);return n}setComponent(t,e,n){if(this.normalized)n=this._normalize(n);return this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];if(this.normalized)e=this._denormalize(e);return e}setX(t,e){if(this.normalized)e=this._normalize(e);return this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];if(this.normalized)e=this._denormalize(e);return e}setY(t,e){if(this.normalized)e=this._normalize(e);return this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];if(this.normalized)e=this._denormalize(e);return e}setZ(t,e){if(this.normalized)e=this._normalize(e);return this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];if(this.normalized)e=this._denormalize(e);return e}setW(t,e){if(this.normalized)e=this._normalize(e);return this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){if(t*=this.itemSize,this.normalized)e=this._normalize(e),n=this._normalize(n);return this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){if(t*=this.itemSize,this.normalized)e=this._normalize(e),n=this._normalize(n),i=this._normalize(i);return this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){if(t*=this.itemSize,this.normalized)e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),s=this._normalize(s);return this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Dc(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Uc(t,this.array)}}class Ps extends pn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ls extends pn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ne extends pn{constructor(t,e,n){super(new Float32Array(t),e,n)}}var Yc=new Yn,Ei=new G,pr=new G;class Fi{constructor(t=new G,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;if(e!==void 0)n.copy(e);else Yc.setFromPoints(t).getCenter(n);let i=0;for(let s=0,r=t.length;s<r;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);if(e.copy(t),n>this.radius*this.radius)e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center);return e}getBoundingBox(t){if(this.isEmpty())return t.makeEmpty(),t;return t.set(this.center,this.center),t.expandByScalar(this.radius),t}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ei.subVectors(t,this.center);let e=Ei.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*0.5;this.center.addScaledVector(Ei,i/n),this.radius+=i}return this}union(t){if(t.isEmpty())return this;if(this.isEmpty())return this.copy(t),this;if(this.center.equals(t.center)===!0)this.radius=Math.max(this.radius,t.radius);else pr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ei.copy(t.center).add(pr)),this.expandByPoint(Ei.copy(t.center).sub(pr));return this}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}var Zc=0,Be=new se,mr=new xe,li=new G,Fe=new Yn,Ti=new Yn,_e=new G;class Oe extends xn{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zc++}),this.uuid=Ni(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){if(Array.isArray(t))this.index=new((Pc(t))?Ls:Ps)(t,1);else this.index=t;return this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;if(e!==void 0)e.applyMatrix4(t),e.needsUpdate=!0;let n=this.attributes.normal;if(n!==void 0){let s=new Lt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;if(i!==void 0)i.transformDirection(t),i.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(t){return Be.makeRotationFromQuaternion(t),this.applyMatrix4(Be),this}rotateX(t){return Be.makeRotationX(t),this.applyMatrix4(Be),this}rotateY(t){return Be.makeRotationY(t),this.applyMatrix4(Be),this}rotateZ(t){return Be.makeRotationZ(t),this.applyMatrix4(Be),this}translate(t,e,n){return Be.makeTranslation(t,e,n),this.applyMatrix4(Be),this}scale(t,e,n){return Be.makeScale(t,e,n),this.applyMatrix4(Be),this}lookAt(t){return mr.lookAt(t),mr.updateMatrix(),this.applyMatrix4(mr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(li).negate(),this.translate(li.x,li.y,li.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let r=t[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new ne(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}if(t.length>e.count)It("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");e.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new Yn;let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];if(Fe.setFromBufferAttribute(s),this.morphTargetsRelative)_e.addVectors(this.boundingBox.min,Fe.min),this.boundingBox.expandByPoint(_e),_e.addVectors(this.boundingBox.max,Fe.max),this.boundingBox.expandByPoint(_e);else this.boundingBox.expandByPoint(Fe.min),this.boundingBox.expandByPoint(Fe.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))Pt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new Fi;let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(t){let n=this.boundingSphere.center;if(Fe.setFromBufferAttribute(t),e)for(let s=0,r=e.length;s<r;s++){let a=e[s];if(Ti.setFromBufferAttribute(a),this.morphTargetsRelative)_e.addVectors(Fe.min,Ti.min),Fe.expandByPoint(_e),_e.addVectors(Fe.max,Ti.max),Fe.expandByPoint(_e);else Fe.expandByPoint(Ti.min),Fe.expandByPoint(Ti.max)}Fe.getCenter(n);let i=0;for(let s=0,r=t.count;s<r;s++)_e.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(_e));if(e)for(let s=0,r=e.length;s<r;s++){let a=e[s],o=this.morphTargetsRelative;for(let l=0,c=a.count;l<c;l++){if(_e.fromBufferAttribute(a,l),o)li.fromBufferAttribute(t,l),_e.add(li);i=Math.max(i,n.distanceToSquared(_e))}}if(this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius))Pt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Pt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:n,normal:i,uv:s}=e,r=this.getAttribute("tangent");if(r===void 0||r.count!==n.count)r=new pn(new Float32Array(4*n.count),4),this.setAttribute("tangent",r);let a=[],o=[],l=new Uint8Array(n.count);for(let v=0;v<n.count;v++)a[v]=new G,o[v]=new G;let c=new G,f=new G,d=new G,u=new Wt,g=new Wt,y=new Wt,M=new G,h=new G;function p(v,C,k){l[v]=l[C]=l[k]=1,c.fromBufferAttribute(n,v),f.fromBufferAttribute(n,C),d.fromBufferAttribute(n,k),u.fromBufferAttribute(s,v),g.fromBufferAttribute(s,C),y.fromBufferAttribute(s,k),f.sub(c),d.sub(c),g.sub(u),y.sub(u);let P=1/(g.x*y.y-y.x*g.y);if(!isFinite(P))return;M.copy(f).multiplyScalar(y.y).addScaledVector(d,-g.y).multiplyScalar(P),h.copy(d).multiplyScalar(g.x).addScaledVector(f,-y.x).multiplyScalar(P),a[v].add(M),a[C].add(M),a[k].add(M),o[v].add(h),o[C].add(h),o[k].add(h)}let E=this.groups;if(E.length===0)E=[{start:0,count:t.count}];for(let v=0,C=E.length;v<C;++v){let k=E[v],{start:P,count:B}=k;for(let Q=P,w=P+B;Q<w;Q+=3)p(t.getX(Q+0),t.getX(Q+1),t.getX(Q+2))}let T=new G,S=new G,A=new G,R=new G;function m(v){A.fromBufferAttribute(i,v),R.copy(A);let C=a[v];T.copy(C),T.sub(A.multiplyScalar(A.dot(C))).normalize(),S.crossVectors(R,C);let P=S.dot(o[v])<0?-1:1;r.setXYZW(v,T.x,T.y,T.z,P)}for(let v=0,C=n.count;v<C;++v)if(l[v])m(v);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new pn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,u=n.count;d<u;d++)n.setXYZ(d,0,0,0);let i=new G,s=new G,r=new G,a=new G,o=new G,l=new G,c=new G,f=new G;if(t)for(let d=0,u=t.count;d<u;d+=3){let g=t.getX(d+0),y=t.getX(d+1),M=t.getX(d+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,y),r.fromBufferAttribute(e,M),c.subVectors(r,s),f.subVectors(i,s),c.cross(f),a.fromBufferAttribute(n,g),o.fromBufferAttribute(n,y),l.fromBufferAttribute(n,M),a.add(c),o.add(c),l.add(c),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(y,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z)}else for(let d=0,u=e.count;d<u;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),c.subVectors(r,s),f.subVectors(i,s),c.cross(f),n.setXYZ(d+0,c.x,c.y,c.z),n.setXYZ(d+1,c.x,c.y,c.z),n.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)_e.fromBufferAttribute(t,e),_e.normalize(),t.setXYZ(e,_e.x,_e.y,_e.z)}toNonIndexed(){function t(a,o){let{array:l,itemSize:c,normalized:f}=a,d=new l.constructor(o.length*c),u=0,g=0;for(let y=0,M=o.length;y<M;y++){if(a.isInterleavedBufferAttribute)u=o[y]*a.data.stride+a.offset;else u=o[y]*c;for(let h=0;h<c;h++)d[g++]=l[u++]}return new pn(d,c,f)}if(this.index===null)return It("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new Oe,n=this.index.array,i=this.attributes;for(let a in i){let o=i[a],l=t(o,n);e.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let o=[],l=s[a];for(let c=0,f=l.length;c<f;c++){let d=l[c],u=t(d,n);o.push(u)}e.morphAttributes[a]=o}e.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let a=0,o=r.length;a<o;a++){let l=r[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0)t.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let o=this.parameters;for(let l in o)if(o[l]!==void 0)t[l]=o[l];return t}t.data={attributes:{}};let e=this.index;if(e!==null)t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)};let n=this.attributes;for(let o in n){let l=n[o];t.data.attributes[o]=l.toJSON(t.data)}let i={},s=!1;for(let o in this.morphAttributes){let l=this.morphAttributes[o],c=[];for(let f=0,d=l.length;f<d;f++){let u=l[f];c.push(u.toJSON(t.data))}if(c.length>0)i[o]=c,s=!0}if(s)t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;if(r.length>0)t.data.groups=JSON.parse(JSON.stringify(r));let a=this.boundingSphere;if(a!==null)t.data.boundingSphere=a.toJSON();return t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;if(n!==null)this.setIndex(n.clone());let i=t.attributes;for(let l in i){let c=i[l];this.setAttribute(l,c.clone(e))}let s=t.morphAttributes;for(let l in s){let c=[],f=s[l];for(let d=0,u=f.length;d<u;d++)c.push(f[d].clone(e));this.morphAttributes[l]=c}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let l=0,c=r.length;l<c;l++){let f=r[l];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;if(a!==null)this.boundingBox=a.clone();let o=t.boundingSphere;if(o!==null)this.boundingSphere=o.clone();return this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}var gr=new G,Jc=new G,$c=new Lt;class Qe{constructor(t=new G(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=gr.subVectors(n,e).cross(Jc.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(gr),s=this.normal.dot(i);if(s===0){if(this.distanceToPoint(t.start)===0)return e.copy(t.start);return null}let r=-(t.start.dot(this.normal)+this.constant)/s;if(n===!0&&(r<0||r>1))return null;return e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||$c.getNormalMatrix(t),i=this.coplanarPoint(gr).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}var Kc=0;class Zn extends xn{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kc++}),this.uuid=Ni(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){if(this._alphaTest>0!==t>0)this.version++;this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t===void 0)return;for(let e in t){let n=t[e];if(n===void 0){It(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){It(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}if(i&&i.isColor)i.set(n);else if(i&&i.isVector2&&(n&&n.isVector2)||i&&i.isEuler&&(n&&n.isEuler)||i&&i.isVector3&&(n&&n.isVector3))i.copy(n);else this[e]=n}}toJSON(t){let e=t===void 0||typeof t==="string";if(e)t={textures:{},images:{}};let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if(n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor)n.color=this.color.getHex();if(this.roughness!==void 0)n.roughness=this.roughness;if(this.metalness!==void 0)n.metalness=this.metalness;if(this.sheen!==void 0)n.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)n.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)n.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)n.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0)n.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)n.specular=this.specular.getHex();if(this.specularIntensity!==void 0)n.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)n.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)n.shininess=this.shininess;if(this.clearcoat!==void 0)n.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)n.clearcoatRoughness=this.clearcoatRoughness;if(this.diffuseRoughness!==void 0)n.diffuseRoughness=this.diffuseRoughness;if(this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture)n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid;if(this.clearcoatMap&&this.clearcoatMap.isTexture)n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid;if(this.dispersion!==void 0)n.dispersion=this.dispersion;if(this.retroreflectivity!==void 0)n.retroreflectivity=this.retroreflectivity;if(this.iridescence!==void 0)n.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)n.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessMinimum!==void 0)n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum;if(this.iridescenceThicknessMaximum!==void 0)n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum;if(this.iridescenceMap&&this.iridescenceMap.isTexture)n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid;if(this.anisotropy!==void 0)n.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)n.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid;if(this.map&&this.map.isTexture)n.map=this.map.toJSON(t).uuid;if(this.matcap&&this.matcap.isTexture)n.matcap=this.matcap.toJSON(t).uuid;if(this.alphaMap&&this.alphaMap.isTexture)n.alphaMap=this.alphaMap.toJSON(t).uuid;if(this.lightMap&&this.lightMap.isTexture)n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)n.roughnessMap=this.roughnessMap.toJSON(t).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)n.metalnessMap=this.metalnessMap.toJSON(t).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)n.emissiveMap=this.emissiveMap.toJSON(t).uuid;if(this.specularMap&&this.specularMap.isTexture)n.specularMap=this.specularMap.toJSON(t).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)n.specularColorMap=this.specularColorMap.toJSON(t).uuid;if(this.envMap&&this.envMap.isTexture){if(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0)n.combine=this.combine}if(this.envMapRotation!==void 0)n.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)n.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)n.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)n.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)n.gradientMap=this.gradientMap.toJSON(t).uuid;if(this.transmission!==void 0)n.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)n.transmissionMap=this.transmissionMap.toJSON(t).uuid;if(this.thickness!==void 0)n.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)n.thicknessMap=this.thicknessMap.toJSON(t).uuid;if(this.attenuationDistance!==void 0)n.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)n.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)n.size=this.size;if(this.sizeAttenuation!==void 0)n.sizeAttenuation=this.sizeAttenuation;if(Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0)n.clippingPlanes=this.clippingPlanes.map((s)=>s.toJSON());if(this.rotation!==void 0)n.rotation=this.rotation;if(this.depthPacking!==void 0)n.depthPacking=this.depthPacking;if(this.linewidth!==void 0)n.linewidth=this.linewidth;if(this.linecap!==void 0)n.linecap=this.linecap;if(this.linejoin!==void 0)n.linejoin=this.linejoin;if(this.dashSize!==void 0)n.dashSize=this.dashSize;if(this.gapSize!==void 0)n.gapSize=this.gapSize;if(this.scale!==void 0)n.scale=this.scale;if(this.wireframe!==void 0)n.wireframe=this.wireframe;if(this.wireframeLinewidth!==void 0)n.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!==void 0)n.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!==void 0)n.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading!==void 0)n.flatShading=this.flatShading;if(this.fog!==void 0)n.fog=this.fog;if(Object.keys(this.userData).length>0)n.userData=this.userData;function i(s){let r=[];for(let a in s){let o=s[a];delete o.metadata,r.push(o)}return r}if(e){let s=i(t.textures),r=i(t.images);if(s.length>0)n.textures=s;if(r.length>0)n.images=r}return n}fromJSON(t,e){if(t.uuid!==void 0)this.uuid=t.uuid;if(t.name!==void 0)this.name=t.name;if(t.color!==void 0&&this.color!==void 0)this.color.setHex(t.color);if(t.roughness!==void 0)this.roughness=t.roughness;if(t.metalness!==void 0)this.metalness=t.metalness;if(t.sheen!==void 0)this.sheen=t.sheen;if(t.sheenColor!==void 0)this.sheenColor=new zt().setHex(t.sheenColor);if(t.sheenRoughness!==void 0)this.sheenRoughness=t.sheenRoughness;if(t.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(t.emissive);if(t.specular!==void 0&&this.specular!==void 0)this.specular.setHex(t.specular);if(t.specularIntensity!==void 0)this.specularIntensity=t.specularIntensity;if(t.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(t.specularColor);if(t.shininess!==void 0)this.shininess=t.shininess;if(t.clearcoat!==void 0)this.clearcoat=t.clearcoat;if(t.clearcoatRoughness!==void 0)this.clearcoatRoughness=t.clearcoatRoughness;if(t.diffuseRoughness!==void 0)this.diffuseRoughness=t.diffuseRoughness;if(t.dispersion!==void 0)this.dispersion=t.dispersion;if(t.retroreflectivity!==void 0)this.retroreflectivity=t.retroreflectivity;if(t.iridescence!==void 0)this.iridescence=t.iridescence;if(t.iridescenceIOR!==void 0)this.iridescenceIOR=t.iridescenceIOR;if(t.iridescenceThicknessMinimum!==void 0)this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum;if(t.iridescenceThicknessMaximum!==void 0)this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum;if(t.iridescenceThicknessRange!==void 0)this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1];if(t.transmission!==void 0)this.transmission=t.transmission;if(t.thickness!==void 0)this.thickness=t.thickness;if(t.attenuationDistance!==void 0)this.attenuationDistance=t.attenuationDistance;if(t.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(t.attenuationColor);if(t.anisotropy!==void 0)this.anisotropy=t.anisotropy;if(t.anisotropyRotation!==void 0)this.anisotropyRotation=t.anisotropyRotation;if(t.fog!==void 0)this.fog=t.fog;if(t.flatShading!==void 0)this.flatShading=t.flatShading;if(t.blending!==void 0)this.blending=t.blending;if(t.combine!==void 0)this.combine=t.combine;if(t.side!==void 0)this.side=t.side;if(t.shadowSide!==void 0)this.shadowSide=t.shadowSide;if(t.opacity!==void 0)this.opacity=t.opacity;if(t.transparent!==void 0)this.transparent=t.transparent;if(t.alphaTest!==void 0)this.alphaTest=t.alphaTest;if(t.alphaHash!==void 0)this.alphaHash=t.alphaHash;if(t.depthFunc!==void 0)this.depthFunc=t.depthFunc;if(t.depthTest!==void 0)this.depthTest=t.depthTest;if(t.depthWrite!==void 0)this.depthWrite=t.depthWrite;if(t.colorWrite!==void 0)this.colorWrite=t.colorWrite;if(t.clippingPlanes!==void 0)this.clippingPlanes=t.clippingPlanes.map((n)=>new Qe().fromJSON(n));if(t.clipIntersection!==void 0)this.clipIntersection=t.clipIntersection;if(t.clipShadows!==void 0)this.clipShadows=t.clipShadows;if(t.depthPacking!==void 0)this.depthPacking=t.depthPacking;if(t.blendSrc!==void 0)this.blendSrc=t.blendSrc;if(t.blendDst!==void 0)this.blendDst=t.blendDst;if(t.blendEquation!==void 0)this.blendEquation=t.blendEquation;if(t.blendSrcAlpha!==void 0)this.blendSrcAlpha=t.blendSrcAlpha;if(t.blendDstAlpha!==void 0)this.blendDstAlpha=t.blendDstAlpha;if(t.blendEquationAlpha!==void 0)this.blendEquationAlpha=t.blendEquationAlpha;if(t.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(t.blendColor);if(t.blendAlpha!==void 0)this.blendAlpha=t.blendAlpha;if(t.stencilWriteMask!==void 0)this.stencilWriteMask=t.stencilWriteMask;if(t.stencilFunc!==void 0)this.stencilFunc=t.stencilFunc;if(t.stencilRef!==void 0)this.stencilRef=t.stencilRef;if(t.stencilFuncMask!==void 0)this.stencilFuncMask=t.stencilFuncMask;if(t.stencilFail!==void 0)this.stencilFail=t.stencilFail;if(t.stencilZFail!==void 0)this.stencilZFail=t.stencilZFail;if(t.stencilZPass!==void 0)this.stencilZPass=t.stencilZPass;if(t.stencilWrite!==void 0)this.stencilWrite=t.stencilWrite;if(t.wireframe!==void 0)this.wireframe=t.wireframe;if(t.wireframeLinewidth!==void 0)this.wireframeLinewidth=t.wireframeLinewidth;if(t.wireframeLinecap!==void 0)this.wireframeLinecap=t.wireframeLinecap;if(t.wireframeLinejoin!==void 0)this.wireframeLinejoin=t.wireframeLinejoin;if(t.rotation!==void 0)this.rotation=t.rotation;if(t.linewidth!==void 0)this.linewidth=t.linewidth;if(t.linecap!==void 0)this.linecap=t.linecap;if(t.linejoin!==void 0)this.linejoin=t.linejoin;if(t.dashSize!==void 0)this.dashSize=t.dashSize;if(t.gapSize!==void 0)this.gapSize=t.gapSize;if(t.scale!==void 0)this.scale=t.scale;if(t.polygonOffset!==void 0)this.polygonOffset=t.polygonOffset;if(t.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=t.polygonOffsetFactor;if(t.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=t.polygonOffsetUnits;if(t.dithering!==void 0)this.dithering=t.dithering;if(t.alphaToCoverage!==void 0)this.alphaToCoverage=t.alphaToCoverage;if(t.premultipliedAlpha!==void 0)this.premultipliedAlpha=t.premultipliedAlpha;if(t.forceSinglePass!==void 0)this.forceSinglePass=t.forceSinglePass;if(t.allowOverride!==void 0)this.allowOverride=t.allowOverride;if(t.visible!==void 0)this.visible=t.visible;if(t.toneMapped!==void 0)this.toneMapped=t.toneMapped;if(t.userData!==void 0)this.userData=t.userData;if(t.vertexColors!==void 0)if(typeof t.vertexColors==="number")this.vertexColors=t.vertexColors>0;else this.vertexColors=t.vertexColors;if(t.size!==void 0)this.size=t.size;if(t.sizeAttenuation!==void 0)this.sizeAttenuation=t.sizeAttenuation;if(t.map!==void 0)this.map=e[t.map]||null;if(t.matcap!==void 0)this.matcap=e[t.matcap]||null;if(t.alphaMap!==void 0)this.alphaMap=e[t.alphaMap]||null;if(t.bumpMap!==void 0)this.bumpMap=e[t.bumpMap]||null;if(t.bumpScale!==void 0)this.bumpScale=t.bumpScale;if(t.normalMap!==void 0)this.normalMap=e[t.normalMap]||null;if(t.normalMapType!==void 0)this.normalMapType=t.normalMapType;if(t.normalScale!==void 0){let n=t.normalScale;if(Array.isArray(n)===!1)n=[n,n];this.normalScale=new Wt().fromArray(n)}if(t.displacementMap!==void 0)this.displacementMap=e[t.displacementMap]||null;if(t.displacementScale!==void 0)this.displacementScale=t.displacementScale;if(t.displacementBias!==void 0)this.displacementBias=t.displacementBias;if(t.roughnessMap!==void 0)this.roughnessMap=e[t.roughnessMap]||null;if(t.metalnessMap!==void 0)this.metalnessMap=e[t.metalnessMap]||null;if(t.emissiveMap!==void 0)this.emissiveMap=e[t.emissiveMap]||null;if(t.emissiveIntensity!==void 0)this.emissiveIntensity=t.emissiveIntensity;if(t.specularMap!==void 0)this.specularMap=e[t.specularMap]||null;if(t.specularIntensityMap!==void 0)this.specularIntensityMap=e[t.specularIntensityMap]||null;if(t.specularColorMap!==void 0)this.specularColorMap=e[t.specularColorMap]||null;if(t.envMap!==void 0)this.envMap=e[t.envMap]||null;if(t.envMapRotation!==void 0)this.envMapRotation.fromArray(t.envMapRotation);if(t.envMapIntensity!==void 0)this.envMapIntensity=t.envMapIntensity;if(t.reflectivity!==void 0)this.reflectivity=t.reflectivity;if(t.refractionRatio!==void 0)this.refractionRatio=t.refractionRatio;if(t.lightMap!==void 0)this.lightMap=e[t.lightMap]||null;if(t.lightMapIntensity!==void 0)this.lightMapIntensity=t.lightMapIntensity;if(t.aoMap!==void 0)this.aoMap=e[t.aoMap]||null;if(t.aoMapIntensity!==void 0)this.aoMapIntensity=t.aoMapIntensity;if(t.gradientMap!==void 0)this.gradientMap=e[t.gradientMap]||null;if(t.clearcoatMap!==void 0)this.clearcoatMap=e[t.clearcoatMap]||null;if(t.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null;if(t.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null;if(t.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new Wt().fromArray(t.clearcoatNormalScale);if(t.diffuseRoughnessMap!==void 0)this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null;if(t.iridescenceMap!==void 0)this.iridescenceMap=e[t.iridescenceMap]||null;if(t.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null;if(t.transmissionMap!==void 0)this.transmissionMap=e[t.transmissionMap]||null;if(t.thicknessMap!==void 0)this.thicknessMap=e[t.thicknessMap]||null;if(t.anisotropyMap!==void 0)this.anisotropyMap=e[t.anisotropyMap]||null;if(t.sheenColorMap!==void 0)this.sheenColorMap=e[t.sheenColorMap]||null;if(t.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){if(t===!0)this.version++}}var dn=new G,_r=new G,ns=new G,is=new G;class wa{constructor(t=new G,e=new G(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,dn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);if(n<0)return e.copy(this.origin);return e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=dn.subVectors(t,this.origin).dot(this.direction);if(e<0)return this.origin.distanceToSquared(t);return dn.copy(this.origin).addScaledVector(this.direction,e),dn.distanceToSquared(t)}distanceSqToSegment(t,e,n,i){_r.copy(t).add(e).multiplyScalar(0.5),ns.copy(e).sub(t).normalize(),is.copy(this.origin).sub(_r);let s=t.distanceTo(e)*0.5,r=-this.direction.dot(ns),a=is.dot(this.direction),o=-is.dot(ns),l=is.lengthSq(),c=Math.abs(1-r*r),f,d,u,g;if(c>0)if(f=r*o-a,d=r*a-o,g=s*c,f>=0)if(d>=-g)if(d<=g){let y=1/c;f*=y,d*=y,u=f*(f+r*d+2*a)+d*(r*f+d+2*o)+l}else d=s,f=Math.max(0,-(r*d+a)),u=-f*f+d*(d+2*o)+l;else d=-s,f=Math.max(0,-(r*d+a)),u=-f*f+d*(d+2*o)+l;else if(d<=-g)f=Math.max(0,-(-r*s+a)),d=f>0?-s:Math.min(Math.max(-s,-o),s),u=-f*f+d*(d+2*o)+l;else if(d<=g)f=0,d=Math.min(Math.max(-s,-o),s),u=d*(d+2*o)+l;else f=Math.max(0,-(r*s+a)),d=f>0?s:Math.min(Math.max(-s,-o),s),u=-f*f+d*(d+2*o)+l;else d=r>0?-s:s,f=Math.max(0,-(r*d+a)),u=-f*f+d*(d+2*o)+l;if(n)n.copy(this.origin).addScaledVector(this.direction,f);if(i)i.copy(_r).addScaledVector(ns,d);return u}intersectSphere(t,e){if(t.radius<0)return null;dn.subVectors(t.center,this.origin);let n=dn.dot(this.direction),i=dn.dot(dn)-n*n,s=t.radius*t.radius;if(i>s)return null;let r=Math.sqrt(s-i),a=n-r,o=n+r;if(o<0)return null;if(a<0)return this.at(o,e);return this.at(a,e)}intersectsSphere(t){if(t.radius<0)return!1;return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0){if(t.distanceToPoint(this.origin)===0)return 0;return null}let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);if(n===null)return null;return this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);if(e===0)return!0;if(t.normal.dot(this.direction)*e<0)return!0;return!1}intersectBox(t,e){let n,i,s,r,a,o,l=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,d=this.origin;if(l>=0)n=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l;else n=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l;if(c>=0)s=(t.min.y-d.y)*c,r=(t.max.y-d.y)*c;else s=(t.max.y-d.y)*c,r=(t.min.y-d.y)*c;if(n>r||s>i)return null;if(s>n||isNaN(n))n=s;if(r<i||isNaN(i))i=r;if(f>=0)a=(t.min.z-d.z)*f,o=(t.max.z-d.z)*f;else a=(t.max.z-d.z)*f,o=(t.min.z-d.z)*f;if(n>o||a>i)return null;if(a>n||n!==n)n=a;if(o<i||i!==i)i=o;if(i<0)return null;return this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,dn)!==null}intersectTriangle(t,e,n,i,s){let r=this.origin,a=this.direction,{x:o,y:l,z:c}=a,f=t.x-r.x,d=t.y-r.y,u=t.z-r.z,g=e.x-r.x,y=e.y-r.y,M=e.z-r.z,h=n.x-r.x,p=n.y-r.y,E=n.z-r.z,T=Math.abs(o),S=Math.abs(l),A=Math.abs(c),R,m,v,C,k,P,B,Q,w,Y,tt,F;if(T>=S&&T>=A)if(v=o,P=f,w=g,F=h,o>=0)R=l,m=c,C=d,k=u,B=y,Q=M,Y=p,tt=E;else R=c,m=l,C=u,k=d,B=M,Q=y,Y=E,tt=p;else if(S>=A)if(v=l,P=d,w=y,F=p,l>=0)R=c,m=o,C=u,k=f,B=M,Q=g,Y=E,tt=h;else R=o,m=c,C=f,k=u,B=g,Q=M,Y=h,tt=E;else if(v=c,P=u,w=M,F=E,c>=0)R=o,m=l,C=f,k=d,B=g,Q=y,Y=h,tt=p;else R=l,m=o,C=d,k=f,B=y,Q=g,Y=p,tt=h;if(v===0)return null;let W=R/v,O=m/v,q=1/v,nt=C-W*P,dt=k-O*P,Z=B-W*w,j=Q-O*w,_t=Y-W*F,yt=tt-O*F,wt=_t*j-yt*Z,St=nt*yt-dt*_t,Zt=Z*dt-j*nt;if(i){if(wt<0||St<0||Zt<0)return null}else if((wt<0||St<0||Zt<0)&&(wt>0||St>0||Zt>0))return null;let Bt=wt+St+Zt;if(Bt===0)return null;let Ut=q*(wt*P+St*w+Zt*F);if(Bt>0?Ut<0:Ut>0)return null;return this.at(Ut/Bt,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Oi extends Zn{constructor(t){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}var bo=new se,Gn=new wa,ss=new Fi,Eo=new G,rs=new G,as=new G,os=new G,xr=new G,ls=new G,To=new G,cs=new G;class He extends xe{constructor(t=new Oe,e=new Oi){super();this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){if(super.copy(t,e),t.morphTargetInfluences!==void 0)this.morphTargetInfluences=t.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(t.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(s&&a){ls.set(0,0,0);for(let o=0,l=s.length;o<l;o++){let c=a[o],f=s[o];if(c===0)continue;if(xr.fromBufferAttribute(f,t),r)ls.addScaledVector(xr,c);else ls.addScaledVector(xr.sub(e),c)}e.add(ls)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0)return;if(n.boundingSphere===null)n.computeBoundingSphere();if(ss.copy(n.boundingSphere),ss.applyMatrix4(s),Gn.copy(t.ray).recast(t.near),ss.containsPoint(Gn.origin)===!1){if(Gn.intersectSphere(ss,Eo)===null)return;if(Gn.origin.distanceToSquared(Eo)>(t.far-t.near)**2)return}if(bo.copy(s).invert(),Gn.copy(t.ray).applyMatrix4(bo),n.boundingBox!==null){if(Gn.intersectsBox(n.boundingBox)===!1)return}this._computeIntersections(t,e,Gn)}_computeIntersections(t,e,n){let i,s=this.geometry,r=this.material,a=s.index,o=s.attributes.position,l=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,{groups:d,drawRange:u}=s;if(a!==null)if(Array.isArray(r))for(let g=0,y=d.length;g<y;g++){let M=d[g],h=r[M.materialIndex],p=Math.max(M.start,u.start),E=Math.min(a.count,Math.min(M.start+M.count,u.start+u.count));for(let T=p,S=E;T<S;T+=3){let A=a.getX(T),R=a.getX(T+1),m=a.getX(T+2);if(i=hs(this,h,t,n,l,c,f,A,R,m),i)i.faceIndex=Math.floor(T/3),i.face.materialIndex=M.materialIndex,e.push(i)}}else{let g=Math.max(0,u.start),y=Math.min(a.count,u.start+u.count);for(let M=g,h=y;M<h;M+=3){let p=a.getX(M),E=a.getX(M+1),T=a.getX(M+2);if(i=hs(this,r,t,n,l,c,f,p,E,T),i)i.faceIndex=Math.floor(M/3),e.push(i)}}else if(o!==void 0)if(Array.isArray(r))for(let g=0,y=d.length;g<y;g++){let M=d[g],h=r[M.materialIndex],p=Math.max(M.start,u.start),E=Math.min(o.count,Math.min(M.start+M.count,u.start+u.count));for(let T=p,S=E;T<S;T+=3){let A=T,R=T+1,m=T+2;if(i=hs(this,h,t,n,l,c,f,A,R,m),i)i.faceIndex=Math.floor(T/3),i.face.materialIndex=M.materialIndex,e.push(i)}}else{let g=Math.max(0,u.start),y=Math.min(o.count,u.start+u.count);for(let M=g,h=y;M<h;M+=3){let p=M,E=M+1,T=M+2;if(i=hs(this,r,t,n,l,c,f,p,E,T),i)i.faceIndex=Math.floor(M/3),e.push(i)}}}}function Qc(t,e,n,i,s,r,a,o){let l;if(e.side===1)l=i.intersectTriangle(a,r,s,!0,o);else l=i.intersectTriangle(s,r,a,e.side===0,o);if(l===null)return null;cs.copy(o),cs.applyMatrix4(t.matrixWorld);let c=n.ray.origin.distanceTo(cs);if(c<n.near||c>n.far)return null;return{distance:c,point:cs.clone(),object:t}}function hs(t,e,n,i,s,r,a,o,l,c){t.getVertexPosition(o,rs),t.getVertexPosition(l,as),t.getVertexPosition(c,os);let f=Qc(t,e,n,i,rs,as,os,To);if(f){let d=new G;if(ze.getBarycoord(To,rs,as,os,d),s)f.uv=ze.getInterpolatedAttribute(s,o,l,c,d,new Wt);if(r)f.uv1=ze.getInterpolatedAttribute(r,o,l,c,d,new Wt);if(a){if(f.normal=ze.getInterpolatedAttribute(a,o,l,c,d,new G),f.normal.dot(i.direction)>0)f.normal.multiplyScalar(-1)}let u={a:o,b:l,c,normal:new G,materialIndex:0};ze.getNormal(rs,as,os,u.normal),f.face=u,f.barycoord=d}return f}class Ra extends Ae{constructor(t=null,e=1,n=1,i,s,r,a,o,l=1003,c=1003,f,d){super(null,r,a,o,l,c,i,s,f,d);this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var kn=new Fi,jc=new Wt(0.5,0.5),us=new G;class Hn{constructor(t=new Qe,e=new Qe,n=new Qe,i=new Qe,s=new Qe,r=new Qe){this.planes=[t,e,n,i,s,r]}set(t,e,n,i,s,r){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(r),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=2000,n=!1){let i=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],f=s[5],d=s[6],u=s[7],g=s[8],y=s[9],M=s[10],h=s[11],p=s[12],E=s[13],T=s[14],S=s[15];if(i[0].setComponents(l-r,u-c,h-g,S-p).normalize(),i[1].setComponents(l+r,u+c,h+g,S+p).normalize(),i[2].setComponents(l+a,u+f,h+y,S+E).normalize(),i[3].setComponents(l-a,u-f,h-y,S-E).normalize(),n)i[4].setComponents(o,d,M,T).normalize(),i[5].setComponents(l-o,u-d,h-M,S-T).normalize();else if(i[4].setComponents(l-o,u-d,h-M,S-T).normalize(),e===2000)i[5].setComponents(l+o,u+d,h+M,S+T).normalize();else if(e===2001)i[5].setComponents(o,d,M,T).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0){if(t.boundingSphere===null)t.computeBoundingSphere();kn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld)}else{let e=t.geometry;if(e.boundingSphere===null)e.computeBoundingSphere();kn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(kn)}intersectsSprite(t){kn.center.set(0,0,0);let e=jc.distanceTo(t.center);return kn.radius=0.7071067811865476+e,kn.applyMatrix4(t.matrixWorld),this.intersectsSphere(kn)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(us.x=i.normal.x>0?t.max.x:t.min.x,us.y=i.normal.y>0?t.max.y:t.min.y,us.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(us)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}var Ao=new se;class Ns{constructor(){this.coordinateSystem=2000,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let i=0;i<e.length;i++){let s=e[i];if(Ao.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[i]===void 0)n[i]=new Hn;n[i].setFromProjectionMatrix(Ao,s.coordinateSystem,s.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let i=0;i<t._count;i++){if(e[i]===void 0)e[i]=new Hn;e[i].copy(n[i])}return this._count=t._count,this}clone(){return new Ns().copy(this)}}class Ds extends Ae{constructor(t=[],e=301,n,i,s,r,a,o,l,c){super(t,e,n,i,s,r,a,o,l,c);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Dn extends Ae{constructor(t,e,n=1014,i,s,r,a=1003,o=1003,l,c=1026,f=1){if(c!==1026&&c!==1027)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:f};super(d,i,s,r,a,o,c,n,l);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Di(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class Us extends Dn{constructor(t,e=1014,n=301,i,s,r=1003,a=1003,o,l=1026){let c={width:t,height:t,depth:1},f=[c,c,c,c,c,c];super(t,t,e,n,i,s,r,a,o,l);this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Fs extends Ae{constructor(t=null){super();this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class vi extends Oe{constructor(t=1,e=1,n=1,i=1,s=1,r=1){super();this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};let a=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);let o=[],l=[],c=[],f=[],d=0,u=0;g("z","y","x",-1,-1,n,e,t,r,s,0),g("z","y","x",1,-1,n,e,-t,r,s,1),g("x","z","y",1,1,t,n,e,i,r,2),g("x","z","y",1,-1,t,n,-e,i,r,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(o),this.setAttribute("position",new ne(l,3)),this.setAttribute("normal",new ne(c,3)),this.setAttribute("uv",new ne(f,2));function g(y,M,h,p,E,T,S,A,R,m,v){let C=T/R,k=S/m,P=T/2,B=S/2,Q=A/2,w=R+1,Y=m+1,tt=0,F=0,W=new G;for(let O=0;O<Y;O++){let q=O*k-B;for(let nt=0;nt<w;nt++){let dt=nt*C-P;W[y]=dt*p,W[M]=q*E,W[h]=Q,l.push(W.x,W.y,W.z),W[y]=0,W[M]=0,W[h]=A>0?1:-1,c.push(W.x,W.y,W.z),f.push(nt/R),f.push(1-O/m),tt+=1}}for(let O=0;O<m;O++)for(let q=0;q<R;q++){let nt=d+q+w*O,dt=d+q+w*(O+1),Z=d+(q+1)+w*(O+1),j=d+(q+1)+w*O;o.push(nt,dt,j),o.push(dt,Z,j),F+=6}a.addGroup(u,F,v),u+=F,d+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Bi extends Oe{constructor(t=1,e=1,n=4,i=8,s=1){super();this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:i,heightSegments:s},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),s=Math.max(1,Math.floor(s));let r=[],a=[],o=[],l=[],c=e/2,f=Math.PI/2*t,d=e,u=2*f+d,g=n*2+s,y=i+1,M=new G,h=new G;for(let p=0;p<=g;p++){let E=0,T=0,S=0,A=0;if(p<=n){let v=p/n,C=v*Math.PI/2;T=-c-t*Math.cos(C),S=t*Math.sin(C),A=-t*Math.cos(C),E=v*f}else if(p<=n+s){let v=(p-n)/s;T=-c+v*e,S=t,A=0,E=f+v*d}else{let v=(p-n-s)/n,C=v*Math.PI/2;T=c+t*Math.sin(C),S=t*Math.cos(C),A=t*Math.sin(C),E=f+d+v*f}let R=Math.max(0,Math.min(1,E/u)),m=0;if(p===0)m=0.5/i;else if(p===g)m=-0.5/i;for(let v=0;v<=i;v++){let C=v/i,k=C*Math.PI*2,P=Math.sin(k),B=Math.cos(k);h.x=-S*B,h.y=T,h.z=S*P,a.push(h.x,h.y,h.z),M.set(-S*B,A,S*P),M.normalize(),o.push(M.x,M.y,M.z),l.push(C+m,R)}if(p>0){let v=(p-1)*y;for(let C=0;C<i;C++){let k=v+C,P=v+C+1,B=p*y+C,Q=p*y+C+1;r.push(k,P,B),r.push(P,Q,B)}}}this.setIndex(r),this.setAttribute("position",new ne(a,3)),this.setAttribute("normal",new ne(o,3)),this.setAttribute("uv",new ne(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bi(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class zi extends Oe{constructor(t=1,e=32,n=0,i=Math.PI*2){super();this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let s=[],r=[],a=[],o=[],l=new G,c=new Wt;r.push(0,0,0),a.push(0,0,1),o.push(0.5,0.5);for(let f=0,d=3;f<=e;f++,d+=3){let u=n+f/e*i;l.x=t*Math.cos(u),l.y=t*Math.sin(u),r.push(l.x,l.y,l.z),a.push(0,0,1),c.x=(r[d]/t+1)/2,c.y=(r[d+1]/t+1)/2,o.push(c.x,c.y)}for(let f=1;f<=e;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new ne(r,3)),this.setAttribute("normal",new ne(a,3)),this.setAttribute("uv",new ne(o,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zi(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class yn extends Oe{constructor(t=1,e=1,n=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o};let l=this;i=Math.floor(i),s=Math.floor(s);let c=[],f=[],d=[],u=[],g=0,y=[],M=n/2,h=0;if(p(),r===!1){if(t>0)E(!0);if(e>0)E(!1)}this.setIndex(c),this.setAttribute("position",new ne(f,3)),this.setAttribute("normal",new ne(d,3)),this.setAttribute("uv",new ne(u,2));function p(){let T=new G,S=new G,A=0,R=(e-t)/n;for(let m=0;m<=s;m++){let v=[],C=m/s,k=C*(e-t)+t;for(let P=0;P<=i;P++){let B=P/i,Q=B*o+a,w=Math.sin(Q),Y=Math.cos(Q);S.x=k*w,S.y=-C*n+M,S.z=k*Y,f.push(S.x,S.y,S.z),T.set(w,R,Y).normalize(),d.push(T.x,T.y,T.z),u.push(B,1-C),v.push(g++)}y.push(v)}for(let m=0;m<i;m++)for(let v=0;v<s;v++){let C=y[v][m],k=y[v+1][m],P=y[v+1][m+1],B=y[v][m+1];if(t>0||v!==0)c.push(C,k,B),A+=3;if(e>0||v!==s-1)c.push(k,P,B),A+=3}l.addGroup(h,A,0),h+=A}function E(T){let S=g,A=new Wt,R=new G,m=0,v=T===!0?t:e,C=T===!0?1:-1;for(let P=1;P<=i;P++)f.push(0,M*C,0),d.push(0,C,0),u.push(0.5,0.5),g++;let k=g;for(let P=0;P<=i;P++){let Q=P/i*o+a,w=Math.cos(Q),Y=Math.sin(Q);R.x=v*Y,R.y=M*C,R.z=v*w,f.push(R.x,R.y,R.z),d.push(0,C,0),A.x=w*0.5+0.5,A.y=Y*0.5*C+0.5,u.push(A.x,A.y),g++}for(let P=0;P<i;P++){let B=S+P,Q=k+P;if(T===!0)c.push(Q,Q+1,B);else c.push(Q+1,Q,B);m+=3}l.addGroup(h,m,T===!0?1:2),h+=m}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Gi extends Oe{constructor(t=1,e=1,n=1,i=1){super();this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,r=e/2,a=Math.floor(n),o=Math.floor(i),l=a+1,c=o+1,f=t/a,d=e/o,u=[],g=[],y=[],M=[];for(let h=0;h<c;h++){let p=h*d-r;for(let E=0;E<l;E++){let T=E*f-s;g.push(T,-p,0),y.push(0,0,1),M.push(E/a),M.push(1-h/o)}}for(let h=0;h<o;h++)for(let p=0;p<a;p++){let E=p+l*h,T=p+l*(h+1),S=p+1+l*(h+1),A=p+1+l*h;u.push(E,T,A),u.push(T,S,A)}this.setIndex(u),this.setAttribute("position",new ne(g,3)),this.setAttribute("normal",new ne(y,3)),this.setAttribute("uv",new ne(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gi(t.width,t.height,t.widthSegments,t.heightSegments)}}class Sn extends Oe{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,r=0,a=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let o=Math.min(r+a,Math.PI),l=0,c=[],f=new G,d=new G,u=[],g=[],y=[],M=[];for(let h=0;h<=n;h++){let p=[],E=h/n,T=r+E*a,S=t*Math.cos(T),A=Math.sqrt(t*t-S*S),R=0;if(h===0&&r===0)R=0.5/e;else if(h===n&&o===Math.PI)R=-0.5/e;for(let m=0;m<=e;m++){let v=m/e,C=i+v*s;f.x=-A*Math.cos(C),f.y=S,f.z=A*Math.sin(C),g.push(f.x,f.y,f.z),d.copy(f).normalize(),y.push(d.x,d.y,d.z),M.push(v+R,1-E),p.push(l++)}c.push(p)}for(let h=0;h<n;h++)for(let p=0;p<e;p++){let E=c[h][p+1],T=c[h][p],S=c[h+1][p],A=c[h+1][p+1];if(h!==0||r>0)u.push(E,T,A);if(h!==n-1||o<Math.PI)u.push(T,S,A)}this.setIndex(u),this.setAttribute("position",new ne(g,3)),this.setAttribute("normal",new ne(y,3)),this.setAttribute("uv",new ne(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ki extends Oe{constructor(t=1,e=0.4,n=12,i=48,s=Math.PI*2,r=0,a=Math.PI*2){super();this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s,thetaStart:r,thetaLength:a},n=Math.floor(n),i=Math.floor(i);let o=[],l=[],c=[],f=[],d=new G,u=new G,g=new G;for(let y=0;y<=n;y++){let M=r+y/n*a;for(let h=0;h<=i;h++){let p=h/i*s;u.x=(t+e*Math.cos(M))*Math.cos(p),u.y=(t+e*Math.cos(M))*Math.sin(p),u.z=e*Math.sin(M),l.push(u.x,u.y,u.z),d.x=t*Math.cos(p),d.y=t*Math.sin(p),g.subVectors(u,d).normalize(),c.push(g.x,g.y,g.z),f.push(h/i),f.push(y/n)}}for(let y=1;y<=n;y++)for(let M=1;M<=i;M++){let h=(i+1)*y+M-1,p=(i+1)*(y-1)+M-1,E=(i+1)*(y-1)+M,T=(i+1)*y+M;o.push(h,p,T),o.push(p,E,T)}this.setIndex(o),this.setAttribute("position",new ne(l,3)),this.setAttribute("normal",new ne(c,3)),this.setAttribute("uv",new ne(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ki(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}function Jn(t){let e={};for(let n in t){e[n]={};for(let i in t[n]){let s=t[n][i];if(wo(s))if(s.isRenderTargetTexture)It("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null;else e[n][i]=s.clone();else if(Array.isArray(s))if(wo(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[n][i]=r}else e[n][i]=s.slice();else e[n][i]=s}}return e}function we(t){let e={};for(let n=0;n<t.length;n++){let i=Jn(t[n]);for(let s in i)e[s]=i[s]}return e}function wo(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function th(t){let e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Ca(t){let e=t.getRenderTarget();if(e===null)return t.outputColorSpace;if(e.isXRRenderTarget===!0)return e.texture.colorSpace;return Ht.workingColorSpace}var Ul={clone:Jn,merge:we},eh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mn extends Zn{constructor(t){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=eh,this.fragmentShader=nh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0)this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Jn(t.uniforms),this.uniformsGroups=th(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let r=this.uniforms[i].value;if(r&&r.isTexture)e.uniforms[i]={type:"t",value:r.toJSON(t).uuid};else if(r&&r.isColor)e.uniforms[i]={type:"c",value:r.getHex()};else if(r&&r.isVector2)e.uniforms[i]={type:"v2",value:r.toArray()};else if(r&&r.isVector3)e.uniforms[i]={type:"v3",value:r.toArray()};else if(r&&r.isVector4)e.uniforms[i]={type:"v4",value:r.toArray()};else if(r&&r.isMatrix3)e.uniforms[i]={type:"m3",value:r.toArray()};else if(r&&r.isMatrix4)e.uniforms[i]={type:"m4",value:r.toArray()};else e.uniforms[i]={value:r}}if(Object.keys(this.defines).length>0)e.defines=this.defines;e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)if(this.extensions[i]===!0)n[i]=!0;if(Object.keys(n).length>0)e.extensions=n;return e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new zt().setHex(i.value);break;case"v2":this.uniforms[n].value=new Wt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new G().fromArray(i.value);break;case"v4":this.uniforms[n].value=new ae().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Lt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new se().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0)this.defines=t.defines;if(t.vertexShader!==void 0)this.vertexShader=t.vertexShader;if(t.fragmentShader!==void 0)this.fragmentShader=t.fragmentShader;if(t.glslVersion!==void 0)this.glslVersion=t.glslVersion;if(t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];if(t.lights!==void 0)this.lights=t.lights;if(t.clipping!==void 0)this.clipping=t.clipping;return this}}class Ia extends Mn{constructor(t){super(t);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Os extends Zn{constructor(t){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Pa extends Zn{constructor(t){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class La extends Zn{constructor(t){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function ci(t,e){if(!t||t.constructor===e)return t;if(typeof e.BYTES_PER_ELEMENT==="number")return new e(t);return Array.prototype.slice.call(t)}function ds(t){return t!==void 0&&t.inTangents!==void 0&&t.outTangents!==void 0}class $n{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let r;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break t}r=e.length;break e}if(!(t>=s)){let a=e[1];if(t<a)n=2,s=a;for(let o=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===o)break;if(i=s,s=e[--n-1],t>=s)break t}r=n,n=0;break e}break n}while(n<r){let a=n+r>>>1;if(t<e[a])r=a;else n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let r=0;r!==i;++r)e[r]=n[s+r];return e}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class Na extends $n{constructor(t,e,n,i){super(t,e,n,i);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,r=t+1,a=i[s],o=i[r];if(a===void 0)switch(this.getSettings_().endingStart){case 2401:s=t,a=2*e-n;break;case 2402:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(o===void 0)switch(this.getSettings_().endingEnd){case 2401:r=t,o=2*n-e;break;case 2402:r=1,o=n+i[1]-i[0];break;default:r=t-1,o=e}let l=(n-e)*0.5,c=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(o-n),this._offsetPrev=s*c,this._offsetNext=r*c}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,u=this._weightNext,g=(n-e)/(i-e),y=g*g,M=y*g,h=-d*M+2*d*y-d*g,p=(1+d)*M+(-1.5-2*d)*y+(-0.5+d)*g+1,E=(-1-u)*M+(1.5+u)*y+0.5*g,T=u*M-u*y;for(let S=0;S!==a;++S)s[S]=h*r[c+S]+p*r[l+S]+E*r[o+S]+T*r[f+S];return s}}class Da extends $n{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=(n-e)/(i-e),f=1-c;for(let d=0;d!==a;++d)s[d]=r[l+d]*f+r[o+d]*c;return s}}class Ua extends $n{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class Fa extends $n{interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=this.inTangents,f=this.outTangents;if(!c||!f){let g=(n-e)/(i-e),y=1-g;for(let M=0;M!==a;++M)s[M]=r[l+M]*y+r[o+M]*g;return s}let d=a*2,u=t-1;for(let g=0;g!==a;++g){let y=r[l+g],M=r[o+g],h=u*d+g*2,p=f[h],E=f[h+1],T=t*d+g*2,S=c[T],A=c[T+1],R=sh(n,e,p,S,i);s[g]=Fl(R,y,E,A,M)}return s}}function Fl(t,e,n,i,s){let r=1-t;return r*r*r*e+3*r*r*t*n+3*r*t*t*i+t*t*t*s}function ih(t,e,n,i,s){let r=1-t;return 3*r*r*(n-e)+6*r*t*(i-n)+3*t*t*(s-i)}function sh(t,e,n,i,s){let r=(t-e)/(s-e);for(let a=0;a<8;a++){let o=Fl(r,e,n,i,s)-t;if(Math.abs(o)<0.0000000001)break;let l=ih(r,e,n,i,s);if(Math.abs(l)<0.0000000001)break;r=Math.max(0,Math.min(1,r-o/l))}return r}class We{constructor(t,e,n,i){if(t===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ci(e,this.TimeBufferType),this.values=ci(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ci(t.times,Array),values:ci(t.values,Array)};let i=t.getInterpolation();if(i!==t.DefaultInterpolation)n.interpolation=i;if(ds(t.settings))n.settings={inTangents:ci(t.settings.inTangents,Array),outTangents:ci(t.settings.outTangents,Array)}}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ua(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Da(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Na(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Fa(this.times,this.values,this.getValueSize(),t);if(this.settings)e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents;return e}setInterpolation(t){let e;switch(t){case 2300:e=this.InterpolantFactoryMethodDiscrete;break;case 2301:e=this.InterpolantFactoryMethodLinear;break;case 2302:e=this.InterpolantFactoryMethodSmooth;break;case 2303:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(n);return It("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t;if(ds(this.settings))Ro(this.settings.inTangents,t),Ro(this.settings.outTangents,t)}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;if(ds(this.settings))Co(this.settings.inTangents,t),Co(this.settings.outTangents,t)}return this}trim(t,e){let n=this.times,i=n.length,s=0,r=i-1;while(s!==i&&n[s]<t)++s;while(r!==-1&&n[r]>e)--r;if(++r,s!==0||r!==i){if(s>=r)r=Math.max(r,1),s=r-1;let a=this.getValueSize();this.times=n.slice(s,r),this.values=this.values.slice(s*a,r*a)}return this}validate(){let t=!0,e=this.getValueSize();if(e-Math.floor(e)!==0)Pt("KeyframeTrack: Invalid value size in track.",this),t=!1;let n=this.times,i=this.values,s=n.length;if(s===0)Pt("KeyframeTrack: Track is empty.",this),t=!1;let r=null;for(let a=0;a!==s;a++){let o=n[a];if(typeof o==="number"&&isNaN(o)){Pt("KeyframeTrack: Time is not a valid number.",this,a,o),t=!1;break}if(r!==null&&r>o){Pt("KeyframeTrack: Out of order keys.",this,a,o,r),t=!1;break}r=o}if(i!==void 0){if(Lc(i))for(let a=0,o=i.length;a!==o;++a){let l=i[a];if(isNaN(l)){Pt("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===2302,s=t.length-1,r=1;for(let a=1;a<s;++a){let o=!1,l=t[a],c=t[a+1];if(l!==c&&(a!==1||l!==t[0]))if(!i){let f=a*n,d=f-n,u=f+n;for(let g=0;g!==n;++g){let y=e[f+g];if(y!==e[d+g]||y!==e[u+g]){o=!0;break}}}else o=!0;if(o){if(a!==r){t[r]=t[a];let f=a*n,d=r*n;for(let u=0;u!==n;++u)e[d+u]=e[f+u]}++r}}if(s>0){t[r]=t[s];for(let a=s*n,o=r*n,l=0;l!==n;++l)e[o+l]=e[a+l];++r}if(r!==t.length)this.times=t.slice(0,r),this.values=e.slice(0,r*n);else this.times=t,this.values=e;return this}clone(){let t=this.times.slice(),e=this.values.slice(),i=new this.constructor(this.name,t,e);if(i.createInterpolant=this.createInterpolant,ds(this.settings))i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()};return i}}function Ro(t,e){for(let n=0,i=t.length;n!==i;n+=2)t[n]+=e}function Co(t,e){for(let n=0,i=t.length;n!==i;n+=2)t[n]*=e}We.prototype.ValueTypeName="";We.prototype.TimeBufferType=Float32Array;We.prototype.ValueBufferType=Float32Array;We.prototype.DefaultInterpolation=2301;class Kn extends We{constructor(t,e,n){super(t,e,n)}}Kn.prototype.ValueTypeName="bool";Kn.prototype.ValueBufferType=Array;Kn.prototype.DefaultInterpolation=2300;Kn.prototype.InterpolantFactoryMethodLinear=void 0;Kn.prototype.InterpolantFactoryMethodSmooth=void 0;class Oa extends We{constructor(t,e,n,i){super(t,e,n,i)}}Oa.prototype.ValueTypeName="color";class Ba extends We{constructor(t,e,n,i){super(t,e,n,i)}}Ba.prototype.ValueTypeName="number";class za extends $n{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=(n-e)/(i-e),l=t*a;for(let c=l+a;l!==c;l+=4)vn.slerpFlat(s,0,r,l-a,r,l,o);return s}}class Bs extends We{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new za(this.times,this.values,this.getValueSize(),t)}}Bs.prototype.ValueTypeName="quaternion";Bs.prototype.InterpolantFactoryMethodSmooth=void 0;class Qn extends We{constructor(t,e,n){super(t,e,n)}}Qn.prototype.ValueTypeName="string";Qn.prototype.ValueBufferType=Array;Qn.prototype.DefaultInterpolation=2300;Qn.prototype.InterpolantFactoryMethodLinear=void 0;Qn.prototype.InterpolantFactoryMethodSmooth=void 0;class Ga extends We{constructor(t,e,n,i){super(t,e,n,i)}}Ga.prototype.ValueTypeName="vector";class ka{constructor(t,e,n){let i=this,s=!1,r=0,a=0,o=void 0,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(c){if(a++,s===!1){if(i.onStart!==void 0)i.onStart(c,r,a)}s=!0},this.itemEnd=function(c){if(r++,i.onProgress!==void 0)i.onProgress(c,r,a);if(r===a){if(s=!1,i.onLoad!==void 0)i.onLoad()}},this.itemError=function(c){if(i.onError!==void 0)i.onError(c)},this.resolveURL=function(c){if(c=c.normalize("NFC"),o)return o(c);return c},this.setURLModifier=function(c){return o=c,this},this.addHandler=function(c,f){return l.push(c,f),this},this.removeHandler=function(c){let f=l.indexOf(c);if(f!==-1)l.splice(f,2);return this},this.getHandler=function(c){for(let f=0,d=l.length;f<d;f+=2){let u=l[f],g=l[f+1];if(u.global)u.lastIndex=0;if(u.test(c))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var Ol=new ka;class Ha{constructor(t){if(this.manager=t!==void 0?t:Ol,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}}Ha.DEFAULT_MATERIAL_NAME="__DEFAULT";class zs extends xe{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super();this.isLight=!0,this.type="Light",this.color=new zt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Gs extends zs{constructor(t,e,n){super(t,n);this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}var vr=new se,Io=new G,Po=new G;class Wa{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Wt(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hn,this._frameExtents=new Wt(1,1),this._viewportCount=1,this._viewports=[new ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Io.setFromMatrixPosition(t.matrixWorld),e.position.copy(Io),Po.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Po),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){vr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(vr,t.coordinateSystem,t.reversedDepth);let s=this._frameExtents,r=i?i.z/s.x:1,a=i?i.w/s.y:1,o=i?i.x/s.x:0,l=i?i.y/s.y:0;if(t.coordinateSystem===2001||t.reversedDepth)e.set(0.5*r,0,0,0.5*r+o,0,0.5*a,0,0.5*a+l,0,0,1,0,0,0,0,1);else e.set(0.5*r,0,0,0.5*r+o,0,0.5*a,0,0.5*a+l,0,0,0.5,0.5,0,0,0,1);e.multiply(vr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}var fs=new G,ps=new vn,Ke=new G;class ks extends xe{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){if(super.updateMatrixWorld(t),this.matrixWorld.decompose(fs,ps,Ke),Ke.x===1&&Ke.y===1&&Ke.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(fs,ps,Ke.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){if(super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(fs,ps,Ke),Ke.x===1&&Ke.y===1&&Ke.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(fs,ps,Ke.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var Cn=new G,Lo=new Wt,No=new Wt;class Le extends ks{constructor(t=50,e=1,n=0.1,i=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=0.5*this.getFilmHeight()/t;this.fov=ms*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Qs*0.5*this.fov);return 0.5*this.getFilmHeight()/t}getEffectiveFOV(){return ms*2*Math.atan(Math.tan(Qs*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Cn.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),e.set(Cn.x,Cn.y).multiplyScalar(-t/Cn.z),Cn.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),n.set(Cn.x,Cn.y).multiplyScalar(-t/Cn.z)}getViewSize(t,e){return this.getViewBounds(t,Lo,No),e.subVectors(No,Lo)}setViewOffset(t,e,n,i,s,r){if(this.aspect=t/e,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Qs*0.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-0.5*i,r=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:o,fullHeight:l}=r;s+=r.offsetX*i/o,e-=r.offsetY*n/l,i*=r.width/o,n*=r.height/l}let a=this.filmOffset;if(a!==0)s+=t*a/this.getFilmWidth();this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);if(e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null)e.object.view=Object.assign({},this.view);return e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Hs extends ks{constructor(t=-1,e=1,n=1,i=-1,s=0.1,r=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,r){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,r=n+t,a=i+e,o=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,r=s+l*this.view.width,a-=c*this.view.offsetY,o=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);if(e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null)e.object.view=Object.assign({},this.view);return e}}class Bl extends Wa{constructor(){super(new Hs(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class Ws extends zs{constructor(t,e){super(t,e);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.target=new xe,this.shadow=new Bl}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}var hi=-90,ui=1;class Hi extends xe{constructor(t,e,n){super();this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Le(hi,ui,t,e);i.layers=this.layers,this.add(i);let s=new Le(hi,ui,t,e);s.layers=this.layers,this.add(s);let r=new Le(hi,ui,t,e);r.layers=this.layers,this.add(r);let a=new Le(hi,ui,t,e);a.layers=this.layers,this.add(a);let o=new Le(hi,ui,t,e);o.layers=this.layers,this.add(o);let l=new Le(hi,ui,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,r,a,o]=e;for(let l of e)this.remove(l);if(t===2000)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(t===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;if(this.coordinateSystem!==t.coordinateSystem)this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem();let[s,r,a,o,l,c]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let M=!1;if(t.isWebGLRenderer===!0)M=t.state.buffers.depth.getReversed();else M=t.reversedDepthBuffer;if(t.setRenderTarget(n,0,i),M&&t.autoClear===!1)t.clearDepth();if(t.render(e,s),t.setRenderTarget(n,1,i),M&&t.autoClear===!1)t.clearDepth();if(t.render(e,r),t.setRenderTarget(n,2,i),M&&t.autoClear===!1)t.clearDepth();if(t.render(e,a),t.setRenderTarget(n,3,i),M&&t.autoClear===!1)t.clearDepth();if(t.render(e,o),t.setRenderTarget(n,4,i),M&&t.autoClear===!1)t.clearDepth();if(t.render(e,l),n.texture.mipmapsAutoUpdate=y,t.setRenderTarget(n,5,i),M&&t.autoClear===!1)t.clearDepth();t.render(e,c),t.setRenderTarget(f,d,u),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Va extends Le{constructor(t=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}}var Xa="\\[\\]\\.:\\/",rh=new RegExp("["+Xa+"]","g"),qa="[^"+Xa+"]",ah="[^"+Xa.replace("\\.","")+"]",oh=/((?:WC+[\/:])*)/.source.replace("WC",qa),lh=/(WCOD+)?/.source.replace("WCOD",ah),ch=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",qa),hh=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",qa),uh=new RegExp("^"+oh+lh+ch+hh+"$"),dh=["material","materials","bones","map"];class zl{constructor(t,e,n){let i=n||Jt.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];if(i!==void 0)i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class Jt{constructor(t,e,n){this.path=e,this.parsedPath=n||Jt.parseTrackName(e),this.node=Jt.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){if(!(t&&t.isAnimationObjectGroup))return new Jt(t,e,n);else return new Jt.Composite(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(rh,"")}static parseTrackName(t){let e=uh.exec(t);if(e===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);if(dh.indexOf(s)!==-1)n.nodeName=n.nodeName.substring(0,i),n.objectName=s}if(n.propertyName===null||n.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let r=0;r<s.length;r++){let a=s[r];if(a.name===e||a.uuid===e)return a;let o=n(a.children);if(o)return o}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,{objectName:n,propertyName:i,propertyIndex:s}=e;if(!t)t=Jt.findNode(this.rootNode,e.nodeName),this.node=t;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){It("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){Pt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Pt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Pt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let c=0;c<t.length;c++)if(t[c].name===l){l=c;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Pt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Pt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Pt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){Pt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let r=t[i];if(r===void 0){let l=e.nodeName;Pt("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;if(this.targetObject=t,t.isMaterial===!0)a=this.Versioning.NeedsUpdate;else if(t.isObject3D===!0)a=this.Versioning.MatrixWorldNeedsUpdate;let o=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Pt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Pt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(t.morphTargetDictionary[s]!==void 0)s=t.morphTargetDictionary[s]}o=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else if(r.fromArray!==void 0&&r.toArray!==void 0)o=this.BindingType.HasFromToArray,this.resolvedProperty=r;else if(Array.isArray(r))o=this.BindingType.EntireArray,this.resolvedProperty=r;else this.propertyName=i;this.getValue=this.GetterByBindingType[o],this.setValue=this.SetterByBindingTypeAndVersioning[o][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Jt.Composite=zl;Jt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Jt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Jt.prototype.GetterByBindingType=[Jt.prototype._getValue_direct,Jt.prototype._getValue_array,Jt.prototype._getValue_arrayElement,Jt.prototype._getValue_toArray];Jt.prototype.SetterByBindingTypeAndVersioning=[[Jt.prototype._setValue_direct,Jt.prototype._setValue_direct_setNeedsUpdate,Jt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Jt.prototype._setValue_array,Jt.prototype._setValue_array_setNeedsUpdate,Jt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Jt.prototype._setValue_arrayElement,Jt.prototype._setValue_arrayElement_setNeedsUpdate,Jt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Jt.prototype._setValue_fromArray,Jt.prototype._setValue_fromArray_setNeedsUpdate,Jt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var tm=new Float32Array(1);class Gl{static{this.prototype.isMatrix2=!0}constructor(t,e,n,i){if(this.elements=[1,0,0,1],t!==void 0)this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=i,this}}function Ya(t,e,n,i){let s=fh(i);switch(n){case 1021:return t*e;case 1028:return t*e/s.components*s.byteLength;case 1029:return t*e/s.components*s.byteLength;case 1030:return t*e*2/s.components*s.byteLength;case 1031:return t*e*2/s.components*s.byteLength;case 1022:return t*e*3/s.components*s.byteLength;case 1023:return t*e*4/s.components*s.byteLength;case 1033:return t*e*4/s.components*s.byteLength;case 33776:case 33777:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(t,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(t,8)*Math.max(e,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 37808:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(t/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(t/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function fh(t){switch(t){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));if(typeof window<"u")if(window.__THREE__)It("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="187";function lc(){let t=null,e=!1,n=null,i=null;function s(r,a){i=t.requestAnimationFrame(s),n(r,a)}return{start:function(){if(e===!0)return;if(n===null)return;if(t===null)return;i=t.requestAnimationFrame(s),e=!0},stop:function(){if(t!==null)t.cancelAnimationFrame(i);e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function ph(t){let e=new WeakMap;function n(o,l){let{array:c,usage:f}=o,d=c.byteLength,u=t.createBuffer();t.bindBuffer(l,u),t.bufferData(l,c,f),o.onUploadCallback();let g;if(c instanceof Float32Array)g=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)g=t.HALF_FLOAT;else if(c instanceof Uint16Array)if(o.isFloat16BufferAttribute)g=t.HALF_FLOAT;else g=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=t.SHORT;else if(c instanceof Uint32Array)g=t.UNSIGNED_INT;else if(c instanceof Int32Array)g=t.INT;else if(c instanceof Int8Array)g=t.BYTE;else if(c instanceof Uint8Array)g=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=t.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let{array:f,updateRanges:d}=l;if(t.bindBuffer(c,o),d.length===0)t.bufferSubData(c,0,f);else{d.sort((g,y)=>g.start-y.start);let u=0;for(let g=1;g<d.length;g++){let y=d[u],M=d[g];if(M.start<=y.start+y.count+1)y.count=Math.max(y.count,M.start+M.count-y.start);else++u,d[u]=M}d.length=u+1;for(let g=0,y=d.length;g<y;g++){let M=d[g];t.bufferSubData(c,M.start*f.BYTES_PER_ELEMENT,f,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){if(o.isInterleavedBufferAttribute)o=o.data;return e.get(o)}function r(o){if(o.isInterleavedBufferAttribute)o=o.data;let l=e.get(o);if(l)t.deleteBuffer(l.buffer),e.delete(o)}function a(o,l){if(o.isInterleavedBufferAttribute)o=o.data;if(o.isGLBufferAttribute){let f=e.get(o);if(!f||f.version<o.version)e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var mh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,_h=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Mh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Eh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Th=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ah=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Rh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ch=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ih=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,Ph=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Uh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Fh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Oh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Bh=`#define PI 3.141592653589793
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
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,zh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Gh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Yh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Zh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Jh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$h=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Kh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,eu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,nu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,iu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,su=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ru=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif
#include <lightprobes_pars_fragment>`,au=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,ou=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,uu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,du=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,fu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,pu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,mu=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gu=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,_u=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Su=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Eu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Au=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ru=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Iu=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Pu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Nu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Du=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ou=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Bu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ku=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Vu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ju=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$u=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Ku=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Qu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
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
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ju=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,td=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ed=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,nd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,id=`#ifdef USE_SKINNING
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
#endif`,sd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ad=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,od=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ld=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,cd=`#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
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
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,hd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ud=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`;var fd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,pd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,md=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_d=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,Sd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Md=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,bd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Ed=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Td=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ad=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Rd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Cd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Id=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Pd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ld=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Nd=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ud=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Fd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Od=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,zd=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
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
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,kd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
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
}`,Wd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vd=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,Yd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ot={alphahash_fragment:mh,alphahash_pars_fragment:gh,alphamap_fragment:_h,alphamap_pars_fragment:xh,alphatest_fragment:vh,alphatest_pars_fragment:yh,aomap_fragment:Sh,aomap_pars_fragment:Mh,batching_pars_vertex:bh,batching_vertex:Eh,begin_vertex:Th,beginnormal_vertex:Ah,bsdfs:wh,iridescence_fragment:Rh,bumpmap_pars_fragment:Ch,clipping_planes_fragment:Ih,clipping_planes_pars_fragment:Ph,clipping_planes_pars_vertex:Lh,clipping_planes_vertex:Nh,color_fragment:Dh,color_pars_fragment:Uh,color_pars_vertex:Fh,color_vertex:Oh,common:Bh,defaultnormal_vertex:zh,displacementmap_pars_vertex:Gh,displacementmap_vertex:kh,emissivemap_fragment:Hh,emissivemap_pars_fragment:Wh,colorspace_fragment:Vh,colorspace_pars_fragment:Xh,envmap_fragment:qh,envmap_common_pars_fragment:Yh,envmap_pars_fragment:Zh,envmap_pars_vertex:Jh,envmap_physical_pars_fragment:au,envmap_vertex:$h,fog_vertex:Kh,fog_pars_vertex:Qh,fog_fragment:jh,fog_pars_fragment:tu,gradientmap_pars_fragment:eu,lightmap_pars_fragment:nu,lights_lambert_fragment:iu,lights_lambert_pars_fragment:su,lights_pars_begin:ru,lights_toon_fragment:ou,lights_toon_pars_fragment:lu,lights_phong_fragment:cu,lights_phong_pars_fragment:hu,lights_physical_fragment:uu,lights_physical_pars_fragment:du,lights_fragment_begin:fu,lights_fragment_maps:pu,lights_fragment_end:mu,lightprobes_pars_fragment:gu,logdepthbuf_fragment:_u,logdepthbuf_pars_fragment:xu,logdepthbuf_pars_vertex:vu,logdepthbuf_vertex:yu,map_fragment:Su,map_pars_fragment:Mu,map_particle_fragment:bu,map_particle_pars_fragment:Eu,metalnessmap_fragment:Tu,metalnessmap_pars_fragment:Au,morphinstance_vertex:wu,morphcolor_vertex:Ru,morphnormal_vertex:Cu,morphtarget_pars_vertex:Iu,morphtarget_vertex:Pu,normal_fragment_begin:Lu,normal_fragment_maps:Nu,normal_pars_fragment:Du,normal_pars_vertex:Uu,normal_vertex:Fu,normalmap_pars_fragment:Ou,clearcoat_normal_fragment_begin:Bu,clearcoat_normal_fragment_maps:zu,clearcoat_pars_fragment:Gu,iridescence_pars_fragment:ku,opaque_fragment:Hu,packing:Wu,premultiplied_alpha_fragment:Vu,project_vertex:Xu,dithering_fragment:qu,dithering_pars_fragment:Yu,roughnessmap_fragment:Zu,roughnessmap_pars_fragment:Ju,shadowmap_pars_fragment:$u,shadowmap_pars_vertex:Ku,shadowmap_vertex:Qu,shadowmask_pars_fragment:ju,skinbase_vertex:td,skinning_pars_vertex:ed,skinning_vertex:nd,skinnormal_vertex:id,specularmap_fragment:sd,specularmap_pars_fragment:rd,tonemapping_fragment:ad,tonemapping_pars_fragment:od,transmission_fragment:ld,transmission_pars_fragment:cd,uv_pars_fragment:hd,uv_pars_vertex:ud,uv_vertex:dd,worldpos_vertex:fd,background_vert:pd,background_frag:md,backgroundCube_vert:gd,backgroundCube_frag:_d,cube_vert:xd,cube_frag:vd,depth_vert:yd,depth_frag:Sd,distance_vert:Md,distance_frag:bd,equirect_vert:Ed,equirect_frag:Td,linedashed_vert:Ad,linedashed_frag:wd,meshbasic_vert:Rd,meshbasic_frag:Cd,meshlambert_vert:Id,meshlambert_frag:Pd,meshmatcap_vert:Ld,meshmatcap_frag:Nd,meshnormal_vert:Dd,meshnormal_frag:Ud,meshphong_vert:Fd,meshphong_frag:Od,meshphysical_vert:Bd,meshphysical_frag:zd,meshtoon_vert:Gd,meshtoon_frag:kd,points_vert:Hd,points_frag:Wd,shadow_vert:Vd,shadow_frag:Xd,sprite_vert:qd,sprite_frag:Yd},pt={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Lt}},envmap:{envMap:{value:null},envMapRotation:{value:new Lt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Lt},normalScale:{value:new Wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0},uvTransform:{value:new Lt}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new Wt(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}}},rn={basic:{uniforms:we([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:Ot.meshbasic_vert,fragmentShader:Ot.meshbasic_frag},lambert:{uniforms:we([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new zt(0)},envMapIntensity:{value:1}}]),vertexShader:Ot.meshlambert_vert,fragmentShader:Ot.meshlambert_frag},phong:{uniforms:we([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphong_vert,fragmentShader:Ot.meshphong_frag},standard:{uniforms:we([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag},toon:{uniforms:we([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new zt(0)}}]),vertexShader:Ot.meshtoon_vert,fragmentShader:Ot.meshtoon_frag},matcap:{uniforms:we([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:Ot.meshmatcap_vert,fragmentShader:Ot.meshmatcap_frag},points:{uniforms:we([pt.points,pt.fog]),vertexShader:Ot.points_vert,fragmentShader:Ot.points_frag},dashed:{uniforms:we([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ot.linedashed_vert,fragmentShader:Ot.linedashed_frag},depth:{uniforms:we([pt.common,pt.displacementmap]),vertexShader:Ot.depth_vert,fragmentShader:Ot.depth_frag},normal:{uniforms:we([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:Ot.meshnormal_vert,fragmentShader:Ot.meshnormal_frag},sprite:{uniforms:we([pt.sprite,pt.fog]),vertexShader:Ot.sprite_vert,fragmentShader:Ot.sprite_frag},background:{uniforms:{uvTransform:{value:new Lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ot.background_vert,fragmentShader:Ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Lt}},vertexShader:Ot.backgroundCube_vert,fragmentShader:Ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ot.cube_vert,fragmentShader:Ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ot.equirect_vert,fragmentShader:Ot.equirect_frag},distance:{uniforms:we([pt.common,pt.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:Ot.distance_vert,fragmentShader:Ot.distance_frag},shadow:{uniforms:we([pt.lights,pt.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:Ot.shadow_vert,fragmentShader:Ot.shadow_frag}};rn.physical={uniforms:we([rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Lt},clearcoatNormalScale:{value:new Wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Lt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Lt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Lt},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Lt},transmissionSamplerSize:{value:new Wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Lt},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Lt},anisotropyVector:{value:new Wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Lt}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag};var Vs={r:0,b:0,g:0},Zd=new se,cc=new Lt;cc.set(-1,0,0,0,1,0,0,0,1);function Jd(t,e,n,i,s,r){let a=new zt(0),o=s===!0?0:1,l,c,f=null,d=0,u=null;function g(E){let T=E.isScene===!0?E.background:null;if(T&&T.isTexture){let S=E.backgroundBlurriness>0;T=e.get(T,S)}return T}function y(E){let T=!1,S=g(E);if(S===null)h(a,o);else if(S&&S.isColor)h(S,1),T=!0;let A=t.xr.getEnvironmentBlendMode();if(A==="additive")n.buffers.color.setClear(0,0,0,1,r);else if(A==="alpha-blend")n.buffers.color.setClear(0,0,0,0,r);if(t.autoClear||T)n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil)}function M(E,T){let S=g(T);if(S&&S.isCubeTexture){if(c===void 0)c=new He(new vi(1,1,1),new Mn({name:"BackgroundCubeMaterial",uniforms:Jn(rn.backgroundCube.uniforms),vertexShader:rn.backgroundCube.vertexShader,fragmentShader:rn.backgroundCube.fragmentShader,side:Ne,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,R,m){this.matrixWorld.copyPosition(m.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c);if(c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Zd.makeRotationFromEuler(T.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1)c.material.uniforms.backgroundRotation.value.premultiply(cc);if(c.material.toneMapped=Ht.getTransfer(S.colorSpace)!==jt,f!==S||d!==S.version||u!==t.toneMapping)c.material.needsUpdate=!0,f=S,d=S.version,u=t.toneMapping;c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null)}else if(S&&S.isTexture){if(l===void 0)l=new He(new Gi(2,2),new Mn({name:"BackgroundMaterial",uniforms:Jn(rn.background.uniforms),vertexShader:rn.background.vertexShader,fragmentShader:rn.background.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l);if(l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=Ht.getTransfer(S.colorSpace)!==jt,S.matrixAutoUpdate===!0)S.updateMatrix();if(l.material.uniforms.uvTransform.value.copy(S.matrix),f!==S||d!==S.version||u!==t.toneMapping)l.material.needsUpdate=!0,f=S,d=S.version,u=t.toneMapping;l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null)}}function h(E,T){E.getRGB(Vs,Ca(t)),n.buffers.color.setClear(Vs.r,Vs.g,Vs.b,T,r)}function p(){if(c!==void 0)c.geometry.dispose(),c.material.dispose(),c=void 0;if(l!==void 0)l.geometry.dispose(),l.material.dispose(),l=void 0}return{getClearColor:function(){return a},setClearColor:function(E,T=1){a.set(E),o=T,h(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(E){o=E,h(a,o)},render:y,addToRenderList:M,dispose:p}}function $d(t,e){let n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,a=!1;function o(P,B,Q,w,Y){let tt=!1,F=d(P,w,Q,B);if(r!==F)r=F,c(r.object);if(tt=g(P,w,Q,Y),tt)y(P,w,Q,Y);if(Y!==null)e.update(Y,t.ELEMENT_ARRAY_BUFFER);if(tt||a){if(a=!1,S(P,B,Q,w),Y!==null)t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer)}}function l(){return t.createVertexArray()}function c(P){return t.bindVertexArray(P)}function f(P){return t.deleteVertexArray(P)}function d(P,B,Q,w){let Y=w.wireframe===!0,tt=i[B.id];if(tt===void 0)tt={},i[B.id]=tt;let F=P.isInstancedMesh===!0?P.id:0,W=tt[F];if(W===void 0)W={},tt[F]=W;let O=W[Q.id];if(O===void 0)O={},W[Q.id]=O;let q=O[Y];if(q===void 0)q=u(l()),O[Y]=q;return q}function u(P){let B=[],Q=[],w=[];for(let Y=0;Y<n;Y++)B[Y]=0,Q[Y]=0,w[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:Q,attributeDivisors:w,object:P,attributes:{},index:null}}function g(P,B,Q,w){let Y=r.attributes,tt=B.attributes,F=0,W=Q.getAttributes();for(let O in W)if(W[O].location>=0){let nt=Y[O],dt=tt[O];if(dt===void 0){if(O==="instanceMatrix"&&P.instanceMatrix)dt=P.instanceMatrix;if(O==="instanceColor"&&P.instanceColor)dt=P.instanceColor}if(nt===void 0)return!0;if(nt.attribute!==dt)return!0;if(dt&&nt.data!==dt.data)return!0;F++}if(r.attributesNum!==F)return!0;if(r.index!==w)return!0;return!1}function y(P,B,Q,w){let Y={},tt=B.attributes,F=0,W=Q.getAttributes();for(let O in W)if(W[O].location>=0){let nt=tt[O];if(nt===void 0){if(O==="instanceMatrix"&&P.instanceMatrix)nt=P.instanceMatrix;if(O==="instanceColor"&&P.instanceColor)nt=P.instanceColor}let dt={};if(dt.attribute=nt,nt&&nt.data)dt.data=nt.data;Y[O]=dt,F++}r.attributes=Y,r.attributesNum=F,r.index=w}function M(){let P=r.newAttributes;for(let B=0,Q=P.length;B<Q;B++)P[B]=0}function h(P){p(P,0)}function p(P,B){let Q=r.newAttributes,w=r.enabledAttributes,Y=r.attributeDivisors;if(Q[P]=1,w[P]===0)t.enableVertexAttribArray(P),w[P]=1;if(Y[P]!==B)t.vertexAttribDivisor(P,B),Y[P]=B}function E(){let P=r.newAttributes,B=r.enabledAttributes;for(let Q=0,w=B.length;Q<w;Q++)if(B[Q]!==P[Q])t.disableVertexAttribArray(Q),B[Q]=0}function T(P,B,Q,w,Y,tt,F){if(F===!0)t.vertexAttribIPointer(P,B,Q,Y,tt);else t.vertexAttribPointer(P,B,Q,w,Y,tt)}function S(P,B,Q,w){M();let Y=w.attributes,tt=Q.getAttributes(),F=B.defaultAttributeValues;for(let W in tt){let O=tt[W];if(O.location>=0){let q=Y[W];if(q===void 0){if(W==="instanceMatrix"&&P.instanceMatrix)q=P.instanceMatrix;if(W==="instanceColor"&&P.instanceColor)q=P.instanceColor}if(q!==void 0){let nt=q.normalized,dt=q.itemSize,Z=e.get(q);if(Z===void 0)continue;let{buffer:j,type:_t,bytesPerElement:yt}=Z,wt=_t===t.INT||_t===t.UNSIGNED_INT||q.gpuType===Lr;if(q.isInterleavedBufferAttribute){let St=q.data,Zt=St.isInterleavedBuffer===!0?St.stride:St.itemSize,Bt=q.offset;if(St.isInstancedInterleavedBuffer||St.isInstancedBufferAttribute){for(let Ut=0;Ut<O.locationSize;Ut++)p(O.location+Ut,St.meshPerAttribute);if(P.isInstancedMesh!==!0&&w._maxInstanceCount===void 0)w._maxInstanceCount=St.meshPerAttribute*St.count}else for(let Ut=0;Ut<O.locationSize;Ut++)h(O.location+Ut);t.bindBuffer(t.ARRAY_BUFFER,j);for(let Ut=0;Ut<O.locationSize;Ut++)T(O.location+Ut,dt/O.locationSize,_t,nt,Zt*yt,(Bt+dt/O.locationSize*Ut)*yt,wt)}else{if(q.isInstancedBufferAttribute){for(let St=0;St<O.locationSize;St++)p(O.location+St,q.meshPerAttribute);if(P.isInstancedMesh!==!0&&w._maxInstanceCount===void 0)w._maxInstanceCount=q.meshPerAttribute*q.count}else for(let St=0;St<O.locationSize;St++)h(O.location+St);t.bindBuffer(t.ARRAY_BUFFER,j);for(let St=0;St<O.locationSize;St++)T(O.location+St,dt/O.locationSize,_t,nt,dt*yt,dt/O.locationSize*St*yt,wt)}}else if(F!==void 0){let nt=F[W];if(nt!==void 0)switch(nt.length){case 2:t.vertexAttrib2fv(O.location,nt);break;case 3:t.vertexAttrib3fv(O.location,nt);break;case 4:t.vertexAttrib4fv(O.location,nt);break;default:t.vertexAttrib1fv(O.location,nt)}}}}E()}function A(){C();for(let P in i){let B=i[P];for(let Q in B){let w=B[Q];for(let Y in w){let tt=w[Y];for(let F in tt)f(tt[F].object),delete tt[F];delete w[Y]}}delete i[P]}}function R(P){if(i[P.id]===void 0)return;let B=i[P.id];for(let Q in B){let w=B[Q];for(let Y in w){let tt=w[Y];for(let F in tt)f(tt[F].object),delete tt[F];delete w[Y]}}delete i[P.id]}function m(P){for(let B in i){let Q=i[B];for(let w in Q){let Y=Q[w];if(Y[P.id]===void 0)continue;let tt=Y[P.id];for(let F in tt)f(tt[F].object),delete tt[F];delete Y[P.id]}}}function v(P){for(let B in i){let Q=i[B],w=P.isInstancedMesh===!0?P.id:0,Y=Q[w];if(Y===void 0)continue;for(let tt in Y){let F=Y[tt];for(let W in F)f(F[W].object),delete F[W];delete Y[tt]}if(delete Q[w],Object.keys(Q).length===0)delete i[B]}}function C(){if(k(),a=!0,r===s)return;r=s,c(r.object)}function k(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:k,dispose:A,releaseStatesOfGeometry:R,releaseStatesOfObject:v,releaseStatesOfProgram:m,initAttributes:M,enableAttribute:h,disableUnusedAttributes:E}}function Kd(t,e,n){let i;function s(l){i=l}function r(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function a(l,c,f){if(f===0)return;t.drawArraysInstanced(i,l,c,f),n.update(c,i,f)}function o(l,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,f);let u=0;for(let g=0;g<f;g++)u+=c[g];n.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Qd(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let m=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(m.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(m){if(m!==_n&&i.convert(m)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function o(m){let v=m===nn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));if(m!==$e&&m!==gn&&!v&&i.convert(m)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))return!1;return!0}function l(m){if(m==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";m="mediump"}if(m==="mediump"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let c=n.precision!==void 0?n.precision:"highp",f=l(c);if(f!==c)It("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f;let d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=n.logarithmicDepthBuffer===!0&&d===!1;if(n.reversedDepthBuffer===!0&&d===!1)It("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");if(n.logarithmicDepthBuffer===!0&&d===!0)It("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let g=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=t.getParameter(t.MAX_TEXTURE_SIZE),h=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),E=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),T=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),A=t.getParameter(t.MAX_SAMPLES),R=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:g,maxVertexTextures:y,maxTextureSize:M,maxCubemapSize:h,maxAttributes:p,maxVertexUniforms:E,maxVaryings:T,maxFragmentUniforms:S,maxSamples:A,samples:R}}function jd(t){let e=this,n=null,i=0,s=!1,r=!1,a=new Qe,o=new Lt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let g=d.length!==0||u||i!==0||s;return s=u,i=d.length,g},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){n=f(d,u,0)},this.setState=function(d,u,g){let{clippingPlanes:y,clipIntersection:M,clipShadows:h}=d,p=t.get(d);if(!s||y===null||y.length===0||r&&!h)if(r)f(null);else c();else{let E=r?0:i,T=E*4,S=p.clippingState||null;l.value=S,S=f(y,u,T,g);for(let A=0;A!==T;++A)S[A]=n[A];p.clippingState=S,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=E}};function c(){if(l.value!==n)l.value=n,l.needsUpdate=i>0;e.numPlanes=i,e.numIntersection=0}function f(d,u,g,y){let M=d!==null?d.length:0,h=null;if(M!==0){if(h=l.value,y!==!0||h===null){let p=g+M*4,E=u.matrixWorldInverse;if(o.getNormalMatrix(E),h===null||h.length<p)h=new Float32Array(p);for(let T=0,S=g;T!==M;++T,S+=4)a.copy(d[T]).applyMatrix4(E,o),a.normal.toArray(h,S),h[S+3]=a.constant}l.value=h,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,h}}class Ys extends ke{constructor(t=1,e={}){super(t,t,e);this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Ds(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new vi(5,5,5),s=new Mn({name:"CubemapFromEquirect",uniforms:Jn(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ne,blending:Wn});s.uniforms.tEquirect.value=e;let r=new He(i,s),a=e.minFilter;if(e.minFilter===Pn)e.minFilter=Ge;return new Hi(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(s)}}var kl=256,tf=3,ef=20,hc=256,uc=16,nf=3,sf=new G,rf=new zt;class qs{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Hi(1,10,null),this._boxMesh=new He(new vi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=0.1,i=100,s={}){let{size:r=256,position:a=sf}=s,o=this._renderer;this._setSize(r);let l=this._allocateTarget(),c=this._getSourceTarget(!0);if(e>0)c.texture.mipmapsAutoUpdate=!1;let{autoClear:f,autoClearColor:d,autoClearDepth:u,autoClearStencil:g}=o,y=t.background;if(o.autoClear=!0,o.autoClearColor=!0,o.autoClearDepth=!0,o.autoClearStencil=!0,y===null)t.background=o.getClearColor(rf);let M=new Hi(n,i,c);if(M.position.copy(a),M.update(o,t),o.autoClear=f,o.autoClearColor=d,o.autoClearDepth=u,o.autoClearStencil=g,t.background=y,e>0)c.texture.mipmapsAutoUpdate=!0,this._blur(l,e);return this._applyPMREM(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=Vl(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=Wl(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._sourceTarget!==null)this._sourceTarget.dispose();if(this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._integrationMaterial!==null)this._integrationMaterial.dispose();this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(kl,Nl(t))}_fromTexture(t,e){if(t.mapping===Ii||t.mapping===_i)this._setSize(t.image.length===0?kl:t.image[0].width||t.image[0].image.width);else this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=Hl(t,!1,!1),n=Math.log2(t)-tf;for(let i=0;i<=n;i++)e.texture.mipmaps.push({width:t>>i,height:t>>i});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;if(n===null||n.width!==e||t&&n.depthBuffer===!1){if(n!==null)n.dispose();this._sourceTarget=Hl(e,!0,t)}return this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let i=this._boxMesh,s=this._cubeCamera;i.material=n,s.renderTarget=t,s.activeMipmapLevel=e;let r=t.width>>e;t.viewport.set(0,0,r,r),s.update(this._renderer,i),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;if(t.mapping===Ii||t.mapping===_i){if(this._cubemapMaterial===null)this._cubemapMaterial=Vl();e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1}else{if(this._equirectMaterial===null)this._equirectMaterial=Wl();e=this._equirectMaterial}e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){if(this._ggxMaterial===null)this._ggxMaterial=af(),this._integrationMaterial=of();let e=this._cubeSize,n=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(e/uc);for(let r=0;r<=n;r++){let a=qs.lodToRoughness(r,n);if(r>n-nf)s.roughness.value=a,this._renderCube(t,r,this._integrationMaterial);else{let o=a>0?Math.log2(e)+0.5*Math.log2(6/(hc*Math.pow(a,4)))+0.5:0;i.roughness.value=a,i.lodBias.value=o,this._renderCube(t,r,this._ggxMaterial)}}}_blur(t,e){if(this._blurMaterial===null)this._blurMaterial=lf();let n=this._blurMaterial,i=n.uniforms,s=this._sourceTarget;i.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,i.envMap.value=s.texture,this._renderCube(t,0,n),i.envMap.value=t.texture,this._renderCube(s,0,n)}}function Hl(t,e,n){return new Ys(t,{minFilter:Pn,generateMipmaps:e,type:nn,colorSpace:ma,depthBuffer:n})}function qi(t,e,n){return new Mn({name:t,uniforms:e,vertexShader:Ot.cube_vert,fragmentShader:n,side:Ne,blending:Wn,depthTest:!1,depthWrite:!1})}function af(){return qi("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${hc}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function of(){return qi("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:uc}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function lf(){return qi("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${ef}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Wl(){return qi("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Vl(){return qi("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function cf(t){let e=new WeakMap,n=new WeakMap,i=null;function s(u,g=!1){if(u===null||u===void 0)return null;if(g)return a(u);return r(u)}function r(u){if(u&&u.isTexture){let g=u.mapping;if(g===_s||g===xs)if(e.has(u)){let y=e.get(u).texture;return o(y,u.mapping)}else{let y=u.image;if(y&&y.height>0){let M=new Ys(y.height);return M.fromEquirectangularTexture(t,u),e.set(u,M),u.addEventListener("dispose",c),o(M.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let g=u.mapping,y=g===_s||g===xs,M=g===Ii||g===_i;if(y||M){let h=n.get(u),p=h!==void 0?h.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p){if(i===null)i=new qs(t);return h=y?i.fromEquirectangular(u,h):i.fromCubemap(u,h),h.texture.pmremVersion=u.pmremVersion,n.set(u,h),h.texture}else if(h!==void 0)return h.texture;else{let E=u.image;if(y&&E&&E.height>0||M&&E&&l(E)){if(i===null)i=new qs(t);return h=y?i.fromEquirectangular(u):i.fromCubemap(u),h.texture.pmremVersion=u.pmremVersion,n.set(u,h),u.addEventListener("dispose",f),h.texture}else return null}}}return u}function o(u,g){if(g===_s)u.mapping=Ii;else if(g===xs)u.mapping=_i;return u}function l(u){let g=0,y=6;for(let M=0;M<y;M++)if(u[M]!==void 0)g++;return g===y}function c(u){let g=u.target;g.removeEventListener("dispose",c);let y=e.get(g);if(y!==void 0)e.delete(g),y.dispose()}function f(u){let g=u.target;g.removeEventListener("dispose",f);let y=n.get(g);if(y!==void 0)n.delete(g),y.dispose()}function d(){if(e=new WeakMap,n=new WeakMap,i!==null)i.dispose(),i=null}return{get:s,dispose:d}}function hf(t){let e={};function n(i){if(e[i]!==void 0)return e[i];let s=t.getExtension(i);return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);if(s===null)Ai("WebGLRenderer: "+i+" extension not supported.");return s}}}function uf(t,e,n,i){let s={},r=new WeakMap,a=new FinalizationRegistry((y)=>delete s[y]);function o(y){l(y.target)}function l(y){if(y.index!==null)e.remove(y.index);for(let h in y.attributes)e.remove(y.attributes[h]);y.removeEventListener("dispose",o),delete s[y.id],a.unregister(y);let M=r.get(y);if(M)e.remove(M),r.delete(y);if(i.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0)delete y._maxInstanceCount;n.memory.geometries--}function c(y,M){if(s[M.id]!==void 0)return M;return M.addEventListener("dispose",o),s[M.id]=new WeakRef(M),a.register(M,M.id,M),n.memory.geometries++,M}function f(y){let M=y.attributes;for(let h in M)e.update(M[h],t.ARRAY_BUFFER)}function d(y){let M=y.index,h=y.attributes.position,p=0;if(h===void 0)return;let E=M!==null?M.array.length:h.array.length/3-1,S=new(h.count>=65535?Ls:Ps)(Math.ceil(E/3)*6,1),A=S.array;if(M!==null){let m=M.array;p=M.version;for(let v=0,C=0;v<E;v+=3){let k=m[v+0],P=m[v+1],B=m[v+2];A[C++]=k,A[C++]=P,A[C++]=P,A[C++]=B,A[C++]=B,A[C++]=k}}else{p=h.version;for(let m=0,v=0;m<E;m+=3){let C=m+0,k=m+1,P=m+2;A[v++]=C,A[v++]=k,A[v++]=k,A[v++]=P,A[v++]=P,A[v++]=C}}S.version=p;let R=r.get(y);if(R)e.remove(R);r.set(y,S)}function u(y){let M=r.get(y);if(M){let h=y.index;if(h!==null){if(M.version<h.version)d(y)}}else d(y);return r.get(y)}function g(){for(let y in s){let M=s[y].deref();if(M!==void 0)l(M)}}return{get:c,update:f,getWireframeAttribute:u,dispose:g}}function df(t,e,n){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){t.drawElements(i,u,r,d*a),n.update(u,i,1)}function c(d,u,g){if(g===0)return;t.drawElementsInstanced(i,u,r,d*a,g),n.update(u,i,g)}function f(d,u,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,g);let M=0;for(let h=0;h<g;h++)M+=u[h];n.update(M,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function ff(t){let e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(r/3);break;case t.LINES:n.lines+=o*(r/2);break;case t.LINE_STRIP:n.lines+=o*(r-1);break;case t.LINE_LOOP:n.lines+=o*r;break;case t.POINTS:n.points+=o*r;break;default:Pt("WebGLInfo: Unknown draw mode:",a);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function pf(t,e,n){let i=new WeakMap,s=new ae;function r(a,o,l){let c=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=f!==void 0?f.length:0,u=i.get(o);if(u===void 0||u.count!==d){let C=function(){m.dispose(),i.delete(o),o.removeEventListener("dispose",C)};if(u!==void 0)u.texture.dispose();let g=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],E=o.morphAttributes.color||[],T=0;if(g===!0)T=1;if(y===!0)T=2;if(M===!0)T=3;let S=o.attributes.position.count*T,A=1;if(S>e.maxTextureSize)A=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize;let R=new Float32Array(S*A*4*d),m=new Rs(R,S,A,d);m.type=gn,m.needsUpdate=!0;let v=T*4;for(let k=0;k<d;k++){let P=h[k],B=p[k],Q=E[k],w=S*A*4*k;for(let Y=0;Y<P.count;Y++){let tt=Y*v;if(g===!0)s.fromBufferAttribute(P,Y),R[w+tt+0]=s.x,R[w+tt+1]=s.y,R[w+tt+2]=s.z,R[w+tt+3]=0;if(y===!0)s.fromBufferAttribute(B,Y),R[w+tt+4]=s.x,R[w+tt+5]=s.y,R[w+tt+6]=s.z,R[w+tt+7]=0;if(M===!0)s.fromBufferAttribute(Q,Y),R[w+tt+8]=s.x,R[w+tt+9]=s.y,R[w+tt+10]=s.z,R[w+tt+11]=Q.itemSize===4?s.w:1}}u={count:d,texture:m,size:new Wt(S,A)},i.set(o,u),o.addEventListener("dispose",C)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let g=0;for(let M=0;M<c.length;M++)g+=c[M];let y=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",u.size)}return{update:r}}function mf(t,e,n,i,s){let r=new WeakMap;function a(c){let f=s.render.frame,d=c.geometry,u=e.get(c,d);if(r.get(u)!==f)e.update(u),r.set(u,f);if(c.isInstancedMesh){if(c.hasEventListener("dispose",l)===!1)c.addEventListener("dispose",l);if(r.get(c)!==f){if(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null)n.update(c.instanceColor,t.ARRAY_BUFFER);r.set(c,f)}}if(c.isSkinnedMesh){let g=c.skeleton;if(r.get(g)!==f)g.update(),r.set(g,f)}return u}function o(){r=new WeakMap}function l(c){let f=c.target;if(f.removeEventListener("dispose",l),i.releaseStatesOfObject(f),n.remove(f.instanceMatrix),f.instanceColor!==null)n.remove(f.instanceColor)}return{update:a,dispose:o}}var gf={[Tr]:"LINEAR_TONE_MAPPING",[Ar]:"REINHARD_TONE_MAPPING",[wr]:"CINEON_TONE_MAPPING",[Rr]:"ACES_FILMIC_TONE_MAPPING",[Ir]:"AGX_TONE_MAPPING",[Pr]:"NEUTRAL_TONE_MAPPING",[Cr]:"CUSTOM_TONE_MAPPING"};function _f(t,e,n,i,s,r){let a=new ke(e,n,{type:t,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,f=new Oe;f.setAttribute("position",new ne([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new ne([0,2,0,0,2,0],2));let d=new Ia({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new He(f,d),g=new Hs(-1,1,1,-1,0,1),y=null,M=null,h=!1,p,E=null,T=[],S=!1;this.setSize=function(A,R){if(a.setSize(A,R),o!==null)o.setSize(A,R);if(l!==null)l.setSize(A,R);for(let m=0;m<T.length;m++){let v=T[m];if(v.setSize)v.setSize(A,R)}},this.setEffects=function(A){T=A,S=T.length>0&&T[0].isRenderPass===!0;let{width:R,height:m}=a;if(T.length>0&&o===null)o=new ke(R,m,{type:nn,depthBuffer:!1,stencilBuffer:!1}),l=new ke(R,m,{type:nn,depthBuffer:!1,stencilBuffer:!1});let v=s===!0&&T.some((C)=>C.needsDepthTexture===!0);if(v!==(a.depthTexture!==null)){if(v===!0&&c===null){if(c=new Dn(R,m),r===!0)c.format=Nn,c.type=Vn}a.dispose(),a.depthTexture=v?c:null,a.resolveDepthBuffer=v,a.storeMultisampledDepthBuffer=v}for(let C=0;C<T.length;C++){let k=T[C];if(k.setSize)k.setSize(R,m);if(v&&k.needsDepthTexture===!0&&k.setDepthTexture)k.setDepthTexture(c)}},this.begin=function(A,R){if(h)return!1;if(A.toneMapping===en&&T.length===0)return!1;if(E=R,R!==null){let{width:m,height:v}=R;if(a.width!==m||a.height!==v)this.setSize(m,v)}if(S===!1)A.setRenderTarget(a);return p=A.toneMapping,A.toneMapping=en,!0},this.hasRenderPass=function(){return S},this.end=function(A,R){A.toneMapping=p,h=!0;let m=a,v=o;for(let C=0;C<T.length;C++){let k=T[C];if(k.enabled===!1)continue;if(k.render(A,v,m,R),k.needsSwap!==!1)m=v,v=v===o?l:o}if(y!==A.outputColorSpace||M!==A.toneMapping){if(y=A.outputColorSpace,M=A.toneMapping,d.defines={},Ht.getTransfer(y)===jt)d.defines.SRGB_TRANSFER="";let C=gf[M];if(C)d.defines[C]="";d.needsUpdate=!0}d.uniforms.tDiffuse.value=m.texture,A.setRenderTarget(E),A.render(u,g),E=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){if(a.dispose(),o!==null)o.dispose();if(l!==null)l.dispose();f.dispose(),d.dispose()}}var dc=new Ae,fc=new Dn(1,1),pc=new Us(1),mc=new Rs,gc=new Aa,_c=new Ds,Xl=[],ql=[],Yl=new Float32Array(16),Zl=new Float32Array(9),Jl=new Float32Array(4);function yi(t,e,n){let i=t[0];if(i<=0||i>0)return t;let s=e*n,r=Xl[s];if(r===void 0)r=new Float32Array(s),Xl[s]=r;if(e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(r,o)}return r}function de(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function fe(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Zs(t,e){let n=ql[e];if(n===void 0)n=new Int32Array(e),ql[e]=n;for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function xf(t,e){let n=this.cache;if(n[0]===e)return;t.uniform1f(this.addr,e),n[0]=e}function vf(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y)t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y}else{if(de(n,e))return;t.uniform2fv(this.addr,e),fe(n,e)}}function yf(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z}else if(e.r!==void 0){if(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b}else{if(de(n,e))return;t.uniform3fv(this.addr,e),fe(n,e)}}function Sf(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w}else{if(de(n,e))return;t.uniform4fv(this.addr,e),fe(n,e)}}function Mf(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(de(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),fe(n,e)}else{if(de(n,i))return;Jl.set(i),t.uniformMatrix2fv(this.addr,!1,Jl),fe(n,i)}}function bf(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(de(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),fe(n,e)}else{if(de(n,i))return;Zl.set(i),t.uniformMatrix3fv(this.addr,!1,Zl),fe(n,i)}}function Ef(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(de(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),fe(n,e)}else{if(de(n,i))return;Yl.set(i),t.uniformMatrix4fv(this.addr,!1,Yl),fe(n,i)}}function Tf(t,e){let n=this.cache;if(n[0]===e)return;t.uniform1i(this.addr,e),n[0]=e}function Af(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y)t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y}else{if(de(n,e))return;t.uniform2iv(this.addr,e),fe(n,e)}}function wf(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z}else{if(de(n,e))return;t.uniform3iv(this.addr,e),fe(n,e)}}function Rf(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w}else{if(de(n,e))return;t.uniform4iv(this.addr,e),fe(n,e)}}function Cf(t,e){let n=this.cache;if(n[0]===e)return;t.uniform1ui(this.addr,e),n[0]=e}function If(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y)t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y}else{if(de(n,e))return;t.uniform2uiv(this.addr,e),fe(n,e)}}function Pf(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z}else{if(de(n,e))return;t.uniform3uiv(this.addr,e),fe(n,e)}}function Lf(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w}else{if(de(n,e))return;t.uniform4uiv(this.addr,e),fe(n,e)}}function Js(t){if(t.version===0)t.compareFunction=va,t.needsUpdate=!0;return t}function Nf(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;let r;if(this.type===t.SAMPLER_2D_SHADOW)r=Js(fc);else r=dc;n.setTexture2D(e||r,s)}function Df(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;n.setTexture3D(e||gc,s)}function Uf(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;let r;if(this.type===t.SAMPLER_CUBE_SHADOW)r=Js(pc);else r=_c;n.setTextureCube(e||r,s)}function Ff(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;n.setTexture2DArray(e||mc,s)}function Of(t){switch(t){case 5126:return xf;case 35664:return vf;case 35665:return yf;case 35666:return Sf;case 35674:return Mf;case 35675:return bf;case 35676:return Ef;case 5124:case 35670:return Tf;case 35667:case 35671:return Af;case 35668:case 35672:return wf;case 35669:case 35673:return Rf;case 5125:return Cf;case 36294:return If;case 36295:return Pf;case 36296:return Lf;case 35678:case 36198:case 36298:case 36306:case 35682:return Nf;case 35679:case 36299:case 36307:return Df;case 35680:case 36300:case 36308:case 36293:return Uf;case 36289:case 36303:case 36311:case 36292:return Ff}}function Bf(t,e){t.uniform1fv(this.addr,e)}function zf(t,e){let n=yi(e,this.size,2);t.uniform2fv(this.addr,n)}function Gf(t,e){let n=yi(e,this.size,3);t.uniform3fv(this.addr,n)}function kf(t,e){let n=yi(e,this.size,4);t.uniform4fv(this.addr,n)}function Hf(t,e){let n=yi(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Wf(t,e){let n=yi(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Vf(t,e){let n=yi(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Xf(t,e){t.uniform1iv(this.addr,e)}function qf(t,e){t.uniform2iv(this.addr,e)}function Yf(t,e){t.uniform3iv(this.addr,e)}function Zf(t,e){t.uniform4iv(this.addr,e)}function Jf(t,e){t.uniform1uiv(this.addr,e)}function $f(t,e){t.uniform2uiv(this.addr,e)}function Kf(t,e){t.uniform3uiv(this.addr,e)}function Qf(t,e){t.uniform4uiv(this.addr,e)}function jf(t,e,n){let i=this.cache,s=e.length,r=Zs(n,s);if(!de(i,r))t.uniform1iv(this.addr,r),fe(i,r);let a;if(this.type===t.SAMPLER_2D_SHADOW)a=Js(fc);else a=dc;for(let o=0;o!==s;++o)n.setTexture2D(e[o]||a,r[o])}function tp(t,e,n){let i=this.cache,s=e.length,r=Zs(n,s);if(!de(i,r))t.uniform1iv(this.addr,r),fe(i,r);for(let a=0;a!==s;++a)n.setTexture3D(e[a]||gc,r[a])}function ep(t,e,n){let i=this.cache,s=e.length,r=Zs(n,s);if(!de(i,r))t.uniform1iv(this.addr,r),fe(i,r);let a;if(this.type===t.SAMPLER_CUBE_SHADOW)a=Js(pc);else a=_c;for(let o=0;o!==s;++o)n.setTextureCube(e[o]||a,r[o])}function np(t,e,n){let i=this.cache,s=e.length,r=Zs(n,s);if(!de(i,r))t.uniform1iv(this.addr,r),fe(i,r);for(let a=0;a!==s;++a)n.setTexture2DArray(e[a]||mc,r[a])}function ip(t){switch(t){case 5126:return Bf;case 35664:return zf;case 35665:return Gf;case 35666:return kf;case 35674:return Hf;case 35675:return Wf;case 35676:return Vf;case 5124:case 35670:return Xf;case 35667:case 35671:return qf;case 35668:case 35672:return Yf;case 35669:case 35673:return Zf;case 5125:return Jf;case 36294:return $f;case 36295:return Kf;case 36296:return Qf;case 35678:case 36198:case 36298:case 36306:case 35682:return jf;case 35679:case 36299:case 36307:return tp;case 35680:case 36300:case 36308:case 36293:return ep;case 36289:case 36303:case 36311:case 36292:return np}}class xc{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Of(e.type)}}class vc{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ip(e.type)}}class yc{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,r=i.length;s!==r;++s){let a=i[s];a.setValue(t,e[a.id],n)}}}var Za=/(\w+)(\])?(\[|\.)?/g;function $l(t,e){t.seq.push(e),t.map[e.id]=e}function sp(t,e,n){let i=t.name,s=i.length;Za.lastIndex=0;while(!0){let r=Za.exec(i),a=Za.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l)o=o|0;if(c===void 0||c==="["&&a+2===s){$l(n,c===void 0?new xc(o,t,e):new vc(o,t,e));break}else{let d=n.map[o];if(d===void 0)d=new yc(o),$l(n,d);n=d}}}class Xi{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let a=t.getActiveUniform(e,r),o=t.getUniformLocation(e,a.name);sp(a,o,this)}let i=[],s=[];for(let r of this.seq)if(r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW)i.push(r);else s.push(r);if(i.length>0)this.seq=i.concat(s)}setValue(t,e,n,i){let s=this.map[e];if(s!==void 0)s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];if(i!==void 0)this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,r=e.length;s!==r;++s){let a=e[s],o=n[a.id];if(o.needsUpdate!==!1)a.setValue(t,o.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let r=t[i];if(r.id in e)n.push(r)}return n}}function Kl(t,e,n){let i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}var rp=37297,ap=0;function op(t,e){let n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}var Ql=new Lt;function lp(t){Ht._getMatrix(Ql,Ht.workingColorSpace,t);let e=`mat3( ${Ql.elements.map((n)=>n.toFixed(4))} )`;switch(Ht.getTransfer(t)){case ga:return[e,"LinearTransferOETF"];case jt:return[e,"sRGBTransferOETF"];default:return It("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function jl(t,e,n){let i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return n.toUpperCase()+`

`+r+`

`+op(t.getShaderSource(e),o)}else return r}function cp(t,e){let n=lp(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var hp={[Tr]:"Linear",[Ar]:"Reinhard",[wr]:"Cineon",[Rr]:"ACESFilmic",[Ir]:"AgX",[Pr]:"Neutral",[Cr]:"Custom"};function up(t,e){let n=hp[e];if(n===void 0)return It("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var Xs=new G;function dp(){Ht.getLuminanceCoefficients(Xs);let t=Xs.x.toFixed(4),e=Xs.y.toFixed(4),n=Xs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function fp(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vi).join(`
`)}function pp(t){let e=[];for(let n in t){let i=t[n];if(i===!1)continue;e.push("#define "+n+" "+i)}return e.join(`
`)}function mp(t,e){let n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=t.getActiveAttrib(e,s),a=r.name,o=1;if(r.type===t.FLOAT_MAT2)o=2;if(r.type===t.FLOAT_MAT3)o=3;if(r.type===t.FLOAT_MAT4)o=4;n[a]={type:r.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Vi(t){return t!==""}function tc(t,e){let n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function ec(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var gp=/^[ \t]*#include +<([\w\d./]+)>/gm;function $a(t){return t.replace(gp,_p)}function _p(t,e){let n=Ot[e];if(n===void 0)throw Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return $a(n)}var xp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nc(t){return t.replace(xp,vp)}function vp(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ic(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;if(t.precision==="highp")e+=`
#define HIGH_PRECISION`;else if(t.precision==="mediump")e+=`
#define MEDIUM_PRECISION`;else if(t.precision==="lowp")e+=`
#define LOW_PRECISION`;return e}var yp={[Ri]:"SHADOWMAP_TYPE_PCF",[pi]:"SHADOWMAP_TYPE_VSM"};function Sp(t){return yp[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Mp={[_i]:"ENVMAP_MODE_REFRACTION"};function bp(t){if(t.envMap===!1)return"ENVMAP_MODE_REFLECTION";return Mp[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Ep={[hl]:"ENVMAP_BLENDING_MULTIPLY",[ul]:"ENVMAP_BLENDING_MIX",[dl]:"ENVMAP_BLENDING_ADD"};function Tp(t){if(t.envMap===!1)return"ENVMAP_BLENDING_NONE";return Ep[t.combine]||"ENVMAP_BLENDING_NONE"}function Ap(t,e,n,i){let s=t.getContext(),{defines:r,vertexShader:a,fragmentShader:o}=n,l=Sp(n),c=n.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",f=bp(n),d=Tp(n),u=fp(n),g=pp(r),y=s.createProgram(),M,h,p=n.glslVersion?"#version "+n.glslVersion+`
`:"";if(n.isRawShaderMaterial){if(M=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Vi).join(`
`),M.length>0)M+=`
`;if(h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Vi).join(`
`),h.length>0)h+=`
`}else M=[ic(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+n.diffuseRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(Vi).join(`
`),h=[ic(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+d:"",n.envMapPMREM?"#define ENVMAP_MAX_LOD "+n.envMapMaxLod+".0":"",n.envMapPMREM?"#define ENVMAP_SIZE "+n.envMapSize+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==en?"#define TONE_MAPPING":"",n.toneMapping!==en?Ot.tonemapping_pars_fragment:"",n.toneMapping!==en?up("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ot.colorspace_pars_fragment,cp("linearToOutputTexel",n.outputColorSpace),dp(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Vi).join(`
`);if(a=$a(a),a=tc(a,n),a=ec(a,n),o=$a(o),o=tc(o,n),o=ec(o,n),a=nc(a),o=nc(o),n.isRawShaderMaterial!==!0)p=`#version 300 es
`,M=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,h=["#define varying in",n.glslVersion===ya?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===ya?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h;let E=p+M+a,T=p+h+o,S=Kl(s,s.VERTEX_SHADER,E),A=Kl(s,s.FRAGMENT_SHADER,T);if(s.attachShader(y,S),s.attachShader(y,A),n.index0AttributeName!==void 0)s.bindAttribLocation(y,0,n.index0AttributeName);else if(n.hasPositionAttribute===!0)s.bindAttribLocation(y,0,"position");s.linkProgram(y);function R(k){if(t.debug.checkShaderErrors){let P=s.getProgramInfoLog(y)||"",B=s.getShaderInfoLog(S)||"",Q=s.getShaderInfoLog(A)||"",w=P.trim(),Y=B.trim(),tt=Q.trim(),F=!0,W=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(F=!1,typeof t.debug.onShaderError==="function")t.debug.onShaderError(s,y,S,A);else{let O=jl(s,S,"vertex"),q=jl(s,A,"fragment");Pt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+w+`
`+O+`
`+q)}else if(w!=="")It("WebGLProgram: Program Info Log:",w);else if(Y===""||tt==="")W=!1;if(W)k.diagnostics={runnable:F,programLog:w,vertexShader:{log:Y,prefix:M},fragmentShader:{log:tt,prefix:h}}}s.deleteShader(S),s.deleteShader(A),m=new Xi(s,y),v=mp(s,y)}let m;this.getUniforms=function(){if(m===void 0)R(this);return m};let v;this.getAttributes=function(){if(v===void 0)R(this);return v};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(C===!1)C=s.getProgramParameter(y,rp);return C},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=ap++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=S,this.fragmentShader=A,this}var wp=0;class Sc{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);if(i.has(e)===!1)i.add(e),e.usedTimes++;if(i.has(n)===!1)i.add(n),n.usedTimes++;return this}remove(t){let e=this.materialCache.get(t);for(let n of e)if(n.usedTimes--,n.usedTimes===0)this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);if(n===void 0)n=new Set,e.set(t,n);return n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);if(n===void 0)n=new Mc(t),e.set(t,n);return n}}class Mc{constructor(t){this.id=wp++,this.code=t,this.usedTimes=0}}function Rp(t){return t===Xn||t===Ts||t===As}function Cp(t,e,n,i,s,r){let a=new Cs,o=new Sc,l=new Set,c=[],f=new Map,d=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(m){if(l.add(m),m===0)return"uv";return`uv${m}`}function y(m,v,C,k,P,B){let Q=k.fog,w=P.geometry,Y=m.isMeshStandardMaterial||m.isMeshLambertMaterial||m.isMeshPhongMaterial?k.environment:null,tt=m.isMeshStandardMaterial||m.isMeshLambertMaterial&&!m.envMap||m.isMeshPhongMaterial&&!m.envMap,F=e.get(m.envMap||Y,tt),W=u[m.type],O=i.precision;if(m.precision!==null){if(O=i.getMaxPrecision(m.precision),O!==m.precision)It("WebGLProgram.getParameters:",m.precision,"not supported, using",O,"instead.")}let q=w.morphAttributes.position||w.morphAttributes.normal||w.morphAttributes.color,nt=q!==void 0?q.length:0,dt=0;if(w.morphAttributes.position!==void 0)dt=1;if(w.morphAttributes.normal!==void 0)dt=2;if(w.morphAttributes.color!==void 0)dt=3;let Z,j,_t,yt;if(W){let gt=rn[W];Z=gt.vertexShader,j=gt.fragmentShader}else{Z=m.vertexShader,j=m.fragmentShader;let gt=o.getVertexShaderStage(m),Kt=o.getFragmentShaderStage(m);o.update(m,gt,Kt),_t=gt.id,yt=Kt.id}let wt=t.getRenderTarget(),St=t.state.buffers.depth.getReversed(),Zt=P.isInstancedMesh===!0,Bt=P.isBatchedMesh===!0,Ut=!!m.map,ie=!!m.matcap,Xt=!!F,oe=Xt&&F.isPMREMTexture===!0,le=!!m.aoMap,Ce=!!m.lightMap,De=!!m.bumpMap&&m.wireframe===!1,ce=!!m.normalMap,ye=!!m.displacementMap,Ie=!!m.emissiveMap,Pe=!!m.metalnessMap,Ve=!!m.roughnessMap,N=m.anisotropy>0,Xe=m.clearcoat>0,$t=m.diffuseRoughness>0,pe=m.dispersion>0,ft=m.retroreflectivity>0,te=m.iridescence>0,Ct=m.sheen>0,Nt=m.transmission>0,Se=N&&!!m.anisotropyMap,b=Xe&&!!m.clearcoatMap,_=Xe&&!!m.clearcoatNormalMap,D=Xe&&!!m.clearcoatRoughnessMap,it=$t&&!!m.diffuseRoughnessMap,et=te&&!!m.iridescenceMap,at=te&&!!m.iridescenceThicknessMap,ct=Ct&&!!m.sheenColorMap,V=Ct&&!!m.sheenRoughnessMap,K=!!m.specularMap,ot=!!m.specularColorMap,I=!!m.specularIntensityMap,J=Nt&&!!m.transmissionMap,X=Nt&&!!m.thicknessMap,st=!!m.gradientMap,rt=!!m.alphaMap,ut=m.alphaTest>0,At=!!m.alphaHash,Tt=!!m.extensions,mt=en;if(m.toneMapped){if(wt===null||wt.isXRRenderTarget===!0)mt=t.toneMapping}let Rt=oe?F.isCompressedCubeTexture?F.image[0].mipmaps:F.mipmaps:null,Ft={shaderID:W,shaderType:m.type,shaderName:m.name,vertexShader:Z,fragmentShader:j,defines:m.defines,customVertexShaderID:_t,customFragmentShaderID:yt,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:O,batching:Bt,batchingColor:Bt&&P._colorsTexture!==null,instancing:Zt,instancingColor:Zt&&P.instanceColor!==null,instancingMorph:Zt&&P.morphTexture!==null,outputColorSpace:wt===null?t.outputColorSpace:wt.isXRRenderTarget===!0?wt.texture.colorSpace:Ht.workingColorSpace,alphaToCoverage:!!m.alphaToCoverage,map:Ut,matcap:ie,envMap:Xt,envMapMode:Xt&&F.mapping,envMapPMREM:oe,envMapMaxLod:oe?Rt.length-1:null,envMapSize:oe?Rt[0].width:null,aoMap:le,lightMap:Ce,bumpMap:De,normalMap:ce,displacementMap:ye,emissiveMap:Ie,normalMapObjectSpace:ce&&m.normalMapType===bl,normalMapTangentSpace:ce&&m.normalMapType===pa,packedNormalMap:ce&&m.normalMapType===pa&&Rp(m.normalMap.format),metalnessMap:Pe,roughnessMap:Ve,anisotropy:N,anisotropyMap:Se,clearcoat:Xe,clearcoatMap:b,clearcoatNormalMap:_,clearcoatRoughnessMap:D,diffuseRoughness:$t,diffuseRoughnessMap:it,dispersion:pe,retroreflection:ft,iridescence:te,iridescenceMap:et,iridescenceThicknessMap:at,sheen:Ct,sheenColorMap:ct,sheenRoughnessMap:V,specularMap:K,specularColorMap:ot,specularIntensityMap:I,transmission:Nt,transmissionMap:J,thicknessMap:X,gradientMap:st,opaque:m.transparent===!1&&m.blending===Ci&&m.alphaToCoverage===!1,alphaMap:rt,alphaTest:ut,alphaHash:At,combine:m.combine,mapUv:Ut&&g(m.map.channel),aoMapUv:le&&g(m.aoMap.channel),lightMapUv:Ce&&g(m.lightMap.channel),bumpMapUv:De&&g(m.bumpMap.channel),normalMapUv:ce&&g(m.normalMap.channel),displacementMapUv:ye&&g(m.displacementMap.channel),emissiveMapUv:Ie&&g(m.emissiveMap.channel),metalnessMapUv:Pe&&g(m.metalnessMap.channel),roughnessMapUv:Ve&&g(m.roughnessMap.channel),anisotropyMapUv:Se&&g(m.anisotropyMap.channel),clearcoatMapUv:b&&g(m.clearcoatMap.channel),clearcoatNormalMapUv:_&&g(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:D&&g(m.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:it&&g(m.diffuseRoughnessMap.channel),iridescenceMapUv:et&&g(m.iridescenceMap.channel),iridescenceThicknessMapUv:at&&g(m.iridescenceThicknessMap.channel),sheenColorMapUv:ct&&g(m.sheenColorMap.channel),sheenRoughnessMapUv:V&&g(m.sheenRoughnessMap.channel),specularMapUv:K&&g(m.specularMap.channel),specularColorMapUv:ot&&g(m.specularColorMap.channel),specularIntensityMapUv:I&&g(m.specularIntensityMap.channel),transmissionMapUv:J&&g(m.transmissionMap.channel),thicknessMapUv:X&&g(m.thicknessMap.channel),alphaMapUv:rt&&g(m.alphaMap.channel),vertexTangents:!!w.attributes.tangent&&(ce||N),vertexNormals:!!w.attributes.normal,vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!w.attributes.color&&w.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!w.attributes.uv&&(Ut||rt),fog:!!Q,useFog:m.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:m.wireframe===!1&&(m.flatShading===!0||w.attributes.normal===void 0&&ce===!1&&(m.isMeshLambertMaterial||m.isMeshPhongMaterial||m.isMeshStandardMaterial||m.isMeshPhysicalMaterial)),sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:St,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:w.attributes.position!==void 0,morphTargets:w.morphAttributes.position!==void 0,morphNormals:w.morphAttributes.normal!==void 0,morphColors:w.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:dt,numSunLights:v.sun.length,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numSunLightShadows:v.sunShadowMap.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numLightProbeGrids:B.filter((gt)=>gt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:m.dithering,shadowMapEnabled:t.shadowMap.enabled&&C.length>0,shadowMapType:t.shadowMap.type,toneMapping:mt,decodeVideoTexture:Ut&&m.map.isVideoTexture===!0&&Ht.getTransfer(m.map.colorSpace)===jt,decodeVideoTextureEmissive:Ie&&m.emissiveMap.isVideoTexture===!0&&Ht.getTransfer(m.emissiveMap.colorSpace)===jt,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===tn,flipSided:m.side===Ne,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:Tt&&m.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Tt&&m.extensions.multiDraw===!0||Bt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return Ft.vertexUv1s=l.has(1),Ft.vertexUv2s=l.has(2),Ft.vertexUv3s=l.has(3),l.clear(),Ft}function M(m){let v=[];if(m.shaderID)v.push(m.shaderID);else v.push(m.customVertexShaderID),v.push(m.customFragmentShaderID);if(m.defines!==void 0)for(let C in m.defines)v.push(C),v.push(m.defines[C]);if(m.isRawShaderMaterial===!1)h(v,m),p(v,m),v.push(t.outputColorSpace);return v.push(m.customProgramCacheKey),v.join()}function h(m,v){m.push(v.precision),m.push(v.outputColorSpace),m.push(v.envMapMode),m.push(v.envMapPMREM),m.push(v.envMapMaxLod),m.push(v.envMapSize),m.push(v.mapUv),m.push(v.alphaMapUv),m.push(v.lightMapUv),m.push(v.aoMapUv),m.push(v.bumpMapUv),m.push(v.normalMapUv),m.push(v.displacementMapUv),m.push(v.emissiveMapUv),m.push(v.metalnessMapUv),m.push(v.roughnessMapUv),m.push(v.anisotropyMapUv),m.push(v.clearcoatMapUv),m.push(v.clearcoatNormalMapUv),m.push(v.clearcoatRoughnessMapUv),m.push(v.diffuseRoughnessMapUv),m.push(v.iridescenceMapUv),m.push(v.iridescenceThicknessMapUv),m.push(v.sheenColorMapUv),m.push(v.sheenRoughnessMapUv),m.push(v.specularMapUv),m.push(v.specularColorMapUv),m.push(v.specularIntensityMapUv),m.push(v.transmissionMapUv),m.push(v.thicknessMapUv),m.push(v.combine),m.push(v.fogExp2),m.push(v.sizeAttenuation),m.push(v.morphTargetsCount),m.push(v.numSunLights),m.push(v.numDirLights),m.push(v.numPointLights),m.push(v.numSpotLights),m.push(v.numSpotLightMaps),m.push(v.numHemiLights),m.push(v.numRectAreaLights),m.push(v.numSunLightShadows),m.push(v.numDirLightShadows),m.push(v.numPointLightShadows),m.push(v.numSpotLightShadows),m.push(v.numSpotLightShadowsWithMaps),m.push(v.numLightProbes),m.push(v.numLightProbeGrids),m.push(v.shadowMapType),m.push(v.toneMapping),m.push(v.numClippingPlanes),m.push(v.numClipIntersection),m.push(v.depthPacking)}function p(m,v){if(a.disableAll(),v.instancing)a.enable(0);if(v.instancingColor)a.enable(1);if(v.instancingMorph)a.enable(2);if(v.matcap)a.enable(3);if(v.envMap)a.enable(4);if(v.normalMapObjectSpace)a.enable(5);if(v.normalMapTangentSpace)a.enable(6);if(v.clearcoat)a.enable(7);if(v.iridescence)a.enable(8);if(v.alphaTest)a.enable(9);if(v.vertexColors)a.enable(10);if(v.vertexAlphas)a.enable(11);if(v.vertexUv1s)a.enable(12);if(v.vertexUv2s)a.enable(13);if(v.vertexUv3s)a.enable(14);if(v.vertexTangents)a.enable(15);if(v.anisotropy)a.enable(16);if(v.alphaHash)a.enable(17);if(v.batching)a.enable(18);if(v.dispersion)a.enable(19);if(v.retroreflection)a.enable(24);if(v.diffuseRoughness)a.enable(25);if(v.batchingColor)a.enable(20);if(v.gradientMap)a.enable(21);if(v.packedNormalMap)a.enable(22);if(v.vertexNormals)a.enable(23);if(m.push(a.mask),a.disableAll(),v.fog)a.enable(0);if(v.useFog)a.enable(1);if(v.flatShading)a.enable(2);if(v.logarithmicDepthBuffer)a.enable(3);if(v.reversedDepthBuffer)a.enable(4);if(v.skinning)a.enable(5);if(v.morphTargets)a.enable(6);if(v.morphNormals)a.enable(7);if(v.morphColors)a.enable(8);if(v.premultipliedAlpha)a.enable(9);if(v.shadowMapEnabled)a.enable(10);if(v.doubleSided)a.enable(11);if(v.flipSided)a.enable(12);if(v.useDepthPacking)a.enable(13);if(v.dithering)a.enable(14);if(v.transmission)a.enable(15);if(v.sheen)a.enable(16);if(v.opaque)a.enable(17);if(v.pointsUvs)a.enable(18);if(v.decodeVideoTexture)a.enable(19);if(v.decodeVideoTextureEmissive)a.enable(20);if(v.alphaToCoverage)a.enable(21);if(v.numLightProbeGrids>0)a.enable(22);if(v.hasPositionAttribute)a.enable(23);m.push(a.mask)}function E(m){let v=u[m.type],C;if(v){let k=rn[v];C=Ul.clone(k.uniforms)}else C=m.uniforms;return C}function T(m,v){let C=f.get(v);if(C!==void 0)++C.usedTimes;else C=new Ap(t,v,m,s),c.push(C),f.set(v,C);return C}function S(m){if(--m.usedTimes===0){let v=c.indexOf(m);c[v]=c[c.length-1],c.pop(),f.delete(m.cacheKey),m.destroy()}}function A(m){o.remove(m)}function R(){o.dispose()}return{getParameters:y,getProgramCacheKey:M,getUniforms:E,acquireProgram:T,releaseProgram:S,releaseShaderCache:A,programs:c,dispose:R}}function Ip(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);if(o===void 0)o={},t.set(a,o);return o}function i(a){t.delete(a)}function s(a,o,l){t.get(a)[o]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function Pp(t,e){if(t.groupOrder!==e.groupOrder)return t.groupOrder-e.groupOrder;else if(t.renderOrder!==e.renderOrder)return t.renderOrder-e.renderOrder;else if(t.material.id!==e.material.id)return t.material.id-e.material.id;else if(t.materialVariant!==e.materialVariant)return t.materialVariant-e.materialVariant;else if(t.z!==e.z)return t.z-e.z;else return t.id-e.id}function sc(t,e){if(t.groupOrder!==e.groupOrder)return t.groupOrder-e.groupOrder;else if(t.renderOrder!==e.renderOrder)return t.renderOrder-e.renderOrder;else if(t.z!==e.z)return e.z-t.z;else return t.id-e.id}function rc(){let t=[],e=0,n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function a(u){let g=0;if(u.isInstancedMesh)g+=2;if(u.isSkinnedMesh)g+=1;return g}function o(u,g,y,M,h,p){let E=t[e];if(E===void 0)E={id:u.id,object:u,geometry:g,material:y,materialVariant:a(u),groupOrder:M,renderOrder:u.renderOrder,z:h,group:p},t[e]=E;else E.id=u.id,E.object=u,E.geometry=g,E.material=y,E.materialVariant=a(u),E.groupOrder=M,E.renderOrder=u.renderOrder,E.z=h,E.group=p;return e++,E}function l(u,g,y,M,h,p,E){if(E.reversedDepth===!0)h=-h;let T=o(u,g,y,M,h,p);if(y.transmission>0)i.push(T);else if(y.transparent===!0)s.push(T);else n.push(T)}function c(u,g,y,M,h,p){let E=o(u,g,y,M,h,p);if(y.transmission>0)i.unshift(E);else if(y.transparent===!0)s.unshift(E);else n.unshift(E)}function f(u,g){if(n.length>1)n.sort(u||Pp);if(i.length>1)i.sort(g||sc);if(s.length>1)s.sort(g||sc)}function d(){for(let u=e,g=t.length;u<g;u++){let y=t[u];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:f}}function Lp(){let t=new WeakMap;function e(i,s){let r=t.get(i),a;if(r===void 0)a=new rc,t.set(i,[a]);else if(s>=r.length)a=new rc,r.push(a);else a=r[s];return a}function n(){t=new WeakMap}return{get:e,dispose:n}}function Np(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new G,color:new zt};break;case"SpotLight":n={position:new G,direction:new G,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new G,color:new zt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new G,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":n={color:new zt,position:new G,halfWidth:new G,halfHeight:new G};break}return t[e.id]=n,n}}}function Dp(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt,shadowCameraNear:1,shadowCameraFar:1000};break}return t[e.id]=n,n}}}var Up=0;function Fp(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Op(t){let e=new Np,n=Dp(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new G);let s=new G,r=new se,a=new se;function o(c){let f=0,d=0,u=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let g=0,y=0,M=0,h=0,p=0,E=0,T=0,S=0,A=0,R=0,m=0,v=0,C=0,k=0;c.sort(Fp);for(let B=0,Q=c.length;B<Q;B++){let w=c[B],{color:Y,intensity:tt,distance:F}=w,W=null;if(w.shadow&&w.shadow.map)if(w.shadow.map.texture.format===Xn)W=w.shadow.map.texture;else W=w.shadow.map.depthTexture||w.shadow.map.texture;if(w.isAmbientLight)f+=Y.r*tt,d+=Y.g*tt,u+=Y.b*tt;else if(w.isLightProbe){for(let O=0;O<9;O++)i.probe[O].addScaledVector(w.sh.coefficients[O],tt);k++}else if(w.isSunLight){let O=e.get(w);if(O.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let q=w.shadow,nt=n.get(w);nt.shadowIntensity=q.intensity,nt.shadowBias=q.bias,nt.shadowNormalBias=q.normalBias,nt.shadowRadius=q.radius,nt.shadowMapSize.copy(q.mapSize).multiply(q.getFrameExtents()),i.sunShadow[y]=nt,i.sunShadowMap[y]=W;let dt=q.getViewportCount();for(let Z=0;Z<dt;Z++)i.sunShadowMatrix[M+Z]=q.getMatrix(Z),i.sunShadowCascade[M+Z]=q._cascadeData[Z];M+=dt,y++}i.sun[g]=O,g++}else if(w.isDirectionalLight){let O=e.get(w);if(O.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let q=w.shadow,nt=n.get(w);nt.shadowIntensity=q.intensity,nt.shadowBias=q.bias,nt.shadowNormalBias=q.normalBias,nt.shadowRadius=q.radius,nt.shadowMapSize=q.mapSize,i.directionalShadow[h]=nt,i.directionalShadowMap[h]=W,i.directionalShadowMatrix[h]=w.shadow.matrix,A++}i.directional[h]=O,h++}else if(w.isSpotLight){let O=e.get(w);O.position.setFromMatrixPosition(w.matrixWorld),O.color.copy(Y).multiplyScalar(tt),O.distance=F,O.coneCos=Math.cos(w.angle),O.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),O.decay=w.decay,i.spot[E]=O;let q=w.shadow;if(w.map){if(i.spotLightMap[v]=w.map,v++,q.updateMatrices(w),w.castShadow)C++}if(i.spotLightMatrix[E]=q.matrix,w.castShadow){let nt=n.get(w);nt.shadowIntensity=q.intensity,nt.shadowBias=q.bias,nt.shadowNormalBias=q.normalBias,nt.shadowRadius=q.radius,nt.shadowMapSize=q.mapSize,i.spotShadow[E]=nt,i.spotShadowMap[E]=W,m++}E++}else if(w.isRectAreaLight){let O=e.get(w);O.color.copy(Y).multiplyScalar(tt),O.halfWidth.set(w.width*0.5,0,0),O.halfHeight.set(0,w.height*0.5,0),i.rectArea[T]=O,T++}else if(w.isPointLight){let O=e.get(w);if(O.color.copy(w.color).multiplyScalar(w.intensity),O.distance=w.distance,O.decay=w.decay,w.castShadow){let q=w.shadow,nt=n.get(w);nt.shadowIntensity=q.intensity,nt.shadowBias=q.bias,nt.shadowNormalBias=q.normalBias,nt.shadowRadius=q.radius,nt.shadowMapSize=q.mapSize,nt.shadowCameraNear=q.camera.near,nt.shadowCameraFar=q.camera.far,i.pointShadow[p]=nt,i.pointShadowMap[p]=W,i.pointShadowMatrix[p]=w.shadow.matrix,R++}i.point[p]=O,p++}else if(w.isHemisphereLight){let O=e.get(w);O.skyColor.copy(w.color).multiplyScalar(tt),O.groundColor.copy(w.groundColor).multiplyScalar(tt),i.hemi[S]=O,S++}}if(T>0)if(t.has("OES_texture_float_linear")===!0)i.rectAreaLTC1=pt.LTC_FLOAT_1,i.rectAreaLTC2=pt.LTC_FLOAT_2;else i.rectAreaLTC1=pt.LTC_HALF_1,i.rectAreaLTC2=pt.LTC_HALF_2;i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=u;let P=i.hash;if(P.sunLength!==g||P.directionalLength!==h||P.pointLength!==p||P.spotLength!==E||P.rectAreaLength!==T||P.hemiLength!==S||P.numSunShadows!==y||P.numDirectionalShadows!==A||P.numPointShadows!==R||P.numSpotShadows!==m||P.numSpotMaps!==v||P.numLightProbes!==k)i.sun.length=g,i.directional.length=h,i.spot.length=E,i.rectArea.length=T,i.point.length=p,i.hemi.length=S,i.sunShadow.length=y,i.sunShadowMap.length=y,i.sunShadowMatrix.length=M,i.sunShadowCascade.length=M,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.directionalShadowMatrix.length=A,i.pointShadow.length=R,i.pointShadowMap.length=R,i.pointShadowMatrix.length=R,i.spotShadow.length=m,i.spotShadowMap.length=m,i.spotLightMatrix.length=m+v-C,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=k,P.sunLength=g,P.directionalLength=h,P.pointLength=p,P.spotLength=E,P.rectAreaLength=T,P.hemiLength=S,P.numSunShadows=y,P.numDirectionalShadows=A,P.numPointShadows=R,P.numSpotShadows=m,P.numSpotMaps=v,P.numLightProbes=k,i.version=Up++}function l(c,f){let d=0,u=0,g=0,y=0,M=0,h=0,p=f.matrixWorldInverse;for(let E=0,T=c.length;E<T;E++){let S=c[E];if(S.isSunLight){let A=i.sun[d];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(p),d++}else if(S.isDirectionalLight){let A=i.directional[u];A.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),u++}else if(S.isSpotLight){let A=i.spot[y];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),y++}else if(S.isRectAreaLight){let A=i.rectArea[M];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(p),a.identity(),r.copy(S.matrixWorld),r.premultiply(p),a.extractRotation(r),A.halfWidth.set(S.width*0.5,0,0),A.halfHeight.set(0,S.height*0.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),M++}else if(S.isPointLight){let A=i.point[g];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(p),g++}else if(S.isHemisphereLight){let A=i.hemi[h];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(p),h++}}}return{setup:o,setupView:l,state:i}}function ac(t){let e=new Op(t),n=[],i=[],s=[];function r(d){f.camera=d,n.length=0,i.length=0,s.length=0}function a(d){if(d.isLightProbeGrid)s.push(d);else n.push(d)}function o(d){i.push(d)}function l(){e.setup(n),s.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){e.setupView(n,d)}let f={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Bp(t){let e=new WeakMap;function n(s,r=0){let a=e.get(s),o;if(a===void 0)o=new ac(t),e.set(s,[o]);else if(r>=a.length)o=new ac(t),a.push(o);else o=a[r];return o}function i(){e=new WeakMap}return{get:n,dispose:i}}var zp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,kp=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],Hp=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],oc=new se,Wi=new G,Ja=new G;function Wp(t,e,n){let i=new Hn,s=new Wt,r=new Wt,a=new ae,o=new Pa,l=new La,c={},f=n.maxTextureSize,d={[mi]:Ne,[Ne]:mi,[tn]:tn},u=new Mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Wt},radius:{value:4}},vertexShader:zp,fragmentShader:Gp}),g=u.clone();g.defines.HORIZONTAL_PASS=1;let y=new Oe;y.setAttribute("position",new pn(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let M=new He(y,u),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ri;let p=this.type;this.render=function(R,m,v){if(h.enabled===!1)return;if(h.autoUpdate===!1&&h.needsUpdate===!1)return;if(R.length===0)return;if(this.type===gs)It("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ri;let C=t.getRenderTarget(),k=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),B=t.state;if(B.setBlending(Wn),B.buffers.depth.getReversed()===!0)B.buffers.color.setClear(0,0,0,0);else B.buffers.color.setClear(1,1,1,1);B.buffers.depth.setTest(!0),B.setScissorTest(!1);let Q=p!==this.type;if(Q)m.traverse(function(w){if(w.material)if(Array.isArray(w.material))w.material.forEach((Y)=>Y.needsUpdate=!0);else w.material.needsUpdate=!0});for(let w=0,Y=R.length;w<Y;w++){let tt=R[w],F=tt.shadow;if(F===void 0){It("WebGLShadowMap:",tt,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);let W=F.getFrameExtents();if(s.multiply(W),r.copy(F.mapSize),s.x>f||s.y>f){if(s.x>f)r.x=Math.floor(f/W.x),s.x=r.x*W.x,F.mapSize.x=r.x;if(s.y>f)r.y=Math.floor(f/W.y),s.y=r.y*W.y,F.mapSize.y=r.y}let O=t.state.buffers.depth.getReversed();if(F.camera._reversedDepth=O,F.map===null||Q===!0){if(F.map!==null){if(F.map.depthTexture!==null)F.map.depthTexture.dispose(),F.map.depthTexture=null;F.map.dispose()}if(this.type===pi){if(tt.isPointLight){It("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new ke(s.x,s.y,{format:Xn,type:nn,minFilter:Ge,magFilter:Ge,generateMipmaps:!1}),F.map.texture.name=tt.name+".shadowMap",F.map.depthTexture=new Dn(s.x,s.y,gn),F.map.depthTexture.name=tt.name+".shadowMapDepth",F.map.depthTexture.format=xi,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=In,F.map.depthTexture.magFilter=In}else{if(tt.isPointLight)F.map=new Ys(s.x),F.map.depthTexture=new Us(s.x,Ln);else F.map=new ke(s.x,s.y),F.map.depthTexture=new Dn(s.x,s.y,Ln);if(F.map.depthTexture.name=tt.name+".shadowMap",F.map.depthTexture.format=xi,this.type===Ri)F.map.depthTexture.compareFunction=O?xa:_a,F.map.depthTexture.minFilter=Ge,F.map.depthTexture.magFilter=Ge;else F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=In,F.map.depthTexture.magFilter=In}F.camera.updateProjectionMatrix()}if(F.map.isWebGLCubeRenderTarget!==!0&&(F.map.width!==s.x||F.map.height!==s.y))F.map.setSize(s.x,s.y);let q=F.map.isWebGLCubeRenderTarget?6:F.getViewportCount();if(tt.isPointLight!==!0)F.updateMatrices(tt,v);let nt=(F.camera.layers.mask&4294967294)!==0?F.camera.layers:v.layers;for(let dt=0;dt<q;dt++){let Z=F.getCamera(dt);if(tt.isPointLight){let{camera:j,matrix:_t}=F,yt=tt.distance||j.far;if(yt!==j.far)j.far=yt,j.updateProjectionMatrix();Wi.setFromMatrixPosition(tt.matrixWorld),j.position.copy(Wi),Ja.copy(j.position),Ja.add(kp[dt]),j.up.copy(Hp[dt]),j.lookAt(Ja),j.updateMatrixWorld(),_t.makeTranslation(-Wi.x,-Wi.y,-Wi.z),oc.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),F._frustum.setFromProjectionMatrix(oc,j.coordinateSystem,j.reversedDepth)}if(F.map.isWebGLCubeRenderTarget)t.setRenderTarget(F.map,dt),t.clear();else{if(dt===0)t.setRenderTarget(F.map),t.clear();let j=F.getViewport(dt);a.set(r.x*j.x,r.y*j.y,r.x*j.z,r.y*j.w),B.viewport(a)}i=F.getFrustum(dt),S(m,v,Z,tt,nt,this.type)}if(F.isPointLightShadow!==!0&&this.type===pi)E(F,v);F.needsUpdate=!1}p=this.type,h.needsUpdate=!1,t.setRenderTarget(C,k,P)};function E(R,m){let v=e.update(M);if(u.defines.VSM_SAMPLES!==R.blurSamples)u.defines.VSM_SAMPLES=R.blurSamples,g.defines.VSM_SAMPLES=R.blurSamples,u.needsUpdate=!0,g.needsUpdate=!0;if(R.mapPass===null)R.mapPass=new ke(s.x,s.y,{format:Xn,type:nn});else if(R.mapPass.width!==R.map.width||R.mapPass.height!==R.map.height)R.mapPass.setSize(R.map.width,R.map.height);u.uniforms.shadow_pass.value=R.map.depthTexture,u.uniforms.resolution.value.set(R.map.width,R.map.height),u.uniforms.radius.value=R.radius,t.setRenderTarget(R.mapPass),t.clear(),t.renderBufferDirect(m,null,v,u,M,null),g.uniforms.shadow_pass.value=R.mapPass.texture,g.uniforms.resolution.value.set(R.map.width,R.map.height),g.uniforms.radius.value=R.radius,t.setRenderTarget(R.map),t.clear(),t.renderBufferDirect(m,null,v,g,M,null)}function T(R,m,v,C){let k=null,P=v.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(P!==void 0)k=P;else if(k=v.isPointLight===!0?l:o,t.localClippingEnabled&&m.clipShadows===!0&&Array.isArray(m.clippingPlanes)&&m.clippingPlanes.length!==0||m.displacementMap&&m.displacementScale!==0||m.alphaMap&&m.alphaTest>0||m.map&&m.alphaTest>0||m.alphaToCoverage===!0){let B=k.uuid,Q=m.uuid,w=c[B];if(w===void 0)w={},c[B]=w;let Y=w[Q];if(Y===void 0)Y=k.clone(),w[Q]=Y,m.addEventListener("dispose",A);k=Y}if(k.visible=m.visible,k.wireframe=m.wireframe,C===pi)k.side=m.shadowSide!==null?m.shadowSide:m.side;else k.side=m.shadowSide!==null?m.shadowSide:d[m.side];if(k.alphaMap=m.alphaMap,k.alphaTest=m.alphaToCoverage===!0?0.5:m.alphaTest,k.map=m.map,k.clipShadows=m.clipShadows,k.clippingPlanes=m.clippingPlanes,k.clipIntersection=m.clipIntersection,k.displacementMap=m.displacementMap,k.displacementScale=m.displacementScale,k.displacementBias=m.displacementBias,k.wireframeLinewidth=m.wireframeLinewidth,k.linewidth=m.linewidth,v.isPointLight===!0&&k.isMeshDistanceMaterial===!0){let B=t.properties.get(k);B.light=v}return k}function S(R,m,v,C,k,P){if(R.visible===!1)return;if(R.layers.test(k)&&(R.isMesh||R.isLine||R.isPoints)){if((R.castShadow||R.receiveShadow&&P===pi)&&(!R.frustumCulled||R.intersectsFrustum(i))){R.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,R.matrixWorld);let w=e.update(R),Y=R.material;if(Array.isArray(Y)){let tt=w.groups;for(let F=0,W=tt.length;F<W;F++){let O=tt[F],q=Y[O.materialIndex];if(q&&q.visible){let nt=T(R,q,C,P);R.onBeforeShadow(t,R,m,v,w,nt,O),t.renderBufferDirect(v,null,w,nt,R,O),R.onAfterShadow(t,R,m,v,w,nt,O)}}}else if(Y.visible){let tt=T(R,Y,C,P);R.onBeforeShadow(t,R,m,v,w,tt,null),t.renderBufferDirect(v,null,w,tt,R,null),R.onAfterShadow(t,R,m,v,w,tt,null)}}}let Q=R.children;for(let w=0,Y=Q.length;w<Y;w++)S(Q[w],m,v,C,k,P)}function A(R){R.target.removeEventListener("dispose",A);for(let v in c){let C=c[v],k=R.target.uuid;if(k in C)C[k].dispose(),delete C[k]}}}function Vp(t,e){function n(){let I=!1,J=new ae,X=null,st=new ae(0,0,0,0);return{setMask:function(rt){if(X!==rt&&!I)t.colorMask(rt,rt,rt,rt),X=rt},setLocked:function(rt){I=rt},setClear:function(rt,ut,At,Tt,mt){if(mt===!0)rt*=Tt,ut*=Tt,At*=Tt;if(J.set(rt,ut,At,Tt),st.equals(J)===!1)t.clearColor(rt,ut,At,Tt),st.copy(J)},reset:function(){I=!1,X=null,st.set(-1,0,0,0)}}}function i(){let I=!1,J=!1,X=null,st=null,rt=null;return{setReversed:function(ut){if(J!==ut){let At=e.get("EXT_clip_control");if(ut)At.clipControlEXT(At.LOWER_LEFT_EXT,At.ZERO_TO_ONE_EXT);else At.clipControlEXT(At.LOWER_LEFT_EXT,At.NEGATIVE_ONE_TO_ONE_EXT);J=ut;let Tt=rt;rt=null,this.setClear(Tt)}},getReversed:function(){return J},setTest:function(ut){if(ut)St(t.DEPTH_TEST);else Zt(t.DEPTH_TEST)},setMask:function(ut){if(X!==ut&&!I)t.depthMask(ut),X=ut},setFunc:function(ut){if(J)ut=Ll[ut];if(st!==ut){switch(ut){case il:t.depthFunc(t.NEVER);break;case sl:t.depthFunc(t.ALWAYS);break;case rl:t.depthFunc(t.LESS);break;case Er:t.depthFunc(t.LEQUAL);break;case al:t.depthFunc(t.EQUAL);break;case ol:t.depthFunc(t.GEQUAL);break;case ll:t.depthFunc(t.GREATER);break;case cl:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}st=ut}},setLocked:function(ut){I=ut},setClear:function(ut){if(rt!==ut){if(rt=ut,J)ut=1-ut;t.clearDepth(ut)}},reset:function(){I=!1,X=null,st=null,rt=null,J=!1}}}function s(){let I=!1,J=null,X=null,st=null,rt=null,ut=null,At=null,Tt=null,mt=null;return{setTest:function(Rt){if(!I)if(Rt)St(t.STENCIL_TEST);else Zt(t.STENCIL_TEST)},setMask:function(Rt){if(J!==Rt&&!I)t.stencilMask(Rt),J=Rt},setFunc:function(Rt,Ft,gt){if(X!==Rt||st!==Ft||rt!==gt)t.stencilFunc(Rt,Ft,gt),X=Rt,st=Ft,rt=gt},setOp:function(Rt,Ft,gt){if(ut!==Rt||At!==Ft||Tt!==gt)t.stencilOp(Rt,Ft,gt),ut=Rt,At=Ft,Tt=gt},setLocked:function(Rt){I=Rt},setClear:function(Rt){if(mt!==Rt)t.clearStencil(Rt),mt=Rt},reset:function(){I=!1,J=null,X=null,st=null,rt=null,ut=null,At=null,Tt=null,mt=null}}}let r=new n,a=new i,o=new s,l={},c=new WeakMap,f={},d={},u={},g=new WeakMap,y=[],M=null,h=!1,p=null,E=null,T=null,S=null,A=null,R=null,m=null,v=new zt(0,0,0),C=0,k=!1,P=null,B=null,Q=null,w=null,Y=null,tt=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,W=0,O=t.getParameter(t.VERSION);if(O.indexOf("WebGL")!==-1)W=parseFloat(/^WebGL (\d)/.exec(O)[1]),F=W>=1;else if(O.indexOf("OpenGL ES")!==-1)W=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),F=W>=2;let q=null,nt={},dt=t.getParameter(t.SCISSOR_BOX),Z=t.getParameter(t.VIEWPORT),j=new ae().fromArray(dt),_t=new ae().fromArray(Z);function yt(I,J,X,st){let rt=new Uint8Array(4),ut=t.createTexture();t.bindTexture(I,ut),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let At=0;At<X;At++)if(I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY)t.texImage3D(J,0,t.RGBA,1,1,st,0,t.RGBA,t.UNSIGNED_BYTE,rt);else t.texImage2D(J+At,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,rt);return ut}let wt={};wt[t.TEXTURE_2D]=yt(t.TEXTURE_2D,t.TEXTURE_2D,1),wt[t.TEXTURE_CUBE_MAP]=yt(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),wt[t.TEXTURE_2D_ARRAY]=yt(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),wt[t.TEXTURE_3D]=yt(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),St(t.DEPTH_TEST),a.setFunc(Er),De(!1),ce(yr),St(t.CULL_FACE),le(Wn);function St(I){if(f[I]!==!0)t.enable(I),f[I]=!0}function Zt(I){if(f[I]!==!1)t.disable(I),f[I]=!1}function Bt(I,J){if(u[I]!==J){if(t.bindFramebuffer(I,J),u[I]=J,I===t.DRAW_FRAMEBUFFER)u[t.FRAMEBUFFER]=J;if(I===t.FRAMEBUFFER)u[t.DRAW_FRAMEBUFFER]=J;return!0}return!1}function Ut(I,J){let X=y,st=!1;if(I){if(X=g.get(J),X===void 0)X=[],g.set(J,X);let rt=I.textures;if(X.length!==rt.length||X[0]!==t.COLOR_ATTACHMENT0){for(let ut=0,At=rt.length;ut<At;ut++)X[ut]=t.COLOR_ATTACHMENT0+ut;X.length=rt.length,st=!0}}else if(X[0]!==t.BACK)X[0]=t.BACK,st=!0;if(st)t.drawBuffers(X)}function ie(I){if(M!==I)return t.useProgram(I),M=I,!0;return!1}let Xt={[gi]:t.FUNC_ADD,[Bo]:t.FUNC_SUBTRACT,[zo]:t.FUNC_REVERSE_SUBTRACT};Xt[Go]=t.MIN,Xt[ko]=t.MAX;let oe={[Ho]:t.ZERO,[Wo]:t.ONE,[Vo]:t.SRC_COLOR,[qo]:t.SRC_ALPHA,[Qo]:t.SRC_ALPHA_SATURATE,[$o]:t.DST_COLOR,[Zo]:t.DST_ALPHA,[Xo]:t.ONE_MINUS_SRC_COLOR,[Yo]:t.ONE_MINUS_SRC_ALPHA,[Ko]:t.ONE_MINUS_DST_COLOR,[Jo]:t.ONE_MINUS_DST_ALPHA,[jo]:t.CONSTANT_COLOR,[tl]:t.ONE_MINUS_CONSTANT_COLOR,[el]:t.CONSTANT_ALPHA,[nl]:t.ONE_MINUS_CONSTANT_ALPHA};function le(I,J,X,st,rt,ut,At,Tt,mt,Rt){if(I===Wn){if(h===!0)Zt(t.BLEND),h=!1;return}if(h===!1)St(t.BLEND),h=!0;if(I!==Oo){if(I!==p||Rt!==k){if(E!==gi||A!==gi)t.blendEquation(t.FUNC_ADD),E=gi,A=gi;if(Rt)switch(I){case Ci:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Sr:t.blendFunc(t.ONE,t.ONE);break;case Mr:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case br:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Pt("WebGLState: Invalid blending: ",I);break}else switch(I){case Ci:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Sr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Mr:Pt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case br:Pt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pt("WebGLState: Invalid blending: ",I);break}T=null,S=null,R=null,m=null,v.set(0,0,0),C=0,p=I,k=Rt}return}if(rt=rt||J,ut=ut||X,At=At||st,J!==E||rt!==A)t.blendEquationSeparate(Xt[J],Xt[rt]),E=J,A=rt;if(X!==T||st!==S||ut!==R||At!==m)t.blendFuncSeparate(oe[X],oe[st],oe[ut],oe[At]),T=X,S=st,R=ut,m=At;if(Tt.equals(v)===!1||mt!==C)t.blendColor(Tt.r,Tt.g,Tt.b,mt),v.copy(Tt),C=mt;p=I,k=!1}function Ce(I,J){I.side===tn?Zt(t.CULL_FACE):St(t.CULL_FACE);let X=I.side===Ne;if(J)X=!X;De(X),I.blending===Ci&&I.transparent===!1?le(Wn):le(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);let st=I.stencilWrite;if(o.setTest(st),st)o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass);Ie(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?St(t.SAMPLE_ALPHA_TO_COVERAGE):Zt(t.SAMPLE_ALPHA_TO_COVERAGE)}function De(I){if(P!==I){if(I)t.frontFace(t.CW);else t.frontFace(t.CCW);P=I}}function ce(I){if(I!==Uo){if(St(t.CULL_FACE),I!==B)if(I===yr)t.cullFace(t.BACK);else if(I===Fo)t.cullFace(t.FRONT);else t.cullFace(t.FRONT_AND_BACK)}else Zt(t.CULL_FACE);B=I}function ye(I){if(I!==Q){if(F)t.lineWidth(I);Q=I}}function Ie(I,J,X){if(I){if(St(t.POLYGON_OFFSET_FILL),w!==J||Y!==X){if(w=J,Y=X,a.getReversed())J=-J,X=-X;t.polygonOffset(J,X)}}else Zt(t.POLYGON_OFFSET_FILL)}function Pe(I){if(I)St(t.SCISSOR_TEST);else Zt(t.SCISSOR_TEST)}function Ve(I){if(I===void 0)I=t.TEXTURE0+tt-1;if(q!==I)t.activeTexture(I),q=I}function N(I,J,X){if(X===void 0)if(q===null)X=t.TEXTURE0+tt-1;else X=q;let st=nt[X];if(st===void 0)st={type:void 0,texture:void 0},nt[X]=st;if(st.type!==I||st.texture!==J){if(q!==X)t.activeTexture(X),q=X;t.bindTexture(I,J||wt[I]),st.type=I,st.texture=J}}function Xe(){let I=nt[q];if(I!==void 0&&I.type!==void 0)t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0}function $t(){try{t.compressedTexImage2D(...arguments)}catch(I){Pt("WebGLState:",I)}}function pe(){try{t.compressedTexImage3D(...arguments)}catch(I){Pt("WebGLState:",I)}}function ft(){try{t.texSubImage2D(...arguments)}catch(I){Pt("WebGLState:",I)}}function te(){try{t.texSubImage3D(...arguments)}catch(I){Pt("WebGLState:",I)}}function Ct(){try{t.compressedTexSubImage2D(...arguments)}catch(I){Pt("WebGLState:",I)}}function Nt(){try{t.compressedTexSubImage3D(...arguments)}catch(I){Pt("WebGLState:",I)}}function Se(){try{t.texStorage2D(...arguments)}catch(I){Pt("WebGLState:",I)}}function b(){try{t.texStorage3D(...arguments)}catch(I){Pt("WebGLState:",I)}}function _(){try{t.texImage2D(...arguments)}catch(I){Pt("WebGLState:",I)}}function D(){try{t.texImage3D(...arguments)}catch(I){Pt("WebGLState:",I)}}function it(I){if(d[I]!==void 0)return d[I];else return t.getParameter(I)}function et(I,J){if(d[I]!==J)t.pixelStorei(I,J),d[I]=J}function at(I){if(j.equals(I)===!1)t.scissor(I.x,I.y,I.z,I.w),j.copy(I)}function ct(I){if(_t.equals(I)===!1)t.viewport(I.x,I.y,I.z,I.w),_t.copy(I)}function V(I,J){let X=c.get(J);if(X===void 0)X=new WeakMap,c.set(J,X);let st=X.get(I);if(st===void 0)st=t.getUniformBlockIndex(J,I.name),t.uniformBlockBinding(J,st,st),X.set(I,st)}function K(I,J,X){let rt=c.get(J).get(I);if(l[rt]!==X)t.bindBufferBase(t.UNIFORM_BUFFER,rt,X),l[rt]=X}function ot(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),f={},d={},q=null,nt={},u={},l={},g=new WeakMap,y=[],M=null,h=!1,p=null,E=null,T=null,S=null,A=null,R=null,m=null,v=new zt(0,0,0),C=0,k=!1,P=null,B=null,Q=null,w=null,Y=null,j.set(0,0,t.canvas.width,t.canvas.height),_t.set(0,0,t.canvas.width,t.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:St,disable:Zt,bindFramebuffer:Bt,drawBuffers:Ut,useProgram:ie,setBlending:le,setMaterial:Ce,setFlipSided:De,setCullFace:ce,setLineWidth:ye,setPolygonOffset:Ie,setScissorTest:Pe,activeTexture:Ve,bindTexture:N,unbindTexture:Xe,compressedTexImage2D:$t,compressedTexImage3D:pe,texImage2D:_,texImage3D:D,pixelStorei:et,getParameter:it,updateUBOMapping:V,uniformBlockBinding:K,texStorage2D:Se,texStorage3D:b,texSubImage2D:ft,texSubImage3D:te,compressedTexSubImage2D:Ct,compressedTexSubImage3D:Nt,scissor:at,viewport:ct,reset:ot}}function Xp(t,e,n,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Wt,f=new WeakMap,d=new Set,u,g=new WeakMap,y=new Set,M=new FinalizationRegistry((b)=>y.delete(b)),h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(b){}function p(b,_){return h?new OffscreenCanvas(b,_):wi("canvas")}function E(b,_,D){let it=1,et=Se(b);if(et.width>D||et.height>D)it=D/Math.max(et.width,et.height);if(it<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){let at=Math.floor(it*et.width),ct=Math.floor(it*et.height);if(u===void 0)u=p(at,ct);let V=_?p(at,ct):u;return V.width=at,V.height=ct,V.getContext("2d").drawImage(b,0,0,at,ct),It("WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+at+"x"+ct+")."),V}else{if("data"in b)It("WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+").");return b}return b}function T(b){return b.generateMipmaps}function S(b){t.generateMipmap(b)}function A(b){if(b.isWebGLCubeRenderTarget)return t.TEXTURE_CUBE_MAP;if(b.isWebGL3DRenderTarget)return t.TEXTURE_3D;if(b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture)return t.TEXTURE_2D_ARRAY;return t.TEXTURE_2D}function R(b,_,D,it,et,at=!1){if(b!==null){if(t[b]!==void 0)return t[b];It("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ct;if(it){if(ct=e.get("EXT_texture_norm16"),!ct)It("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let V=_;if(_===t.RED){if(D===t.FLOAT)V=t.R32F;if(D===t.HALF_FLOAT)V=t.R16F;if(D===t.UNSIGNED_BYTE)V=t.R8;if(D===t.UNSIGNED_SHORT&&ct)V=ct.R16_EXT;if(D===t.SHORT&&ct)V=ct.R16_SNORM_EXT}if(_===t.RED_INTEGER){if(D===t.UNSIGNED_BYTE)V=t.R8UI;if(D===t.UNSIGNED_SHORT)V=t.R16UI;if(D===t.UNSIGNED_INT)V=t.R32UI;if(D===t.BYTE)V=t.R8I;if(D===t.SHORT)V=t.R16I;if(D===t.INT)V=t.R32I}if(_===t.RG){if(D===t.FLOAT)V=t.RG32F;if(D===t.HALF_FLOAT)V=t.RG16F;if(D===t.UNSIGNED_BYTE)V=t.RG8;if(D===t.UNSIGNED_SHORT&&ct)V=ct.RG16_EXT;if(D===t.SHORT&&ct)V=ct.RG16_SNORM_EXT}if(_===t.RG_INTEGER){if(D===t.UNSIGNED_BYTE)V=t.RG8UI;if(D===t.UNSIGNED_SHORT)V=t.RG16UI;if(D===t.UNSIGNED_INT)V=t.RG32UI;if(D===t.BYTE)V=t.RG8I;if(D===t.SHORT)V=t.RG16I;if(D===t.INT)V=t.RG32I}if(_===t.RGB_INTEGER){if(D===t.UNSIGNED_BYTE)V=t.RGB8UI;if(D===t.UNSIGNED_SHORT)V=t.RGB16UI;if(D===t.UNSIGNED_INT)V=t.RGB32UI;if(D===t.BYTE)V=t.RGB8I;if(D===t.SHORT)V=t.RGB16I;if(D===t.INT)V=t.RGB32I}if(_===t.RGBA_INTEGER){if(D===t.UNSIGNED_BYTE)V=t.RGBA8UI;if(D===t.UNSIGNED_SHORT)V=t.RGBA16UI;if(D===t.UNSIGNED_INT)V=t.RGBA32UI;if(D===t.BYTE)V=t.RGBA8I;if(D===t.SHORT)V=t.RGBA16I;if(D===t.INT)V=t.RGBA32I}if(_===t.RGB){if(D===t.UNSIGNED_SHORT&&ct)V=ct.RGB16_EXT;if(D===t.SHORT&&ct)V=ct.RGB16_SNORM_EXT;if(D===t.UNSIGNED_INT_5_9_9_9_REV)V=t.RGB9_E5;if(D===t.UNSIGNED_INT_10F_11F_11F_REV)V=t.R11F_G11F_B10F}if(_===t.RGBA){let K=at?ga:Ht.getTransfer(et);if(D===t.FLOAT)V=t.RGBA32F;if(D===t.HALF_FLOAT)V=t.RGBA16F;if(D===t.UNSIGNED_BYTE)V=K===jt?t.SRGB8_ALPHA8:t.RGBA8;if(D===t.UNSIGNED_SHORT&&ct)V=ct.RGBA16_EXT;if(D===t.SHORT&&ct)V=ct.RGBA16_SNORM_EXT;if(D===t.UNSIGNED_SHORT_4_4_4_4)V=t.RGBA4;if(D===t.UNSIGNED_SHORT_5_5_5_1)V=t.RGB5_A1}if(V===t.R16F||V===t.R32F||V===t.RG16F||V===t.RG32F||V===t.RGBA16F||V===t.RGBA32F)e.get("EXT_color_buffer_float");return V}function m(b,_){let D;if(b){if(_===null||_===Ln||_===Vn)D=t.DEPTH24_STENCIL8;else if(_===gn)D=t.DEPTH32F_STENCIL8;else if(_===Li)D=t.DEPTH24_STENCIL8,It("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(_===null||_===Ln||_===Vn)D=t.DEPTH_COMPONENT24;else if(_===gn)D=t.DEPTH_COMPONENT32F;else if(_===Li)D=t.DEPTH_COMPONENT16;return D}function v(b,_){if(T(b)===!0||b.isFramebufferTexture&&b.minFilter!==In&&b.minFilter!==Ge)return Math.log2(Math.max(_.width,_.height))+1;else if(b.mipmaps.length>0)return b.mipmaps.length;else if(b.isCompressedTexture&&Array.isArray(b.image))return _.mipmaps.length;else return 1}function C(b){let _=new WeakRef(b);i.get(b).__ref=_,y.add(_),M.register(b,_,_)}function k(b){let _=i.get(b).__ref;if(_===void 0)return;y.delete(_),M.unregister(_)}function P(b){Q(b.target)}function B(b){w(b.target)}function Q(b){if(b.removeEventListener("dispose",P),k(b),tt(b),b.isVideoTexture)f.delete(b);if(b.isHTMLTexture)d.delete(b)}function w(b){b.removeEventListener("dispose",B),k(b),W(b)}function Y(){for(let b of y){let _=b.deref();if(_===void 0)continue;if(_.isRenderTarget===!0)w(_);else Q(_)}y.clear(),d.clear()}function tt(b){let _=i.get(b);if(_.__webglInit===void 0)return;let D=b.source,it=g.get(D);if(it){let et=it[_.__cacheKey];if(et.usedTimes--,et.usedTimes===0)F(b);if(Object.keys(it).length===0)g.delete(D)}i.remove(b)}function F(b){let _=i.get(b);t.deleteTexture(_.__webglTexture);let D=b.source,it=g.get(D);delete it[_.__cacheKey],a.memory.textures--}function W(b){let _=i.get(b);if(_.__depthDisposeCallback)_.__depthDisposeCallback();let D=b.depthTexture;if(D&&D.renderTarget===b)Q(D);if(b.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(_.__webglFramebuffer[et]))for(let at=0;at<_.__webglFramebuffer[et].length;at++)t.deleteFramebuffer(_.__webglFramebuffer[et][at]);else t.deleteFramebuffer(_.__webglFramebuffer[et]);if(_.__webglDepthbuffer)t.deleteRenderbuffer(_.__webglDepthbuffer[et])}else{if(Array.isArray(_.__webglFramebuffer))for(let et=0;et<_.__webglFramebuffer.length;et++)t.deleteFramebuffer(_.__webglFramebuffer[et]);else t.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer)t.deleteRenderbuffer(_.__webglDepthbuffer);if(_.__webglMultisampledFramebuffer)t.deleteFramebuffer(_.__webglMultisampledFramebuffer);if(_.__webglColorRenderbuffer){for(let et=0;et<_.__webglColorRenderbuffer.length;et++)if(_.__webglColorRenderbuffer[et])t.deleteRenderbuffer(_.__webglColorRenderbuffer[et])}if(_.__webglDepthRenderbuffer)t.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let it=b.textures;for(let et=0,at=it.length;et<at;et++){let ct=i.get(it[et]);if(ct.__webglTexture)t.deleteTexture(ct.__webglTexture),a.memory.textures--;i.remove(it[et])}i.remove(b)}let O=0;function q(){O=0}function nt(){return O}function dt(b){O=b}function Z(){let b=O;if(b>=s.maxTextures)It("WebGLTextures: Trying to use "+(b+1)+" texture units while this GPU supports only "+s.maxTextures);return O+=1,b}function j(b){let _=[];return _.push(b.wrapS),_.push(b.wrapT),_.push(b.wrapR||0),_.push(b.magFilter),_.push(b.minFilter),_.push(b.anisotropy),_.push(b.internalFormat),_.push(b.format),_.push(b.type),_.push(b.generateMipmaps),_.push(b.mipmapsAutoUpdate),_.push(b.premultiplyAlpha),_.push(b.flipY),_.push(b.unpackAlignment),_.push(b.colorSpace),_.join()}function _t(b,_){let D=i.get(b);if(b.isVideoTexture)Ct(b);if(b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&D.__version!==b.version){let it=b.image;if(it===null)It("WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)It("WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(D,b,_);return}}else if(b.isExternalTexture)D.__webglTexture=b.sourceTexture?b.sourceTexture:null;n.bindTexture(t.TEXTURE_2D,D.__webglTexture,t.TEXTURE0+_)}function yt(b,_){let D=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&D.__version!==b.version){Ce(D,b,_);return}else if(b.isExternalTexture)D.__webglTexture=b.sourceTexture?b.sourceTexture:null;n.bindTexture(t.TEXTURE_2D_ARRAY,D.__webglTexture,t.TEXTURE0+_)}function wt(b,_){let D=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&D.__version!==b.version){Ce(D,b,_);return}n.bindTexture(t.TEXTURE_3D,D.__webglTexture,t.TEXTURE0+_)}function St(b,_){let D=i.get(b);if(b.version>0&&D.__version!==b.version){De(D,b,_);return}n.bindTexture(t.TEXTURE_CUBE_MAP,D.__webglTexture,t.TEXTURE0+_)}let Zt={[fl]:t.REPEAT,[vs]:t.CLAMP_TO_EDGE,[pl]:t.MIRRORED_REPEAT},Bt={[In]:t.NEAREST,[ml]:t.NEAREST_MIPMAP_NEAREST,[Pi]:t.NEAREST_MIPMAP_LINEAR,[Ge]:t.LINEAR,[ys]:t.LINEAR_MIPMAP_NEAREST,[Pn]:t.LINEAR_MIPMAP_LINEAR},Ut={[El]:t.NEVER,[va]:t.ALWAYS,[Tl]:t.LESS,[_a]:t.LEQUAL,[Al]:t.EQUAL,[xa]:t.GEQUAL,[wl]:t.GREATER,[Rl]:t.NOTEQUAL};function ie(b,_){if(_.type===gn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Ge||_.magFilter===ys||_.magFilter===Pi||_.magFilter===Pn||_.minFilter===Ge||_.minFilter===ys||_.minFilter===Pi||_.minFilter===Pn))It("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(t.texParameteri(b,t.TEXTURE_WRAP_S,Zt[_.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,Zt[_.wrapT]),b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)t.texParameteri(b,t.TEXTURE_WRAP_R,Zt[_.wrapR]);if(t.texParameteri(b,t.TEXTURE_MAG_FILTER,Bt[_.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,Bt[_.minFilter]),_.compareFunction)t.texParameteri(b,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(b,t.TEXTURE_COMPARE_FUNC,Ut[_.compareFunction]);if(e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===In)return;if(_.minFilter!==Pi&&_.minFilter!==Pn)return;if(_.type===gn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let D=e.get("EXT_texture_filter_anisotropic");t.texParameterf(b,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Xt(b,_){let D=!1;if(b.__webglInit===void 0)b.__webglInit=!0,_.addEventListener("dispose",P),C(_);let it=_.source,et=g.get(it);if(et===void 0)et={},g.set(it,et);let at=j(_);if(at!==b.__cacheKey){if(et[at]===void 0)et[at]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,D=!0;et[at].usedTimes++;let ct=et[b.__cacheKey];if(ct!==void 0){if(et[b.__cacheKey].usedTimes--,ct.usedTimes===0)F(_)}b.__cacheKey=at,b.__webglTexture=et[at].texture}return D}function oe(b,_,D){return Math.floor(Math.floor(b/D)/_)}function le(b,_,D,it){let at=b.updateRanges;if(at.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,_.width,_.height,D,it,_.data);else{at.sort((I,J)=>I.start-J.start);let ct=0;for(let I=1;I<at.length;I++){let J=at[ct],X=at[I],st=J.start+J.count,rt=oe(X.start,_.width,4),ut=oe(J.start,_.width,4);if(X.start<=st+1&&rt===ut&&oe(X.start+X.count-1,_.width,4)===rt)J.count=Math.max(J.count,X.start+X.count-J.start);else++ct,at[ct]=X}at.length=ct+1;let V=n.getParameter(t.UNPACK_ROW_LENGTH),K=n.getParameter(t.UNPACK_SKIP_PIXELS),ot=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,_.width);for(let I=0,J=at.length;I<J;I++){let X=at[I],st=Math.floor(X.start/4),rt=Math.ceil(X.count/4),ut=st%_.width,At=Math.floor(st/_.width),Tt=rt,mt=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,ut),n.pixelStorei(t.UNPACK_SKIP_ROWS,At),n.texSubImage2D(t.TEXTURE_2D,0,ut,At,Tt,1,D,it,_.data)}b.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,V),n.pixelStorei(t.UNPACK_SKIP_PIXELS,K),n.pixelStorei(t.UNPACK_SKIP_ROWS,ot)}}function Ce(b,_,D){let it=t.TEXTURE_2D;if(_.isDataArrayTexture||_.isCompressedArrayTexture)it=t.TEXTURE_2D_ARRAY;if(_.isData3DTexture)it=t.TEXTURE_3D;let et=Xt(b,_),at=_.source;n.bindTexture(it,b.__webglTexture,t.TEXTURE0+D);let ct=i.get(at);if(at.version!==ct.__version||et===!0){if(n.activeTexture(t.TEXTURE0+D),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let mt=Ht.getPrimaries(Ht.workingColorSpace),Rt=_.colorSpace===qn?null:Ht.getPrimaries(_.colorSpace),Ft=_.colorSpace===qn||mt===Rt?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft)}n.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment);let K=E(_.image,!1,s.maxTextureSize);K=Nt(_,K);let ot=r.convert(_.format,_.colorSpace),I=r.convert(_.type),J=R(_.internalFormat,ot,I,_.normalized,_.colorSpace,_.isVideoTexture);ie(it,_);let X,st=_.mipmaps,rt=_.isVideoTexture!==!0,ut=ct.__version===void 0||et===!0,At=at.dataReady,Tt=v(_,K);if(_.isDepthTexture){if(J=m(_.format===Nn,_.type),ut)if(rt)n.texStorage2D(t.TEXTURE_2D,1,J,K.width,K.height);else n.texImage2D(t.TEXTURE_2D,0,J,K.width,K.height,0,ot,I,null)}else if(_.isDataTexture)if(st.length>0){if(rt&&ut)n.texStorage2D(t.TEXTURE_2D,Tt,J,st[0].width,st[0].height);for(let mt=0,Rt=st.length;mt<Rt;mt++)if(X=st[mt],rt){if(At)n.texSubImage2D(t.TEXTURE_2D,mt,0,0,X.width,X.height,ot,I,X.data)}else n.texImage2D(t.TEXTURE_2D,mt,J,X.width,X.height,0,ot,I,X.data);_.generateMipmaps=!1}else if(rt){if(ut)n.texStorage2D(t.TEXTURE_2D,Tt,J,K.width,K.height);if(At)le(_,K,ot,I)}else n.texImage2D(t.TEXTURE_2D,0,J,K.width,K.height,0,ot,I,K.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){if(rt&&ut)n.texStorage3D(t.TEXTURE_2D_ARRAY,Tt,J,st[0].width,st[0].height,K.depth);for(let mt=0,Rt=st.length;mt<Rt;mt++)if(X=st[mt],_.format!==_n)if(ot!==null)if(rt){if(At)if(_.layerUpdates.size>0){let Ft=Ya(X.width,X.height,_.format,_.type);for(let gt of _.layerUpdates){let Kt=X.data.subarray(gt*Ft/X.data.BYTES_PER_ELEMENT,(gt+1)*Ft/X.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,mt,0,0,gt,X.width,X.height,1,ot,Kt)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,mt,0,0,0,X.width,X.height,K.depth,ot,X.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,mt,J,X.width,X.height,K.depth,0,X.data,0,0);else It("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(rt){if(At)n.texSubImage3D(t.TEXTURE_2D_ARRAY,mt,0,0,0,X.width,X.height,K.depth,ot,I,X.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,mt,J,X.width,X.height,K.depth,0,ot,I,X.data);if(_.layerUpdates.size>0)_.clearLayerUpdates()}else{if(rt&&ut)n.texStorage2D(t.TEXTURE_2D,Tt,J,st[0].width,st[0].height);for(let mt=0,Rt=st.length;mt<Rt;mt++)if(X=st[mt],_.format!==_n)if(ot!==null)if(rt){if(At)n.compressedTexSubImage2D(t.TEXTURE_2D,mt,0,0,X.width,X.height,ot,X.data)}else n.compressedTexImage2D(t.TEXTURE_2D,mt,J,X.width,X.height,0,X.data);else It("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(rt){if(At)n.texSubImage2D(t.TEXTURE_2D,mt,0,0,X.width,X.height,ot,I,X.data)}else n.texImage2D(t.TEXTURE_2D,mt,J,X.width,X.height,0,ot,I,X.data)}else if(_.isDataArrayTexture)if(rt){if(ut)n.texStorage3D(t.TEXTURE_2D_ARRAY,Tt,J,K.width,K.height,K.depth);if(At)if(_.layerUpdates.size>0){let mt=Ya(K.width,K.height,_.format,_.type);for(let Rt of _.layerUpdates){let Ft=K.data.subarray(Rt*mt/K.data.BYTES_PER_ELEMENT,(Rt+1)*mt/K.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Rt,K.width,K.height,1,ot,I,Ft)}_.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,ot,I,K.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,J,K.width,K.height,K.depth,0,ot,I,K.data);else if(_.isData3DTexture)if(rt){if(ut)n.texStorage3D(t.TEXTURE_3D,Tt,J,K.width,K.height,K.depth);if(At)n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,ot,I,K.data)}else n.texImage3D(t.TEXTURE_3D,0,J,K.width,K.height,K.depth,0,ot,I,K.data);else if(_.isFramebufferTexture){if(ut)if(rt)n.texStorage2D(t.TEXTURE_2D,Tt,J,K.width,K.height);else{let mt=K.width,Rt=K.height;for(let Ft=0;Ft<Tt;Ft++)n.texImage2D(t.TEXTURE_2D,Ft,J,mt,Rt,0,ot,I,null),mt>>=1,Rt>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in t){let mt=t.canvas;if(!mt.hasAttribute("layoutsubtree"))mt.setAttribute("layoutsubtree","true");if(K.parentNode!==mt){mt.appendChild(K),d.add(_),mt.onpaint=(Rt)=>{let Ft=Rt.changedElements;for(let gt of d)if(Ft.includes(gt.image))gt.needsUpdate=!0},mt.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,K);else{let{RGBA:Ft,RGBA:gt,UNSIGNED_BYTE:Kt}=t;t.texElementImage2D(t.TEXTURE_2D,0,Ft,gt,Kt,K)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(st.length>0){if(rt&&ut){let mt=Se(st[0]);n.texStorage2D(t.TEXTURE_2D,Tt,J,mt.width,mt.height)}for(let mt=0,Rt=st.length;mt<Rt;mt++)if(X=st[mt],rt){if(At)n.texSubImage2D(t.TEXTURE_2D,mt,0,0,ot,I,X)}else n.texImage2D(t.TEXTURE_2D,mt,J,ot,I,X);_.generateMipmaps=!1}else if(rt){if(ut){let mt=Se(K);n.texStorage2D(t.TEXTURE_2D,Tt,J,mt.width,mt.height)}if(At)n.texSubImage2D(t.TEXTURE_2D,0,0,0,ot,I,K)}else n.texImage2D(t.TEXTURE_2D,0,J,ot,I,K);if(T(_)&&_.mipmapsAutoUpdate===!0)S(it);if(ct.__version=at.version,_.onUpdate)_.onUpdate(_)}b.__version=_.version}function De(b,_,D){if(_.image.length!==6)return;let it=Xt(b,_),et=_.source;n.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+D);let at=i.get(et);if(et.version!==at.__version||it===!0){n.activeTexture(t.TEXTURE0+D);let ct=Ht.getPrimaries(Ht.workingColorSpace),V=_.colorSpace===qn?null:Ht.getPrimaries(_.colorSpace),K=_.colorSpace===qn||ct===V?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let ot=_.isCompressedTexture||_.image[0].isCompressedTexture,I=_.image[0]&&_.image[0].isDataTexture,J=[];for(let gt=0;gt<6;gt++){if(!ot&&!I)J[gt]=E(_.image[gt],!0,s.maxCubemapSize);else J[gt]=I?_.image[gt].image:_.image[gt];J[gt]=Nt(_,J[gt])}let X=J[0],st=r.convert(_.format,_.colorSpace),rt=r.convert(_.type),ut=R(_.internalFormat,st,rt,_.normalized,_.colorSpace),At=_.isVideoTexture!==!0,Tt=at.__version===void 0||it===!0,mt=et.dataReady,Rt=v(_,X);ie(t.TEXTURE_CUBE_MAP,_);let Ft;if(_.isDepthTexture){if(ut=m(_.format===Nn,_.type),Tt)if(At)n.texStorage2D(t.TEXTURE_CUBE_MAP,1,ut,X.width,X.height);else for(let gt=0;gt<6;gt++)n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ut,X.width,X.height,0,st,rt,null)}else if(ot){if(At&&Tt)n.texStorage2D(t.TEXTURE_CUBE_MAP,Rt,ut,X.width,X.height);for(let gt=0;gt<6;gt++){Ft=J[gt].mipmaps;for(let Kt=0;Kt<Ft.length;Kt++){let me=Ft[Kt];if(_.format!==_n)if(st!==null)if(At){if(mt)n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Kt,0,0,me.width,me.height,st,me.data)}else n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Kt,ut,me.width,me.height,0,me.data);else It("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(At){if(mt)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Kt,0,0,me.width,me.height,st,rt,me.data)}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Kt,ut,me.width,me.height,0,st,rt,me.data)}}}else{if(Ft=_.mipmaps,At&&Tt){if(Ft.length>0)Rt++;let gt=Se(J[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Rt,ut,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(I){if(At){if(mt)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,J[gt].width,J[gt].height,st,rt,J[gt].data)}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ut,J[gt].width,J[gt].height,0,st,rt,J[gt].data);for(let Kt=0;Kt<Ft.length;Kt++){let an=Ft[Kt].image[gt].image;if(At){if(mt)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Kt+1,0,0,an.width,an.height,st,rt,an.data)}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Kt+1,ut,an.width,an.height,0,st,rt,an.data)}}else{if(At){if(mt)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,st,rt,J[gt])}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ut,st,rt,J[gt]);for(let Kt=0;Kt<Ft.length;Kt++){let me=Ft[Kt];if(At){if(mt)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Kt+1,0,0,st,rt,me.image[gt])}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Kt+1,ut,st,rt,me.image[gt])}}}if(T(_)&&_.mipmapsAutoUpdate===!0)S(t.TEXTURE_CUBE_MAP);if(at.__version=et.version,_.onUpdate)_.onUpdate(_)}b.__version=_.version}function ce(b,_,D,it,et,at){let ct=r.convert(D.format,D.colorSpace),V=r.convert(D.type),K=R(D.internalFormat,ct,V,D.normalized,D.colorSpace),ot=i.get(_),I=i.get(D);if(I.__renderTarget=_,!ot.__hasExternalTextures){let J=Math.max(1,_.width>>at),X=Math.max(1,_.height>>at);if(et===t.TEXTURE_3D||et===t.TEXTURE_2D_ARRAY)n.texImage3D(et,at,K,J,X,_.depth,0,ct,V,null);else n.texImage2D(et,at,K,J,X,0,ct,V,null)}if(n.bindFramebuffer(t.FRAMEBUFFER,b),te(_))o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,it,et,I.__webglTexture,0,ft(_));else if(et===t.TEXTURE_2D||et>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)t.framebufferTexture2D(t.FRAMEBUFFER,it,et,I.__webglTexture,at);n.bindFramebuffer(t.FRAMEBUFFER,null)}function ye(b,_,D){if(t.bindRenderbuffer(t.RENDERBUFFER,b),_.depthBuffer){let it=_.depthTexture,et=it&&it.isDepthTexture?it.type:null,at=m(_.stencilBuffer,et),ct=_.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(te(_))o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ft(_),at,_.width,_.height);else if(D)t.renderbufferStorageMultisample(t.RENDERBUFFER,ft(_),at,_.width,_.height);else t.renderbufferStorage(t.RENDERBUFFER,at,_.width,_.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,ct,t.RENDERBUFFER,b)}else{let it=_.textures;for(let et=0;et<it.length;et++){let at=it[et],ct=r.convert(at.format,at.colorSpace),V=r.convert(at.type),K=R(at.internalFormat,ct,V,at.normalized,at.colorSpace);if(te(_))o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ft(_),K,_.width,_.height);else if(D)t.renderbufferStorageMultisample(t.RENDERBUFFER,ft(_),K,_.width,_.height);else t.renderbufferStorage(t.RENDERBUFFER,K,_.width,_.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ie(b,_,D){let it=_.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,b),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let et=i.get(_.depthTexture);et.__renderTarget=_;let at=it?_.depthTexture.image[0]:_.depthTexture.image;if(!et.__webglTexture||at.width!==_.width||at.height!==_.height)at.width=_.width,at.height=_.height,_.depthTexture.needsUpdate=!0;if(it)St(_.depthTexture,0);else _t(_.depthTexture,0);let ct=et.__webglTexture,V=ft(_),K=it?t.TEXTURE_CUBE_MAP_POSITIVE_X+D:t.TEXTURE_2D,ot=_.depthTexture.format===Nn?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(_.depthTexture.format===xi)if(te(_))o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ot,K,ct,0,V);else t.framebufferTexture2D(t.FRAMEBUFFER,ot,K,ct,0);else if(_.depthTexture.format===Nn)if(te(_))o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ot,K,ct,0,V);else t.framebufferTexture2D(t.FRAMEBUFFER,ot,K,ct,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Pe(b){let _=i.get(b),D=b.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==b.depthTexture){let it=b.depthTexture;if(_.__depthDisposeCallback)_.__depthDisposeCallback();if(it){let et=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,it.removeEventListener("dispose",et)};it.addEventListener("dispose",et),_.__depthDisposeCallback=et}_.__boundDepthTexture=it}if(b.depthTexture&&!_.__autoAllocateDepthBuffer)if(D)for(let it=0;it<6;it++)Ie(_.__webglFramebuffer[it],b,it);else if(b.texture.mipmaps.length>0)Ie(_.__webglFramebuffer[0],b,0);else Ie(_.__webglFramebuffer,b,0);else if(D){_.__webglDepthbuffer=[];for(let it=0;it<6;it++)if(n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[it]),_.__webglDepthbuffer[it]===void 0)_.__webglDepthbuffer[it]=t.createRenderbuffer(),ye(_.__webglDepthbuffer[it],b,!1);else{let et=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,at=_.__webglDepthbuffer[it];t.bindRenderbuffer(t.RENDERBUFFER,at),t.framebufferRenderbuffer(t.FRAMEBUFFER,et,t.RENDERBUFFER,at)}}else{if(b.texture.mipmaps.length>0)n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[0]);else n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer);if(_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=t.createRenderbuffer(),ye(_.__webglDepthbuffer,b,!1);else{let et=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,at=_.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,at),t.framebufferRenderbuffer(t.FRAMEBUFFER,et,t.RENDERBUFFER,at)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ve(b,_,D){let it=i.get(b);if(_!==void 0)ce(it.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0);if(D!==void 0)Pe(b)}function N(b){let _=b.texture,D=i.get(b),it=i.get(_);b.addEventListener("dispose",B),C(b);let et=b.textures,at=b.isWebGLCubeRenderTarget===!0,ct=et.length>1;if(!ct){if(it.__webglTexture===void 0)it.__webglTexture=t.createTexture();it.__version=_.version,a.memory.textures++}if(at){D.__webglFramebuffer=[];for(let V=0;V<6;V++)if(_.mipmaps.length>0){D.__webglFramebuffer[V]=[];for(let K=0;K<_.mipmaps.length;K++)D.__webglFramebuffer[V][K]=t.createFramebuffer()}else D.__webglFramebuffer[V]=t.createFramebuffer()}else{if(_.mipmaps.length>0){D.__webglFramebuffer=[];for(let V=0;V<_.mipmaps.length;V++)D.__webglFramebuffer[V]=t.createFramebuffer()}else D.__webglFramebuffer=t.createFramebuffer();if(ct)for(let V=0,K=et.length;V<K;V++){let ot=i.get(et[V]);if(ot.__webglTexture===void 0)ot.__webglTexture=t.createTexture(),a.memory.textures++}if(b.samples>0&&te(b)===!1){D.__webglMultisampledFramebuffer=t.createFramebuffer(),D.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let V=0;V<et.length;V++){let K=et[V];D.__webglColorRenderbuffer[V]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,D.__webglColorRenderbuffer[V]);let ot=r.convert(K.format,K.colorSpace),I=r.convert(K.type),J=R(K.internalFormat,ot,I,K.normalized,K.colorSpace,b.isXRRenderTarget===!0),X=ft(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,X,J,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+V,t.RENDERBUFFER,D.__webglColorRenderbuffer[V])}if(t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer)D.__webglDepthRenderbuffer=t.createRenderbuffer(),ye(D.__webglDepthRenderbuffer,b,!0);n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(at){n.bindTexture(t.TEXTURE_CUBE_MAP,it.__webglTexture),ie(t.TEXTURE_CUBE_MAP,_);for(let V=0;V<6;V++)if(_.mipmaps.length>0)for(let K=0;K<_.mipmaps.length;K++)ce(D.__webglFramebuffer[V][K],b,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+V,K);else ce(D.__webglFramebuffer[V],b,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+V,0);if(T(_))S(t.TEXTURE_CUBE_MAP);else if(_.mipmaps.length>0)t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MAX_LEVEL,_.mipmaps.length-1);n.unbindTexture()}else if(ct){for(let V=0,K=et.length;V<K;V++){let ot=et[V],I=i.get(ot),J=t.TEXTURE_2D;if(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)J=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY;if(n.bindTexture(J,I.__webglTexture),ie(J,ot),ce(D.__webglFramebuffer,b,ot,t.COLOR_ATTACHMENT0+V,J,0),T(ot))S(J)}n.unbindTexture()}else{let V=t.TEXTURE_2D;if(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)V=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY;if(n.bindTexture(V,it.__webglTexture),ie(V,_),_.mipmaps.length>0)for(let K=0;K<_.mipmaps.length;K++)ce(D.__webglFramebuffer[K],b,_,t.COLOR_ATTACHMENT0,V,K);else ce(D.__webglFramebuffer,b,_,t.COLOR_ATTACHMENT0,V,0);if(T(_))S(V);else if(_.mipmaps.length>0)t.texParameteri(V,t.TEXTURE_MAX_LEVEL,_.mipmaps.length-1);n.unbindTexture()}if(b.depthBuffer)Pe(b)}function Xe(b){let _=b.textures;for(let D=0,it=_.length;D<it;D++){let et=_[D];if(T(et)&&et.mipmapsAutoUpdate===!0){let at=A(b),ct=i.get(et).__webglTexture;n.bindTexture(at,ct),S(at),n.unbindTexture()}}}let $t=[];function pe(b){if(b.samples>0){if(te(b)===!1){let{textures:_,width:D,height:it}=b,et=t.COLOR_BUFFER_BIT,at=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ct=i.get(b),V=_.length>1;if(V)for(let ot=0;ot<_.length;ot++)n.bindFramebuffer(t.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ot,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ct.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ot,t.TEXTURE_2D,null,0);if(n.bindFramebuffer(t.READ_FRAMEBUFFER,ct.__webglMultisampledFramebuffer),b.texture.mipmaps.length>0)n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ct.__webglFramebuffer[0]);else n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let ot=0;ot<_.length;ot++){if(b.resolveDepthBuffer){if(b.depthBuffer)et|=t.DEPTH_BUFFER_BIT;if(b.stencilBuffer&&b.resolveStencilBuffer)et|=t.STENCIL_BUFFER_BIT}if(V){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ct.__webglColorRenderbuffer[ot]);let I=i.get(_[ot]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,I,0)}if(t.blitFramebuffer(0,0,D,it,0,0,D,it,et,t.NEAREST),l===!0){if($t.length=0,$t.push(t.COLOR_ATTACHMENT0+ot),b.depthBuffer&&b.storeMultisampledDepthBuffer===!1)$t.push(at);t.invalidateFramebuffer(t.READ_FRAMEBUFFER,$t)}}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),V)for(let ot=0;ot<_.length;ot++){n.bindFramebuffer(t.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ot,t.RENDERBUFFER,ct.__webglColorRenderbuffer[ot]);let I=i.get(_[ot]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ct.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ot,t.TEXTURE_2D,I,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ct.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&l){let _=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[_])}}}function ft(b){return Math.min(s.maxSamples,b.samples)}function te(b){let _=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Ct(b){let _=a.render.frame;if(f.get(b)!==_)f.set(b,_),b.update()}function Nt(b,_){let{colorSpace:D,format:it,type:et}=b;if(b.isCompressedTexture===!0||b.isVideoTexture===!0)return _;if(D!==ma&&D!==qn)if(Ht.getTransfer(D)===jt){if(it!==_n||et!==$e)It("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else Pt("WebGLTextures: Unsupported texture color space:",D);return _}function Se(b){if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement)c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height;else if(typeof VideoFrame<"u"&&b instanceof VideoFrame)c.width=b.displayWidth,c.height=b.displayHeight;else c.width=b.width,c.height=b.height;return c}this.allocateTextureUnit=Z,this.resetTextureUnits=q,this.getTextureUnits=nt,this.setTextureUnits=dt,this.setTexture2D=_t,this.setTexture2DArray=yt,this.setTexture3D=wt,this.setTextureCube=St,this.rebindTextures=Ve,this.setupRenderTarget=N,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=pe,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=te,this.dispose=Y}function qp(t,e){function n(i,s=qn){let r,a=Ht.getTransfer(s);if(i===$e)return t.UNSIGNED_BYTE;if(i===Nr)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Dr)return t.UNSIGNED_SHORT_5_5_5_1;if(i===xl)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===vl)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===gl)return t.BYTE;if(i===_l)return t.SHORT;if(i===Li)return t.UNSIGNED_SHORT;if(i===Lr)return t.INT;if(i===Ln)return t.UNSIGNED_INT;if(i===gn)return t.FLOAT;if(i===nn)return t.HALF_FLOAT;if(i===yl)return t.ALPHA;if(i===Sl)return t.RGB;if(i===_n)return t.RGBA;if(i===xi)return t.DEPTH_COMPONENT;if(i===Nn)return t.DEPTH_STENCIL;if(i===Ml)return t.RED;if(i===Ur)return t.RED_INTEGER;if(i===Xn)return t.RG;if(i===Fr)return t.RG_INTEGER;if(i===Or)return t.RGBA_INTEGER;if(i===Ss||i===Ms||i===bs||i===Es)if(a===jt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ss)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ms)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===bs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Es)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ss)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ms)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===bs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Es)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Br||i===zr||i===Gr||i===kr)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Br)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===zr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Gr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===kr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Hr||i===Wr||i===Vr||i===Xr||i===qr||i===Ts||i===Yr)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Hr||i===Wr)return a===jt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Vr)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Xr)return r.COMPRESSED_R11_EAC;if(i===qr)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Ts)return r.COMPRESSED_RG11_EAC;if(i===Yr)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Zr||i===Jr||i===$r||i===Kr||i===Qr||i===jr||i===ta||i===ea||i===na||i===ia||i===sa||i===ra||i===aa||i===oa)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Zr)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Jr)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===$r)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Kr)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Qr)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===jr)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ta)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ea)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===na)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ia)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===sa)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ra)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===aa)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===oa)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===la||i===ca||i===ha)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===la)return a===jt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ca)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ha)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ua||i===da||i===As||i===fa)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===ua)return r.COMPRESSED_RED_RGTC1_EXT;if(i===da)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===As)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===fa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(i===Vn)return t.UNSIGNED_INT_24_8;return t[i]!==void 0?t[i]:null}return{convert:n}}var Yp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Zp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class bc{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Fs(t.texture);if(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)this.depthNear=t.depthNear,this.depthFar=t.depthFar;this.texture=n}}getMesh(t){if(this.texture!==null){if(this.mesh===null){let e=t.cameras[0].viewport,n=new Mn({vertexShader:Yp,fragmentShader:Zp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new He(new Gi(20,20),n)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ec extends xn{constructor(t,e){super();let n=this,i=null,s=1,r=null,a="local-floor",o=1,l=null,c=null,f=null,d=null,u=null,g=null,y=typeof XRWebGLBinding<"u",M=new bc,h={},p=e.getContextAttributes(),E=null,T=null,S=[],A=[],R=new Wt,m=null,v=null,C=new Le;C.viewport=new ae;let k=new Le;k.viewport=new ae;let P=[C,k],B=new Va,Q=null,w=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let j=S[Z];if(j===void 0)j=new Ui,S[Z]=j;return j.getTargetRaySpace()},this.getControllerGrip=function(Z){let j=S[Z];if(j===void 0)j=new Ui,S[Z]=j;return j.getGripSpace()},this.getHand=function(Z){let j=S[Z];if(j===void 0)j=new Ui,S[Z]=j;return j.getHandSpace()};function Y(Z){let j=A.indexOf(Z.inputSource);if(j===-1)return;let _t=S[j];if(_t!==void 0)_t.update(Z.inputSource,Z.frame,l||r),_t.dispatchEvent({type:Z.type,data:Z.inputSource})}function tt(){i.removeEventListener("select",Y),i.removeEventListener("selectstart",Y),i.removeEventListener("selectend",Y),i.removeEventListener("squeeze",Y),i.removeEventListener("squeezestart",Y),i.removeEventListener("squeezeend",Y),i.removeEventListener("end",tt),i.removeEventListener("inputsourceschange",F);for(let Z=0;Z<S.length;Z++){let j=A[Z];if(j===null)continue;A[Z]=null,S[Z].disconnect(j)}Q=null,w=null,M.reset();for(let Z in h)delete h[Z];if(t.setRenderTarget(E),u=null,d=null,f=null,i=null,T=null,dt.stop(),n.isPresenting=!1,t.setPixelRatio(m),t.setSize(R.width,R.height,!1),v!==null){let Z=v.camera;Z.fov=v.fov,Z.zoom=v.zoom,Z.updateProjectionMatrix(),v=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){if(s=Z,n.isPresenting===!0)It("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){if(a=Z,n.isPresenting===!0)It("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){if(f===null&&y)f=new XRWebGLBinding(i,e);return f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(E=t.getRenderTarget(),i.addEventListener("select",Y),i.addEventListener("selectstart",Y),i.addEventListener("selectend",Y),i.addEventListener("squeeze",Y),i.addEventListener("squeezestart",Y),i.addEventListener("squeezeend",Y),i.addEventListener("end",tt),i.addEventListener("inputsourceschange",F),p.xrCompatible!==!0)await e.makeXRCompatible();if(m=t.getPixelRatio(),t.getSize(R),!(y&&("createProjectionLayer"in XRWebGLBinding.prototype))){let _t={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};u=new XRWebGLLayer(i,e,_t),i.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),T=new ke(u.framebufferWidth,u.framebufferHeight,{format:_n,type:$e,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let _t=null,yt=null,wt=null;if(p.depth)wt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,_t=p.stencil?Nn:xi,yt=p.stencil?Vn:Ln;let St={colorFormat:e.RGBA8,depthFormat:wt,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(St),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),T=new ke(d.textureWidth,d.textureHeight,{format:_n,type:$e,depthTexture:new Dn(d.textureWidth,d.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(o),l=null,r=await i.requestReferenceSpace(a),dt.setContext(i),dt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function F(Z){for(let j=0;j<Z.removed.length;j++){let _t=Z.removed[j],yt=A.indexOf(_t);if(yt>=0)A[yt]=null,S[yt].disconnect(_t)}for(let j=0;j<Z.added.length;j++){let _t=Z.added[j],yt=A.indexOf(_t);if(yt===-1){for(let St=0;St<S.length;St++)if(St>=A.length){A.push(_t),yt=St;break}else if(A[St]===null){A[St]=_t,yt=St;break}if(yt===-1)break}let wt=S[yt];if(wt)wt.connect(_t)}}function W(Z,j){if(j===null)Z.matrixWorld.copy(Z.matrix);else Z.matrixWorld.multiplyMatrices(j.matrixWorld,Z.matrix);Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let{near:j,far:_t}=Z;if(M.texture!==null){if(M.depthNear>0)j=M.depthNear;if(M.depthFar>0)_t=M.depthFar}if(B.near=k.near=C.near=j,B.far=k.far=C.far=_t,Q!==B.near||w!==B.far)i.updateRenderState({depthNear:B.near,depthFar:B.far}),Q=B.near,w=B.far;B.layers.mask=Z.layers.mask|6,C.layers.mask=B.layers.mask&-5,k.layers.mask=B.layers.mask&-3;let yt=Z.parent,wt=B.cameras;W(B,yt);for(let St=0;St<wt.length;St++)W(wt[St],yt);if(B.projectionMatrix.copy(C.projectionMatrix),B.projectionMatrixInverse.copy(C.projectionMatrixInverse),v===null&&Z.isPerspectiveCamera)v={camera:Z,fov:Z.fov,zoom:Z.zoom};O(Z,B,yt)};function O(Z,j,_t){if(_t===null)Z.matrix.copy(j.matrixWorld);else Z.matrix.copy(_t.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(j.matrixWorld);if(Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(j.projectionMatrix),Z.projectionMatrixInverse.copy(j.projectionMatrixInverse),Z.isPerspectiveCamera)Z.fov=ms*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1}this.getCamera=function(){return B},this.getFoveation=function(){if(d===null&&u===null)return;return o},this.setFoveation=function(Z){if(o=Z,d!==null)d.fixedFoveation=Z;if(u!==null&&u.fixedFoveation!==void 0)u.fixedFoveation=Z},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(B)},this.getCameraTexture=function(Z){return h[Z]};let q=null;function nt(Z,j){if(c=j.getViewerPose(l||r),g=j,c!==null){let _t=c.views;if(u!==null)t.setRenderTargetFramebuffer(T,u.framebuffer),t.setRenderTarget(T);let yt=!1;if(_t.length!==B.cameras.length)B.cameras.length=0,yt=!0;for(let Bt=0;Bt<_t.length;Bt++){let Ut=_t[Bt],ie=null;if(u!==null)ie=u.getViewport(Ut);else{let oe=f.getViewSubImage(d,Ut);if(ie=oe.viewport,Bt===0)t.setRenderTargetTextures(T,oe.colorTexture,oe.depthStencilTexture),t.setRenderTarget(T)}let Xt=P[Bt];if(Xt===void 0)Xt=new Le,Xt.layers.enable(Bt),Xt.viewport=new ae,P[Bt]=Xt;if(Xt.matrix.fromArray(Ut.transform.matrix),Xt.matrix.decompose(Xt.position,Xt.quaternion,Xt.scale),Xt.projectionMatrix.fromArray(Ut.projectionMatrix),Xt.projectionMatrixInverse.copy(Xt.projectionMatrix).invert(),Xt.viewport.set(ie.x,ie.y,ie.width,ie.height),Bt===0)B.matrix.copy(Xt.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale);if(yt===!0)B.cameras.push(Xt)}let wt=i.enabledFeatures;if(wt&&wt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&y){f=n.getBinding();let Bt=f.getDepthInformation(_t[0]);if(Bt&&Bt.isValid&&Bt.texture)M.init(Bt,i.renderState)}if(wt&&wt.includes("camera-access")&&y){t.state.unbindTexture(),f=n.getBinding();for(let Bt=0;Bt<_t.length;Bt++){let Ut=_t[Bt].camera;if(Ut){let ie=h[Ut];if(!ie)ie=new Fs,h[Ut]=ie;let Xt=f.getCameraImage(Ut);ie.sourceTexture=Xt}}}}for(let _t=0;_t<S.length;_t++){let yt=A[_t],wt=S[_t];if(yt!==null&&wt!==void 0)wt.update(yt,j,l||r)}if(q)q(Z,j);if(j.detectedPlanes)n.dispatchEvent({type:"planesdetected",data:j});g=null}let dt=new lc;dt.setAnimationLoop(nt),this.setAnimationLoop=function(Z){q=Z},this.dispose=function(){}}}var Jp=new se,Tc=new Lt;Tc.set(-1,0,0,0,1,0,0,0,1);function $p(t,e){function n(h,p){if(h.matrixAutoUpdate===!0)h.updateMatrix();p.value.copy(h.matrix)}function i(h,p){if(p.color.getRGB(h.fogColor.value,Ca(t)),p.isFog)h.fogNear.value=p.near,h.fogFar.value=p.far;else if(p.isFogExp2)h.fogDensity.value=p.density}function s(h,p,E,T,S){if(p.isNodeMaterial)p.uniformsNeedUpdate=!1;else if(p.isMeshBasicMaterial)r(h,p);else if(p.isMeshLambertMaterial){if(r(h,p),p.envMap)h.envMapIntensity.value=p.envMapIntensity}else if(p.isMeshToonMaterial)r(h,p),d(h,p);else if(p.isMeshPhongMaterial){if(r(h,p),f(h,p),p.envMap)h.envMapIntensity.value=p.envMapIntensity}else if(p.isMeshStandardMaterial){if(r(h,p),u(h,p),p.isMeshPhysicalMaterial)g(h,p,S)}else if(p.isMeshMatcapMaterial)r(h,p),y(h,p);else if(p.isMeshDepthMaterial)r(h,p);else if(p.isMeshDistanceMaterial)r(h,p),M(h,p);else if(p.isMeshNormalMaterial)r(h,p);else if(p.isLineBasicMaterial){if(a(h,p),p.isLineDashedMaterial)o(h,p)}else if(p.isPointsMaterial)l(h,p,E,T);else if(p.isSpriteMaterial)c(h,p);else if(p.isShadowMaterial)h.color.value.copy(p.color),h.opacity.value=p.opacity;else if(p.isShaderMaterial)p.uniformsNeedUpdate=!1}function r(h,p){if(h.opacity.value=p.opacity,p.color)h.diffuse.value.copy(p.color);if(p.emissive)h.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity);if(p.map)h.map.value=p.map,n(p.map,h.mapTransform);if(p.alphaMap)h.alphaMap.value=p.alphaMap,n(p.alphaMap,h.alphaMapTransform);if(p.bumpMap){if(h.bumpMap.value=p.bumpMap,n(p.bumpMap,h.bumpMapTransform),h.bumpScale.value=p.bumpScale,p.side===Ne)h.bumpScale.value*=-1}if(p.normalMap){if(h.normalMap.value=p.normalMap,n(p.normalMap,h.normalMapTransform),h.normalScale.value.copy(p.normalScale),p.side===Ne)h.normalScale.value.negate()}if(p.displacementMap)h.displacementMap.value=p.displacementMap,n(p.displacementMap,h.displacementMapTransform),h.displacementScale.value=p.displacementScale,h.displacementBias.value=p.displacementBias;if(p.emissiveMap)h.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,h.emissiveMapTransform);if(p.specularMap)h.specularMap.value=p.specularMap,n(p.specularMap,h.specularMapTransform);if(p.alphaTest>0)h.alphaTest.value=p.alphaTest;let E=e.get(p),{envMap:T,envMapRotation:S}=E;if(T){if(h.envMap.value=T,h.envMapRotation.value.setFromMatrix4(Jp.makeRotationFromEuler(S)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1)h.envMapRotation.value.premultiply(Tc);h.reflectivity.value=p.reflectivity,h.ior.value=p.ior,h.refractionRatio.value=p.refractionRatio}if(p.lightMap)h.lightMap.value=p.lightMap,h.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,h.lightMapTransform);if(p.aoMap)h.aoMap.value=p.aoMap,h.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,h.aoMapTransform)}function a(h,p){if(h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,p.map)h.map.value=p.map,n(p.map,h.mapTransform)}function o(h,p){h.dashSize.value=p.dashSize,h.totalSize.value=p.dashSize+p.gapSize,h.scale.value=p.scale}function l(h,p,E,T){if(h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,h.size.value=p.size*E,h.scale.value=T*0.5,p.map)h.map.value=p.map,n(p.map,h.uvTransform);if(p.alphaMap)h.alphaMap.value=p.alphaMap,n(p.alphaMap,h.alphaMapTransform);if(p.alphaTest>0)h.alphaTest.value=p.alphaTest}function c(h,p){if(h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,h.rotation.value=p.rotation,p.map)h.map.value=p.map,n(p.map,h.mapTransform);if(p.alphaMap)h.alphaMap.value=p.alphaMap,n(p.alphaMap,h.alphaMapTransform);if(p.alphaTest>0)h.alphaTest.value=p.alphaTest}function f(h,p){h.specular.value.copy(p.specular),h.shininess.value=Math.max(p.shininess,0.0001)}function d(h,p){if(p.gradientMap)h.gradientMap.value=p.gradientMap}function u(h,p){if(h.metalness.value=p.metalness,p.metalnessMap)h.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,h.metalnessMapTransform);if(h.roughness.value=p.roughness,p.roughnessMap)h.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,h.roughnessMapTransform);if(p.envMap)h.envMapIntensity.value=p.envMapIntensity}function g(h,p,E){if(h.ior.value=p.ior,p.diffuseRoughness>0){if(h.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap)h.diffuseRoughnessMap.value=p.diffuseRoughnessMap,n(p.diffuseRoughnessMap,h.diffuseRoughnessMapTransform)}if(p.sheen>0){if(h.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),h.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap)h.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,h.sheenColorMapTransform);if(p.sheenRoughnessMap)h.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,h.sheenRoughnessMapTransform)}if(p.clearcoat>0){if(h.clearcoat.value=p.clearcoat,h.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap)h.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,h.clearcoatMapTransform);if(p.clearcoatRoughnessMap)h.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform);if(p.clearcoatNormalMap){if(h.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ne)h.clearcoatNormalScale.value.negate()}}if(p.dispersion>0)h.dispersion.value=p.dispersion;if(p.retroreflectivity>0)h.retroreflectivity.value=p.retroreflectivity;if(p.iridescence>0){if(h.iridescence.value=p.iridescence,h.iridescenceIOR.value=p.iridescenceIOR,h.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,h.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap)h.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,h.iridescenceMapTransform);if(p.iridescenceThicknessMap)h.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,h.iridescenceThicknessMapTransform)}if(p.transmission>0){if(h.transmission.value=p.transmission,h.transmissionSamplerMap.value=E.texture,h.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap)h.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,h.transmissionMapTransform);if(h.thickness.value=p.thickness,p.thicknessMap)h.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,h.thicknessMapTransform);h.attenuationDistance.value=p.attenuationDistance,h.attenuationColor.value.copy(p.attenuationColor)}if(p.anisotropy>0){if(h.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap)h.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,h.anisotropyMapTransform)}if(h.specularIntensity.value=p.specularIntensity,h.specularColor.value.copy(p.specularColor),p.specularColorMap)h.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,h.specularColorMapTransform);if(p.specularIntensityMap)h.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,h.specularIntensityMapTransform)}function y(h,p){if(p.matcap)h.matcap.value=p.matcap}function M(h,p){let E=e.get(p).light;h.referencePosition.value.setFromMatrixPosition(E.matrixWorld),h.nearDistance.value=E.shadow.camera.near,h.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Kp(t,e,n,i){let s={},r={};function a(E,T){let S=T.program;i.uniformBlockBinding(E,S,s[E.id])}function o(E,T){let S=s[E.id];if(S===void 0)y(E),S=l(E),s[E.id]=S,E.addEventListener("dispose",h);let A=T.program;i.updateUBOMapping(E,A);let R=e.render.frame;if(r[E.id]!==R)c(E),r[E.id]=R}function l(E){let T=t.createBuffer(),{__size:S,usage:A}=E;return t.bindBuffer(t.UNIFORM_BUFFER,T),t.bufferData(t.UNIFORM_BUFFER,S,A),t.bindBuffer(t.UNIFORM_BUFFER,null),T}function c(E){let T=s[E.id],{uniforms:S,__cache:A}=E;t.bindBuffer(t.UNIFORM_BUFFER,T);for(let R=0,m=S.length;R<m;R++){let v=S[R];if(Array.isArray(v))for(let C=0,k=v.length;C<k;C++)f(v[C],R,C,A);else f(v,R,0,A)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function f(E,T,S,A){if(u(E,T,S,A)===!0){let{__offset:R,value:m}=E;if(Array.isArray(m)){let v=0;for(let C=0;C<m.length;C++){let k=m[C],P=M(k,!0);d(k,E.__data,v),v+=P.storage/Float32Array.BYTES_PER_ELEMENT}}else d(m,E.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,R,E.__data)}}function d(E,T,S){if(typeof E==="number"||typeof E==="boolean")T[S]=E;else if(E.isMatrix3)T[S]=E.elements[0],T[S+1]=E.elements[1],T[S+2]=E.elements[2],T[S+3]=0,T[S+4]=E.elements[3],T[S+5]=E.elements[4],T[S+6]=E.elements[5],T[S+7]=0,T[S+8]=E.elements[6],T[S+9]=E.elements[7],T[S+10]=E.elements[8],T[S+11]=0;else if(ArrayBuffer.isView(E))T.set(E.subarray(0,T.length-S),S);else E.toArray(T,S)}function u(E,T,S,A){let R=E.value,m=T+"_"+S;if(Array.isArray(R)){if(A[m]===void 0)A[m]=[];let v=A[m],C=!1;for(let k=0;k<R.length;k++)if(g(R[k],v,k)===!0)C=!0;return C}return g(R,A,m)}function g(E,T,S){if(T[S]===void 0){if(typeof E==="number"||typeof E==="boolean")T[S]=E;else if(ArrayBuffer.isView(E))T[S]=E.slice();else T[S]=E.clone();return!0}else{let A=T[S];if(typeof E==="number"||typeof E==="boolean"){if(A!==E)return T[S]=E,!0}else if(ArrayBuffer.isView(E))return!0;else if(A.equals(E)===!1)return A.copy(E),!0}return!1}function y(E){let T=E.uniforms,S=0,A=16;for(let m=0,v=T.length;m<v;m++){let C=Array.isArray(T[m])?T[m]:[T[m]];for(let k=0,P=C.length;k<P;k++){let B=C[k],Q=Array.isArray(B.value)?B.value:[B.value],w=Array.isArray(T[m])||Array.isArray(B.value),Y=S;for(let F=0,W=Q.length;F<W;F++){let O=Q[F],q=M(O,w),nt=S%A,dt=nt%q.boundary,Z=nt+dt;if(S+=dt,Z!==0&&A-Z<q.storage)S+=A-Z;if(F===0)Y=S;S+=q.storage}let tt=B.type==="int"?Int32Array:B.type==="uint"?Uint32Array:Float32Array;B.__data=new tt((S-Y)/Float32Array.BYTES_PER_ELEMENT),B.__offset=Y}}let R=S%A;if(R>0)S+=A-R;return E.__size=S,E.__cache={},this}function M(E,T){let S={boundary:0,storage:0};if(typeof E==="number"||typeof E==="boolean")S.boundary=4,S.storage=4;else if(E.isVector2)S.boundary=8,S.storage=8;else if(E.isVector3||E.isColor)S.boundary=16,S.storage=12;else if(E.isVector4)S.boundary=16,S.storage=16;else if(E.isMatrix3)S.boundary=16,S.storage=48;else if(E.isMatrix4)S.boundary=16,S.storage=64;else if(E.isTexture)It("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(E))S.boundary=16,S.storage=E.byteLength;else It("WebGLRenderer: Unsupported uniform value type.",E);if(T===!0)S.boundary=16,S.storage=Math.ceil(S.storage/16)*16;return S}function h(E){let T=E.target;T.removeEventListener("dispose",h),t.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function p(){for(let E in s)t.deleteBuffer(s[E]);s={},r={}}return{bind:a,update:o,dispose:p}}var Qp=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),sn=null;function jp(){if(sn===null)sn=new Ra(Qp,16,16,Xn,nn),sn.name="DFG_LUT",sn.minFilter=Ge,sn.magFilter=Ge,sn.wrapS=vs,sn.wrapT=vs,sn.generateMipmaps=!1,sn.needsUpdate=!0;return sn}class Ka{constructor(t={}){let{canvas:e=Cl(),context:n=null,depth:i=!0,stencil:s=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:u=$e}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=r;let y=u,M=new Set([Or,Fr,Ur]),h=new Set([$e,Ln,Li,Vn,Nr,Dr]),p=new Uint32Array(4),E=new Int32Array(4),T={textures:[],min:[],max:[],resolution:[]},S=null,A=null,R=[],m=[],v=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=en,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,k=!1,P=null,B=null,Q=null,w=null;this._outputColorSpace=ws;let Y=0,tt=0,F=null,W=-1,O=null,q=new ae,nt=new ae,dt=null,Z=new zt(0),j=0,{width:_t,height:yt}=e,wt=1,St=null,Zt=null,Bt=new ae(0,0,_t,yt),Ut=new ae(0,0,_t,yt),ie=!1,Xt=new Hn,oe=new Ns,le=!1,Ce=!1,De=new se,ce=new G,ye=new ae,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Pe=!1;function Ve(){return F===null?wt:1}let N=n;function Xe(x,L){return e.getContext(x,L)}let $t,pe,ft,te,Ct,Nt,Se,b,_,D,it,et,at,ct,V,K,ot,I,J,X,st,rt,ut;try{let x={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in e)e.setAttribute("data-engine",`three.js r${Do}`);if(e.addEventListener("webglcontextlost",mt,!1),e.addEventListener("webglcontextrestored",Rt,!1),e.addEventListener("webglcontextcreationerror",Ft,!1),N===null){if(N=Xe("webgl2",x),N===null)if(Xe("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}At()}catch(x){throw e.removeEventListener("webglcontextlost",mt,!1),e.removeEventListener("webglcontextrestored",Rt,!1),e.removeEventListener("webglcontextcreationerror",Ft,!1),Pt("WebGLRenderer: "+x.message),x}function At(){if($t=new hf(N),$t.init(),st=new qp(N,$t),pe=new Qd(N,$t,t,st),ft=new Vp(N,$t),pe.reversedDepthBuffer&&d)ft.buffers.depth.setReversed(!0);B=N.createFramebuffer(),Q=N.createFramebuffer(),w=N.createFramebuffer(),te=new ff(N),Ct=new Ip,Nt=new Xp(N,$t,ft,Ct,pe,st,te),Se=new cf(C),b=new ph(N),rt=new $d(N,b),_=new uf(N,b,te,rt),D=new mf(N,_,b,rt,te),I=new pf(N,pe,Nt),V=new jd(Ct),it=new Cp(C,Se,$t,pe,rt,V),et=new $p(C,Ct),at=new Lp,ct=new Bp($t),ot=new Jd(C,Se,ft,D,g,o),K=new Wp(C,D,pe),ut=new Kp(N,te,pe,ft),J=new Kd(N,$t,te),X=new df(N,$t,te),te.programs=it.programs,C.capabilities=pe,C.extensions=$t,C.properties=Ct,C.renderLists=at,C.shadowMap=K,C.state=ft,C.info=te}if(y!==$e)v=new _f(y,e.width,e.height,a,i,s);let Tt=new Ec(C,N);this.xr=Tt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let x=$t.get("WEBGL_lose_context");if(x)x.loseContext()},this.forceContextRestore=function(){let x=$t.get("WEBGL_lose_context");if(x)x.restoreContext()},this.getPixelRatio=function(){return wt},this.setPixelRatio=function(x){if(x===void 0)return;wt=x,this.setSize(_t,yt,!1)},this.getSize=function(x){return x.set(_t,yt)},this.setSize=function(x,L,H=!0){if(Tt.isPresenting){It("WebGLRenderer: Can't change size while VR device is presenting.");return}if(_t=x,yt=L,e.width=Math.floor(x*wt),e.height=Math.floor(L*wt),H===!0)e.style.width=x+"px",e.style.height=L+"px";if(v!==null)v.setSize(e.width,e.height);this.setViewport(0,0,x,L)},this.getDrawingBufferSize=function(x){return x.set(_t*wt,yt*wt).floor()},this.setDrawingBufferSize=function(x,L,H){_t=x,yt=L,wt=H,e.width=Math.floor(x*H),e.height=Math.floor(L*H),this.setViewport(0,0,x,L)},this.setEffects=function(x){if(y===$e){Pt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let L=0;L<x.length;L++)if(x[L].isOutputPass===!0){It("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}v.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(q)},this.getViewport=function(x){return x.copy(Bt)},this.setViewport=function(x,L,H,U){if(x.isVector4)Bt.set(x.x,x.y,x.z,x.w);else Bt.set(x,L,H,U);ft.viewport(q.copy(Bt).multiplyScalar(Ve()).round())},this.getScissor=function(x){return x.copy(Ut)},this.setScissor=function(x,L,H,U){if(x.isVector4)Ut.set(x.x,x.y,x.z,x.w);else Ut.set(x,L,H,U);ft.scissor(nt.copy(Ut).multiplyScalar(Ve()).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(x){ft.setScissorTest(ie=x)},this.setOpaqueSort=function(x){St=x},this.setTransparentSort=function(x){Zt=x},this.getClearColor=function(x){return x.copy(ot.getClearColor())},this.setClearColor=function(){ot.setClearColor(...arguments)},this.getClearAlpha=function(){return ot.getClearAlpha()},this.setClearAlpha=function(){ot.setClearAlpha(...arguments)},this.clear=function(x=!0,L=!0,H=!0){let U=0;if(x){let z=!1;if(F!==null){let ht=F.texture.format;z=M.has(ht)}if(z){let ht=F.texture.type,vt=h.has(ht),lt=ot.getClearColor(),xt=ot.getClearAlpha(),{r:Et,g:Dt,b:Gt}=lt;if(vt)p[0]=Et,p[1]=Dt,p[2]=Gt,p[3]=xt,N.clearBufferuiv(N.COLOR,0,p);else E[0]=Et,E[1]=Dt,E[2]=Gt,E[3]=xt,N.clearBufferiv(N.COLOR,0,E)}else U|=N.COLOR_BUFFER_BIT}if(L)U|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(H)U|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(U!==0)N.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),P=x},this.dispose=function(){e.removeEventListener("webglcontextlost",mt,!1),e.removeEventListener("webglcontextrestored",Rt,!1),e.removeEventListener("webglcontextcreationerror",Ft,!1),ot.dispose(),at.dispose(),ct.dispose(),Nt.dispose(),Ct.dispose(),Se.dispose(),D.dispose(),_.dispose(),rt.dispose(),ut.dispose(),it.dispose(),Tt.dispose(),Tt.removeEventListener("sessionstart",to),Tt.removeEventListener("sessionend",eo),Un.stop()};function mt(x){x.preventDefault(),Ma("WebGLRenderer: Context Lost."),k=!0}function Rt(){Ma("WebGLRenderer: Context Restored."),k=!1;let x=te.autoReset,L=K.enabled,H=K.autoUpdate,U=K.needsUpdate,z=K.type;At(),te.autoReset=x,K.enabled=L,K.autoUpdate=H,K.needsUpdate=U,K.type=z}function Ft(x){Pt("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function gt(x){let L=x.target;L.removeEventListener("dispose",gt),Kt(L)}function Kt(x){me(x),Ct.remove(x)}function me(x){let L=Ct.get(x).programs;if(L!==void 0){if(L.forEach(function(H){it.releaseProgram(H)}),x.isShaderMaterial)it.releaseShaderCache(x)}}this.renderBufferDirect=function(x,L,H,U,z,ht){if(L===null)L=Ie;let vt=z.isMesh&&z.matrixWorld.determinantAffine()<0,lt=Rc(x,L,H,U,z);ft.setMaterial(U,vt);let xt=H.index,Et=1;if(U.wireframe===!0){if(xt=_.getWireframeAttribute(H),xt===void 0)return;Et=2}let Dt=H.drawRange,Gt=H.attributes.position,Mt=Dt.start*Et,kt=(Dt.start+Dt.count)*Et;if(ht!==null)Mt=Math.max(Mt,ht.start*Et),kt=Math.min(kt,(ht.start+ht.count)*Et);if(xt!==null)Mt=Math.max(Mt,0),kt=Math.min(kt,xt.count);else if(Gt!==void 0&&Gt!==null)Mt=Math.max(Mt,0),kt=Math.min(kt,Gt.count);let he=kt-Mt;if(he<0||he===1/0)return;rt.setup(z,U,lt,H,xt);let ee,Qt=J;if(xt!==null)ee=b.get(xt),Qt=X,Qt.setIndex(ee);if(z.isMesh)if(U.wireframe===!0)ft.setLineWidth(U.wireframeLinewidth*Ve()),Qt.setMode(N.LINES);else Qt.setMode(N.TRIANGLES);else if(z.isLine){let Me=U.linewidth;if(Me===void 0)Me=1;if(ft.setLineWidth(Me*Ve()),z.isLineSegments)Qt.setMode(N.LINES);else if(z.isLineLoop)Qt.setMode(N.LINE_LOOP);else Qt.setMode(N.LINE_STRIP)}else if(z.isPoints)Qt.setMode(N.POINTS);else if(z.isSprite)Qt.setMode(N.TRIANGLES);if(z.isBatchedMesh)if(!$t.get("WEBGL_multi_draw")){let{_multiDrawStarts:Me,_multiDrawCounts:bt,_multiDrawCount:Re}=z,Yt=xt?b.get(xt).bytesPerElement:1,Fn=Ct.get(U).currentProgram.getUniforms();for(let be=0;be<Re;be++)Fn.setValue(N,"_gl_DrawID",be),Qt.render(Me[be]/Yt,bt[be])}else Qt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else if(z.isInstancedMesh)Qt.renderInstances(Mt,he,z.count);else if(H.isInstancedBufferGeometry){let Me=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,bt=Math.min(H.instanceCount,Me);Qt.renderInstances(Mt,he,bt)}else Qt.render(Mt,he)};function an(x,L,H,U){if(P!==null&&x.isNodeMaterial)P.setObject(U,x);if(le===!0)V.setState(x,H,!1);if(x.transparent===!0&&x.side===tn&&x.forceSinglePass===!1)x.side=Ne,x.needsUpdate=!0,Si(x,L,U),x.side=mi,x.needsUpdate=!0,Si(x,L,U),x.side=tn;else Si(x,L,U)}this.compile=function(x,L,H=null){if(H===null)H=x;if(P!==null)P.renderStart(x,L,H);if(A=ct.get(H),A.init(L),m.push(A),H.traverseVisible(function(z){if(z.isLight&&z.layers.test(L.layers)){if(A.pushLight(z),z.castShadow)A.pushShadow(z)}}),x!==H)x.traverseVisible(function(z){if(z.isLight&&z.layers.test(L.layers)){if(A.pushLight(z),z.castShadow)A.pushShadow(z)}});if(A.setupLights(),P!==null)P.updateLights(A.state.lightsArray);if(Ce=this.localClippingEnabled,le=V.init(this.clippingPlanes,Ce),le===!0)V.setGlobalState(this.clippingPlanes,L);if(P!==null)K.render(A.state.shadowsArray,H,L);let U=new Set;if(x.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let ht=z.material;if(ht)if(Array.isArray(ht))for(let vt=0;vt<ht.length;vt++){let lt=ht[vt];an(lt,H,L,z),U.add(lt)}else an(ht,H,L,z),U.add(ht)}),A=m.pop(),P!==null)P.renderEnd();return U},this.compileAsync=function(x,L,H=null){let U=this.compile(x,L,H);return new Promise((z)=>{function ht(){if(U.forEach(function(vt){let xt=Ct.get(vt).currentProgram;if(xt===void 0||xt.isReady())U.delete(vt)}),U.size===0){z(x);return}setTimeout(ht,10)}if($t.get("KHR_parallel_shader_compile")!==null)ht();else setTimeout(ht,10)})};let $s=null;function Ac(x){if($s)$s(x)}function to(){Un.stop()}function eo(){Un.start()}let Un=new lc;if(Un.setAnimationLoop(Ac),typeof self<"u")Un.setContext(self);this.setAnimationLoop=function(x){$s=x,Tt.setAnimationLoop(x),x===null?Un.stop():Un.start()},Tt.addEventListener("sessionstart",to),Tt.addEventListener("sessionend",eo),this.render=function(x,L){if(L!==void 0&&L.isCamera!==!0){Pt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;if(P!==null)P.renderStart(x,L);let H=Tt.enabled===!0&&Tt.isPresenting===!0,U=v!==null&&(F===null||H)&&v.begin(C,F);if(x.matrixWorldAutoUpdate===!0)x.updateMatrixWorld();if(L.parent===null&&L.matrixWorldAutoUpdate===!0)L.updateMatrixWorld();if(Tt.enabled===!0&&Tt.isPresenting===!0&&(v===null||v.isCompositing()===!1)){if(Tt.cameraAutoUpdate===!0)Tt.updateCamera(L);L=Tt.getCamera()}if(x.isScene===!0)x.onBeforeRender(C,x,L,F);if(A=ct.get(x,m.length),A.init(L),A.state.textureUnits=Nt.getTextureUnits(),m.push(A),De.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),L.isArrayCamera)oe.setFromArrayCamera(L);else Xt.setFromProjectionMatrix(De,Sa,L.reversedDepth);if(Ce=this.localClippingEnabled,le=V.init(this.clippingPlanes,Ce),S=at.get(x,R.length),S.init(),R.push(S),this.info.render.frame++,Tt.enabled===!0&&Tt.isPresenting===!0){let vt=C.xr.getDepthSensingMesh();if(vt!==null)Ks(vt,L,-1/0,C.sortObjects)}if(Ks(x,L,0,C.sortObjects),S.finish(),P!==null)P.updateLights(A.state.lightsArray);if(C.sortObjects===!0)S.sort(St,Zt);if(Pe=Tt.enabled===!1||Tt.isPresenting===!1||Tt.hasDepthSensing()===!1,Pe)ot.addToRenderList(S,x);if(this.info.autoReset===!0)this.info.reset();if(le===!0)V.beginShadows();let z=A.state.shadowsArray;if(K.render(z,x,L),le===!0)V.endShadows();if((U&&v.hasRenderPass())===!1){let vt=S.opaque,lt=S.transmissive;if(A.setupLights(),L.isArrayCamera){let xt=L.cameras;if(lt.length>0)for(let Et=0,Dt=xt.length;Et<Dt;Et++){let Gt=xt[Et];io(vt,lt,x,Gt)}if(Pe)ot.render(x);for(let Et=0,Dt=xt.length;Et<Dt;Et++){let Gt=xt[Et];no(S,x,Gt,Gt.viewport)}}else{if(lt.length>0)io(vt,lt,x,L);if(Pe)ot.render(x);no(S,x,L)}}if(F!==null&&tt===0)Nt.updateMultisampleRenderTarget(F),Nt.updateRenderTargetMipmap(F);if(U)v.end(C);if(x.isScene===!0)x.onAfterRender(C,x,L);if(rt.resetDefaultState(),W=-1,O=null,m.pop(),m.length>0){if(A=m[m.length-1],Nt.setTextureUnits(A.state.textureUnits),le===!0)V.setGlobalState(C.clippingPlanes,A.state.camera)}else A=null;if(R.pop(),R.length>0)S=R[R.length-1];else S=null;if(P!==null)P.renderEnd()};function Ks(x,L,H,U){if(x.visible===!1)return;if(x.layers.test(L.layers)){if(x.isGroup)H=x.renderOrder;else if(x.isLOD){if(x.autoUpdate===!0)x.update(L)}else if(x.isLight){if(A.pushLight(x),x.castShadow)A.pushShadow(x)}else if(x.isSprite){let vt=L.isArrayCamera?oe:Xt;if(!x.frustumCulled||x.intersectsFrustum(vt)){if(U)ye.setFromMatrixPosition(x.matrixWorld).applyMatrix4(De);let lt=D.update(x),xt=x.material;if(xt.visible)S.push(x,lt,xt,H,ye.z,null,L)}}else if(x.isMesh||x.isLine||x.isPoints){let vt=L.isArrayCamera?oe:Xt;if(!x.frustumCulled||x.intersectsFrustum(vt)){let lt=D.update(x),xt=x.material;if(U){if(x.boundingSphere!==void 0){if(x.boundingSphere===null)x.computeBoundingSphere();ye.copy(x.boundingSphere.center)}else{if(lt.boundingSphere===null)lt.computeBoundingSphere();ye.copy(lt.boundingSphere.center)}ye.applyMatrix4(x.matrixWorld).applyMatrix4(De)}if(Array.isArray(xt)){let Et=lt.groups;for(let Dt=0,Gt=Et.length;Dt<Gt;Dt++){let Mt=Et[Dt],kt=xt[Mt.materialIndex];if(kt&&kt.visible)S.push(x,lt,kt,H,ye.z,Mt,L)}}else if(xt.visible)S.push(x,lt,xt,H,ye.z,null,L)}}}let ht=x.children;for(let vt=0,lt=ht.length;vt<lt;vt++)Ks(ht[vt],L,H,U)}function no(x,L,H,U){let{opaque:z,transmissive:ht,transparent:vt}=x;if(A.setupLightsView(H),le===!0)V.setGlobalState(C.clippingPlanes,H);if(U)ft.viewport(q.copy(U));if(z.length>0)Yi(z,L,H);if(ht.length>0)Yi(ht,L,H);if(vt.length>0)Yi(vt,L,H);ft.buffers.depth.setTest(!0),ft.buffers.depth.setMask(!0),ft.buffers.color.setMask(!0),ft.setPolygonOffset(!1)}function io(x,L,H,U){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[U.id]===void 0){let Mt=$t.has("EXT_color_buffer_half_float")||$t.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[U.id]=new ke(1,1,{generateMipmaps:!0,type:Mt?nn:$e,minFilter:Pn,samples:Math.max(4,pe.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ht.workingColorSpace})}let ht=A.state.transmissionRenderTarget[U.id],vt=U.viewport||q;ht.setSize(vt.z*C.transmissionResolutionScale,vt.w*C.transmissionResolutionScale);let lt=C.getRenderTarget(),xt=C.getActiveCubeFace(),Et=C.getActiveMipmapLevel();if(C.setRenderTarget(ht),C.getClearColor(Z),j=C.getClearAlpha(),j<1)C.setClearColor(16777215,0.5);if(C.clear(),Pe)ot.render(H);let Dt=C.toneMapping;C.toneMapping=en;let Gt=U.viewport;if(U.viewport!==void 0)U.viewport=void 0;if(A.setupLightsView(U),le===!0)V.setGlobalState(C.clippingPlanes,U);if(Yi(x,H,U),Nt.updateMultisampleRenderTarget(ht),Nt.updateRenderTargetMipmap(ht),$t.has("WEBGL_multisampled_render_to_texture")===!1){let Mt=!1;for(let kt=0,he=L.length;kt<he;kt++){let ee=L[kt],{object:Qt,geometry:Me,material:bt,group:Re}=ee;if(bt.side===tn&&Qt.layers.test(U.layers)){let Yt=bt.side;bt.side=Ne,bt.needsUpdate=!0,so(Qt,H,U,Me,bt,Re),bt.side=Yt,bt.needsUpdate=!0,Mt=!0}}if(Mt===!0)Nt.updateMultisampleRenderTarget(ht),Nt.updateRenderTargetMipmap(ht)}if(C.setRenderTarget(lt,xt,Et),C.setClearColor(Z,j),Gt!==void 0)U.viewport=Gt;C.toneMapping=Dt}function Yi(x,L,H){let U=L.isScene===!0?L.overrideMaterial:null;for(let z=0,ht=x.length;z<ht;z++){let vt=x[z],{object:lt,geometry:xt,group:Et}=vt,Dt=vt.material;if(Dt.allowOverride===!0&&U!==null)Dt=U;if(lt.layers.test(H.layers))so(lt,L,H,xt,Dt,Et)}}function so(x,L,H,U,z,ht){if(P!==null&&z.isNodeMaterial)P.setObject(x,z);if(x.onBeforeRender(C,L,H,U,z,ht),x.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),z.onBeforeRender(C,L,H,U,x,ht),z.transparent===!0&&z.side===tn&&z.forceSinglePass===!1)z.side=Ne,z.needsUpdate=!0,C.renderBufferDirect(H,L,U,z,x,ht),z.side=mi,z.needsUpdate=!0,C.renderBufferDirect(H,L,U,z,x,ht),z.side=tn;else C.renderBufferDirect(H,L,U,z,x,ht);x.onAfterRender(C,L,H,U,z,ht)}function ro(x){let L=0;for(let H of x)if(H.texture!==null)L++;return L}function Si(x,L,H){if(L.isScene!==!0)L=Ie;let U=Ct.get(x),z=A.state.lights,ht=A.state.shadowsArray,vt=z.state.version,lt=it.getParameters(x,z.state,ht,L,H,A.state.lightProbeGridArray),xt=it.getProgramCacheKey(lt),Et=U.programs;U.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?L.environment:null,U.fog=L.fog;let Dt=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;if(U.envMap=Se.get(x.envMap||U.environment,Dt),U.envMapRotation=U.environment!==null&&x.envMap===null?L.environmentRotation:x.envMapRotation,Et===void 0)x.addEventListener("dispose",gt),Et=new Map,U.programs=Et,U.programVariants=new Map;let Gt=Et.get(xt);if(Gt!==void 0){if(U.currentProgram===Gt&&U.lightsStateVersion===vt)return oo(x,lt),Gt}else{if(lt.uniforms=it.getUniforms(x),P!==null&&x.isNodeMaterial)P.build(x,H,lt);x.onBeforeCompile(lt,C),Gt=it.acquireProgram(lt,xt),Et.set(xt,Gt),U.uniforms=lt.uniforms}let Mt=U.uniforms;if(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)Mt.clippingPlanes=V.uniform;if(oo(x,lt),U.needsLights=Ic(x),U.lightsStateVersion=vt,U.needsLights)Mt.ambientLightColor.value=z.state.ambient,Mt.lightProbe.value=z.state.probe,Mt.sunLights.value=z.state.sun,Mt.sunLightShadows.value=z.state.sunShadow,Mt.directionalLights.value=z.state.directional,Mt.directionalLightShadows.value=z.state.directionalShadow,Mt.spotLights.value=z.state.spot,Mt.spotLightShadows.value=z.state.spotShadow,Mt.rectAreaLights.value=z.state.rectArea,Mt.ltc_1.value=z.state.rectAreaLTC1,Mt.ltc_2.value=z.state.rectAreaLTC2,Mt.pointLights.value=z.state.point,Mt.pointLightShadows.value=z.state.pointShadow,Mt.hemisphereLights.value=z.state.hemi,Mt.sunShadowMatrix.value=z.state.sunShadowMatrix,Mt.sunShadowCascade.value=z.state.sunShadowCascade,Mt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Mt.spotLightMatrix.value=z.state.spotLightMatrix,Mt.spotLightMap.value=z.state.spotLightMap,Mt.pointShadowMatrix.value=z.state.pointShadowMatrix;return U.numLightProbeGrids=ro(A.state.lightProbeGridArray),U.currentProgram=Gt,U.uniformsList=null,Gt}function wc(x,L,H,U,z){let ht=Ct.get(x),vt=ht.currentProgram.id+","+U+","+z,lt=ht.programVariants.get(vt);if(lt===void 0)lt=Si(x,L,H),ht.programVariants.set(vt,lt);else ht.currentProgram=lt,ht.uniformsList=null,ht.outputColorSpace=U,ht.toneMapping=z;return lt}function ao(x){if(x.uniformsList===null){let L=x.currentProgram.getUniforms();x.uniformsList=Xi.seqWithValue(L.seq,x.uniforms)}return x.uniformsList}function oo(x,L){let H=Ct.get(x);H.outputColorSpace=L.outputColorSpace,H.batching=L.batching,H.batchingColor=L.batchingColor,H.instancing=L.instancing,H.instancingColor=L.instancingColor,H.instancingMorph=L.instancingMorph,H.skinning=L.skinning,H.morphTargets=L.morphTargets,H.morphNormals=L.morphNormals,H.morphColors=L.morphColors,H.morphTargetsCount=L.morphTargetsCount,H.numClippingPlanes=L.numClippingPlanes,H.numIntersection=L.numClipIntersection,H.vertexAlphas=L.vertexAlphas,H.vertexTangents=L.vertexTangents,H.toneMapping=L.toneMapping}function Rc(x,L,H,U,z){if(L.isScene!==!0)L=Ie;Nt.resetTextureUnits();let ht=L.fog,vt=U.isMeshStandardMaterial||U.isMeshLambertMaterial||U.isMeshPhongMaterial?L.environment:null,lt=F===null?C.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Ht.workingColorSpace,xt=U.isMeshStandardMaterial||U.isMeshLambertMaterial&&!U.envMap||U.isMeshPhongMaterial&&!U.envMap,Et=Se.get(U.envMap||vt,xt),Dt=U.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Gt=!!H.attributes.tangent&&(!!U.normalMap||U.anisotropy>0),Mt=!!H.morphAttributes.position,kt=!!H.morphAttributes.normal,he=!!H.morphAttributes.color,ee=en;if(U.toneMapped){if(F===null||F.isXRRenderTarget===!0)ee=C.toneMapping}let Qt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Me=Qt!==void 0?Qt.length:0,bt=Ct.get(U),Re=A.state.lights;if(le===!0){if(Ce===!0||x!==O){let re=x===O&&U.id===W;V.setState(U,x,re)}}let Yt=!1,Fn=!1;if(U.version===bt.__version){if(bt.needsLights&&bt.lightsStateVersion!==Re.state.version)Yt=!0;else if(z.isBatchedMesh&&bt.batching===!1)Yt=!0;else if(!z.isBatchedMesh&&bt.batching===!0)Yt=!0;else if(z.isBatchedMesh&&bt.batchingColor===!0&&z._colorsTexture===null)Yt=!0;else if(z.isBatchedMesh&&bt.batchingColor===!1&&z._colorsTexture!==null)Yt=!0;else if(z.isInstancedMesh&&bt.instancing===!1)Yt=!0;else if(!z.isInstancedMesh&&bt.instancing===!0)Yt=!0;else if(z.isSkinnedMesh&&bt.skinning===!1)Yt=!0;else if(!z.isSkinnedMesh&&bt.skinning===!0)Yt=!0;else if(z.isInstancedMesh&&bt.instancingColor===!0&&z.instanceColor===null)Yt=!0;else if(z.isInstancedMesh&&bt.instancingColor===!1&&z.instanceColor!==null)Yt=!0;else if(z.isInstancedMesh&&bt.instancingMorph===!0&&z.morphTexture===null)Yt=!0;else if(z.isInstancedMesh&&bt.instancingMorph===!1&&z.morphTexture!==null)Yt=!0;else if(bt.envMap!==Et)Yt=!0;else if(U.fog===!0&&bt.fog!==ht)Yt=!0;else if(bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==V.numPlanes||bt.numIntersection!==V.numIntersection))Yt=!0;else if(bt.vertexAlphas!==Dt)Yt=!0;else if(bt.vertexTangents!==Gt)Yt=!0;else if(bt.morphTargets!==Mt)Yt=!0;else if(bt.morphNormals!==kt)Yt=!0;else if(bt.morphColors!==he)Yt=!0;else if(bt.morphTargetsCount!==Me)Yt=!0;else if(bt.numLightProbeGrids!==ro(A.state.lightProbeGridArray))Yt=!0;else if(bt.outputColorSpace!==lt||bt.toneMapping!==ee)Fn=!0}else Yt=!0,bt.__version=U.version;let be=bt.currentProgram;if(Yt===!0||Fn===!0){if(be=Fn===!0?wc(U,L,z,lt,ee):Si(U,L,z),P&&U.isNodeMaterial)P.onUpdateProgram(U,be,bt)}let Zi=!1,En=!1,On=!1,qt=be.getUniforms(),ve=bt.uniforms;if(ft.useProgram(be.program))Zi=!0,En=!0,On=!0;if(U.id!==W)W=U.id,En=!0;if(Zi||O!==x){if(ft.buffers.depth.getReversed()&&x.reversedDepth!==!0)x._reversedDepth=!0,x.updateProjectionMatrix();qt.setValue(N,"projectionMatrix",x.projectionMatrix),qt.setValue(N,"viewMatrix",x.matrixWorldInverse);let ge=qt.map.cameraPosition;if(ge!==void 0)ge.setValue(N,ce.setFromMatrixPosition(x.matrixWorld));if(pe.logarithmicDepthBuffer)qt.setValue(N,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2));if(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)qt.setValue(N,"isOrthographic",x.isOrthographicCamera===!0);if(O!==x)O=x,En=!0,On=!0}if(bt.needsLights){if(Re.state.sunShadowMap.length>0)qt.setValue(N,"sunShadowMap",Re.state.sunShadowMap,Nt);if(Re.state.directionalShadowMap.length>0)qt.setValue(N,"directionalShadowMap",Re.state.directionalShadowMap,Nt);if(Re.state.spotShadowMap.length>0)qt.setValue(N,"spotShadowMap",Re.state.spotShadowMap,Nt);if(Re.state.pointShadowMap.length>0)qt.setValue(N,"pointShadowMap",Re.state.pointShadowMap,Nt)}if(z.isSkinnedMesh){qt.setOptional(N,z,"bindMatrix"),qt.setOptional(N,z,"bindMatrixInverse");let re=z.skeleton;if(re){if(re.boneTexture===null)re.computeBoneTexture();qt.setValue(N,"boneTexture",re.boneTexture,Nt)}}if(z.isBatchedMesh){if(qt.setOptional(N,z,"batchingTexture"),qt.setValue(N,"batchingTexture",z._matricesTexture,Nt),qt.setOptional(N,z,"batchingIdTexture"),qt.setValue(N,"batchingIdTexture",z._indirectTexture,Nt),qt.setOptional(N,z,"batchingColorTexture"),z._colorsTexture!==null)qt.setValue(N,"batchingColorTexture",z._colorsTexture,Nt)}let qe=H.morphAttributes;if(qe.position!==void 0||qe.normal!==void 0||qe.color!==void 0)I.update(z,H,be);if(En||bt.receiveShadow!==z.receiveShadow)bt.receiveShadow=z.receiveShadow,qt.setValue(N,"receiveShadow",z.receiveShadow);if((U.isMeshStandardMaterial||U.isMeshLambertMaterial||U.isMeshPhongMaterial)&&U.envMap===null&&L.environment!==null)ve.envMapIntensity.value=L.environmentIntensity;if(ve.dfgLUT!==void 0)ve.dfgLUT.value=jp();if(En){if(qt.setValue(N,"toneMappingExposure",C.toneMappingExposure),bt.needsLights)Cc(ve,On);if(ht&&U.fog===!0)et.refreshFogUniforms(ve,ht);if(et.refreshMaterialUniforms(ve,U,wt,yt,A.state.transmissionRenderTarget[x.id]),bt.needsLights&&bt.numLightProbeGrids>0){let re=T,ge=0;for(let on of A.state.lightProbeGridArray){if(on.texture===null)continue;re.textures[ge]=on.texture,re.min[ge]=on.boundingBox.min,re.max[ge]=on.boundingBox.max,re.resolution[ge]=on.resolution,ge++}for(let on in re)re[on].length=ge;ve.probesSH.value=re.textures,ve.probesMin.value=re.min,ve.probesMax.value=re.max,ve.probesResolution.value=re.resolution}Xi.upload(N,ao(bt),ve,Nt)}if(U.isShaderMaterial&&U.uniformsNeedUpdate===!0)Xi.upload(N,ao(bt),ve,Nt),U.uniformsNeedUpdate=!1;if(U.isSpriteMaterial)qt.setValue(N,"center",z.center);if(qt.setValue(N,"modelViewMatrix",z.modelViewMatrix),qt.setValue(N,"normalMatrix",z.normalMatrix),qt.setValue(N,"modelMatrix",z.matrixWorld),U.uniformsGroups!==void 0){let re=U.uniformsGroups;for(let ge=0,on=re.length;ge<on;ge++){let co=re[ge];ut.update(co,be),ut.bind(co,be)}}return be}function Cc(x,L){x.ambientLightColor.needsUpdate=L,x.lightProbe.needsUpdate=L,x.sunLights.needsUpdate=L,x.sunLightShadows.needsUpdate=L,x.directionalLights.needsUpdate=L,x.directionalLightShadows.needsUpdate=L,x.pointLights.needsUpdate=L,x.pointLightShadows.needsUpdate=L,x.spotLights.needsUpdate=L,x.spotLightShadows.needsUpdate=L,x.rectAreaLights.needsUpdate=L,x.hemisphereLights.needsUpdate=L}function Ic(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return tt},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(x,L,H){let U=Ct.get(x);if(U.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,U.__autoAllocateDepthBuffer===!1)U.__useRenderToTexture=!1;Ct.get(x.texture).__webglTexture=L,Ct.get(x.depthTexture).__webglTexture=U.__autoAllocateDepthBuffer?void 0:H,U.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,L){let H=Ct.get(x);H.__webglFramebuffer=L,H.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(x,L=0,H=0){F=x,Y=L,tt=H;let U=null,z=!1,ht=!1;if(x){let lt=Ct.get(x);if(lt.__useDefaultFramebuffer!==void 0){ft.bindFramebuffer(N.FRAMEBUFFER,lt.__webglFramebuffer),q.copy(x.viewport),nt.copy(x.scissor),dt=x.scissorTest,ft.viewport(q),ft.scissor(nt),ft.setScissorTest(dt),W=-1;return}else if(lt.__webglFramebuffer===void 0)Nt.setupRenderTarget(x);else if(lt.__hasExternalTextures)Nt.rebindTextures(x,Ct.get(x.texture).__webglTexture,Ct.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){let Dt=x.depthTexture;if(lt.__boundDepthTexture!==Dt){if(Dt!==null&&Ct.has(Dt)&&(x.width!==Dt.image.width||x.height!==Dt.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Nt.setupDepthRenderbuffer(x)}}let xt=x.texture;if(xt.isData3DTexture||xt.isDataArrayTexture||xt.isCompressedArrayTexture)ht=!0;let Et=Ct.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget){if(Array.isArray(Et[L]))U=Et[L][H];else U=Et[L];z=!0}else if(x.samples>0&&Nt.useMultisampledRTT(x)===!1)U=Ct.get(x).__webglMultisampledFramebuffer;else if(Array.isArray(Et))U=Et[H];else U=Et;q.copy(x.viewport),nt.copy(x.scissor),dt=x.scissorTest}else q.copy(Bt).multiplyScalar(wt).floor(),nt.copy(Ut).multiplyScalar(wt).floor(),dt=ie;if(H!==0)U=B;if(ft.bindFramebuffer(N.FRAMEBUFFER,U))ft.drawBuffers(x,U);if(ft.viewport(q),ft.scissor(nt),ft.setScissorTest(dt),z){let lt=Ct.get(x.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+L,lt.__webglTexture,H)}else if(ht){let lt=L;for(let xt=0;xt<x.textures.length;xt++){let Et=Ct.get(x.textures[xt]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+xt,Et.__webglTexture,H,lt)}}else if(x!==null&&H!==0){let lt=Ct.get(x.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,lt.__webglTexture,H)}W=-1};function lo(x){let L=Ct.get(x);if(L.__readFormat!==x.format||L.__readType!==x.type)L.__readFormat=x.format,L.__readType=x.type,L.__formatReadable=pe.textureFormatReadable(x.format),L.__typeReadable=pe.textureTypeReadable(x.type);return L}if(this.readRenderTargetPixels=function(x,L,H,U,z,ht,vt,lt=0){if(!(x&&x.isWebGLRenderTarget)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=Ct.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&vt!==void 0){if(xt=xt[vt],Array.isArray(xt))xt=xt[0]}if(xt){ft.bindFramebuffer(N.FRAMEBUFFER,xt);try{let Et=x.textures[lt],{format:Dt,type:Gt}=Et;if(x.textures.length>1)N.readBuffer(N.COLOR_ATTACHMENT0+lt);let Mt=lo(Et);if(Mt.__formatReadable===!1){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Mt.__typeReadable===!1){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(L>=0&&L<=x.width-U&&(H>=0&&H<=x.height-z))N.readPixels(L,H,U,z,st.convert(Dt),st.convert(Gt),ht)}finally{let Et=F!==null?Ct.get(F).__webglFramebuffer:null;ft.bindFramebuffer(N.FRAMEBUFFER,Et)}}},this.readRenderTargetPixelsAsync=async function(x,L,H,U,z,ht,vt,lt=0){if(!(x&&x.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=Ct.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&vt!==void 0){if(xt=xt[vt],Array.isArray(xt))xt=xt[0]}if(xt)if(L>=0&&L<=x.width-U&&(H>=0&&H<=x.height-z)){ft.bindFramebuffer(N.FRAMEBUFFER,xt);let Et=x.textures[lt],{format:Dt,type:Gt}=Et;if(x.textures.length>1)N.readBuffer(N.COLOR_ATTACHMENT0+lt);let Mt=lo(Et);if(Mt.__formatReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Mt.__typeReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let kt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,kt),N.bufferData(N.PIXEL_PACK_BUFFER,ht.byteLength,N.STREAM_READ),N.readPixels(L,H,U,z,st.convert(Dt),st.convert(Gt),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let he=F!==null?Ct.get(F).__webglFramebuffer:null;ft.bindFramebuffer(N.FRAMEBUFFER,he);let ee=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Pl(N,ee,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,kt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ht),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(kt),N.deleteSync(ee),ht}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,L=null,H=0){let U=Math.pow(2,-H),z=Math.floor(x.image.width*U),ht=Math.floor(x.image.height*U),vt=L!==null?L.x:0,lt=L!==null?L.y:0;Nt.setTexture2D(x,0),N.copyTexSubImage2D(N.TEXTURE_2D,H,0,0,vt,lt,z,ht),ft.unbindTexture()},this.copyTextureToTexture=function(x,L,H=null,U=null,z=0,ht=0){let vt,lt,xt,Et,Dt,Gt,Mt,kt,he,ee=x.isCompressedTexture?x.mipmaps[ht]:x.image;if(H!==null)vt=H.max.x-H.min.x,lt=H.max.y-H.min.y,xt=H.isBox3?H.max.z-H.min.z:1,Et=H.min.x,Dt=H.min.y,Gt=H.isBox3?H.min.z:0;else{let qt=Math.pow(2,-z);if(vt=Math.floor(ee.width*qt),lt=Math.floor(ee.height*qt),x.isDataArrayTexture)xt=ee.depth;else if(x.isData3DTexture)xt=Math.floor(ee.depth*qt);else xt=1;Et=0,Dt=0,Gt=0}if(U!==null)Mt=U.x,kt=U.y,he=U.z;else Mt=0,kt=0,he=0;let Qt=st.convert(L.format),Me=st.convert(L.type),bt;if(L.isData3DTexture)Nt.setTexture3D(L,0),bt=N.TEXTURE_3D;else if(L.isDataArrayTexture||L.isCompressedArrayTexture)Nt.setTexture2DArray(L,0),bt=N.TEXTURE_2D_ARRAY;else Nt.setTexture2D(L,0),bt=N.TEXTURE_2D;ft.activeTexture(N.TEXTURE0),ft.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,L.flipY),ft.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),ft.pixelStorei(N.UNPACK_ALIGNMENT,L.unpackAlignment);let Re=ft.getParameter(N.UNPACK_ROW_LENGTH),Yt=ft.getParameter(N.UNPACK_IMAGE_HEIGHT),Fn=ft.getParameter(N.UNPACK_SKIP_PIXELS),be=ft.getParameter(N.UNPACK_SKIP_ROWS),Zi=ft.getParameter(N.UNPACK_SKIP_IMAGES);ft.pixelStorei(N.UNPACK_ROW_LENGTH,ee.width),ft.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ee.height),ft.pixelStorei(N.UNPACK_SKIP_PIXELS,Et),ft.pixelStorei(N.UNPACK_SKIP_ROWS,Dt),ft.pixelStorei(N.UNPACK_SKIP_IMAGES,Gt);let En=x.isDataArrayTexture||x.isData3DTexture,On=L.isDataArrayTexture||L.isData3DTexture;if(x.isDepthTexture){let qt=Ct.get(x),ve=Ct.get(L),qe=Ct.get(qt.__renderTarget),re=Ct.get(ve.__renderTarget);ft.bindFramebuffer(N.READ_FRAMEBUFFER,qe.__webglFramebuffer),ft.bindFramebuffer(N.DRAW_FRAMEBUFFER,re.__webglFramebuffer);for(let ge=0;ge<xt;ge++){if(En)N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ct.get(x).__webglTexture,z,Gt+ge),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ct.get(L).__webglTexture,ht,he+ge);N.blitFramebuffer(Et,Dt,Et+vt,Dt+lt,Mt,kt,Mt+vt,kt+lt,N.DEPTH_BUFFER_BIT,N.NEAREST)}ft.bindFramebuffer(N.READ_FRAMEBUFFER,null),ft.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(z!==0||x.isRenderTargetTexture||Ct.has(x)){let qt=Ct.get(x),ve=Ct.get(L);ft.bindFramebuffer(N.READ_FRAMEBUFFER,Q),ft.bindFramebuffer(N.DRAW_FRAMEBUFFER,w);for(let qe=0;qe<xt;qe++){if(En)N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,qt.__webglTexture,z,Gt+qe);else N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,qt.__webglTexture,z);if(On)N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ve.__webglTexture,ht,he+qe);else N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ve.__webglTexture,ht);if(z!==0)N.blitFramebuffer(Et,Dt,Et+vt,Dt+lt,Mt,kt,Mt+vt,kt+lt,N.COLOR_BUFFER_BIT,N.NEAREST);else if(On)N.copyTexSubImage3D(bt,ht,Mt,kt,he+qe,Et,Dt,vt,lt);else N.copyTexSubImage2D(bt,ht,Mt,kt,Et,Dt,vt,lt)}ft.bindFramebuffer(N.READ_FRAMEBUFFER,null),ft.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(On)if(x.isDataTexture||x.isData3DTexture)N.texSubImage3D(bt,ht,Mt,kt,he,vt,lt,xt,Qt,Me,ee.data);else if(L.isCompressedArrayTexture)N.compressedTexSubImage3D(bt,ht,Mt,kt,he,vt,lt,xt,Qt,ee.data);else N.texSubImage3D(bt,ht,Mt,kt,he,vt,lt,xt,Qt,Me,ee);else if(x.isDataTexture)N.texSubImage2D(N.TEXTURE_2D,ht,Mt,kt,vt,lt,Qt,Me,ee.data);else if(x.isCompressedTexture)N.compressedTexSubImage2D(N.TEXTURE_2D,ht,Mt,kt,ee.width,ee.height,Qt,ee.data);else N.texSubImage2D(N.TEXTURE_2D,ht,Mt,kt,vt,lt,Qt,Me,ee);if(ft.pixelStorei(N.UNPACK_ROW_LENGTH,Re),ft.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Yt),ft.pixelStorei(N.UNPACK_SKIP_PIXELS,Fn),ft.pixelStorei(N.UNPACK_SKIP_ROWS,be),ft.pixelStorei(N.UNPACK_SKIP_IMAGES,Zi),ht===0&&L.generateMipmaps===!0&&L.mipmapsAutoUpdate===!0)N.generateMipmap(bt);ft.unbindTexture()},this.initRenderTarget=function(x){if(Ct.get(x).__webglFramebuffer===void 0)Nt.setupRenderTarget(x)},this.initTexture=function(x){if(x.isCubeTexture)Nt.setTextureCube(x,0);else if(x.isData3DTexture)Nt.setTexture3D(x,0);else if(x.isDataArrayTexture||x.isCompressedArrayTexture)Nt.setTexture2DArray(x,0);else Nt.setTexture2D(x,0);ft.unbindTexture()},this.resetState=function(){Y=0,tt=0,F=null,ft.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Ht._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ht._getUnpackColorSpace()}}var Qa=window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches,ja=document.getElementById("viewer"),bn;try{let t=document.createElement("canvas");if(!(t.getContext("webgl2")||t.getContext("webgl")))throw Error("no webgl");bn=new Ka({antialias:!0,alpha:!0})}catch(t){document.getElementById("nogl").hidden=!1,window.CakeViewer={ok:!1,update(){},rotate(){},rotation(){return 0}}}if(bn){let d=function(W,O,q,nt=0,dt=0,Z=0){f(O),f(q);let j=new He(O,q);return j.position.set(nt,dt,Z),j.castShadow=!0,j.receiveShadow=!0,W.add(j),j},M=function(W,O,q){let nt=new je,dt=O;for(let j=0;j<3;j++)if(d(nt,new yn(W,W,u,64),a(q.flavor,0.85),0,dt+u/2,0),dt+=u,j<2)d(nt,new yn(W-0.01,W-0.01,g,64),a(q.filling||q.flavor,0.5),0,dt+g/2,0),dt+=g;let Z=O+y;if(q.deco==="fondant")d(nt,new yn(W+0.04,W+0.04,y+0.04,64),a(o,0.35),0,O+y/2,0),d(nt,new ki(W+0.045,0.035,12,96),a("#B5532F",0.5),0,O+0.12,0).rotation.x=Math.PI/2;else d(nt,new yn(W+0.02,W+0.02,0.07,64),a(q.deco==="drip"?l:o,q.deco==="drip"?0.25:0.6),0,Z+0.035,0);if(q.deco==="border"){let j=Math.max(8,Math.round(2*Math.PI*W/0.17));for(let _t=0;_t<j;_t++){let yt=_t/j*Math.PI*2;d(nt,new Sn(0.065,16,12),a(o,0.55),Math.cos(yt)*W,O+0.02,Math.sin(yt)*W),d(nt,new Sn(0.065,16,12),a(o,0.55),Math.cos(yt)*(W-0.02),Z+0.09,Math.sin(yt)*(W-0.02))}}else if(q.deco==="drip"){let j=Math.max(10,Math.round(2*Math.PI*W/0.22));for(let _t=0;_t<j;_t++){let yt=_t/j*Math.PI*2,wt=0.18+_t*37%7*0.07;d(nt,new Bi(0.055,wt,6,12),a(l,0.25),Math.cos(yt)*(W+0.01),Z-wt/2-0.02,Math.sin(yt)*(W+0.01)).scale.set(1,1,1)}}return{g:nt,top:Z+0.07}},h=function(W,O,q,nt){d(W,new Sn(0.05,16,12),a("#F2C94C",0.5),O,q+0.04,nt);for(let dt=0;dt<6;dt++){let Z=dt/6*Math.PI*2;d(W,new Sn(0.06,16,12),a("#F7B6C2",0.6),O+Math.cos(Z)*0.1,q+0.03,nt+Math.sin(Z)*0.1).scale.set(1,0.6,1)}},Ms=function(S,O,q){let nt=new je,dt=O,hw=S[0],hd=S[1];for(let j=0;j<3;j++){d(nt,new vi(hw*2,u,hd*2),a(q.flavor,0.85),0,dt+u/2,0),dt+=u;if(j<2)d(nt,new vi(hw*2-0.02,g,hd*2-0.02),a(q.filling||q.flavor,0.5),0,dt+g/2,0),dt+=g}let Z=O+y,pp=(sp,of)=>{let r2=[];for(let x=-hw;x<=hw+1e-6;x+=sp)r2.push([x,-hd-of],[x,hd+of]);for(let z=-hd+sp;z<hd-1e-6;z+=sp)r2.push([-hw-of,z],[hw+of,z]);return r2};if(q.deco==="fondant")d(nt,new vi(hw*2+0.08,y+0.04,hd*2+0.08),a(o,0.35),0,O+y/2,0);else d(nt,new vi(hw*2+0.04,0.07,hd*2+0.04),a(q.deco==="drip"?l:o,q.deco==="drip"?0.25:0.6),0,Z+0.035,0);if(q.deco==="border")pp(0.17,-0.02).forEach((c)=>{d(nt,new Sn(0.065,16,12),a(o,0.55),c[0],O+0.02,c[1]),d(nt,new Sn(0.065,16,12),a(o,0.55),c[0],Z+0.09,c[1])});else if(q.deco==="drip")pp(0.22,0.01).forEach((c,i)=>{let wt=0.18+i*37%7*0.07;d(nt,new Bi(0.055,wt,6,12),a(l,0.25),c[0],Z-wt/2-0.02,c[1])});return{g:nt,top:Z+0.07}},m=function(){while(r.children.length)r.remove(r.children[0]);c.splice(0).forEach((W)=>W.dispose&&W.dispose())},v=function(W){p=W,m();o=W.icing||"#FFF7E6";let SH={"qs":[1.5,1],"hs":[1.9,1.3]}[W.size],O=SH?[SH[0]]:{"6":[0.9],"8":[1.2],"10":[1.5],"12":[1.8],"2t":[1.2,0.9],"2tl":[1.5,1.2]}[W.size]||[1.2],q=O[0]+0.55;SH?d(r,new vi(SH[0]*2+1.1,0.08,SH[1]*2+1.1),a("#7A5A3E",0.6),0,-0.04,0):d(r,new yn(q,q,0.08,64),a("#7A5A3E",0.6),0,-0.04,0);let nt=0,dt;if(O.forEach((j)=>{dt=SH?Ms(SH,nt,W):M(j,nt,W),r.add(dt.g),nt=dt.top-0.07+0.02}),W.deco==="flowers"){let j=O[O.length-1],_t=dt.top;[[0,0,0],[j*0.5,0,j*0.2],[-j*0.45,0,j*0.3],[j*0.1,0,-j*0.5],[-j*0.3,0,-j*0.35]].forEach((yt)=>h(r,yt[0],_t,yt[2]))}if(W.deco==="sprinkles"){let j=O[O.length-1],cs=["#F7B6C2","#F2C94C","#A9CDE8","#B5C9A5","#C9B6E4"];for(let k2=0;k2<46;k2++){let ag=k2*2.4,rd=Math.sqrt((k2+.5)/46)*j*.92;d(r,new Bi(.018,.07,4,8),a(cs[k2%5],.5),Math.cos(ag)*rd,dt.top+.02,Math.sin(ag)*rd*(SH?SH[1]/SH[0]:1)).rotation.set(Math.PI/2,0,k2)}}if(W.deco==="fondant"){let j=O[O.length-1];d(r,new Sn(0.1,24,16),a("#B5532F",0.4),0,dt.top+0.1,0)}let Z=nt+0.4;n.position.set(0,Z*0.55+1.9,O[0]*3.1+3.4),n.lookAt(0,Z*0.42,0),E=Qa?0:performance.now(),r.scale.setScalar(Qa?1:0.94),Q()},k=function(){let W=ja.clientWidth||600,O=Math.round(W*0.82);bn.setSize(W,O,!1),t.style.width="100%",t.style.height=O+"px",n.aspect=W/O,n.updateProjectionMatrix(),Q()},Q=function(){bn.render(e,n)},w=function(W){P=0;let O=Math.min(0.05,(W-B)/1000||0.016);B=W;let q=!1;if(E){let nt=Math.min(1,(W-E)/250),dt=1-Math.pow(1-nt,3);if(r.scale.setScalar(0.94+0.06*dt),nt<1)q=!0;else E=0}if(!S&&Math.abs(R)>0.0005)s.rotation.y+=R,R*=0.92,q=!0;else if(!S&&T)s.rotation.y+=O*0.35,q=!0;if(Q(),q)P=requestAnimationFrame(w)},Y=function(){if(!P)P=requestAnimationFrame(w)},F=function(W){T=!1,s.rotation.y+=W,Y()};bn.setPixelRatio(Math.min(devicePixelRatio||1,2)),bn.outputColorSpace=ws,bn.shadowMap.enabled=!0,bn.shadowMap.type=gs;let t=bn.domElement;t.setAttribute("tabindex","0"),t.setAttribute("role","img"),t.setAttribute("aria-describedby","viewer-help"),ja.appendChild(t);let e=new Is,n=new Le(32,1,0.1,50);e.add(new Gs(16777215,13621700,1.6));let i=new Ws(16773597,2.4);i.position.set(-4,7,5),i.castShadow=!0,i.shadow.mapSize.set(1024,1024),Object.assign(i.shadow.camera,{left:-4,right:4,top:4,bottom:-4,near:1,far:20}),i.shadow.bias=-0.0005,e.add(i);let s=new je;e.add(s);let r=new je;s.add(r);let a=(W,O=0.7)=>new Os({color:new zt(W),roughness:O,metalness:0}),o="#FFF7E6",l="#3B2417",c=[],f=(W)=>(c.push(W),W),u=0.42,g=0.09,y=u*3+g*2,p=null,E=0,T=!Qa,S=!1,A=0,R=0,C=new He(new zi(6,48),new Oi({color:11123867,transparent:!0,opacity:0}));C.rotation.x=-Math.PI/2,C.position.y=-0.09,e.add(C),new ResizeObserver(k).observe(ja);let P=0,B=0;t.style.touchAction="pan-y",t.addEventListener("pointerdown",(W)=>{S=!0,T=!1,A=W.clientX,R=0,t.setPointerCapture(W.pointerId)}),t.addEventListener("pointermove",(W)=>{if(!S)return;let O=W.clientX-A;A=W.clientX,s.rotation.y+=O*0.01,R=O*0.01,Y()});let tt=()=>{S=!1,Y()};t.addEventListener("pointerup",tt),t.addEventListener("pointercancel",tt),t.addEventListener("keydown",(W)=>{if(W.key==="ArrowLeft")F(-0.3),W.preventDefault();if(W.key==="ArrowRight")F(0.3),W.preventDefault()}),window.CakeViewer={ok:!0,update(W){v(W),Y()},rotate:F,rotation(){return s.rotation.y},autoRotating(){return T}},window.dispatchEvent(new Event("cakeviewer-ready")),k(),Y()}})();
