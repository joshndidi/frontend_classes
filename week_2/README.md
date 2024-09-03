# intro to CSS:
## syntax:
### THE SEMICOLON MUST BE USED TO DIFFERENTIATE THE COMMANDS
<style> this is the opening tag for styling in html

body {
  background-color: orange;
} this is used to colour the whole body curly brackets ({}) must be used after inputting body for example



h1 {
  color: yellow;
  text-align: center;
} h1 is used to show that heading is being styled, colour indicates what colour and the text-align determines how the text is aligned 

p {
  font-family: veranda;
  font-size: 20px;
} P can be used aswell do determine that the paragraph is being styled, font-family determines what font , font-size determines the size of the font

In CSS, a color can be specified using hue, saturation, and lightness (HSL) in the form:

hsl(hue, saturation, lightness)

Hue is a degree on the color wheel from 0 to 360. 0 is red, 120 is green, and 240 is blue.

Saturation is a percentage value. 0% means a shade of gray, and 100% is the full color.

Lightness is also a percentage. 0% is black, 50% is neither light or dark, 100% is white

(BACKROUNDS ONLYY) With CSS, a color is most often specified by:

a valid color name - like "red"
a HEX value - like "#ff0000"
an RGB value - like "rgb(255,0,0)"
The opacity property specifies the opacity/transparency of an element. It can take a value from 0.0 - 1.0. The lower value, the more transparent:
eg.
h1 {
  background-color: green;
  opacity: 0.3;
} would  make it green but quite transparent