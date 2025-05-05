const fs = require('fs');
const path = require('path');
const {
  parse
} = require('csv');
module.exports = {
  watched: null,
  output: null,
  processed: null,
  // setter of watched variable
  setWatched: function (watch) {
    this.watched = watch;
  },
  // setter of output variable
  setOutput: function (out) {
    this.output = out;
  },
  // setter of processed variable
  setProcessed: function (proc) {
    this.processed = proc;
  },
  processChange: function (file) {
    // use ouput variable to set the path of the outputFile (json output)
    const outputFile = path.resolve(this.output, path.basename(file).replace('.csv', '.json'));
    // use processed variable to set the path of the processedFile (using the base path : file)
    const processedFile = path.resolve(this.processed, path.basename(file));
    let rows = [];

    // read the content of the file provided (csv file)
    fs.createReadStream(file).pipe(parse({
      columns: true,
      trim: true
    }))
    // each row represents a new data
    .on('data', row => {
      rows.push(row);
    }).on('end', () => {
      fs.rename(file, processedFile, err => {
        if (err) {
          return;
        }

        // convert in JSON format the output message telling the file is now parsed
        fs.writeFile(outputFile, JSON.stringify(rows, null, 2), err => {
          if (err) {
            return;
          }
          console.info('\x1b[38;2;0;0;170m%s\x1b[0m', `Parsed ${file}`);
        });
      });
    }).on('error', err => {});
  }
};