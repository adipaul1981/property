const express = require('express');
const fs = require('fs');



const app = express();

app.set('port', (process.env.PORT || 3001));


app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
