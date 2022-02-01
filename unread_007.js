/**
 * unread.js
 * By Lapide
 * VERSION 0.0.7
 *
 * WHATS NEW
 * - Added Auto option to decrypt_binary
 * - Added Spaces option to encrypt_binary
 * - Fixed some bugs in encrypt_binary (Unable to encode in the right format)
 *
 * PLANING
 * - More Auto options to other decrypters
 * 
 * 
 * ALSO IN README.MD
 */

var current = "";

function getCurrentST() {
  return current;
}

function test() {
  execute_abn(
    "3 15 14 19 15 12 5 82 12 15 7 71 80 34 5 12 12 15 0 49 15 18 12 4 63 80 72"
  );
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
  convertToBinary: function converToBinary(msg, space = true) {
    var msg_ = msg.split("");
    var bin = [];
    for (var i = 0; i < msg_.length; ++i) {
      bin.push(
        "00000000".slice(msg_[i].toString().charCodeAt().toString(2).length) + msg_[i].toString().charCodeAt().toString(2)
      );
    }
    return space ? bin.join(" ") : bin.join("");
  },

  convertBinaryToText: function convertBinaryToText(msg, auto = false) {
    var msg_ = "";
    if (auto) {
      var zz = msg;
      for (var gg = 0; gg < zz.length; ++gg) {
        if (zz.includes(" ")) {
          zz = zz.replace(" ", "");
        }
      }
      var zz1 = zz.match(/.{1,8}/g).join(" ");
      msg_ = zz1.split(" ");
    } else {
      msg_ = msg.split(" ");
    }
    var debin = [];
    for (var i = 0; i < msg_.length; ++i) {
      debin.push(String.fromCharCode(parseInt(msg_[i], 2)));
    }
    return debin.join("");
  },
};
var Letters = {
  lowercase: " abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  number: "1234567890",
  characters: "!@#$%^&*()-=[]\\;'\",./<>?{}|:~`_+",
};

var LetterArrays = {
  lowercase_array: [],
  uppercase_array: [],
  number_array: [],
  all_array: [],
};

function add_array(w) {
  for (var i = 0; i < w.length; ++i) {
    LetterArrays.all_array.push(w[i]);
  }
}

for (var all_i in Letters) {
  add_array(Letters[all_i]);
}

for (
  var lowercase_i = 0;
  lowercase_i < Letters.lowercase.length;
  ++lowercase_i
) {
  LetterArrays.lowercase_array.push(Letters.lowercase[lowercase_i]);
}

for (
  var uppercase_i = 0;
  uppercase_i < Letters.uppercase.length;
  ++uppercase_i
) {
  LetterArrays.uppercase_array.push(Letters.uppercase[uppercase_i]);
}

for (var number_i = 0; number_i < Letters.number.length; ++number_i) {
  LetterArrays.number_array.push(Letters.number[number_i]);
}

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

function encrypt_abn(w) {
  var de = [];
  var cc = w.split("");

  for (var b = 0; b < cc.length; ++b) {
    for (var i = 0; i < LetterArrays.all_array.length; ++i) {
      if (LetterArrays.all_array[i] == cc[b]) {
        de.push(i);
      }
    }
  }
  return de.join(" ");
}

function generate() {
  var mn = {};
  mn.letters =
    "abcdefghijklmnopqrstuvwxzyABCDEFGHIJKLMNOPQRSTUVWXZY1234567890[];'\\,./-=_+{}:\"|<>?!@#$%^&*()~` ";
  mn.letters_obj = {};
  mn.used = [];
  mn.max = 1000000;

  function h() {
    for (var i = 0; i < mn.letters.length; ++i) {
      var j = Math.floor(Math.random() * mn.max);
      if (mn.used.includes(j)) {
        h();
      } else {
        mn.used.push(j);
        mn.letters_obj[mn.letters[i]] = j;
      }
    }
  }
  h();
  return mn;
}
var polo_data = JSON.parse(
  '{"letters":"abcdefghijklmnopqrstuvwxzyABCDEFGHIJKLMNOPQRSTUVWXZY1234567890[];\'\\\\,./-=_+{}:\\"|<>?!@#$%^&*()~` ","letters_obj":{"0":260730,"1":160823,"2":906480,"3":775578,"4":105396,"5":609036,"6":365786,"7":697797,"8":608596,"9":780096,"a":507903,"b":420460,"c":190306,"d":776289,"e":964967,"f":315873,"g":448773,"h":196825,"i":648958,"j":887132,"k":859933,"l":253367,"m":631024,"n":143638,"o":597384,"p":567467,"q":222113,"r":739709,"s":846215,"t":606258,"u":312883,"v":286935,"w":530167,"x":443766,"z":170950,"y":654279,"A":796599,"B":1244,"C":576199,"D":619919,"E":667113,"F":924208,"G":809187,"H":307961,"I":230631,"J":974484,"K":166728,"L":463488,"M":877845,"N":921777,"O":113499,"P":620053,"Q":125323,"R":629215,"S":554735,"T":737371,"U":553320,"V":448032,"W":219724,"X":780716,"Z":200358,"Y":115489,"[":737849,"]":105587,";":417860,"\'":809572,"\\\\":4789,",":645421,".":986495,"/":97716,"-":486857,"=":806182,"_":561401,"+":33852,"{":82777,"}":690263,":":708641,"\\"":890508,"|":80352,"<":772897,">":988655,"?":17830,"!":81673,"@":220318,"#":666330,"$":74432,"%":775569,"^":833748,"&":73329,"*":509143,"(":940358,")":568347,"~":686441,"`":244002," ":306300},"used":[507903,420460,190306,776289,964967,315873,448773,196825,648958,887132,859933,253367,631024,143638,597384,567467,222113,739709,846215,606258,312883,286935,530167,443766,170950,654279,796599,1244,576199,619919,667113,924208,809187,307961,230631,974484,166728,463488,877845,921777,113499,620053,125323,629215,554735,737371,553320,448032,219724,780716,200358,115489,160823,906480,775578,105396,609036,365786,697797,608596,780096,260730,737849,105587,417860,809572,4789,645421,986495,97716,486857,806182,561401,33852,82777,690263,708641,890508,80352,772897,988655,17830,81673,220318,666330,74432,775569,833748,73329,509143,940358,568347,686441,244002,306300],"max":1000000}'
);

