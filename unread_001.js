// NODE.JS VERSION
/**
 * unread.js
 * By Lapide
 * VERSION 0.0.1
 */
var current = "";

function getCurrentST() {
  return current;
}
var mylib = {
  convertToHex: function convertToHex(msg) {
    var msg_ = [];
    for (var i = 0; i < msg.length; ++i) {
      var hex = Number(msg.charCodeAt(i)).toString(16);
      msg_.push(hex);
    }
    return msg_.join("");
  },
  convertHexToText: function convertHexToText(msg) {
    var m = msg.toString();
    var msg_ = "";
    for (var i = 0; i < m.length; i += 2) {
      msg_ += String.fromCharCode(parseInt(m.substr(i, 2), 16));
    }
    return msg_;
  },
  convertToBinary: function converToBinary(msg) {
    var msg_ = msg.split("");
    var bin = [];
    for (var i = 0; i < msg_.length; ++i) {
      bin.push(
        "00000000".slice(0, msg_[i].length) + msg_[i].charCodeAt().toString(2)
      );
    }
    return bin.join(" ");
  },

  convertBinaryToText: function convertBinaryToText(msg) {
    var msg_ = msg.split(" ");
    var debin = [];
    for (var i = 0; i < msg_.length; ++i) {
      debin.push(String.fromCharCode(parseInt(msg_[i], 2)));
    }
    return debin.join("");
  },
};
function btoa_(ff) {
  if (getCurrentST() == "node") {
    return Buffer.from(ff).toString("base64");
  } else {
    return btoa(ff);
  }
}
function atob_(ww) {
  if (getCurrentST() == "node") {
    return Buffer.from(ww, "base64").toString("binary");
  } else {
    return atob(ww);
  }
}
function encrypt_hex(w) {
  return mylib.convertToHex(w);
}
function decrypt_hex(w) {
  return mylib.convertHexToText(w);
}
function encrypt_binary(w) {
  return mylib.convertToBinary(w);
}
function decrypt_binary(w) {
  return mylib.convertBinaryToText(w);
}
function encrypt_unread(w) {
  var n = [];
  var decode = '';
  for (var i = 0; i < w.length; ++i) {
    //str += w[i];
    n.push(btoa_((w[i].toString().charCodeAt(0) - 65).toString()));
  }
  for (var g = 0; g < n.length; ++g) {
       decode += String.fromCharCode(65 + parseInt(atob_(n[g].toString())));
  }
  return n.join(" ");
  //console.log(decode);
}
function decrypt_unread(w) {
  var decode = "";
  var n = w.split(" ");
  for (var g = 0; g < n.length; ++g) {
    decode += String.fromCharCode(65 + parseInt(atob_(n[g])));
    //console.log(n);
  }
  return decode;
}
var letters__ =
  '1234567890qwertyuiopasdfghjklzxcvbnm!@#$%^&*()[]\\;,./"\'{}|:"<>?_+-=~`QWERTYUIOPASDFGHJKLZXCVBNM ';
var lett__ = {};
var cc = 100000;
for (var i = 0; i < letters__.length; ++i) {
  lett__[letters__[i]] = Math.floor(Math.random() * cc);
}
var letters = JSON.parse(
  '{"0":76058,"1":11427,"2":2715,"3":92957,"4":64014,"5":1955,"6":37024,"7":43595,"8":7400,"9":1429,"q":41613,"w":53361,"e":59766,"r":60735,"t":71557,"y":86966,"u":80660,"i":2356,"o":73525,"p":14287,"a":68610,"s":42283,"d":32175,"f":38823,"g":36661,"h":85433,"j":73095,"k":90971,"l":21137,"z":13207,"x":82397,"c":54113,"v":96127,"b":7509,"n":37614,"m":87723,"!":32664,"@":94026,"#":91597,"$":56268,"%":39889,"^":71340,"&":84284,"*":86223,"(":2876,")":6578,"[":59787,"]":26294,"\\\\":1555,";":30381,",":7139,".":45482,"/":35691,"\\"":68521,"\'":65095,"{":50345,"}":36156,"|":66260,":":55398,"<":38406," ":-141,">":48209,"?":70839,"_":42571,"+":29457,"-":30778,"=":6716,"~":84023,"`":33647,"Q":44389,"W":19619,"E":1604,"R":91676,"T":51172,"Y":16575,"U":64605,"I":92931,"O":36762,"P":69106,"A":63535,"S":60780,"D":17403,"F":19629,"G":53283,"H":21845,"J":79831,"K":59837,"L":81777,"Z":62435,"X":75450,"C":91553,"V":75584,"B":33447,"N":28871,"M":55359}'
);
function encrypt_bb3(w) {
  var say = w;
  var say_ = [];
  for (var gg = 0; gg < say.length; ++gg) {
    say_.push(letters[say[gg]]);
  }
  return say_.join(" ");
}

