import { LiveReload, Outlet, Links, Scripts } from "@remix-run/react";
import { useState, useEffect } from "react";
import type { LinksFunction } from "@remix-run/node";
import { useNavigate } from 'react-router-dom';
import stylesheet from "~/tailwind.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export default function App() {

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
        />
        <Links />
      </head>
      <body className="bg-gradient-to-tr from-fitalyst-green to-fitalyst-orange no-scrollbar h-[200vh]">
        <LiveReload />
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}