function encrypt_polo(message, spaces) {
  var msg = message.split("");
  var encoded = [];
  for (var i = 0; i < msg.length; ++i) {
    encoded.push(polo_data.letters_obj[msg[i]]);
  }
  return encoded.join(spaces ? " " : "");
}

function decrypt_polo(message) {
  var msg = message.replace(" ", "");
  for (var i = 0; i < msg.length; ++i) {
    if (msg.includes(" ")) {
      msg = msg.replace(" ", "");
    }
  }
  var decrypted = msg;
  var dd = [];
  for (var g in polo_data.letters_obj)
    if (msg.includes(polo_data.letters_obj[g])) {
      for (var i = 0; i < msg.split(polo_data.letters_obj[g]).length - 1; ++i) {
        decrypted = decrypted.replace(polo_data.letters_obj[g], g);
      }
    }
  return decrypted;
}

function get_abn() {
  var dec = [];
  for (var i = 0; i < LetterArrays.all_array.length; ++i) {
    dec.push(i + " : " + LetterArrays.all_array[i]);
  }
  return dec.join("\n");
}

function decrypt_abn(w) {
  var gg = w;
  var de = [];
  var vv = gg.split(" ");
  for (var i = 0; i < vv.length; ++i) {
    for (var g = 0; g < LetterArrays.all_array.length; ++g) {
      if (parseInt(vv[i]) == g) {
        de.push(LetterArrays.all_array[g]);
      }
    }
  }
  return de.join("");
}

function execute_abn(w) {
  eval(decrypt_abn(w));
}

function encrypt_hex(w) {
  return mylib.convertToHex(w);
}

function decrypt_hex(w) {
  return mylib.convertHexToText(w);
}

function encrypt_binary(w, spaces) {
  return mylib.convertToBinary(w, spaces);
}

function decrypt_binary(w, auto) {
  return mylib.convertBinaryToText(w, auto);
}

function encrypt_unread(w) {
  var n = [];
  var decode = "";
  for (var i = 0; i < w.length; ++i) {
    n.push(btoa_((w[i].toString().charCodeAt(0) - 65).toString()));
  }
  for (var g = 0; g < n.length; ++g) {
    decode += String.fromCharCode(65 + parseInt(atob_(n[g].toString())));
  }
  return n.join(" ");
}

function decrypt_unread(w) {
  var decode = "";
  var n = w.split(" ");
  for (var g = 0; g < n.length; ++g) {
    decode += String.fromCharCode(65 + parseInt(atob_(n[g])));
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

function execute_polo(w) {
  eval(decrypt_polo(w));
}

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
  abn: encrypt_abn,
  polo: encrypt_polo,
};
var types_de = {
  bb3: decrypt_bb3,
  unread: decrypt_unread,
  binary: decrypt_binary,
  hex: decrypt_hex,
  abn: decrypt_abn,
  polo: decrypt_polo,
};
var types_ex = {
  bb3: execute_bb3,
  unread: execute_unread,
  binary: execute_binary,
  hex: execute_hex,
  abn: execute_abn,
  polo: execute_polo,
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
    if (i.toString().toLowerCase() == type.toLowerCase()) {
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
    if (i.toString().toLowerCase() == type.toLowerCase()) {
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

function execute_binary(w, auto) {
  eval(decrypt_binary(w, auto));
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
    encrypt_binary: encrypt_binary,
    encrypt_hex: encrypt_hex,
    encrypt_unread: encrypt_unread,
    encrypt_bb3: encrypt_bb3,
    encrypt_abn: encrypt_abn,
    encrypt: encrypt_polo,
    encrypt: encrypt,

    atob: atob_,
    btoa: btoa_,

    current: current,

    execute_binary: execute_binary,
    execute_hex: execute_hex,
    execute_unread: execute_unread,
    execute_bb3: execute_bb3,
    execute_abn: execute_abn,
    execute_polo: execute_polo,
    execute: execute,

    decrypt_binary: decrypt_binary,
    decrypt_hex: decrypt_hex,
    decrypt_abn: decrypt_abn,
    decrypt_unread: decrypt_unread,
    decrypt_bb3: decrypt_bb3,
    decrypt_polo: decrypt_polo,
    decrypt: decrypt,

    gen: {
      generate_polo: generate,
    },
    letters: {
      default: Letters,
      array: LetterArrays,
    },
    types: {
      decrypt: types_de,
      execute: types_ex,
      encrypt: types_en,
    },
    mylib: mylib,
  };
} else {
  current = "web";
}
