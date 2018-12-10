<template>
  <div class='centered-div'>
    <div id='welcome'>
      Welcome to CodingDiva
    </div>
  </div>
</template>

<script>

export default {
  name: 'MainBody',
}
</script>

<style>
  #welcome {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 400px;
    color: #fff;
    font-size: 3em;
    z-index: 10;
    background: #04cc0a;
    text-align: center;
    text-shadow: 1px 1px 4px #000;
    border-radius: 8px;
    padding: 5px;
    font-weight: bold;
  }

</style>
