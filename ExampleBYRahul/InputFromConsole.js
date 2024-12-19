process.stdout.write('Enter Your Name: ');
process.stdin.on('data', (x) => {
    const input = x.toString().trim();    
    console.log(`Your Name is : ${input}`);
    process.exit();
});
