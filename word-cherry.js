symbols="!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
function cherry(n){
  let s='';
  s+=symbols[n%32];
  n=Math.floor(n/32);
  s+=String.fromCharCode(48+n%10);
  n=Math.floor(n/10);
  s+=String.fromCharCode(65+n%26);
  return s;
};
function makesub(n){
  let as0 = n.slice(0,2);
  let as1 = n.slice(2,4);
  let bs = n.slice(4,8);
  let a0 = Number("0x"+as0);
  let a1 = Number("0x"+as1);
  let abytearray = new Uint8Array([a0, a1])
  let b = Number("0x"+bs);
  return as0+as1+"-"+bs+"-"+window.niceware.bytesToPassphrase(abytearray)+cherry(b)+'<br>';
};
function make(n){
  let rv='';
  for (let i=0;i<5;i++){
    sub=n.slice(i*8,i*8+8)    
    rv+=makesub(sub);}
  return rv;
};
