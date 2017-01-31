const hexMap = {
  red : 'FF0000',
  green : '00FF00',
  blue : '0000FF',
  black : '000000'
};

function getColor(colorCode){
  return hexMap[colorCode]|| hexMap.black;
};

const pattern = JSON.parse('{"role":"sample","cmd":"getColor"}');

function action_func(msg_obj,response_cb){
  response_cb(null,{retVal : getColor(msg_obj.colorCode)});
};


module.exports.getColor = getColor;
module.exports.pattern = pattern;
module.exports.callback = action_func;

// debug ----------------------------------
// ----------------------------------------
//console.log(getColor('red'));

