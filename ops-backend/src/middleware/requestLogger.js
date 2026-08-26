import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

console.log("Path:::::::: ", path.dirname(fileURLToPath(import.meta.url)))
// Path::::::::  C:\Projects\MERN\R-MERN-Aug2026\ops-backend\src\middleware

let logDirectory = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', '..', 'logs');
logDirectory = path.join(logDirectory, 'requestlogs');
const logFile = path.join(logDirectory, 'requests.log');

fs.mkdirSync(logDirectory, { recursive: true });

const requestLogger = (req, res, next) => {
  const logEntry = `${new Date().toISOString()} ${req.ip} ${req.method} ${req.originalUrl}\n`;
//   fs.writeFileSync(logFile, logEntry, { flag: 'w' }); // It will override the existing content of the file with the new log entry
  fs.appendFile(logFile, logEntry, (error) => {
    if (error) {
      next(error); //To pass the error to the next middleware for error handling
      return;
    }

    next(); //To pass the control to the next middleware
  });
};

export default requestLogger;
