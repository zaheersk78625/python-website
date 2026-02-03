function showContent(topic) {
  let content = document.getElementById("content");
 if (topic === "basics") {
  content.innerHTML = `
  <h2>Python Basics</h2>

  <h3>What is Python?</h3>
  <p>Python is a simple and easy programming language used for web, data science, AI and software development.</p>

  <h3>Hello World Program</h3>
  <pre>
print("Hello World")
  </pre>

  <p><b>Explanation:</b> print() is used to display output on the screen.</p>

  <h3>Variables</h3>
  <pre>
x = 10
name = "Zaheer"
  </pre>
  <p>Variables are used to store data.</p>
  `;
}
 

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
if (topic === "datatypes") {
  content.innerHTML = `
  <h2>Data Types</h2>

  <h3>Integer, Float, String</h3>
  <pre>
a = 10
b = 2.5
c = "Python"
  </pre>

  <h3>List</h3>
  <pre>
marks = [70, 80, 90]
  </pre>
  <p>List stores multiple values and is changeable.</p>

  <h3>Tuple</h3>
  <pre>
colors = ("red", "blue", "green")
  </pre>

  <h3>Dictionary</h3>
  <pre>
student = {"name":"Zaheer", "roll":25}
  </pre>
  `;
}
if (topic === "control") {
  content.innerHTML = `
  <h2>Control Statements</h2>

  <h3>If Else Example</h3>
  <pre>
age = 18

if age >= 18:
    print("Eligible to vote")
else:
    print("Not eligible")
  </pre>

  <p><b>Explanation:</b> If condition is true, if block runs, otherwise else block runs.</p>
  `;
}

  if (topic === "loops") {
    content.innerHTML = `
      <h2>Loops</h2>
      <p>for loop</p>
      <p>while loop</p>
    `;
  }
if (topic === "loops") {
  content.innerHTML = `
  <h2>Loops</h2>

  <h3>For Loop</h3>
  <pre>
for i in range(1, 6):
    print(i)
  </pre>

  <h3>While Loop</h3>
  <pre>
i = 1
while i <= 5:
    print(i)
    i += 1
  </pre>
  `;
}
if (topic === "functions") {
  content.innerHTML = `
  <h2>Functions</h2>

  <pre>
def add(a, b):
    return a + b

print(add(10, 20))
  </pre>

  <p>Functions are reusable blocks of code.</p>
  `;
}
if (topic === "programs") {
  content.innerHTML = `
  <h2>Python Programs</h2>

  <h3>Even or Odd</h3>
  <pre>
n = int(input("Enter number: "))
if n % 2 == 0:
    print("Even")
else:
    print("Odd")
  </pre>

  <h3>Prime Number</h3>
  <pre>
n = int(input("Enter number: "))
count = 0
for i in range(1, n+1):
    if n % i == 0:
        count += 1
if count == 2:
    print("Prime")
else:
    print("Not Prime")
  </pre>

  <h3>Factorial</h3>
  <pre>
n = int(input("Enter number: "))
fact = 1
for i in range(1, n+1):
    fact *= i
print(fact)
  </pre>
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

