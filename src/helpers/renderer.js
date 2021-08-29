import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { renderRoutes } from 'react-router-config';
import Routes from '../Routes';

export default (req) => {
  // 把component render 變成 string
  const content = renderToString(
    <StaticRouter location={req.path}>
      <div>{renderRoutes(Routes)}</div>
    </StaticRouter>
  );

  return `
    <html>
      <body>
        <div id="root">${content}</div>
        <script src="./bundle.js"></script>
      </body>
    </html>
  `;
};
