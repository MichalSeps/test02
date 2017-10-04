document.writeln('Hello, world!');
function f(n) {
	if (n == 0 || n == 1)
	{
		return 1;
	}
	document.write(n * (n * n) + "<br>");
	return n * f(n - 1);
}
document.write(f(5));
console.log("On branch 02");
console.log("another console.log");