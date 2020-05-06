const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
const { relative, basename } = require("path");
const { readFileSync } = require("fs");
const sourceMapSupport = require("source-map-support");

require("dotenv").config();
global.db = require("./db");

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    generateDevelopmentSourceMaps();
  }

  return Object.assign({}, defaultConfig, {
    env: {
      MY_ENV: process.env.MY_ENV,
    },
  });
};

/*
 * Override the built-in source map logic to ensure accurate line
 * numbers on both client and server errors.
 *
 * I resorted to this because I couldn't find a strictly-webpack configuration
 * that gave accurate results on both sides of the application.
 *
 * Source: https://github.com/zeit/next.js/issues/5307#issuecomment-515643166
 */
function generateDevelopmentSourceMaps() {
  return sourceMapSupport.install({
    retrieveSourceMap: function (source) {
      if (source.indexOf(".next") > -1) {
        const rel = relative(process.cwd(), source);
        const mapPath = `${rel}.map`;
        return {
          url: basename(rel),
          map: readFileSync(mapPath, "utf8"),
        };
      } else {
        return null;
      }
    },
  });
}
