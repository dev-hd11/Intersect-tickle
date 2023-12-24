 
//     Tickle (Part of Intersect Gaming)
//     Copyright (C) 2023-present  Himank Deka

//     This program is free software: you can redistribute it and/or modify
//     it under the terms of the GNU Affero General Public License as published
//     by the Free Software Foundation, either version 3 of the License, or
//     (at your option) any later version.

//     This program is distributed in the hope that it will be useful,
//     but WITHOUT ANY WARRANTY; without even the implied warranty of
//     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//     GNU Affero General Public License for more details.

//     You should have received a copy of the GNU Affero General Public License
//     along with this program.  If not, see <https://www.gnu.org/licenses/>.
//
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'aftermath', 'success')));
app.use(express.static(path.join(__dirname, 'aftermath', 'fail')));
app.use(express.static(path.join(__dirname, 'aftermath', 'draw')));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/success', (req, res) => {
  res.sendFile(path.join(__dirname, 'aftermath', 'success', 'index.html'));
});

app.get('/fail', (req, res) => {
  res.sendFile(path.join(__dirname, 'aftermath', 'fail', 'index.html'));
});

app.get('/draw', (req, res) => {
  res.sendFile(path.join(__dirname, 'aftermath', 'draw', 'index.html'));
});

app.get('/app', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