function decrypt_bb3(w) {
  var say = w.split(" ");
  for (var cc = 0; cc < say.length; ++cc) {
    if (say[cc].includes(" ")) {
      delete say[cc];
    }
  }
  var dec = "";
  for (var i = 0; i < say.length; ++i) {
    for (var gg in letters) {
      if (letters[gg] == say[i]) {
        dec += gg.toString();
      }
    }
  }
  return dec;
}
function execute_bb3(w) {
  eval(decrypt_bb3(w));
}
var types_en = {
  bb3: encrypt_bb3,
  unread: encrypt_unread,
  binary: encrypt_binary,
  hex: encrypt_hex,
};
var types_de = {
  bb3: decrypt_bb3,
  unread: decrypt_unread,
  binary: decrypt_binary,
  hex: decrypt_hex,
};
var types_ex = {
  bb3: execute_bb3,
  unread: execute_unread,
  binary: execute_binary,
  hex: execute_hex,
};
function encrypt(type, code) {
  for (var i in types_en) {
    if (i.toString() == type) {
      return types_en[i](code);
    } else {
      if (types_en[i] == types_en[types_en.length - 1]) {
        throw "Failed to identify type";
      }
    }
  }
}
function decrypt(type, code) {
  for (var i in types_de) {
    if (i.toString() == type) {
      return types_de[i](code);
    } else {
      if (types_de[i] == types_de[types_de.length - 1]) {
        throw "Failed to identify type";
      }
    }
  }
}
function execute(type, code) {
  for (var i in types_ex) {
    if (i.toString() == type) {
      return types_ex[i](code);
    } else {
      if (types_ex[i] == types_ex[types_ex.length - 1]) {
        throw "Failed to identify type";
      }
    }
  }
}
function execute_unread(w) {
  eval(decrypt_unread(w));
}
function execute_hex(w) {
  eval(decrypt_hex(w));
}
function execute_binary(w) {
  eval(decrypt_binary(w));
}
function examples() {
  console.log("executing examples");
  console.log("\n");
  execute_unread(
    "MzQ= NDY= NDU= NTA= NDY= NDM= MzY= LTE5 NDM= NDY= Mzg= LTI1 LTMx MTk= Mzk= NDA= NTA= LTMz NTQ= MzI= NTA= LTMz NDQ= MzI= MzU= MzY= LTMz NTQ= NDA= NTE= Mzk= LTMz MjA= MTM= MTc= NA== MA== Mw== LTMz LTI1 MTI= NTc= MTY= LTQ= LTMz MTM= Mw== MjQ= LTQ= LTMz MTM= Mw== MjA= LTQ= LTMz MTM= MTk= MA== LTQ= LTMz MTM= Mw== MjQ= LTQ= LTMz MTM= Mw== MTI= LTQ= LTMz MTI= NTc= MjQ= LTQ= LTMz MTE= MTk= NA== LTEy LTMz MTM= Mw== MTI= LTQ= LTMz MTM= Mw== MjQ= LTQ= LTMz MTI= NTc= Mzg= LTQ= LTMz MTE= MTk= OA== LTE2 LTMz MTE= MTk= MTI= NTU= LTMz MTI= MTk= NDI= LTQ= LTMz MTI= NTc= NDI= LTQ= LTMz MTM= Mw== MA== LTQ= LTMz MTM= MTk= MA== LTQ= LTMz MTE= MTk= MTI= NTc= LTMz MTM= MTk= MTY= LTQ= LTMz MTI= NTc= OA== LTQ= LTMz MTM= MTk= MA== LTQ= LTMz MTE= MTk= MTI= NTc= LTMz MTM= Mw== MTY= LTQ= LTMz MTI= NTc= OA== LTQ= LTMz MTI= NTc= MjA= LTQ= LTMz MTI= NTc= MjQ= LTQ= LTMz MTE= MTk= MTI= NTc= LTMz MTM= MTk= MTY= LTQ= LTMz MTM= Mw== MA== LTQ= LTMz MTM= MTk= NA== LTQ= LTMz MTI= NTc= NDI= LTQ= LTMz MTE= MTk= MTI= NTc= LTMz MTI= NDE= MA== LTQ= LTMz MTI= MTk= MTI= LTQ= LTMz MTI= MTk= MzQ= LTQ= LTMz MTM= MA== LTQ= LTQ= LTMz MTI= MA== LTQ= LTQ= LTMz MTI= NTQ= LTQ= LTQ= LTMz MTE= MTk= MTI= NTU= LTMz MTE= MTk= OA== LTE3 LTMz MTE= MTk= MjQ= LTQ= LTI0 LTMx LTI0 LTY="
  );
  console.log("\n");
  execute_bb3(
    "54113 73525 37614 42283 73525 21137 59766 45482 21137 73525 36661 2876 65095 51172 85433 2356 42283 -141 53361 68610 42283 -141 87723 68610 32175 59766 -141 53361 2356 71557 85433 -141 33447 33447 92957 -141 2876 1955 64014 11427 11427 92957 -141 43595 92957 1955 2715 1955 -141 92957 43595 37024 11427 64014 -141 64014 2715 2715 7400 92957 -141 43595 92957 1955 2715 1955 -141 2715 11427 11427 92957 43595 -141 1955 1429 43595 37024 37024 -141 64014 1955 64014 7400 2715 -141 2715 11427 11427 92957 43595 -141 43595 92957 1955 2715 1955 -141 92957 37024 37024 37024 11427 -141 2715 7400 43595 37024 -141 37024 7400 1955 2715 11427 -141 1955 11427 11427 43595 2715 -141 7400 1955 64014 92957 92957 -141 2715 92957 1955 37024 -141 64014 2715 2715 7400 92957 -141 30778 11427 64014 11427 -141 1955 92957 92957 37024 11427 -141 37024 7400 37024 11427 76058 -141 64014 2715 2715 7400 92957 -141 30778 11427 64014 11427 -141 7400 43595 43595 2715 92957 -141 37024 7400 37024 11427 76058 -141 92957 2715 11427 43595 1955 -141 1955 1429 43595 37024 37024 -141 30778 11427 64014 11427 -141 1955 92957 92957 37024 11427 -141 2715 92957 1955 37024 -141 43595 11427 1955 1955 43595 -141 7400 1955 64014 92957 92957 -141 30778 11427 64014 11427 -141 92957 92957 64014 64014 43595 -141 92957 92957 64014 64014 43595 -141 1429 2715 1429 1955 43595 -141 37024 7400 1955 2715 11427 -141 37024 1955 43595 7400 6578 65095 6578"
  );
  console.log("\n");
  execute_binary(
    encrypt_binary(
      "console.log('This was made with Binary (01100011 01101111 01101110 01110011 01101111 01101100 01100101 0101110 01101100 01101111 01100111 0101000 0100111 01010100 01101000 01101001 01110011 0100000 01110111 01100001 01110011 0100000 01101101 01100001 01100100 01100101 0100000 01110111 01101001 01110100 01101000 0100000 01000010 01101001 01101110 01100001 01110010 01111001 0100111 0101001)')"
    )
  );
  console.log("\n");
  execute_hex(
    encrypt_hex(
      "console.log('This was made with HEX (636f6e736f6c652e6c6f6728275468697320776173206d61646520776974682048455827293b)');"
    )
  );
}
if (typeof module != "undefined" && typeof module.exports != "undefined") {
  current = "node";
  module.exports = {
    encrypt_binary:encrypt_binary,
    encrypt_hex:encrypt_hex,
    encrypt_unread:encrypt_unread,
    encrypt_bb3:encrypt_bb3,
    encrypt:encrypt,

    execute_binary:execute_binary,
    execute_hex:execute_hex,
    execute_unread:execute_unread,
    execute_bb3:execute_bb3,
    execute:execute,
    
    decrypt_binary:decrypt_binary,
    decrypt_hex:decrypt_hex,
    decrypt_unread:decrypt_unread,
    decrypt_bb3:decrypt_bb3,
    decrypt:decrypt,

    types:{
      decrypt:types_de,
      execute:types_ex,
      encrypt:types_en
    },
    mylib:mylib
  }
} else {
  current = "web";
}
//examples();
