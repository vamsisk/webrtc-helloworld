function getArgument(argument){
    var index = process.argv.indexOf(argument);

    return (index === -1) ? null : process.argv[index + 1];
}

var name = getArgument('--name');

var message = name ? "Hello " + name : "Hello World";

console.log(message);

//Usage 1) node app 2) node app --name "Vamsi"