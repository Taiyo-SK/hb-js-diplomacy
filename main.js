'use strict';

/* 
1. turn select buttons red
---elements with class "color-change" have "red" class added to them

2.form submission
---prevent default behavior
---validate input text with ID "number-input"
---if NaN or >= 10, change text of the element with ID "formFeedback"
   to say 'Please enter a smaller number.'
   Otherwise, change the text of that element to say "You're good to go."