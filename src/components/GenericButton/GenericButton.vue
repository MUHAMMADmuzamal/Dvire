<template>
    <button class="btn1" >{{text}}</button>
</template>

<script>
    export default {
      name:"GenericButton",
      props:['text'],
      data: ()=>( {
       
      }),
    }
</script>
<style scoped>
.btn1 {
    padding: 9px 28px;
    min-width: 225px;
    background-color: #25acab;
    /* font-size: 16px; */
    color: #ffffff;
    line-height: 2.38;
    /* text-align: center; */
    font-weight: 500;
    letter-spacing: 0.5px;
    position: relative;
    overflow: hidden;
    /* border: none; */
    cursor: pointer;
}
.btn1:hover:after, .btn1:hover:before {
    transform: translate(0);
}
.btn1:before {
    border-width: 24px 0 0 24px;
    border-color: transparent transparent transparent #ffffff;
    left: 5px;
    bottom: 5px;
    transform: translate(-100%, 100%);
}
.btn1:after {
    border-width: 0 24px 24px 0;
    border-color: transparent #ffffff transparent transparent;
    right: 5px;
    top: 5px;
    transform: translate(100%, -100%);
}

.btn1:after, .btn1:before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    pointer-events: none;
    z-index: 2;
}
</style>
