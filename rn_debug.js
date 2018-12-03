/**
 * Created by pain.xie on 2018/4/20.
 */
let sourceMap = require('source-map');
let fs = require('fs');

let errorStack =
  "value@892:2074\n" +
  "<unknown>@892:2385\n" +
  "value@892:2413\n" +
  "onPress@892:3554\n" +
  "touchableHandlePress@179:1279\n" +
  "_performSideEffectsForTransition@168:8505\n" +
  "_receiveSignal@168:7292\n" +
  "touchableHandleResponderRelease@168:4757\n" +
  "g@42:296\n" +
  "invokeGuardedCallback@42:496\n" +
  "invokeGuardedCallbackAndCatchFirstError@42:611\n" +
  "A@42:2410\n" +
  "D@42:3172\n" +
  "U@42:2969";

let list = errorStack.split(/@|\n/).filter((item) => {return item.indexOf(':') !== -1});
console.log('pain.xie:', list);

fs.readFile('./android-release.bundle.map', 'utf8', function (err, data) {
  let smc = new sourceMap.SourceMapConsumer(data);

  list.forEach((item, index, arr) => {
    let a = item.split(':');
    let line = Number.parseInt(a[0]);
    let column = Number.parseInt(a[1]);
    console.log(smc.originalPositionFor({
      line,
      column
    }));
  })
});