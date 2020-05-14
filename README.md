# yacc

Yet Another Code Camp

### Step 5:

In this step, we will implement the game as described in [this tutorial](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/A_first_splash).

We will work entirely in `index.html`, meaning we will put all of the additional css between `<style></style>` tags in the `<head>` section of the web page, and all javascript between `<script></script>` that we add between the `<body></body>` at the bottom, just before the `</body>` tag.

**So, our initial change will look something like this:**

```javascript
<!DOCTYPE html>
<html>
  <head>
    <title>My webpage!</title>
    <link rel="stylesheet" href="styles.css" />
    <script async src="scripts.js"></script>
    <style>
      <!-- Here we will add the css from the tutorial -->
    </style>
  </head>
  <body>
    <h1>Welcome to my webpage!</h1>

    <p>Today's date: <span id="date"></span></p>
    <h4>This is a smaller header</h4>
    <p class="content">
      <div class="gameContainer">
        <!--  Here we will add the HTML from the tutorial -->
      </div>
    </p>
    <script>
      <!--  Here we will add the Scripts from the tutorial -->
    </script>
  </body>
</html>
```
