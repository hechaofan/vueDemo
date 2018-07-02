<template>
  <div>

  </div>
</template>

<script>
var tmp = new Date()
function f () {
  console.log(tmp)
  if (false) {
    var tmp = 'hello world'
  }
}
f()
var s = 'hello'
for (let i = 0; i < s.length; i++) {
  console.log(s[i]);
  console.log(i);

}
function f1() {
  var n = 5
  if (true) {
    var n = 10
  }
  console.log(n)
}
f1()

function f2() { console.log('I am outside!'); }

(function () {
  if (false) {
    // 重复声明一次函数f
    function f2() { console.log('I am inside!'); }
  }

  f2();
}());

export default {}
</script>

<style>

</style>
