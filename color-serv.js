const seneca = require('seneca')();
const plugin = require('./color-plugin');
seneca.use(plugin);
seneca.listen(10101,()=>{
  console.log('micro service on port 10101....');
});


// debug ---------------------------
// ---------------------------------
// const pattern = {"role":"sample","cmd":"getColor"};
// let ret = '';
// seneca.act(pattern,{colorCode :'red'},(err,result)=>{
//   if(err) return console.error(err);
//   ret = result;
//   console.log('ret = ' + JSON.stringify(ret));
// });
