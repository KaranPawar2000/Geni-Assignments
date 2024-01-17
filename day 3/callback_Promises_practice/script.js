console.log("Karan is a hacker")
console.log("Pawar is a hecker")


setTimeout(() => {
    console.log("I am inside settimeout")
}, 2000);

setTimeout(() => {
    console.log("I am inside settimeout 2")
}, 3000);

console.log("The End")

const fn = () => {
  console.log("Nothing")
}

const callback = (arg, fn) => {
    console.log(arg)
    fn()
}

const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    console.log(sc.src);
    sc.onload = callback("Karan", fn);
    document.head.append(sc)
}


loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback )