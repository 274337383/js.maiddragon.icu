buf = Buffer.from('abcdefg');
buf2 = buf.slice(0, buf.length-1);

console.log(buf2.toString())