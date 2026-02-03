function showContent(topic) {
  let content = document.getElementById("content");

  if (topic === "basics") {
    content.innerHTML = `
      <h2>Python Basics</h2>
      <p>• What is Python</p>
      <p>• Features of Python</p>
      <p>• Variables</p>
      <p>• Comments</p>
    `;
  }

  if (topic === "datatypes") {
    content.innerHTML = `
      <h2>Data Types</h2>
      <p>int, float, string</p>
      <p>list, tuple</p>
      <p>set, dictionary</p>
    `;
  }

  if (topic === "loops") {
    content.innerHTML = `
      <h2>Loops</h2>
      <p>for loop</p>
      <p>while loop</p>
    `;
  }

  if (topic === "programs") {
    content.innerHTML = `
      <h2>Programs</h2>
      <pre>
# Even or Odd
n = int(input("Enter number: "))
if n % 2 == 0:
    print("Even")
else:
    print("Odd")
      </pre>
    `;
  }
}
